# Extract Text from Comics and Manga on iPhone with OCR

BiblioFuse includes on-device OCR for extracting text from comic and manga pages on iPhone — supporting Japanese (including vertical text), Chinese, Korean, and Western scripts in CBZ, CBR, EPUB, and PDF files. The entire process runs locally on the Neural Engine with no network connection or server upload required, producing results in under two seconds on iPhone 14 or newer.

You're three volumes into a manga series when a character drops a name — a clan, a technique, a location — spelled out in the original Japanese that the English translation renders phonetically. You want to look it up, check the kanji, or run it through a dictionary app. But comic pages are images, not text. You can't tap the speech bubble and copy what's inside.

OCR in [BiblioFuse](/en/) changes that. The app can scan any page — or any selected region of a page — extract the text it finds, and hand it to you as a copyable string. It works on CBZ, CBR, EPUB, and PDF files. It handles Japanese, Chinese, Korean, and Western scripts. And it runs entirely on-device with no network connection required.

This guide explains what BiblioFuse's OCR feature does, how to use it, and which situations it's most useful for.

## Why Comics Are Hard to Read With Standard OCR

OCR on regular documents — receipts, PDFs with embedded fonts, scanned articles — is a solved problem. Apps like Apple's built-in Live Text handle printed text in photos well.

Comics are harder for three reasons.

**Text is in speech bubbles with curved edges and varying backgrounds.** The text sits against a drawn image, often with complex line work directly behind or around it. This confuses OCR systems trained on clean document backgrounds.

**Fonts are often stylized or hand-lettered.** Western comics especially use custom fonts that mimic handwriting or have distorted letterforms for emphasis. Screaming dialogue might be rendered in jagged, oversized letters that standard OCR can't parse.

**Manga has specific layout conventions.** Japanese text in manga is typically vertical, right-to-left, and tightly kerned inside narrow bubbles. The reading order and spacing rules are different from any standard document format.

[BiblioFuse](/en/) trains its OCR specifically for comic and manga layouts, with separate models for horizontal Western text and vertical CJK (Chinese, Japanese, Korean) text. The result is meaningfully better than running a generic document scanner on the same page.

## What You Can Do With Extracted Text

Before the how-to, it helps to know the range of uses:

**Look up vocabulary in a foreign language.** If you're reading a manga in Japanese, extract dialogue from a panel and paste it into a dictionary app or translator. This is the most common reason readers want OCR in a comic reader.

**Copy quotes.** A memorable piece of dialogue, a caption you want to save, a chapter title. Comics are full of quotable moments, but there's no way to select text on an image. OCR gives you that text.

**Search within a series.** Extract a character's name, a proper noun, or a technical term from one volume and search across your library for other occurrences. Useful for tracking down where a story element was first mentioned.

**Accessibility.** If you're reading a scanned comic that predates accessible ebook formats, OCR lets you extract text to feed into a screen reader or text-to-speech app.

**Translation of untranslated content.** If you have manga volumes that were never officially translated into English, OCR + machine translation gives you a rough reading experience you wouldn't otherwise have.

## How to Use OCR in BiblioFuse

OCR is built into the reader view. You don't need to switch modes or navigate to a separate tool — it's available on any page while you're reading.

**To scan the full page:**

1. While reading, tap the center of the page to show the reader controls.
2. Tap the **OCR** button in the toolbar (the icon shows a text cursor over a page).
3. BiblioFuse scans the current page and displays extracted text in a panel below the image.
4. Tap any text block to copy it, or use **Copy All** to copy everything extracted from the page.

**To scan a specific region:**

1. Long-press on any part of the page.
2. Drag to draw a selection rectangle around the area you want — a speech bubble, a caption box, a title.
3. Lift your finger. BiblioFuse scans the selected region and displays the result.
4. Tap to copy or share.

The region selection mode is more accurate for tightly packed pages or when you want text from a single panel rather than the whole page. For manga with dense layouts and overlapping speech bubbles, selecting the exact bubble you want gives cleaner results.

## Language Detection and CJK Support

BiblioFuse detects the script automatically in most cases. If you open a Japanese manga and run OCR, it applies the CJK model. If you open a Western comic, it applies the Latin text model. You don't need to change a setting.

For files that mix scripts — a fantasy manga with English chapter titles and Japanese dialogue, for example — BiblioFuse can extract both. The full-page scan processes each text block independently and labels its detected language.

**Vertical Japanese text** is handled correctly. Manga speech bubbles typically run top-to-bottom in right-to-left column order. BiblioFuse OCR reconstructs this reading order and presents the extracted text in the correct sequence, not in the visual left-to-right scan order that would produce garbled output.

For **Traditional and Simplified Chinese**, BiblioFuse distinguishes the character sets in the OCR output, which matters if you're copying text to look up in a dictionary that handles them separately.

**Korean manhwa** — which typically uses horizontal text in a modern comic layout — is handled by the same pipeline as other CJK scripts.

## Accuracy: What to Expect

OCR accuracy on comics is better than on generic image OCR, but it's not perfect. Expectations depend on the source material:

**High-resolution scans (600+ DPI):** Very accurate. Crisp text, clear backgrounds, and good contrast make OCR reliable. Most well-prepared digital CBZ releases fall into this category.

**Standard releases (300 DPI):** Accurate on clean lettering. Some errors on stylized fonts or heavily distorted "action" text.

**Low-resolution or compressed scans:** Accuracy degrades with JPEG artifacts and blurring. Upscaling in [BiblioFuse](/en/) (available in reading settings) can help before you run OCR — sharper images produce better results.

**Hand-lettered comics:** More variation. Machine-print fonts in speech bubbles OCR cleanly; hand-lettered indie comics or old-school lettering with uneven spacing produce more errors. Usually still readable enough to get the gist.

For manga, the main sources of error are small furigana (the tiny reading guides above kanji) and overlapping text at panel edges. Running OCR on just the speech bubble rather than the full page reduces these interference errors.

## After Extraction: What You Can Do With the Text

The extracted text panel in [BiblioFuse](/en/) supports standard iOS share sheet actions. From any extraction result, you can:

- **Copy to clipboard** and paste into any other app
- **Share** directly to a translation app, Notes, or a messaging app
- **Open in Safari** to search — useful for looking up a character name or place quickly
- **Add to a note** if BiblioFuse's built-in notes feature is available in your version

For Japanese text specifically, the iOS system dictionary includes a Japanese-English lookup. Copy any extracted kanji to clipboard, then open the Translate app or a dictionary app to check it without switching away for long.

## Tips for Better Results

**Use the region selector for single bubbles.** Full-page scans give you everything, but single-bubble selections give you cleaner text when bubbles are close together.

**Enable upscaling for low-quality scans.** In BiblioFuse's reader settings, image upscaling applies a sharpening filter that improves OCR input quality.

**For manga, hold the phone straight.** OCR on vertical text is sensitive to rotation. If the page is significantly tilted, the column reading order can be reconstructed incorrectly. Most readers hold their phone straight naturally, but it's worth noting if results look scrambled.

**Run OCR before zooming in.** OCR operates on the full page resolution, not the current zoom level. You'll get better coverage by running OCR at normal zoom, then zooming in on a specific bubble if needed.

**For PDFs, OCR supplements embedded text.** Some PDFs already have a text layer (from the original layout software). BiblioFuse reads embedded PDF text directly when it's available, which is faster and more accurate than OCR. OCR kicks in for scanned PDFs that have no text layer.

## OCR Runs On-Device

All OCR processing in [BiblioFuse](/en/) runs locally on your iPhone. Pages are not sent to a server. There's no API call to an external service, no image uploaded for processing, and no results stored outside the app. This matters if your library includes personal documents, private notes in PDF form, or content you wouldn't want sent to a third party.

On-device OCR is possible because Apple's Neural Engine on modern iPhones is powerful enough to run computer vision models in real time. An iPhone 14 or newer handles full-page OCR in under two seconds.

## Getting Started

OCR is available in [BiblioFuse](/en/) for iOS — no additional purchase or in-app unlock required. Download the app from the App Store, import a comic or manga, and try tapping the OCR button while reading. For manga readers especially, it's one of those features that's hard to go back to reading without once you've used it.

## Frequently Asked Questions

**Can I extract text from manga pages on iPhone?**
Yes. BiblioFuse has a built-in OCR tool that works directly in the reader. Tap the center of the page to show controls, then tap the OCR button to scan the current page. You can also long-press and drag to select a specific speech bubble or region.

**Does BiblioFuse OCR support Japanese vertical text?**
Yes. BiblioFuse's OCR handles vertical Japanese text in manga speech bubbles, including right-to-left column reading order. The extracted text is presented in the correct sequence, not scrambled by a left-to-right scan order.

**Is the OCR in BiblioFuse done on-device or uploaded to a server?**
All OCR processing runs locally on your iPhone's Neural Engine — nothing is sent to a server. This works offline and keeps your content private. An iPhone 14 or newer completes full-page OCR in under two seconds.

**What languages does BiblioFuse OCR support?**
BiblioFuse OCR handles Japanese (horizontal and vertical), Simplified and Traditional Chinese, Korean, and standard Latin-script languages. Script detection is automatic — you don't need to change a language setting when switching between manga types.

**How accurate is OCR on comic pages compared to documents?**
High-resolution CBZ files (600+ DPI) OCR very accurately. Standard releases (300 DPI) produce good results on clean lettering. Accuracy drops with heavy JPEG artifacts, stylized fonts, or very low-resolution scans. Using the region selector on a single speech bubble rather than scanning the full page usually gives cleaner results.
