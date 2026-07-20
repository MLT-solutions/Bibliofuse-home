# GSC Impression Drop: Investigation Findings

Date checked: 2026-07-02. Reaudited: 2026-07-20.
Status: Cloudflare/Googlebot-blocking theory **disproven**. Root cause is very likely a Google content-quality reassessment triggered by a mass, partly-untranslated page expansion on 2026-06-24, compounded by a structural finding that the entire site was invisible to any crawler that doesn't execute JavaScript. Fixes shipped for crawlability: internal trailing-slash cleanup, noindex on non-English sister-app changelog/privacy pages, and build-time prerendering.

**2026-07-20 reaudit: recovery has NOT happened — do not treat this as resolved.** Daily impressions since 2026-07-08 look like they've partly returned (11–28/day vs. single digits in early July), but this is cosmetic: average position on the pages that used to carry real traffic has collapsed further, not recovered. `/en/blog/epub-reader-iphone-no-drm/` went from 476 impressions @ position 9.3 (Jun 15–24) to 40 impressions @ position 44.6 (Jul 10–19). `/en/blog/unlock-password-protected-pdf-iphone/` went from 336 impressions @ position 8.3 to 1 impression @ position 26. The only page that improved position is the bare homepage (9.3 → 1.1), which reads as Google narrowing the domain to branded queries, not a quality signal returning. See `docs/site-showcase-audit.md` and the 2026-07-20 portfolio review for the full current-state analysis and next steps (reduce locale/page volume rather than assume the June fixes were sufficient).

## Summary

The site experienced a sharp, site-wide impression collapse starting **2026-06-26**: daily impressions fell from a peak of ~400–590/day (June 21–25) to single digits (4–9/day), and have stayed there through July 1 — a >95% drop across nearly every URL and every language, including pages that were already ranking well.

The original theory (Cloudflare Bot Fight Mode / WAF blocking Googlebot) was investigated and **ruled out** with live evidence. The most likely actual cause is a **2026-06-24 batch release that added ~130 new templated URLs across 11 locales in one shot, with two of the new sister-app pages (SmartDecrypt, ContentCue) serving English content at all 9 non-English locale URLs for ~4 days** before being translated — a textbook trigger for Google's scaled/duplicate-content quality systems.

## What Was Ruled Out

**Cloudflare is not blocking Googlebot.**
- Live Cloudflare firewall event log (via API) for every day 2026-06-24 through 2026-07-01 shows only one event matching a Googlebot user-agent, and it was a scanner spoofing the UA to probe `/wp-config.php.bak` — not a real Google crawl (this site isn't WordPress).
- GSC URL Inspection for `/en/` on the live property: `verdict: PASS`, `coverage_state: Submitted and indexed`, `page_fetch_state: SUCCESSFUL`, last crawled 2026-06-29 (after the crash began).
- Checked 4 more URLs across languages/sections via `check_indexing_issues`: all indexed, zero canonical/robots/fetch issues.
- `robots.txt` allows Googlebot; `sitemap.xml` returns valid XML (869 URLs).

**Not a Manual Action or Security Issue.**
- Confirmed clean in GSC's Security & Manual Actions report (checked directly by site owner).

**Not GSC data lag.**
- The drop is sustained across 6+ days (Jun 26 – Jul 1), far longer than GSC's typical 2–3 day reporting lag.

The existing Cloudflare custom rules (UA-based skip list for AI crawlers, no `cf.client.bot` catch-all) are real but are **not the cause** of the impression drop — no real Googlebot traffic was blocked during the crash window. Adding a `cf.client.bot` skip rule is still reasonable hardening but won't move impressions.

## Root Cause Analysis

### Timeline

| Date (SGT) | Event |
|---|---|
| Jun 21–25 | Impressions climbing normally, peaking ~400–590/day |
| **Jun 24, 21:12** | Commit `14933a7` ships 8 new routes (changelog + privacy) × 4 sister apps, plus the 4 product pages themselves, **all × 11 languages ≈ 130 new sitemap URLs**, submitted immediately |
| **Jun 26** | Impressions crash to single digits, site-wide, including previously-healthy pages (e.g. `/en/` 63→5, `/en/blog/epub-reader-iphone-no-drm/` 404→5 over the following week) |
| Jun 27 | `d35eb24` — sticky download bar added to all 4 sister app pages (another sitewide template change) |
| **Jun 28, 14:07** | Commit `fd91494` — **SmartDecrypt and ContentCue pages translated into 10 languages for the first time.** Until this commit, all non-English locale URLs for these two apps (`/es/smartdecrypt/`, `/fr/contentcue/`, etc. — ~18+ URLs) had been serving **English content**, live and indexed-eligible, since Jun 24 |
| Jun 29 | Further rebrand + "11-language" copy pushes across all locales |
| Jul 1 | Impressions still collapsed, no recovery yet |

### Why this is the leading theory

- The crash hit **already-ranking pages**, not just new ones — this points to a site-wide quality reassessment by Google, not a per-page technical fault (which is also why crawling/indexing checks above all come back clean: Google can still crawl and index a page while demoting how many queries it's shown for).
- The downloaded GSC Page Indexing coverage export (as of Jun 12, its normal reporting lag) already showed the site trending toward reduced indexing appetite *before* the Jun 24 batch: of ~852 submitted URLs, **333 were not indexed**, including:
  - `Discovered – currently not indexed`: 142 (Google saw the URL via sitemap, chose not to crawl it)
  - `Crawled – currently not indexed`: 36 (crawled, explicitly excluded)
  - `Page with redirect`: 153 (see fix below)
  
  Two of these three (`Discovered`/`Crawled – not indexed`) are Google's own content-quality triage signals, already elevated before the Jun 24 expansion made things worse.
- Google's 2024 "scaled content abuse" policy specifically targets exactly this pattern: many pages, differing mainly by locale/template, published in bulk — and for ~4 days, 2 of the 4 new app verticals were **literally duplicate English content** at 9 different locale URLs each.

This is a strong circumstantial case, not a certainty — GSC doesn't expose "why did the whole site's impressions drop" directly, so this conclusion is built from timing correlation plus a documented Google policy that matches the shape of what shipped. It should be treated as the leading hypothesis, not a confirmed diagnosis.

## Fixed: Internal Redirect Bug (2026-07-02)

While investigating the `153 Page with redirect` bucket, found and fixed a real, sitewide, low-risk bug: internal navigation links (`Navigation.jsx`, `Footer.jsx`, `Home.jsx`, and the sister-app pages' own changelog/privacy sub-nav) pointed at URLs **without trailing slashes** (e.g. `/en/webapp`), while every canonical URL in the sitemap has one (`/en/webapp/`). GitHub Pages serves these as folders and 301-redirects `/en/webapp` → `/en/webapp/`.

Because `Navigation.jsx`/`Footer.jsx` render on every page across all 11 languages, this meant every crawl discovered ~10 internally-linked URLs per page that immediately redirect — very likely the dominant source of the 153-page redirect bucket in the coverage report.

**Fixed** by adding trailing slashes to every internal `Link to={...}` target and one translation-driven `href` (`redesign.home.faq.items[1].link.href`, all 11 locales) in:
- `src/components/Navigation.jsx`, `src/components/Footer.jsx`
- `src/pages/Home.jsx`, `src/pages/Blog.jsx`, `src/pages/BlogPost.jsx`
- `src/pages/ContentCue.jsx`, `src/pages/ArchiveScanner.jsx`, `src/pages/SmartDecrypt.jsx`, `src/pages/GrepTagReader.jsx`
- `src/locales/*/translation.json` (11 files)

Verified in build output: homepage, blog, footer, navigation, and sister-app links resolve with trailing slashes, matching sitemap canonicals.

**Reaudit correction:** the first redirect cleanup accidentally changed four sister-app bottom links to protocol-relative URLs:

```txt
//archive/changelog/
//archive/privacy/
//smartdecrypt/changelog/
...
```

Browsers treat these as external protocol-relative hostnames, not localized internal routes. This was fixed locally by restoring language-prefixed paths such as `/en/archive/changelog/`. The same reaudit also normalized app-page detection in `App.jsx` so trailing-slash product pages (`/en/archive/`, `/en/webapp/`, etc.) are still recognized as product pages and do not render the global footer unintentionally. Production still needs a redeploy after this local correction.

**This fix does not address the impression drop.** Internal 301s on nav links are a minor crawl-budget inefficiency, not something that causes a 95%+ overnight collapse on already-ranking pages. It's good hygiene and closes one gap in the coverage report, done independently of the root-cause investigation above.

## Fixed: Noindex Non-English Sister-App Changelog/Privacy Pages (2026-07-02)

Confirmed via git history that this was the smoking gun for the duplicate-content theory: commit `fd91494` (Jun 28, 14:07 SGT) was the *first* time SmartDecrypt and ContentCue pages were translated into the 10 non-English locales. Between the Jun 24 launch and that fix, **all non-English locale URLs for those two apps served English content** — live, indexed-eligible, and already submitted via sitemap.

Rather than re-translate-and-hope, applied the standard fix other teams use for this page category (see discussion in conversation): changelog and privacy pages have near-zero organic search value in translation (nobody searches "cambios de la app" in Spanish; users reach these via in-app links), so the 10 non-English variants across all 4 sister apps are now `noindex`.

**Scope:** non-English locales of `/archive/`, `/smartdecrypt/`, `/contentcue/`, `/grepreader/` × `/changelog/` and `/privacy/` (80 pages). English versions of all 8 remain indexed — they have genuine standalone search value and are not part of the duplicate-content pattern.

**Implementation — two layers, because JS-only noindex is unreliable:**
1. **Static injection (authoritative):** `scripts/generate-static-routes.js` now writes `<meta name="robots" content="noindex, follow">` directly into the raw HTML file for these 80 route/language combinations at build time. This is what Googlebot sees on the very first crawl pass — no JavaScript execution required. (Google's own guidance warns that a robots directive injected only via client-side JS, e.g. react-helmet-async, can be missed if the page isn't promptly re-rendered by Google's second-pass renderer — especially likely for pages it already suspects are low-value.)
2. **Client-side (defense in depth):** Added a `noindex` prop to `SEO.jsx` and pass `noindex={lang !== 'en'}` from `AppChangelog.jsx` / `AppPrivacy.jsx`, so the tag is also correct for any client-side-only rendering path.
3. **Sitemap:** `scripts/generate-sitemap.js` no longer emits `<loc>` entries for these 80 URLs (dropped from 869 → 789 total sitemap URLs). They're still referenced as `hreflang` alternates from the English version, which stays in the sitemap normally.

Verified against the actual `npm run build` output: all 8 route types checked, non-English variants carry the noindex tag, English variants don't, and the sitemap URL count matches exactly (869 − 80 = 789). Live spot check also confirmed `/es/archive/changelog/` has `noindex, follow`, while `/en/archive/changelog/` remains indexable.

## Fixed: Build-Time Prerendering — Every Page Now Has Real Content in Raw HTML (2026-07-02)

While auditing for other Google-block risk factors, checked what the **raw HTML** looks like — the exact bytes Googlebot's first-pass crawler fetches, before any JavaScript runs:

```
curl -A Googlebot https://bibliofuse.com/en/archive/
curl -A Googlebot https://bibliofuse.com/en/blog/epub-reader-iphone-no-drm/
curl -A Googlebot https://bibliofuse.com/es/webapp/
```

**All three return byte-for-byte identical output**: the same generic title (`BiblioFuse — Private ebook & comic reader...`), no meta description, no canonical tag, no hreflang links, no JSON-LD, and a body of literally `<div id="root"></div>` — empty. This is true of **every one of the ~869 pages on the site**. All real content — title, description, canonical, hreflang, structured data, and the visible page itself — is added entirely by client-side JavaScript (`react-helmet-async` + React) after the browser downloads and runs the app.

### Why this matters

Google crawls in two passes: a fast raw-HTML fetch, then a separate, resource-constrained, often-delayed **rendering pass** where a headless-Chrome-like system actually executes the JavaScript. Sites Google trusts and prioritizes get rendered promptly and reliably; sites under increased scrutiny (which the Page Indexing report already showed — `Discovered`/`Crawled – currently not indexed` climbing to ~40% of submitted URLs by Jun 12) may have a growing share of pages evaluated on the **raw pass only** — where every URL on this site is the identical empty shell. That's the most extreme form of "duplicate content" possible (not just similar pages — the literal same bytes for every URL), and it's a plausible structural amplifier of the Jun 26 collapse, on top of the mass-batch/untranslated-content trigger already documented above.

### Implementation

Went with Option A from the scoping discussion (build-time prerender step, not a full static-site-generator migration — see rationale below). Added `scripts/prerender.js`, run as a fourth build step after `generate-static-routes.js`:

1. Starts a local static server (`sirv`) over the already-built `dist/` directory.
2. Launches headless Chrome (`puppeteer`), and for each of the 869 route/language files, navigates to it, waits for the page to fully render, and overwrites that file with the real rendered HTML — canonical, hreflang, meta description, Open Graph, Twitter Card, and all JSON-LD schemas included.
3. `package.json`'s `build` script now runs: `vite build && generate-sitemap.js && generate-static-routes.js && prerender.js`.

**Readiness detection — this needed a second pass to get right.** The first version waited for Puppeteer's `networkidle0` (no network activity for 500ms) plus a fixed delay, on the assumption that's a proxy for "the page is done." Verified output afterward and found the page *body* rendered correctly everywhere, but heavier pages (the homepage, blog articles) kept the **generic default `<title>`** — Helmet's update hadn't committed yet when the network went idle. Fixed by waiting for something more precise: every `SEO.jsx`-managed title is formatted as `${title} | BiblioFuse`, while the static shell's default title has no `|` at all — so the script now does `page.waitForFunction(() => document.title.includes(' | BiblioFuse'))` as the actual completion signal, with a 15s timeout and up to 3 retries per page.

**Regression risk — confirmed low, as scoped:**
- `src/main.jsx` uses `ReactDOM.createRoot().render()`, not `hydrateRoot()` — verified in the browser preview that a real visitor's page loads and behaves identically to before; React simply re-renders fresh on top of the prerendered HTML. Only what non-JS crawlers see changed.
- All 11 locale translation files are bundled synchronously (`src/i18n.js`), so no async i18n race during capture.
- `BlogPost.jsx`'s markdown fetch is same-origin/self-contained — no issue.
- `AppPrivacy.jsx`'s live fetch from `raw.githubusercontent.com` was a flagged risk; in practice it rendered correctly across all runs (real browser, real network, same as a live visitor would experience) — no mitigation needed so far, but if a future build shows a privacy page freezing a loading state, cache those markdown files at build time instead of fetching from inside the headless page.
- The manual noindex-string-injection in `generate-static-routes.js` (added earlier) is now technically redundant — Helmet's client-rendered noindex tag gets captured into the static file naturally during prerendering too — but left in place as a second, independent guarantee rather than removed.

**Build-time cost, tuned empirically:** started at 8 concurrent Chrome tabs, which caused CPU contention severe enough that ~10% of pages (83/869) timed out waiting for Helmet to commit — not a logic bug, confirmed by testing the same page standalone (renders correctly in <1s with no contention). A later run at concurrency 4 still produced a random 1-page miss (`/fr/blog/organize-ebooks-by-content-not-metadata/`) whose body rendered but whose head stayed generic, proving the fallback was flaky rather than page-specific.

**Reaudit hardening:** `scripts/prerender.js` now runs at concurrency 3, waits up to 30s for the SEO-managed title, logs progress every 50 pages, and fails the build if any route cannot produce SEO-complete HTML. It no longer writes partial/generic-head HTML on the final failed attempt. Verified with a fresh production build: **869/869 pages successfully prerendered**.

**Verified against the actual build output:**
- Raw HTML for `/en/archive/`, `/es/webapp/`, `/en/blog/epub-reader-iphone-no-drm/`, `/fr/blog/organize-ebooks-by-content-not-metadata/`, `/ja/smartdecrypt/`, `/en/archive/changelog/` all now show distinct, correct, per-page titles instead of one identical shell.
- Fetched `/en/archive/` with `curl -A Googlebot` against the built output: canonical tag, all 11 `hreflang` alternates + x-default, meta description, Open Graph, Twitter Card, and 3 JSON-LD schemas (SoftwareApplication, FAQPage, BreadcrumbList) are all present in the raw response — no JavaScript execution required.
- Noindex logic still correct on top of prerendering: `es/archive/changelog/` still carries `noindex, follow`, `en/archive/changelog/` doesn't.

### Why not a full static site generator instead (Astro/Next/Gatsby)?

Considered as Option B and still not recommended for this problem specifically:
- It requires rewriting routing, the i18n integration, and every page's data-fetching pattern to match the new framework's build-time conventions — not a bolt-on, a rebuild of the app's plumbing.
- Every one of the ~79 routes × 11 languages would need manual re-verification post-migration — a much larger regression surface than a prerender step, which touches nothing about how the app currently works or renders for real users.
- Realistically weeks of work for a site this size, versus the prerender step shipped above, which took one build-script addition and no changes to any page component.
- Worth reconsidering as a long-term architecture if the site keeps growing and CSR-related friction keeps recurring — just not the right first move for "Google can't see our content."

## Recommended Next Steps

1. ~~Do not expect any of the fixes above to single-handedly recover impressions on their own timeline~~ — **confirmed by the 2026-07-20 reaudit**: they didn't. Structural crawlability fixes were necessary but not sufficient.
2. ~~Watch the daily impressions trend for another 5–7 days~~ — done; no real recovery by Jul 20 (18 days out).
3. **Triggered**: impressions have not recovered by Jul 9 as flagged. The leading hypothesis now is that page/locale *volume* itself is still too high relative to the site's current trust budget — see the 2026-07-20 portfolio review for the data (61 articles × 11 locales ≈ 670 of 800 sitemap URLs, 171 clicks/90 days sitewide) and the recommended direction: freeze new translated content, prune the low-signal locale tail (noindex + drop from sitemap, same mechanism as the changelog/privacy fix below), and stop growing indexed surface until position recovers on pages that already used to rank.
4. Before the next deploy, confirm `npm run build` ends with `Prerendered 869/869 pages`. The build should now fail instead of publishing incomplete prerender output.
5. Before deploying SEO/link changes, run `rg 'to=\{?\x60//|to="//|href=\{?\x60//|href="//' src -S` and confirm no internal app route was accidentally converted into a protocol-relative URL.
6. Deploy the local reaudit fixes so production no longer contains the protocol-relative sister-app bottom links.
7. Optionally add a top-priority Cloudflare custom rule for `cf.client.bot` (Skip Bot Fight Mode) as defensive hardening — reasonable, but confirmed not to be the cause of this incident.
