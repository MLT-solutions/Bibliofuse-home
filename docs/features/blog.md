# Blog

`src/pages/Blog.jsx`, `src/pages/BlogPost.jsx`, `src/data/articles.js`,
`public/blog/<slug>/<lang>.md`.

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
