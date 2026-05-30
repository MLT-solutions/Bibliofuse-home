# How to Merge Multiple EPUB Files Into One (Online, Private, Free)

The BiblioFuse Web Tool merges multiple EPUB files into a single ebook entirely in your browser — no software to install, no account required, and your files are never uploaded to any server. Load your EPUB files, arrange them in order, and download the merged result in seconds. The free tier handles up to three files per batch.

## Why Would You Want to Merge EPUB Files Online?

Picture this: you've downloaded a fantasy series — five volumes, five separate EPUB files — and every time you finish one book your reading app loses your place as you hunt for the next file. Or you have a manga omnibus released as individual chapters, and you want to read the whole arc in one sitting without interruption. Splitting content across multiple files is a practical publishing decision, but it creates friction for readers who just want a seamless experience.

The most natural solution is to combine those files into one EPUB before loading them into your reader. The problem is that doing this properly is surprisingly tricky.

## Why Merging EPUBs Is Harder Than It Looks

An EPUB file is not simply a bundle of text. Under the hood it is a ZIP archive containing an XML spine that defines reading order, a manifest that lists every resource, chapter files in XHTML, a table of contents in `toc.ncx` or `nav.xhtml` format, and embedded assets like fonts and images. When you merge two EPUBs, all of those structures need to be reconciled: chapter IDs must be de-duplicated, spine entries must be re-ordered, TOC entries must be re-numbered, and conflicting metadata must be resolved.

Most online tools that claim to merge EPUBs either concatenate the raw ZIP bytes (producing a corrupt file) or strip the table of contents entirely. BiblioFuse handles the full structural merge: chapters are re-numbered in sequence, the TOC is rebuilt from all source books, and the output passes EPUB validation.

## How to Merge EPUB Files Online with BiblioFuse

The process takes under a minute from start to finish.

**Step 1: Open the BiblioFuse Web Tool**

Navigate to the [BiblioFuse Web Tool](/en/webapp/). The tool loads entirely in your browser using WebAssembly — nothing is sent to a server at any point.

**Step 2: Add your EPUB files in reading order**

Click the file picker or drag your EPUB files into the drop zone. The tool accepts EPUB, CBZ, CBR, PDF, and ZIP files. Add the files in the order you want them to appear in the merged output — Volume 1 first, then Volume 2, and so on.

**Step 3: Review and run the merge**

Check that the files are listed in the correct sequence. You can drag to reorder them if needed. Select the merge operation and confirm.

**Step 4: Download the merged EPUB**

The merge runs entirely inside your browser. When it finishes, click the download button. The output file is a valid EPUB that opens in any standard reader — including Apple Books, Kindle (via conversion), Kobo, and [BiblioFuse](/en/).

With the free tier you can merge up to three files per batch. If you have a longer series, simply run multiple batches and merge the outputs.

## Practical Use Cases for Combining EPUB Books

Understanding when and why to merge EPUB files makes it easier to decide on the right workflow.

**Multi-volume fantasy or sci-fi series.** Publishers often release individual volumes as separate EPUB files even when a reader intends to binge the whole series. Merging the volumes gives you a single file with a combined table of contents — you can jump directly to any chapter across all volumes.

**Manga omnibus editions.** Many manga titles are distributed as chapter-by-chapter EPUBs or as separate tankōbon volumes. Merging them into an omnibus-style file is a common workflow for readers who prefer fewer files in their library.

**Academic textbooks split into parts.** Some university textbooks are published as Part 1, Part 2, and Part 3 EPUBs. Merging them into one file makes annotation and cross-referencing much simpler, especially when studying for exams.

**Serialised fiction.** Web novels and serialised fiction are often exported from platforms like Royal Road or Scribble Hub as multiple EPUB exports. Merging them keeps your library tidy and your progress in one place.

## Does Merging Preserve the Table of Contents?

Yes. BiblioFuse rebuilds the TOC from all source files rather than discarding it. Each book's chapters appear as a group in the merged navigation tree, so you can still jump to "Volume 2, Chapter 5" directly. The original chapter headings are preserved.

## Is It Safe to Merge EPUB Files Online?

This is a legitimate concern. Many "online" tools send your files to a remote server for processing — which means your personal library travels across the internet and may be stored on someone else's hardware. BiblioFuse uses WebAssembly compiled to run entirely inside your browser. Your EPUB files are read from your device's local storage and processed in the browser's memory. Nothing is transmitted. You can verify this by turning on airplane mode and confirming the tool still works.

## Frequently Asked Questions

**Does merging EPUB files preserve the table of contents?**

Yes. BiblioFuse reconstructs the full table of contents from all source EPUB files. Each volume's chapters appear as a contiguous block in the merged TOC, and the original chapter titles are kept intact. Navigation works normally in any EPUB reader.

**Can I merge EPUB files with different authors or metadata?**

Yes. When source files have different metadata — different authors, publishers, or cover images — BiblioFuse uses the metadata from the first file in the list as the base for the merged output. You can edit the output metadata manually after merging using any EPUB editor.

**Is it safe to merge EPUB files online — are they uploaded?**

No files are ever uploaded. The [BiblioFuse Web Tool](/en/webapp/) runs 100% in your browser via WebAssembly. Your files stay on your device from start to finish. There is no server, no account, and no cloud storage involved.

**What happens to bookmarks and highlights after merging?**

Bookmarks and highlights are stored by your reading app, not inside the EPUB file itself. When you merge files and load the new combined EPUB, your app treats it as a new file, so previous reading positions from the individual volumes will not carry over. Start fresh in the merged file.

**Can I merge more than 3 EPUB files at once?**

The free tier supports up to 3 files per batch. For larger batches — a 10-volume series, for example — you can merge in stages: merge volumes 1–3 into Part A, volumes 4–6 into Part B, and so on, then do a final merge of the parts.

**Do merged EPUBs work on Kindle and Kobo?**

Kobo devices support EPUB natively, so a merged EPUB will open directly. Kindle uses its own formats (MOBI, AZW3), so you would need to convert the merged EPUB using a tool like Calibre before sideloading to Kindle. The merged EPUB output from BiblioFuse is standards-compliant and converts cleanly.

## Start Merging Your EPUB Library

If you have a series split across multiple files, a few clicks in the [BiblioFuse Web Tool](/en/webapp/) will combine them into a single, well-structured ebook with a proper table of contents — entirely in your browser, with no uploads and no account needed. After merging, you can transfer the file to your iPhone or iPad using BiblioFuse's built-in Wi-Fi Transfer feature for instant access in the [BiblioFuse](/en/) reader app.
