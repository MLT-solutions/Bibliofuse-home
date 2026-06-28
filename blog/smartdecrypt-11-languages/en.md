# SmartDecrypt Now Available in 11 Languages — Unlock Bank PDFs in Your Own Language

Your bank statement arrives as a locked PDF. The password is your NRIC number, date of birth, or the last six digits of your account — something you've typed dozens of times but still can't remember off-hand. [SmartDecrypt PDF ZIP](/en/smartdecrypt/) was designed exactly for this: save the password pattern once, and every future statement unlocks itself when you drop it in.

That experience is now available in 11 languages. SmartDecrypt PDF ZIP CBZ has expanded its full UI localisation to cover English, Spanish, French, Dutch, Portuguese, Russian, Simplified Chinese, Japanese, Korean, Bahasa Indonesia, and Malay — covering over three billion native speakers.

## Why Bank Statements Are the Core Use Case

Most people don't think of themselves as someone who needs a decryption tool. Then their bank starts sending password-protected PDFs every month.

The problem is the passwords. Banks, insurance companies, brokerage firms, and government agencies tend to use personal identifiers as passwords — your National ID number, your date of birth, your policy number. Each institution uses a different one, and none of them match your usual passwords. So you end up either:

- Searching through old emails for the "your password is…" setup message
- Calling customer service to reset access
- Keeping a sticky note with various combinations

SmartDecrypt solves this with **filename pattern matching**. You create a profile that says: "whenever I receive a file matching `DBS_Statement_*.pdf`, the password is my NRIC." The next time that file arrives — from email, Files app, or a browser download — you drop it in SmartDecrypt and it unlocks in seconds. No memory required.

The same logic applies to insurance renewal PDFs, payroll slips, tax documents, and any other recurring file type that consistently uses the same password format.

## What's New: Full 11-Language Support

The previous release added four languages. This update brings [SmartDecrypt](/en/smartdecrypt/) to a full set of eleven:

| Language | Code | New in this update |
|----------|------|--------------------|
| English | en | — |
| Spanish | es | — |
| Portuguese | pt | — |
| Bahasa Indonesia | id | — |
| Simplified Chinese | zh | — |
| **French** | fr | ✓ |
| **Dutch** | nl | ✓ |
| **Russian** | ru | ✓ |
| **Japanese** | ja | ✓ |
| **Korean** | ko | ✓ |
| **Malay** | ms | ✓ |

Every visible string in the app is translated — menus, toolbar buttons, the file queue, status badges, pattern match dialogs, Pro upgrade prompts, and the preferences panel. Nothing stays in English when you switch your system language.

SmartDecrypt follows your device language automatically. On iOS: **Settings → General → Language & Region**. On macOS: **System Settings → General → Language & Region**. On Windows: **Settings → Time & Language → Language & Region**. Restart the app and the interface switches immediately.

## Who Benefits

**French and Belgian users** managing bank statements from BNP Paribas, Société Générale, ING, or insurance PDFs from Allianz and AXA — now get menus and status messages in French.

**Dutch users** receiving locked PDF statements from ABN AMRO, Rabobank, or ING Nederland — the Dutch UI matches the Dutch filenames they've always used.

**Russian-speaking users** dealing with statements from Sberbank, VTB, and insurance documents that consistently use passport numbers or SNILS codes as passwords — the full Russian interface now matches.

**Japanese users** handling PDF statements from Mizuho, SMBC, Japan Post, or nenkin documents that use date-of-birth password patterns — full Japanese UI with kanji throughout.

**Korean users** managing statements from KB Kookmin, Shinhan, or government pension documents using resident registration number patterns — Korean menus and labels now match the Korean filenames.

**Malay-speaking users** in Malaysia and Singapore with Maybank, CIMB, or EPF statements using MyKAD or IC number passwords — Malay interface now available.

## Supported File Formats

SmartDecrypt handles the three formats that regularly arrive with passwords:

**PDF** — the format banks, insurance companies, and government agencies almost exclusively use for statements and notices. SmartDecrypt unlocks the PDF and saves a clean copy in your Files app.

**ZIP** — encrypted ZIP archives used for document bundles, comic downloads, and multi-file deliveries. SmartDecrypt extracts the contents without leaving the app.

**7z** — the open-source 7-Zip format, common for large archives and multi-part files. Full support for both encrypted and unencrypted 7z files.

## How Pattern Matching Works

When you receive a file, SmartDecrypt compares its filename against your saved profiles:

1. You create a profile: name = "DBS Bank", pattern = `DBS_*.pdf`, password = `S1234567A`
2. A file called `DBS_eStatement_2026-06.pdf` arrives
3. SmartDecrypt matches the filename against `DBS_*.pdf` ✓
4. It applies the stored password and unlocks the file

You can create multiple profiles for different sources — one for your bank, one for your insurer, one for payroll. SmartDecrypt Pro cycles through all matching profiles automatically if the first doesn't work, which handles the case where a provider changes their password format mid-year.

Passwords are stored in the Apple Keychain on iOS and macOS, or the Windows Credential Manager. They never go to a server, and they never appear in a database file that could be read by another app.

## Pricing

SmartDecrypt is free for unlocking one file at a time. SmartDecrypt Pro is a one-time universal purchase (covers iOS and macOS together) that unlocks batch processing — drop 20 statements and let it run through them all. There is no subscription.

Download [SmartDecrypt PDF ZIP](/en/smartdecrypt/) from the App Store or Microsoft Store. The 11-language update is live now on all platforms.
