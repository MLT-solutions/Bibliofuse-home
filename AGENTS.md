<!-- BEGIN docs-routine v1 -->
## Docs
Feature & architecture docs live in `docs/`, not here. Read on demand:
- `docs/index.md` — map of the project (modules, tabs, what each does). Read this first
  to orient; it is cheap.
- `docs/architecture.md` — how pieces fit. Maintained by hand/reviewed, not auto-generated.
- `docs/features/<feature>.md` — one file per feature.
- `docs/.docs-synced-at` — the commit hash these docs currently match.

Rules:
- Before modifying a feature, read its `docs/features/<feature>.md` if it exists.
- If HEAD is ahead of `docs/.docs-synced-at`, docs MAY be stale: trust the code, note the
  drift to the user, and do NOT regenerate docs mid-task.
- A code change is not complete until the affected feature doc is updated to match.
  Edit the relevant section in place — do not append changelog notes (git is the changelog).
- Normal path: run the `commit` skill — it reconciles docs, then stages/commits/pushes, so
  code and its docs land in the same commit. Invoke it with `/commit` in Claude Code or
  `$commit` in Codex.
- Manual refresh without committing: run the `docs-reconcile` routine.
- To create docs for an undocumented project: run the `docs-backfill` routine (reviewed).
- Do not copy doc content back into this file.
<!-- END docs-routine v1 -->
