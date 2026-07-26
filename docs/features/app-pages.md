# Sister-app landing pages

`src/pages/ComicReader.jsx`, `WebApp.jsx`, `GrepTagReader.jsx`, `ArchiveScanner.jsx` —
one landing page per app, each reachable at its own top-level route (`/comicreader`,
`/grepreader`, `/archive`) plus a generic `/webapp` page.

`SmartDecrypt.jsx` and `ContentCue.jsx` (`/smartdecrypt`, `/contentcue`) are **not**
landing pages anymore — retired 2026-07-20 in favor of their listing on
mlogictech.com/products (off-theme for a reader-focused hub, ~0 organic search on
either page). Both still render a short noindexed "this app has moved" stub with a
link to the mlogictech.com listing, the App Store, and back to BiblioFuse — that stub
page itself is unchanged. `/smartdecrypt/changelog`, `/smartdecrypt/privacy`,
`/contentcue/changelog`, `/contentcue/privacy` are untouched — still the real App
Store-facing compliance pages, still indexed for `en`.

**Temporary, 2026-07-26**: every internal link that used to point at these pages
(Navigation tools dropdown, Footer product list, Home.jsx product-family cards) was
first changed to point at mlogictech.com instead of routing through the stub, but
mlogictech.com/products isn't actually live with these listings yet. Per the product
owner, all of these now point straight at the App Store instead (`smartDecryptAppStoreUrl`
/ `contentCueAppStoreUrl` constants, duplicated locally in `Navigation.jsx`,
`Footer.jsx`, and `Home.jsx` since these components don't share a common constants
module — kept in sync by hand). The same fix was applied to the 7 blog posts that
link to SmartDecrypt and the 1 that links to ContentCue (see `blog.md` if it exists,
or grep `public/blog/*/*.md` for `apps.apple.com/ca/app/smartdecrypt` /
`apps.apple.com/us/app/contentcue`). **Swap these back to mlogictech.com once that
listing goes live** — don't leave the App Store direct-link as permanent without
revisiting; it exists only because mlogictech.com wasn't ready.

## Shared conventions
- Each app page hides the global `Footer` (see the `isWebApp` / `isComicReader` /
  `isGrepTagReader` / etc. flags in `App.jsx`'s `AppLayout`) since these pages have
  their own app-specific footer/CTA content.
- Each app has a matching pair of sub-pages:
  `/<app>/changelog` → `AppChangelog` (see `changelog.md`)
  `/<app>/privacy` → `AppPrivacy` (see `privacy-pages.md`)
  except the flagship BiblioFuse Reader, which uses the shared `/changelog` and
  `/privacy` pages.
- App logos/screenshots live under `public/image/<app-name>*` and
  `src/assets/` (for BiblioFuse's own feature icons).
- App Store Connect screenshots may be reused when they accurately show the
  feature, but add site-sized derivatives under `public/image/<app>/` instead of
  linking to the raw ASC source files. Keep them framed/cropped so the page's own
  heading remains the primary heading.
- Every native-app hero shows a `DevicePills` row
  (`src/components/DevicePills.jsx`): small inline-SVG icons + labels for the
  platforms the app actually ships on (iphone/ipad/mac/visionpro/appletv/carplay/
  windows/android/web/docker/synology keys — docker/synology are host-only NAS
  surfaces, not reading devices, added when the comicreader hero grew a
  self-hosting section). `tone="dark"|"light"` matches the hero background,
  `align="start"` for left-aligned heroes. Device names are proper nouns and are
  deliberately not translated. `/webapp` skips the row (it is itself the
  browser tool).

## Android request page
The homepage Android demand CTA routes to `/:lang/androidrequest/` instead of opening
`mailto:`. `src/pages/AndroidRequest.jsx` renders a localized noindex form that posts
to the Google Apps Script endpoint configured by `VITE_ANDROID_REQUEST_SCRIPT_URL`.
Because Google Apps Script web apps return an opaque cross-origin response to this
static site, the submit UI treats the request as accepted after a short grace period
instead of waiting indefinitely for a readable response.
Submissions include the visible answers plus hidden context fields:
`siteLanguage`, `browserLanguage`, `pagePath`, `referrer`, and `submittedAt`.

The app-interest list is intentionally fixed to:
`BiblioFuse GrepTag Reader`, `SmartDecrypt PDF ZIP`, `ContentCue`, and
`Others, please specify`. Comic Duplicate Scanner is intentionally excluded because it
needs a bigger screen.

`/androidrequest` is generated as a static fallback for all 11 locales and marked
`noindex, follow`, but it is not added to the sitemap.

## Flagship BiblioFuse Reader
`src/pages/ComicReader.jsx` is the Layer-1 page for the flagship comic/ebook reader at
`/comicreader`. It reuses the translated `redesign.readerSection.*`,
`redesign.toolsHighlight.*`, and `redesign.grepTagPage.whySeparate.*` copy that also
supports the homepage reader chooser and the GrepTag comparison, so the comic-vs-novel distinction
stays consistent across the hub.

**Homepage structure, updated 2026-07-20**: the old single generic `Hero` +
6-card `ProductFamily` grid + card-based `TwoAppsSection` gave all products equal
visual weight and buried the actual flagship decision under the whole family grid.
Current order: `Hero` (BiblioFuse Reader) → `GrepTagHero` (new, reuses
`redesign.grepTagPage.hero.*` copy) → `ReaderComparisonTable` (the "Why two apps?"
table, `src/components/ReaderComparisonTable.jsx`) → `ProductFamily` grid for the rest
of the family. `TwoAppsSection` was removed entirely (redundant with the table
version); its `redesign.twoAppsSection.*` translation keys other than `.textCta`
(still used for the table's CTA) are now unused across all 11 locale files.
`ReaderComparisonTable` is homepage-only now — it also used to render on
`/comicreader/` itself (`id="why-two-apps"`) but that was a duplicate of the homepage
section and was removed from `ComicReader.jsx` on 2026-07-21.

**Per-column CTAs, 2026-07-26**: the table used to end in a single centered button
that only linked to `/grepreader/`, even though the table compares both apps —
replaced with a final table row with one button per column: BiblioFuse Reader's cell
links to `/comicreader/` (new key `redesign.grepTagPage.whySeparate.readerCta`,
"Explore BiblioFuse Reader", parallel to the existing `.textCta` GrepTag copy), and
GrepTag's cell keeps its original `/grepreader/` link and `.textCta` text unchanged.

`Hero`'s `DevicePills` list had drifted from `/comicreader/`'s own hero — missing
`docker`/`synology` (added there when the comicreader hero grew a self-hosting
section) — fixed 2026-07-26 to match. `Hero` also had no link to `/comicreader/`
itself despite being the flagship product's homepage entry point; added a "Learn
more →" link (reuses the existing `redesign.productFamily.learnMore` key) right
under the device chips.

Homepage FAQ copy should stay at the brand/app-chooser level; setup-heavy BiblioFuse
Reader questions belong on `/comicreader` or focused help/blog pages. The full Reader
FAQ lives in `redesign.comicReaderPage.faq` so troubleshooting answers can include
nested bullet steps, code-formatted filenames, and support links without bloating the
homepage.

### Edition comparison table (`/comicreader/`, updated 2026-07-26)
`ComparisonTable`, `id="comparison-table"`, rendered on `/comicreader/` right after
`VisionProSection`: a 10-row feature table across 4 editions (Apple, PC, Android, and
a new NAS column for Docker/Synology self-hosting) driven entirely by
`redesign.home.table` in each locale's `translation.json` (`editions`/`subtitles`/
`badges`/`rows`, 5-cell rows: label + one cell per edition; `renderLocalizedTableCell`
parses each cell's `main|note` or stacked `main|sub||main2|sub2` pipe syntax). Fully
translated across all 11 locales, unlike `ReaderFamilyGuide` below it.

Rebuilt 2026-07-24 after an Android-parity audit against
`bibliofuse-android-native`'s source (`docs/ios-android-feature-parity.md` plus direct
code checks) showed the table had drifted: Android had actually reached read-format,
compress/merge, and reader-feature (TTS included) parity with Apple/PC, and shipped a
real streaming client (NSD discovery, PIN auth, Local Wi-Fi + Manual Tailscale — no
automatic iCloud discovery, since Android has no iCloud Documents access). The old
single "PC/Mac → iPhone streaming" row no longer made sense once Android could also
stream and NAS could also host, so it was split into two rows, **"Can host a
library"** and **"Stream from a host"** — the latter carries the `unique` badge now,
for Apple's automatic iCloud + Tailscale discovery (still not matched by Android's
Local-Wi-Fi/Manual-Tailscale-only client).

The NAS column itself was checked against the `bibliofuse-nas` repo (Go host +
embedded browser reader, `docs/features/web-reader.md`): the browser reader supports
EPUB, CBZ/CBR/RAR/ZIP, and TXT/TEXT/MD — **no PDF** (explicitly out of scope per
`docs/docker-synology-web-reader-plan.md`) — with continuous-scroll comics, adjustable
font size, 0–5 ratings, and tags, but no TTS or peek zoom. No compress/merge tools
exist on the host side, so that row stays "-" for NAS.

**`Language support` NAS cell, corrected 2026-07-26**: on 2026-07-24 this was "-" —
the `bibliofuse-nas` repo had no UI localization at all (only JS's locale-aware
`toLocaleLowerCase`/`localeCompare` sorting helpers and a hardcoded `lang="en"` HTML
attribute). That changed with the repo's `60c58ca` commit ("Localize NAS web app and
distribution guides", 2026-07-26), which added a real `internal/webui/assets/i18n.js`
covering the same 11 languages as this site (`LANGUAGE_CODES` in that file: en, es,
fr, nl, pt, ru, zh-CN, ja, ko, id, ms). The cell now reads "11 languages" like
Apple/PC. This is a concrete example of why `docs/index.md`'s sibling-repo section
says to check the actual repo rather than trust an older note in this doc — the
underlying product changed after this doc was first written.

Apple TV and Android TV were added to the Apple/Android subtitle device lists
(previously missing) once Android TV's streaming client was confirmed shipped
(2026-07-24) — see the `ReaderFamilyGuide` note below. Since both TV platforms are
LAN-only companion apps with no iCloud/hosting role, unlike the rest of their
column's devices, the **"Can host a library"**, **"Stream from a host"**, and
**"iCloud bookshelf"** rows footnote them separately via the same
`main|sub||main2|sub2` stacked-cell syntax already used for Mac-only hosting —
Apple TV and Android TV are both Local-Wi-Fi-only, no Tailscale, no iCloud.

**"Read formats" row (updated 2026-07-24)** also footnotes Apple TV and Android TV:
both are CBZ/CBR/ZIP/RAR only, confirmed against `bibliofuse_iosv2`'s
`docs/tvos-streaming-reader-go-no-go-port-plan.md` (PDF/EPUB/TXT/Markdown
deliberately excluded from the tvOS v1 product) and `bibliofuse-android-native`'s
`TvArchiveKind.kt`, whose own doc comment calls itself "a port of tvOS
`TVArchiveKind`" — the same restriction, ported deliberately, not two independent
gaps. See `docs/index.md`'s new "Sibling product repos" section for these repo
paths and what each one covers.

**"Controller input" row (added 2026-07-24 as "Controller / external input",
renamed 2026-07-26 since it only ever described controller input)**: Apple
(iPhone, iPad, Mac, Vision Pro, Apple TV) has full customizable Xbox-style
Bluetooth controller support (`bibliofuse_iosv2/docs/features/
ios-controller-input.md` and `universal-input-mapping.md`); PC has the same Gold
Controller Default with fixed (non-customizable) bindings
(`bibliofuse-windows/docs/features/universal-input-mapping.md`); Android TV has
built-in D-pad/remote navigation wired into its reader. NAS has no controller
support (keyboard only in the browser reader), so that cell is "-".

**Android phone/tablet, corrected 2026-07-26**: on 2026-07-24 this cell said the
controller framework existed but wasn't wired to reader actions, per
`bibliofuse-android-native/docs/phone-external-controller-bindings.md`'s explicit
warning not to market it as available. That doc is now stale relative to the code —
commits `173e301` ("add customizable controller input"), `85a9c16` ("localize
controller bindings"), and `f9c491a` ("Fix controller navigation and remote
thumbnails") landed 2026-07-26 and shipped the real thing: `ControllerSettingsScreen`
now has a working capture flow (`beginCapture`) with same-surface conflict swapping
and a Restore Xbox Defaults action, bindings persist via `persistBindings()`, and
`ReaderScreen.kt` now handles `READER_NEXT/PREVIOUS/AUTO_SCROLL/CLOSE/FASTER/SLOWER/
TOGGLE_CONTROLS` — confirmed directly in source, not just from the commit messages
or `docs/android-completion-plan.md`'s item 10 update. The cell now reads "Xbox-style
Bluetooth controller, customizable", matching Apple's phrasing for the same
capability. The `phone-external-controller-bindings.md` doc itself hasn't been
updated in that repo yet — don't trust it over the code the next time this is
checked.

**"Keyboard input" row (added 2026-07-26)**, directly below Controller input:
Mac and Vision Pro share the same fixed reader shortcuts (Page Down/Space, arrow
keys, plus Mac-only ⌘ shortcuts for window/library actions —
`MacInputReferenceView.swift` / `VisionInputReferenceView.swift`); iPad and iPhone
only wire an external keyboard's arrow keys to *library* grid navigation
(`iOS/Features/Library/LibraryView.swift`'s `keyCommands`), not the reader itself,
so that's called out as a narrower sub-case in the same stacked-cell style used
elsewhere in this table. PC has arrow keys/Space (`ReaderPage.xaml.cs`) plus F11/Esc.
Android has no reader keyboard handling anywhere in the phone/tablet codebase, so
that cell is "-" (Android TV's remote/D-pad handling is already covered by the
Controller input row above, not duplicated here). NAS has arrow-key page
navigation in the browser reader (`docs/features/web-reader.md`).

**"Where to get it" row**: the Apple cell's small "iOS and Mac" caption under the
App Store badge was removed 2026-07-26 (per product-owner request) — the
`table.iosNote` translation key was also deleted from all 11 locale files since it
had no other use.

`Home.jsx` contains its own separate, hardcoded `ComparisonTable()` implementation
that reads the same `redesign.home.table` data (kept in sync with the `/comicreader/`
version) — but it is **never actually invoked anywhere in `Home.jsx`**, so it does not
render on the homepage. The homepage's own comparison section is the unrelated
`ReaderComparisonTable` component described above. Confirm before spending more effort
keeping Home.jsx's copy in sync — it may be worth deleting as dead code.

### Usage-guide FAQ (`/comicreader/`, added 2026-07-24)
`UsageGuide` (inline in `ComicReader.jsx`, rendered after `ComparisonTable`, before
`ReaderFamilyGuide`): a 5-item foldable FAQ, "How can you use BiblioFuse Comic
Reader?", condensing five usage scenarios (offline on mobile, bigger screen via
Mac/PC/NAS browser, streaming without device storage, TV lean-back reading, iCloud
auto-load/unload) into short tap-to-expand Q&A with a small inline-SVG device icon
per item. Each answer links to the full source illustration (a marketing infographic
under `public/image/comicreader/usage-guide/`) via a "View illustration (English)"
link that opens the image in a new tab — the image is never eagerly loaded, keeping
the section lightweight. Unlike `ReaderFamilyGuide` below it, this section IS
translated across all 11 locales (`redesign.comicReaderPage.usageGuide.*`); only the
linked illustration images themselves stay English-only, since they're pre-rendered
marketing graphics with baked-in text that can't be localized.

### Reader-family platform picker (`/comicreader/`, added 2026-07-20)
`src/components/ReaderFamilyGuide.jsx`, rendered after `UsageGuide` on
`/comicreader/`: a 9-row platform coverage matrix (role / content source support /
streaming connection modes, sticky first column, collapsed by default behind a "See
the full platform coverage table" toggle since 2026-07-24) plus an interactive
picker — pick what hosts your library and what you want to read on, get back the
specific host app, client app, and connection mode to use. The picker itself is
always visible; only the matrix table is collapsed. Client-side only, deliberately
not a new indexed route (see `docs/site-showcase-audit.md` and the 2026-07-20
portfolio review in the repo's chat history — this site can't afford new indexed
surface while ranking position on existing pages is suppressed). English-only,
unlike the rest of the page. Its host/client/streaming-mode data is reviewed and
maintained via `docs/reader-family-data/` (CSVs + `README.md` documenting the review
workflow) rather than inline in this doc — that data changes independently of the
page's own copy and is re-verified by the product owner periodically; check that
folder before trusting a claim this component makes about what a given platform
supports. The matrix no longer has a Status column (removed 2026-07-24 as redundant
with the per-cell "soon" glyph already used for not-yet-shipped capabilities).
`CLIENTS.androidtv.canStream` flipped to `true` (`lanOnly: true`) on 2026-07-24 once
the product owner confirmed Android TV streaming shipped — the coverage matrix row
already only had `streaming.localWifi` set, so only the interactive picker's client
list was stale; see the "sixth pass" comment at the top of the file.

The `VisionProSection` (rendered after `ToolsHighlight`) covers the native visionOS
app, live on the App Store as part of the universal iOS + Mac purchase. Its copy lives
under `redesign.comicReaderPage.vision.*` and names the three spatial library layouts
(Spatial Bookshelves, Grid View, Slanted Wall) plus the input-method story — four
input bullets as of 2026-07-24: eye tracking & pinch, "Stare edge to scroll"
(visionOS 26's system `scrollInputBehavior(.enabled, for: .look)` gaze-driven
scroll, `bibliofuse_iosv2/visionOS/App/LookToScroll.swift` — no-op below visionOS
26, cannot be exercised in the Simulator), mouse/trackpad/keyboard, and native
window/spatial reading. `visionOS`
is included in the page's `SoftwareApplication` `operatingSystem` schema, and two
visionOS FAQ entries sit near the top of `redesign.comicReaderPage.faq`. Screenshots are
web-optimized JPEGs in `public/image/comicreader/vision/`. Keep marketing of a visionOS
build gated on real App Store availability (see the rollout rules in CLAUDE.md).

Cover-thumbnail messaging belongs in both layers: a compact USP line in each
homepage reader card, then fuller explanation in the Reader library section and the
GrepTag covers section. Site screenshots should use generated or sanitized covers,
not real copyrighted book covers.

When describing Reader streaming, use Mac/PC language unless the feature is truly
Mac-only. iOS can stream and read from both Mac and PC libraries.

## ContentCue and SmartDecrypt (retired 2026-07-20)
Both used to be full Layer-1 marketing pages here; see "Sister-app landing pages"
above for why and what replaced them (mlogictech.com/products). Before retirement,
ContentCue's page (`/contentcue`) marketed ContentCue: Read & Listen (iOS + iPadOS +
native visionOS, ASC id 6770080864) with the app's blue brand identity, a Vision Pro
launch hero, pain-point cards, a 3-step how-it-works, feature sections (position
restore, ad outlines, RSS, podcasts, website TTS), a dark native-visionOS showcase, a
CarPlay section, iCloud/Siri, pricing, and FAQ — that structure and its
`redesign.contentcuePage.*` / `redesign.decryptSection.*` translation keys are now
unused (left in place across all 11 locale files, not pruned). The one-off
copy-injection scripts from that redesign (`scripts/contentcue-redesign-en.cjs`,
`scripts/contentcue-redesign-locales.cjs`) are similarly dead but left as-is.

## Adding a new sister app
Adding one means: new page component in `src/pages/`, new route + sub-routes in
`App.jsx`, a new entry in `AppChangelog.jsx`'s `APP_CONFIGS` and `AppPrivacy.jsx`'s
`PRIVACY_CONFIGS`, and a new `data/changelog-<app>.js` file. Consider whether it
actually fits the reader/ebook theme first — see `docs/site-showcase-audit.md`
§3 ("off-theme apps dilute the hub") and the ContentCue/SmartDecrypt retirement above
before adding a page that draws on a different audience than this hub's.
