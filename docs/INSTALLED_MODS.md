# Installed modifications and remaining work

## Port audit and coordinated class repair - installed offline - 10 October 2026

PB-REPAIR-AUDIT-022 implements the authorized release/scheduling/travel/quest/
diagnostic/record findings from the project audit. Canonical delivery now requires
regression evidence bound to the exact artifacts, runner, fixtures and reports.
Controlled/world/maintenance/checkpoint work uses separate bounded workers and
per-character exclusion; native custody and shutdown draining remain. Complete
indexed travel destinations replace first-32 sampling. Native declared quest pages
and independent XML intermediate choices preserve handler authorization. Headless
health retains missing-lease/registration/custody/stall warnings and human checks.
Full custom campaign/profession/Ranger/autonomous economy parity remains partial.

The explicitly coordinated CAST-023/ANTIHACK-024 source repairs are included in the
same unchanged complete normal Maven JAR. Spiritmaster idle buff checks use actual
native beneficiaries and require no pet for summon preparation. Other classes'
casting paths remain separate. Bots skip core client movement/hit-time accusations;
native timing, pet attack rejection and human checks remain. The user's exact idle
animation and native latency still require gameplay acceptance.

Verified: 91 fixture sources / 53 artifact-bound offline suites / 62,748 checks,
19 release-tool tests, 1,757 warning-free handlers, 2,533 unchanged managed resources,
complete XML/schema/JAXB and linkage gates. Exact coverage records all 8,043 native
quest templates: 3,385 ordinary XML-family templates, one XML conversation subset,
798 specialized XML and 3,859 custom/no-XML entries. This measures metadata coverage,
not complete custom Java handler availability or native quest-chain acceptance.
All 56 original / 69 scope reference SHA hashes verify. 3,593 prior JAR entries and
100 other service / 110 other session methods remain identical; no installed public
methods or package entries were removed.

Receipt: external archives/server/game-server/backups/
playerbots-source-build-20261010-212205-483239. Review: external staging/output/
release-20261010-211439-905427. GameServer SHA:
23a00ca1f8b88d0c99ae42bdc5f1bfd67913466c3dd2f58763243ff49c74a621.
Commons unchanged. One normal JAR copied unchanged; 2,044 handler caches backed up
and invalidated. Independent verification passes 70 guards / 93 configs / 31 client
hashes plus exact source/builder/recovery/static/linkage/regression/coverage receipts.
Inventory passes 20 mod checks / 74 client / 149 server historical receipts. Current
user system.cfg was preserved and the successful current inventory refreshed; every
other client hash remains preserved. All 43 explicit Playerbots settings remain:
world cap1500, target1200..1500, budget120, controlled cap3000, personal quotas23/23,
city0, appearance disabled; the deprecated per_map value does not set a cap.

Fresh offline guards passed. No component start/stop/restart/attach/dump, gameplay,
production SQL or native World/ID fixture occurred. Components remain off; Login/
Chat untouched. PB-VAL-046 audit behavior and PB-VAL-047 idle/antihack acceptance
remain user testing. See PLAYERBOTS_AUDIT_REPAIR_20261010.md and
PLAYERBOTS_IDLE_CASTING_ANTIHACK_20261010.md for exact mapping and boundaries.

## Whole-population admission repair - installed offline - 10 October 2026

PB-REPAIR-POP-021 addresses the user's over-target population report. Native logs
showed1308 active global bots against target1289, below the separate hard world
cap1500. Geographic admission subtracted only on-player-map actors, omitting
occupied off-map slots. Its installed helper permits120 more admissions for that
captured snapshot. Saved loading/publication checked the hard cap but did not
compare the computed global target with existing global sessions.

Pinned RandomPlayerbotMgr UpdateAIInternal/AddRandomBots/GetBots/ProcessBot/
OnPlayerLoginError plus factory/config dependencies were read before editing.
Admission now always subtracts the entire global admitted set, including pending
and off-map residents. Pre-load and locked final-publication checks separately
bound whole global/session totals, including closing/save-held slots. Geographic
demand chooses destinations, never extra slots. Existing excess is safely retired
before relocation; pending on-map excess can release residency without spawning.
Protected/control/combat/visibility/custody actors remain until safe, so target
reductions can temporarily leave protected excess; no new spawn can grow it.
No character deletion/reroll, count/config override or feature removal occurs.
The saved reserve remains separately bounded and retains older identities.

Installed complete unchanged normal Maven output: external receipt
playerbots-source-build-20261010-193907-521380; review
staging/output/release-20261010-193349-087609. GameServer SHA
2a051dcaf09c960298ee38fc0c9cad40b739c8590765648e49f88aa26e226aac;
Commons unchanged. 88 fixture sources /48 offline suites /62516 checks (39024 new
admission checks),16 tooling tests,1757 warning-free handlers,2533 unchanged
resources, complete static/JAXB/linkage pass (3360 classes /182246 references).
All prior entries remain;3623 entries byte-identical. All56 original hashes /
63 scope references verify. Only normal GS JAR copied;zero caches present to
invalidate. Delivery guards preserve70 other files /93 configs /31 client hashes.
Independent installed verification passes builder/source/recovery/static/linkage
receipts and all48 suites /62516 checks. Inventory passes20 mod checks /74 client /
148 server historical receipts.

Current live config remains population1200..1500/worldcap1500/budget120 and
companions23/23; all43 values remain. Source/runtime paths unchanged; external
workspace holds evidence/output/recovery. No component start/stop/restart/attach,
new dump, production World/DB/ID fixture or DB mutation occurred. Both tested
components stayed closed for guarded delivery; Login/Chat untouched. Preserve
installed PERF-020 and all prior progression/class/economy/raid/custody/shutdown
features, appearance-disabled state and saved IDs/builds. PB-VAL-045 actual
fill/excess convergence/map hops/rotation/restart is user gameplay acceptance;
full WoW parity remains partial. See [cause and exact port mapping](PLAYERBOTS_POPULATION_ADMISSION_20261010.md).

## Companion responsiveness repair - installed offline - 10 October 2026

PB-REPAIR-PERF-020 addresses the user's delay across following, casts/heals and
menu commands. Exactly three newly authorized read-only Thread.print -l samples
from GameServer PID21144 are consumed/exhausted. Every sample caught world AI
holding the shared service monitor while saves waited: two terrain collision/
world-travel paths and one quest-planning path. Logs independently recorded
27.4-second overlapping AI/save warnings and a TimSort comparator-contract failure.
The samples do not establish one continuous 27-second terrain call or an executing
SQL save as their cause. Evidence is external diagnostics/companion-delay-20261010-190355.

Pinned UpdateAI/GetReactDelay, MoveTo/duplicate/wait movement and TravelMgr catalog
source was read before editing. Immutable deadline snapshots fix mutable sorting;
due controlled actors precede autonomous work to honor the existing 100ms master
reaction. Progressing native same-goal movement is reused; fully supported direct
segments avoid speculative detours. Native per-step floor/body/door checks remain.
Static starter catalogs are cached by bot level while native prerequisites stay
dynamic; unreachable goals are rejected early. Conservative finite-segment scene
indexing retains native contact order, collision/door checks and supported bounds
invalidation. Queue priority and scene indexing are Aion host adaptations, not
claimed literal WoW queue/BVH ports. The global monitor remains; individual slow
SQL operations and other unobserved hotspots remain possible.

Installed complete unchanged normal Maven output: external recovery receipt
playerbots-source-build-20261010-192847-400315; review
staging/output/release-20261010-191620-637849. GameServer SHA
5c9e861edf67b1eb0a23c58d62c4f92d08eb0e4b34823c044d2f20a3a3eb8ea1;
Commons unchanged. 87 offline sources /47 suites /23492 checks (6013 responsiveness,
448 collision), 16 tooling tests, 1757 warning-free handlers, 2533 unchanged
resources, full static/JAXB/linkage pass (3360 classes /182187 member references).
All prior entries remain; 3617 entries and131 other service methods byte-identical.
All56 original upstream hashes /63 scope references verify. Only normal GS JAR
copied;2044 handler caches backed up/invalidated. Delivery guards preserve70 other
files /93 configs /31 client hashes. Independent installed-delivery verification
passes builder/source/recovery/static/linkage hashes and all47 suites /23492 checks.
Current client system.cfg was preserved after inventory refresh;20 mod checks /
74 client /147 server historical receipts pass.

No bot count/config changes, features disabled, actor rerolls or DB mutations.
Existing IDs/progress, field/quest/loot, class/raid/economy/custody/shutdown mods and
appearance-disabled state remain. Source is C:/Git/aion-server; runtime remains
target-deploy/game-server; external development workspace holds outputs/recovery.
Both tested components were closed by the user for guarded delivery. No component
start/stop/restart, agent load or gameplay fixture occurred; the three authorized
read-only dumps were the sole live attach exception. PB-VAL-044 actual follow,
combat/heal/menu responsiveness with full population and restart remains user
acceptance. Full upstream parity and unrelated backlogs remain partial.
See [diagnosis, exact mapping and limits](PLAYERBOTS_RESPONSIVENESS_20261010.md).

## Configured population target repair - installed offline - 10 October 2026

PB-REPAIR-POP-019 fixes the user's `[465/160]` regression. The agent-added 018
per-map quota was not authorized by the geographic redistribution request.
Player focus preserves the complete configured global target and distributes it
among occupied maps. Login/logout/teleports do not shrink it; population.min/max
and world.max_active remain authoritative. The old player_focus.per_map setting
is retired/ignored even if an existing file says160; legacy helper signatures
remain for compatibility. All43 source/live config entries are explicitly explained.
Native bot-level/faction/camp, visibility/150m/control/combat/custody, single worker,
SQL/reserve identity and all earlier progression/economy/class features remain.

Installed unchanged complete normal Maven output: external recovery receipt
playerbots-source-build-20261010-182754-884695; review
staging/output/release-20261010-181208-585192. GS SHA
48712ca279d6f9e3bd493013fdfa7c7effa09d371bb7188d0aecc632fa5c590e;
Commons unchanged. 86 offline sources /46 suites /17476 checks (8067 focus),
16 tooling tests, 1757 warning-free handlers, 2533 unchanged resources, complete
native static/JAXB/linkage pass. 3620 prior entries and132 other service methods
remain byte-identical. All56 original hashes /63 scope references verify.
The first review180926 was superseded before delivery to retain legacy helper
signatures; only181208 was delivered. One normal GS JAR copied;2044 handler caches
backed up/invalidated. Independent verification passes70 guards /93 configs /
31 client hashes and source/artifact/recovery/static/linkage receipts.

Value-preserving configuration documentation receipt:
playerbots-config-docs-20261010-182828-582666, external server backups. All43 explicit
values remain, including live population1200..1500/worldcap1500/budget120 and
companions23/23. Updated user/client system.cfg was preserved after the complete
inventory passed20 mod checks. Final inventory records74 client /146 server receipts.
Runtime remains target-deploy/game-server. Fresh closed-component guards passed;
no component start/stop/restart/attach/dump, production World/DB/ID fixture or
production database writes occurred. PB-VAL-043 actual counts/activity/hops/restart
remains user gameplay acceptance; full WoW parity and unrelated backlogs stay partial.
See [mapping and repair](docs/PLAYERBOTS_POPULATION_TARGET_REPAIR_20261010.md).

## Responsive player-area population - installed offline - 10 October 2026

PB-CUSTOM-POP-018 addresses the user's 34-Heiron-bot screenshot and request for
local activity and prompt map/area teleport response. Real-player maps/positions
anchor demand; player level is absent from its snapshot and does not govern
placement. Pinned manager zone/teleport/reserve/presence flow was read before
source edits. This prompt per-map quota is explicitly an Aion extension, not
claimed exact WoW parity. Each bot keeps native faction/level/camp eligibility.
Existing suitable unseen idle actors move first; excess/off-map/incompatible
actors save offline through the single native background worker and may reuse
the same ID/progress without demand cooldown. Native timed absence remains.
Known visible/150m/group/control/combat/trade/custody/closing actors stay protected.
Only Sanctum/Pandaemonium may use service camps without a native field band.
AI/checkpoint callbacks exclude the active relocation/retirement job; complete
shutdown drain and save-failure leases remain. Native camp compatibility is
cached by faction/bot-level/map rather than shuffling camps per reserve identity.

Complete unchanged normal Maven JAR installed offline: source receipt
playerbots-source-build-20261010-174509-604558, external server backups; review
staging/output/release-20261010-173926-577729. GS SHA
73efe6cc52663671928957f3e529e319a7ad5a486171f355abe1e3322e12997e;
Commons unchanged. 86 offline sources /46 suites /11470 checks (2061 new),
16 release-tool tests, 1757 warning-free handlers, 2533 unchanged resources,
full static/JAXB/linkage pass. All 130 native faction/bot-level catalogs and 260
focus compatibility selections pass. 3617 prior entries /95 other service /17
other placement /12 existing roster methods remain identical. 56 original hashes
and 63 scope references verify. One normal JAR copied; 2044 handler caches
backed up/invalidated. All earlier field/names/legion/storage/mail/class/raid/
population/custody/shutdown mods remain; appearance override stays disabled.

Configuration documentation receipt playerbots-config-docs-20261010-174703-757330
backs up and explains all43 settings, preserving all40 explicit user values,
including current population1200..1500/worldcap1500/budget120 and companions23/23.
New defaults: player_focus.enable=true, per_map=160, radius=900m. Global requested
native SQL target/finite reserve remain separate from this transient local quota.
Existing user limit edits were backed up/verified without runtime writes in
staging/output/playerbots-user-population-limits-20261010-172833-968457.
Updated client system.cfg was preserved after full inventory validation.
Independent delivery/recovery/source/artifact and exact subsequent documentation
checks verify 70 guards /93 configurations /31 client hashes. Inventory20 /74
client /144 server historical receipts passes. Runtime remains target-deploy.
GameServer/Aion remain off; Login/Chat untouched. No agent start/stop/restart/
attach/dump, production World/DB/ID fixture or database mutation occurred.
PB-VAL-042 actual visibility, native kills/rewards, fast map/area hops, protected
actors, performance and restart with retained progress remains user testing.
Full parity is partial; the independent economy/profession/class backlog remains.
See [exact mapping, controls and acceptance](docs/PLAYERBOTS_PLAYER_FOCUS_20261010.md).

## Generated world-bot names - installed and migrated offline - 10 October 2026

PB-REPAIR-NAMES-017 replaces ID-encoded Wander names with code-generated,
pronounceable native-gender names. Pinned RandomPlayerbotFactory name cache,
CreateRandomBotName native checks and conlang fallback were read before edits.
Native name pattern/forbidden words/reserved names and collision retries remain;
SQL errors fail closed. Generated names persist in players, without a runtime
name database or spawn/restart reroll. Human/player-chosen private names remain.

Normal source release: playerbots-source-build-20261010-163434-147481, external
server backups. Review: external staging/output/release-20261010-163002-781882.
GS SHA 7ad7b791ae8216b201dd6d80dea0ab3f6cbdb4b06cea8aa01353b1b4e438ee9d;
Commons unchanged. 85 offline sources / 45 suites / 9409 checks (46 naming,
12000 simulated unique reserve), 16 synthetic-JDBC migration failure-boundary
checks, 13 release-tool tests, 1757 warning-free handlers, 2533 unchanged resources
and complete static/linkage gates pass. 3618 prior entries / 111 other service /
eight other population methods remain identical. 56 original hashes / 63 refs
verify. One unchanged normal JAR copied; zero caches present. Independent delivery
passes 70 guards / 93 configs / 31 client hashes and exact recovery/source/artifact/
static/linkage receipts. Inventory20 / 74 client / 142 server receipts passes.

Name-only native SQL receipt: playerbots-names-20261010-163631-012877, external
server backups. Exactly3147 confirmed global legacy world-bot names and native
old_names entries committed in one transaction; a separate JVM/connection verified
all changed names/history, every other players column, previous history and all
six roster/population tables against the reviewed snapshot. IDs/ownership/progress/
items/legion membership/config remain. External exact mappings, fingerprints,
history IDs and recovery SQL are retained; no runtime file/schema was added.
All preceding field/legion invitations/storage/mail/class/raid/population/custody/
shutdown mods remain; appearance disabled. GameServer/Aion remain closed, Login/
Chat untouched. No start/stop/restart/attach/dump/World/actor/character-ID fixture
occurred. Production SQL writes only requested names/native rename history.
PB-VAL-041 actual menu/world names, future creations/restart remain user testing;
full parity remains partial. See [mapping and receipts](PLAYERBOTS_NAMES_20261010.md).

## Native bot legion invitation responses - installed offline - 10 October 2026

PB-REPAIR-LEGION-016 fixes unanswered native legion invitations. Pinned
GuildAcceptAction, outgoing packet trigger and security(ignoreGroup=true) were
read before editing source. Bots consume the registered native response once;
existing LegionService membership/capacity/VOLUNTEER/DAO/history/title paths run.
World bots accept eligible human invitations while retaining independence and
current controller/activity. Private companions retain actual-owner enrollment.
Native rights/faction/denial and lifecycle/custody gates remain. Human requests
stay client-driven. Membership SQL runs outside the population service monitor.

Normal source -> complete Maven output -> unchanged offline runtime copy is
installed: playerbots-source-build-20261010-162009-822859, external server backups.
Review: external staging/output/release-20261010-161118-759618. GS SHA:
55cb2a35d92ac5a91e7f8433f0f8f4e0731b01e3d100761a6e01414a58466f8e.
84 offline sources / 44 suites / 9363 checks (157 invitation), 13 release-tool
checks, 1757 warning-free handlers, 2533 unchanged resources and complete static/
linkage gates pass. 3611 prior entries / 111 existing bot-service / 69 other
LegionService methods remain identical. All 56 original hashes / 63 references
verify. Commons unchanged; one normal JAR copied; 2044 caches backed up/invalidated.
Independent delivery verification passes 70 guards / 93 configs / 31 client hashes
and exact source/artifact/recovery/static/linkage receipts. Inventory 20 checks /
74 client / 141 server receipts passes. Current client system.cfg and all 40 live
config values remain, including world2800..3000/cap3000/admission120 and companion
23/23/city0. All preceding field/storage/mail/class/raid/population/shutdown mods
remain; appearance stays disabled. Runtime remains target-deploy/game-server.
GameServer/Aion are closed; Login/Chat untouched. No start/stop/restart/attach/dump
or production World/DB/ID fixture occurred. PB-VAL-040 actual invitation/member/
restart gameplay remains user acceptance; full parity remains partial. See
[exact mapping and receipt](PLAYERBOTS_LEGION_INVITATIONS_20261010.md).

## Native legion deposits and field repair - installed offline - 10 October 2026

PB-SCOPE-004C ports pinned GuildBankAction requested whole-stack deposits through
native Aion legion storage. Equipment has Deposit to legion and a shared inventory
view; .bot legionbank / .bot gb use exact object IDs and paged lists. Both owned
characters need actual membership/rights in the same legion and an accessible
keeper, current party/alliance and idle gates. Native exclusive lease, shared
mutation/save serialization and transactional character -> legion custody precede
native projection. Partial/stale shared images refuse. Ambiguous outcomes retain
items/IDs and hold companion/legion saves, mutations and disband. No runtime
file/schema, automatic donation, legion membership/rights grant or companion
withdrawal was added; pinned GuildBankAction contains deposit only.

The same verified build installs PB-REPAIR-FIELD-015: actual monster camps instead
of service hubs/lobbies, sparse/per-level spawn coverage, native XP/solo +4 target
bounds, local hunting before travel and distinct saved-reserve progress logging.
All eight field class entries match its separately verified candidate. All prior
population/class/raid/private warehouse/mail/custody/shutdown mods remain;
appearance stays disabled. Full parity remains partial.

83 offline sources / 43 suites / 9206 checks (98 legion / 534 field), 161 real-browser
simulated-response checks, 13 release-tool tests, all 1757 warning-free handlers,
2533 managed-resource audit, full static XML/schema/JAXB and linkage pass. All
130 native faction/level field selections and ten faction starts verify. 3581
prior JAR entries / 109 other service / 109 other session methods remain identical.
All 56 original upstream hashes / 59 scope references verify; Commons unchanged.

Receipt: playerbots-source-build-20261010-154208-865301, external server backups.
Review: external staging/output/release-20261010-153316-224774. GS SHA:
86c5a719eb2e1bdba8bc0a4c5c9db6d15b80a99b47b67f16eb0a2eba9d2e2af4.
Two exact unchanged normal builder files copied: GameServer JAR and Bot.java;
zero generated caches present. Post-install verifies recovery/source/artifact/
static/linkage hashes, 69 other guards / 93 configs / 31 client hashes. Inventory
passes 20 mod checks / 74 client / 140 server historical receipts. All 40 latest
values remain: world 2800..3000/cap3000/admission120, companion23/23, instance
follow true and authorized field city_percent=0. Exact documented config recovery:
playerbots-config-docs-20261010-130146-116003. Both components remain off; no
start/stop/restart/attach/dump or live World/DB/ID fixture was used.

PB-VAL-039 legion/native-human withdrawal/restart and PB-VAL-038 actual field
kills/rewards/rotation remain user gameplay acceptance. World COD/guild-task mail
(004B2), professions (005), broad selectors/autonomous economy and Ranger remain
separate source-gated work. Do not re-port installed slices for pending gameplay.
See [upstream mapping, controls, custody and acceptance](PLAYERBOTS_LEGION_STORAGE_20261010.md)
and [field evidence and acceptance](PLAYERBOTS_FIELD_ACTIVITY_20261010.md).

## Native companion mail - installed offline - 10 October 2026

PB-SCOPE-004B is installed from complete unchanged normal Maven output. Pinned
MailAction/SendMailAction requested listing/read/collection/empty-delete and
item/Kinah mail are adapted through native Aion postboxes, mail, prices and
inventory. Owned alts/Temporary Bots have a Mail tab and .bot mail commands;
both characters must share a regular accessible mailbox and meet native party/
alliance/idle/ownership gates. Exact whole stacks and own wallet/postage are
committed with native mail/inventory SQL before publication. Incoming native
mail and lazy mailbox load share a lock; overflow/partial-load verification,
custody quarantine and shutdown safety remain. No new runtime file/schema or
population polling was added. Human MailService methods remain byte-identical.

81 offline sources / 41 suites / 8574 checks (87 mail), 131 simulated-response
real-browser checks, 12 release-tool tests, all 1757 warning-free handlers,
2533 resource audit and complete static-data/linkage gates pass. 3597 prior JAR
entries / 110 other session methods / all 12 human MailService methods remain.
All 56 original upstream hashes and 57 scope references verify.

Receipt: playerbots-source-build-20261010-124307-762421, external server backups.
Review: external staging/output/mail-20261010-123234-3802677. GameServer SHA:
a5713642c848fcc554f71df3a37567ca179b533bd9f2af0fb9d5b89294ba5427.
Commons unchanged. Normal JAR and builder Bot.java copied unchanged; 2044
handler caches backed up/invalidated. 69 other guards / 93 configs / 31 client
hashes and recovery originals verify. All 40 explicit live config values were
preserved by the documentation receipt playerbots-config-docs-20261010-124029-950064.
User world settings remain 2300-2500, world cap 2500 and admission budget 120;
active/saved personal companion capacities remain 23, instance follow true.
Inventory passes 20 mod checks / 74 client / 136 server historical receipts.
No component start/stop/restart/attach/dump or live World/DB/ID fixture was used.
Both components remain off; PB-VAL-037 native mail gameplay remains user testing.

Full parity remains partial. World-bot mailed sales need native COD custody
(PB-SCOPE-004B2), and automatic CheckMailAction needs native guild-task integration.
Normal mail/exact-ID whole stacks and explicit empty-letter deletion are the
bounded adaptation; packed/courier mail and broad WoW selectors remain separate.
Existing gameserver.playerbots.enable governs mail; no separate send-only toggle
is claimed. Next independent economy port is PB-SCOPE-004C native shared legion
storage, using pinned GuildBankAction and native access/custody first. Professions
and Ranger remain separate. Preserve all installed population/class/raid/private
warehouse/custody/shutdown/appearance-disabled mods. See [exact mapping, controls,
differences and acceptance](PLAYERBOTS_MAIL_20261010.md).

## Private warehouse and startup target - installed offline - 10 October 2026

PB-SCOPE-004A ports pinned master-requested BankAction listing/deposit/withdraw
through native Aion private character storage, banker restrictions and item moves.
Owned alt/Temporary Bot menu controls show capacity and Deposit/Withdraw; .bot bank
uses exact object IDs and paged lists. Whole stacks retain ownership/IDs/attributes;
native SQL custody commits before native projection. Pending unequip changes and
separate ordinary/special cube capacity are handled. Ambiguous outcomes hold the
companion and retain its lease/items. World bots retain private ownership.

PB-REPAIR-POP-014 validates the saved target against config before resident loading,
matching pinned UpdateAIInternal bot_count -> GetBots. Valid targets/events, native
IDs/progress, manual capacity and the single worker/continuation lifecycle remain.
All prior 012D/3000-world/23-companion/class/shared/custody/shutdown/mods are retained.

Verified complete unchanged normal Maven output: 80 offline sources / 40 suites /
8487 checks, 117 warehouse and 21 pipeline checks, 79 real-browser checks with
simulated responses, nine release-tool tests, all 1757 warning-free handlers,
2533 audited resources, complete static-data/linkage and preservation gates pass.
3594 prior JAR entries / 102 other service methods / 110 other session methods
remain. All 56 original upstream hashes and 51 scope references verify.

Review: external staging/output/release-20261010-113447-358376.
GS SHA 25a709fa04fb6131b9cc0fba8611cc39e39cb61b671dd6a73c2abdf64c602259.
Installed offline receipt: playerbots-source-build-20261010-120216-800919,
external archives/server/game-server/backups. Commons unchanged. Two unchanged
builder files copied: normal GameServer JAR and Bot.java; 2044 generated caches
backed up/invalidated. All 69 other guard files / 93 configs / 31 client hashes,
source/output hashes and recovery originals verify. Current system.cfg and
SystemOptionGraphics.cfg were preserved after refreshing the complete inventory:
20 mod checks / 74 client / 134 server historical receipts pass. Final verification
passes 40 suites / 8487 checks. The delivery verifier now checks recorded resource
replacements against their installed builder hash while retaining their original
baseline/backup checks; all 12 tooling tests pass, including three new regressions.
Both components remain off. No component start/stop/restart/attach/dump or live
World/DB/ID test was performed. Installed 012D and all preceding features remain.

PB-VAL-035 warehouse and PB-VAL-036 target/restart gameplay remain user acceptance.
Full parity remains partial. Next economy source review is native mail 004B;
shared storage/professions/full autonomous economy and Ranger remain separate.
Do not re-port this installed slice solely because gameplay acceptance is pending.
See [exact source mapping and acceptance](PLAYERBOTS_WAREHOUSE_20261010.md).

## Documented configuration and 3,000 world bots — installed offline — 10 October 2026

PB-REPAIR-POP-013 supports the user's 2800..3000 global target and 120 admission
budget, including linked policy/factory/event/account bounds (12000 maximum
reserve). All 40 settings have explanations in maintained and live properties;
existing live values, saved IDs/progress and native features remain. Current
ratio 2/account capacity 23 produces 6003 saved reserve characters; active world
cap stays 3000. This does not establish 3000-actor performance on this host.

Normal complete JAR receipt `playerbots-source-build-20261010-100658-476969`;
GS SHA `871cf38e81b58e6317b5701607976d71cdcdb715c716754b0ea74aa30e429ffa`.
77 sources / 38 suites / 8293 checks, nine tooling tests and full gates pass.
3592 prior JAR entries / 108 other service methods preserved; Commons unchanged.
Only normal GS JAR copied; 2044 generated caches archived/invalidated. All current
70 guards / 96 configs / 31 client hashes and recovery verify; inventory 20 checks,
74 client / 132 server receipts passes. Components remain off; no attach/World/DB/IDs.
PB-VAL-033 is user testing; 012D/004A/Ranger and full parity remain unfinished.
See [live file, upstream flow and evidence](PLAYERBOTS_CONFIG_SCALE_20261010.md).

## Native alliance recruitment — installed offline — 10 October 2026

PB-PORT-RAID-012 corrects active raid capacity: owned recruitment accepts native
alliances and expands full ordinary parties through native alliance acceptance.
Active and saved runtime quotas are both 23, superseding previous 5/20 values.
Native 24-person capacity includes humans; leadership, eligibility, ownership,
combat, custody and global limits remain. Presets/formations/menu support 23.
PERF-010/001C/001D and all earlier mods remain. Complete source -> normal builder
-> unchanged JAR installed as `playerbots-source-build-20261010-031529-868535`;
GS SHA `5f2eca434ffa7b353e407fff6ccc960c42bbd52e0646f5cc5911a1e774ac66c4`.
76 sources / 37 suites / 8,229 checks, 49 browser and six tooling checks pass;
full preservation/static-data/linkage and 20 installed-mod checks pass.
PB-VAL-032 gameplay remains user testing. Later native world saves are preserved.
See [source mapping, configuration, receipt and limits](PLAYERBOTS_RAID_PORT_20261010.md).

## Checkpoint/roster repair and configurable creation — installed offline — 10 October 2026

PB-REPAIR-PERF-010 / PB-UI-CREATE-011 are installed from unchanged normal Maven
output. Batched validated roster reads and staggered one-character checkpoint
callbacks preserve custody, saving, 001C/001D and prior features. The menu can
create saved Temporary Bots while a party is full, displaying the existing
configurable per-account capacity (installed value 20). Receipt
`playerbots-source-build-20261010-025721-771968`; GS SHA
`b36e5bd3a6dac360d7a793315a0ed47d466337fb6e18dd636f6de04526863551`.
Commons/config/client files unchanged. 36 suites / 7,008 checks, 33 offline
browser checks, complete canonical gates and 20 inventory checks pass.
Actual latency and creation/recruitment remain PB-VAL-030/031 user acceptance.
See [evidence and configuration](PLAYERBOTS_CHECKPOINT_ROSTER_20261010.md).

## Player-zone world population — installed offline — 10 October 2026

**PB-SCOPE-001D** implements pinned `RandomTeleportForLevel` /
`GetPlayerZoneTeleportLocations` through native Aion geographic SUB zones.
The existing `population.concentrate_player_maps` setting now defaults true
by user request. Field placements prefer occupied real-player map/zone pairs,
retaining level/faction/map/landing guards and worldwide fallback. Existing
city probability remains separate. Visible staff playing normally participate;
hidden staff observers and instance players do not. Both factions are covered.
Reused global characters apply the same decision before visibility; existing
active bots retain safe scheduled relocation. Shared combat/quests/loot, saved
IDs/builds, manual/owned homes, caps and shutdown remain.

**001D and 001C are installed offline** through unchanged normal Maven output
using existing user authorization and fresh successful closed-component checks.
All 73 offline test sources / 34 suites / 6,961 checks pass, including 144 player-zone
and 537 rotation checks. All 1,757 warning-free handlers, 2,533 unchanged resources,
complete static-data/linkage and three method-preservation tooling checks pass.
3,587 prior JAR entries, 91 other service methods and 18 other placement methods
are preserved. All pinned source reference hashes verify.

Receipt: `playerbots-source-build-20261010-023929-118116`, external
`archives/server/game-server/backups`. GameServer SHA-256:
`91366e684396ddc6a7a635a417e1ccc0a439b495742487fafdabc47107f785a1`.
Commons remains `b7d6786f38696b9d81425cee04c4ebf16aa242d76e6c20c1754385168ec2cc6c`.
Only the normal GameServer JAR was copied. Post-install/source/recovery hashes,
70 guard files, 96 configuration files, 31 client hashes and 2,044 backed-up/
invalidated generated caches verify. Inventory passes 20 mod checks; 74 client /
125 server historical receipts remain. Both components remain closed; no start,
restart, attach, native World/SQL/ID fixture or database mutation was used.
The former standalone 001C review is preserved as evidence and superseded by
cumulative installed 001D. PB-VAL-029 player-zone entry/encounter/relocation,
028 reserve rotation/restart and 027 responsiveness remain user gameplay testing.

Full upstream parity remains partial. The next population dependency is
PB-SCOPE-012D native population event/account repository integration; private
warehouse/item usage and Ranger remain independent tracked slices. See the exact upstream/native mapping in
[the player-zone port record](PLAYERBOTS_PLAYER_ZONE_PORT_20261010.md).

## Full upstream port: persistent rotation — verified staged — 10 October 2026

The user renewed the requirement to port all applicable WoW Playerbots behavior,
using the pinned implementation/dependencies/configuration as the authority.
**PB-SCOPE-001C** is the next bounded population port, not a claim of full parity.
It imports maximum-times-ratio persistent factory capacity, shuffled account
cohorts, eligibility/native reuse and failed-login admission release. Default
ratio 2.0 provisions 2,000 persisted characters for the maximum 1,000 active;
existing saved IDs/builds remain and only the finite factory shortfall is created.
Full occupancy no longer blocks reserve provisioning. Native cooldown/readiness,
leases/custody, 1,000 world/100 companion caps and safe shutdown stay enforced.
Failed global entry releases its residence slot while retaining identity and a
completion-based 30-second retry; manual/owned lifecycle remains unchanged.

Fully verified and staged: 72 offline test sources / 33 suites / 6,817 checks,
including 537 rotation checks and 100 synthetic rotations. All 1,757 handlers
compile without warnings; 2,533 resources have no changes; complete static-data,
linkage and preservation gates pass. 3,588 prior JAR entries and 92 other service
methods are preserved. Four new pinned configuration/database dependencies and
all existing source references are hash verified.

Normal builder output SHA-256:
`3f358bfd1e9846edbd9532f7bb0733bdb14ac9e1396b308c19b8db2e70c3a414`.
Review: external `staging/output/release-20261010-021741-870189`.
Runtime remains installed PB-REPAIR-PERF-009 (`d752a8a2...`). GameServer was
restarted by the user; delivery requires fresh closed-component confirmation.
Only the normal GameServer JAR is planned for replacement; 2,044 generated
handler caches will be backed up and invalidated at delivery. No runtime files
were replaced. No component restart/attach/native World/DB/ID fixture was used.
PB-VAL-028 live pool completion/rotation/restart remains user testing.

Full parity remains partial. Native population event/account repository storage
is a subsequent 012 dependency; private warehouse/item-usage and Ranger remain
tracked slices, alongside unfinished travel/quest/class/economy/social/encounter
work. Do not substitute another inventory/re-audit for these implementations.
See [exact upstream flow, mapping and limits](PLAYERBOTS_ROTATION_PORT_20261010.md).

## Collision lag repair and logging bundle — installed offline — 10 October 2026

**PB-REPAIR-PERF-009 / PB-DIAG-SPAWN-007 / PB-DIAG-REPORT-008 are installed**
from unchanged normal Maven output after the user's explicit "Install it" request.
Bot walking probes now reject distant geometry outside their finite endpoints,
retaining native collision/terrain/door/floor/body safety. Successful entries show
`[spawned/target]`; automatic summaries print only changed lines, while manual
`.bot worldstats` retains its full snapshot. Combat, quests, rewards, saved IDs,
owned-alt builds, configuration, appearance-disabled state and shutdown remain.

Receipt: `playerbots-source-build-20261010-020621-826864`, external
`archives/server/game-server/backups`. Installed GameServer SHA:
`d752a8a2a38c82e5971b6f13ce1b2fe3af766ad8c644c47d7c1b6bb7be01a8d4`.
Commons unchanged. All 71 offline sources / 32 suites / 6,280 checks, 1,757
warning-free handlers, full resource/static-data/linkage and preservation gates
pass. 3,584 prior JAR entries remain identical. Fresh offline guards, backup,
installed hashes and rollback originals pass: one normal JAR copied; 2,044
generated caches backed up/invalidated; 70 guard files, all configuration and
31 client hashes preserved. Inventory: 20 checks, 74 client / 124 server receipts.
Both components remain closed; no restart/agent/native World/DB/ID fixture used.
The three authorized read-only thread dumps were a bounded diagnostic exception,
now exhausted. PB-VAL-026 console and PB-VAL-027 population-scale responsiveness
remain user gameplay acceptance. This fixes an evidenced collision hotspot;
other remaining lag sources are not declared resolved by offline tests.

Next evidenced population gap: timed presence has a pool equal to the active
target (806 identities, 713 residents and 93 offline cooldowns in the sampled
files), so it cannot replace departures from an eligible persistent reserve.
This reserve/admission repair is not included here. Full upstream world/class
parity remains partial; warehouse PB-SCOPE-004A and Ranger remain separate.
See [evidence, upstream mapping and limits](PLAYERBOTS_COLLISION_LAG_20261010.md).

## Population continuation repair — installed offline — 10 October 2026

**PB-REPAIR-POP-006 is installed** from unchanged normal Maven output. A pending
native load no longer consumes the next five-second population-manager interval;
successful creation/load resumes global/manual admission and saved loading at
the next existing bounded maintenance poll. One native initialization worker,
failure retries, saved identities, shutdown draining and all shared combat,
quest, loot and movement repairs remain. This addresses the user's large-count
spawn-delay evidence; actual native throughput remains user acceptance.

Receipt: `playerbots-source-build-20261010-010213-634062`, external
`archives/server/game-server/backups`. GameServer SHA-256:
`58bf3f792d3b8a8d61a61d871244c630a1cc6e110dc73c336555e611876d4bc5`;
Commons unchanged. All 70 offline sources / 31 suites / 5,833 checks, 1,757
warning-free handlers and complete resource/static-data/linkage gates pass.
3,589 prior JAR entries and 95 existing service methods remain unchanged; only
three population lifecycle methods and two added deadline helpers differ.
Only the normal GameServer JAR was copied; 0 generated caches invalidated.
Fresh offline process/hash/backup/recovery/preservation checks pass; installed
inventory passes 20 mod checks / 31 client hashes, 74 client / 123 server receipts.
No component startup/attach/native World/DB/ID fixture was used. PB-VAL-025
population fill timing and PB-VAL-024 shared gameplay/saved-ID reuse remain
user-tested. Full upstream parity remains partial. Continue from evidenced
shared-system gaps against pinned source; warehouse PB-SCOPE-004A and Ranger
remain separately tracked work, rather than displacing a demonstrated regression.
See [upstream flow, scheduling evidence and validation](PLAYERBOTS_POPULATION_PIPELINE_20261010.md).

## Shared behavior and persistent identity repair — installed offline — 10 October 2026

**PB-REPAIR-SHARED-001 is installed from unchanged normal Maven output.** Concrete
user gameplay evidence reopens shared movement/response and world activity
integration ahead of the independent warehouse backlog. Per-character reaction
deadlines replace the population-dependent batch sleep; native floor tolerance
and one-pass support retain obstacle guards. Native training dummies are excluded
from grind/field bands; quest intent precedes unrelated grinding. An idle resident
without any reachable activity can use the guarded field relocation, preserving
its character. Creation fills only a genuine persistent-pool shortfall; timed
absence/restart reuses native database characters instead of allocating
replacement identities. Both modes retain the same combat/movement/loot/quest
engine and all prior mods. All 69 offline check sources / 30 suites / 5,820 checks, 1,757 warning-free
handlers, complete static-data/linkage and preservation gates pass. 3,568 prior
JAR entries and every existing GeoMap method remain unchanged. The installed
normal GameServer JAR SHA is 22ae677f9f39b924a65475956bef9fe216d06e1b6ee203dca4f1493af94bf7d9.
Receipt: `playerbots-source-build-20261010-005234-053007`, external
`archives/server/game-server/backups`. Only the normal GameServer JAR was copied;
2,044 generated handler caches were backed up and invalidated. Fresh closed-process,
source/artifact/hash/backup and preservation guards pass; installed inventory passes
20 mod checks / 31 client hashes, with 74 client / 122 server historical receipts.
Commons remains unchanged. All WORLD-004 / NAV-005 and earlier features remain.
No startup, attach, native world, database or ID fixture was run. PB-VAL-024 is
user gameplay acceptance; full upstream parity remains partial.
See [exact source mapping and repair evidence](PLAYERBOTS_SHARED_REPAIR_20261010.md).


## World population and navigation repair — installed offline 10 October 2026

**PB-REPAIR-WORLD-004 / PB-REPAIR-NAV-005 are installed** from unchanged normal
Maven output. World population has its independent 1,000-resident cap; the
100-companion quota remains separate. Failed admissions retry after 30 seconds
without blocking other residents. Console spawn messages and 30-second summaries
report actual spawned bots, target/remaining count, factions, activities and maps.
`.bot worldstats` and paged `.bot worldlist [page] [here]` expose these counts and
coordinates. Distant local detours, supported body-clear walking, safe population
landings, five-metre service camps, saved-position repair before visibility and
upstream destination visitor limits/point spreading repair field activity travel.
Native combat, loot, quests and earned progression remain responsible for rewards.
User defaults (800–1,000 target, timed presence on, city chance 35%) are retained;
no saved character or owned-alt build is rerolled. All prior mods/shutdown repairs
remain; appearance stays disabled and the override remains retired.

Receipt: `playerbots-source-build-20261010-000108-172472` under external
`archives/server/game-server/backups`. GameServer SHA `e1a2cfc01bc31816c1de4056dd80f033a1cb9fd15efe74f60c80d24a4ff7e74f`;
Commons unchanged `b7d6786f38696b9d81425cee04c4ebf16aa242d76e6c20c1754385168ec2cc6c`. All 68 offline test sources / 29 suites / 5,674
checks, 1,757 warning-free handlers, complete static-data/resource/linkage gates
and three method-preservation tests pass; 3,567 prior JAR entries are
byte-identical. Only the normal GameServer JAR and builder's Bot.java were copied;
0 generated caches were backed up/invalidated. Fresh process/hash/backup/rollback
and inventory gates pass (20 mod checks / 31 client hashes). No startup, attach,
world actor, database or native ID fixture was used. **PB-VAL-023** actual
population above 100, both factions, field combat/XP/loot/quest progress, obstacle
movement and 1,000-bot performance remain user gameplay acceptance. Full world
and class parity remains partial. Next independent world/economy work remains
PB-SCOPE-004A private warehouse; Ranger remains separate. See
[exact upstream mapping and validation](PLAYERBOTS_WORLD_REPAIR_20261009.md).

## Safe bot shutdown repair — installed offline 9 October 2026

**PB-REPAIR-WORLD-003 is installed** through unchanged normal Maven output.
Headless bots no longer force the existing 120-second human grace period or
block staff-only fast shutdown. Native creation/load is drained outside the
service monitor, then every bot is saved and logged out before NIO/pool closure.
Failed saves retain reservations and retry; shutdown waits rather than dropping
unsaved progress. Pinned WoW shutdown/login/logout dependencies were read and
blob verified. All earlier population, class, gear, trade, invitation and compiler
repairs remain; appearance stays disabled and the override remains retired.

All 67 test sources / 28 world-free suites / 5,644 checks, 1,757 warning-free
handlers, complete static-data and linkage gates pass. Service's other 73 methods
and 3,582 prior JAR entries are unchanged. Only the normal GameServer JAR was
copied; 2,044 generated handler caches were backed up/invalidated. Fresh process,
backup, hash, rollback and inventory checks pass: 20 mod checks / 31 client hashes,
74 client / 120 server receipts. User-updated system.cfg was preserved after a
full inventory refresh; initial guard refusal copied nothing. No components were
started/attached and no native world/DB/ID fixtures were run.

Receipt: `playerbots-source-build-20261009-233127-865286`, external
`archives/server/game-server/backups`. GameServer SHA-256:
`433e2d250018719e37af7a1d3d184060088a985e13f3cc99cb4676f9b71c6349`.
Commons is unchanged. PB-VAL-022 actual shutdown/save/restart acceptance remains
user testing. The separate missing-in-game report awaits `.bot worldlist` evidence.
See [shutdown mapping and validation](PLAYERBOTS_SHUTDOWN_20261009.md).
Next forward port remains PB-SCOPE-004A; Ranger stays separate.

## Starter placement and handler compiler repairs — installed 9 October 2026

**PB-REPAIR-WORLD-002 and BUILD-REPAIR-HANDLERS-001 are installed** through the
canonical normal Maven release. Native race starting positions remain preferred
hubs for levels 1..5, correcting the reproduced Elyos level-3 omission. All native
placement safety gates remain. The 38 deprecated help implementations and one
unchecked handler cast are repaired; all 1,757 handlers compile with
`-Xlint:deprecation,unchecked -Werror` and zero warnings.

Baseline regression failed at Elyos level 3; the repaired real catalog passes all
10 starter selections and 130 faction/level combinations. Three focused suites
pass 3,179 checks, with 65 test sources compiled. Complete static data and linkage
pass. Only Placement.locations changes; 18 other methods and 3,586 prior JAR
entries are preserved. Guarded backup/copy/rollback delivery installed the normal
GameServer JAR and 39 handlers, archiving/invalidation of 2,044 generated handler
cache files. Inventory: 20 mod checks / 31 client hashes; 74 client / 119 server
receipts. Components were verified closed and remain off.

Receipt: `playerbots-source-build-20261009-225816-372177` under external
`archives/server/game-server/backups`. GameServer SHA-256:
`6701269ad1f5e711b7e089951431b55136358e54c75aa6ba6d36b683932b5abf`. Commons unchanged.

PB-VAL-021 startup/low-level creation and command help remain user testing; no
startup, attach, native world actor, database or ID fixture was run. Next forward
port remains **PB-SCOPE-004A private warehouse decisions**; Ranger stays separate.
See [placement repair](PLAYERBOTS_STARTER_PLACEMENT_20261009.md) and
[handler repair](HANDLER_COMPILER_REPAIR_20261009.md).

## World performance and native alliance repair - installed 9 October 2026

**PB-REPAIR-WORLD-001 is implemented and installed** through unchanged normal Maven output. It repairs measured multi-second population callbacks and chat/trade lock contention, adds missing headless native alliance acceptance, and makes trade refusals specific. Creation/loading use one background native job; callbacks reschedule after completion; ticks release the service lock between bots; destination scoring uses one fresh route table per decision. Existing population/progression/appearance/gear/travel/trade and all prior class/mod behavior remain.

Pinned WoW RandomPlayerbotMgr, TravelMgr, AcceptInvitationAction, TradeAction, TradeStatusAction and newly downloaded blob-verified PlayerbotSecurity.cpp were read and mapped to native Aion services before implementation. Public priced world-bot trading is the user's deliberate policy broader than upstream master/group access; discounts/crafting remain partial. Native team restrictions, ownership, recipients, range/combat and durable custody remain authoritative.

All **26 world-free suites / 5,614 checks**, 65 companion test sources, complete normal build/resources/handlers/static-data/linkage and three release method-preservation tests pass. Real catalog route benchmark: 60 passes, 1,043,400 scores, 6,120 permission callbacks, 111ms. This is offline planning verification, not live server latency acceptance. **PB-VAL-020** is user startup/latency, party/alliance join/follow/release and trading acceptance; 018/019 remain pending.

Receipt: `playerbots-source-build-20261009-185835-746215`, external `archives/server/game-server/backups`. GameServer SHA: `ba4b121bf182ae5bedecb55cd7e8d631ca250f7c550454a72e07340143a15787`; Commons unchanged. 3,565 prior JAR entries remain byte-identical; 3,319 effective classes / 176,708 member references link; 1,757 handlers compile; 2,533 managed resources have no changes. Fresh offline installation/backup/hash/rollback and inventory passed: 20 mod checks / 31 client hashes, 74 client / 118 server receipts. Only GameServer JAR copied. No startup/attach/native world/casts/DB/IDs; components remain off.

See [root cause, exact mapping and acceptance](PLAYERBOTS_WORLD_PERFORMANCE_20261009.md). Next forward world/economy review remains **PB-SCOPE-004A private warehouse decisions**; Ranger is a separate class queue. Do not re-port installed features solely because gameplay remains user-tested.

## Previous global population layer — installed offline 9 October 2026

**PB-SCOPE-001B is implemented and installed** from unchanged normal Maven output. It adds a server-wide random target, dedicated headless candidate pools, faction-balanced admissions, configurable initial level distribution, persisted presence/relocation events and level-appropriate native world placement. PB-SCOPE-001A's quests/combat, earned progression, gear, public trade, invitations/control release, randomized creation looks and headless teleport completion remain installed. Full upstream parity remains partial; **PB-VAL-018/019 gameplay acceptance is pending user testing**.

Defaults: 40–60 global residents, levels 1–65, approximately 50% Elyos, up to 12 admissions/creations per maintenance interval, eligible native open-world maps. Initial random levels/gear are applied only to newly created server-pool characters; saved residents and owned alts are not rerolled. Target counts change every 30–120 minutes; safe idle relocation every 1–5 hours or after earned level changes. Optional timed presence is disabled by default, matching upstream permanent-presence mode. Existing manual `.bot worldpool` pools retain level-one creation.

Receipt: `playerbots-source-build-20261009-181729-863984` under external `archives/server/game-server/backups`. GameServer SHA-256: `c5967690b13a6ac90846bccbae64b2f718aa468c06f4aabc53efebafa564615f`; Commons unchanged. All 25 world-free suites / 2,620 checks, complete resource/handler/static-data/linkage gates and 20 installed-mod checks / 31 client hashes pass. Only the normal GameServer JAR was copied; no managed data or client changes. Components remain off; no startup/attach/live world/database/ID fixtures.

Read [exact upstream mapping, defaults, preservation and remaining differences](PLAYERBOTS_POPULATION_GAP_20261009.md). The active direction remains the world/economy dependency plan. Next bounded source review is **PB-SCOPE-004A: native private warehouse decisions**, using pinned BankAction/item-usage/service dependencies before implementation; mail, shared legion storage and professions remain separate slices. Ranger remains a separate class queue. Gameplay acceptance does not require re-porting already installed behavior.


## Previous PB-SCOPE-001A delivery — 9 October 2026

**PB-SCOPE-001A** is the current user-requested implementation: persistent level-one population, autonomous native quest/combat progression and travel, earned gear management, native invitations/control release, public priced trades and randomized creation appearance. The missing headless teleport/map-entry and XP/Ascension integrations are necessary dependencies. Installed offline from unchanged normal builder output on 9 October 2026. **PB-VAL-018 gameplay remains user-tested.** See [behavior, commands, mapping and verification](PLAYERBOTS_WORLD_20261009.md).

This is the historical 001A delivery record. The current 001B installation and next-work pointer are recorded above; preserve both slices. PB-VAL-018 gameplay remains pending.

Receipt: `playerbots-source-build-20261009-171332-276258` under external `archives/server/game-server/backups`. GameServer SHA-256: `889085448588d0049bbde35982cd591e53034d6bbf3539f9b228221f35385354`. Commons remains `b7d6786f38696b9d81425cee04c4ebf16aa242d76e6c20c1754385168ec2cc6c`.

All 22 world-free suites pass (2,478 checks, 63 test sources), including 102 world lifecycle/planning, 90 public trade and 32 progression/appearance checks. Complete Maven build, 1,757 handler compilation, 2,533 managed-resource audit, production static-data load and linkage of 3,307 classes / 175,145 executable member references pass. 3,515 prior JAR entries remain byte-identical. Only the normal GameServer JAR and builder-produced Bot.java handler were copied. All 20 installed-mod checks and 31 client hashes pass; current inventory records 74 client / 116 server receipts.

## Assassin rune/chain ordering — installed offline 9 October 2026

**PB-PORT-005G** implements the confirmed missing finisher-before-builder
ordering purpose from pinned AssassinationRogueStrategy. Ordinary single-target
Assassin chain fitness now stays within its 23 band (23..23.875), below existing
mature/urgent rune finishers at 25/24. Low-health evasion, critical recovery,
interrupts, native rune eligibility, poison/bleed upkeep, cost/cooldown/chain/
target/AoE/threat gates and all prior classes remain preserved. Native execution
and rune/MP consumption are unchanged; full Assassin/class/world parity is partial.

The actual installed baseline reproduced a mature admitted finisher losing to an
ordinary chain builder before source edits. All 123 new Assassin checks and the
18 previous suites pass: **19 world-free suites / 2,254 checks**; 60 companion
sources compile. Complete normal Maven JAR/ZIP build, source/artifact binding,
assembly/resource audit, 1,757 handler compilations, full production XML/XSD/JAXB
load and 3,289-class / 172,235-reference linkage pass. 3,554 prior JAR entries are
byte-identical; only Offense.routine and Session.tick differ (23/100 other methods
preserved). No managed resources changed. The final fresh build supersedes the
preliminary output rejected after source refinement.

Canonical guarded installation receipt: `playerbots-source-build-20261009-061641-083362`, under external
`archives/server/game-server/backups`. GameServer SHA:
`95955312ddaafed4eccf1ccd34ca3aa017d3c5d1b982b6d2a6913585f76fefe2`. Installed Commons remains
`b7d6786f38696b9d81425cee04c4ebf16aa242d76e6c20c1754385168ec2cc6c`.
The unchanged complete GameServer builder output was the only copied file;
configuration, geometry, launcher, client settings and all prior mods remain.
Fresh shutdown/source/artifact/runtime/client guards, backup/copy/rollback and
inventory refresh passed via `tools/release-game-server.py`. Postinstall:
20 mod checks / 31 client hashes; 74 client / 115 server historical receipts.
Override remains retired and absent; appearance remains disabled. Server/client
remain off; no startup/attach/native casts/effects/world registration/DB/IDs.
**PB-VAL-017 actual Assassin rune/chain/poison/defense combat remains user-tested.**
See [mapping and receipt](PLAYERBOTS_ASSASSIN_20261009.md).

**Next separate review: PB-PORT-005H Ranger.** Compare existing native ranged
positioning, chains, control, buffs and recovery with pinned Hunter strategies
before choosing a confirmed missing behavior. Full class/world and item-ID
release investigation remain unfinished; installed 001/002 gates are preserved.

## Previous Gladiator counter opportunity — installed offline 9 October 2026

**PB-PORT-005F** adds the confirmed missing reactive-attack ordering purpose from
pinned Arms/Fury Warrior strategies. Direct single-target physical Gladiator
counterattacks now precede ordinary fillers/chains while their actual native
counter event is available. Spite Strike and Counter Leech retain the native
five-second parry window, final costs/cooldowns/chain gates and existing drain
fitness. No event is invented, extended or consumed during planning. Interrupts,
critical healing, threat holds, AoE safety and all prior class strategies remain
preserved. Full Gladiator/class/world parity remains partial.

Complete unchanged normal Maven GameServer output is installed in external receipt
`playerbots-source-build-20261009-055725-016513`, retaining Templar 005E, Chanter,
Cleric, PB-BUILD-003, NAV-004, Spiritmaster and all earlier mods. GameServer SHA
`8fd18d49937f696015098638397de80ac529802740b35da753249ac7429b30c1`;
installed Commons remains
`b7d6786f38696b9d81425cee04c4ebf16aa242d76e6c20c1754385168ec2cc6c`.
Only Offense.routine and Session.tick change existing behavior; 23 other Offense
methods, its original switch method, all 100 other Session methods and native
counter/cast/effect execution are preserved. 3,552 prior JAR entries remain
byte-identical. No managed runtime data/resources differ.

The actual installed baseline reproduced filler displacement in three checks
before source edits. All 66 new Gladiator checks plus 17 existing world-free
suites pass (2,131 checks); 59 companion sources compile. Complete assembly audit,
1,757 handler compilations, full production XML/schema/JAXB load and 3,288-class /
172,218-reference linkage pass. Initial process/client-hash guards refused before
copying. Fresh authorized inspection confirmed shutdown; the full passing
inventory refresh preserved changed system.cfg/SystemOptionGraphics.cfg settings.
The unchanged reviewed package then passed every canonical guard and backup/copy/
rollback check through `tools/release-game-server.py --scope PB-PORT-005F --review <review> --install`.
Only GameServer was copied; Commons/configuration/geometry/launcher/client files
remain unchanged by this delivery. Affected generated caches were archived and
invalidated. Postinstall inventory passes 20 mod checks / 31 client hashes;
74 client/114 server historical receipts recorded. Server/client remain off;
no startup/attach/native casts/effects/world registration/DB/ID operations occurred.
**PB-VAL-016 actual Gladiator counter activation, costs/cooldowns, recovery and
combat acceptance remain pending user testing.** See [mapping and receipt](PLAYERBOTS_GLADIATOR_20261009.md).

**Next separate review: PB-PORT-005G Assassin.** Compare existing native rune
builders/finishers, chains, poison upkeep, utility and defense with pinned Rogue
strategies before selecting a missing purpose. Do not repeat PB-PORT-001/002 final
gates solely for withheld gameplay acceptance. Full class/world and item-ID
release investigation remain unfinished.

## Previous Templar pressure protection — installed offline 9 October 2026

**PB-PORT-005E** adds the confirmed missing proactive tank-defense purpose from
pinned TankWarrior: physical block under pressure and earlier low-health native
shields. Iron Skin/Empyrean Shield keep their CLEANSE classification while their
protective payload can be selected without a debuff. Native hit coverage,
pressure, recipients, active-shield preservation, costs, equipment, DP, cooldowns
and final cast gates remain authoritative. Existing tank hate/taunts, melee,
chains, heal/cleanse reservations and earlier class strategies are preserved.
Full Templar/class/world parity remains partial.

Complete unchanged normal Maven GameServer output is installed in external receipt
`playerbots-source-build-20261009-053655-481400`, retaining Chanter 005D,
Cleric 005C, PB-BUILD-003, NAV-004, Spiritmaster and all earlier mods. GameServer SHA
`8dda6e9598f8027915613f1a93cfc610dbbdeb6ec8c2181a2b395ee9fadf650b`.
Installed Commons remains
`b7d6786f38696b9d81425cee04c4ebf16aa242d76e6c20c1754385168ec2cc6c`.
Only Defense.priority, Healing.priority and Session.tick change existing behavior;
ShieldEffect adds one read-only hit-coverage getter with its four existing methods
unchanged. 3,549 prior JAR entries remain byte-identical. No managed runtime data,
configuration, launcher, geometry or client files changed. The builder Commons
manifest differs only in build metadata; all content entries match, so its runtime
file remains unchanged under the canonical affected-component policy.

71 new Templar checks plus 16 existing world-free suites pass (2,065 checks).
Focused existing defense/healing checks add 64 passing assertions. Complete
assembly/resource audit, 1,757 handler compilations, production XML/schema/JAXB
loading and 3,287-class / 172,193-reference linkage pass. Fresh offline process/
source/artifact/runtime/client guards, backup/copy/rollback and cache invalidation
passed through `tools/release-game-server.py --scope PB-PORT-005E --review <review> --install`.
Postinstall inventory passes 20 mod checks and 31 client hashes; 74 client/113
server historical receipts are recorded. Server/client remain off; no startup,
attach, native casts/effects, world registration, database or ID operations occurred.
**PB-VAL-015 native Templar block/shield activation, costs, party benefit and combat
acceptance remain pending user testing.** See [mapping and receipt](PLAYERBOTS_TEMPLAR_20261009.md).

**Next separate review: PB-PORT-005F Gladiator.** Compare current offense, chains,
drains, AoE safety and defense with pinned Warrior damage strategies before
selecting an actual missing behavior. Full class/world and item-ID release
investigation remain unfinished.

## Previous Chanter mantra maintenance — installed offline 9 October 2026

**PB-PORT-005D** ports the confirmed missing Shaman party-support purpose to
native Chanter mantras. The generic combat-buff gate rejected every toggle;
the bounded Chanter exception now admits native self-targeted mantra auras.
Missing learned mantras are ranked by nearby party HP/MP needs, class support,
defense and travel relevance. Existing active mantras are never switched off or
replaced; native three-slot, conflict, range, cost/cooldown and final cast gates
remain authoritative. Healing, melee/chains, interrupts, pet support and owned-alt
builds remain preserved. Full Chanter/class/world parity remains partial.

Complete unchanged normal Maven GameServer output is installed in external receipt
`playerbots-source-build-20261009-051146-587613`, retaining Cleric 005C,
PB-BUILD-003, NAV-004, Spiritmaster and all earlier mods. GameServer SHA
`e23b0c3d33bf54bf7f13a802f1199a1b19af7b5a9db2388790a028a579d98ba2`;
Commons remains `b7d6786f38696b9d81425cee04c4ebf16aa242d76e6c20c1754385168ec2cc6c`.
Only Session.tick/priority and CombatBuffs.useful change existing behavior;
AuraEffect adds three read-only getters and preserves all six execution methods.
3,543 prior JAR entries remain byte-identical. No managed runtime data/resources,
launcher, configuration, geometry or client files were changed by this delivery.

89 Chanter checks plus 15 existing world-free suites pass (1,994 checks).
Complete assembly/resource audit, all 1,757 handler compilations, production
XML/schema/JAXB loading and 3,285-class / 172,096-reference linkage pass.
Postinstall inventory passes 20 mod checks and 31 client hashes; 74 client/112
server historical receipts are recorded. Fresh offline process/source/artifact/
runtime/client checks and guarded backup/copy/rollback passed through
`tools/release-game-server.py --scope PB-PORT-005D --review <review> --install`.
Server/client remain off. No startup/stop/restart, attach, native cast, world actor,
database or ID operation was performed. **PB-VAL-014 actual mantra activation,
party benefit and combat acceptance remain pending user testing.**
See [confirmed gap, pinned sources and evidence](PLAYERBOTS_CHANTER_20261009.md).

**Next separate class review: PB-PORT-005E Templar.** Compare existing native
tank hate/opening/taunt coordination, defenses, positioning and chains against
pinned TankWarrior before selecting a missing behavior. Its paired Gladiator
strategy, other class/world tracks and item-ID release investigation stay open.

## Previous Cleric recovery timing — installed offline 9 October 2026

**PB-PORT-005C** adds the confirmed missing Cleric distinction between immediate
recovery, delayed HoT ticks and conditional HP healing. Native first-heal timing
and useful amount drive critical/low-health ordering and almost-full HoT
maintenance. Existing group/pet targets, hybrid cleanses, reservations,
resurrection, cast/cost/cooldown gates and owned-alt builds are preserved.
Chanter scoring remains unchanged and is the next separate review, **PB-PORT-005D**.
This bounded recovery slice does not establish full Cleric or Playerbots parity.

Complete unchanged normal Maven GameServer output is installed in external receipt
`playerbots-source-build-20261009-045131-933181`, retaining PB-BUILD-003,
NAV-004, Spiritmaster and all earlier mods. GameServer SHA
`bc9de279a811fbd35c8ab1188ada2f07e41a4fa34fe6560efad32f50d9362d6c`;
Commons, launcher, configuration, geometry and all managed runtime data are unchanged.
Only Healing.priority and Session.tick change existing method behavior; CaseHeal
adds read-only metadata getters with all eight execution methods preserved.
3,544 prior JAR entries remain byte-identical.

87 Cleric checks plus 14 existing world-free suites pass (1,905 checks). Complete
assembly audit, all 1,757 handler compilations, production XML/schema/JAXB loading
and 3,284-class / 171,909-reference linkage pass. Postinstall inventory passes
20 mod checks and 31 current client hashes; 74 client/111 server historical receipts
are recorded. Two changed client settings hashes were refreshed through the full
passing inventory and preserved. Initial process/hash guards refused before any
copy; after the user's normal shutdown, fresh checks and guarded backup/copy
succeeded through `tools/release-game-server.py --scope PB-PORT-005C --review <review> --install`.
No startup/stop/restart, attach, native cast, world actor or database operation was
performed. **PB-VAL-013 actual Cleric casting/healing acceptance remains pending
user testing.** See [gap, native mapping and evidence](PLAYERBOTS_CLERIC_20261009.md).

## Complete resource delivery and workflow audit — installed offline 8 October 2026

**PB-BUILD-003** installs all ten remaining maintained handler/static-resource
differences with unchanged normal Maven output in receipt
`playerbots-source-build-20261008-225416-105523`. This includes zone API alignment
and previously undelivered 1 October quest/skill fixes. All 3,549 non-manifest
JAR entries remain byte-identical; NAV-004, Spiritmaster and earlier mods survive.
All 1,757 handlers compile, 14 world-free suites pass (1,818 checks), full static
merge/XSD/JAXB loading and 3,281-class linkage pass. Inventory: 20 checks/31 client
hashes. No startup, attach, gameplay or database operation. Actual startup and
PB-VAL-005/012 gameplay remain pending user testing; next independent class review
remains **PB-PORT-005C Cleric**. Every future GameServer release must use the
canonical locked workflow in `tools/release-game-server.py`. See
[audit, resource list and receipt](BUILD_DELIVERY_AUDIT_20261008.md).

## Current source/static-data alignment - installed offline 8 October 2026

**PB-BUILD-002** fixes the reported `<items>` versus `<set>` startup mismatch.
Matching maintained box XML/schema, import registry, two required item additions
and command sources were delivered with the complete unchanged normal Maven JAR
in receipt `playerbots-source-build-20261008-220257-711786`. Obsolete generated
XML/command caches were archived and invalidated. Full isolated production
static-data merge/schema/JAXB loading passes: 102,012 items, 4,091 decomposable
definitions and 470 overrides. All 3,549 non-manifest JAR entries, including
NAV-004, remain byte-identical; 20 mod checks/31 client hashes pass. The previously
prepared box rework's matching resources are now installed. Actual startup,
movement and box-opening acceptance remain pending user testing. See
[delivery gap, repair and mandatory full-data gate](SOURCE_BUILD_STATIC_DATA_20261008.md).

## Current shared ground recovery - installed offline 8 October 2026

**PB-REPAIR-NAV-004** retains intended destination altitude throughout bot
planning/follow/controller probes. An unsupported elevated starting position can
recover onto its nearest verified floor after unobstructed foot/body sweeps;
ordinary walking, slope, gap/cliff and door guards remain. No map/coordinate
exceptions. Actual mesh traces reach the reported lower position; 57 existing
ground/door/route checks and 3,281-class runtime linkage pass. Complete normal
Maven GameServer output was copied unchanged in receipt
`playerbots-source-build-20261008-214740-770720`; 3,542 unrelated JAR entries,
settings, Commons, launcher and client remain preserved. Installed inventory
passes 20 checks/31 client hashes. **PB-VAL-005 gameplay pending user testing.**
Next independent class review remains PB-PORT-005C Cleric. See
[cause, shared source repair and offline delivery](PLAYERBOTS_GROUND_RECOVERY_20261008.md).

## Previous source-built Spiritmaster slice - installed offline 8 October 2026

**PB-PORT-005B / PB-BUILD-001**: only confirmed missing Spiritmaster single-target
HP/MP-restoring damage/DoT/follow-up ordering was added after checking current
source against three pinned Warlock references. Existing pet/utility/refresh/
threat/native cost and owned-alt behavior is preserved. Complete normal Maven
Commons/GameServer outputs are installed unchanged; the old override is archived
and removed from libs/classpath. Unfinished outfit integration remains disabled
in source. Receipt `playerbots-source-build-20261008-213553-086764`.
59 new checks, all 14 builder-output suites and full 3,281-class linkage pass;
20 installed-mod checks and 31 client hashes pass. **PB-VAL-012 gameplay pending
user testing.** Server/client remain off. Next class review: **PB-PORT-005C Cleric**;
compare existing healing/support first. Full port and other investigations remain open.
See [confirmed gap, native mapping and normal build delivery](PLAYERBOTS_SPIRITMASTER_20261008.md).


## Marketplace session route - installed offline 8 October 2026

Marketplace now sends the native session token like the other private windows,
so authentication does not depend on having exactly one world character when
companions are present. Maintained client builders produced the installation;
only the two browser caves changed, with synchronized graphics/cursor tracking
and both restore baselines. Server files and all unrelated client resources and
settings remain preserved. External receipt
`archives/client/marketplace-session-20261008-205654-357237`.
104 interpreted x64 checks, disposable restore checks, launcher preparation,
guarded rollback verification and 20 installed inventory checks pass. No native
fixture, startup or attach was performed. Actual in-game acceptance is pending.
See [Marketplace session repair](MARKETPLACE_SESSION_20261008.md).

## Previous stationary caster repair - installed offline 8 October 2026

**PB-REPAIR-ENGINE-002** is installed in external receipt
`20261008-201132-984909`; override SHA-256
`d03fd3180a7b9615cbf06e66c4266972a3c9519973d1590419067c450798204c`.
Completed native item tasks no longer fabricate movement during combat and fail
stationary spells at cast completion. Active item cancellation uses native item
observers. Source Java is updated; eight reviewed compiled methods and one helper
are installed, with 172 other entries/unselected methods and all prior mods kept.
147 native task/observer/condition checks, existing effective cast/follow/recall/
trade checks and linkage pass; installed inventory passes 20 checks/31 client hashes.
**PB-VAL-009 actual Songweaver/Sorcerer/Cleric combat acceptance remains pending.**
GameServer/client stay off. Source release audit found unfinished appearance hooks;
Full source-build transition is now installed (PB-BUILD-001); see current status above.
See [root defect, source/build audit and preservation](PLAYERBOTS_ITEM_TASK_CASTING_20261008.md).


## Previous summon and distance recall baseline - installed offline 8 October 2026

**PB-REPAIR-SUMMON-001 / PB-CUSTOM-RECALL-001** are installed in external
receipt `20261008-195139-913545`; override SHA-256
`0524e84d93eae1aba6b0e966e47475e54b82f4f07362dc080e1f031b8b11b7ff`.
Manual Summon retains the owner's own combat restriction and native ownership/
party/lifecycle/configuration checks, but cancels bot casts, trade, loot and
channels rather than requiring every companion to be idle or out of combat.
Living owned bots beyond 60m or separated by map/instance recall before trade,
transfer, movement failure and strategy handling, regardless of their current
activity/order or owner combat, and resume FOLLOW. Native dead-bot recovery and
custody-held/dismissing sessions remain protected.

Actual Java source and maintained tests/staging/install scripts are updated;
the installed delivery changes eight methods in six existing definitions and
adds PlayerBotRecall. All 171 other JAR entries and unselected members survive,
including prior follow/formation/cast/Steel Rake and missing-appearance correction.
Full 2,424-source and 53-check-source compiles, 165 recall checks, prior
679/72/99/49/44/6/17/57/314 checks, and 175-class / 24,476-reference runtime
linkage audit pass. Current client exit-saved graphics preferences are preserved.
**PB-VAL-005 native/client Summon, cancellation, far-bot recall and following
acceptance remains pending user testing.** Server/client remain off; no native
world/DB/ID fixtures or startup/attach. Next class slice remains PB-PORT-005B.
See [recall behavior and source record](PLAYERBOTS_RECALL_20261008.md).


## Previous follow regression repair - installed offline 8 October 2026

**PB-REPAIR-PACKAGING-001** fixes the reported `NoClassDefFoundError` in
`PlayerBotSession.tick`: the previous follow package imported a tick hook to
source-only `PlayerBotAppearance`, which is absent from every runtime library.
The tick aborted before AI/follow actions. The source hook is removed until that
complete custom feature is explicitly integrated; no error swallowing or new
movement workaround was added. Appearance remains source/staged only.

Installed receipt: `20261008-191905-805583`; override SHA-256
`6f72603b8a385f5f9f39c3bdd9b9a8783c06ab17b549e648195e915b9503c5c4`.
Exactly one method changes; all 176 other JAR entries and all other Session
methods are preserved. Prior follow/summon controls, Steel Rake, native cast
safety, settings and owned-alt builds survive. A read-only baseline checkpoint
`191458-608072` records seven equivalent startup-recompiled Steel Rake cache
classes and the preserved legacy instance_follow=true setting.

The new shared staging/final-package/preinstall gate checks actual executable
class/member/lambda references against runtime libraries, excluding source build
classes. It reproduces the old failure and passes the installed 174 classes /
24,383 executable member references. Full 2,423-source compilation, 52 Playerbots
check-source compilation, five gate regressions and prior 679/72/99/49/44/6/17/57/
314 production checks pass. These isolated checks do not establish gameplay.
**PB-VAL-005 actual following remains pending user retest.** Both processes remain
off; no startup/attach or native gameplay/DB/ID execution occurred. Independent
next class port remains **PB-PORT-005B Spiritmaster**. See
[the root-cause and installation record](PLAYERBOTS_LINKAGE_REPAIR_20261008.md).


## Previous follow/summon implementation — installed offline 8 October 2026

PB-REPAIR-FORMATION-002 and PB-CONFIG-001 are installed in external receipt
`20261008-062930-344543`. Continuous direct follow intent refreshes the selected
formation on movement ticks; travel outranks optional idle actions; speed matches
the owner and recovers slot error. Native casts, collision, explicit orders and
role combat positioning remain authoritative. Both server enable/summon switches
are true, with shared ownership/party/combat/cast/trade/loot/channel preflight.
Automatic map/wipe recovery remains independent of the manual summon switch.

679 new effective checks plus core 72/engine 99/composition 49/spell planning 44/
speed packets 6/trail 17/ground 57/formation 314 pass. All 2,423 current server
sources compile externally; all Playerbots check sources compile. Initially thirteen
methods/six existing definitions changed, 166 earlier JAR entries retained. Latest
Steel Rake `061243-633233` and core execution `054856-494763` survive. Only the
cumulative JAR and main Playerbots config changed; base/launcher/geometry/scripts/
bundled UI/31 client hashes/alt builds retained. Inventory: 20 checks, 73 client/
102 server receipts. Override SHA-256:
`f4855888ee12bea913327c8be2462835e292cb3c4f5ec5db5cd4e891221c5a27`.

PB-VAL-005 actual rendered movement/formation/turns/flight/doors and summon control
acceptance remain the user's tests. The new config field is cold-load-only.
GameServer/client stayed off; no startup/restart/attach, native gameplay or real
DB/world/ID writes. This repair does not close full parity or block independent
tracks. **Next class port remains PB-PORT-005B Spiritmaster.** See
[follow/summon behavior, sources and acceptance](PLAYERBOTS_FOLLOW_SUMMON_20261008.md).


This is the continuity inventory for all conversations in this project. The user
requires later installations to retain earlier mods, including their recovery
records. Refresh evidence before installation; do not infer installation from a
source commit, an old staging package, or a backup directory alone.

Checked on 8 October 2026 against the actual client and server deployment.
`INSTALLED_MODS.json` records 31 current file hashes, 20 native/layout/recovery
checks, 73 client receipts, 99 server receipts and selected deployed settings.
All 20 checks pass. The earlier recruitment comparison failure was traced to five
compiler-regenerated native dungeon cache classes; reviewed methods/schema were
verified identical and current bytes recorded without replacing them. These checks
establish presence/preservation, not acceptance of every game flow. See
`PLAYERBOTS_CAST_EXECUTION_20261008.md` and `LOGIN_RECONNECT_CRASH_20261008.md`.

| Feature | Current evidence / status | Preserve and remaining checks |
| --- | --- | --- |
| DXVK renderer, native graphics menu and cursor | Installed; all launcher preparation checks pass. Vulkan remains selected. | Keep cached graphics payload, three tracking records and graphics/cursor restore DLLs synchronized with every later native change. |
| High Quality settings, broad graphics package and PostFX | Installed; launcher verified the 128-archive broad package. `VisualOverhaul` and `GraphicsOverhaul` receipts remain. | Retain terrain/environment/effects, shader/layer files and renderer preferences. Visual acceptance is separate. |
| Free flight | Installed startup helper passes; existing server changes preserved. | Preserve encoded `g_freefly` and server permissions; actual zone flight remains a gameplay check. |
| Unified Inventory | Installed base/English movable searchable layout; deployed unified setting enabled. 180 base slots, up to 279. | Preserve native slot/search/scroll/effect-loop patches, expansion credit and saved item positions. |
| Expanded Character/Account Warehouses | Installed base/English search controls; deployed setting enabled, 360/540 slots. | Preserve native counts, both search panes, high-slot persistence and Legion Warehouse behavior. |
| Detached/movable Inventory, Equipment and Warehouse | Current base/English layouts have movable titles without forced alignment; companion patch retained all other DLL bytes. | Keep independent window lifetime, search/scroll positions and native docking fixes. |
| Black Cloud Marketplace/Kinah shop | **Session repair installed/offline verified**, 8 October: Shop bridge sends its token; companions no longer defeat the one-world-player fallback. See `MARKETPLACE_SESSION_20261008.md`. | Preserve catalog/prices, upgrades, mail transactions, native previews and artwork. No server or balance changes. Actual in-game acceptance pending. |
| Central Market, storage, simulated traders and Broker | Installed menu/route; deployed broker and simulated-market options enabled. Market performance/custody/quantity receipts remain. | Retain storage selection, orders, escrow, collection, favorites, history, deferred icons and fixes to quantities/cached actions. |
| Native HUD Market/Shop shortcuts | `AionMarketShortcut.dll` present and preserved; receipt history retained. | Retain both HUD styles, positioning and native event routing. |
| Original client item icons, sprite/layout repairs and previews | `AionIconBridge.dll` retained; current index matches the exact installed Items archive length/hash. | Preserve native DDS decoding/sprite metadata, callback chaining, shop/market/pass icons and preview integration; no distributed extracted PNG substitute. |
| Native Wardrobe, artwork and equipment preview | Wardrobe XML, native Lua, icon/theme entries and browser route present. | Preserve unlock/apply/outfits, native tooltips, preview ownership/controls, theme and signing. |
| Signed Additional Functions and compact browser titles | Shop, Market, Wardrobe, Journey, Season Pass and Companion actions remain; all six native browser routes match expected hook code. | Keep compact auth/title handling, stock model key, separate addon key, bundled Lua/pet signatures and existing archive entries. |
| Choose Your Journey, Elyos/Asmodian entry and ceremony rewards | Menu/native journey route and deployed option present; journey/bootstrap/both-faction and ceremony receipts retained. | Keep native visibility/session callbacks, choice persistence, faction/class choices, mailed rewards, legacy duplicate protection and deferred normal ceremony turn-in rewards. |
| Aetherfall Season Pass | Menu/native route and ticket in both English HUDs present; server/pass/UI receipts retained. | Preserve rewards, claims, account persistence, previews, automatic refresh, artwork and native tooltips. |
| Remember Account & Password / return to login | **Installed/offline verified**, 8 October: AFK reconnect crash traced to native runtime writes into the Reset cave. Observer moved to the dedicated login patch section, with independent graphics/cursor restore imports. Login extension and all five prior hooks retained. External receipt `archives/client/remember-login-return-20261008-050005-613742`. | Preserve opt-in vault, masking, localized Announcement and typed edits. AFK Reconnect/Login and ordinary Logout/Login remain actual client acceptance; see `LOGIN_RECONNECT_CRASH_20261008.md` and `LOGIN_RETURN_20261007.md`. |
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
| Custom window login delay | **Installed/offline verified**, 7 October: bounded RelicCalc style-command batching; external receipt `archives/client/window-queue-20261007-221447-067110`. | Shared UI queue reached 4,001 during the reproduced login delay. Preserve native artwork/setters, six routes, graphics/cursor records and both restore baselines. Launcher and disposable restore checks pass. Actual first-login latency, Wardrobe visuals and pet/menu acceptance remain pending; see `CUSTOM_WINDOW_DELAY_20261007.md`. |
| AFK keepalive experiment | Removed intentionally; deployed JAR has no `AfkKeepAlive` classes and no AFK config file. | Do not restore it from an old build/backup. Connection survival had not established prevention of the client AFK timer. |

Final pre-handoff lock-order correction is included in that receipt: AI-resolved
local geometry is cached, so movement refresh and follow speed never acquire
service/session formation locks under the mover monitor. Three Formation methods
plus FollowIntent refresh/cache initialization and a new Geometry record changed;
174 other entries retained. Effective bytecode and world-free cache tests pass.
Cold-load-only helper schema; future existing helper edits require explicit SCOPES.


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
open. PB-REPAIR-FOLLOW-001 was rejected and removed in `171732-465446`.
Generic navigation PB-REPAIR-NAV-002 is installed offline through `190312-034119`.
The user reported continued failure after `175949-485037`; the latest continuation
repairs reached-breadcrumb progress in the shared follow executor (17 progress and
40 geometry checks pass). Actual door/room/combat/party acceptance remains pending. Appearance remains source/staged only
and must be restaged against the current cumulative receipt before installation.
All earlier unfinished port/repair work survives.

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
repository namespaces and the full port remain partial. Appearance remains
source/staged only and must be restaged against the current receipt before install.

## PB-REPAIR-FOLLOW-001 — removed by user request 7 October 2026

The user rejected the stalled-follower teleport fallback because companions must
walk through opened doors and rooms while entering/leaving combat. It was removed
from source and deployment in `playerbots-recruitment-20261007-171732-465446`.
The override and incidental bots.js change were restored exactly to the complete
metadata baseline. Historical packages/receipts remain evidence and must not be
reinstalled. See [removal record](PLAYERBOTS_FOLLOW_RECOVERY_20261005.md).

## PB-REPAIR-NAV-002 — initial generic navigation installed offline 7 October 2026 (superseded below)

Bots recognize native opened doors whose collision leaf incorrectly duplicates
the closed leaf, including separately stored identical meshes. They use smaller
floor probes, tighter local routes and floor-following movement at every movement
tick. Ranged movement seeks a walkable firing position while retaining native
cast sight/range checks. The same movement path is used for follow, combat, retreat
and hazards; there is no dungeon/door/room allowlist or recovery teleport.

Five methods in four existing definitions changed; two helper definitions were
added. **151 earlier override entries are byte-identical**. All native geometry,
base JAR, launcher, command/UI, 93 settings/media files and 31 client hashes remain
unchanged. Current override SHA-256:
`a39133ac5c6caa958a8ce7fd65c7b4812d56481297c44b164592503f6d1c3cdc`.
Current cumulative receipt:
`D:/Proiecte/Project Restructure/Aion Development Workspace/archives/server/game-server/backups/playerbots-recruitment-20261007-175949-485037`.

Full offline source compilation passes, as do 40 isolated native mesh/route checks
and all 15 opened/closed door crossing comparisons against unchanged installed
geometry. Inventory passes 16 checks, recording 70 client/89 server historical
receipts. No server/client startup, restart, attach, DB write or actor fixture ran.
The actual reported room freezes are not reproduced/closed by these isolated
probes. Room/combat/party acceptance stays pending with the user. See
[navigation evidence and limits](PLAYERBOTS_NAVIGATION_20261007.md).


### PB-REPAIR-NAV-002 continuation — follow progress installed offline 7 October

User screenshots prove the initial door adapter did not close the failure. The
shared follow executor now consumes every breadcrumb through the newest reached
point and rejects already reached destinations; stale heads can no longer pin
progress at a visible point behind a door. Navigation reports a reached waypoint
accurately. No map/door/room exceptions or combat-state recovery gate are added.

Current cumulative receipt is
`D:/Proiecte/Project Restructure/Aion Development Workspace/archives/server/game-server/backups/playerbots-recruitment-20261007-190312-034119`.
Override SHA-256:
`8fac72f9facd7b56204f6d3488fcf6eb88fdb6b2e01f65270024fc424aa2007c`.
Only Navigation.follow/move changed, one helper added; 156 prior entries remain
byte-identical. Base JAR, launcher, native geometry, command/UI, 61 current
settings/media files and all 31 current client hashes survive. Host CIM confirmed
GameServer/client off; installer rechecked twice. No agent startup/attach occurred.

Full source compile (2,413 server sources), 17 progress/40 geometry checks against
the installed JAR, selected source/effective methods and all 16 mod inventory
checks pass. Inventory records 70 client/91 server historical receipts. The
constructed history at reported coordinates proves an engine defect, not the
complete live trail/cause. Actual door/room/combat/party acceptance remains pending.


## Current continuation — PB-SCOPE-012B installed and 52 files retired

On the user's remaining-file report, preferences (17), behavior (13), spacing (7),
formation (2) and reward witnesses (13) moved to native MetadataDAO persistence.
All 52 rows imported and verified exactly from a separate read-only connection;
all 52 originals archived/hash-verified then removed offline. Nine media/preset/
removal files remain unchanged. Current cumulative receipt is `191742-640906`,
cleanup `191828-971151`; override SHA-256 `83a3143148a2e3a8f5b28894742399db05f8c302111990df41b2adf99b2dc978`.
The complete navigation repair and other mods survive (152 prior entries identical).
Eleven existing methods/six definitions changed, one helper added. Full compile,
35 existing metadata/31 preference checks, 16 mod checks/31 client hashes pass;
inventory 70 client/93 server receipts. GameServer/client remain off; no lifecycle
action or live attach occurred. Actual settings/reward/restart acceptance remains
PB-VAL-011; door/room acceptance remains PB-VAL-005. PB-PORT-005B stays next class
slice; Temporary creation gear-file gap PB-SCOPE-012A-R1 remains separate/open.
See [remaining preference namespaces and evidence](PLAYERBOTS_METADATA_PREFERENCES_20261007.md).


## Current continuation — PB-SCOPE-012C repository installed, runtime folders retired

Two saved-party documents and four removal markers now use native account/roster
repository tables; three UI files are bundled unchanged in the cumulative JAR.
Six exact native owned rows imported/verified read-only, nine originals externally
archived/hash-verified and retired; saved-parties/removed/media folders are absent,
runtime config/playerbots is empty. Creation gap PB-SCOPE-012A-R1 is also repaired:
pre-row generated provenance queues into the first native inventory checkpoint.
Current cumulative receipt `193213-430087`, SHA-256
`4a65e21ca22fff63a2d1cbbf7d0472bbb314894994045ceba5264894581de69b`.
Eight existing methods/five definitions changed; 154 prior entries byte-identical.
Full compile/24 repository/10 creation checks and 17 mod checks/31 client hashes
pass. Native read-only production loaders pass for both accounts/four removed
roster entries. Inventory: 70 client/94 server receipts. Server/client remained
off, no attach or lifecycle action. Actual preset/remove/UI/new-creation/restart
acceptance remains with user; PB-PORT-005B stays next independent class slice.
See [native repository and packaged interface](PLAYERBOTS_REPOSITORY_20261007.md).


## Steel Rake encounters and general physical-see-through navigation — 7 October

PB-SCOPE-007A native boss lifecycle/visible companion tactics installed offline in
`223400-856173`; PB-REPAIR-NAV-003 shared ground support followed in `224940-884362`.
Final two-script phase-target correction `225401-230689` retains the same cumulative
JAR SHA-256 `8653514fdf8956c3ffcf3e311c84ccd6341a8525e6832cf45e760fde8e4662e0`.
Preserve steam/bomb warnings, protected phases, registered captain adds, Mantutu's
single FOLLOW operator/native food-water channel and encounter-owned callback
cleanup. Shared floor probes now recognise PHYSICAL_SEE_THROUGH support with
native slope/height/wall/closed-door checks; no room/map exception or teleport.
All prior cumulative mods, bundled UI, native repository/settings, launcher,
base JAR and geodata remain intact. Full final source/13-handler compile, 113
isolated policy/callback/navigation checks, exact reported mesh movement and 15
door-state comparisons pass. Refreshed inventory: 19 checks, 31 client hashes,
72 client/97 server receipts. GameServer/client remain off; boss/room/combat
client acceptance is pending. See the current [encounter record](PLAYERBOTS_STEEL_RAKE_20261007.md)
and [navigation record](PLAYERBOTS_NAVIGATION_20261007.md). Full port and other
unfinished work are unchanged in scope; appearance remains source/staged only.


## Current repair — PB-REPAIR-ENGINE-001 installed offline 8 October 2026

The shared mover could execute stale work after casting began, and repeated orders
cancelled native casts. Unchanged preferences also discarded engine continuers.
Core moveStep/Session order/applyPreferences/CastAction.execute now enforce current
movement/casting state, atomic mover/cast admission and idempotent controls. Real
order/mission/attack changes still interrupt deliberately. No delay/spacing tuning,
global cancel suppression or change to native interruption rules was added.

Four baseline production failures reproduced; 72 effective core checks, 99 engine,
31 recording-JDBC preference, 49 composition, 44 spell-planning and 17 navigation
checks pass. All 2,420 sources compile externally. Four methods/three definitions
changed; 168 unrelated JAR entries and all earlier mods/owned-alt builds retained.
Five compiler-regenerated native handler cache classes were method/schema verified
against reviewed references and archived unchanged, without disabling hash guards.
All 20 inventory checks/31 client hashes pass; 73 client/99 server receipts.

Current core receipt is external `20261008-054856-494763`, override SHA-256
`77890851c3e6b15ca73558abb62266ffbf32b88722c5825ae73963ebb13cfa93`.
GameServer/client remained off; no startup/restart/attach, native casts, world/ID
operations or real DB writes. PB-VAL-009 actual cast/charge/chain/control gameplay
acceptance remains the user's test. PB-PORT-005B Spiritmaster remains the independent
next class slice; other port/validation tracks remain open. See
[core execution diagnosis and control review](PLAYERBOTS_CAST_EXECUTION_20261008.md).


## Current continuation — PB-SCOPE-007A-R1 original Steel Rake TODO behavior

Installed offline 8 October 2026 in external cumulative receipt
`playerbots-recruitment-20261008-061243-633233`, retaining concurrent engine repair
`054856-494763` and all earlier navigation/mods. Current override SHA-256:
`abe0403e86bc715d20d44625e87ffd0e5e56a9051b74e11d061d1bc88c56d76d`.
Captain towers, floor-correct add lanes, staircase retreat/return, native amplifier
activation/enhancement/root and sequenced pull/blast now run through owned phases;
gunner pause also blocks already queued attacks/casts. Companion tactics exclude
scenery and prioritize engaged caster/healer adds. All seven original comment
texts remain beside implementations; the historical packet-capture evidence gap
is explicit. Exact retail offsets/cadence are unverified native-asset adaptations.

Three effective methods/two definitions change, one tactic helper is added and
169 unrelated JAR entries are byte-identical. 2,423 core sources/15 handlers
compile externally; 479 isolated phase/tactic/callback/navigation/core regression
checks and read-only native floor/add-lane checks pass. Post-install package and
20 mod checks/31 client hashes pass; inventory 73 client/100 server receipts.
Bundled UI, native repositories, owned alt builds, generic floor routing, client,
launcher/base/geodata and source-only appearance work survive. Runtime bot config
remains empty. GameServer/client stayed off; actual encounter casts, movement,
wipes and client presentation remain user acceptance. PB-PORT-005B remains the
independent next class implementation; broader parity/other investigations remain
open. See [TODO mapping, sources and evidence limits](PLAYERBOTS_STEEL_RAKE_20261007.md).
