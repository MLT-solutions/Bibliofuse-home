# CBZ vs CBR vs EPUB — Comic and Ebook Formats Explained

You're looking at a download page and see four different file types: CBZ, CBR, EPUB, PDF. They all claim to be "the same book." Which one should you download? Which will work on your phone, your tablet, or your Mac? And what do those three-letter extensions actually mean?

This guide cuts through the confusion. By the end, you'll know exactly what each format is, where it came from, what's inside it, and which one is right for what you're trying to do.

## The Short Answer

| Format | Contents | Best for |
|--------|----------|---------|
| CBZ | Images in a ZIP archive | Comics, manga, graphic novels |
| CBR | Images in a RAR archive | Same as CBZ, older releases |
| EPUB | HTML + images in a ZIP archive | Text-heavy ebooks, novels |
| PDF | Pages rendered as fixed layout | Documents, technical books |

Now for the longer version, because the details matter.

## CBZ — Comic Book ZIP

CBZ stands for Comic Book ZIP. The format has exactly one rule: rename a ZIP file to `.cbz`. That's it. There's no special encoding, no header magic, no specification document. Open any `.cbz` in a zip utility and you'll find a flat folder of images, named in reading order — `001.jpg`, `002.jpg`, all the way to the last page.

The CBZ format took off in the early 2000s because it solved a simple problem: comic files needed to travel online, and ZIP was everywhere. The `.cbz` extension signaled to reading software "this is a comic, render the images in sequence" rather than "this is a software package, extract to a folder."

**What's inside:** Sequential images, typically JPG or PNG, sometimes WebP. Some files include a `ComicInfo.xml` in the root — a metadata file that stores the title, series, issue number, writer, artist, and other details. Apps like [BiblioFuse](/en/) read this metadata to display correct information in the library.

**Quality:** Depends entirely on the images inside. A CBZ with high-res PNG pages is lossless; a CBZ with compressed WebP pages is smaller but still excellent for most screens.

**Support:** Universal. Every comic reading app on every platform handles CBZ. It's the default format for digital comic collections.

## CBR — Comic Book RAR

CBR stands for Comic Book RAR. Same concept as CBZ, but the container is a RAR archive instead of ZIP.

RAR was popular in file-sharing communities during the era when most comic scanning happened, so older releases are often CBR rather than CBZ. The internal structure is identical — sequential images in reading order. The only difference is the compression algorithm and the archive format.

**The practical difference:** RAR files require a licensed RAR implementation to create (though any software can extract them). This caused friction over the years because ZIP is open and unencumbered. As a result, most new comic releases use CBZ, and CBR is considered the legacy format. Apps like [BiblioFuse](/en/) support both.

**Should you convert?** If you have a large CBR collection and want to future-proof it, converting to CBZ is reasonable — though the images inside are identical. The conversion is lossless since it's just re-archiving the same files. BiblioFuse's Tools tab can handle this on-device without a computer.

**A note on RAR5:** Some very old CBR files use the newer RAR5 compression standard, which older software can't open. If a CBR file fails to open, this is often why. Re-packaging as CBZ always solves it.

## EPUB — Electronic Publication

EPUB (Electronic Publication) is a completely different beast from CBZ and CBR. It's an open W3C standard designed for text-heavy ebooks — novels, non-fiction, reference books — where the content needs to reflow to fit different screen sizes and font preferences.

Under the hood, EPUB is a ZIP archive containing:
- **HTML or XHTML files** — the chapter text, marked up with semantic tags
- **CSS stylesheets** — fonts, spacing, layout
- **Images** — cover art and any illustrations
- **OPF manifest** — lists every file in the package and defines the reading order
- **NCX or NAV file** — the table of contents

The crucial difference from CBZ is that the content is *text*, not images. This means:

- **Reflow:** The reader controls font size, line spacing, margin width, and background color. The author doesn't control these — the reader does. An EPUB novel looks different on every device based on the user's settings.
- **Accessibility:** Screen readers can read the text aloud. There's no OCR needed because the text is already semantic HTML.
- **Searchability:** You can search for any word in an EPUB. Comics in CBZ format require OCR to search.

**Image-heavy EPUBs:** Manga in EPUB format is unusual but exists. When it does, the "pages" are actually full-page images embedded in HTML wrappers — essentially CBZ-style content inside an EPUB container. These files don't reflow well and are generally larger than equivalent CBZ files because the HTML overhead adds little benefit when the content is images.

**DRM:** Many commercial EPUB files from bookstores use Adobe DRM or Apple's FairPlay, which locks the file to a specific account and app. DRM-free EPUBs — from project Gutenberg, most small publishers, and direct author sales — work in any EPUB reader including [BiblioFuse](/en/).

## PDF — Portable Document Format

PDF is a fixed-layout format. Unlike EPUB, the author controls exactly where every element appears on every page. Margins, font sizes, columns — all fixed. PDF was designed for print, and it shows.

For comics, PDF works but isn't ideal:
- Files are often large because PDF stores vector and raster content together
- Zooming on a phone is awkward because the layout doesn't reflow
- Double-page spreads in PDF are one page — the spread isn't natural

For technical manuals, reference books, and scanned documents, PDF is often the best choice because the fixed layout preserves the exact visual structure.

## Which Format Should You Download?

**Manga or comics:** CBZ is the best choice. If only CBR is available and no CBZ, download CBR — they're identical in practice. If you need to save storage space, download whichever format the source offers and use BiblioFuse's compression tool afterward.

**Novels and text ebooks:** EPUB every time. It reflowable, accessible, and readable on any screen size without awkward zooming.

**Scanned books or technical documents:** PDF if the layout matters (diagrams, tables, multi-column text). EPUB if the source offers it and you care more about readability than exact layout fidelity.

**Mixed content (illustrated novel, art book):** EPUB with embedded images is common for illustrated novels; CBZ works better for art-heavy content where the image quality is paramount.

## Format Compatibility in BiblioFuse

[BiblioFuse](/en/) reads all of these natively on iPhone, iPad, and Mac:

- **CBZ and CBR** — direct archive reading, no extraction step, page-turn and scroll reading modes
- **ZIP and RAR** — treated identically to CBZ and CBR
- **EPUB** — full chapter navigation, font controls, line spacing, background color
- **PDF** — PDF rendering with zoom and page turn
- **TXT** — plain text with reader controls

The Tools tab in BiblioFuse handles format conversion on-device: compress a CBZ's images to WebP to shrink the file size, or convert a folder of images into a CBZ.

## A Note on File Size

For the same visual content, you can expect roughly:

| Format | Relative size | Why |
|--------|--------------|-----|
| CBZ with PNG | Largest | Lossless images |
| CBZ with JPEG | Medium | Lossy compression |
| CBZ with WebP | Smallest | Modern compression |
| EPUB (text) | Tiny | Text compresses extremely well |
| PDF | Variable | Depends heavily on content type |

A manga volume in PNG CBZ format typically runs 300–400 MB. The same volume compressed to WebP in a CBZ runs 40–80 MB — an 80% reduction with no visible quality loss on a phone screen. That math matters when you have 50 volumes of a series.

Now that you know what each format contains, you can make the right choice for your collection — and know exactly what your reading app needs to do to open it.
