# How to Read Webtoons on iPhone: Infinite Vertical Scroll in BiblioFuse

You've downloaded a webtoon — a Korean manhwa, a long-strip webcomic, or a fan-translated vertical series — and it's sitting on your iPhone as a CBZ or EPUB file. Every comic reader you've tried shows it in the wrong orientation, splitting panels that were meant to flow downward. [BiblioFuse](https://bibliofuse.com/en/) handles this case directly, with a vertical scroll mode built for exactly this format.

## What makes webtoons different from traditional comics

Traditional comics — superhero books, manga, European albums — arrange panels in a grid. Readers move left-to-right or right-to-left, one page at a time. Webtoons are a different beast entirely: they're designed for mobile reading, with tall, narrow panels that stack vertically into a single continuous strip. The format originated on platforms like LINE Webtoon and Naver, and it's spread to self-published webcomics, manhwa scans, and long-form digital originals.

This vertical strip format creates a problem for reading apps designed around traditional comics. Page-turn mode breaks the flow. Two-page spread view makes panels tiny. Even apps that support vertical scroll often miss the details — swipe sensitivity, gap handling between pages, zoom level persistence.

## BiblioFuse's vertical scroll mode

[BiblioFuse for iPhone and iPad](https://bibliofuse.com/en/) includes a dedicated vertical scroll mode. Instead of treating each image as a page, it tiles them continuously so you scroll down through the entire chapter without taps or swipes. This works for both CBZ and EPUB webtoons.

To switch reading modes inside a comic:
1. Open any CBZ or EPUB in BiblioFuse.
2. Tap the center of the screen to reveal the reader toolbar.
3. Tap the **Layout** icon (two stacked rectangles).
4. Choose **Vertical Scroll**.

The reader immediately reflows the content. Images fill the screen width, and scrolling down moves through pages without any pagination gap.

## Gap vs. no-gap

Some webtoons are composed as a single continuous image per chapter — one very tall strip with no breaks. Others are split into individual images (one per panel group or section). When images are separate files, BiblioFuse gives you control over the gap between them:

- **No gap:** images tile seamlessly, making the chapter feel like one continuous image even if it's technically split.
- **Minimal gap:** a thin separator appears between pages, useful when pages have white backgrounds that would otherwise blend into each other.

For most webtoons, no-gap mode gives the most authentic reading experience. Adjust this in the same Layout menu.

## Importing webtoon files

Webtoons arrive in a few formats:

**CBZ files** are the most common container for scanlations and fan translations. A CBZ is just a ZIP archive containing PNG or JPG images. BiblioFuse reads CBZ natively on iPhone and iPad — no conversion needed.

**EPUB files** are common for officially licensed webtoons and digital originals. BiblioFuse reads fixed-layout EPUBs, which is the format most webtoon-style books use when distributed as EPUB.

To get files onto your iPhone, BiblioFuse offers several transfer methods:

- **Wi-Fi transfer**: open BiblioFuse, go to the **Transfer** tab, and a local web server starts. Visit the displayed address from any browser on the same network and upload files by dragging and dropping. No cables, no iTunes, no iCloud required.
- **Files app**: share any CBZ or EPUB directly from the iOS Files app to BiblioFuse using the share sheet.
- **Direct from Safari or Messages**: if someone sends you a file link, tap and hold → Open in BiblioFuse.

For large collections — multiple series across hundreds of chapters — the Mac streaming feature is the most efficient option. Keep files on your Mac and stream them to BiblioFuse over Wi-Fi or via Tailscale when you're away from home.

## Zoom and pan

Webtoons don't usually need zooming — they're designed for phone screens. But double-tapping zooms to a region, and double-tapping again returns to full-width. This is handy for panels with small speech bubbles or dense detail. Vertical scroll zoom persists across pages so you don't lose your reading position after zooming in.

Horizontal panning while zoomed in is also supported: swipe left and right to move across a wide panel, then continue scrolling down.

## Reading long series efficiently

A typical manhwa series runs 100 to 300+ chapters. BiblioFuse organizes chapters as individual files inside a folder, and the library view shows series by folder. Open a folder and you see all chapters sorted by filename — sort naturally so "Chapter 001.cbz" through "Chapter 100.cbz" appear in the right order. Tap any chapter, finish it, and a **Next** button appears at the end to open the next chapter without returning to the library.

Reading progress syncs via iCloud if you have multiple Apple devices. Finish Chapter 12 on your iPhone and pick up from exactly the same point on your iPad.

## Text extraction from webtoons

Webtoons with English text support BiblioFuse's OCR feature. Tap any panel to extract the text — useful when you want to copy a translation, look up an unfamiliar word, or share a quote. The OCR runs on-device with no network connection required.

For panels with Japanese or Korean text, OCR extraction works for those scripts as well, though accuracy varies by font style and image quality.

## Format recommendations

If you're building or curating a webtoon library, CBZ is the recommended container. It's lossless (no re-encoding), universally supported by readers, and trivially created from a folder of images by renaming a ZIP file. Avoid PDF for webtoons — PDFs encode each page independently and often apply compression that degrades image quality. They also don't support the seamless vertical tiling that makes CBZ ideal for this format.

If you receive webtoons as plain ZIP files, you can rename them to `.cbz` directly in the iOS Files app, or use the [BiblioFuse web tool](https://bibliofuse.com/en/webapp/) to convert them in your browser without any upload.

## Accessibility in vertical reading

BiblioFuse respects your device's display settings in vertical scroll mode. True Tone, Night Shift, and display zoom all apply. For long reading sessions, Night Shift or Dark Mode (if your webtoon has a dark background) reduces eye strain. The reader has no background glow or app chrome during reading — only the content.

You can also adjust brightness within BiblioFuse independent of system brightness by swiping up or down on the left edge of the screen while reading.

## Key takeaway

Webtoons need a reader that understands the vertical strip format. BiblioFuse's vertical scroll mode handles CBZ and EPUB webtoons natively on iPhone, with configurable gaps, persistent zoom, and seamless chapter navigation. Import via Wi-Fi transfer or the Files app and start reading without any conversion step. [Download BiblioFuse](https://bibliofuse.com/en/) from the App Store to get started.
