# Handoff: remove four file tools from lokaltools.com

**For:** whoever is working in the `lokaltools` repo.
**From:** the BiblioFuse site work, 2026-09-10. Self-contained — you do not need that
conversation's context.
**Status of the other side:** done and live. This is the only remaining step.

## Why

Four tools moved from lokaltools.com to bibliofuse.com. They are **live on bibliofuse.com
now** (verified 200 today). Until they are removed here, the same four tools are published
on two domains the same owner controls, competing for identical queries — which is the
duplicate-content pattern that got bibliofuse.com demoted by Google in June 2026 and took
three phases of work to unwind. It should not be left to drift.

The split rule: **file formats a comic/ebook reader handles → bibliofuse.com. Everything
else stays LokalTools.** LokalTools keeps its other ~55 tools.

The cost here is small. Over the 100 days to 2026-09-08 these four earned **1 click total**
on lokaltools (`pdf-to-cbz`, position 20.6); the whole site earned 4. LokalTools has no
authority for comic/ebook queries, which is why they moved.

## Do not start until you have committed or stashed your own work

`git status` currently shows ~160 modified files, and **three of them are the components
this change deletes**:

- `src/tools/images/CBZReducer.tsx` — modified
- `src/tools/epub/EPUBReducer.tsx` — modified
- `src/tools/pdf/PDFToCBZ.tsx` — modified

Also modified: `src/data/tools.ts`, `docs/features/tool-registry-and-loading.md`,
`src/app/sitemap.ts` — all files this change touches.

**If those three components have in-flight edits you care about, they will be discarded.**
The ported copies on bibliofuse are already diverging (dict-prop defaults, self-hosted
pdf.js worker, `dark:` variants stripped), so nothing here flows back automatically. If
your edits are fixes that should also apply to the bibliofuse copies, say so and they can
be ported across; otherwise they die with the files.

## 1. Remove the four tools from the registry

`src/data/tools.ts` — delete these four entries (line numbers as of today, they will
shift):

| Slug | ~line |
|---|---|
| `pdf-to-jpg` | 1394 |
| `epub-reducer` | 1465 |
| `cbz-reducer` | 1479 |
| `pdf-to-cbz` | 1493 |

Then delete their components:

```
src/tools/images/CBZReducer.tsx
src/tools/epub/EPUBReducer.tsx
src/tools/pdf/PDFToCBZ.tsx
src/tools/pdf/PDFToJPG.tsx
```

Check `src/components/tool-loader.tsx` for a lazy-import map keyed by slug — it references
these components and will need the same four removed.

## 2. Remove the learn/blog articles

The learn pages are blog content under `src/content/blog/<locale>/`. All four exist in
every locale and are live:

| Article slug | Live URL |
|---|---|
| `reduce-cbz-file-size` | `/{locale}/learn/reduce-cbz-file-size` |
| `compressing-epubs-local` | `/{locale}/learn/compressing-epubs-local` |
| `pdf-to-cbz` | `/{locale}/learn/pdf-to-cbz` |
| `convert-pdf-to-jpg-locally` | `/{locale}/learn/convert-pdf-to-jpg-locally` |

Delete `src/content/blog/*/{those four}.md` across all locales.

Two of them are also in a tool→learn slug map in `src/data/tools.ts` (around line 69):

```ts
"epub-reducer": "compressing-epubs-local",
"cbz-reducer":  "reduce-cbz-file-size",
```

Remove both. `pdf-to-cbz` and `pdf-to-jpg` are **not** in that map — their learn pages
exist purely as content, so don't go looking for entries that aren't there.

## 3. Add the redirects

`public/_redirects` already uses `/*/tools/x /:1/... 301` with `:1` for the locale capture
— follow that exact convention. Append:

```
# Four file tools moved to bibliofuse.com on 2026-09-10. File formats a comic/ebook
# reader handles belong on that domain; general web utilities stay here. Keeping both
# live would be duplicate content across two domains with the same owner.
/*/tools/cbz-reducer   https://bibliofuse.com/en/tools/cbz-reducer/   301
/*/tools/epub-reducer  https://bibliofuse.com/en/tools/epub-reducer/  301
/*/tools/pdf-to-cbz    https://bibliofuse.com/en/tools/pdf-to-cbz/    301
/*/tools/pdf-to-jpg    https://bibliofuse.com/en/tools/pdf-to-jpg/    301

/*/learn/reduce-cbz-file-size        https://bibliofuse.com/en/tools/cbz-reducer/   301
/*/learn/compressing-epubs-local     https://bibliofuse.com/en/tools/epub-reducer/  301
/*/learn/pdf-to-cbz                  https://bibliofuse.com/en/tools/pdf-to-cbz/    301
/*/learn/convert-pdf-to-jpg-locally  https://bibliofuse.com/en/tools/pdf-to-jpg/    301
```

All eight targets are English-only by design: the bibliofuse tool pages are indexed in
English only for now, with the other locales carrying English fallback text and a `noindex`
tag. Sending `/es/tools/cbz-reducer` to `/en/tools/cbz-reducer/` is deliberate — pointing
it at `/es/…` would land on a noindexed page.

**Every target verified 200 on 2026-09-10** before this was written.

## 4. Things that will also need attention

- **`src/app/sitemap.ts`** — currently modified in your working tree. Make sure the four
  tool URLs and four learn URLs drop out of the generated sitemap.
- **Category pages** — `cbz-reducer` sits in category `images`, `epub-reducer` in `epub`,
  the two PDF tools in `pdf`. Check those category listings don't render empty slots or
  break a count.
- **Internal links** — search the remaining content for links to the four tools; a
  surviving article pointing at a redirect is a small crawl-budget cost.
- **`public/wasm/`** — `vips.js`, `vips.wasm`, `vips-jxl.wasm`, `vips-heif.wasm` are still
  needed by other image tools. **Do not delete them.** Only remove wasm assets if you
  confirm no remaining tool loads them.
- **`docs/gsc-indexing-priority.md`** — untracked in your tree and stale (references 1,035
  sitemap URLs and Tier-1 requests from 2026-06-20). Worth refreshing or deleting while
  you're in here.

## 5. Verify

lokaltools deploys via Cloudflare Pages Git integration, so pushing to `main` builds it.
After deploy:

```bash
for u in \
  https://lokaltools.com/en/tools/cbz-reducer \
  https://lokaltools.com/es/tools/pdf-to-cbz \
  https://lokaltools.com/en/learn/reduce-cbz-file-size \
  https://lokaltools.com/id/learn/convert-pdf-to-jpg-locally ; do
  printf '%s -> %s %s\n' "$u" \
    "$(curl -s -o /dev/null -w '%{http_code}' -A 'Mozilla/5.0' "$u")" \
    "$(curl -s -o /dev/null -w '%{redirect_url}' -A 'Mozilla/5.0' "$u")"
done
```

All four should report `301` to a `bibliofuse.com/en/tools/…` target. Note plain `curl`
gets a 403 from Cloudflare on this domain — pass a browser user-agent as above.

Then confirm the remaining tools still work: open any image tool that uses wasm-vips and
run one real conversion, to prove removing the four didn't break the shared wasm loading.

## Contact point

If anything here conflicts with the monetization/ads work in flight, the redirects
(step 3) are the part that matters most and can ship independently of the deletions —
a 301 in front of a page that still exists is harmless and stops the duplicate-content
overlap immediately.
