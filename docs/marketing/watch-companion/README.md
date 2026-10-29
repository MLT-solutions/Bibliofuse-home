# Apple Watch website artwork source

This is the reproducible source and marketing handoff for the Apple Watch companion artwork. The website integration is already in `src/pages/ComicReader.jsx`; its 11 displayed JPEGs are in `public/image/home/watch-companion/` and match the hashes in `locale-manifest.json`.

## Package contents

- `source-captures/` contains the simulator screenshots used in the compositions.
- `render-watch-companion.mjs` produces localized SVG/JPEG exports, a contact sheet, and a manifest under `generated/`.
- `contact-sheet.jpg` and `locale-manifest.json` are the reviewed export snapshot.
- `pt-PT.jpg` is the European Portuguese alternative. The website currently uses `pt-BR.jpg` for its single Portuguese locale.
- `reddit-watch.md` contains localized Reddit copy and the corresponding website artwork paths.

Generated SVGs embed the source screenshots repeatedly, so they are reproducible outputs rather than checked-in source files. `generated/` is ignored to keep large duplicate renders out of Git and the deployed `public/` tree.

## Source and localization notes

The designs show three Apple Watch app states and one iPhone reader state. They preserve the captured app UI; the copy explains that the iPhone remains responsible for audio playback and comic reading. The artwork was captured from BiblioFuse Watch and iPhone release 2.1.16 (132).

Copy is localized for 12 app locales and visually checked for wrapping and glyph rendering. UI screenshots are not captured in every locale; see the manifest for each capture locale. Native-language editorial review remains outstanding, so do not describe every screenshot as fully localized.

The website maps `pt` to the Brazilian Portuguese artwork and `zh` to Simplified Chinese. Both Portuguese variants are retained in the marketing handoff.
