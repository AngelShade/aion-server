# Installed modifications and remaining work

This is the continuity inventory for all conversations in this project. The user
requires later installations to retain earlier mods, including their recovery
records. Refresh evidence before installation; do not infer installation from a
source commit, an old staging package, or a backup directory alone.

Checked on 7 October 2026 against the actual client and server deployment.
`INSTALLED_MODS.json` records 31 current file hashes, 16 native/layout/recovery
checks, 70 client receipts, 86 server receipts and selected deployed settings.
These checks establish presence/preservation, not acceptance of every game flow.

| Feature | Current evidence / status | Preserve and remaining checks |
| --- | --- | --- |
| DXVK renderer, native graphics menu and cursor | Installed; all launcher preparation checks pass. Vulkan remains selected. | Keep cached graphics payload, three tracking records and graphics/cursor restore DLLs synchronized with every later native change. |
| High Quality settings, broad graphics package and PostFX | Installed; launcher verified the 128-archive broad package. `VisualOverhaul` and `GraphicsOverhaul` receipts remain. | Retain terrain/environment/effects, shader/layer files and renderer preferences. Visual acceptance is separate. |
| Free flight | Installed startup helper passes; existing server changes preserved. | Preserve encoded `g_freefly` and server permissions; actual zone flight remains a gameplay check. |
| Unified Inventory | Installed base/English movable searchable layout; deployed unified setting enabled. 180 base slots, up to 279. | Preserve native slot/search/scroll/effect-loop patches, expansion credit and saved item positions. |
| Expanded Character/Account Warehouses | Installed base/English search controls; deployed setting enabled, 360/540 slots. | Preserve native counts, both search panes, high-slot persistence and Legion Warehouse behavior. |
| Detached/movable Inventory, Equipment and Warehouse | Current base/English layouts have movable titles without forced alignment; companion patch retained all other DLL bytes. | Keep independent window lifetime, search/scroll positions and native docking fixes. |
| Black Cloud Marketplace/Kinah shop | Installed menu and native browser/auth route; existing deployed JAR retained. | Retain catalog/prices, upgrades, mail transactions, native previews and artwork; do not change balances as part of client work. |
| Central Market, storage, simulated traders and Broker | Installed menu/route; deployed broker and simulated-market options enabled. Market performance/custody/quantity receipts remain. | Retain storage selection, orders, escrow, collection, favorites, history, deferred icons and fixes to quantities/cached actions. |
| Native HUD Market/Shop shortcuts | `AionMarketShortcut.dll` present and preserved; receipt history retained. | Retain both HUD styles, positioning and native event routing. |
| Original client item icons, sprite/layout repairs and previews | `AionIconBridge.dll` retained; current index matches the exact installed Items archive length/hash. | Preserve native DDS decoding/sprite metadata, callback chaining, shop/market/pass icons and preview integration; no distributed extracted PNG substitute. |
| Native Wardrobe, artwork and equipment preview | Wardrobe XML, native Lua, icon/theme entries and browser route present. | Preserve unlock/apply/outfits, native tooltips, preview ownership/controls, theme and signing. |
| Signed Additional Functions and compact browser titles | Shop, Market, Wardrobe, Journey, Season Pass and Companion actions remain; all six native browser routes match expected hook code. | Keep compact auth/title handling, stock model key, separate addon key, bundled Lua/pet signatures and existing archive entries. |
| Choose Your Journey, Elyos/Asmodian entry and ceremony rewards | Menu/native journey route and deployed option present; journey/bootstrap/both-faction and ceremony receipts retained. | Keep native visibility/session callbacks, choice persistence, faction/class choices, mailed rewards, legacy duplicate protection and deferred normal ceremony turn-in rewards. |
| Aetherfall Season Pass | Menu/native route and ticket in both English HUDs present; server/pass/UI receipts retained. | Preserve rewards, claims, account persistence, previews, automatic refresh, artwork and native tooltips. |
| Remember Account & Password / return to login | English checkbox and all five initial/return native hooks match receipts; native DLL preserved. | Preserve opt-in vault behavior, password flag, notice reload, field placement, visibility transitions and typed edits. Never include credentials in inventories. |
| Speech bubble styles / native context menu | All seven native hooks match the last menu/artwork receipt; DLL present. | Retain custom artwork, styles, context menu, server metadata/ack handling and normal NPC/chat behavior. |
| Bundle opening without reuse cooldown | Client Items archive/index and server bundle-opening receipts retained. | Cover all 4,125 bundles; keep native opening animation and concurrent-use guard; only reuse delay is removed. |
| Restored reward boxes | Existing restoration and deployed data retained by the incremental server patch. | Preserve exact IDs and class/faction outcomes. The broader PR #200/#211 source/schema migration is prepared work, not proven installed; see `DECOMPOSABLE_PR_REVIEW.md`. |
| Legacy Eltnen campaign and quest spawn repairs | Source/docs and prior deployment evidence retained; playerbot install preserved 3,249 unrelated JAR entries. | Preserve quest progress/reward timing, cinematic continuation, trigger/spawn repairs and instance handlers. Consult `LEGACY_ELTNEN_CAMPAIGNS.md` and `QUEST_SPAWN_REPAIRS.md`; reconfirm live behavior when touching them. |
| Legacy home-zone capture camps | Installed across all eight Eltnen/Heiron/Morheim/Beluslan camps: 47 height repairs, four exact ordinary-spawn overlaps removed, native specific guard hostility, captain-directed raids and NPC capture attribution. | Preserve `LegacyCampBattle`, three transplanted methods and five static XML repairs. All 166 native checks and 15 mod checks pass; full live raid/capture and client appearance remain pending. See `LEGACY_CAMP_REPAIR_20261004.md`. |
| Client-sourced motion/hit timing | Motion repair deployment backup remains; companion installer preserved the deployed projectile timing method. | Preserve actor-specific records rather than suppressing warnings. Four assetless test motions remain unresolved; see `MOTION_TIMES.md`. |
| Atomic AI reload, Idian Depths portals and Kromede | Installed live: complete registry publication, asynchronous reload, resilient portal rotations, 50/50 Fire Temple variant roll and completion-driven shared encounter/traps. | Preserve cumulative override plus the deployed Reload/instance scripts. Native checks pass; a fresh player-controlled Fire Temple run remains pending. See `AI_RELOAD_KROMEDE_20261004.md`. Final receipt `backups/playerbots-recruitment-20261004-102954-276296`; core rollback receipt `...102535-101269`. |
| Night Saendukal encounter | Source and target-deploy data staged: 21:00–04:00 spawn, giant-boss exclusion, level-31 boss skills, healing Shaman, guard-gated chest and named reward pools. GameServer is stopped; loaded-data and in-game acceptance have not run. | Preserve the 50% retreat and throne guard wave; the chest waits for all spawned guards and has four independent reward groups. No restart or live attach was performed. See `SAENDUKAL_NODIE_20261005.md`. |
| Giant Saendukal Strong Protection | Screenshot plus prior live inspection exposed stale `16415`/`16879` probabilities at 25%; the deployed core JAR lacked hit-count handling. A method-only 10-hit overlay and NPC probabilities 0 are installed on disk. GameServer remains stopped, so the update is not loaded. | Preserve the one-time 25% scripted cast, weak-map hit counter, installed class layout, and all 142 earlier override entries. In-game expiry and no-random-recast checks remain pending. Receipt `backups/saendukal-strong-protection-20261005-025825`; see `SAENDUKAL_STRONG_PROTECTION_20261005.md`. |
| Aetherfall login branding | Existing English login notice and client archives retained. | Preserve the announcement/server labels together with Remember Login. |
| Player Companions | Server/client installed; roster/schema, owned-offline recruitment, both generated models, PvE AI and dedicated panel are present. Native menu/signatures, server startup and public route checks passed. Live recruitment fix removes PvP/location/flight blockers and uses native combat time. | Preserve the cumulative `libs/playerbot-recruitment-fix.jar` override and its first position in the server launcher's classpath, including quest/care/gear and creation fixes. **Full system unfinished:** optimized class rotations, world quest/travel planning, broader encounter/PvP strategies, alliance topology and actual signed-in gameplay/menu/pet validation. See `PLAYERBOTS.md`. |
| Temporary Bot creation and maintenance | Dedicated-roster generated actors now match owner level and receive native class/role gear, skills and Stigmas, with automatic maintenance and tier progression. Historical level-1 choice is superseded in the UI. Owned account characters remain separate. | Latest receipt `backups/playerbots-recruitment-20261004-080311-450862`; native 210 build/tier cases, 16 actual maintenance ticks and 34 unchanged owned-alt fingerprints pass. Deferred recipe and strict creation initialization repairs are retained. Persisted creation/recruitment/re-login remain actual game acceptance checks. |
| Companion party command bar | Layout-2 installed on 4 October after the first layout's clipping was confirmed: native movable compact Attack/Follow/Stay bar, expandable Guard/Passive/Companions controls, hide-to-icon at the same movable anchor, saved position/mode and `/botbar`. | Retain `PlayerBotBar.lua/xml` and TOC entries in the signed addon, plus the native bridge mailbox. All commands use `.bot ... all`. Game.dll, UI archives, recovery baselines and server override unchanged. Real Lua and 60 native coordinate/title-hit checks passed; corrected appearance, dragging, bot orders and combined pet/menu behavior still require reopening Aion and in-game acceptance. |
| Companion management window | Installed tabbed Party/Roster/Create/Party quests layout with a compact party selector and one companion detail panel. Overview, Equipment, Quests, Care and Activity stay inside the same window. Roster search/filter/sort uses 12 entries per page; offline inspection/recruitment and unsaved care drafts are retained. | Three server media files only; receipt `backups/playerbots-ui-20261004-025259-127970`. Native Awesomium checks pass at 1280×900, 900×700 and 390×844 with 103 roster entries and 18 authenticated fixture actions. Client files, server JARs, cumulative override, launcher and configuration hashes retained. Server was stopped during installation; live HTTP/in-game acceptance remains pending startup and reopening the window. |
| Companion outfit transmog | **Staged/source-only**, reviewed/corrected 7 October as PB-CUSTOM-APPEARANCE-001. The Equipment tab applies a permanent compatible cube appearance to combat gear, restores the original look, and preserves it through upgrades. Only statless costumes are excluded from auto-gear; real clothing stats and native pending-item persistence survive. | Corrected package `target/playerbots-appearance/package-reviewed-20261007` supersedes package-v2. Full compile/16 effective-package checks pass; 144 prior entries retained. Server/client stay off; no attach or deployment. User in-game acceptance pending. See `PLAYERBOTS_APPEARANCE_20261006.md`. |
| Quest marker/name beside hovered mob tooltip | `D:/Proiecte/Project Restructure/Aion Quest Tooltip` currently contains only a builder and `QuestTooltipProbe.pak`; a finished installed implementation is not established. | Pending work. Preserve the intended contextual placement; do not report the prototype as a working game mod. |
| Browser modernization | Read-only ABI investigation exists; installed Awesomium remains. | Ultralight adapter/source integration is unfinished. Do not overwrite the browser DLL without preserving icons, previews/auth and actual callbacks. |
| Shared webpage flash | Investigation exists; no confirmed correction installed. | The browser probe was removed by request; `AionBrowserProbe.dll` remains absent. Do not silently reinstall it. |
| AFK keepalive experiment | Removed intentionally; deployed JAR has no `AfkKeepAlive` classes and no AFK config file. | Do not restore it from an old build/backup. Connection survival had not established prevention of the client AFK timer. |

## Temporary Bot roster removal installed

Receipt `backups/playerbots-recruitment-20261004-142907-454064` adds Roster →
Remove from roster → Confirm removal for dedicated Temporary Bots. Active bots
save/dismiss first; held saves and owned alts are protected. Account-owned archive
markers retain native character/inventory rows and IDs while hiding removed bots
and pruning their saved-party membership. The full source suite, 14 installed
archive checks and 26 native browser fixture actions pass; 99 other existing
override entries remain byte-identical. GameServer remains stopped; native
dismissal/removal integration and in-game acceptance await startup.
See `PLAYERBOTS_ROSTER_REMOVAL_20261004.md`.

The repeating item-ID collision remains tracked: the persisted-ID allocation guard
and Bardoca recovery are installed, but the root cause of prematurely released
reservations while inventory rows remain is still unproven. Do not mark that
release-path investigation complete or release archived companion/item IDs.

## Creation custody, build supplies and party recovery installed

Latest cumulative receipt: `backups/playerbots-recruitment-20261004-140949-271624`.
The item allocation repair was installed first and Bardoca recovered under ID
106628 without changing foreign item 191241. Native recovery/cleansing and
build-aware buffs now use normal item costs/cooldowns; Temporary Bots replenish
finite shop/crafted supplies, while owned alts retain their own stock and builds.
Summon revives and brings the selected companion, or the party with no target;
post-wipe recovery waits for the owner to be alive and combat to end. The separate
concurrent native resurrection-animation repair is preserved. Native HP item use
and both recovery paths passed; the final ordinary-catalog selection passed 45
class/level cases. The server is currently stopped; final native MP/buff casts and
actual client combat remain pending startup. All 15 preservation checks pass.
See `PLAYERBOTS_SUPPLIES_RECOVERY_20261004.md` for receipts and validation limits.

## Current companion baseline: Temporary Bots, formation and progression

Latest cumulative receipt is now `backups/playerbots-recruitment-20261004-133452-341528`.
Its `ItemFactory`/`PlayerBotItemIds` continuation retains every camp package entry
byte-identically. Preserve that later item-ID update together with the camp
receipt `...132704-143251`, which adds the eight home-zone camp repair.
Native faction, real collision-checked movement and guard damage checks pass
(166 assertions); source, loaded templates and deployed XML share the bounded
47 height/four overlap repairs. Preserve `LegacyCampBattle`, the three existing
method changes and all five XML files. See `LEGACY_CAMP_REPAIR_20261004.md` for
publisher/client evidence and the remaining full raid/client acceptance limits.
The next update agent revision must exceed 32.

Previous cumulative flag-target receipt: `backups/playerbots-recruitment-20261004-130544-238823`.
The live Kaidan Watchpost investigation found Baby's four companions attacking
Asmodian Territory (`701800`, object `191099`), a native `FLAG` whose AI rejects
all damage. Its coordinates matched the terrain; this incident was a control
object mistakenly selected for combat. Companions now reject all native flags in
`PlayerBotSession.validEnemy` and `PlayerBotService.allowsTarget`, including explicit
orders and effect-time eligibility after faction changes. The preceding selection
receipt is `...130336-672982`; the final receipt retains it and every earlier mod.
All 28 live checks passed for four companions and two native Eltnen flags;
ordinary nearby mobs remained eligible, and all four were observed targeting
Raging Kraterr after Baby moved on. Base JAR, launcher, client and media retained;
all 15 refreshed preservation checks pass. The next update agent revision must
exceed 31. Actual client appearance and broader combat acceptance remain separate.

Latest cumulative receipt: `backups/playerbots-recruitment-20261004-103105-414348`.
It retains the 08:03 companion baseline and 10:03 companion update, and includes
the bounded AI reload/portal/Kromede repair and the companion inventory ownership
transaction check. Preserve the separate Kromede script receipt `...102954-276296`;
see `AI_RELOAD_KROMEDE_20261004.md`.
This supersedes the older generated starting-level and automatic-alt gear behavior
described in historical entries below. The installed cumulative override now has:

- Continuous follow movement with native packet/server speed agreement, stable
  tactical slots, heading smoothing, owner-speed catch-up and combat positioning.
- Whole-party map/instance transfer, including already-despawned companions;
  individual and party summon controls remain available.
- Native object looting (including Decorative Weapons), intermediate NPC
  conversations, owner turn-in witnesses and class/build reward selection.
- Tank opening threat, native hate monitoring, recovery taunts and tank stat weights.
- Native affected-target group healing, party pet priorities, hybrid healing/
  cleansing, in-flight coordination and legal spell-specific combat resurrection.
- Class-legal armor/weapons, stat-weighted upgrades and canonical factory weapons.
- Dedicated-roster **Temporary Bots**, with owner-level scaling, native skill and
  Stigma builds, maintenance between gear tiers and upgrades every ten levels from
  20. Native quality ceilings progress through legendary/unique/epic/mythic where
  legal templates exist. Actual equipment remains constrained by class and role.
- Owned alts retain their equipment, class, level, skills and Stigmas; automatic
  gear/care/build mutation is disabled for them. Manual equipment controls remain.

Temporary actors leave the world on dismissal/logout; their dedicated roster and
saved progress remain available for recruitment. This does not create player-owned
character slots. Earned/starter/generated gear policy, optional native vendor
purchases and per-bot care budgets remain part of the baseline.

The final update used bounded method replacement on the latest actual override,
preloading original ZIP classes before file replacement. Existing helper changes
were explicitly redefined in RAM as well as written to disk. A native cached enum
switch mapping was eliminated from stat scoring. No full source-build JAR replaced
the deployment. Client archives/DLLs, base server JAR and launcher were unchanged;
all 15 installed-mod preservation checks pass. The server remained running.

See `PLAYERBOTS_VALIDATION_20261004.md` for native fixture evidence and receipts.
These tests exercise real server APIs and browser rendering, but continuous motion
appearance, persisted creation/re-login and actual player-led dungeon/quest flows
still need in-game acceptance. The broader full Playerbots scope remains unfinished.

## Party catch-up and quest object update installed (earlier receipt)

Latest cumulative receipt: `backups/playerbots-recruitment-20261004-050635-190915`.
Native quest-object interaction/looting, collection journal, successful owner
turn-in witnesses and class/build reward selection are installed, together with
owner-distance/fight-start catch-up and a persisted Nearby quest combat toggle.
One human and four companions stayed connected; their preferences and native
character/group state were retained. Base JAR/launcher/client and all unselected
override entries/methods preserved. Native policy/real Decorative Weapons checks
(52), existing regressions and 21 browser actions passed. Actual in-game
acceptance remains pending. The subsequent formation, transfer, conversation,
tank and Temporary Bot updates above are now installed.

## Equipment choices expansion installed

Latest cumulative server receipt: `backups/playerbots-recruitment-20261004-032705-060049`.
The equipment policy backend is installed live and persisted for future starts.
Each bot supports earned gear, a one-time empty-slot starter set, or ongoing
generated upgrades; equipment profile, native quality/level/weapon caps, upgrade
threshold, loot-roll policy and optional real-shop purchases are configurable.
Earned progression is the default; buying gear is off by default and shares the
bot's own care reserve/daily spending budget. Enchanting/extraction remain
per-bot opt-in. Preferences and generated-item protection persist separately.

This update retains the latest creation/starting-level fixes, tabbed companion
window, party command bar and all original override entries. The base server
JAR, launcher, client and three deployed media files were unchanged. Full source
compilation, existing regressions, 116 new equipment checks, 19 native-browser
fixture actions and live helper/command/panel linkage passed. Actual HTTP media
hashes match the deployed files and private state still requires authentication.
The refreshed inventory passes all 15 preservation checks. Live installation had
zero connected humans/companions; this does not establish equipment gameplay
acceptance. Full class rotations, autonomous world quest/travel planning, broader
encounter/PvP behavior and a complete gear optimizer remain unfinished.

For future live override replacement, preload the original override classes
before replacing the JAR, retaining hash guards and rollback. The classloader can
cache old ZIP offsets; use a compatible uniquely named agent and
`install_companion_update.py --preload-override`. The equipment-only stager is
`stage_equipment_update.py`; broad source rebuilds are not preservation evidence.

## Startup repair and installation contract

The original six-file companion installation changed only two browser caves but
omitted graphics/cursor tracking. That caused `Later client changes detected:
bin64/Game.dll` at startup. The verified repair changed cached package/tracking
and created rebased restore files; it did not change the live DLL, addon menu,
keys or other mods. Backup:

`C:/Users/playa/Downloads/aion-4.8-na/Aion 4.8 NA/DXVK-backups/companions-tracking-20261004-001807-929437`.

Active restore cohort:
`DXVK-backups/service-menu-graphics-20261004-001635-270547`.
The original companion receipt remains under
`TransmogMenu-backups/playerbots-20261004-000109-958`.

Future companion preparation now stages all sixteen live/recovery files together.
The verifier refuses packages omitting active graphics/cursor recovery. A
disposable-client test passed omission rejection, post-copy rollback, successful
installation/startup, stale reinstall rejection, unknown-DLL-change rejection and
byte-exact graphics removal while retaining all six native service routes in both
restore DLLs. No guards were disabled.

To refresh the read-only evidence from the repository root:

```powershell
python client-mods/diagnostics/inventory_mods.py --client 'C:/Users/playa/Downloads/aion-4.8-na/Aion 4.8 NA' --server target-deploy/game-server --output docs/INSTALLED_MODS.json
```

Before each install, read the newest receipts and verify current hashes, inputs,
signatures and feature-specific hooks/layouts. Rebuild bounded changes from that
state. Preserve recovery paths along with live files and run the launcher's
preparation checks. Add any new feature or known gap to this inventory.

## Revised recruitment policy

The user explicitly removed PvP blockers: bots may be summoned on any map when
the owner is out of combat. Native combat lasts ten seconds after the last attack
or hit. Bots are no longer dismissed for PvP/flight, and those states do not veto
healing or map following. Native offline-character eligibility, capacity and valid
normal-party membership still apply; alliance integration is unfinished.

The six reviewed method changes were applied live on 4 October without a restart
or disconnect. The owner's recruitment guard was verified allowed with the
native PvP-capable map flag still true. The installed baseline now includes
`libs/playerbot-recruitment-fix.jar` and its explicit first classpath position in
the server's `start.bat`; the base JAR and client were unchanged. Receipt:
`backups/playerbots-recruitment-20261004-004849-747604`. Preserve or fold this
override into any subsequent deployment; copying an older full JAR alone does
not establish the effective running companion behavior.

## Companion inventory panel repair

The `slotIdMask cannot be 0` error after recruitment came from the panel's
inventory mapper passing ordinary, non-equipment item groups to the native
equipment-slot decoder. Recruitment had succeeded: Queenbabe was spawned with
twenty ordinary inventory items. The mapper now retains those items with an
empty equipment-slot list; actual equipment still exposes its native valid slots.
The native slot decoder and equipment rules remain unchanged.

Installed live on 4 October without a restart or disconnect. The complete
production panel snapshot and JSON serialization were verified against the
existing companion and roster after the update. Full compilation and 1,382
checks passed, including 303 inventory regression checks covering every native
item group. The new override changes only the inventory mapper relative to the
previous override; all six recruitment-policy methods remain intact. Base server
JAR, launcher, client and settings were preserved. Current receipt:
`backups/playerbots-recruitment-20261004-010232-348029`.

## Companion command bar

Installed six bounded files from `target/playerbots-bar-client` while Aion was
closed. Client receipt:
`TransmogMenu-backups/playerbot-bar-20261004-013956-397`.
Only the existing native bridge, addon archive, Addon.key and three addon
signatures changed. A pristine rebuild matched the prior installed bridge
byte-for-byte after excluding its two PE build timestamps. Every other addon
entry, stock model key, pet/bundled Lua archives, native layouts, Game.dll,
graphics/cursor recovery and deployed server JAR/override/launcher were preserved.

The bar starts compact when entering the world. Drag its title; `+` expands
party commands, `x` hides them into the native party icon, and clicking that
icon restores the bar at its current anchor. Drag the icon's top grip to move
it. `/botbar` restores access. Its position and hidden/expanded mode are saved
in `PlayerBotBar.ini` when the UI is used. Visibility is a local UI preference;
the bar does not infer companion presence from ordinary human party members.
The server remains authoritative for recruited companions and valid targets.

All installed launcher preparation helpers were exercised, including Vulkan,
quality, free flight and the 128-archive graphics package. The quality/free-flight
helpers normally repopulate options removed by the client on exit. Their output
was retained under the bar receipt's `launcher-preparation` directory, then the
exact pre-install configuration hashes were restored (including shadow level 2).
The normal launcher remains responsible for applying its startup options on the
next launch. `verification.json` confirms all preserved hashes after that step.

Verified with real client Lua 5.1 wrappers at four scales, an isolated native
UI/transport fixture, all three addon signatures and actual installed Awesomium
icon/Wardrobe/Journey regressions. These checks do not establish in-game visual
or gameplay acceptance; reopen Aion to check the bar and normal pets/menus.

The user's subsequent screenshot confirmed the original bar's controls were
clipped below the frame. The first verifier missed the native title/content
margin. A read-only live inspection established the doubled title offset;
`verify_bar_geometry.py` now executes actual client coordinate/title-hit code
and reproduces that defect. Layout-2 was installed with the client closed as a
five-file Lua/XML/signature revision with no native DLL or server changes. All
60 control-bound checks and the real Lua interaction checks pass. All three
addon signatures, graphics/cursor guards, saved bar anchor and every preserved
client/server hash were verified after installation. Receipt:
`TransmogMenu-backups/playerbot-bar-20261004-021558-165`.
The corrected rendering and party orders still require an in-game check after
reopening Aion; the earlier screenshot establishes the first layout's defect,
not acceptance of this correction.

The subsequent screenshot showed cramped/overlapping buttons in layout-2 and
identified the missing Summon control. Layout-3 is now installed with Aion closed:
`TransmogMenu-backups/playerbot-bar-20261004-100628-843`.
The compact main row now contains Attack, Follow, Stay and Summon, followed by
expand/hide controls. Uniform 28-pixel heights, wider horizontal gaps and a
twelve-pixel separation between command rows reserve room for native borders.
Compact/expanded dimensions are 400x70 / 400x128; the movable hidden icon and
saved anchor remain intact. Summon routes to the existing `.bot summon all`
command for active companions, retaining server combat/travel checks.
The six-file update changes only the bar Lua/XML, the bridge's command allowlist,
addon key and three signatures. A pristine bridge rebuild first matched the actual
previous installation except timestamps. Other addon entries, Game.dll, graphics/
cursor state, keys for stock models, pet/Lua archives and latest server baseline
are preserved. Six native command checks, real Lua controls at four scales,
68 real native coordinate/hit checks with border-spacing assertions, all three
signatures and isolated icon/Wardrobe/Journey regressions pass. In-game rendering,
Summon behavior and combined normal pet/menu acceptance remain pending.

Layout-4 is installed from `target/playerbots-bar-layout4-final` after the next screenshot
exposed the stock `v5_dialog2` footer separator crossing the secondary command
row. It switches only the bar's root XML preset to `v5_dialog`, retaining the
existing native bridge and all six commands. Actual base/English skin definitions
and client DDS pixels reproduce the old separator and verify its absence in the
replacement. Geometry, Lua and three signatures pass. Installed with Aion closed;
receipt: `TransmogMenu-backups/playerbot-bar-20261004-103350-467`.
Only the bar XML changed inside the addon archive; native DLLs, every other addon
entry, saved anchor, graphics/cursor guards and latest server baseline are
preserved. Actual in-game visual acceptance remains pending the user's test.

Owner-centered formation buttons are installed in the expanded bar's third row:
Circle / Box / Line / Spread, 90x28 controls with eight-pixel gaps in a 400x168
divider-free frame. Client receipt:
`TransmogMenu-backups/playerbot-bar-20261004-124722-673`.
The source bridge first rebuilt identically to the previous live bridge except
timestamps. Only four validated formation commands were added; only bar Lua/XML
changed in the addon. Every other client mod, saved anchor, stock model key,
pet/Lua package and graphics/cursor guard is retained.

Server receipt `backups/playerbots-recruitment-20261004-124615-036768` changes
only formation destination and `.bot` command constructor/execute against the
latest cumulative override. It adds `PlayerBotFormationLayout`, preserving
concurrent class utility, healing, custody and Kromede/reload work. Follow targets
are centered on current owner position without the previous speed-based forward
offset. Default Circle and selected Box/Line/Spread preferences persist per
owner character with account checks. Combat positioning, explicit orders,
geodata, flight and follow-speed behavior remain authoritative; following bots
regroup after combat. Existing alt builds and equipment are unchanged.

1,200 layout/persistence checks, 84 actual native geometry/hit checks, real Lua
at four scales, ten native command routes, signatures and icon/Wardrobe/Journey
regressions passed. Read-only live capture verifies both effective formation
and command methods, with 60 loaded geometry invocations. Post-install hashes
and latest server baseline pass. Actual in-game appearance, follow movement
and post-combat regrouping remain for the user's test.

Latest Playerbots continuation includes saved Temporary Bot checkpoints, mixed
alt/Temporary party presets, two upstream translation corrections and native role
target values. Receipts: `072922-921933`, `074432-111599`, `080311-450862` under
`target-deploy/game-server/backups/playerbots-recruitment-20261004-`. Native save/load
and target fixtures passed; actual game acceptance and full Playerbots parity remain
pending. Preserve account-owned saved-party JSON beside existing per-character
settings. See `PLAYERBOTS_SAVED_PARTIES.md` and `PLAYERBOTS_PORT_REVIEW_20261004.md`.

Healer continuation receipt `100323-698137` and custody receipt `103105-414348`
preserve that baseline and the concurrent AI-reload/Kromede work. Thirty healing
comparisons and an actual native Healing Wind cast passed, including mana payment,
multiple recipients and reservations. Mixed save/dismiss/resummon was rechecked
under the guard (`target/playerbots-presets-native-runtime-v5.txt`). Tanku's earlier
item-ID collision was recovered in `backups/playerbots-inventory-collision-20261004-1032`:
identical armour attributes, fresh ID, preserved gear protection and an unchanged
foreign DB row. Normal save/dismiss retry cleared its held session. Fixture cleanup
now explicitly removes private inventory before releasing IDs; full gameplay remains pending.

Class enemy utility continuation is installed in cumulative receipts
`114208-193698` and `115019-456681`. Preserve `PlayerBotEnemyUtility`, offensive
counter-purge classification, native effect power/count/category eligibility,
secondary engaged-caster selection and exact class interrupt bands. Real installed
Ignite Aether removal/damage/MP and Sigil of Silence interruption passed on isolated
unsaved actors (`target/playerbots-enemy-utility-native-runtime-v4.txt`). Full class
strategies and actual client combat acceptance remain unfinished. No client file,
alt build, gear or Stigma was changed. See `PLAYERBOTS_CLASS_STRATEGIES.md`.

Defensive class continuation is installed in cumulative receipt `123520-131583`.
Preserve `PlayerBotDefense`, proactive learned Mage barriers, class health bands,
native magical resistance, meaningful roots/snares against engaged pursuers and
control reservations. The later `124615-036768` formation/command receipt retains
these entries and methods. Thirty-four comparisons and actual native casts passed
in `target/playerbots-defense-native-runtime-v5.txt`, including shield absorption
and finite resistance-charge consumption. Player-owned class/level/gear/skills
remain unchanged; client files were not replaced. Full rotations, autonomous
quest/travel planning, broader dungeon mechanics and actual client acceptance
remain unfinished.


## Companion resurrection animation repair (4 October 2026)

Resurrection repair receipt: `backups/playerbots-recruitment-20261004-140017-509159`.
Preserve `PlayerBotRevival`, its session tick/dismissal integration and the native
`PlayerReviveService.revive` recovery notification. Bots wait for death/rebirth
animations before resuming movement/actions and refresh already living observer
state without HP/MP grants. Native resurrection rights/penalties and looting/flight
stances remain intact. This retains supplies/wipe recovery, item-ID custody,
legacy camps and all earlier installed updates. See `PLAYERBOTS_REVIVAL_20261004.md`.
Native lifecycle checks and ten native stance checks pass; final post-revive casting
and actual client appearance remain pending after an external server shutdown.
GameServer remains stopped at the user's explicit request. All 15 preservation
checks pass; client files, base server JAR, launcher and media are retained.

## Offensive strategies and local quest routes installed stopped

Current cumulative receipt: `backups/playerbots-recruitment-20261004-183335-252998`.
It retains every earlier installation, including stopped-server roster removal.
Preserve `PlayerBotOffense`, `PlayerBotTargetStrategies`, `PlayerBotQuestRoutes`,
the session/target-value integration and `PlayerBotHazards.lambda$visible$0`.
Native offense helpers and caster/combo values are connected. Reverification
found that final rune/periodic cast gates still contradict helper decisions;
quest destination selection is an idle fallback, not shared executor arbitration.
These remain PB-PORT-001/002/003 in the
[canonical tracker](PLAYERBOTS_PORT_REVIEW_20261004.md#reverification-tracker--4-october-2026).
Kromede traps
are anticipated from the visible native actor before its delayed cast. Native
zero-rune reduced damage remains a fallback when no builder is usable.
Settings, saved presets, alt setup, client, launcher, command/media and base JAR
are preserved. No GameServer startup or live attach occurred. Full source and
effective package offline checks pass; actual casts, route/quest/encounter behavior
and the full optimized class/world travel/dungeon scope remain unfinished.
The known unsafe older preset fixture entrypoints are retired in rebuilt source;
historical compiled JARs must not be used. Item-ID release investigation remains
open. See `PLAYERBOTS_STRATEGY_CONTINUATION_20261004.md`.

## Port reverification and continuation tracking (4 October 2026)

This documentation-only audit refreshed `INSTALLED_MODS.json` and reverified the
51 cached upstream references plus inspected effective installed methods at the
current receipt. Installed client/server files were not replaced. Preserve every
existing cumulative entry and setting. The review records 12 implementation IDs
and eight distinct pending-validation IDs, with source mappings, dependencies
and closure criteria. Next: rune final-gate reconciliation, periodic/hybrid
final-gate reconciliation, then shared quest objective execution. Consult
`PLAYERBOTS_PORT_REVIEW_20261004.md` before further class/travel work. Do not
describe the full system as finished or classify an installed-but-untested
adapter as absent. Keep GameServer stopped until the user changes that instruction.

## Final offense cast gates corrected (4 October 2026)

Current cumulative receipt:
`backups/playerbots-recruitment-20261004-193448-980138`.
It corrects PB-PORT-001/002 and preserves the complete earlier installation,
including original enum switches, legacy ClassCombat, native hooks,
AI/camp/item-ID/supplies/revival/roster/quest/preset/UI work and configuration.
Only `PlayerBotOffense.useful` and `PlayerBotSession$CastAction.isUseful` changed;
114 other entries are byte-identical and no new classes were added.

Final usefulness shares finisher priority's native resource decision. Periodic
DAMAGE actions use native expiry/rank checks instead of the blanket active-buff
veto; hybrid damage retains a same-rank direct payload, stronger periodic effects
and duplicate nonperiodic debuffs remain protected. Forty-four final-action/
native-planning checks and full source/companion suite pass. Native casts/client
acceptance remain pending; GameServer was not started or attached. Client, base
JAR, launcher, commands/media and 35 settings/preset/archive files are unchanged.
Updated inventory passes 15 checks, with 31 hashes and 70 client/70 server receipts.
Next offline implementation: PB-PORT-003. See the canonical tracker/validation record.


## Shared quest objective execution installed (4 October 2026)

Latest cumulative receipt: `backups/playerbots-recruitment-20261004-203902-131350`, retaining the complete
`...193448-980138` baseline and `...203357-938918` arbitration package.
Preserve `PlayerBotQuestObjectives` and bounded Session/route/conversation/object/
NPC-job/new-hunt integration. The final peer correction uses native eligibility
for each follower, not equal peer quest-variable words. Initial package: 13
existing methods, three helper classes, 110 other entries retained. Follow-up:
one existing helper method, 118 other entries retained byte-for-byte.

Source suite, native metadata/handler fixtures and 35 effective/installed
arbitration gates pass. All 15 mod checks, 31 client hashes, 35 settings/preset/
archive files, base JAR and launcher are preserved; inventory records 70 client
and 72 server receipts. No GameServer startup/attach, DB or client replacement.
Native complete-tick/geodata/object/reward/client acceptance remains pending.
Next offline implementation: PB-PORT-004. Details:
`PLAYERBOTS_QUEST_ARBITRATION_20261004.md`; current tracker and validation remain
authoritative. Preserve the unfinished full port and item-ID release investigation.

## Tank formation and ranged movement installed (4 October 2026)

Latest cumulative receipt: `backups/playerbots-recruitment-20261004-211935-035574`,
retaining main repair `...211220-016216`, shared objectives `...203902-131350` and
all prior mods. Installed live after explicit user approval; GameServer was
already running. No server start/stop/restart or client replacement occurred.
Tank has the front slot in all four formations, including stationary turns.
Ranged DPS/healers/non-Chanter support use ordinary learned offensive distance;
short hostile spells cannot drag them into melee. Native movement, sight, body
bounds, friendly recovery and explicit orders remain authoritative.

Preserve `PlayerBotCombatPosition`, Session/CastAction/ReachAction, Navigation,
Formation and FormationLayout changes. Runtime helper changes require SCOPES.
Fresh/preloading agents 38/39 applied six then one class definitions. Full source
suite, 38 position checks, existing offense/quest checks, 22 read-only live policy
checks and 115 effective method comparisons pass. This does not establish actual
client movement/casting acceptance (PB-VAL-005). All 15 installed-mod checks and
31 client hashes pass; base JAR/launcher remain unchanged. Inventory records
70 client/74 server receipts. See `PLAYERBOTS_POSITION_20261004.md`.
Full port and item-ID release investigation remain unfinished.


## State strategies and fresh continuers installed (4 October 2026)

Latest cumulative receipt: `backups/playerbots-recruitment-20261004-213711-193912`.
PB-PORT-004 retains the separately installed tank/ranged position repair
`...211935-035574` and every earlier mod. Six methods/two classes changed, nine
helpers added; 120 earlier entries byte-identical. Agent 40 preloaded originals
and applied the user-requested finish live, preserving five companion sessions,
roles/orders/settings and one human connection. No server lifecycle/client change.

49 behavior/native-chain cases pass against the loaded engine and effective
package; five naturally scheduled contexts observed. 81 loaded methods match the
package, 115 existing port methods match source. All 15 checks/31 client hashes,
base JAR/launcher/config survive; 43 settings files reviewed with only two normal
generated-item provenance lists growing, preference values intact. Inventory:
70 client/75 server receipts. See `PLAYERBOTS_ENGINE_COMPOSITION_20261004.md`.

Actual native chain casts/client combat/transitions remain PB-VAL-009. Full port
and item-ID investigation remain unfinished. Full subsystem inventory is now
complete in `PLAYERBOTS_SUBSYSTEM_INVENTORY.md`; do not repeat it. Next companion
implementation is PB-PORT-005, first complete native class strategy slice.
Existing helper edits need explicit runtime SCOPES; next update revision >40.

## Configurable ranged spacing and finite retreat installed (4 October 2026)

Latest cumulative receipt: `backups/playerbots-recruitment-20261004-220541-625450`,
retaining main spacing `...215853-061213`, concurrent engine `...213711-193912`,
position `...211935-035574` and every earlier mod. Installed live with preloading
agents 41/42; no server restart/client replacement. Reopen Companions and select a
ranged character: Overview → Ranged spacing. Follow spread defaults to 4 m (2–12),
attack distance 10 m (4–18), capped by native skill/weapon range. Account-owned
`spacing-character-*.properties` persist changes. Line wings keep separate inner/
outer slots. One retreat of at most 2 m per engagement replaces endless kiting;
five seconds without a target reset it. Hazards and native legal casts remain.

Full source suite, 35 production spacing checks, native-browser controls/save/
draft tests (27 fixture actions), 22 real policy checks, 57 selected loaded-method
comparisons and 135 disk/source method comparisons pass. Preserve 126 earlier
entries (133 in the one-method follow-up), newer engine composition, 31 client
hashes/base/launcher and all preference values. All 15 mod checks pass; inventory
lists 70 client/77 server receipts. PB-VAL-005 actual client movement/combat remains
pending; full port and item-ID investigation stay open. See `PLAYERBOTS_SPACING_20261004.md`.

## Companion stale-deletion custody repair installed (4 October 2026)

Latest cumulative receipt: `backups/playerbots-recruitment-20261004-224922-627052`,
retaining spacing `...220541-625450`, engine composition and all prior mods.
PB-REPAIR-INV-001 filters actual pending native inventory writes before custody
checks and post-commit bookkeeping. Old committed deletion records cannot block
saves when their IDs have been reused; actual foreign/shared custody still fails.
No item reissue, foreign-row change, restart or client replacement occurred.

One method/class changed; 133 earlier entries remain byte-identical. Agent 43
preloaded originals and retained five sessions/one human connection; 44 settings
unchanged. 85 offline production checks pass; all 31 loaded InventoryDAO methods
match disk. All 15 mod checks/31 client hashes/base/launcher pass; inventory lists
70 client/78 server receipts. User performs in-game save/dismiss/resummon testing.
See `PLAYERBOTS_CUSTODY_DIAGNOSIS_20261004.md`. Tanku's separate wipe/summon error,
historical ID release-path investigation and full port remain open. Next broad
slice PB-PORT-005; next attach update revision >43.

## Tank hold repair installed live/disk (4 October 2026)

PB-REPAIR-TANK-001 removes the recursive boss-facing walking goal and active-tank
targeted-cast spreading. Receipt `232048-163778` changes two methods and preserves
all 134 entries of the preceding `224922-627052` baseline.
Full source/offline checks, 22 regression checks and effective native policy,
encounter, formation and custody fixtures pass. After initial automatic rejection,
the user explicitly approved this separate tank repair. Fresh agent 44 preloaded
originals and updated one class, retaining five companions/one human connection.
57 selected loaded methods match; 51 hashes/140 effective source methods pass.
All 44 settings, 31 client hashes, base/launcher/media and 15 mod checks survive.
Inventory: 70 client/79 server receipts. No restart, client replacement, forced
tick/cast/movement or DB/ID writes occurred. Next update agent revision >44.
See `PLAYERBOTS_TANK_POSITION_20261004.md`; real boss fight PB-VAL-005 stays open.

## Sorcerer class-strategy slice installed (4 October 2026)

Latest cumulative receipt: `backups/playerbots-recruitment-20261004-234841-695964`,
retaining tank `232048-163778`, custody, spacing, engine and all earlier mods.
PB-PORT-005A maps pinned Mage ordering to learned native Sorcerer/Mage single-target
chains, upkeep, fillers/fallbacks, mana and caster boosts. Encounter precedence,
native cast/cost/cooldown/stack gates, orders and existing builds remain intact.
User will perform in-game testing; full class/upstream parity remains unfinished.

Four methods/three existing classes, one helper, 133 earlier entries byte-identical.
Agent 45 preloaded originals; five companions/one human retained. Full source/
offline suite and 54 focused production checks pass; 193 observed loaded methods
and 163 effective source methods match (51 source hashes). All 46 settings,
31 client hashes, base/launcher/media and 15 mod checks survive (70 client/80
server receipts). No restart/client replacement or forced native tick/cast/save.
See `PLAYERBOTS_SORCERER_STRATEGY_20261004.md`. Next slice 005B Spiritmaster
single-target/pet strategy; native/client acceptance and all remaining tracks
stay open. Next attach update revision >45.

## Native bot owner gifts installed (5 October 2026)

Latest cumulative continuation: `backups/playerbots-recruitment-20261005-042546-945113`
installs PB-REPAIR-SETTINGS-001 care-file transient-lock retries, retaining owner
gifts `005644-110252` plus receipted Saendukal overlay `025825` and all earlier
mods. One method/new helper, agent 49, five companions/one human preserved; no
restart/client replacement/forced quest/save. Further tests stopped at user's
request; user gameplay/persistence acceptance remains. See
`PLAYERBOTS_SETTINGS_FILES_20261005.md`; next attach revision >49.

PB-SCOPE-003A / PB-VAL-010: main receipt `004941-367262`, current cumulative
`005644-110252`. Owners give items/Kinah to active owned alts or Temporary Bots
through the native trade window. Bots lock/complete their side and evaluate only
donated gear for legal class/role upgrades, serializing native binding/identification.
Normal item rights and custody persist; outgoing bot offers/world trading remain
partial. This explicit donation exception does not enable general alt auto-gear
or modify level/class/build/skills/Stigmas.

Full source/offline suite and 56 final production boundary/native-window tests
pass. Fresh agents 47/48 preserve ten companions/two humans, schemas and rollback;
no restart/client replacement/forced live trade, movement, cast, save or DB/ID tests.
All 218 methods in eight final observed definitions match disk; source audit
checks 51 pinned hashes/190 methods. All 15 mod checks and 31 client hashes pass;
base/launcher/media/prior mods/preferences survive. Current inventory records
70 client/82 server receipts. Actual native trade/persistence/client acceptance
stays with the user, PB-VAL-010; the full port remains unfinished.

See [trade behavior and validation](PLAYERBOTS_TRADING_20261005.md). Existing
005A stays installed; next companion class slice remains 005B Spiritmaster.
Economy, outgoing trading and world/invitation tracks retain independent scope.

## PB-REPAIR-SETTINGS-002 — installed offline 7 October 2026

The current care retry is confirmed retained; the pasted Tancul traceback matches
the older 04:15:05 incident. Current logs show the same Windows sharing denial
from gear provenance saves for MagicDps/LeMuse. GearPolicy.State.save now uses
the existing bounded atomic-replacement retry. One method changed; 146 other
cumulative entries remain byte-identical. No settings/build/item/quest policy
changes or error suppression. Persistent locks still report failure; the locking
process is not identified.

Current receipt `backups/playerbots-recruitment-20261007-081522-429924` retains
`042546-945113`, gifts, Sorcerer, tank, custody, native shield and every earlier
mod. Full offline source build and 36 focused source/effective/Windows private-file
checks pass. Server/client remained off; no startup/restart/attach or forced native
gameplay/DB/ID tests. User actual care/gear/supplies acceptance is pending.
See [settings diagnosis and installation](PLAYERBOTS_SETTINGS_FILES_20261007.md).

Next broader slice stays PB-PORT-005B Spiritmaster; independent scope tracks remain
open. Appearance and follow recovery remain source/staged only; earlier packages
must be restaged against the new cumulative receipt before install. Do not copy an
older staging JAR over this repair. All earlier unfinished port/repair work survives.

## PB-SCOPE-012A native metadata — installed offline 7 October 2026

Care/gear state now uses native MetadataDAO/cache/checkpoints, mapped from pinned
PlayerbotRepository.cpp and PlayerbotsDatabase.cpp. AI/settings saves queue values
in memory; dirty metadata commits with native inventory/progress, including the
pre-trade checkpoint. Failure retains dirty state for periodic checkpoint retry.
Supply provenance marks the native cube dirty. Owned-alt builds and all existing
preferences, consent, quest witnesses and protected-item values are preserved.

After the user opened the database, the guarded installer verified native ownership,
created the metadata table and committed **32 imported care/gear rows**. A separate
read-only connection verified all 32 committed values exactly match retained legacy
files. Eight existing methods/six definitions changed, six new classes were added,
and 141 earlier JAR entries remain byte-identical. Full offline compile and 35
production checks pass against the installed package; 16 mod checks/31 client hashes
pass, with all 93 settings/media files unchanged. Inventory records 70 client/86
server historical receipts. No GameServer/client startup, restart or attach occurred.

Current recovery receipt is external:
`D:/Proiecte/Project Restructure/Aion Development Workspace/archives/server/game-server/backups/playerbots-recruitment-20261007-124827-848789`.
It retains `081522-429924` and every earlier installed mod. Override SHA-256:
`f49bd48bcfd6a0a7eabae4a8fe2213791dba7dcdab1cb1945d3a900451cd1a3e`.

See [native metadata port](PLAYERBOTS_METADATA_20261007.md). PB-VAL-011 migration and
disk installation are complete; actual care/gear/supplies/trade checkpoints,
failure/retry and dismissal/resummon/restart gameplay acceptance remain the user's
tests. PB-PORT-005B Spiritmaster is the next separate class implementation. Other
repository namespaces and the full port remain partial. Appearance/follow packages
remain source/staged only and must be restaged against this receipt before install.
