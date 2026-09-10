# Changelog

`src/pages/Changelog.jsx` (site-wide), `src/pages/AppChangelog.jsx` (per-app),
`src/data/changelog.js` + `src/data/changelog-<app>.js`.

## Data shape
Each `data/changelog-<app>.js` exports `ENTRIES`, `KNOWN_ISSUES`, `ROADMAP` arrays.
- `ENTRIES`: `{date, version?, platform, type, title, desc}` — `version` is omitted
  for companion website/setup updates that do not represent a new app build; `platform` is one of
  `ios | mac | pc | android | all`; `type` is one of
  `release | feature | fix | known-issue | roadmap`. `title`/`desc` are multilingual
  objects keyed by the 11 supported language codes.
- `ROADMAP` entries have a `status`: `pending | parked | exploring`.

`AppChangelog.jsx` imports all four apps' changelog data (`APP_CONFIGS` keyed by
`smartdecrypt | contentcue`; `archive` and `grepreader` removed 2026-09-09) and picks the right one based on
the `appSlug` prop passed from the route in `App.jsx`.

## Adding an entry
Edit the relevant `data/changelog-<app>.js` file directly — add a new object to
`ENTRIES` (or `ROADMAP`/`KNOWN_ISSUES`), newest first, with all 11 language keys filled
in for `title`/`desc`.


## Demoted, not deleted (2026-09-10)

`/changelog/` left the top nav and is now noindexed in **every** locale, including
English, via `NOINDEX_ALL_LOCALES_ROUTES` in `generate-static-routes.js` and
`prerender.js`. It is out of the sitemap. The page still builds and is linked from the
footer.

The data: 45 impressions and **0 clicks** across all locales in the five months to
2026-09-09.

It was kept rather than deleted because `src/data/feature-matrix.js`'s own header makes
the argument, and it holds up — the changelog answers "what happened, in order", the
matrix answers "does platform X do Y, and since when". The matrix is what a prospective
buyer checks; the changelog is what an existing user reads after updating.
`docs/site-showcase-audit.md` reaches the same conclusion: keep it as a trust signal,
noindex the raw dated feed as thin content.
