# CBZ vs CBR vs EPUB — Comic- en E-bookformaten Uitgelegd

BiblioFuse ondersteunt CBZ, CBR, EPUB, PDF, ZIP, RAR en TXT op iPhone, iPad en Mac met iOS 17 of later — alle comic- en e-bookformaten worden native gelezen zonder conversie. CBZ en CBR zijn afbeeldingsarchieven die het beste geschikt zijn voor comics en manga, terwijl EPUB een reflowbaar tekstformaat is dat is ontworpen voor romans en non-fictie.

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

## Veelgestelde vragen

**Wat is het verschil tussen de comicformaten CBZ en CBR?**
CBZ en CBR zijn beide archieven met sequentiële afbeeldingen — CBZ gebruikt een ZIP-container en CBR gebruikt RAR. De afbeeldingen erin zijn identiek; alleen het archiefformaat verschilt. CBZ is de moderne standaard omdat ZIP open en vrij is; CBR komt voor in oudere releases. BiblioFuse leest beide zonder conversie.

**Kan ik EPUB-bestanden lezen in een comic reader-app?**
Ja, als de app EPUB native ondersteunt. BiblioFuse verwerkt DRM-vrije EPUB-bestanden naast CBZ en CBR — je kunt romans en graphic novels in dezelfde bibliotheek beheren. EPUB is een reflowformaat, dus lettergrootte, regelafstand en marges zijn aanpasbaar.

**Welk formaat is beter voor manga — CBZ of EPUB?**
CBZ is bijna altijd de beste keuze voor manga. Mangapagina's zijn volledige afbeeldingen en CBZ is precies daarvoor ontworpen. Download CBZ (of CBR) wanneer het beschikbaar is voor comics en manga.

**Hoe converteer ik CBR naar CBZ?**
CBR en CBZ bevatten identieke afbeeldingsbestanden — alleen de container verschilt. Je kunt ze opnieuw archiveren: extraheer de CBR, selecteer alle afbeeldingen, comprimeer ze naar ZIP en hernoem het bestand van .zip naar .cbz. Het tabblad Tools van BiblioFuse kan ook CBR-naar-CBZ-conversie direct op iPhone uitvoeren.

**Waarom is mijn CBZ-bestand zo groot?**
Grote CBZ-bestanden bevatten meestal hoge-resolutie PNG-afbeeldingen, die verliesvrij en opslagintensief zijn. Converteren naar WebP op 80% kwaliteit reduceert de bestandsgrootte doorgaans met 75–88% zonder zichtbare verandering op een telefoon- of tabletscherm. BiblioFuse's ingebouwde compressietool regelt dit op het apparaat.
