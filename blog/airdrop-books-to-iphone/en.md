# How to Use AirDrop to Transfer Comics and Ebooks to iPhone

AirDrop is one of the fastest ways to move a handful of comics or ebooks from Mac to iPhone — no cable, no account, nothing uploaded to a server. But the process has one extra step that trips people up: transferred files land in the **Files app**, not directly in BiblioFuse. You need to open them from there.

This guide covers the full flow: transfer, finding the files, importing into BiblioFuse, and cleaning up.

## What AirDrop Does

AirDrop creates an encrypted peer-to-peer connection using Wi-Fi Direct. Your devices don't need to be on the same network, and nothing goes through Apple's servers. Transfer speed depends on file size and proximity — a 150 MB CBZ file typically transfers in 3–6 seconds when both devices are within a metre of each other.

Received files land in **Files → iCloud Drive → Downloads** (or **Files → On My iPhone → Downloads** if iCloud Drive is off). They don't open directly in BiblioFuse — you import them from the Files app after the transfer completes.

## Step-by-Step: Mac to iPhone

### 1. Enable AirDrop on Both Devices

**On iPhone:** Open Control Centre (swipe down from the top-right corner on Face ID models, up from the bottom on older models). Long-press the network tile, then tap **AirDrop**. Set it to **Contacts Only** or **Everyone for 10 Minutes** depending on your surroundings.

**On Mac:** Open Finder and select **Go → AirDrop** from the menu bar (or press Shift+Command+R). Set your Mac's AirDrop visibility at the bottom of the window to **Contacts Only** or **Everyone**.

### 2. Select Your Files

In Finder, navigate to your comic or ebook files. You can select multiple files using Command+click or Shift+click. Groups of 5–10 files transfer more consistently than sending 20+ at once.

### 3. Initiate the Transfer

Right-click the selected files and choose **Share → AirDrop**. The share sheet opens showing nearby devices. Your iPhone should appear within a few seconds. Click it.

A notification appears on your iPhone asking if you want to accept the files. Tap **Accept**. The files transfer to **Files → iCloud Drive → Downloads**.

### 4. Import Into BiblioFuse From the Files App

Once the transfer completes, open the **Files** app on iPhone.

Navigate to **iCloud Drive → Downloads** (or **On My iPhone → Downloads**). You'll see your transferred CBZ, EPUB, or other files there.

To import them into BiblioFuse:

1. Tap **Select** (top right) and choose all the files you want to import.
2. Tap the **Share** icon (box with arrow), then choose **BiblioFuse** from the list.
3. BiblioFuse opens and imports all selected files into your library.

> **Note on the AirDrop notification:** If you received a single file, tapping **Open** on the notification may show an app picker — you can select BiblioFuse there. For multiple files, the notification doesn't offer a direct open option, so the Files app route is the reliable method for any transfer.

### 5. Clean Up Downloads

After importing, the original files remain in **Files → Downloads** and continue to use iCloud storage. Go back to Files, select the transferred files, and delete them to keep your Downloads folder clean.

## Sending From iPhone to iPhone

The process works the same in both directions. On the sending iPhone:

1. Open the **Files** app and navigate to your comic files.
2. Long-press a file, then tap **Share**. To send multiple files, use the Select button, choose the files, then tap Share.
3. Tap **AirDrop** in the share sheet.
4. Select the recipient iPhone from the device list.

The recipient accepts the transfer, then imports from Files → Downloads into BiblioFuse using the same steps above.

## Sending from iPad to iPhone

Identical to Mac to iPhone. AirDrop treats all Apple devices the same way. If you have comics on your iPad that you want on iPhone, open Files on iPad, share the files, tap AirDrop, and select the iPhone.

For larger libraries, AirDrop per-file transfers add up. [BiblioFuse's Wi-Fi Transfer](https://bibliofuse.com/en/) handles bulk imports more efficiently — enable Wi-Fi Transfer in BiblioFuse Tools and drag entire folders from Finder into the browser upload page on your Mac. Files go directly into the app without the intermediate Files app step.

## AirDrop for CBR and ZIP Archives

AirDrop sends the raw file unchanged, so CBR (RAR archive) and ZIP files transfer without modification. BiblioFuse opens CBR and ZIP files as comic archives natively — a ZIP file containing images is treated identically to a CBZ. If your files are `.rar` or `.zip` rather than `.cbr` or `.cbz`, they'll still open correctly after importing from Files.

## Troubleshooting Common Problems

**iPhone doesn't appear in the AirDrop list on Mac**

Both Bluetooth and Wi-Fi must be active on both devices for AirDrop to work. Check both in Control Centre on iPhone and in the Mac menu bar. If your iPhone still doesn't appear: toggle AirDrop off and back on on the iPhone, or toggle Bluetooth off and on on the Mac. Make sure the iPhone's AirDrop isn't set to **Receiving Off**.

Contacts Only requires both devices to share a contact record — if you're using different Apple IDs on your Mac and iPhone, switch both to **Everyone for 10 Minutes** to bypass this check.

**Transfer stuck at "Waiting" or "Sending"**

This typically happens with large files (400 MB+). AirDrop's Wi-Fi Direct connection can be throttled by Wi-Fi interference. Move both devices closer together, retry with fewer files at once, and ensure neither device is in Low Power Mode. If large files consistently fail, use [BiblioFuse's Wi-Fi Transfer](https://bibliofuse.com/en/) — it runs over your local network and handles large files more reliably than AirDrop.

**BiblioFuse doesn't appear in the share sheet**

Make sure BiblioFuse is installed and has been launched at least once. If it still doesn't appear, long-press the file in Files → tap Share → scroll to the bottom and tap **More** to see the full app list. BiblioFuse should appear there.

**AirDrop not available on older Macs**

AirDrop between Mac and iPhone requires the newer Wi-Fi Direct protocol. Macs from 2012 onward support this; 2010–2011 Macs only support Mac-to-Mac AirDrop and cannot send files to iPhone.

## When AirDrop Isn't the Right Tool

AirDrop is ideal for moving a few files quickly. For larger jobs, consider:

| Scenario | Better tool |
|----------|-------------|
| 50+ files from a Mac library | BiblioFuse Wi-Fi Transfer |
| Ongoing sync, large collection | [Mac Home Library Streaming](https://bibliofuse.com/en/blog/mac-home-library-streaming-iphone/) |
| Files from Windows or Android | USB cable via Files app |

## Key Takeaway

AirDrop transfers your comic and ebook files to iPhone without a cable or cloud account. After accepting the transfer on iPhone, find the files in **Files → Downloads**, select them all, share to BiblioFuse, and then delete the originals from Downloads. For single files the notification shortcut works, but for multiple files the Files app is the reliable path. For bulk imports or a large ongoing library, [BiblioFuse's Wi-Fi Transfer](https://bibliofuse.com/en/) skips the Files step entirely and lands files directly in the app.
