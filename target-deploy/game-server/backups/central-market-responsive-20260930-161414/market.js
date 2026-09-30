(function () {
  'use strict';
  var state = null, storage = 1, view = 'market', selectedObject = 0, selectedPrice = 0, busy = false, loading = false, modalAction = null, searchTimer, warehouseQuery = '';
  var query = { q: '', category: 'All Items', sub: 'All', filter: 'all', page: 1, variant: '', sort: 'name', orderPage: 1, historyPage: 1, orderFilter: 'all', historyFilter: 'all' };
  var categories = ['All Items', 'Weapons', 'Armor', 'Accessories', 'Enhancement', 'Materials', 'Consumables', 'Stigmas', 'Other'];
  var session = (location.search.match(/[?&](?:session_id|token)=([^&]*)/) || [null, ''])[1];
  function byId(id) { return document.getElementById(id); }
  function html(s) { return String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;'); }
  function money(n) { return String(n == null ? 0 : Math.floor(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ','); }
  function volume(n) { return money(Math.floor(n / 10)) + (n % 10 ? '.' + n % 10 : ''); }
  function date(n) { return new Date(n).toLocaleString(); }
  var iconBounds = {};
  window.marketIconReady = function (img) {
    var key = img.src, bounds = iconBounds[key], width = img.naturalWidth, height = img.naturalHeight;
    if (!width || !height) return;
    if (!bounds) {
      try {
        var canvas = document.createElement('canvas'), context, pixels, x, y, left = width, top = height, right = 0, bottom = 0;
        canvas.width = width; canvas.height = height; context = canvas.getContext('2d'); context.drawImage(img, 0, 0);
        pixels = context.getImageData(0, 0, width, height).data;
        for (y = 0; y < height; y++) for (x = 0; x < width; x++) if (pixels[(y * width + x) * 4 + 3] > 0) {
          left = Math.min(left, x); top = Math.min(top, y); right = Math.max(right, x + 1); bottom = Math.max(bottom, y + 1);
        }
        bounds = right > left && bottom > top ? [left, top, Math.max(right - left, bottom - top)] : [0, 0, Math.max(width, height)];
        iconBounds[key] = bounds;
      } catch (e) { return; }
    }
    img.style.width = width * 100 / bounds[2] + '%'; img.style.height = height * 100 / bounds[2] + '%';
    img.style.left = -bounds[0] * 100 / bounds[2] + '%'; img.style.top = -bounds[1] * 100 / bounds[2] + '%';
  };
  // The client's browser classifies this URI as its native item-tooltip link.
  function tooltipLink(i) { return 'nc://aion.ItemInfo/ItemTooltip?' + (+i.item_id); }
  function image(i) { return '<a class="item-icon" href="' + tooltipLink(i) + '" title="' + tooltipLink(i) + '" onclick="return false" tabindex="-1" aria-hidden="true"><img src="/market/media/icons/' + i.item_id + '.png" alt="" onload="marketIconReady(this)" onerror="this.style.visibility=\'hidden\'"></a>'; }
  function name(i) { return (i.enchant ? '+' + i.enchant + ' ' : '') + i.name + (i.tempering ? ' · Tempering +' + i.tempering : ''); }
  function fields(extra) { var a = {}, k; for (k in query) if (query.hasOwnProperty(k)) a[k] = query[k]; a.session_id = decodeURIComponent(session); for (k in extra) if (extra.hasOwnProperty(k)) a[k] = extra[k]; return a; }
  function encode(a) { var out = [], k; for (k in a) if (a.hasOwnProperty(k)) out.push(encodeURIComponent(k) + '=' + encodeURIComponent(a[k])); return out.join('&'); }
  function status(text, error) { byId('status').innerHTML = html(text); byId('connection-dot').className = 'connection-dot' + (error ? ' error' : ''); }
  function request(method, url, data, done) {
    var x = new XMLHttpRequest(), delivered = false;
    x.open(method, url, true); if (method === 'POST') x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    x.onreadystatechange = function () { if (x.readyState !== 4 || delivered) return; delivered = true; var r; try { r = JSON.parse(x.responseText); } catch (e) { r = { error: 'Central Market could not confirm this request. Refresh Warehouse.' }; } done(x.status === 200, r); };
    x.onerror = function () { if (delivered) return; delivered = true; done(false, { error: 'Connection lost. Refresh Warehouse before another transfer.' }); };
    var timer = setTimeout(function () { if (delivered) return; delivered = true; x.abort(); done(false, {error: 'Request timed out. Refresh Warehouse to check the result.'}); }, 30000);
    var originalDone = done; done = function (ok, r) { clearTimeout(timer); originalDone(ok, r); };
    x.send(method === 'POST' ? encode(data) : null);
  }
  function refresh() {
    if (busy || loading) return;
    loading = true; byId('refresh').disabled = true;
    request('GET', '/market/state?' + encode(fields({})), null, function (ok, r) {
      loading = false; byId('refresh').disabled = false;
      if (!ok) { status(r.error, true); return; }
      state = r; query.page = r.page; render(); status('Warehouse updated · ' + date(r.serverTime));
    });
  }
  function act(a) {
    if (busy || !state) return;
    busy = true; byId('dialog-confirm').disabled = true;
    var body = fields(a); body.request = state.request;
    status('Processing ' + (a.action === 'transfer' ? 'item transfer' : a.action) + '…');
    request('POST', '/market/action', body, function (ok, r) {
      busy = false; byId('dialog-confirm').disabled = false;
      if (!ok) { byId('dialog-error').innerHTML = html(r.error); status(r.error, true); refresh(); return; }
      state = r; closeDialog(); render(); status(r.notice || 'Warehouse updated.');
    });
  }
  function currentStorage() { var i; if (!state) return null; for (i = 0; i < state.storages.length; i++) if (state.storages[i].id === storage) return state.storages[i]; return state.storages[0]; }
  function selectedItem() { var s = currentStorage(), i; if (!s) return null; for (i = 0; i < s.items.length; i++) if (s.items[i].object === selectedObject) return s.items[i]; return null; }
  function render() {
    byId('character').innerHTML = html(state.player) + ' · Account Market Warehouse';
    byId('balance').innerHTML = money(state.balance) + ' Kinah'; byId('reserved').innerHTML = 'Reserved ' + money(state.reservedKinah) + ' Kinah';
    byId('volume').innerHTML = volume(state.volume) + ' / ' + volume(state.volumeLimit) + ' VT';
    byId('volume-fill').style.width = Math.min(100, state.volume * 100 / state.volumeLimit) + '%';
    byId('return-rate').innerHTML = state.returnPercent + '% return'; byId('proceeds').innerHTML = money(state.netProceeds) + ' Kinah'; byId('collect').disabled = !state.proceeds;
    var active = 0, i; for (i = 0; i < state.orders.length; i++) if (state.orders[i].state === 'OPEN' || state.orders[i].state === 'QUEUED') active++;
    byId('order-count').innerHTML = state.activeOrders || ''; byId('order-count').style.display = state.activeOrders ? 'inline-block' : 'none';
    byId('notification-count').innerHTML = state.notifications.length || ''; byId('notification-count').style.display = state.notifications.length ? 'inline-block' : 'none';
    renderStorage(); renderCatalog(); renderDetail(); renderOrders(); renderHistory(); renderNotifications();
  }
  function renderStorage() {
    var s = currentStorage(), text = '', i, item, visible = 0, grid = byId('storage-grid'), oldScroll = grid.scrollTop;
    byId('capacity').innerHTML = s.id === 125 ? s.items.length + ' stacks' : s.items.length + ' / ' + s.limit;
    byId('source-kinah').innerHTML = s.id === 125 ? 'Market Warehouse' : s.name + ' ' + money(s.kinah);
    byId('deposit-kinah').disabled = s.id === 125; byId('withdraw-kinah').disabled = s.id === 125;
    for (i = 0; i < s.items.length; i++) {
      item = s.items[i]; if (name(item).toLowerCase().indexOf(warehouseQuery.toLowerCase()) < 0) continue; visible++;
      text += '<div tabindex="0" role="button" aria-label="' + html(name(item) + ', quantity ' + item.quantity + (item.reserved ? ', listed for sale' : '')) + '" draggable="' + (!item.reserved) + '" class="slot' + (item.object === selectedObject ? ' selected' : '') + (item.reserved ? ' reserved' : '') + '" data-object="' + item.object + '">' + image(item) + (item.enchant ? '<span class="enchant">+' + item.enchant + '</span>' : '') + '<span class="quantity">' + (item.quantity > 1 ? money(item.quantity) : '') + '</span></div>';
    }
    if (!warehouseQuery) for (i = visible; i < Math.max(30, s.limit || visible + 6); i++) text += '<div class="slot empty"></div>';
    if (!visible && warehouseQuery) text = '<p class="empty-list">No items found.</p>';
    grid.innerHTML = text; grid.scrollTop = oldScroll;
    item = selectedItem(); text = '<span>Select an item to transfer or register a sale.</span>';
    if (item) text = '<strong class="quality-' + html(item.quality) + '">' + html(name(item)) + '</strong>' + (item.reserved ? '<small>Reserved for a sale listing. Cancel it in My Orders.</small>' : '<button id="transfer-item">Transfer</button>' + (s.id === 125 ? '<button id="sell-item" class="primary">Register Sale</button>' : item.tradeable ? '<button id="market-deposit">Market Warehouse</button>' : ''));
    byId('storage-item').innerHTML = text;
    if (byId('transfer-item')) byId('transfer-item').onclick = function () { transfer(item); };
    if (byId('sell-item')) byId('sell-item').onclick = function () { chooseVariant(item.variant, function () { sell(item); }); };
    if (byId('market-deposit')) byId('market-deposit').onclick = function () { transfer(item, 125); };
    var slots = grid.querySelectorAll('[data-object]');
    for (i = 0; i < slots.length; i++) (function (el) {
      el.onclick = function () { selectedObject = +el.getAttribute('data-object'); renderStorage(); };
      el.onkeydown = function (e) { if (e.keyCode === 13 || e.keyCode === 32) { e.preventDefault(); el.onclick(); } };
      el.ondblclick = function () { selectedObject = +el.getAttribute('data-object'); var item = selectedItem(); if (!item.reserved) transfer(item, storage === 125 ? 0 : 125); };
      el.ondragstart = function (e) { var item = findObject(+el.getAttribute('data-object')); if (item.reserved) { e.preventDefault(); return; } e.dataTransfer.setData('text/plain', item.object); };
    }(slots[i]));
  }
  function findObject(id) { var s = currentStorage(), i; for (i = 0; i < s.items.length; i++) if (s.items[i].object === id) return s.items[i]; return null; }
  function renderCatalog() {
    var list = '', cats = '', i, item, price, change;
    for (i = 0; i < categories.length; i++) cats += '<button class="' + (query.category === categories[i] ? 'active' : '') + '" data-category="' + html(categories[i]) + '">' + html(categories[i]) + '</button>';
    byId('categories').innerHTML = cats; byId('results').innerHTML = money(state.total) + ' items';
    var sub = '<option value="All">All types</option>'; for (i = 0; i < state.subcategories.length; i++) sub += '<option value="' + html(state.subcategories[i]) + '">' + html(gameTerm(state.subcategories[i])) + '</option>';
    byId('sub').innerHTML = sub; byId('sub').value = query.sub;
    for (i = 0; i < state.catalog.length; i++) {
      item = state.catalog[i]; price = item.base_price || 0; change = price - (item.previous_price || price);
      list += '<div tabindex="0" role="button" class="product' + (query.variant.split(':')[0] === String(item.item_id) ? ' selected' : '') + '" data-item="' + item.item_id + '">' + image(item) + '<span class="item-name quality-' + html(item.quality) + '">' + html(item.name) + '</span><small>' + html(gameTerm(item.group)) + ' · Lv. ' + item.level + '</small><span class="stock">' + money(item.stock) + '</span><span class="price">' + money(price) + (change ? '<small class="trend ' + (change > 0 ? 'up' : 'down') + '">' + (change > 0 ? '↑' : '↓') + ' ' + money(Math.abs(change)) + '</small>' : '') + '</span>' + (isFavorite(item.item_id) ? '<span class="favorite-star">★</span>' : '') + '</div>';
    }
    byId('catalog-list').innerHTML = list || '<p class="empty-list">No market items found.</p>';
    byId('page').innerHTML = state.page + ' / ' + Math.max(1, Math.ceil(state.total / 24)); byId('previous').disabled = state.page <= 1; byId('next').disabled = state.page * 24 >= state.total;
    var buttons = byId('categories').getElementsByTagName('button');
    for (i = 0; i < buttons.length; i++) buttons[i].onclick = function () { query.category = this.getAttribute('data-category'); query.sub = 'All'; query.page = 1; refresh(); };
    var products = byId('catalog-list').querySelectorAll('[data-item]');
    for (i = 0; i < products.length; i++) products[i].onclick = function () { chooseVariant(this.getAttribute('data-item') + ':0:0'); };
    for (i = 0; i < products.length; i++) products[i].onkeydown = function (e) { if (e.keyCode === 13) this.onclick(); };
  }
  function chooseVariant(key, done) {
    if (busy || loading) return; query.variant = key; selectedPrice = 0;
    loading = true;
    request('GET', '/market/state?' + encode(fields({})), null, function (ok, r) { loading = false; if (!ok) { status(r.error, true); return; } state = r; render(); if (done) done(); });
  }
  function isFavorite(id) { var i; for (i = 0; i < state.favorites.length; i++) if (state.favorites[i] === id) return true; return false; }
  function renderDetail() {
    var d = state.selected, text, i, level, sellCount, buyCount, book, variants = '';
    byId('detail').style.display = d && view === 'market' ? '' : 'none';
    document.querySelector('.market-body').style.bottom = d && view === 'market' ? byId('detail').offsetHeight + 'px' : '0';
    if (!d) { byId('detail').innerHTML = '<div class="empty-detail"><span class="market-emblem">◇</span><h2>Select an item</h2><p>Check prices, buy orders and sale listings.</p></div>'; return; }
    if (!selectedPrice || d.levels.indexOf(selectedPrice) < 0) selectedPrice = d.base_price;
    for (i = 0; i < d.variants.length; i++) { var v = d.variants[i]; variants += '<option value="' + html(v.variant) + '">' + '+' + v.enchant + (v.tempering ? ' · Tempering +' + v.tempering : '') + (v.variant.split(':').length > 3 ? ' · Modified item ' + (i + 1) : '') + '</option>'; }
    text = '<div class="detail-head">' + image(d) + '<h2 class="quality-' + html(d.quality) + '">' + html(d.name) + '</h2><select id="variant-select" aria-label="Item enchantment and attributes">' + variants + '</select><button class="favorite" id="favorite" title="' + (isFavorite(d.item_id) ? 'Remove from Favorites' : 'Add to Favorites') + '">' + (isFavorite(d.item_id) ? '★' : '☆') + '</button><button id="close-detail" class="close-detail" title="Close item details">×</button></div><div class="detail-main"><div class="price-book"><div class="book-heading"><span>Sale qty</span><b>Buy qty</b><strong>Price</strong></div>';
    var displayLevels = d.levels.slice(0);
    for(i = 0; i < d.book.length; i++) if(displayLevels.indexOf(d.book[i].price) < 0) displayLevels.push(d.book[i].price);
    displayLevels.sort(function(a,b){return a-b;});
    for (i = displayLevels.length - 1; i >= 0; i--) {
      level = displayLevels[i]; sellCount = 0; buyCount = 0;
      for (var j = 0; j < d.book.length; j++) { book = d.book[j]; if (book.price === level) { if (book.side === 'S') sellCount += book.quantity; else buyCount += book.quantity; } }
      text += '<div' + (d.levels.indexOf(level) >= 0 ? ' tabindex="0" role="button" data-price="' + level + '"' : ' title="Existing orders outside the current price band"') + ' class="book-row' + (level === selectedPrice ? ' chosen' : '') + '"><span class="sell-count">' + (sellCount ? money(sellCount) : '—') + '</span><span class="buy-count">' + (buyCount ? money(buyCount) : '—') + '</span><span class="price-value">' + money(level) + '</span></div>';
    }
    text += '</div><div class="buy-controls"><div class="summary">Base price <strong>' + money(d.base_price) + ' Kinah</strong> · ' + money(d.traded) + ' traded</div><div class="summary">Warehouse volume <strong>' + d.volume / 10 + ' VT</strong> each</div><button class="primary" id="buy-item">Buy / Place Order</button><button id="preview">Item Preview</button><button id="item-stats">Item Details</button><div class="chart"><span class="chart-label">30-day price history · ' + (d.queue.length ? 'Registration queue: ' + money(d.queue[0].quantity) + ' items' : 'Completed trades') + '</span><canvas id="price-chart" width="320" height="65"></canvas></div></div></div>';
    byId('detail').innerHTML = text; byId('variant-select').value = query.variant;
    byId('variant-select').onchange = function () { chooseVariant(this.value); };
    byId('favorite').onclick = function () { act({ action: 'favorite', item: d.item_id }); };
    byId('close-detail').onclick = function () { query.variant = ''; refresh(); };
    byId('buy-item').onclick = buy;
    byId('preview').onclick = function () { if (!window.AionObject || !window.AionObject.ItemPreview) { status('Item Preview is available in Aion.', true); return; } try { window.AionObject.ItemPreview(+d.item_id); } catch (e) { status('Item Preview could not open.', true); } };
    byId('item-stats').onclick = function () { details(d); };
    var levels = byId('detail').querySelectorAll('[data-price]');
    for (i = 0; i < levels.length; i++) { levels[i].onclick = function () { selectedPrice = +this.getAttribute('data-price'); renderDetail(); }; levels[i].onkeydown = function (e) { if (e.keyCode === 13) this.onclick(); }; }
    var chosen = byId('detail').querySelector('.chosen'); if (chosen) chosen.parentNode.scrollTop = Math.max(0, chosen.offsetTop - 62);
    drawChart(d.chart);
  }
  function drawChart(points) {
    var canvas = byId('price-chart'), c = canvas.getContext('2d'), w = canvas.width, h = canvas.height, i, min, max;
    c.clearRect(0, 0, w, h); c.font = '10px Tahoma';
    if (!points.length) { c.fillStyle = '#8298a4'; c.textAlign = 'center'; c.fillText('No completed trades yet', w / 2, h / 2); return; }
    min = max = points[0].price; for (i = 1; i < points.length; i++) { min = Math.min(min, points[i].price); max = Math.max(max, points[i].price); }
    for (i = 0; i < 3; i++) { c.strokeStyle = '#344955'; c.beginPath(); c.moveTo(0, 8 + i * 20); c.lineTo(w, 8 + i * 20); c.stroke(); }
    c.strokeStyle = '#c5aa72'; c.lineWidth = 1.5; c.beginPath();
    for (i = 0; i < points.length; i++) { var x = 5 + i * (w - 10) / Math.max(1, points.length - 1), y = max === min ? 29 : 8 + (max - points[i].price) * 43 / (max - min); if (!i) c.moveTo(x, y); else c.lineTo(x, y); }
    c.stroke(); c.fillStyle = '#adbfca'; c.textAlign = 'left'; c.fillText(money(min) + ' – ' + money(max), 5, h - 2);
    canvas.onmousemove = function (e) { var r = canvas.getBoundingClientRect(), index = Math.min(points.length - 1, Math.max(0, Math.round((e.clientX - r.left) * (points.length - 1) / r.width))), p = points[index]; canvas.title = new Date(p.day * 86400000).toLocaleDateString() + ' · ' + money(p.price) + ' Kinah · ' + money(p.volume) + ' traded'; };
  }
  function itemHeader(i) { return '<div class="confirm-item">' + image(i) + html(name(i)) + '<small>' + html(gameTerm(i.group || '')) + '</small></div>'; }
  function positionDialog() {
    if (byId('dialog-shade').style.display !== 'block') return;
    var dialog = byId('dialog'), width = document.documentElement.clientWidth, height = document.documentElement.clientHeight;
    dialog.style.width = Math.min(460, width - 32) + 'px';
    byId('dialog-body').style.maxHeight = Math.max(100, height - 230) + 'px';
    dialog.style.left = Math.max(16, Math.round((width - dialog.offsetWidth) / 2)) + 'px';
    dialog.style.top = Math.max(16, Math.round((height - dialog.offsetHeight) / 2)) + 'px';
  }
  function openDialog(title, body, action, button) { byId('dialog-cancel').innerHTML = action ? 'Cancel' : 'Close'; byId('dialog-title').innerHTML = html(title); byId('dialog-body').innerHTML = body; byId('dialog-error').innerHTML = ''; byId('dialog-confirm').innerHTML = button || 'Confirm'; byId('dialog-confirm').disabled = false; byId('dialog-confirm').style.display = action ? '' : 'none'; modalAction = action; byId('dialog-shade').style.display = 'block'; positionDialog(); var input = byId('dialog-body').querySelector('input'); if (input) { input.focus(); input.select(); } }
  function closeDialog() { if (busy) return; byId('dialog-shade').style.display = 'none'; modalAction = null; }
  function quantity(max) { return '<label for="quantity">Quantity · available ' + money(max) + '</label><input id="quantity" type="text" value="1" maxlength="12"><button id="max-quantity" type="button" style="margin-top:5px">Max</button>'; }
  function quantityValue(max) { var s = byId('quantity').value; if (!/^\d+$/.test(s) || +s < 1 || +s > max) { byId('dialog-error').innerHTML = 'Quantity must be between 1 and ' + money(max) + '.'; return 0; } return +s; }
  function bindMax(max) { byId('max-quantity').onclick = function () { byId('quantity').value = max; var event = document.createEvent('Event'); event.initEvent('input', true, true); byId('quantity').dispatchEvent(event); }; }
  function transfer(i, target) {
    if (i.reserved) return;
    var options = '', j, s;
    for (j = 0; j < state.storages.length; j++) { s = state.storages[j]; if (s.id !== i.source && (s.id !== 125 || i.tradeable)) options += '<option value="' + s.id + '">' + html(s.name) + '</option>'; }
    openDialog('Transfer Item', itemHeader(i) + quantity(i.quantity) + '<label for="target">Destination</label><select id="target">' + options + '</select>', function () { var q = quantityValue(i.quantity); if (q) act({ action: 'transfer', source: i.source, target: byId('target').value, object: i.object, quantity: q }); }, 'Transfer');
    if (target != null) byId('target').value = String(target); bindMax(i.quantity);
  }
  function priceOptions(d) { var out = '', i; for (i = 0; i < d.levels.length; i++) out += '<option value="' + d.levels[i] + '">' + money(d.levels[i]) + ' Kinah</option>'; return out; }
  function buy() {
    var d = state.selected, max = d.maxQuantity;
    openDialog('Buy / Place Order', itemHeader(d) + '<label for="unit-price">Unit price</label><select id="unit-price">' + priceOptions(d) + '</select>' + quantity(max) + '<div class="cost">Reserved Kinah<strong id="total-cost"></strong></div><p style="font-size:11px;color:#a4b7c1;margin-top:9px">Available items are bought immediately. Unfilled quantity stays in My Orders. Purchases enter Market Warehouse.</p>', function () { var q = quantityValue(max), price = +byId('unit-price').value; if (!q) return; if (q * price > state.balance) { byId('dialog-error').innerHTML = 'Not enough Kinah in Market Warehouse.'; return; } act({ action: 'buy', variant: query.variant, quantity: q, price: price }); }, 'Buy / Place Order');
    byId('unit-price').value = selectedPrice; bindMax(max); bindCost(false);
  }
  function sell(i) {
    var d = state.selected, max = Math.min(i.quantity, d.maxQuantity);
    openDialog('Register Sale', itemHeader(i) + '<label for="unit-price">Unit price</label><select id="unit-price">' + priceOptions(d) + '</select>' + quantity(max) + '<div class="cost">Proceeds after tax<strong id="total-cost"></strong></div><p style="font-size:11px;color:#a4b7c1;margin-top:9px">Items stay reserved until sold or cancelled. Collect proceeds in Market Warehouse. High-value listings enter a 15-minute registration queue.</p>', function () { var q = quantityValue(max); if (q) act({ action: 'sell', object: i.object, variant: i.variant, quantity: q, price: byId('unit-price').value }); }, 'Register Sale');
    byId('unit-price').value = selectedPrice; bindMax(max); bindCost(true);
  }
  function bindCost(sale) { function calculate() { var price = +byId('unit-price').value, qty = +byId('quantity').value, total = price * qty, rate = state.returnPercent === 84.5 ? 845 : 650; if(sale) total = Math.floor(total / 1000) * rate + Math.floor((total % 1000) * rate / 1000); byId('total-cost').innerHTML = money(total) + ' Kinah'; } byId('quantity').oninput = calculate; byId('unit-price').onchange = calculate; calculate(); }
  function details(i) {
    var text = itemHeader(i) + '<p style="margin-top:12px">Lv. ' + i.level + ' · ' + html(gameTerm(i.race)) + ' · ' + i.volume / 10 + ' VT</p>', j, k;
    if (i.damage) text += '<p>Weapon damage ' + html(i.damage) + '</p>'; if (i.sockets) text += '<p>Manastone sockets ' + i.sockets + '</p>';
    for (j = 0; j < i.stats.length; j++) text += '<p>' + html(i.stats[j].name) + ' ' + html(i.stats[j].value) + '</p>';
    for (k in (i.attributes || {})) if (i.attributes.hasOwnProperty(k)) text += '<p>' + html(k) + ': ' + html(i.attributes[k]) + '</p>';
    openDialog('Item Details', text, null); byId('dialog-cancel').innerHTML = 'Close';
  }
  function renderOrders() {
    var filter = byId('order-filter').value, text = '', i, o;
    for (i = 0; i < state.orders.length; i++) {
      o = state.orders[i]; if (filter === 'B' || filter === 'S') { if (o.side !== filter) continue; } else if (filter === 'open' && o.state !== 'OPEN' && o.state !== 'QUEUED') continue;
      text += '<div class="table-row">' + image(o) + '<strong>' + html(orderName(o)) + '</strong><span class="state ' + o.state + '">' + (o.side === 'B' ? 'Buy order' : 'Sale listing') + ' · ' + stateName(o.state) + '</span><small>' + money(o.remaining) + ' remaining / ' + money(o.quantity) + ' · ' + money(o.price) + ' Kinah each' + (o.state === 'QUEUED' ? ' · Registers ' + date(o.available_at) : ' · ' + date(o.created_at)) + '</small>' + (o.state === 'OPEN' || o.state === 'QUEUED' ? '<button data-cancel="' + o.id + '">Cancel</button>' : '') + '</div>';
    }
    byId('orders-list').innerHTML = text || '<p class="empty-list">No orders to display.</p>';
    pagination('order-pagination','orderPage',state.orderPage,state.orderTotal);
    var buttons = byId('orders-list').querySelectorAll('[data-cancel]');
    for (i = 0; i < buttons.length; i++) buttons[i].onclick = function () { var id = +this.getAttribute('data-cancel'); openDialog('Cancel Order', '<p>Remaining items or reserved Kinah return to Market Warehouse.</p>', function () { act({ action: 'cancel', order: id }); }, 'Cancel Order'); };
  }
  function renderHistory() {
    var filter = byId('history-filter').value, text = '', i, t;
    if (filter === 'collections') { for (i = 0; i < state.collections.length; i++) { t = state.collections[i]; text += '<div class="table-row"><strong>Collected ' + money(t.net) + ' Kinah</strong><small>Sale proceeds ' + money(t.gross) + ' · Market tax ' + money(t.gross - t.net) + '</small><small>' + date(t.collected_at) + '</small></div>'; } }
    else { for (i = 0; i < state.history.length; i++) { t = state.history[i]; if (filter !== 'all' && t.direction !== filter) continue; text += '<div class="table-row">' + image(t) + '<strong>' + html(orderName(t)) + '</strong><span class="state">' + t.direction + ' · ' + money(t.quantity) + '</span><small>' + money(t.unit_price) + ' Kinah each · ' + money(t.unit_price * t.quantity) + ' Kinah total · ' + date(t.traded_at) + '</small></div>'; } }
    byId('history-list').innerHTML = text || '<p class="empty-list">No completed trades to display.</p>';
    pagination('history-pagination','historyPage',state.historyPage,state.historyTotal);
  }
  function pagination(id, key, page, total) {
    var pages=Math.max(1,Math.ceil(total/50));
    byId(id).innerHTML='<button class="page-back"'+(page<=1?' disabled':'')+'>‹</button><span>'+page+' / '+pages+'</span><button class="page-forward"'+(page>=pages?' disabled':'')+'>›</button>';
    byId(id).querySelector('.page-back').onclick=function(){query[key]=page-1;refresh();};
    byId(id).querySelector('.page-forward').onclick=function(){query[key]=page+1;refresh();};
  }
  function renderNotifications() {
    var text='',i,o;for(i=0;i<state.notifications.length;i++){o=state.notifications[i];text+='<div class="table-row">'+image(o)+'<strong>'+html(orderName(o))+'</strong><span class="state QUEUED">Registration queue · '+money(o.remaining)+' items</span><small>'+money(o.price)+' Kinah each · Registers '+date(o.available_at)+'</small><button data-notification="'+html(o.variant)+'">View</button></div>';}
    byId('notifications-list').innerHTML=text||'<p class="empty-list">No items in the registration queue.</p>';
    var buttons=byId('notifications-list').querySelectorAll('[data-notification]');for(i=0;i<buttons.length;i++)buttons[i].onclick=function(){document.querySelector('[data-view="market"]').onclick();chooseVariant(this.getAttribute('data-notification'));};
  }
  function orderName(o) { return (o.enchant ? '+' + o.enchant + ' ' : '') + (o.name || ('Item ' + o.item_id)) + (o.tempering ? ' · Tempering +' + o.tempering : ''); }
  function stateName(s) { return { OPEN: 'Active', FILLED: 'Completed', CANCELLED: 'Cancelled', QUEUED: 'Registration queue' }[s] || s; }
  function gameTerm(s) { var terms = { PC_ALL: 'All factions', GUN: 'Pistol', CANNON: 'Aethercannon', KEYBLADE: 'Aether Key', TAMPERING: 'Tempering Solution', ENCHANTMENT: 'Enchantment Stone', RB: 'Cloth', LT: 'Leather', CH: 'Chain', PL: 'Plate', CL: 'Costume', HEAD: 'Headwear', TORSO: 'Chest Armor', PANTS: 'Leg Armor', SHOES: 'Foot Armor', GLOVE: 'Gloves', SHOULDER: 'Shoulders', MULTISLOT: 'Costume' }; if(terms[s]) return terms[s]; var parts = String(s).split('_'), i; for (i = 0; i < parts.length; i++) parts[i] = terms[parts[i]] || parts[i].charAt(0) + parts[i].substring(1).toLowerCase(); return parts.join(' '); }
  var tabs = document.querySelectorAll('[data-storage]'), i;
  for (i = 0; i < tabs.length; i++) (function (button) {
    button.onclick = function () { if (busy) return; var j; storage = +button.getAttribute('data-storage'); selectedObject = 0; for (j = 0; j < tabs.length; j++) tabs[j].className = tabs[j] === button ? 'active' : ''; if (state) renderStorage(); };
    button.ondragover = function (e) { e.preventDefault(); };
    button.ondrop = function (e) { e.preventDefault(); var item = findObject(+e.dataTransfer.getData('text/plain')); if (item) transfer(item, +button.getAttribute('data-storage')); };
  }(tabs[i]));
  var views = document.querySelectorAll('[data-view]');
  for (i = 0; i < views.length; i++) views[i].onclick = function () { view = this.getAttribute('data-view'); var j; for (j = 0; j < views.length; j++) views[j].className = views[j] === this ? 'active' : ''; byId('market-view').style.display = view === 'market' ? '' : 'none'; byId('orders-view').style.display = view === 'orders' ? 'block' : 'none'; byId('history-view').style.display = view === 'history' ? 'block' : 'none'; byId('notifications-view').style.display = view === 'notifications' ? 'block' : 'none'; if(state) renderDetail(); };
  byId('warehouse-search').oninput = function () { warehouseQuery = this.value; if (state) renderStorage(); };
  byId('clear-warehouse').onclick = function () { warehouseQuery = ''; byId('warehouse-search').value = ''; renderStorage(); byId('warehouse-search').focus(); };
  byId('search').oninput = function () { clearTimeout(searchTimer); searchTimer = setTimeout(function () { query.q = byId('search').value; query.page = 1; refresh(); }, 300); };
  byId('search').onkeydown = function (e) { if (e.keyCode === 13) { clearTimeout(searchTimer); query.q = this.value; query.page = 1; refresh(); } };
  byId('clear-search').onclick = function () { byId('search').value = ''; query.q = ''; query.page = 1; refresh(); byId('search').focus(); };
  byId('save-search').onclick=function(){var term=byId('search').value.replace(/^\s+|\s+$/g,'');if(!term){status('Enter an item name to save.',true);return;}act({action:'saveSearch',term:term});};
  byId('saved-searches').onclick=function(){var text='',i;for(i=0;i<state.savedSearches.length;i++)text+='<div class="saved-row"><button data-search="'+i+'">'+html(state.savedSearches[i].term)+'</button><button data-remove="'+i+'" title="Remove search">×</button></div>';openDialog('Saved Searches',text||'<p>No saved searches. Enter an item name, then select ★.</p>',null);var buttons=byId('dialog-body').querySelectorAll('[data-search]');for(i=0;i<buttons.length;i++)buttons[i].onclick=function(){query.q=state.savedSearches[+this.getAttribute('data-search')].term;query.category='All Items';query.sub='All';query.page=1;byId('search').value=query.q;closeDialog();refresh();};buttons=byId('dialog-body').querySelectorAll('[data-remove]');for(i=0;i<buttons.length;i++)buttons[i].onclick=function(){act({action:'saveSearch',mode:'remove',term:state.savedSearches[+this.getAttribute('data-remove')].term});};};
  byId('filter').onchange = function () { query.filter = this.value; query.page = 1; refresh(); };
  byId('sub').onchange = function () { query.sub = this.value; query.page = 1; refresh(); };
  byId('previous').onclick = function () { query.page = Math.max(1, query.page - 1); refresh(); };
  byId('next').onclick = function () { query.page++; refresh(); };
  byId('order-filter').onchange = function () { query.orderFilter = this.value; query.orderPage = 1; refresh(); }; byId('history-filter').onchange = function () { query.historyFilter = this.value; query.historyPage = 1; refresh(); }; byId('sort').onchange = function () { query.sort = this.value; query.page = 1; refresh(); };
  byId('refresh').onclick = refresh; byId('dialog-close').onclick = closeDialog; byId('dialog-cancel').onclick = function () { closeDialog(); this.innerHTML = 'Cancel'; };
  byId('dialog-confirm').onclick = function () { if (modalAction && !busy) modalAction(); };
  byId('collect').onclick = function () { openDialog('Collect Sale Proceeds', '<div class="cost">Sale proceeds<strong>' + money(state.proceeds) + ' Kinah</strong></div><div class="cost">After market tax<strong>' + money(state.netProceeds) + ' Kinah</strong></div><p style="margin-top:12px">Proceeds enter Market Warehouse.</p>', function () { act({ action: 'collect' }); }, 'Collect'); };
  function transferKinah(direction) { var s = currentStorage(), value = byId('kinah-amount').value; if (!/^\d+$/.test(value) || +value < 1) { status('Enter a Kinah amount.', true); return; } openDialog(direction === 'deposit' ? 'Deposit Kinah' : 'Withdraw Kinah', '<div class="cost">Kinah<strong>' + money(+value) + '</strong></div><p style="margin-top:12px">' + html(s.name) + (direction === 'deposit' ? ' → Market Warehouse' : ' ← Market Warehouse') + '</p>', function () { act({ action: 'kinah', direction: direction, source: s.id, quantity: value }); }, direction === 'deposit' ? 'Deposit' : 'Withdraw'); }
  byId('deposit-kinah').onclick = function () { transferKinah('deposit'); }; byId('withdraw-kinah').onclick = function () { transferKinah('withdraw'); };
  document.onkeydown = function (e) { if (e.keyCode === 27) { if (byId('dialog-shade').style.display === 'block') closeDialog(); else if (query.variant) { query.variant = ''; refresh(); } } };
  window.onresize = function () { if (state) renderDetail(); positionDialog(); };
  for (i = 0; i < tabs.length; i++) tabs[i].className = +tabs[i].getAttribute('data-storage') === storage ? 'active' : '';
  refresh(); setInterval(function () { if (!busy && byId('dialog-shade').style.display !== 'block' && document.activeElement.tagName !== 'INPUT') refresh(); }, 15000);
}());
