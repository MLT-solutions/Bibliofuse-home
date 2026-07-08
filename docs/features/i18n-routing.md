# i18n & routing

`src/App.jsx`, `src/i18n.js`.

## Supported languages
`SUPPORTED_LANGUAGES` in `src/i18n.js`: en, es, fr, nl, pt, ru, zh, ja, ko, id, ms (11
total). Each has a `src/locales/<lang>/translation.json` bundle loaded into i18next at
startup (`fallbackLng: 'en'`).

## Routing scheme
- `/` → `LanguageRedirect`: detects language via `i18next-browser-languagedetector`,
  redirects to `/<lang>/` (or `/<lang><path>` if there was a path).
- `/:lang/*` → `AppLayout`: validates `:lang` against `SUPPORTED_LANGUAGES`; if invalid,
  strips the bad segment and redirects to `/en/...`. Otherwise calls
  `i18n.changeLanguage(lang)` so UI strings switch.
- All actual pages (Home, per-app pages, Blog, Changelog, Privacy, About) are nested
  under `AppLayout`'s `<Routes>`.
- Unmatched paths under `/:lang/*` redirect back to `/<lang>/`; unmatched top-level
  paths redirect to `/`.

## Scroll behavior
`AppLayout` also handles hash-based scroll-to-section on route change (used for e.g.
`/<lang>/comicreader/#why-two-apps` section links), and resets scroll to top otherwise.
The legacy `/reader` path redirects to `/<lang>/comicreader/`.
