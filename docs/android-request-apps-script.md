# Android Request Apps Script Endpoint

Google Sheet:
https://docs.google.com/spreadsheets/d/1MEPnVZdBZxMqQZCUjE3CJBi14GpKX1OeXMgN-yOpxns/edit

Web app endpoint:
https://script.google.com/macros/s/AKfycbx0SrrqxCsq7KFvG0AGdHK3Bg2y6FnpcqHTTu3BVB9ZIk8FD9VcD8_5c77ClK88UqfJPg/exec

Use this Google Apps Script as the web app endpoint for the static
`/androidrequest` form.

```js
const SPREADSHEET_ID = '1MEPnVZdBZxMqQZCUjE3CJBi14GpKX1OeXMgN-yOpxns';
const SHEET_NAME = 'Sheet1';

const HEADERS = [
  'submittedAt',
  'email',
  'appInterested',
  'otherApp',
  'deviceType',
  'canTest14Days',
  'mostImportantFeature',
  'comments',
  'siteLanguage',
  'browserLanguage',
  'pagePath',
  'referrer',
];

function doPost(e) {
  const params = e && e.parameter ? e.parameter : {};
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);

  if (!sheet) {
    throw new Error(`Sheet not found: ${SHEET_NAME}`);
  }

  const row = HEADERS.map((key) => params[key] || '');
  sheet.appendRow(row);

  return ContentService
    .createTextOutput(JSON.stringify({ ok: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
```

Deploy in Apps Script:

1. Create a new Apps Script project.
2. Paste the script above into `Code.gs`.
3. Deploy > New deployment > Web app.
4. Execute as: `Me`.
5. Who has access: `Anyone`.
6. Copy the `/exec` web app URL.
7. Build/deploy the site with:

```bash
npm run deploy
```

The URL is compiled into the static Vite bundle at build time. GitHub Pages does
not read runtime environment variables. The production URL is stored in
`.env.production`.
