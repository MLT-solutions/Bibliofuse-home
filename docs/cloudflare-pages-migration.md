# Hosting migration: GitHub Pages → Cloudflare Pages

**Status:** repo side is done and committed. **The dashboard steps need you** — connecting
the repo and attaching the domain. No CLI login and no credential to store: this uses the
same Git integration lokaltools.com already deploys with.

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
| `package.json` | `gh-pages` removed; `deploy:manual` added as a wrangler fallback. Cloudflare runs `npm run build` itself. |
| `vite.config.js` | dev server sends the same COOP/COEP so local behaviour matches production |

**Git integration, same as lokaltools.com.** Connect the repo once in the dashboard and
Cloudflare builds and publishes on every push to `main` — no CLI login, no API token, no
credential to store. This is how lokaltools already deploys.

This was originally planned as Direct Upload via `wrangler`, because the build drives
Puppeteer over ~900 pages and took 13–15 minutes against Cloudflare's 20-minute build
timeout. That is no longer true: the prerender step now skips noindexed pages (68% of the
total), and a full build takes **3m40s**. Git integration fits comfortably.

`npm run deploy:manual` still exists as a fallback — it needs `npx wrangler login` first,
and is only worth reaching for if the hosted build misbehaves.

## Step 1 — connect the repo (you)

Cloudflare dashboard → **Workers & Pages → Create → Pages → Connect to Git** → this repo.

| Setting | Value |
|---|---|
| Project name | `bibliofuse` |
| Production branch | `main` |
| Build command | `npm run build` |
| Build output directory | `dist` |

**One thing to watch on the first build:** the build runs Puppeteer, which downloads
Chromium during install. Cloudflare's build image supports this, but if the first build
fails on a missing Chromium, either set `PUPPETEER_SKIP_DOWNLOAD=false` in the project's
environment variables, or fall back to `npm run deploy:manual` from your machine. Check
the first build log rather than assuming it worked.

## Step 2 — first build

Push to `main` (or hit Retry deployment). Watch the log for:

```
✅ Prerendered 282/282 pages
```

If that line is missing or the count is short, the build failed by design — it refuses to
publish incomplete SEO HTML. Do not proceed to the DNS step.

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
redirect targets always exist. See `docs/features/tools.md` for that follow-up.

## Rollback

Nothing is destroyed by this migration. If Pages misbehaves after the cutover, point the
DNS records back at GitHub Pages and restore `public/CNAME` — the `gh-pages` branch still
holds the last GitHub Pages build.
