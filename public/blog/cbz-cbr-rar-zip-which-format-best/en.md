# CBZ, CBR, RAR, ZIP — Which Comic Archive Format Should You Use?

You just downloaded a batch of comics and half are `.cbz`, a few are `.cbr`, and one oddball is a plain `.rar`. You open your comic reader and everything works — but now you're wondering: does it matter which format your collection uses? Should you convert everything to one format? And what's the actual difference?

Here's a plain-English breakdown of every major comic archive format, when to use each one, and why [BiblioFuse](https://bibliofuse.com/en/) reads all of them without complaints.

## What Comic Archive Formats Actually Are

None of these formats are special comic formats. CBZ, CBR, ZIP, and RAR are all general-purpose archive containers. The only thing inside is a folder of image files — usually JPEG or PNG, increasingly WebP. A comic reader simply extracts the archive in memory and displays the images in order.

That means format choice is almost entirely about **compression algorithm** and **ecosystem compatibility**, not about any feature designed for comics.

## CBZ — The Clear Winner for Most Collections

CBZ is a ZIP archive renamed with a `.cbz` extension. That's it. Unzip a CBZ file and you get a folder of images.

**Why CBZ is the best default:**

- ZIP is open, royalty-free, and supported by every operating system and archive tool natively
- macOS, Windows, and Linux can open ZIP files without any extra software
- Read/write support is trivially easy to implement, so virtually every comic reader supports CBZ
- No patent or licensing concerns, unlike RAR
- Modification is easy — add, remove, or reorder pages without recompressing the whole archive

**Compression trade-off:** ZIP uses Deflate compression, which is fast but not the most efficient. For comic archives that already contain compressed JPEG images, the difference in file size versus RAR is typically under 5%. For archives of PNG images, RAR can save 10–20%, but PNG itself is usually the bigger culprit for file size.

**Bottom line:** If you're building or ripping a collection from scratch, use CBZ.

## CBR — Widely Compatible but Technically Inferior

CBR is a RAR archive renamed with a `.cbr` extension. RAR is a proprietary format created by Eugene Roshal — the "RAR" in WinRAR. It achieves slightly better compression than ZIP, particularly for uncompressed image formats like PNG.

**The problem with CBR:**

- RAR is proprietary. Creating RAR files requires a licensed copy of WinRAR or RAR for Unix
- The open-source UnRAR library can read RAR files but not create them
- RAR 5 introduced a new header format that some older readers still can't handle
- Repacking or editing CBR archives requires extra tooling

**When you'll encounter CBR:** Most CBR files in the wild date from the early-to-mid 2000s when WinRAR was the dominant Windows archiver. New releases rarely use CBR because there's no meaningful benefit over CBZ.

**Should you convert CBR to CBZ?** If storage is tight and you own a lot of PNG-heavy CBR archives, conversion can save space. For most JPEG-based collections, the size difference is negligible and conversion isn't worth the effort. [BiblioFuse](https://bibliofuse.com/en/) reads CBR natively, so you don't need to convert just to read.

## RAR and ZIP — The Base Formats

Plain `.rar` and `.zip` files work identically to CBR and CBZ when opened in a comic reader. The only difference is the file extension — comic readers look for the extension to decide how to treat the file, not the internal format.

Some scanners and older rippers save files with the original archive extension rather than renaming to `.cbz` or `.cbr`. You may need to rename them, or use a reader that supports plain ZIP/RAR. BiblioFuse on iOS supports `.zip` and `.rar` files directly — no renaming required.

## CB7 and CBT — The Minority Formats

**CB7** is a 7-Zip archive (`.7z`) renamed `.cb7`. 7-Zip's LZMA2 compression is significantly better than both ZIP and RAR for compressible data like text files, but comics are mostly already-compressed JPEG images, so real-world size savings are small. Support is less universal.

**CBT** is a TAR archive renamed `.cbt`. TAR doesn't compress at all — it only bundles files. CBT is occasionally seen in Linux-sourced archives. It's fast to unpack but produces larger files.

Neither format has meaningful adoption. Stick with CBZ unless you have a specific reason.

## PDF — Not a Comic Archive, but Common

PDF is a document format, not an image archive. Comics saved as PDF use embedded images (or, in scanned books, rasterised pages), but the format adds layout overhead and typically can't be edited page-by-page without specialised tools.

PDFs are common for digital comics sold through publishers and for scanned manga volumes. BiblioFuse reads PDFs, but the reading experience for image-based PDFs is generally worse than the equivalent CBZ — slower to seek, no per-page metadata, and larger file size per image.

If you have comic PDFs and want to convert them to CBZ, the [BiblioFuse web tool](https://bibliofuse.com/en/webapp/) runs entirely in your browser with no upload required.

## Format Comparison Table

| Format | Container | Compression | Create freely | Universal support | Best for |
|--------|-----------|-------------|---------------|-------------------|----------|
| CBZ | ZIP | Deflate | ✅ Yes | ✅ Yes | New collections, ripping |
| CBR | RAR | RAR/RAR5 | ⚠️ Requires WinRAR | ✅ Most readers | Legacy archives |
| ZIP | ZIP | Deflate | ✅ Yes | ✅ Yes | Readers that support plain ZIP |
| RAR | RAR | RAR/RAR5 | ⚠️ Requires WinRAR | ✅ Most readers | Legacy archives |
| CB7 | 7-Zip | LZMA2 | ✅ Yes | ⚠️ Partial | High-compression experiments |
| CBT | TAR | None | ✅ Yes | ⚠️ Partial | Linux-sourced archives |
| PDF | PDF | Various | ✅ Yes | ✅ Yes | Publisher DRM-free comics |

## How BiblioFuse Handles All These Formats

[BiblioFuse for iPhone and iPad](https://bibliofuse.com/en/) reads CBZ, CBR, ZIP, RAR, CB7, CBT, EPUB, and PDF natively. You don't need to convert your collection before importing.

All processing happens on-device. No file is uploaded to a server. For large multi-format libraries, BiblioFuse organises files by series and tracks reading progress per-book using iCloud sync — regardless of whether the underlying format is CBZ or CBR.

The Tools tab in BiblioFuse lets you convert between formats directly on iPhone. Select a CBR archive, tap Convert, choose CBZ — the app repacks the archive without leaving the app.

## Practical Recommendations

**Starting a new collection from scratch:** Use CBZ. It's open, universally supported, and easy to work with.

**Existing CBR collection:** Don't convert unless you have a specific reason (disk space, a tool that doesn't support CBR). CBR works fine in BiblioFuse and every modern reader.

**Mixed-format library:** Don't bother standardising just for aesthetics. A comic reader that handles multiple formats — like BiblioFuse — removes the need to maintain a single-format collection.

**PDF comics from publishers:** Keep them as PDF unless you want to edit or merge volumes, in which case converting to CBZ via the BiblioFuse web tool makes sense.

The format debate matters a lot less than having a reader that handles all of them. Once you have that, the container is invisible.
