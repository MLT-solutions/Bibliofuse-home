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
