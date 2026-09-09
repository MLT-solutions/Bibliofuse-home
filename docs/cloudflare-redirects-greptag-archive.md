# Cloudflare Redirect Rules — GrepTag & Comic Duplicate Scanner move

**Status:** written 2026-09-09. **These must be applied by hand in the Cloudflare
dashboard** — bibliofuse.com is served by GitHub Pages, which cannot issue 301s for
arbitrary paths, and the Cloudflare MCP is not authorised in the session that wrote this.

Apply them **after** mlogictech.com has deployed `greptag.html` and
`comic-duplicate-scanner.html`, so the destinations exist before anything points at them.

## Why

GrepTag and Comic Duplicate Scanner were removed from bibliofuse.com (see
`docs/gsc-cloudflare-findings.md` and the App Store 4.3(a) notes). Their old URLs need to
land on the new product pages on mlogictech.com rather than 404 or bounce to the homepage
via `public/404.html`.

Traffic at risk is effectively nil — `/grepreader/` earned 22 impressions and 0 clicks
across all locales in the 100 days to 2026-09-08, `/archive/` earned 6 impressions and 0
clicks — so these exist for correctness and link equity, not to rescue traffic.

## Where

Cloudflare dashboard → **bibliofuse.com** zone → Rules → **Redirect Rules** → Create rule.
Free plan covers this volume. Use "Wildcard pattern" matching.

## The rules

Each is a **301 (permanent)**, preserve query string **off**.

### Rule 1 — GrepTag

| Field | Value |
|---|---|
| Rule name | `GrepTag → mlogictech` |
| Request URL wildcard | `https://bibliofuse.com/*/grepreader/*` |
| Target URL | `https://www.mlogictech.com/greptag` |
| Status | 301 |

Covers `/en/grepreader/`, all 11 locale prefixes, and the `/changelog/` and `/privacy/`
sub-paths in one pattern.

### Rule 2 — Comic Duplicate Scanner

| Field | Value |
|---|---|
| Rule name | `Comic Duplicate Scanner → mlogictech` |
| Request URL wildcard | `https://bibliofuse.com/*/archive/*` |
| Target URL | `https://www.mlogictech.com/comic-duplicate-scanner` |
| Status | 301 |

### Rule 3 — retired GrepTag article

| Field | Value |
|---|---|
| Rule name | `GrepTag article → mlogictech` |
| Request URL wildcard | `https://bibliofuse.com/*/blog/organize-ebooks-by-content-not-metadata/*` |
| Target URL | `https://www.mlogictech.com/greptag` |
| Status | 301 |

The article `organize-ebooks-by-content-not-metadata` was a GrepTag piece; its content,
its `articles.js` entry, its `ARTICLE_SLUGS` entries in all three build scripts, and its
`redesign.blog.posts.*` keys in all 11 locales were removed in the same change.

If the dashboard's wildcard matcher will not accept a trailing `/*` on a path that also
needs to match without it, create the no-slash variant as a second pattern on the same
rule (`.../grepreader` and `.../grepreader/*`).

## Verify after applying

```bash
for u in \
  https://bibliofuse.com/en/grepreader/ \
  https://bibliofuse.com/ja/grepreader/changelog/ \
  https://bibliofuse.com/en/archive/ \
  https://bibliofuse.com/fr/archive/privacy/ \
  https://bibliofuse.com/en/blog/organize-ebooks-by-content-not-metadata/ ; do
  printf '%s -> %s %s\n' "$u" \
    "$(curl -s -o /dev/null -w '%{http_code}' "$u")" \
    "$(curl -s -o /dev/null -w '%{redirect_url}' "$u")"
done
```

Every line should report `301` and a `www.mlogictech.com` target.

## Not covered here

`bibliofuse-web.netlify.app` → `/tools/` and the 8 `*-online` conversion articles → their
tool pages belong to Phase 2/3 of the site plan and are not part of this change.
