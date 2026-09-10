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
`/<lang>/comicreader/#setup-guide`, which the homepage's streaming hero links to), and
resets scroll to top otherwise.

**Reworked 2026-09-10.** It used to call `el.scrollIntoView({ block: 'start' })` once
inside a single `requestAnimationFrame`. Two failure modes:

- **One shot is not enough on a tall page.** `/comicreader/` is ~25,000px and heavy with
  images that have no intrinsic size, so the target's offset moves by hundreds of pixels
  as they load. The anchor now re-applies 5 times at 220ms intervals and gives up the
  moment the visitor scrolls (`wheel` / `touchstart` / `keydown`), so it never fights
  them; the listeners and timer are cleaned up on unmount.
- **`scrollIntoView` also cannot clear the fixed header**, which is `h-16` (64px), so the
  section landed flush underneath it. It now computes
  `getBoundingClientRect().top + scrollY - 80` and calls `window.scrollTo`. Verified: all
  four `/comicreader/` anchors (`apple-vision-pro`, `apple-tv`, `usage-guide`,
  `setup-guide`) land with the section top at exactly 80px.

Note for anyone debugging this in a headless or background tab: `scrollIntoView` is a
**no-op while the tab is hidden**, even with `scroll-behavior: auto`, while
`window.scrollTo` works. That difference is what made the old behaviour look broken during
testing and is a second reason to prefer the explicit form.
The legacy `/reader` path redirects to `/<lang>/comicreader/`.
