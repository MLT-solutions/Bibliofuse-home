# Kavita Reader App for iPhone, iPad and Android: Progress, Bookmark and Annotation Sync

**Short answer:** [BiblioFuse Reader](https://bibliofuse.com/en/comicreader/) connects to a Kavita server through Kavita's own API, not only its OPDS feed. That lets it sync reading progress both ways, sync bookmarks, and sync EPUB highlights and notes — including adding, editing and deleting them — with the same annotations you see in Kavita's web reader. Setup takes one QR scan.

This guide covers what syncs, what does not, which file formats are supported, and how to connect in under a minute.

## Why Kavita progress often does not sync in reader apps

Most third-party readers talk to Kavita over OPDS. OPDS is a catalogue protocol: it is good at listing series and handing over files, but it was never designed to carry your reading position, bookmarks or notes back to the server. Kavita's own documentation says the richest way to use a Kavita server is through its API.

So if you have ever finished a volume on your phone and found it still marked unread in Kavita, the app was almost certainly using OPDS only.

BiblioFuse uses the Kavita API directly. Your series, volumes, chapters, specials, reading lists and collections appear the way they do in Kavita, and what you do in the reader is written back to the server.

## What syncs between BiblioFuse and Kavita

| Feature | What BiblioFuse does on a Kavita server |
|---|---|
| Reading progress | Syncs both ways. Open a book and it resumes where Kavita says you stopped; read further and Kavita is updated. |
| Exact EPUB position | Resumes at the place within the chapter, not just the chapter. |
| Bookmarks | Page bookmarks for comics and PDF, and in-book bookmarks for EPUB, saved to Kavita. |
| Highlights | EPUB highlights sync through Kavita's annotation API, using your server's own highlight colours. |
| Notes | EPUB notes sync, including formatted notes written in Kavita's web reader. |
| Annotation management | Add, edit and delete highlights and notes from the reader or from the Annotations list. Changes reach the server. |
| Offline changes | Saved on the device first, then sent when the server is reachable again. |

Highlights and notes you make in BiblioFuse appear in the Kavita web reader's annotation drawer, and annotations made on the web appear in BiblioFuse the next time you open the book.

## File format support on a Kavita server

Not every format supports every kind of sync. This is a limit of what Kavita stores for each format, not a setting you can change.

| Format | Reading | Progress | Bookmarks | Highlights / notes |
|---|---|---|---|---|
| CBZ / CBR | Streamed, no full download | Syncs | Page bookmarks | Not supported |
| EPUB | Streamed | Syncs (by position in the chapter) | Syncs | Syncs (Kavita annotation API) |
| PDF | Yes | Syncs (by page) | Page bookmarks | Not supported (Kavita annotations are EPUB-only) |

In practice:

- **Comics and manga (CBZ, CBR)** open a page at a time. Nothing is downloaded in full unless you choose to save the book for offline reading.
- **EPUB** gets the complete set: progress, bookmarks, highlights and notes.
- **PDF** keeps its page and page bookmarks in sync. Kavita has no annotation storage for PDF, so PDF highlights stay on your device.

## How to add your Kavita server in under a minute

You need BiblioFuse Pro for server connections, your Kavita server address, and your Kavita auth key (in Kavita, open your user settings and look for the API key or 3rd Party Clients section).

### Option 1: scan a QR code (fastest)

1. On a computer, open the [BiblioFuse Kavita & Komga QR generator](https://bibliofuse.com/en/tools/qr-generator/).
2. Choose **Kavita**, enter your server address and paste your auth key. The QR code is built in your browser; nothing is sent anywhere.
3. On your phone or tablet, open **BiblioFuse > Settings > OPDS** and tap the **QR scan icon**.
4. Scan the code. The server is added with the address and key filled in.

Treat the QR code like a password. It contains your auth key, so do not post a screenshot of it.

### Option 2: type it in

Open **BiblioFuse > Settings > OPDS > Add server**, choose Kavita, and enter the address (for example `http://192.168.1.20:5000`) and auth key by hand.

Once the server is added, open the Location panel at the top of the Library and pick your Kavita server. The full [setup guide](https://bibliofuse.com/en/guide/) has screenshots for each step.

## Managing highlights and notes

Select text in a Kavita EPUB to highlight it or add a note. On a Kavita book the colour picker shows your server's five highlight colours, so a highlight looks the same in BiblioFuse and in Kavita's web reader.

- **Add:** select text, then choose Highlight or Note.
- **Edit:** select inside an existing highlight and choose Edit Annotation, or edit it from the Annotations list. You can change the colour and the note.
- **Delete:** remove it from the reader or the Annotations list. The deletion is sent to Kavita.

The Annotations list shows every highlight and note in the current book, with search, and jumps straight to the passage when you tap one.

## Which devices are supported

- **iPhone, iPad and iPhone Duo:** progress, bookmark and annotation sync, in BiblioFuse 2.1.15.
- **Apple Vision Pro:** Kavita libraries, progress, bookmarks and annotations in the native visionOS app, in BiblioFuse 2.1.15.
- **Android phones and tablets:** progress, bookmark and annotation sync, in BiblioFuse 2.0.16.
- **Apple TV and Android TV:** these read from a BiblioFuse host on your own network and do not connect to Kavita.

The [feature matrix](https://bibliofuse.com/en/features/) lists what each platform supports and since which version.

## No Kavita server? BiblioFuse has its own host

Kavita is an excellent server, but you do not need one. BiblioFuse includes its own free host for Mac, Windows PC, Docker and Synology NAS. Point it at the folders you already keep and stream to BiblioFuse on your other devices over home Wi-Fi, or remotely with Tailscale.

The difference worth knowing: on a BiblioFuse host, reading progress, bookmarks, highlights and notes sync for **every** supported format — CBZ, CBR, PDF, EPUB and TXT — because the host stores annotations itself rather than depending on a per-format server feature.

| | Kavita server | BiblioFuse host |
|---|---|---|
| Runs on | Docker, Windows, Linux, macOS | Mac, Windows PC, Docker, Synology |
| Progress sync | CBZ, CBR, EPUB, PDF | CBZ, CBR, PDF, EPUB, TXT |
| Bookmark sync | CBZ, CBR, EPUB, PDF | CBZ, CBR, PDF, EPUB, TXT |
| Highlight / note sync | EPUB | CBZ, CBR, PDF, EPUB, TXT |
| Web reader | Yes | Yes (NAS and Docker host) |
| Multi-user library server | Yes | No — a personal library host |

You can use both. Plenty of readers keep manga on Kavita and add a BiblioFuse host for a folder of PDFs or text files. See [BiblioFuse Reader](https://bibliofuse.com/en/comicreader/) for the host downloads and the setup picker.

## Komga and other OPDS servers

BiblioFuse also connects natively to Komga, with reading progress syncing both ways and exact EPUB position. Bookmark and annotation sync are Kavita-only, because Komga has no API for them. Any other OPDS 1.x server works as a catalogue, with page-at-a-time streaming where the server supports OPDS-PSE.

If you are still deciding how to organise a collection before putting it on a server, the [digital comic library management guide](https://bibliofuse.com/en/blog/digital-comic-library-management-guide/) and the [CBZ vs CBR vs EPUB comparison](https://bibliofuse.com/en/blog/cbz-vs-cbr-vs-epub-formats-explained/) are good starting points.

## FAQ

**Does BiblioFuse sync reading progress with Kavita?**
Yes, in both directions. BiblioFuse uses Kavita's API, so a book resumes where Kavita says you stopped and your progress is written back as you read. This works for CBZ, CBR, EPUB and PDF.

**Can I sync highlights and notes with Kavita on iPhone or iPad?**
Yes, for EPUB books. Highlights and notes made in BiblioFuse are saved through Kavita's annotation API and appear in Kavita's web reader. You can add, edit and delete them from either side.

**Why are highlights not supported for CBZ, CBR or PDF on Kavita?**
Kavita stores annotations for EPUB only. Comics and PDF still sync reading progress and page bookmarks. If you need highlights and notes on PDF or comics to sync, a BiblioFuse host supports them for every format.

**Do I need to download a whole comic to read it from Kavita?**
No. CBZ and CBR are streamed a page at a time. You can optionally save a book for offline reading.

**What is the fastest way to add a Kavita server to BiblioFuse?**
Create a QR code with the BiblioFuse QR generator in your browser, then open Settings > OPDS in the app and tap the QR scan icon. The server address and auth key are filled in for you.

**Is Kavita support free in BiblioFuse?**
Reading local files is free. Connecting to Kavita, Komga and OPDS servers is part of BiblioFuse Pro, which you can get as a monthly or yearly subscription or as a one-time lifetime purchase.

**Does BiblioFuse work with Kavita over the internet?**
Yes. If your Kavita server is reachable from outside your home — through a reverse proxy, a VPN or Tailscale — enter that address and BiblioFuse connects the same way.

**Can I use Kavita and a BiblioFuse host at the same time?**
Yes. Both appear in the Location panel, and each keeps its own progress, bookmarks and annotations.
