# Blog

`src/pages/Blog.jsx`, `src/pages/BlogPost.jsx`, `src/data/articles.js`,
`public/blog/<slug>/<lang>.md`.

## The 2026-09-10 cut: 61 articles → 11

Measured over 12 healthy pre-collapse weeks (2026-04-01 → 2026-06-25, before the
2026-06-26 crash), the entire blog — 61 articles, all locales — earned **103 clicks from
8,035 impressions**, about 1.2 clicks a day.

| | count |
|---|---|
| Earned ≥1 click | 26 |
| 0 clicks despite impressions | 23 |
| Never received an impression | 12 |
| **Earned nothing at all** | **35 of 61** |

Some zero-click articles had real exposure and were actively refused —
`webp-vs-png-for-comics` 214 impressions/0 clicks, `find-duplicate-photos-mac` 175/0,
`reading-progress-sync-no-cloud-account` 150/0. That is Google showing a page and users
declining it, which is the signal that reassessed the domain.

**Kept (11)** — nine that earned ≥2 clicks and are BiblioFuse-subject, plus
`getting-started-with-bibliofuse` and `bibliofuse-tools-tab-guide`, which are product
documentation people reach from inside the app rather than from search.

**Redirected into `/tools/` (6)** — articles whose search intent is a tool the site now
actually ships: `compress-epub-online`, `merge-epub-files-online`, `merge-cbz-files-online`,
`reduce-comic-ebook-file-size`, `convert-pdf-to-cbz-online`, `convert-zip-to-cbz-online`.
Together 34 of the blog's 103 clicks, and they had its best CTR (`compress-epub-online`
7.95%) — the intent was strong and the answer was an essay.

No redirect was invented where no tool matches. `cbz-to-pdf-online`, `epub-to-pdf-online`
and `convert-cbr-to-cbz-online` have no counterpart (CBR/RAR cannot be opened in-browser),
so they were deleted. Pointing them at a tool that does something else is a soft 404.

**Redirected to mlogictech.com (6)** — articles about SmartDecrypt and Comic Duplicate
Scanner, which left the domain in Phase 1.

**Deleted (38)** — everything else, plus 74 now-orphaned cover images (12.6 MB).

### Two kept deliberately despite bad CTR

`epub-reader-iphone-no-drm` (1,267 impressions, 0.71% CTR) and `best-comic-reader-iphone-ipad`
(583, 1.20%) are the site's largest remaining organic surface and its clearest recovery
signal. Position 8–10 should earn 1.5–3%, so both underperform badly — but redirecting them
into `/comicreader/` would gamble that surface on Google transferring a ranking between an
article and a product page. Rewriting them to lead with the answer is the better fix and is
still open.

### `public/404.html` had to change first

It used to be a GitHub Pages SPA hack that meta-refreshed *every* unknown URL to `/`. Under
that, 38 deleted articles would have read as 38 redirects-to-homepage — textbook soft 404s
that never deindex. It is now a real 404 page with no refresh, and the matching
`sessionStorage` handler is gone from `index.html`. On Cloudflare Pages the fallback was
obsolete anyway: `generate-static-routes.js` writes a real file for every valid route.

Cloudflare Pages `_redirects` supports 301/302/303/307/308 and 200 rewrites, **not 410**, so
deleted articles return 404. For deindexing the two are equivalent in effect.

### Adding an article

Unchanged, and the five-place checklist above still applies — `src/data/articles.js`,
`public/blog/<slug>/`, `ARTICLE_SLUGS` in all three build scripts, and
`redesign.blog.posts.<slug>` in all 11 locales. Given the measurement above, the bar for a
new article is now considerably higher than it was.

## Registry
`src/data/articles.js` is the source of truth for which posts exist: each entry has
`slug`, `date`, `tags`, `coverImage`. It does NOT contain post body content.

## Content loading
`BlogPost.jsx` reads `slug` and `lang` from the route, looks up the article in the
registry, then fetches `blog/<slug>/<lang>.md` at runtime (`fetch`, not a build-time
import). If that 404s, it falls back to `blog/<slug>/en.md`. Rendered via
`react-markdown` + `remark-gfm`.

## Adding a new post
1. Add an entry to `src/data/articles.js` (slug, date, tags, coverImage).
2. Create `public/blog/<slug>/en.md` at minimum; other language files can be added
   later (or generated — see `build-pipeline.md`'s translation scripts) and will fall
   back to English until they exist.
3. Cover images live in `public/image/blog/`.

## Tags
`BlogPost.jsx` has a `TAG_COLORS` map (`guide`, `news`, `tips`, `update`) for styling;
tags not in that map render with a default style.

## `ocr-comics-extract-text-iphone` deleted (2026-09-10)

The survivor count is **9**, not 10. This article was kept in the Phase 3 cut on its
title, then removed once its body was read: it described a standalone OCR feature — "scan
any page, or any selected region, and get the text as a copyable string", plus in-house
models "trained specifically for comic and manga layouts" with separate horizontal and
vertical-CJK models. **None of that ships.** The real capability is on-device PP-OCRv5
inside live comic translation, typeset back into the balloon (`live-translation` in
`src/data/feature-matrix.js`); there is no text-extraction or copy-out feature anywhere in
the app.

Deleted, not redirected — no honest destination exists for the query, which is the same
call the other 38 got. Removed from: `src/data/articles.js`, all three `ARTICLE_SLUGS`
copies, `public/blog/<slug>/` (11 markdown files), the cover image,
`redesign.blog.posts.<slug>` in all 11 locales, and the **"OCR: extracting text from
comics" link in `/guide/`'s Tools section** in all 11 locales.

Cost: 2 clicks and 117 impressions across 8 locale URLs over the 100 days to 2026-09-09,
at 1.9-3.7% CTR and position 8.6-10.1 — a page ranking for an intent it could not satisfy,
which is the pattern the whole recovery is about.

**Lesson for the next cut: read the body, not the title.** This is the second article
retired for that reason (`read-manga-online-iphone` was the first, a ContentCue piece kept
on its title). Check any claim an article makes against `src/data/feature-matrix.js`
before keeping it.

## Step 3 wave 1: rewrote two ranking articles instead of adding pages (2026-09-10)

The plan for this wave was two new URLs — `/guide/epub-on-iphone/` and `/guide/cbz-vs-cbr/`
— based on Search Console showing those clusters earning zero clicks. **The plan was
wrong, and page-level data is why.** The scaffolding (a `GuideArticlePage` component and a
`guide-articles.js` registry) was built, wired, and then reverted before commit.

Both clusters are already covered by surviving articles that rank and do not convert:

| Article | Impressions (en) | Clicks | CTR | Position |
|---|---|---|---|---|
| `epub-reader-iphone-no-drm` | **942** | 2 | **0.21%** | 15.5 |
| `cbz-vs-cbr-vs-epub-formats-explained` | 234 | 0 | 0% | 9.8 |

Across all locales those are 1,439 and 339 impressions. Publishing a second page per
cluster would have split the signal and competed with a URL that already has accumulated
relevance. **Query-level GSC data says "nobody is clicking"; page-level says "this exact
URL already ranks".** Check page-level before concluding a topic is uncovered.

### What was actually wrong with them
Not the URL, and not the depth — the targeting. Both opened with a product claim rather
than the answer, and both had a `seoDescription` that pitched the app to someone who had
asked a question. The EPUB article spent its first three sections arguing that Apple Books
is bad, when the query was "can iphone read epub".

- **Titles** now match the query shape ("How to Read EPUB Files on iPhone (Without iTunes
  or Apple Books)", "CBZ vs CBR vs EPUB — What the Difference Actually Is").
- **`seoDescription`** — note this is a **separate key** from `excerpt`; `excerpt` is the
  card text on `/blog/`, `seoDescription` is the meta description search results show.
  Editing `excerpt` alone changes nothing that a searcher sees. Both were updated.
- **Bodies lead with the answer.** The EPUB article was rewritten around the three verified
  import routes (Files, AirDrop, Wi-Fi Transfer), a free-vs-Pro table, and the two real
  reasons an EPUB will not open. The format article kept its structure and got a
  answer-first opening plus a licensing correction.
- Every capability claim came from the Step 2 code verification, with one nuance the audit
  turned up: `.cbr`/`.rar` are **not** registered AirDrop document types, so "Copy to
  BiblioFuse" may not appear for those two. The article says so.

### One internal contradiction fixed in passing
The format article said RAR "requires a licensed implementation to create (though any
software can extract them)", while `/tools/`'s own FAQ says RAR cannot be opened in a
browser for licensing reasons. Extraction is licensed too; that is exactly why native apps
manage CBR and web tools do not. Corrected, and the article now links both.

### Non-English versions deliberately untouched
`ru` (195 impressions), `pt` (115), `es` (54), `zh` (33), `ja` (26) and the rest still have
the old bodies and titles. That content is poorly targeted, not false, and rewriting ten
locales at once is the shape of the 2026-06 launch that preceded the collapse. English
first; measure in GSC; then port what worked.
