# How to Read Manga on iPhone: Right-to-Left, Vertical Scroll, and Double Pages

Reading manga on an iPhone sounds simple — it's just images in order. But anyone who's tried it knows the problems: a reader built for Western comics forces left-to-right page flow, breaking the reading experience in every panel. Webtoons (vertical scroll comics) display as individual pages instead of a continuous strip. Double-page spreads show in portrait mode, squashing artwork that was designed to span the full width.

Manga has specific requirements that most general-purpose readers ignore. [BiblioFuse](/en/) is designed to handle all of them — right-to-left mode, vertical scroll, double-page spread detection, and per-series reading direction settings that persist between sessions.

This guide covers exactly how to set each one up.

## Install BiblioFuse

[BiblioFuse](/en/) is available free on the App Store. No account required.

Once installed, it reads CBZ, CBR, ZIP, RAR, EPUB, PDF, and TXT — the full range of formats you'll encounter in manga communities. Japanese scan releases typically come as CBZ or ZIP with JPG images inside; BiblioFuse handles these natively without conversion.

## Get Manga onto Your iPhone

The fastest method for a large collection is Wi-Fi Transfer. In BiblioFuse, go to **Settings → Wi-Fi Import**, toggle it on, and visit the URL shown in any browser on your Mac or PC. Drag your manga folders into the browser window — entire series, not just individual volumes.

For single volumes, use the iOS share sheet: open the Files app, navigate to the CBZ file, long-press, and share to BiblioFuse. You can also copy files to **iCloud Drive → BiblioFuse** on your Mac and they'll sync to your iPhone automatically.

Once files are in the library, tap any cover to open the volume.

## Right-to-Left Reading Mode

The default reading direction in most readers is left-to-right: swipe left to advance, swipe right to go back. For manga — which reads right to left — this feels backwards immediately. You swipe left thinking you're going forward, and instead you go backward.

In BiblioFuse:

1. Open a manga volume
2. Tap the center of the screen to show the controls
3. Tap the **reading direction** icon (two arrows)
4. Select **Right to Left**

Now swipe right to advance and swipe left to go back — matching how your eyes move through the panels.

BiblioFuse saves this setting per-volume, so you don't have to reset it every time you open the same manga. Series that are left-to-right (most Western comics, manhwa translated left-to-right) remember their setting independently.

### Tap Zone Layout for Right-to-Left

When right-to-left mode is active, the tap zones invert:
- **Tap the left edge** → next page
- **Tap the right edge** → previous page
- **Tap center** → show/hide controls

This matches how physical manga page turning works — you reach for the left side of the book to turn to the next page.

## Vertical Scroll Mode for Webtoons

Webtoons (Korean web comics and many modern online manga) are published as long vertical strips designed to be scrolled continuously, not flipped page by page. When you load a webtoon CBZ into a standard page-flip reader, you see individual horizontal slices instead of the full strip — which makes following panel flow nearly impossible.

BiblioFuse handles this with a vertical scroll mode:

1. Open the volume
2. Tap the center to show controls
3. Tap the **layout** icon
4. Select **Vertical Scroll**

The pages stack vertically into a continuous strip. Scroll down to read, just like reading on a website. There are no page boundaries — the artwork flows as the creator intended.

This mode works well for:
- Korean webtoons (LINE Webtoon, Naver comics)
- Modern Japanese web manga released in long-strip format
- Manhwa
- Fan-translated online comics formatted as vertical strips

For traditional manga published in page-based format (Shonen Jump releases, tankōbon volumes), stick with page-flip mode.

## Double-Page Spreads

Many manga volumes include full-spread panels — a dramatic scene that spans two facing pages, drawn as a single wide image. In portrait mode on an iPhone, these spreads display as two separate pages, and you lose the visual impact of the artwork.

**Automatic landscape detection:** Rotate your iPhone to landscape mode. BiblioFuse detects the orientation change and switches to two-page spread view automatically. Both pages display side by side, filling the screen, exactly as they'd appear in the physical volume.

**Right-to-left spreads:** When right-to-left mode is active, the spread layout also inverts — page order matches the reading direction, so the right page (the "first" page in manga reading order) appears on the right side of the screen.

Rotate back to portrait and BiblioFuse returns to single-page mode immediately.

### Spread Detection Tips

Some CBZ files from older scan groups include spreads as a single wide image (already joined) rather than two separate pages. BiblioFuse handles both cases — single wide images in landscape mode fill the screen without doubling. You don't need to configure anything.

## Zoom and Navigation

**Pinch to zoom** works on any page. BiblioFuse renders pages at full resolution — zooming into fine linework, small text, or a detailed background panel doesn't pixelate.

**Double-tap to fit** returns the page to full-screen after zooming.

**Page scrubber:** Swipe the progress bar at the bottom of the screen to jump to any page in the volume. Useful when you're re-reading and want to skip to a specific chapter or scene.

**Chapter navigation:** For EPUB manga (used by some publishers), BiblioFuse shows a chapter list. For CBZ/CBR volumes, the progress scrubber is your navigation tool.

## Organizing a Manga Series

When you import multiple volumes of the same series, BiblioFuse groups them by folder. If your CBZ files are inside a folder called `Demon Slayer`, they appear as a single series entry in the library. Tap the series to see all volumes listed in order.

Long-press any volume to:
- Add a **rating** (1–5 stars)
- Add a **tag** (e.g., "reading," "completed," "to-read")

The filter bar at the top of the library lets you filter by tag, format, or rating. If you're tracking fifteen active series, tag them "currently reading" and filter to see only those.

## Reading Progress Sync

If you read on both iPhone and iPad (or Mac), BiblioFuse syncs reading progress via iCloud. Open volume 3 of a series on your iPad during a commute, read to page 80, and when you pick up your iPhone later the progress is already there.

This only applies to files stored in **iCloud Drive → BiblioFuse**. Files in local iPhone storage don't sync. If you transferred via Wi-Fi Transfer, move the files to iCloud Drive in the Files app if you want cross-device sync.

## Brightness and Eye Comfort

**Brightness control:** Swipe up or down on the left side of the screen while reading to adjust brightness without leaving the reader. Useful when switching from a bright environment to a dark room.

**iOS Night Shift and True Tone:** BiblioFuse is a standard UIKit app, so iOS system-level display adjustments (Night Shift, True Tone, Display Zoom) apply normally.

For long reading sessions, reducing brightness and enabling Night Shift (Settings → Display & Brightness → Night Shift) significantly reduces eye strain.

## Troubleshooting

**Pages are in the wrong order.** Most manga CBZ files use zero-padded filenames (`001.jpg`, `002.jpg`) so they sort correctly. If your CBZ was created without padding (`1.jpg`, `10.jpg`, `2.jpg`), the pages sort alphanumerically in the wrong order. The fix is to rename the files inside the archive — extract the CBZ, rename the images with padded numbers, and repack. BiblioFuse reads whatever order the filenames sort to.

**Right-to-left mode resets on new volumes.** BiblioFuse saves the reading direction per-volume. If you import a new volume of a series you're already reading, you'll need to set the direction once when you first open it. After that, it persists.

**Webtoon pages appear very narrow in vertical scroll mode.** Some webtoons are formatted as very tall, narrow strips. Pinch to zoom out slightly so the strip fills the screen width, then scroll. BiblioFuse remembers your zoom level between pages in vertical scroll mode.

**Spreads aren't aligning correctly in landscape.** If a CBZ has spreads assembled as a single wide JPEG, rotating to landscape will display it centered. If the spread looks misaligned, the original CBZ likely has the two pages stored as separate files — BiblioFuse joins them when you rotate. If it's still off, the scan itself may have the pages in an unusual order.

## What to Read Next

Now that your reading setup is configured, [BiblioFuse](/en/) has a few more features worth exploring. The Mac Home Library lets you stream your entire desktop manga collection to your iPhone over Wi-Fi without copying anything to the device — ideal if you have terabytes of manga on a Mac that you'd rather not duplicate. The Tools tab handles compression — useful for shrinking 200 MB CBZ volumes down to 40–50 MB without visible quality loss, freeing up storage for more series.

The right settings make the difference between a reader that fights you and one that disappears into the reading experience. Manga read right-to-left, with spreads in landscape and webtoons in vertical scroll, works exactly the way it's supposed to.
