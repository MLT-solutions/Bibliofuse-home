# How to Switch Between LTR and RTL Reading in BiblioFuse

Most Western comics read left-to-right: you turn the page with a right swipe, panels flow from the top-left corner, and the story moves across a spread in the direction you'd read a book. Japanese manga flips everything — panels run right-to-left, the first page is on the right side of the volume, and you swipe left to advance. If you read both formats, you need a reader that handles both without reconfiguring every time you switch series.

[BiblioFuse](https://bibliofuse.com/en/) keeps reading direction as a per-book setting, so your manga library reads right-to-left and your superhero comics read left-to-right without any manual toggling between sessions.

## Why Reading Direction Matters

It's easy to underestimate the impact of getting this wrong. Open a manga in LTR mode and you'll read the story backwards — panels that should run right-to-left appear left-to-right, ruining pacing and gags. The confrontation at the end of a chapter becomes the greeting at the start. Translators and publishers add "Read right to left!" notices precisely because this mistake is common.

The problem compounds for manhwa (Korean webcomics) and manhua (Chinese comics). Most manhwa uses vertical scroll without directional ambiguity, but manhua varies, and some series switch direction mid-volume.

## Setting Reading Direction in BiblioFuse

### App-Wide Default

Open **Settings → Reading → Reading Direction** to set the global default. Options are:

- **Left to Right (LTR)** — standard for Western comics and most EPUB ebooks
- **Right to Left (RTL)** — standard for manga, some manhua

Set this to whichever format you read most. If manga makes up most of your library, set RTL as the default.

### Per-Book Override

The global default applies to any newly opened file, but you can override it per book without changing the global setting.

While reading, tap the centre of the screen to reveal the reader controls, then tap the **gear icon** in the top toolbar. The **Reading Direction** toggle appears at the top of the quick settings panel. Switch between LTR and RTL here — the change takes effect immediately, mid-session, without closing the book.

[BiblioFuse](https://bibliofuse.com/en/) saves this per-file preference. Next time you open the same book, it opens in the direction you set last time, regardless of the global default. Your manga will consistently open RTL while your Western comics open LTR.

## What Changes When You Switch Direction

The direction setting controls several things simultaneously:

**Swipe direction** — In LTR, swipe left to advance (next page), right to go back. In RTL, swipe right to advance, left to go back. The reversal trips readers up the first time — it feels counterintuitive until you realise the gesture now mirrors turning a physical manga page toward the left.

**Two-page layout ordering** — In LTR two-page mode (landscape), the left page has the lower page number. In RTL, the right page has the lower page number — matching how physical manga volumes are printed.

**Thumbnail scrubber orientation** — The thumbnail bar at the bottom of the reader reverses. In RTL mode, the leftmost thumbnail is the last page in the volume; dragging right moves backward through the book.

**Spread detection** — BiblioFuse identifies double-page spreads by aspect ratio and image dimensions. When it detects a spread, it displays both pages together. In RTL mode, the right page is page N and the left page is page N+1, matching the publisher's print ordering.

## Keyboard and Tap Zone Navigation

On iPad with an external keyboard, arrow keys follow the current direction setting. In LTR, the right arrow goes to the next page. In RTL, the right arrow moves backward in the story (to the previous panel sequence), and the left arrow advances forward — matching the physical metaphor of a right-to-left book.

Tap zones are direction-aware in the same way. If you've configured tap-right-side = next page in **Settings → Gestures**, this remains consistent: tapping the right side of the screen always moves "forward," whether that's the next or previous physical page number depending on direction.

## Vertical Scroll and Reading Direction

Vertical scroll mode — used for manhwa and webtoons — is not affected by the LTR/RTL setting. Continuous scroll has no left-right page ordering, so the direction toggle doesn't apply. Scroll direction is always top-to-bottom.

If you read a mix of manhwa (vertical) and manga (RTL), you can leave the reading direction set to RTL. Manhwa files will open in vertical scroll as expected, and manga files will respect the RTL setting — they're stored as separate per-book preferences.

## Automatic Detection

Some CBZ files contain a `ComicInfo.xml` file that specifies the intended reading direction. BiblioFuse reads this metadata when present and sets the per-book direction accordingly on first open — no manual override needed. This works for files exported by ComicRack, YACReader, and other tools that write ComicInfo metadata. If your file has this metadata, you'll see the direction applied automatically the first time you open it.

## Common Questions

**My swipe direction feels backwards after switching to RTL. Is that correct?**

Yes — in RTL mode, swiping right advances to the next page. This mirrors the physical act of turning a manga page toward the left side of the volume. It takes a few minutes to feel natural, but the metaphor is consistent with how the books are designed to be read.

**Can I set reading direction on iPhone and have it apply on iPad too?**

Per-file direction preferences sync via iCloud along with reading position. If you set a file to RTL on iPhone, it will open RTL on iPad. The global default setting is device-local and does not sync.

**Does the reading direction affect how files are imported or named?**

No. Reading direction only affects how the reader displays and navigates files. File names, folder structure, and the library view are unaffected.

## Key Takeaway

Switching reading direction in [BiblioFuse](https://bibliofuse.com/en/) takes three taps and persists per book automatically. Set your global default to match your primary reading format, override per-book for everything else, and the reader handles swipe direction, two-page ordering, and thumbnail orientation without further configuration. For anyone who reads both manga and Western comics, it's the setting that makes the difference between a reader you fight and one that disappears into the background.
