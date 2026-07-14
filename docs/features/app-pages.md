# Sister-app landing pages

`src/pages/ComicReader.jsx`, `WebApp.jsx`, `GrepTagReader.jsx`, `ArchiveScanner.jsx`,
`SmartDecrypt.jsx`, `ContentCue.jsx` — one landing page per app, each reachable at its
own top-level route (`/comicreader`, `/grepreader`, `/archive`, `/smartdecrypt`,
`/contentcue`) plus a generic `/webapp` page.

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

The homepage now keeps the visual `TwoAppsSection` chooser instead of a separate
Reader teaser; the full reader walkthrough belongs on `/comicreader`. Homepage FAQ copy should stay at the
brand/app-chooser level; setup-heavy BiblioFuse Reader questions belong on
`/comicreader` or focused help/blog pages. The full Reader FAQ lives in
`redesign.comicReaderPage.faq` so troubleshooting answers can include nested bullet
steps, code-formatted filenames, and support links without bloating the homepage.

The homepage reader flow should not repeat the same Reader pitch twice. Use the
visual `TwoAppsSection` as the homepage's main comic-vs-novel chooser, then send
visitors to `/comicreader` or `/grepreader` for product details. The Reader platform
comparison table belongs on `/comicreader` with the technical FAQ.

The `VisionProSection` (rendered after `ToolsHighlight`) covers the native visionOS
app, live on the App Store as part of the universal iOS + Mac purchase. Its copy lives
under `redesign.comicReaderPage.vision.*` and names the three spatial library layouts
(Spatial Bookshelves, Grid View, Slanted Wall) plus the input-method story. `visionOS`
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

## Adding a new sister app
Adding a 6th app means: new page component in `src/pages/`, new route + sub-routes in
`App.jsx`, a new entry in `AppChangelog.jsx`'s `APP_CONFIGS` and `AppPrivacy.jsx`'s
`PRIVACY_CONFIGS`, and a new `data/changelog-<app>.js` file.
