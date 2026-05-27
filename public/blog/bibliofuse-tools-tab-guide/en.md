# Using the BiblioFuse Tools Tab: Compress, Convert, and Merge on iPhone

BiblioFuse's Tools tab lets you compress, convert, and merge CBZ, EPUB, PDF, and RAR files directly on iPhone or iPad — no computer or cloud upload required. The Compress tool re-encodes images to WebP, typically cutting file sizes by 60–75%. Convert handles PDF-to-CBZ and RAR-to-CBZ changes, while Merge combines multiple chapter files into a single volume archive.

You're on your lunch break, phone in hand, and you notice your comic collection is eating through your iPhone's storage. The CBZ files from that manga series are each 80–120 MB. You'd like to compress them, but your laptop is at home and you don't want to wait until tonight. Or maybe you have several chapter files from a series and want to merge them into a single volume before settling in for a long reading session.

[BiblioFuse](/en/) handles both of these without a computer. The Tools tab — built into the iOS app — lets you compress, convert, and merge your comics and ebooks directly on your iPhone or iPad. Everything runs on-device. No file gets uploaded anywhere. No desktop app required.

This guide walks through every function in the Tools tab: what each does, when to use it, and how to run it.

## What the Tools Tab Does

Most comic reader apps are read-only. You import files, you read them, that's it. Compression and conversion require separate desktop software or web tools.

BiblioFuse integrates file processing directly into the reader. This means the same app that organizes and displays your library can also reshape the files in it — shrink them, change their format, or combine them — without leaving your iPhone.

The Tools tab offers three primary functions:

- **Compress** — reduce file size by re-encoding images inside a CBZ or EPUB
- **Convert** — change a file from one format to another (e.g., CBZ to EPUB)
- **Merge** — combine multiple files into a single archive

Each operation is non-destructive by default: [BiblioFuse](/en/) creates a new file and leaves the original untouched.

## Compress: Making Files Smaller Without Ruining Quality

The Compress tool reduces file size by re-encoding the images inside your archives. For CBZ and CBR files — which are essentially ZIP archives of image files — this can cut file size dramatically.

### When to Use It

- Your library is running into storage limits and you want to reclaim space without deleting content
- You're transferring files to a slow connection and want them to be smaller
- You downloaded scans that were encoded at unnecessarily high quality (300 DPI for a screen reader, for example)

### How to Compress a File

1. Open BiblioFuse and go to the **Tools** tab (wrench icon at the bottom of the screen).
2. Tap **Compress**.
3. Tap **Add Files** and select one or more CBZ, CBR, or EPUB files from your library.
4. Choose your compression settings:
   - **Quality** — a slider from lossless to aggressive. For manga and comics, 75–85% quality is usually invisible on a screen.
   - **Format** — choose JPEG (smaller) or WebP (better compression at equal quality).
   - **Max dimension** — optionally cap the image resolution. Scans at 3000px wide rarely look better than 1600px on a phone screen.
5. Tap **Compress** to start processing.

BiblioFuse shows a progress bar for each file. When done, the compressed version appears in your library as a new file. The original is unchanged.

### How Much Can It Save?

Results vary depending on how the source file was encoded. A CBZ with high-resolution PNG images can often be reduced by 60–75% by converting to JPEG at 80% quality. A file already compressed with aggressive JPEG settings won't shrink much further. The app shows you a before/after file size so you can decide whether to keep the compressed version.

## Convert: Changing File Formats on iPhone

The Convert tool changes a file from one format to another. Not all formats serve every situation equally, and sometimes you'll receive or download a file in a format that's less convenient than you'd like.

### Common Conversion Scenarios

**CBZ to EPUB** — CBZ files are image archives. Converting to EPUB creates a reflowable document if the file contains text, or embeds the images in an EPUB package that some reading apps handle differently.

**PDF to CBZ** — If you have a scanned comic saved as a PDF (common for older scans), converting it to CBZ separates each page into an individual image file. This often gives you better control over display quality in the reader.

**RAR to CBZ** — RAR is a compressed archive format that some older scans use. CBZ is more universally supported. Converting from RAR to CBZ makes the file readable in apps that don't support RAR.

### How to Convert a File

1. In the Tools tab, tap **Convert**.
2. Tap **Add Files** and select the file you want to convert.
3. Choose the target format from the dropdown.
4. Tap **Convert**.

The converted file is saved to your library. The original is not deleted.

## Merge: Combining Multiple Files Into One

The Merge tool takes multiple files and combines them into a single archive. This is most useful for chapter-by-chapter downloads that belong together as a single volume.

### When to Use It

- You downloaded chapters 1–12 of a manga series individually and want to read them as one file
- You have multi-part archives that were split for download and need to be rejoined
- You want to consolidate a long series into volumes for easier navigation

### How to Merge Files

1. In the Tools tab, tap **Merge**.
2. Tap **Add Files** and select the files to merge. You can add as many as you need.
3. Arrange the order — drag items in the list to put them in reading order. This matters: the merge result will use this sequence.
4. Name the output file.
5. Tap **Merge**.

BiblioFuse combines the image contents of all selected files into a single CBZ archive in the order you specified. The merged file appears in your library. The originals are not deleted.

### Tips for Merging

**Check the order before merging.** If chapter 7 ends up before chapter 4, the merged file will be wrong and you'll need to redo the operation. Take a moment to arrange files correctly.

**Use consistent source formats.** Merging CBZ files together works cleanly. Mixing formats (some CBZ, some PDF) can produce unexpected results. If you need to merge mixed formats, convert them to CBZ first.

**Merge creates CBZ output.** Regardless of the input formats, the merged result is a CBZ archive.

## On-Device Processing: What That Actually Means

All three tools — Compress, Convert, and Merge — run entirely on your iPhone or iPad. There's no server involved. Your files don't leave your device.

This matters for two reasons:

**Privacy.** Comic and ebook collections are personal. Some people have large collections of content they bought legitimately from sources that no longer exist, or content from grey areas they'd rather not send through a third-party server.

**Reliability.** On-device processing works without a network connection. On a plane, in a remote location, or anywhere without reliable internet, the Tools tab still functions.

The trade-off is speed. iPhone processors are powerful, but compressing 50 high-resolution CBZ files will take longer on a phone than on a desktop. BiblioFuse processes files in the background, so you can continue reading while compression runs.

## Putting It Together: A Real Workflow

Here's how the Tools tab fits into a practical routine:

You download 15 chapters of a new manga series, each as a separate CBZ file, each around 60 MB. You want to:

1. **Merge** chapters 1–5 into Volume 1, chapters 6–10 into Volume 2, chapters 11–15 into Volume 3.
2. **Compress** each volume to reduce storage impact.
3. Read Volume 1 while Volume 2 and 3 are still compressing in the background.

All of this happens on your iPhone, without a computer, without uploading anything. Start to finish: about 10–15 minutes depending on file sizes and hardware generation.

## Getting the Most From BiblioFuse

The Tools tab is one part of what [BiblioFuse](/en/) does. The same app also handles Wi-Fi Transfer (drag files from your Mac or PC browser directly to your phone), Mac Home Library (stream your Mac's comic collection to iPhone over local Wi-Fi), iCloud sync, tags and ratings, and OCR for text extraction.

If you've been using BiblioFuse primarily as a reader, the Tools tab is worth exploring. It turns your iPhone into a capable file processing station — no desktop required.

[BiblioFuse is available on the App Store](/en/) for iPhone and iPad.

## Frequently Asked Questions

**Can I compress CBZ files on iPhone without a computer?**
Yes. BiblioFuse's Tools tab includes a Compress function that re-encodes the images inside CBZ and EPUB files to WebP, reducing file sizes by 60–75% on typical manga scans. Long-press any file in the library, tap Compress, adjust the quality slider, and tap Compress again. Everything runs on-device.

**How do I merge manga chapters into a single CBZ file on iPhone?**
In the Tools tab, tap Merge, add your chapter CBZ files in reading order, name the output, and tap Merge. BiblioFuse combines all images into a single CBZ archive. The originals are not deleted. Use this to turn 15 loose chapters into one clean volume file.

**Can I convert PDF to CBZ on iPhone?**
Yes. The Convert tool in BiblioFuse's Tools tab handles PDF-to-CBZ conversion on-device. Tap Convert, add your PDF, choose CBZ as the output format, and tap Convert. The result is a CBZ where each page of the PDF becomes an image in the archive.

**Does the Tools tab work without an internet connection?**
Yes — all three tools (Compress, Convert, Merge) run entirely on your iPhone. No files are uploaded and no network connection is required. Processing happens in the background so you can continue reading while a large compression job runs.

**What output format does the Merge tool produce?**
Merge always outputs a CBZ file, regardless of the input formats. If you merge a mix of CBZ and CBR files, the result is a single CBZ archive with all the pages in the order you specified.
