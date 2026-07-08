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

## Flagship BiblioFuse Reader
`src/pages/ComicReader.jsx` is the Layer-1 page for the flagship comic/ebook reader at
`/comicreader`. It reuses the translated `redesign.readerSection.*`,
`redesign.toolsHighlight.*`, and `redesign.grepTagPage.whySeparate.*` copy that also
drives the homepage teaser and the GrepTag comparison, so the comic-vs-novel distinction
stays consistent across the hub.

The homepage now keeps only a compact `ReaderTeaser` plus `TwoAppsSection`; the full
reader walkthrough belongs on `/comicreader`. Homepage FAQ copy should stay at the
brand/app-chooser level; setup-heavy BiblioFuse Reader questions belong on
`/comicreader` or focused help/blog pages.

When describing Reader streaming, use Mac/PC language unless the feature is truly
Mac-only. iOS can stream and read from both Mac and PC libraries.

## Adding a new sister app
Adding a 6th app means: new page component in `src/pages/`, new route + sub-routes in
`App.jsx`, a new entry in `AppChangelog.jsx`'s `APP_CONFIGS` and `AppPrivacy.jsx`'s
`PRIVACY_CONFIGS`, and a new `data/changelog-<app>.js` file.
