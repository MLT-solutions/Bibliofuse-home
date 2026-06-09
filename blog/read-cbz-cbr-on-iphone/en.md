# How to Read CBZ and CBR Comics on iPhone

BiblioFuse lets you read CBZ and CBR comic files on iPhone and iPad running iOS 17 or later — no conversion needed. Files open directly from the Files app or transfer wirelessly via the built-in Wi-Fi Transfer feature, which moves an entire manga series from your Mac to your iPhone in minutes without a cable or iTunes.

You found a CBZ or CBR file — a chapter of manga, a graphic novel, a scanned comic — and tapped it on your iPhone. Nothing opened. No app offered to handle it. You're not alone.

iOS has no built-in support for CBZ or CBR files. Apple's Books app handles EPUB and PDF but ignores archive-based comic formats entirely. To read those files properly on your iPhone, you need a dedicated app. [BiblioFuse](/en/) is built exactly for this — it reads CBZ, CBR, ZIP, RAR, EPUB, PDF, and TXT, with a reader designed for long reading sessions and large collections.

This guide walks you through everything: what these formats are, how to get files onto your iPhone, and how to get the reading experience right.

## What CBZ and CBR Actually Are

CBZ and CBR are comic archive formats. They're not a special encoding — they're ordinary ZIP and RAR files with renamed extensions. Unzip any `.cbz` file and you'll find a folder of sequential images: `001.jpg`, `002.jpg`, and so on, in reading order.

| Extension | Container | Common use |
|-----------|-----------|------------|
| CBZ | ZIP | Western comics, manga, fan scans |
| CBR | RAR | Older comic releases, Japanese scans |
| ZIP | ZIP | Same as CBZ without the renamed extension |
| RAR | RAR | Same as CBR without the renamed extension |

The format is intentionally simple. There's no DRM, no encryption (unless you add it), and no proprietary structure. This is exactly why it's the preferred format in manga and comic communities — files are small, portable, and readable on anything that can open a ZIP.

The problem on iPhone is that iOS only opens zip files as a generic archive — it won't render the images inside as a comic. You need a reader that understands the sequential page structure and displays images correctly.

## Step 1 — Install BiblioFuse

[BiblioFuse](/en/) is available on the App Store. It's free to download, with no account required.

Once installed, it creates two folders in the Files app:
- **iCloud Drive → BiblioFuse** — for synced storage accessible across all your devices
- **On My iPhone → BiblioFuse** — for local-only storage

You don't have to configure anything before importing files.

## Step 2 — Get Your Comics Onto the iPhone

There are three main ways to move CBZ or CBR files to your iPhone. Pick the one that matches your situation.

### Share from the Files App

If your comic is already in iCloud Drive or on a Mac/PC you can access via the Files app:

1. Open the **Files** app
2. Navigate to the file (it can be anywhere — Downloads, iCloud, a USB drive, a NAS)
3. Long-press the file and tap **Share**
4. Choose **BiblioFuse** from the share sheet

The file is imported immediately. For CBZ files, BiblioFuse generates a thumbnail from the first page and adds the volume to your library.

This method works well for one or a few files. For a whole manga series, use Wi-Fi Transfer instead.

### Wi-Fi Transfer — Best for Large Collections

Wi-Fi Transfer lets you drag an entire folder of comics from your Mac or PC into BiblioFuse without a cable, iTunes, or any desktop software.

1. In BiblioFuse, go to **Settings → Wi-Fi Import** and toggle it on
2. A local URL appears — something like `http://192.168.1.x:8080`
3. Open that URL in any browser on your computer
4. Drag your CBZ or CBR files (or entire series folders) into the browser window
5. The files transfer over your local network directly into your iPhone library

Transfer speed depends on your Wi-Fi. On a modern router, expect 20–40 MB/s — a typical manga volume at 150 MB transfers in under 10 seconds. Once the transfer is done, toggle Wi-Fi Import off. Your files are now in **On My iPhone → BiblioFuse → import** and appear in the library automatically.

### iCloud Drive — For Cross-Device Access

If you read across iPhone, iPad, and Mac, store your comics in iCloud Drive instead of the local import folder.

1. On your Mac or PC, copy your comic folder to **iCloud Drive → BiblioFuse**
2. On your iPhone, open the Files app and wait for the files to download
3. Open BiblioFuse — the folder appears in your library automatically

Books stored here sync reading progress across all your devices via iCloud. Open a volume on your Mac, read half of it, and BiblioFuse on your iPhone will remember exactly where you stopped.

## Step 3 — Open a Volume and Start Reading

Once your comics are in the library, tap any cover to open it. BiblioFuse loads the archive, extracts the pages, and displays the first page immediately. No extraction step, no waiting for the whole file to unpack.

### Page Navigation

- **Swipe left/right** — advance or go back one page
- **Tap the right edge** — next page (same as swipe right)
- **Tap the left edge** — previous page (same as swipe left)
- **Tap the center** — show or hide the navigation bar and controls

### Reading Direction

For manga — which reads right to left — you can flip the reading direction. Tap the center of the screen to open controls, then switch the reading direction to **Right to Left**. Every tap and swipe inverts to match the Japanese reading order.

### Double-Page Spreads

Many Western comics and some manga chapters have full-width artwork that spans two pages. Rotate your iPhone to landscape mode and BiblioFuse automatically switches to a two-page spread view, showing both pages side by side as the artist intended. Rotate back to portrait and it returns to single-page mode.

### Zoom

Pinch to zoom on any page. BiblioFuse maintains high-resolution rendering — there's no pixelation when you zoom into fine linework or small text.

## Organizing a Series

When you import multiple volumes of the same series, BiblioFuse groups them by folder. If you transferred a folder called `One Piece` containing `Vol 01.cbz` through `Vol 107.cbz`, they all appear under a single **One Piece** entry in the library rather than as 107 separate items. Tap the series entry to see the individual volumes listed in order.

Long-press any cover to add a rating (1–5 stars) or a custom tag. The filter bar at the top of the library lets you filter by tag, format, or rating — useful when you have dozens of series and want to see only what you're currently reading.

## Troubleshooting

**The file transferred but doesn't appear in the library.** Pull down to refresh the library view. If it still doesn't appear, check that the file landed in **On My iPhone → BiblioFuse** in the Files app. Files dropped outside the BiblioFuse folder won't be indexed.

**Pages are in the wrong order.** Some rips number pages with spaces instead of leading zeros (`1.jpg` before `10.jpg` causes sorting issues). BiblioFuse reads files in alphanumeric order. If a CBZ has incorrect page order, it's a naming problem in the archive itself rather than the reader.

**CBR files don't open.** Very old CBR files use a RAR5 format that some tools can't handle. If a file fails to open, try re-packaging it as CBZ — extract the contents and zip them up, then rename the `.zip` to `.cbz`. [BiblioFuse's Tools tab](/en/) can also compress and convert archives directly on the device.

## What's Next

Once your first series is imported and reading correctly, explore what else [BiblioFuse](/en/) can do. The Tools tab handles compression and conversion — useful if your CBZ files are taking too much storage. The Mac Home Library feature lets you stream your entire desktop comic library to your iPhone over Wi-Fi without copying files to the device at all.

CBZ and CBR files that seemed stuck on your Mac are now a full reading library in your pocket.

## Frequently Asked Questions

**Does iPhone support CBZ files natively?**
No. iOS has no built-in support for CBZ or CBR files — Apple's Books app handles EPUB and PDF but ignores comic archive formats. You need a dedicated app like BiblioFuse, which reads CBZ, CBR, ZIP, RAR, EPUB, PDF, and TXT natively.

**What is the best app to open CBZ files on iPhone?**
BiblioFuse is purpose-built for CBZ and CBR on iPhone and iPad. It opens archives without an extraction step, supports right-to-left reading for manga, displays double-page spreads in landscape mode, and handles large collections with fast page-by-page rendering.

**How do I get CBZ files onto my iPhone without a computer cable?**
Use BiblioFuse's Wi-Fi Transfer: open the app, enable Wi-Fi Import in Settings, then visit the URL shown in any browser on your computer and drag files in. You can also copy files to iCloud Drive → BiblioFuse on your Mac and they sync automatically.

**Can I read manga right-to-left in CBZ format on iPhone?**
Yes. In BiblioFuse, open a manga volume, tap the center to show controls, and switch the reading direction to Right to Left. The tap zones and swipe direction both invert to match Japanese reading order. The setting saves per volume.

**Why are my CBZ files taking so much storage on iPhone?**
High-resolution CBZ files contain PNG images, which are lossless and large. BiblioFuse's built-in compression tool re-encodes them to WebP, typically reducing file size by 75–88% with no visible quality change at normal reading zoom levels.
