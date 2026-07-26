# Site Showcase Standard & Audit Rubric — themed multi-app portfolio

**What this is:** the target standard for showcasing app features on a *themed portfolio hub*
(a site that features multiple apps unified by a theme — here: privacy-first file management),
plus a checklist an agent can audit the live site against.

**How to use with an agent:** "Audit <site> against site-showcase-audit.md. For each check,
report PASS / PARTIAL / FAIL with the specific page/section and a one-line fix. Do NOT rewrite
copy yet — produce the audit first." Then decide fixes.

**Not the agent's call — decide these yourself first (see §6):** hub-vs-separate domains, which
apps belong on the themed hub, and per-app effort tier. The agent audits against your decisions;
it shouldn't invent site architecture.

---

## 1. The model: three layers, not one page

A portfolio hub has one more layer than a single-product site. Thin highlights and a raw
changelog both fail because they try to do a job that belongs to the middle layer.

**Layer 0 — Hub homepage (studio/theme level).**
Positions the *collection*, not any one app. Answers "what unifies these and why trust this
maker" in 3–5 seconds, then a curated grid of apps, each with a one-line outcome + link to its
own section. Ranks for the brand and the category ("privacy file management tools"); its second
job is cross-promotion between related apps.

**Layer 1 — Per-app page (product level).**
Each app gets its own focused pitch as if it were a standalone site: benefit headline (outcome,
not feature), real product UI beside it, primary CTA (usually → App Store). Shallow by design —
a launcher, not an encyclopedia.

**Layer 2 — Feature / use-case pages (substance level).**
One page per meaningful feature OR (better) per job-to-be-done. This is the indexable,
AI-discoverable content AND the user-facing encyclopedia. A page built around a real job is
never "thin content"; this layer is what's missing when highlights feel too shallow and a
changelog feels too thin.

**Demote — Changelog.**
Keep it as a *trust / still-alive* signal, but noindex the raw dated feed (it is thin content).
Optionally promote only meaningful releases into narrative "What's New" posts organized around a
use-case — those can be substantial enough to index. Changelog serves existing users; Layer 2
serves discovery. Never make one do the other's job.

---

## 2. Core content principle: show, don't tell

Current standard moved from telling (feature lists, abstract illustrations) to showing (real
product UI). Abstract 3D/illustration heroes are fading; showing the actual product early and
clearly converts better.

- Use real screenshots, short autoplaying screen-capture loops, or lightweight interactive
  previews of the app doing its one job. For an indie this is cheap — you already have the app;
  record it.
- Copy is the *outcome*, not the capability. "Protect files with on-device encryption" →
  "Your documents never leave your device." Feature answers *what*; benefit answers *why care*.
- Benefit headline short (aim < 8 words). Passes the 5-second test: a first-time visitor knows
  what it does, who it's for, why it matters.
- Feature *overview* sections use a bento grid (modular cards, each = one real screen + one-line
  outcome), not a bulleted wall of text.
- Mobile-first: most visits are mobile; verify layouts thumb-first.

---

## 3. Portfolio-specific: theme coherence is the moat

The hub's power is a coherent theme. That creates two rules the single-product model doesn't have:

- **Off-theme apps dilute the hub — keep them out.** Only apps that fit "privacy-first file
  management" belong on the themed hub. Apps with a different audience/purpose (e.g. a focus
  timer, a booking tool) do NOT get crammed in; they get their own home or separate positioning.
  Featuring everything is the most common portfolio mistake — it reads as "a random dev's stuff,"
  not "the place for private file tools."
- **Cross-promote within the theme.** Someone who wants a document filer likely wants an
  encrypted-file tool. Related apps should link to each other ("works well with…"). This is the
  main reason to have a hub at all vs scattered standalone app pages.

---

## 4. Information architecture — consolidate under one domain

For a solo maintainer, one domain with per-app *subdirectories* beats many separate domains:
it concentrates SEO authority, is far less to maintain, and lets the hub cross-promote cleanly.

Recommended shape:
```
hub-domain.com/                      → Layer 0 hub homepage (theme + app grid)
hub-domain.com/<app>/                → Layer 1 per-app page
hub-domain.com/<app>/<feature-or-job>/ → Layer 2 feature/use-case pages
hub-domain.com/<app>/changelog       → noindexed
```
Exceptions that keep their own domain: an app that has already outgrown the hub with its own
established brand/traffic. Splitting authority across many domains is only worth it once an app
is big enough to stand alone. Everything else consolidates.

Internal linking is not optional — it's what makes the hierarchy work for both users and search:
hub ↔ app ↔ feature pages must interlink, and related apps must link to each other.

---

## 5. Single source: generate pages from feature docs

Layer 2 pages are a *rendering* of the per-feature docs (docs/features/<feature>.md). Same
source, different output: one feature manifest feeds App Store copy, website feature page, and
in-app/help encyclopedia. Write once, publish many.

- When a feature doc changes (via the commit skill), its public feature page is the thing to
  refresh — the doc is the trigger.
- This keeps Layer 2 from becoming a separate content treadmill.

---

## 6. Solo-indie reality — tier the effort

- Don't build B2B machinery: no ROI calculators, no "book a demo," no buying-committee trust
  matrix. Conversion path is website → App Store; the App Store screenshots + preview video ARE
  part of the show-don't-tell system, not an afterthought.
- Budget by app. Flagship app: full three layers + several use-case pages. Minor app: Layer 1
  page + 1–2 use-case pages, no changelog. Don't over-invest in an app that hasn't earned it.
- The cheapest high-value asset is a short screen-capture loop of the real app doing its job.
  Prioritize that over more highlight copy.

---

## 7. Audit checklist (agent runs this against the live site)

Report PASS / PARTIAL / FAIL + page + one-line fix for each.

**Hub homepage (Layer 0)**
- [ ] Passes 5-second test for the *collection* (what unifies these apps is clear).
- [ ] Curated app grid; each app has a one-line outcome + link to its own section.
- [ ] Only on-theme apps present (flag any off-theme app that dilutes the hub).
- [ ] Benefit-led headline (outcome, < ~8 words), not a generic tagline.

**Per-app pages (Layer 1)**
- [ ] Each featured app has its own focused page (not just a homepage card).
- [ ] Real product UI shown (screenshot/loop/interactive), not abstract illustration.
- [ ] Outcome-framed copy, not a raw feature list.
- [ ] Clear primary CTA (→ App Store / download) above the fold.
- [ ] Related-app cross-links present.

**Feature / use-case pages (Layer 2)**
- [ ] They exist (flag apps that jump straight from Layer 1 to nothing).
- [ ] Organized per feature or per job; each answers what / who / why.
- [ ] Substantial enough to index (flag any that read as thin/stub content).
- [ ] Indexable (NOT noindexed) and internally linked from the app page.
- [ ] Content matches the current feature docs (flag drift).

**Changelog**
- [ ] Raw dated changelog is noindexed.
- [ ] Flag any thin-content pages competing for index that should be noindexed or merged.

**Structure & hygiene**
- [ ] One-domain subdirectory structure (or documented exception for a broken-out app).
- [ ] Hub ↔ app ↔ feature internal linking present in all directions.
- [ ] Mobile-first layouts (thumb-reachable CTAs, no desktop-only sections).
- [ ] Page load: flag heavy hero media that slows first paint.
- [ ] Duplicate / near-duplicate pages across apps (flag for consolidation).

---

## 8. Known decisions still open (resolve, don't let the agent guess)

- Hub-vs-separate domain for each app (default: consolidate; exception: already-established
  standalone brand).
- Exact app roster for the themed hub (which apps are "privacy-first file management" enough).
- Per-app effort tier (flagship vs minor).
- Whether to keep changelogs per app at all, or only for the flagship.
