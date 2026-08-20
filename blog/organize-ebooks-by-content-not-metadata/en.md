# How to Organise Your Ebook Library Without Entering Metadata or ISBN Numbers

Most ebook readers ask you to do the same thing when you add a book: enter the title, author, genre, and ISBN so the library can find and group it. If the file already has embedded metadata, the reader fills it in automatically. If it doesn't — which is the case for many EPUB and TXT files you actually own — you're looking at a long metadata entry session before the library is usable.

[GrepTag Reader](/en/grepreader/) takes the opposite approach. It reads the actual text inside each book and automatically extracts tags from the content itself. You don't enter anything. The library organises itself.

## The Metadata Problem

Metadata-based organisation has two failure modes:

**Missing metadata** — Many legitimately downloaded EPUB files, plain TXT documents, converted PDFs, and self-published books arrive with incomplete or no embedded metadata. The title field might be the filename. The author might be blank. Genre and series information are almost never filled in.

**Stale metadata** — Even when metadata exists, it may not reflect how *you* think about the book. A novel tagged `fiction > thriller` by the publisher might be what you consider `historical fiction` or `Cold War espionage`. The metadata reflects the publisher's categories, not yours.

ISBN-based lookups solve the first problem only when the ISBN is present and the lookup database has an entry — which fails for self-published works, small press titles, international editions, and anything published before the modern ISBN system was widespread.

## How GrepTag Reader Extracts Tags from Content

When you import an EPUB or TXT file into [GrepTag Reader](/en/grepreader/), it reads the full text of the book — every chapter, every paragraph — and looks for recurring keywords that indicate what the book is actually about.

The tags it generates reflect the actual content:

- A novel set in Tokyo with samurai characters might generate: `japan`, `samurai`, `historical`, `action`
- A technical manual about Linux command-line tools might generate: `linux`, `terminal`, `programming`, `sysadmin`
- A travel memoir through Southeast Asia might generate: `travel`, `asia`, `memoir`, `thailand`

These tags come directly from the text, not from what someone decided to enter in a metadata field. A book about machine learning that was published before "machine learning" was a common genre term will still be tagged `machine learning` based on how often the phrase appears.

## Auto-Tagging on Import

GrepTag Reader runs the analysis automatically when a book is imported. You don't trigger a scan manually — every new book you add is tagged within a few seconds of landing in your library.

As you add more books, the tag system becomes more useful. Each tag links to every book in your library that shares it. Tap `philosophy` and see everything from Aristotle to contemporary essays you've added over the years. The library structures itself around the pattern of books you actually own.

## Multi-Select Tag Filtering — AND Logic

The tag filtering in GrepTag Reader uses AND logic: when you select multiple tags, you see books that match *all* of them, not any of them.

This is the key difference from typical search. If you want:

- Books that are both `sci-fi` AND `short stories` — select both tags; you see only collections in that genre
- Books that are `japan` AND `detective` — results show Japanese mystery fiction, filtering out general Japan books and unrelated detective novels
- Books that are `philosophy` AND `ancient` — narrows to ancient Greek and Roman works, not modern philosophy books

Most ebook readers offer keyword search. GrepTag Reader's tag system lets you compose multi-dimensional queries by clicking tags — no search syntax required.

## What File Formats Does GrepTag Reader Support?

GrepTag Reader analyses the text content of:

**EPUB** — the standard format for trade-published ebooks. Supports EPUB 2 and EPUB 3, including books with custom fonts, CSS styling, and embedded images. The tag analysis reads the prose content, not the styling.

**TXT** — plain text files, including Project Gutenberg downloads, converted documents, and manually created text files. Works with any encoding (UTF-8, Latin-1, etc.).

For comic book formats (CBZ, CBR, PDF), BiblioFuse handles reading while GrepTag Reader focuses on text-based ebook analysis.

## Building a Reading List by Tag Combination

Once your library is tagged, you can build a reading queue by holding tags. For example:

1. Tap `unfinished` to see books you've started but not completed
2. Add `philosophy` to narrow to unfinished philosophy books
3. Add `short` to narrow further to shorter works you can realistically finish soon

None of this required entering any metadata. You added the books, GrepTag Reader tagged them, and the filtering does the rest.

## Syncing Across Devices

Your GrepTag Reader library — including the auto-generated tags and your reading progress — syncs via iCloud. Books you add on iPhone appear on iPad and Mac with the same tags already applied. Tags generated from content are consistent across devices because they're derived from the same text.

## Getting Started

Import your existing EPUB and TXT files into [GrepTag Reader](/en/grepreader/). The auto-tagging runs immediately on import. Within a few minutes of adding your first batch of books, you'll have a browsable, filterable library with no manual metadata entry required.

Download GrepTag Reader from the App Store. It's available for iPhone, iPad, and Mac.
