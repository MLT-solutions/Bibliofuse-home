# Reader family data — sourcing pass

Draft compilation for the `/comicreader/` platform picker (`src/components/ReaderFamilyGuide.jsx`),
built 2026-07-20 by reading the actual product source repos rather than inferring from marketing
copy. **Not authoritative until reviewed** — that's the point of the CSV format: open it, check
each row, correct what's wrong, and the diff is the record of what changed and why.

## Files

- `platform-coverage.csv` — the 9-row table shown on the page (role, connection modes, status).
- `host-client-capabilities.csv` — the underlying host/client capability data that drives the
  picker's recommendation logic (`HOSTS`/`CLIENTS`/`MODE_INFO` in `ReaderFamilyGuide.jsx`).

Both have a `confidence` column (`high` / `low` / `unverified`) and a `source` column citing the
exact doc or file the claim comes from. `unverified` rows are flagged, not guessed — see "Open
questions" below.

## Sources read

- `bibliofuse_iosv2/docs/` — iOS/iPadOS/macOS/visionOS/tvOS (native Swift, current). Especially
  `mac-remote-streaming.md`, `tvos-streaming-reader-go-no-go-port-plan.md`,
  `lan-tailscale-https-routing-and-pairing-plan.md`, `docker-synology-web-reader-plan.md`,
  `android-tv-full-port-plan.md`, `private-remote-streaming-article-notes.md`.
- `bibliofuse-windows/docs/features/streaming-to-ios.md` — Windows host implementation
  (discovery, TLS identity, LAN vs. iCloud-relay vs. Tailscale).
- `bibliofuse-nas/docs/` (private repo) — Docker/Synology host architecture, `synology-package.md`
  release-gate status.
- `github.com/MLT-solutions/bibliofuse-nas-distribution` (public repo) — the authoritative
  product-status table and v0.1.3 release notes; this is what caught the Docker/Synology
  inaccuracies below.
- `bibliofuse-flutter/docs/index.md` — confirms the current Android phone app is the **legacy,
  frozen** Flutter codebase (last substantive commit 2026-02-12), not part of the native rewrite.

## What this pass already fixed in the live component

Three inaccuracies were caught and corrected directly in `ReaderFamilyGuide.jsx` before this CSV
was written (see that file's git history, 2026-07-20):

1. Docker and Synology hosts were shown as already supporting native-app streaming
   (Local Wi-Fi / iCloud+Tailscale). The distribution repo's own README says released iOS/visionOS
   apps have no supported Docker connection at all, and Synology streaming is "validation
   pending." Only the free browser reader works today for either host.
2. Apple TV was shown as supporting "iCloud + Tailscale (automatic)". tvOS has no iCloud Documents
   entitlement and ships with its (fully-built) Tailscale path disabled behind
   `TVAppState.remoteTailscaleEnabled = false`, pending an upstream Tailscale tvOS client bug.
   Apple TV is Local Wi-Fi only, by design.
3. iPhone/iPad was offered as a **host** option. No source doc describes iPhone/iPad hosting
   anything — streaming is documented as one-directional, Mac/PC/NAS → mobile/spatial/TV clients.
   Removed from the host list entirely.

## Open questions (unverified — need your confirmation)

- **Can a Mac or Windows PC ever act as a stream *client*** (reading from another Mac, PC, or NAS
  host), or are they host-only? Every doc found describes them only as hosts. The picker currently
  assumes they can also be clients (`CLIENTS.mac`, `CLIENTS.windows`) — this may be wrong the same
  way iPhone-as-host was wrong. Flagged `unverified` in `host-client-capabilities.csv`.
- **Android phone streaming timeline** — "coming soon" is your own stated intent from this
  conversation, not something found in any source doc (the current Android app is frozen; no
  active native-Android-phone rewrite plan exists in any repo checked). Worth confirming this is
  still accurate before it stays on a public page indefinitely.
- Full Windows-as-client and Mac-as-client behavior wasn't traced through to code — this pass
  prioritized correcting active misstatements over exhaustively verifying every cell.

## Updating the component from this data

Once you've corrected the CSVs, the fields map directly:

| CSV column | Component field |
|---|---|
| `platform-coverage.csv` rows | `COVERAGE_ROWS` array |
| `host-client-capabilities.csv` `tailscale_capable` / `native_streaming` (hosts) | `HOSTS[key]` |
| `host-client-capabilities.csv` `can_stream` / `apple_icloud` / `lan_only` (clients) | `CLIENTS[key]` |

Flag which rows changed and I'll apply the diff back to `ReaderFamilyGuide.jsx` directly rather
than re-deriving it.
