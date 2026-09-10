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

## Retired outright (2026-09-10)

The 2026-09-10 "demoted, not deleted" call above did not hold up. Its own rationale —
"the changelog is what an existing user reads after updating" — stopped being true the
moment the changelog went stale: its most recent entry was **2026-08-07**, while
`src/data/feature-matrix.js` records real shipped features through **2026-09-07** —
OPDS 1.x streaming (08-10), vertical Japanese (08-11), native Komga & Kavita API
(08-12), reading-direction switch (08-13), page-curl (08-21), live comic/manga
translation (09-03), the continuous-mode rewrite (09-07) — **none logged**. A user
who updated and checked "what's new" would have found nothing about any of it.

Cost of keeping it stayed at zero — 45 impressions, 0 clicks, fully noindexed and off
the sitemap since the demotion — so the removal decision came down entirely to whether
a second, hand-maintained "what shipped when" was worth the upkeep it was visibly not
getting. The feature matrix already carries a `since` date per feature and is the file
this session spent the most effort hardening for accuracy (the `icloud-bookshelf` and
NAS-format self-contradictions were both found and fixed here); maintaining a second,
separately-worded history of the same facts is exactly the kind of duplicate
representation that produces that class of bug.

**Removed:** `src/pages/Changelog.jsx`, `src/data/changelog.js` (30 entries, all 11
locales — nothing else imported it), the `/changelog` route in `App.jsx`, its entries in
all three build scripts' `ROUTES` and `NOINDEX_ALL_LOCALES_ROUTES`, the footer link, and
the dead active-tab branch in `Navigation.jsx`. `nav.changelog` and `redesign.footer.work`
locale keys deleted (see the footer note below — `footer.work` went with it since the
"Work with us" link was pointless duplication of Contact, an unrelated fix landing in the
same pass).

`/changelog` and `/:lang/changelog` now 301 to `/features/` in `public/_redirects`,
preserving the small residual value of any stray backlink or bookmark rather than a bare
404, even though the traffic was negligible.

**Unaffected:** `AppChangelog.jsx` and `changelog-smartdecrypt.js` /
`changelog-contentcue.js` — the retired sister-apps' own `/smartdecrypt/changelog` and
`/contentcue/changelog` pages are a separate system and still exist as documented
elsewhere in this file.

## Footer: one support link, not two

`redesign.footer.contact` ("Contact") and the now-removed `redesign.footer.work` ("Work
with us") both linked the identical `mailto:support@mlogictech.com` with no distinguishing
subject line — two links that would produce the exact same email. Kept "Contact"; if a
genuinely separate business-inquiries channel is wanted later, give it its own subject
line (`mailto:...?subject=...`) so the two are actually distinguishable, rather than
restoring a second link to the same address.
