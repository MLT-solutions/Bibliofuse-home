# Privacy pages

`src/pages/Privacy.jsx` (site-wide), `src/pages/AppPrivacy.jsx` (per-app).

## Site-wide privacy
`Privacy.jsx` fetches `public/privacy/<lang>.md` at runtime (same pattern as blog
posts — falls back to `en` if the language file is missing) and renders it with
`react-markdown`.

## Per-app privacy — different source
`AppPrivacy.jsx` does NOT read from this repo's `public/privacy/`. Each app in
`PRIVACY_CONFIGS` has a `rawUrl` pointing at the **`app-legal-docs`** GitHub repo (e.g.
`https://raw.githubusercontent.com/mlt-solutions/app-legal-docs/main/<app>/PRIVACY.md`),
fetched live. This means the legal text is maintained in one place
(`app-legal-docs`, see that project's own docs) and every surface that needs it —
this site, the app's own in-app privacy screen, App Store listings — reads the same
source.

`PRIVACY_CONFIGS` also carries per-app `appName`, `logo`, a short `privacySummary`, and
an `faq` array rendered alongside the fetched markdown (these are hardcoded here, not
pulled from `app-legal-docs`).

## Adding a new app's privacy page
Add an entry to `PRIVACY_CONFIGS` in `AppPrivacy.jsx` with the app's `rawUrl` — the doc
itself must already exist in `app-legal-docs`.
