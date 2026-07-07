# Sister-app landing pages

`src/pages/WebApp.jsx`, `GrepTagReader.jsx`, `ArchiveScanner.jsx`, `SmartDecrypt.jsx`,
`ContentCue.jsx` — one landing page per sister app, each reachable at its own top-level
route (`/grepreader`, `/archive`, `/smartdecrypt`, `/contentcue`) plus a generic
`/webapp` page.

## Shared conventions
- Each app page hides the global `Footer` (see the `isWebApp` / `isGrepTagReader` /
  etc. flags in `App.jsx`'s `AppLayout`) since these pages have their own
  app-specific footer/CTA content.
- Each app has a matching pair of sub-pages:
  `/<app>/changelog` → `AppChangelog` (see `changelog.md`)
  `/<app>/privacy` → `AppPrivacy` (see `privacy-pages.md`)
- App logos/screenshots live under `public/image/<app-name>*` and
  `src/assets/` (for BiblioFuse's own feature icons).

## Adding a new sister app
Adding a 6th app means: new page component in `src/pages/`, new route + sub-routes in
`App.jsx`, a new entry in `AppChangelog.jsx`'s `APP_CONFIGS` and `AppPrivacy.jsx`'s
`PRIVACY_CONFIGS`, and a new `data/changelog-<app>.js` file.
