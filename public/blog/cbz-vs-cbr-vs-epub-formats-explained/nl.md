# CBZ vs CBR vs EPUB — Comic- en E-bookformaten Uitgelegd

Je kijkt naar een downloadpagina en ziet vier bestandstypen: CBZ, CBR, EPUB, PDF. Ze beweren allemaal "hetzelfde boek" te zijn. Welk download je? Welk werkt op je telefoon, tablet of Mac?

Deze gids verduidelijkt alles. Aan het eind weet je precies wat elk formaat is, wat erin zit en welk het beste past bij jouw situatie.

## Het Korte Antwoord

| Formaat | Inhoud | Beste voor |
|---------|--------|-----------|
| CBZ | Afbeeldingen in een ZIP-archief | Comics, manga, graphic novels |
| CBR | Afbeeldingen in een RAR-archief | Hetzelfde, oudere releases |
| EPUB | HTML + afbeeldingen in een ZIP | Tekst-e-books, romans |
| PDF | Pagina's met vaste opmaak | Documenten, technische boeken |

## CBZ — Comic Book ZIP

CBZ staat voor Comic Book ZIP. Het formaat heeft precies één regel: hernoem een ZIP-bestand naar `.cbz`. Geen speciale codering. Open een `.cbz` met een archiefprogramma en je vindt een map genummerde afbeeldingen in leesvolgorde.

CBZ werd populair in het begin van de jaren 2000 omdat het een eenvoudig probleem oploste: comicbestanden moesten online circuleren, en ZIP was overal aanwezig. De extensie `.cbz` gaf leefsoftware aan: "dit is een strip, toon de afbeeldingen op volgorde."

**Inhoud:** Sequentiële afbeeldingen, doorgaans JPG, PNG of WebP. Sommige bestanden bevatten een `ComicInfo.xml` met metadata. [BiblioFuse](/nl/) leest deze metadata om correcte informatie in de bibliotheek te tonen.

**Ondersteuning:** Universeel. Elke comic-app op elk platform ondersteunt CBZ.

## CBR — Comic Book RAR

CBR staat voor Comic Book RAR. Zelfde concept als CBZ, maar het archief is RAR in plaats van ZIP.

RAR was populair in bestandsdeel-communities ten tijde van de meeste comic-scans, dus oudere releases zijn vaak CBR. De interne structuur is identiek. [BiblioFuse](/nl/) ondersteunt beide.

**Converteren?** Als je een grote CBZ-collectie hebt, is omzetten naar CBZ redelijk. De conversie is verliesvrij want je archiveert dezelfde bestanden opnieuw.

**Opmerking over RAR5:** Sommige heel oude CBR-bestanden gebruiken RAR5 dat oude software niet kan openen. Opnieuw verpakken als CBZ lost dit altijd op.

## EPUB — Electronic Publication

EPUB is een open W3C-standaard voor tekstintensieve e-books — romans, non-fictie. In tegenstelling tot CBZ en CBR is de inhoud *tekst*, geen afbeeldingen.

EPUB is een ZIP-archief met:
- **HTML/XHTML-bestanden** — de hoofdstektekst
- **CSS-stylesheets** — lettertypen, ruimte, opmaak
- **Afbeeldingen** — omslag en illustraties
- **OPF-manifest** — alle bestanden en de leesvolgorde
- **NCX- of NAV-bestand** — de inhoudsopgave

Kernverschillen:
- **Herformulering:** De lezer bepaalt lettertypegrootte, regelafstand en achtergrondkleur.
- **Toegankelijkheid:** Schermlezers kunnen de tekst hardop voorlezen.
- **Doorzoekbaarheid:** Je kunt elk woord zoeken in een EPUB.

**DRM:** Veel commerciële EPUB-bestanden gebruiken Adobe DRM of Apple FairPlay. DRM-vrije EPUB's werken in elke lezer, inclusief [BiblioFuse](/nl/).

## PDF — Portable Document Format

PDF is een vaste-opmaak-formaat. In tegenstelling tot EPUB bepaalt de auteur precies waar elk element op elke pagina staat. PDF was ontworpen voor druk.

Voor comics werkt PDF maar is niet ideaal: bestanden zijn vaak groot en zoomen op een telefoon is onhandig. Voor technische handleidingen en gescande documenten is PDF vaak de beste keuze.

## Welk Formaat Download Je?

**Manga of comics:** CBZ is de beste keuze. Als alleen CBR beschikbaar is, download dat — ze zijn identiek in de praktijk.

**Romans en tekst-e-books:** EPUB altijd. Het past zich aan, is toegankelijk en leesbaar op elk schermformaat.

**Technische boeken of gescande documenten:** PDF als de opmaak belangrijk is; EPUB als de bron het aanbiedt.

## Compatibiliteit in BiblioFuse

[BiblioFuse](/nl/) leest al deze formaten native op iPhone, iPad en Mac: CBZ, CBR, ZIP, RAR, EPUB, PDF en TXT. Het tabblad Extra verwerkt conversie en compressie rechtstreeks op het apparaat.

## Opmerking over Bestandsgrootte

| Formaat | Relatieve grootte | Reden |
|---------|------------------|-------|
| CBZ met PNG | Grootst | Verliesvrije afbeeldingen |
| CBZ met JPEG | Gemiddeld | Compressie met verlies |
| CBZ met WebP | Kleinst | Moderne compressie |
| EPUB (tekst) | Minuscuul | Tekst comprimeert uitstekend |

Een mangavolume in PNG CBZ weegt doorgaans 300–400 MB. Hetzelfde volume gecomprimeerd naar WebP weegt 40–80 MB — 80% kleiner zonder zichtbaar kwaliteitsverlies.
