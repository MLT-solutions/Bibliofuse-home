# Sister-app landing pages

`src/pages/ComicReader.jsx` and `WebApp.jsx` — the flagship reader landing page at
`/comicreader` plus the generic `/webapp` page.

`GrepTagReader.jsx` and `ArchiveScanner.jsx` were **deleted 2026-09-09**. GrepTag and
Comic Duplicate Scanner now live on mlogictech.com (`/greptag`,
`/comic-duplicate-scanner`) and their old bibliofuse.com routes 301 there — see
`docs/cloudflare-redirects-greptag-archive.md`. GrepTag's App Store listing already
pointed away from this domain (`marketingUrl: null`, `supportUrl:
www.mlogictech.com/support`); the website was the last artifact still presenting the two
apps as one product line, which is what guideline 4.3(a) flagged.

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
- The retired sister-app pages hide the global `Footer` (the `isSmartDecrypt` /
  `isContentCue` flags in `App.jsx`'s `AppLayout`) since they carry their own
  app-specific footer/CTA content. `/comicreader/` was in that list until 2026-09-10 and
  now renders the shared footer like every other page — see "Flagship BiblioFuse Reader"
  below. `isWebApp` is long gone with the WebApp route.
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
`SmartDecrypt PDF ZIP`, `ContentCue`, and `Others, please specify`. Comic Duplicate
Scanner is excluded because it needs a bigger screen; GrepTag was removed 2026-09-09
along with the rest of its presence on this domain.

`/androidrequest` is generated as a static fallback for all 11 locales and marked
`noindex, follow`, but it is not added to the sitemap.

## Flagship BiblioFuse Reader
`src/pages/ComicReader.jsx` is the Layer-1 page for the flagship comic/ebook reader at
`/comicreader`. It reuses the translated `redesign.readerSection.*` and
`redesign.toolsHighlight.*` copy shared with the homepage.

**Homepage structure, updated 2026-09-09**: bibliofuse.com is now a single-product site.
The funnel is `Hero` (BiblioFuse Reader) → `ProductFamily` → `AndroidInterestSection` →
`StandaloneToolsSection` → `FaqSection` → `PrivacyStrip` → `BlogPreview` → `FinalCTA`.

Removed in that change: `GrepTagHero` (a full second flagship hero), `ReaderComparisonTable`
(`src/components/ReaderComparisonTable.jsx`, the "Why two apps?" table — deleted), and
`ArchiveScannerSection`. `ProductFamily` is down to four cards — BiblioFuse Reader,
BiblioFuse Web Tool, SmartDecrypt and ContentCue — the last two linking straight to the
App Store rather than to pages on this domain.

The `redesign.grepTagPage`, `redesign.archivePage`, `redesign.archiveSection` and
`redesign.twoAppsSection` blocks were deleted from all 11 locale files. The four
BiblioFuse-only strings that lived under `twoAppsSection` were rehomed rather than lost:
`comicCta` → `redesign.readerSection.cta`, `comicBullet1..3` →
`redesign.readerSection.bullet1..3` (used by `ComicReader.jsx`'s schema featureList).
`Home.jsx` had also been borrowing `redesign.grepTagPage.languages`; it now has its own
`redesign.home.hero.languages`.

**Homepage FAQ item 0** used to answer "Which BiblioFuse app should I start with?" by
comparing BiblioFuse Reader with GrepTag — and that answer feeds the homepage **FAQPage
JSON-LD** via `faqItems` in `Home.jsx`, so the comparison was reaching Google as
structured data. Both question and answer were rewritten as single-product copy in all
11 locales.

`ReaderTeaser`, `ReaderSection` and `ComparisonTable` in `Home.jsx` are defined but never
rendered — pre-existing dead code, left in place.

`Hero`'s `DevicePills` list had drifted from `/comicreader/`'s own hero — missing
`docker`/`synology` (added there when the comicreader hero grew a self-hosting
section) — fixed 2026-07-26 to match. `Hero` also had no link to `/comicreader/`
itself despite being the flagship product's homepage entry point; added a "Learn
more →" link (reuses the existing `redesign.productFamily.learnMore` key) right
under the device chips.

Homepage FAQ copy should stay at the brand/app-chooser level; setup-heavy BiblioFuse
Reader questions belong on `/guide/`.

**`redesign.comicReaderPage.faq` no longer exists (2026-09-10).** The 12 setup FAQs moved
to `/guide/`, and the one leftover — "Does one purchase cover all platforms?" — moved to
the homepage FAQ, where the other buying questions are. The key, `faqTitle`, the FAQ
`<section>`, and the `FaqAnswer` / `RichText` / `stripHtml` / `faqToPlainText` helpers that
supported its nested-bullet answers were all deleted. Two things to know before adding a
FAQ back to this page:

- The array was **empty in all 10 non-English locales** while `en` had one item, so every
  non-English `/comicreader/` was rendering a bare "Frequently Asked Questions" heading
  with nothing under it.
- The page's **FAQPage JSON-LD now comes from `UsageGuide`** — `faqItemsForSchema` maps
  over `USAGE_GUIDE_ITEMS` and reads `redesign.comicReaderPage.usageGuide.items.<key>`.
  Those five answers are the page's only remaining Q&A, they are translated in all 11
  locales, and they are plain text (no HTML to strip). Verified live: `dist/en/comicreader/`
  emits one FAQPage with 5 questions.

**The site footer now renders on `/comicreader/` (2026-09-10).** `AppLayout` in `App.jsx`
used to exclude it (`!isComicReader`), and the page compensated with a hand-rolled
Changelog/Privacy link row plus a "Back to home" button. The exclusion is gone and so are
those two stand-ins — the footer already carries both links. Only the two retired
sister-app stubs (`/smartdecrypt`, `/contentcue`) still opt out.

### Reader feature media (`/comicreader/`)
The comic-reader hero and first two feature rows use mixed-aspect marketing media
under `public/image/comicreader/feature-summary/`: a transparent 4:3 all-device
hero, a portrait library/shelf image, and a 4:3 navigation demo. The hero and video
stay in open, transparency-friendly frames; the portrait image uses a constrained
poster frame so its baked-in heading stays legible without dominating the copy.
The navigation demo shows multiple reading styles, the minimap, continuous reading,
and page-curl navigation.

The navigation demo keeps the supplied HEVC-alpha MP4 for Safari and includes a
smaller H.264 opaque fallback plus a matching poster for browsers without HEVC-alpha
support. `FeatureVideo` starts and pauses playback as the media enters/leaves the
viewport, remains muted/inline/looping, exposes a visible play/pause control, and
does not auto-start for visitors who prefer reduced motion. The video has no CSS
drop-shadow, and its right edge clips 0.5% to hide the thin black strip encoded
in the supplied source/fallback. The separate GUI demo is
not loaded on this already media-heavy page because it repeats the all-device hero
story.

### Edition comparison table (`/comicreader/`, updated 2026-08-20)
`ComparisonTable`, `id="comparison-table"`, rendered on `/comicreader/` right after
`VisionProSection`: an 11-row feature table across 4 editions (Apple, PC, Android, and
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

The row immediately below it, **"Stream from OPDS, Kavita & Komga"**, is separate
from BiblioFuse desktop-host streaming. It marks support on iPhone, iPad, Vision Pro,
and Android phone/tablet; PC, Apple TV, Android TV, and the NAS/browser edition stay
unsupported in this row. The claim is checked against the native Apple and Android
remote-catalog implementations rather than inferred from the older host-streaming
row. Its label and device notes are translated across all 11 site locales.

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
auto-load/unload — the streaming answer also names OPDS/Komga/Kavita as of 2026-09-10) into short tap-to-expand Q&A with a small inline-SVG device icon
per item. Each answer links to the full source illustration (a marketing infographic
under `public/image/comicreader/usage-guide/`) via a "View illustration (English)"
link that opens the image in a new tab — the image is never eagerly loaded, keeping
the section lightweight. Unlike `ReaderFamilyGuide` below it, this section IS
translated across all 11 locales (`redesign.comicReaderPage.usageGuide.*`); only the
linked illustration images themselves stay English-only, since they're pre-rendered
marketing graphics with baked-in text that can't be localized.

Since 2026-09-10 these five items are also **the page's FAQPage structured data** — see
the `redesign.comicReaderPage.faq` note under "Flagship BiblioFuse Reader" above. Editing
a `usageGuide` question or answer now changes what Google sees, so keep them phrased as
real questions with self-contained answers.

### Reader-family platform picker (`/comicreader/`, added 2026-07-20)
`src/components/ReaderFamilyGuide.jsx`, rendered after `UsageGuide` on
`/comicreader/`: a 9-row platform coverage matrix (role / content source support /
streaming connection modes, sticky first column, collapsed by default behind a "See
the full platform coverage table" toggle since 2026-07-24) plus an interactive
picker — pick what hosts your library and what you want to read on, get back the
specific host app, client app, and connection mode to use. Its eyebrow used to read
"Nine surfaces, one setup"; the hardcoded count was dropped on 2026-09-10 ("Every
surface, one setup"). It needed editing on every launch and already disagreed with the
sentence under it — the matrix has nine rows, that sentence lists nine names by merging
Android phone/TV and splitting iPhone/iPad. **An OPDS/Komga/Kavita server is not a tenth
surface**: it is a third-party server BiblioFuse reads from, which is exactly why it is a
content-source column and not a matrix row. The picker itself is
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

**Seventh pass, 2026-09-10 — OPDS / Kavita / Komga.** Product-owner corrections against
the shipped apps (OPDS 1.x + OPDS-PSE landed 2026-08-10, native Komga/Kavita API
2026-08-12; dates from `src/data/feature-matrix.js`):

- A new **`opds` column in `CONTENT_COLS`**, immediately right of `Host`, ticked for
  iPhone/iPad, visionOS and Android phone. The two TV clients cannot reach a third-party
  server. Table `min-w` went 900 → 1000px to fit the longer label.
- A new **`opds` host option in the picker**, listed last so the three BiblioFuse hosts
  stay together and the third-party option reads as the outlier. It is flagged
  `kind: 'opds'` and short-circuits `Recommendation` before any `MODE_INFO` logic:
  BiblioFuse talks straight to the server over HTTP, so **none of the three connection
  modes apply**. "Only at home" resolves to "same Wi-Fi as the server"; "at home and
  away" resolves to "VPN, or Tailscale on both ends with subnet routing on the host" —
  the user's own network setup, not something the app negotiates. Clients are gated by
  `CLIENTS.<key>.opdsCapable`; Apple TV and Android TV get an explicit can't-do panel
  instead of a wrong recommendation.
- Step 3 links to `/{lang}/tools/qr-generator/` — typing a server URL and credentials on
  a phone is the slow part, and the QR tool already exists for exactly this.
- **`Android phone` role fixed**: it was still ticked under "Standalone reader (no
  streaming)", contradicting the sixth pass that flipped
  `CLIENTS.androidphone.canStream` to `true`. Moved to "has streaming".

The component now takes a `lang` prop (for the QR link) but its own copy stays
English-only, as before.

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

### Apple TV section (`/comicreader/`, added 2026-09-10)
`AppleTvSection` (inline in `ComicReader.jsx`, rendered directly after
`VisionProSection`, before `EditionChooser`), `id="apple-tv"`. Deliberately lighter than
the visionOS section above it: one wide infographic
(`public/image/comicreader/appletv/controls.jpg`, 2000x1125 JPEG, resized from
`/Volumes/MasterNAS/BiblioFuse feature summary/TVOS/4.jpg`) that already carries the Siri
Remote control map and the feature legend, then a 1-2-3 flow and four cards saying the
things the picture cannot. Copy under `redesign.comicReaderPage.appletv.*`, translated in
all 11 locales; `appletv.title` is in the page's schema `featureList`.

The section ends with `lanNote`, which states plainly that **Apple TV is local-network
only** — it streams from a Mac or PC on the same Wi-Fi, tvOS has no iCloud Documents
entitlement, and the Tailscale path is built but ships disabled. Keep that caveat: it is
the same fact `ReaderFamilyGuide.jsx`'s `CLIENTS.appletv` note records, and without it
someone buys expecting to read away from home. Anything claimed here must match
`docs/reader-family-data/`.

Cover-thumbnail messaging belongs in both layers: a compact USP line in each
homepage reader card, then fuller explanation in the Reader library section. Site
screenshots should use generated or sanitized covers, not real copyrighted book covers.

When describing Reader streaming, use Mac/PC language unless the feature is truly
Mac-only. iOS can stream and read from both Mac and PC libraries.

### Hero outbound badges (`/comicreader/`, updated 2026-09-10)
Under the three store badges the hero carries a "self-host on a NAS" row — Docker,
Synology, NAS on GitHub — and a Discord badge on its own line. `HOST_BADGES` in
`ComicReader.jsx` holds the label/sub/icon for each; `docker` and `synology` use stroke
icons, `github` and `discord` filled brand marks.

- Docker and Synology point at the two **install guides**, not the repo root, and are
  **language-aware**: `nasDocUrl(guide, lang)` builds
  `…/blob/main/docs/<guide>[.<lang>].md` using `NAS_DOC_LOCALES` (`zh` → `zh-CN`, English
  has no suffix). All 22 combinations were verified 200 on 2026-09-10. If a locale is
  dropped upstream this 404s silently, so re-check the repo's `docs/` listing before
  adding a locale.
- `HOSTS.docker/synology.appLink` in `ReaderFamilyGuide.jsx` point at the repo root and
  the releases list instead. Those are **deliberately different targets** — the old
  "keep in sync" comment was removed.
- The Discord badge links **`/discord`**, not a `discord.gg` URL. The invite code is
  referenced in exactly one place, `public/_redirects`, so the iOS/Android apps, the App
  Store description and the NAS distribution README can all link `bibliofuse.com/discord`
  and a dead invite is a one-line fix in one repo. Do not inline an invite code in the
  page again.
  - That rule is a **302, not a 301**: browsers cache a 301 indefinitely, so anyone who
    clicked once would keep being sent to the old invite from their own cache after it
    changed here. Every other rule in `_redirects` points somewhere permanent and
    correctly uses 301.
  - The current invite (`UWKcJ4uMMQ`, generated 2026-09-10) has **no expiry** — verified
    via `discord.com/api/v10/invites/<code>?with_expiration=true` returning
    `expires_at: null`. The one it replaced was a 30-day default that would have 404'd on
    2026-10-10; Discord's invite dialog defaults to a temporary link, which is why this
    happens to people who never chose an expiry.
  - Expiry is not the only way an invite dies. An invite is bound to a **channel**, so
    deleting, renaming or restricting that channel breaks it. This one points at
    `#announcement`, which is also read-only for new arrivals — worth repointing at a
    welcome or general channel.

## ContentCue and SmartDecrypt (retired 2026-07-20)
**Their screenshots were deleted 2026-09-10.** `public/image/offline-apps/smartdecrypt/`
was 38 MB of marketing PNGs still being deployed on every build. `SmartDecrypt.jsx` and
`ContentCue.jsx` are 53- and 49-line stubs that render only `/image/smartdecrypt-logo.png`
and their ContentCue equivalent, so none of it had been referenced since the retirement.
The two logos are still in use and stay.

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


## Homepage structure, updated 2026-09-10

`Hero -> SecondHero -> ThirdHero -> ToolsStrip -> FaqSection -> PrivacyStrip -> BlogPreview -> StickyDownloadBar`.

Removed: `ProductFamily` ("The BiblioFuse family"), `AndroidInterestSection`,
`StandaloneToolsSection`, `FinalCTA` ("Start here"), and the hand-maintained
`redesign.home.hero.version` pill, which read "Version 2.0.1" while the changelog was at
2.1.7. `Home.jsx` went from ~1030 to ~600 lines; those removals orphaned seven helpers
(`ProductCard`, `WebToolButton`, `ComparisonTable`, `ReaderTeaser`, `ReaderSection`,
`ReaderFeatureRow`, `AppStoreImageBadge` and the table-cell renderers), all deleted.

**Two heroes below the fold, split 2026-09-10.** `SecondHero` originally carried both the
streaming story and the translation story; they were separated so neither has to carry the
other's pitch.

- `SecondHero` — **streaming & sync**, dark band (`#0b1220`), artwork right. Names the
  three answers to "my phone is full": a BiblioFuse host app (Mac/PC/Synology/Docker),
  your own iCloud Drive, and a third-party OPDS / Komga / Kavita server. Copy under
  `redesign.home.secondHero.*`, written fresh in all 11 locales. Its CTA points at
  `/{lang}/comicreader/#setup-guide`, **not** `/features/`: the label promises "which
  combination works" and the picker answers that with a concrete host + client + mode
  recommendation, where the matrix answers "does platform X do Y, and since when".
  `ThirdHero`'s CTA still links `/features/`, so the matrix keeps a homepage link.
- `ThirdHero` — **live comic & manga translation**, light band, artwork left, violet
  accent. It leads on translation because that is the one thing the field does not have:
  Panels gates OPDS behind a $9.99/yr tier, Komic does native Komga/Kavita, YACReader
  needs its own desktop server, and none advertise in-place translation. Copy is the
  previous `secondHero` block, moved to `redesign.home.thirdHero.*`.

The light/dark alternation and the mirrored artwork side are deliberate — two dark bands
in a row read as one long block. Feature claims and dates come from
`src/data/feature-matrix.js`; check there before editing them.

**That move exposed a real i18n gap.** The old `secondHero` had never been translated: all
10 non-English locales were serving the English strings, and `es`/`fr`/`ja` homepages are
in `INDEXED_LANGUAGES`, so indexed pages were carrying English body copy — the exact
pattern in the 2026-06-24 incident writeup. `redesign.home.thirdHero.*` is now translated
in all 11. Run `node scripts/scan-untranslated.cjs` after adding any homepage section;
the build does not catch this.

**Hero artwork, replaced 2026-09-10.** The three phone shots are App Store screenshots
resized to 416x900 JPEG in `public/image/home/`: `hero-formats.jpg` (Hero),
`hero-streaming.jpg` (SecondHero, the Locations screen showing device / iCloud Drive / Mac
sources), `hero-translation.jpg` (ThirdHero, the live-translation panel over a page). They
replaced `/image/offline-apps/bibliofuse/iphone/1.png`, which was a 1.8 MB PNG rendered
into a 380px slot and was the homepage LCP element; the same file was used for two
different sections. Sources are on the NAS at
`/Volumes/MasterNAS/BiblioFuse feature summary/Bibliofuse iPhone/{1,4,12}.jpg`. Each `img`
now carries intrinsic `width`/`height`, the hero is `fetchpriority="high"`, and the two
lower ones are `loading="lazy"`. `public/image/offline-apps/bibliofuse/{iphone,ipad}/`
(21 MB, 12 unused PNGs) was left referenced by nothing and was **deleted on 2026-09-10**.
Only `mac/1.png` survives under that path — it is the streaming feature row's image on
`/comicreader/`. The `imageBase` constant in `Home.jsx` went with the folders; the one in
`ComicReader.jsx` stays for that single file.

`ToolsStrip` is **cards only, by design**. A working tool on the homepage would compete
with the `/tools/<slug>/` pages for the same queries and pull ~13 MB of WASM into every
branded visit.

The homepage FAQ is down to **four** top-level questions. The rest moved to `/guide/`, and
"Does one purchase cover all platforms?" moved *up* here from `/comicreader/` on
2026-09-10 (see below) — it is a buying question, and it was the last item left on the
reader page's own FAQ. The four that remain keep the FAQPage schema on the site's
strongest page.

## `/comicreader/` edition chooser replaced the compare table

`EditionChooser` (4 cards - Apple / PC / Android / NAS, with purchase model and store
links) replaced an 11-row `ComparisonTable`. Eight of those rows already existed in
`/features/` more granularly. Three did **not**, and were added to the matrix as a new
`formats` group plus two features: read-format support (CBR appeared nowhere in the matrix
at all), iCloud bookshelf, and localised interface. `/features/` is now the single source
for per-platform capability; the chooser only answers "which one do I download".

`redesign.home.table` was renamed `redesign.comicReaderPage.editions` - it had not been on
the homepage for some time and the old key misled.

**Store links live in code, not in the locale files (2026-09-10).** Each edition item used
to carry its own `href`, which meant 11 copies of every store URL and no way to notice one
rotting. Two had: the PC card returned **410** (stale Store ID `9n1lnmm3f7h9`) and the
Android card **404** (wrong package name `com.mlogictech.bibliofuse`), while the same two
links in the hero above were fine. `EDITION_HREFS` in `ComicReader.jsx` now maps
`item.key` to the same `appStoreUrl` / `bibliofusePcUrl` / `playStoreUrl` / `nasRepoUrl`
constants the hero uses, `href` was stripped from all 11 locale files, and items whose
`key` has no mapping are filtered out rather than rendering a dead card. Never put a store
URL back into `translation.json`.

## Step 2 code-verification findings (2026-09-10)

Four Sonnet agents were pointed at the sibling repos to draft code-verified guide answers
and audit what the site already claims. Wave one (Apple onboarding/formats/libraries, and
Android) found four live problems. Raw output is not in this repo; the durable findings are:

### `feature-matrix.js` contradicted itself, twice
- **`icloud-bookshelf` had `pro: true` in `SPECS` and `pro: false` in `FEATURES`** — the
  same row id in both arrays, and **both render on `/features/`**, so the page badged one
  iCloud row Pro and the other free. The truth is Pro: iCloud became a whole-folder gate on
  2026-08-18 (`LibraryView.isCloudFolderLocked`), replacing a free "25 oldest books" cap,
  and the billing card's iCloud row already reads "—" for free on iOS, Mac and visionOS.
  A free user following the old copy would have expected sync and hit a paywall.
  `scripts/check-feature-matrix-i18n.mjs` now fails the build when a shared row id carries
  disagreeing `pro` flags — nothing caught this before.
- **The Android "Library sources" spec row said "Local · external folders"**, omitting the
  BiblioFuse host, while the same file's Android streaming FEATURES row correctly marked
  streaming as shipped. Fixed in the data file and all 11 locale value strings (the page
  prefers the locale over the data file, so both had to change).

### Bookmark sync is Kavita-only
`ReaderBookmarkSyncCoordinator` hard-types `KavitaBookmarkProvider`; no Komga equivalent
exists anywhere in the Apple repo. Position sync works for both. The homepage translation
hero claimed "Native Komga & Kavita API, with position and bookmark sync" in all 11
locales — corrected to name Kavita for bookmarks. (One agent claim did **not** hold up on
checking: it reported Komga was never live-validated. `KomgaProviderTests.swift`'s header
says it *was* validated against a live Komga on 2026-08-05, after first shipping from the
OpenAPI document. Komga's catalogue path is tested; only bookmark sync is missing.)

### The Android correction from earlier that day held up
All four published claims verified in source — discovery, manual address, copy-to-library,
and position writeback. Two refinements applied:
- Manual address entry is **not** "type any IP cold": the host must have been paired once
  on the local network first, so its certificate pin is stored. The guide now says so.
- Ratings and tags post back to the host too. The parity doc's "dead code, zero call sites"
  note was accurate on 2026-07-18 and **fixed three days later** — a reminder that even a
  repo's own audit doc goes stale, which is why source beats docs.

### Two findings deliberately not acted on
- **Android phone and Android TV are one application** — one `applicationId`, one manifest
  with both launcher categories, one shared Play Billing entitlement, so they cannot be two
  separate purchases as built. The site does not actually claim otherwise (its only
  "sold separately" line is Android vs iOS vs PC, which is true), so no copy changed. Worth
  checking the live Play Console listing before anyone writes otherwise.
- **Phone/tablet controller support is real** — gamepad, D-pad, analog triggers and keyboard
  shortcuts are wired end to end, so `docs/phone-external-controller-bindings.md`'s
  "do not market this" warning is stale. The site makes no controller claim for Android
  phone, so this is an opportunity rather than a defect.

## Full localization audit found a real gap (2026-09-10)

Prompted by the site owner noticing English fallback in non-English pages. A
value-comparison scanner (`scan-untranslated.cjs`) exists but is noisy — it flags
structural fields (`key: 'apple'`, `tint: 'blue'`), brand names, and legitimate cognates
("Contact", "Blog", "Tools" as loanwords in several languages) alongside real bugs, so a
raw run isn't actionable. A structural diff (does the key exist at all in each locale,
independent of its value) plus manual review of the scanner's flagged prose strings
found the real issue underneath the noise.

**13 strings, on the flagship page and the homepage, pasted as English-only in the
2026-09-10 restructure commit (`943c4fcd`) and never propagated:**

- `comicReaderPage.editions.matrixCta` — the "Compare every feature by platform" link
  under the edition chooser on `/comicreader/`.
- `readerSection.features.library.bullet4/5` and `.reading.bullet4/5` — four
  title+body pairs covering the newest features (native Komga/Kavita, OPDS, live
  translation, spreads/page-curl/tategaki) on the same page's feature rows.
- `home.toolsStrip.eyebrow/title/desc/cta` — the tools section on the homepage itself
  (not `toolsHub`/`toolsPages`, which are intentionally English-only per the tools doc —
  this is a different, unguarded key on the indexed homepage).

All 13 were live in English on `es`, `fr`, `nl`, `pt`, `ru`, `zh`, `ja`, `ko`, `id`, `ms` —
`es`, `fr`, `ja` are indexed. Translated into all 10; verified in the built output that no
locale still matches the English string.

**Two factual corrections applied to the source text before translating**, so a false
claim wasn't propagated into 10 more languages:
- `library.bullet4Body` claimed Komga/Kavita bookmark sync "both ways" — the same
  overstatement already corrected on the homepage hero earlier in the day (bookmark sync
  is Kavita-only; see the feature-matrix section above). Fixed to match.
- `reading.bullet5Body` bundled page-curl turns (Pro) into a sentence with dual-page
  spreads and tategaki (both free) with no Pro disclosure. Split so only page-curl reads
  as Pro.

**One translation-introduced bug caught before shipping:** the Russian draft glued a
Cyrillic "т" onto the Latin word "ategaki" — `тategaki`, mixed script, not a rendering
issue but a literal typo from translating "tategaki" as if the first letter needed
transliterating. Caught by a stray-Latin-character validation pass (the same style used
for every locale batch this session) and fixed before commit.

**One inconsistency caught against this session's own precedent:** the corrected
`library.bullet4Title` was translated as "Native Komga & Kavita" (kept in English) for
`es`/`fr`/`nl`/`pt`, while the equivalent homepage bullet earlier the same day used a
localized title ("API nativa de Komga y Kavita", etc.) for those same four locales.
Aligned to match — the site should not phrase the identical claim two different ways
depending on which section a visitor is reading.

### How to run this check yourself
`node scripts/scan-untranslated.cjs` for the noisy first pass; cross-reference its hits
against a structural key-existence diff (every locale should have the same key set as
`en`) to separate real gaps from cognates/structural fields/known-English-only sections
(`toolsPages`, `toolsHub`, `qrGeneratorPage`, and the retired `smartdecryptPage` /
`contentcuePage` / `decryptSection` / `contentcueSection` / `androidRequestPage` keys,
all documented elsewhere as intentionally untranslated or dead).
