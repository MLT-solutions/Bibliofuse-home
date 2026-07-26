# i18n & routing

`src/App.jsx`, `src/i18n.js`.

## Supported languages
`SUPPORTED_LANGUAGES` in `src/i18n.js`: en, es, fr, nl, pt, ru, zh, ja, ko, id, ms (11
total). Each has a `src/locales/<lang>/translation.json` bundle loaded into i18next at
startup (`fallbackLng: 'en'`). Every route still renders normally in all 11 for
visitors — this is purely a rendering/translation concern, not an indexing one.

## Indexed vs. non-indexed locales (added 2026-07-20)
`INDEXED_LANGUAGES` in `src/i18n.js` (currently `en, es, fr, ja`) is a second,
narrower list controlling which locale variants ask Google to index them — added
after a GSC review found the site's ~800 sitemap URLs (largely non-English blog/product
page duplicates) were producing very little search traffic relative to their volume.
Three places read it:
- `SEO.jsx` defaults `noindex` to `true` for any page whose locale isn't in
  `INDEXED_LANGUAGES`, unless the page passes an explicit `noindex` prop (the
  changelog/privacy pages already did, for a different, narrower reason — see
  `app-pages.md`). Hreflang alternates (both the client-rendered tags and the
  sitemap's) are also limited to `INDEXED_LANGUAGES` — pointing hreflang at a
  noindexed alternate sends a mixed signal for no benefit.
- `scripts/generate-sitemap.js` only emits sitemap `<url>` entries for
  `INDEXED_LANGUAGES`.
- `scripts/generate-static-routes.js` injects the same static noindex meta tag for
  every other locale, at build time, mirroring the mechanism already used for
  changelog/privacy pages.
All three mirror the same list independently (they run outside the Vite bundle) —
keep them in sync if this list changes. See `docs/gsc-cloudflare-findings.md` for the
data behind the en/es/fr/ja cutoff.

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
