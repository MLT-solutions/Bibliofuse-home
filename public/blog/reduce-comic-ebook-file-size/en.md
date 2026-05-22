# Why Comic and Ebook Files Are So Large — and How to Fix It

You copy a 50-volume manga series to your iPhone and watch the available storage drop by 20 gigabytes. Or you grab a single CBZ from a scan archive and it's 400 MB for one volume. Where does all that space go?

The answer is in the file format — and once you understand it, fixing the problem takes less than a minute.

## CBZ and EPUB: Both Are ZIP Files in Disguise

A CBZ file is a ZIP archive with a different extension. Rename any `.cbz` to `.zip`, unzip it, and you'll find a folder of images named in reading order — `001.png`, `002.png`, and so on. CBR files work the same way but use RAR instead of ZIP. There's no proprietary encoding, no mystery: just images in a container.

EPUB is structurally similar. Rename an `.epub` to `.zip`, unzip it, and you'll find HTML files (the chapter text), CSS stylesheets, metadata, and embedded images — cover art, illustrations, and photos. EPUB is an open W3C standard that every major reading app supports.

Both formats are well-designed for what they do. The size problem isn't the container — it's what's packed inside.

## Why PNG Images Eat So Much Storage

Most comic scan groups and ebook publishers default to PNG because it's lossless: every pixel in the saved file is identical to the original scan. That fidelity comes at a price.

A high-resolution comic page — typically 1800 × 2700 pixels at 24-bit color — runs 2 MB or more as a PNG. Most manga volumes contain 180 to 220 pages. The storage cost adds up fast:

| Volume format | Pages | Per-page size | Total size |
|--------------|-------|--------------|------------|
| PNG (lossless) | 200 | ~2 MB | **~400 MB** |
| WebP (compressed) | 200 | ~250 kB | **~50 MB** |
| Storage saved | | | **87.5%** |

Scale that across a long series. A 50-volume manga library in PNG format takes up roughly **20 GB**. The same series compressed to WebP fits in about **2.5 GB** — a saving of **17.5 GB** from a single series. Tools like [BiblioFuse](https://bibliofuse.com) handle this conversion entirely on-device, without needing any desktop software.

## What Makes WebP Better

WebP is an image format developed by Google that achieves far smaller files than PNG, and smaller than JPEG at comparable quality. At a moderate quality setting (around 80–85%), the visual difference from the PNG source is imperceptible on a phone or tablet screen. Comics and manga compress especially well because most panels use flat colors and clean lines rather than continuous photographic tones.

Every modern iPhone, iPad, and Android device renders WebP natively. You're not trading display quality for storage — you're storing the same visual information more efficiently.

## Why BiblioFuse Built Compression Into the App

The usual workaround — convert files on a desktop before loading them onto your phone — works in theory, but creates friction. You need a batch image tool, the right settings, a way to repack the ZIP, and then another import. In practice, most readers skip it entirely and live with bloated libraries.

BiblioFuse's **Merge & Compress** removes all of that friction. The conversion happens entirely on-device — nothing is uploaded or leaves your phone. Select the books, choose a quality level, and BiblioFuse handles everything: extracting each image, re-encoding it as WebP, and reassembling a new compressed CBZ or EPUB in place.

**To compress a book:**
1. Long-press any cover in your library and tap **Compress**.
2. Adjust the quality slider — the default setting gives a good balance of size and quality for most comics.
3. Tap **Compress**. The original is replaced when the job finishes.

**To merge a series:** long-press to select multiple CBZ files, then tap **Merge**. BiblioFuse combines them in reading order and compresses the result in one pass.

The [BiblioFuse Web Tool](/en/webapp) offers the same compression and merging in any browser — no installation needed. It's the go-to option when you're on a Windows or Linux machine without the iOS or Mac app.

## How Much Storage Can You Actually Recover?

The 87.5% figure can feel abstract until you see it against your own library. Here are some realistic scenarios:

| Collection | PNG size | After compression | Space freed |
|-----------|---------|------------------|-------------|
| 10-volume manga series | ~4 GB | ~500 MB | **3.5 GB** |
| 50-volume manga series | ~20 GB | ~2.5 GB | **17.5 GB** |
| 500 western comics | ~50 GB | ~6.25 GB | **43.75 GB** |
| Illustrated EPUB library (100 books) | ~5 GB | ~625 MB | **4.4 GB** |

On a 128 GB iPhone where every gigabyte counts, that's the difference between carrying your whole collection or leaving half of it at home.

## When to Compress and When to Keep Originals

Compression is a one-way process: once PNG is replaced by WebP inside the archive, the original lossless data is gone. For everyday reading, that's a worthwhile trade — the output looks identical in normal use. But if you're archiving raw scans for preservation, or working with original artwork where pixel accuracy matters, keep originals on an external drive or NAS and compress only the copies you carry day-to-day.

A clean workflow: store your full archive on a Mac, stream it to iPhone via BiblioFuse's Home Library feature over Wi-Fi, and keep compressed copies on the device for offline reading. You get full quality available when you need it, and compressed files for everyday use.

## Common Questions

**Does compression affect reading quality?**
At the default quality setting, the difference is imperceptible during normal reading on a phone or tablet. Heavy zoom on fine line art may reveal very slight softening. For most readers, the compressed output is visually identical to the original.

**Can I compress EPUBs too?**
Yes. BiblioFuse handles EPUBs the same way — re-encoding the embedded images while leaving text, CSS, and chapter structure completely untouched.

**What if I want to keep the original?**
Make a copy in the Files app before compressing — BiblioFuse replaces the file in place with no automatic backup. Alternatively, use the [BiblioFuse Web Tool](/en/webapp) to download a compressed version without touching your source files.

**Does compression work offline?**
Yes — the entire process runs on your device. No internet connection is needed, and no files are ever sent to a server.
