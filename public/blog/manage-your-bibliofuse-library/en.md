# Managing Your BiblioFuse Library: Folders, Transfers, and Mac Streaming

BiblioFuse is built around a simple rule: your files stay where you put them. The app never moves, renames, or locks files into a proprietary format. Understanding where books live — and how to get them there — makes the difference between a library that works for you and one you're constantly fighting.

## Getting Books In: Four Paths

### Mac and Android — Add a Folder

On Mac and Android, BiblioFuse watches folders rather than owning files. In the sidebar, tap **Add Folder** and point it at any location — your Downloads folder, an external drive, a NAS. BiblioFuse indexes the contents and keeps an eye on changes without touching the files themselves.

### iOS — Copy Into the BiblioFuse Folder

iPhone and iPad use a sandboxed file model, so you copy books into a location the app can see. Two locations work:

**iCloud Drive → BiblioFuse** — Open the Files app and navigate to iCloud Drive → BiblioFuse. Copy or move your ebook folders here. Each folder you drop in appears as a separate folder in the BiblioFuse book list. Books or files placed directly in the root (not inside a subfolder) appear under a folder called **iCloud** in the app. Books stored here get automatic sidecar progress tracking: your reading position syncs across iPhone, iPad, and Mac. Pick up exactly where you left off on any device.

**On My iPhone → BiblioFuse** — For local-only storage, copy ebook folders here instead. Folders appear the same way in the book list, but progress stays on that device only.

In both cases, drop a folder — not just individual files. A folder of CBZ volumes for a manga series becomes one entry in the list with all volumes inside.

### Wi-Fi Transfer

The built-in browser-based import server lets you drag files from any computer without a cable or sync software.

- **iOS**: Go to **Settings → Wi-Fi Import** and enable it. A local URL appears — open it in any desktop browser and drag files in. Files land in **On My iPhone → BiblioFuse → import** and appear in your library automatically.
- **Android**: You choose the destination folder when setting up Wi-Fi Transfer.

### Books Processed by the Tools Tab

When you use the [Tools tab](/en/webapp) to compress or merge files, the output goes to:

- **iOS**: **On My iPhone → BiblioFuse → export** — processed files appear here automatically.
- **Android**: You choose the output folder when running the tools.

The [BiblioFuse Web Tool](/en/webapp) handles the same operations in any browser — useful when you're on Windows or Linux without the mobile app. For a deeper look at how much compression can save, see our [guide to comic and ebook file sizes](/en/blog/reduce-comic-ebook-file-size).

### Mac: Send to iCloud with One Right-Click

If you're reading on Mac and want a book on your iPhone, right-click any book cover and choose **Send to iCloud**. BiblioFuse copies the file directly to **iCloud Drive / BiblioFuse** — the same container your iPhone is watching. It appears on your phone within minutes, no manual step needed.

To send multiple books at once, enable selection mode (the checkmark icon, top right), pick the books you want, then tap **Send to iCloud** in the action bar that appears.

## The Library Grid: Long-Press Options

Long-pressing any book cover on iOS opens a context menu:

- **Open** — jump straight into reading
- **Share** — hand the file to another app or send it elsewhere
- **Rename** — change the display name (doesn't rename the file on disk)
- **Edit Metadata** — set tags and a star rating from 1 to 5
- **Remove** — a confirmation appears with two distinct options:
  - *Remove from Library* — deletes the library entry, leaves the file untouched on disk
  - *Delete from Storage* — removes both the entry and the physical file

To send books to the Tools tab, enter selection mode (long-press the first book, then tap others to add them). A toolbar appears at the bottom with a **Tools** button (wand icon). Tap it to queue selected books for compression or merging.

## Streaming Your Mac Library to iPhone

If your main collection lives on a Mac, you don't need to copy anything. [BiblioFuse](/en/) can stream directly from Mac to iPhone — but use Tailscale rather than the basic Wi-Fi method, which can be unreliable as your phone switches between networks.

Tailscale creates a private encrypted network between your devices. Once set up, your iPhone can reach your Mac whether you're on mobile data, a coffee shop Wi-Fi, or at home. The connection is stable and works anywhere.

### Step 1: Install Tailscale on Both Devices

1. Mac: download from [tailscale.com/download](https://tailscale.com/download) or the Mac App Store.
2. iPhone: search "Tailscale" in the App Store.
3. Sign in with the **same Tailscale account** on both.

Once connected, both devices appear in your Tailscale network and can reach each other privately.

### Step 2: Enable Streaming on Mac

In BiblioFuse on Mac, scroll down the left sidebar to the **Streaming** section and toggle it on. Two endpoints appear: a LAN/Wi-Fi endpoint and a **Remote / Tailscale** endpoint. The Tailscale one is the reliable path.

### Step 3: Check Permissions on iPhone

Two iOS permissions are required:

1. **Local Network** — go to **Settings → Privacy & Security → Local Network** and enable BiblioFuse.
2. **iCloud** — go to **Settings → [Your Name] → iCloud** and enable BiblioFuse.

Quick check: open BiblioFuse on iPhone, go to **Settings → Permissions**. Green checkmarks mean you're good; a red mark links directly to the system setting that needs fixing.

### Step 4: Connect from iPhone

1. Open the **Library** tab in BiblioFuse.
2. In the sidebar (left panel on iPad, tap the sidebar icon on iPhone), scroll to the bottom — the **Mac** section lists discovered streaming endpoints.
3. Look for the entry with **(iCloud)** in the name, for example *Matt's MacBook Pro (iCloud)*.
4. Tap it. Allow 10–30 seconds for the secure connection to establish.

Your Mac library folders now appear in the sidebar just like local storage. Browse and read as normal.

### What Streams vs. What Downloads

| Format | Behaviour |
|--------|-----------|
| CBZ / CBR | Streamed page-by-page — no download needed, instant to open |
| EPUB / TXT | Downloaded to device first, then opens |

**Reading progress note:** progress from streamed sessions is saved to your Mac's local database, not to iCloud. It won't sync to other devices — it stays on the Mac.

## Quick Tips

- **iCloud is the lowest-friction sync path**: books in iCloud Drive → BiblioFuse appear on all your Apple devices with progress tracking out of the box.
- **The export folder is a staging area**: after compression on iOS, find results in On My iPhone → BiblioFuse → export, then move them where you want them long-term.
- **Check Permissions first if streaming isn't working**: most connection issues trace back to Local Network or iCloud permission being off.
