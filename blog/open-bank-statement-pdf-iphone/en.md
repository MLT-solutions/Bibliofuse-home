# How to Open Password-Protected Bank Statement PDFs on iPhone

Every month, your bank sends a PDF. It's locked with a password. The password is something personal — your NRIC, your date of birth, the last six digits of your account number. You've typed it before, but not recently enough to remember it off the top of your head, so you're rummaging through old emails looking for the setup message, or calling the bank's helpline.

This is a solvable problem. [SmartDecrypt PDF ZIP](/en/smartdecrypt/) lets you save the password pattern once per bank or institution. Every future statement from that source unlocks automatically when you drop it in.

## Why Bank PDFs Are Password-Protected

Banks lock statement PDFs for the same reason they lock online banking — to prevent someone who intercepts your email from reading your financial records. The chosen password is something only you should know: your national identity number, your registered date of birth, your policy number, or a combination of the above.

The problem is that these passwords are not memorable in the way a chosen password is. You didn't pick `S1234567A` because it's meaningful to you — it's just your NRIC. You know the number, but typing it as a PDF password isn't something you do every day, so the moment of "what was the password again?" is nearly universal.

## Setting Up SmartDecrypt for Bank Statements

[SmartDecrypt](/en/smartdecrypt/) uses filename pattern matching to connect incoming files to their saved passwords. Here's the setup:

**Step 1 — Create a profile for each institution**

Open SmartDecrypt and tap the + button to add a new profile. Give it a name (e.g., "DBS Bank"), a filename pattern (e.g., `DBS_eStatement_*.pdf`), and the password for that institution.

The `*` wildcard matches any characters — so `DBS_eStatement_*.pdf` matches `DBS_eStatement_2026-06.pdf`, `DBS_eStatement_2026-05.pdf`, and so on. You only set this up once.

**Step 2 — Drop in the file**

When the monthly statement arrives — in your email, in Files, in Safari downloads — tap the share button and select SmartDecrypt. Or open SmartDecrypt and import directly.

SmartDecrypt checks the filename against your saved profiles. When it finds a match, it applies the stored password and unlocks the PDF. The unlocked file is saved to your Files app.

**Step 3 — Multiple banks, multiple profiles**

You can create as many profiles as you have institutions. Common examples:

- `DBS_eStatement_*.pdf` → your NRIC
- `OCBC_*.pdf` → your date of birth (DDMMYYYY format)
- `CPF_Annual_Statement_*.pdf` → your NRIC again
- `AXA_Policy_*.pdf` → your policy number
- `Singtel_Invoice_*.pdf` → your registered mobile number

Once the profiles are saved, you never have to remember which institution uses which format.

## What If the File Doesn't Match?

If a new statement arrives with an unexpected filename, SmartDecrypt Pro will try all your saved profiles automatically. If the standard password doesn't work (because the institution changed their format), SmartDecrypt will show you an "unlock failed" message and let you enter the password manually — which you can then save as a new or updated profile.

## Supported File Types

SmartDecrypt handles three formats that commonly arrive with passwords:

**PDF** — bank statements, insurance renewals, payslips, CPF statements, tax documents

**ZIP** — encrypted archive bundles, sometimes used for multi-document deliveries

**7z** — open-source 7-Zip format, common for large multi-file downloads

## Keychain Storage

Passwords saved in SmartDecrypt are stored in the Apple Keychain on iOS and macOS. The Keychain is encrypted at the device level and is not accessible to other apps. SmartDecrypt itself never transmits your passwords to any server.

## Batch Processing

SmartDecrypt Pro supports batch decryption — you can drop in 12 months of statements at once and SmartDecrypt will match each file to its profile and unlock them all. This is useful when migrating to a new device or setting up a historical archive.

## Pricing

SmartDecrypt is free for unlocking files one at a time. SmartDecrypt Pro adds batch processing and is a one-time universal purchase that covers iPhone, iPad, Mac, and Windows together. No subscription.

Download [SmartDecrypt PDF ZIP](/en/smartdecrypt/) from the App Store or Microsoft Store and set up your first bank profile in under two minutes.
