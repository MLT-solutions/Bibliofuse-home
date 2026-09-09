# Hosting migration: GitHub Pages → Cloudflare Pages

**Status:** repo side is done and committed. **Two steps below need you** — they require
an interactive login and dashboard access this session cannot reach.

Supersedes `docs/cloudflare-redirects-greptag-archive.md`: those three redirects now live
in `public/_redirects` and deploy with the site instead of being typed into the dashboard.

## Why

We hit GitHub Pages' limits twice in two weeks:

1. **Phase 1** — it cannot issue 301s, so the GrepTag and Comic Duplicate Scanner
   redirects had to be hand-entered as Cloudflare Redirect Rules.
2. **Phase 2** — it cannot set response headers at all, and the `/tools/` pages need
   `Cross-Origin-Opener-Policy` + `Cross-Origin-Embedder-Policy` so wasm-vips can use
   `SharedArrayBuffer` for its worker threads. `bibliofuse.com` reported
   `crossOriginIsolated: false`.

Cloudflare Pages gives both natively via `public/_headers` and `public/_redirects`, which
Vite copies into `dist/` on every build. lokaltools already runs this way.

## What changed in the repo

| File | Change |
|---|---|
| `public/_headers` | COOP/COEP on `/*/tools/*`; immutable caching for `/wasm/*` and `/workers/*` |
| `public/_redirects` | Phase 1 redirects + `/webapp/` → `/tools/` + `/qr-generator/` → `/tools/qr-generator/` |
| `public/CNAME` | **deleted** — GitHub Pages only |
| `package.json` | `deploy` is now `npm run build && wrangler pages deploy dist --project-name=bibliofuse`; `gh-pages` removed, `wrangler` added |
| `vite.config.js` | dev server sends the same COOP/COEP so local behaviour matches production |

**Direct Upload, not the Git integration.** The build runs Puppeteer over ~850 pages and
takes 10–15 minutes; Cloudflare Pages' build timeout is 20 minutes and its build image is
a poor fit for Puppeteer. Building locally and uploading `dist/` keeps the current shape
and removes that risk entirely.

## Step 1 — authenticate wrangler (you)

```bash
npx wrangler login
```

Opens a browser for OAuth. One time. Verify with `npx wrangler whoami`.

## Step 2 — create the Pages project (you)

In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Direct Upload**, named
**`bibliofuse`** (the name the deploy script passes).

Then from the repo:

```bash
npm run deploy
```

This builds and uploads. It prints a `*.pages.dev` URL.

## Step 3 — verify on pages.dev BEFORE touching DNS

This is the one step worth being slow about. Against the `*.pages.dev` URL:

```bash
# tool pages must be cross-origin isolated
curl -sI https://<project>.pages.dev/en/tools/cbz-reducer/ | grep -i cross-origin
# expect: cross-origin-opener-policy: same-origin
#         cross-origin-embedder-policy: credentialless

# redirects must fire
curl -sI https://<project>.pages.dev/en/webapp/     | head -1   # expect 301
curl -sI https://<project>.pages.dev/en/grepreader/ | head -1   # expect 301
```

Then open `/en/tools/cbz-reducer/` in a browser, drop in a real CBZ, and confirm you get
a reduced file back. If isolation is missing the tool still works but runs single-threaded
and slower.

## Step 4 — attach the custom domain (you)

In the Pages project: **Custom domains → Set up a custom domain** → `bibliofuse.com`, then
repeat for `www.bibliofuse.com`. The zone is already in Cloudflare, so the DNS records are
updated automatically and the GitHub Pages records are replaced.

**This is the cutover.** Everything is verified on `pages.dev` first precisely so this step
is boring.

## Step 5 — after the cutover

```bash
for u in /en/ /en/tools/ /en/tools/cbz-reducer/ /en/comicreader/ /en/features/; do
  printf '%s %s\n' "$(curl -s -o /dev/null -w '%{http_code}' https://bibliofuse.com$u)" "$u"
done
curl -sI https://bibliofuse.com/en/tools/cbz-reducer/ | grep -i cross-origin
curl -sI https://bibliofuse.com/en/webapp/ | head -1
```

Then delete the old Cloudflare Redirect Rules from Phase 1 if you created them — they are
now duplicated by `_redirects` and would only be confusing. The `gh-pages` branch can be
left alone or deleted once you are happy.

## Step 6 — only then, lokaltools

The four tools stay live on lokaltools.com until bibliofuse.com is serving them, so the
redirect targets always exist. See `docs/tools.md` for that follow-up.

## Rollback

Nothing is destroyed by this migration. If Pages misbehaves after the cutover, point the
DNS records back at GitHub Pages and restore `public/CNAME` — the `gh-pages` branch still
holds the last GitHub Pages build.
