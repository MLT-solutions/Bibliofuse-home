# Changelog

`src/pages/Changelog.jsx` (site-wide), `src/pages/AppChangelog.jsx` (per-app),
`src/data/changelog.js` + `src/data/changelog-<app>.js`.

## Data shape
Each `data/changelog-<app>.js` exports `ENTRIES`, `KNOWN_ISSUES`, `ROADMAP` arrays.
- `ENTRIES`: `{date, version, platform, type, title, desc}` — `platform` is one of
  `ios | mac | pc | android | all`; `type` is one of
  `release | feature | fix | known-issue | roadmap`. `title`/`desc` are multilingual
  objects keyed by the 11 supported language codes.
- `ROADMAP` entries have a `status`: `pending | parked | exploring`.

`AppChangelog.jsx` imports all four apps' changelog data (`APP_CONFIGS` keyed by
`archive | grepreader | smartdecrypt | contentcue`) and picks the right one based on
the `appSlug` prop passed from the route in `App.jsx`.

## Adding an entry
Edit the relevant `data/changelog-<app>.js` file directly — add a new object to
`ENTRIES` (or `ROADMAP`/`KNOWN_ISSUES`), newest first, with all 11 language keys filled
in for `title`/`desc`.
