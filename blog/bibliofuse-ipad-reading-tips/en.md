# BiblioFuse on iPad: Tips for Full-Page Comic Reading

The iPhone is convenient, but the iPad is where comic reading gets genuinely good. A 12.9-inch iPad Pro gives you roughly four times the screen area of an iPhone 15 — enough to display a double-page spread at close to its intended size, let you read small panel text without pinching, and reduce eye fatigue across long sessions. [BiblioFuse](https://bibliofuse.com/en/) is built to take advantage of all of it. Here are the settings and habits that make the most of reading on iPad.

## Start With the Right Display Mode

When you open a comic in BiblioFuse on iPad, the first decision is how you want single pages to fill the screen.

Go to **Settings → Display** and you'll find three fit modes:

- **Fit width** — expands each page horizontally to the screen edge. Good for tall, portrait-oriented pages; vertical scrolling required if the page overflows.
- **Fit height** — shows the entire page at once with letterboxing on the sides. Nothing gets cut off.
- **Fill screen** — stretches or crops to fill the display completely. Best for high-quality scans where you want maximum immersion.

For standard US comic pages (roughly 10 × 15 inches at 300 DPI), **Fit height** on an iPad Pro gives you a nearly 1:1 reading experience. For manga volumes, **Fit width** tends to work better since volumes are narrower and taller.

## Double-Page Spreads in Landscape

Rotate your iPad to landscape orientation when you reach a double-page spread — [BiblioFuse](https://bibliofuse.com/en/) detects the rotation automatically and switches to a two-page layout. You'll see left and right pages displayed side by side, exactly as they'd appear in a print edition.

In **Settings → Two-Page Layout**, you can control:

- Whether the first page is shown solo (common for issue covers) or paired
- The gap between pages (useful for physical-scan comics that have a gutter)
- Whether landscape always triggers two-page mode or follows your manual preference

For manga read right-to-left, the page ordering flips automatically once you've set **Reading Direction → RTL**. Left swipe advances forward in the story regardless of physical page number.

## Using the Thumbnail Scrubber

On iPad, the scrubber bar at the bottom of the reader is wide enough to be genuinely useful. Tap the centre of the screen to reveal it, then drag the scrubber to jump anywhere in the file. Thumbnails appear as you drag so you can navigate by visual content, not just page number.

This is particularly useful for comics that have distinct story arcs across an issue — you can scrub to the start of an arc visually rather than counting pages.

Long-press the scrubber to set a **bookmark** at the current position. Bookmarks appear as markers on the scrubber bar, and you can name them from the bookmark panel (accessible from the top-right menu). For anthology collections or serialised comics, bookmarks are a practical alternative to chapter markers when the file has no built-in chapter structure.

## Reading Across Devices With iCloud Sync

If you also read on iPhone, you'll appreciate that BiblioFuse syncs reading position automatically through iCloud. Open a comic on iPad, read 60 pages, close the app — your iPhone picks up at page 60 when you open the same file there.

The sync is passive: no accounts, no servers you depend on. It uses iCloud's key-value store, which syncs within seconds on the same Wi-Fi network and within a minute or two on cellular. If you keep both devices online, you'll rarely lose your place.

For your main library, use [Mac Home Library Streaming](https://bibliofuse.com/en/blog/mac-home-library-streaming-iphone/). Run the BiblioFuse stream server on your Mac and connect from BiblioFuse on iPad over Wi-Fi. Your Mac library — which can be terabytes of comics — streams directly to your iPad without copying files. Reading progress from streamed sessions also syncs to iCloud.

## Brightness and Night Reading

iPad's ProMotion displays are excellent for reading, but a few settings help during long sessions:

**Auto-Brightness with Content Adaptive Brightness** — leave this on in iOS Settings → Accessibility → Display & Text Size. It dims individual parts of the screen based on content, reducing the punch of bright white page borders during dark-room reading.

**BiblioFuse Night Mode** — tap the sun icon in the reader toolbar to enable Night Mode. This applies a warm tint to pages (similar to Night Shift but scoped to the comic reader), which reduces blue light without making panels look washed out.

For very long reading sessions, pair Night Mode with iOS's Reduce White Point (Settings → Accessibility → Display & Text Size → Reduce White Point) to bring down peak brightness beyond what the slider allows.

## Organising Your iPad Library

BiblioFuse's library view on iPad uses a larger grid than on iPhone — you can see more covers at once, which makes visual browsing practical. A few organisational habits that help:

**Folder by series, not by format.** Create one folder per series title and put every volume inside it, regardless of whether the files are CBZ, PDF, or EPUB. BiblioFuse treats all formats equally in library view.

**Name files consistently.** File names appear under covers in the grid. A format like `Series Name v01.cbz`, `Series Name v02.cbz` sorts correctly and makes the grid legible at a glance.

**Use the Wi-Fi Transfer tool for bulk imports.** Adding 20 volumes at once is fastest through the built-in Wi-Fi transfer: open BiblioFuse, tap Tools → Wi-Fi Transfer, then drag files from your Mac or PC into the browser upload page. It's significantly faster than repeated AirDrop transfers.

## Gestures and Shortcuts

iPad supports most of the same gestures as iPhone, but the larger screen makes a few more practical:

| Gesture | Action |
|---------|--------|
| Swipe left / right | Next / previous page |
| Swipe up / down | Scroll (in vertical strip mode) |
| Pinch | Zoom in / out |
| Double-tap | Zoom to fit / fill |
| Tap top-left or top-right corner | Previous / next page (configurable) |
| Two-finger tap | Toggle reading UI (scrubber, toolbar) |
| Long-press thumbnail | Set bookmark |

In **Settings → Gestures**, you can reassign tap zones if you find your holding grip accidentally triggers page turns.

## Stage Manager and Split View

On iPad Pro and iPad Air with Stage Manager enabled, BiblioFuse runs in a resizable window. This means you can read a comic on two-thirds of the screen while Safari is open on the other third — useful when following a reading guide, looking up a character, or watching a video essay about the series simultaneously.

Split View works in both landscape and portrait. In portrait split view with another app, BiblioFuse switches to single-page mode regardless of your landscape preference, since there isn't enough horizontal space for a two-page layout.

BiblioFuse doesn't have a keyboard shortcut scheme for iPad reading beyond standard iOS shortcuts, but arrow keys (with an external keyboard) do work for page navigation, which is convenient if you use an iPad with a Magic Keyboard.

## Common Questions

**Can I use Apple Pencil to annotate comics in BiblioFuse?**

BiblioFuse is a reader, not an annotation tool. Apple Pencil input is interpreted as touch (useful for precise panel taps and zoom), but there's no drawing or highlighting layer over comics. For annotation-heavy workflows, export pages to a PDF editor.

**Does BiblioFuse support HDR or wide-colour displays?**

It renders images using the display's native colour profile, so wide-colour (Display P3) comics — typically high-quality digital-first releases — will look richer on iPad Pro than on older screens. HDR metadata in images is passed through when present.

**My PDFs render slowly on large files. What helps?**

Large PDFs (300+ pages, 200+ MB) render more slowly because each page needs to be decoded from the PDF stream at read time, rather than accessed as pre-extracted images in a CBZ archive. Converting the PDF to CBZ using the [BiblioFuse web tool](https://bibliofuse.com/en/webapp/) dramatically speeds up rendering. The conversion runs in your browser without uploading anything.

## Key Takeaway

The iPad turns comic reading from convenient to genuinely great — but only if the app takes advantage of the screen. BiblioFuse's double-page landscape mode, large thumbnail scrubber, iCloud sync, and Mac library streaming make the [iPad version](https://bibliofuse.com/en/) far more than a bigger phone. Set up your display preferences once, organise your library into folders by series, and the reading experience takes care of itself.
