# Dubbele foto's vinden op Mac — inclusief HEIC, WebP en RAW

[Archive Duplicate Scanner](/nl/archive/) vindt dubbele foto's op Mac met behulp van perceptuele hashing, een techniek die visueel identieke afbeeldingen herkent ook als ze verschillende bestandsnamen, indelingen of compressie-instellingen hebben. De app ondersteunt HEIC, WebP, JPEG, PNG, TIFF, RAW en tientallen andere indelingen. De app is beschikbaar voor Mac en Windows en verplaatst duplicaten veilig naar de Prullenmand in plaats van ze permanent te verwijderen.

## Het probleem met fotobibliotheken die grenzeloos groeien

Je Mac-fotobibliotheek leek vijf jaar geleden nog overzichtelijk. Nu bevat ze 40.000 bestanden verspreid over een map Downloads, een back-upschijf en drie iCloud-exports. Je hebt dezelfde landschapsfoto opgeslagen als `IMG_4521.HEIC`, `IMG_4521-edited.JPG` en `landscape-final.webp`. Je hebt RAW-bursts waarbij 11 bijna identieke frames de selectie hebben overleefd. En elke bibliotheekmigratie — van iPhoto naar Apple Foto's naar een nieuwe Mac — liet weer een nieuwe laag duplicaten achter.

Ingebouwde tools kunnen je niet helpen. Apple Foto's heeft een eenvoudige duplicatenzoeker voor foto's die al in de bibliotheek staan, maar mist bestanden die verspreid zijn over de Finder. Spotlight vergelijkt geen afbeeldingsinhoud. Standaard duplicatenopsporing vergelijkt byte-voor-byte hashes en faalt zodra twee bestanden een andere JPEG-compressie hebben of een bestand opnieuw is geëxporteerd.

## Waarom vindt perceptuele hashing dubbele foto's in elk formaat?

Perceptuele hashing kijkt naar hoe een afbeelding *eruitziet*, niet naar wat de bytes zeggen. Archive Duplicate Scanner berekent een compacte visuele vingerafdruk voor elke foto. Twee afbeeldingen die er voor het menselijk oog identiek uitzien, produceren dezelfde (of een zeer vergelijkbare) vingerafdruk — ook als de ene HEIC is en de andere JPEG, ook als de ene opnieuw is geëxporteerd op 85% kwaliteit, en zelfs als iemand de naam van het bestand heeft gewijzigd.

Dit is het belangrijkste verschil met een generieke deduplicator. Een generiek hulpmiddel vergelijkt SHA-256-hashes — alleen byte-voor-byte identiek. Perceptuele hashing herkent afbeeldingen die visueel hetzelfde zijn maar technisch gezien verschillende bestanden zijn.

## Hoe vind je dubbele foto's op Mac — stap voor stap

1. **Download en open Archive Duplicate Scanner** via de Mac App Store of de website van de ontwikkelaar.
2. **Voeg je fotomappen toe** — sleep je exportmap van de Foto's-bibliotheek, je map Downloads en eventuele externe schijven die je wilt scannen. Je kunt meerdere mappen in één scan toevoegen.
3. **Voer de scan uit** — de app gebruikt perceptuele hashing om een vingerafdruk te maken van elke ondersteunde afbeelding. Een bibliotheek met 10.000 foto's is doorgaans klaar in minder dan twee minuten op een Mac met M-chip.
4. **Bekijk de groepen** — duplicaten verschijnen gegroepeerd. Elke groep toont de bestandsnaam, het formaat, de bestandsgrootte, de afmetingen en een visuele miniatuur zodat je de overeenkomst kunt bevestigen.
5. **Kies je verwijderstrategie** — Archive Duplicate Scanner biedt automatische selectiestrategieën: het grootste bestand bewaren (hoogste kwaliteit), het oudste bewaren (het origineel) of het bestand in een voorkeurmap bewaren. Je kunt ook handmatig selecteren.
6. **Naar Prullenmand verplaatsen** — de app verwijdert bestanden nooit permanent. Geselecteerde duplicaten worden naar de Mac-Prullenmand verplaatst zodat je alles wat per ongeluk is verwijderd kunt herstellen.

## Welke fotoformaten worden ondersteund?

Archive Duplicate Scanner ondersteunt elk formaat dat een Mac-fotograaf tegenkomt:

- **HEIC / HEIF** — het standaardformaat van de iPhone, inclusief HDR- en Portretmodus-bestanden
- **JPEG / JPG** — het universele formaat, inclusief re-exports en bewerkte versies
- **WebP** — steeds vaker voorkomend bij downloads van sociale media en webscreenshots
- **PNG** — verliesvrije schermafbeeldingen en grafische bestanden
- **TIFF** — hoogwaardige scans en gelaagde exports
- **RAW-indelingen** — Canon CR2/CR3, Nikon NEF, Sony ARW, Fujifilm RAF, Adobe DNG en meer
- **CBZ / CBR** — comic-archieven worden ook ondersteund naast foto's

De functie voor vage bestandsnaamovereenkomst vindt groepen zoals `vakantie-2023.jpg`, `vakantie-2023(1).jpg` en `vakantie-2023-kopie.jpg` in seconden, zelfs voordat de visuele hash-vergelijking wordt uitgevoerd.

## Drie praktische gebruiksscenario's

**1. Opschonen na migratie**
Na elke Mac-migratie kopieert Apple's Migratie-assistent bestanden maar dedupliceert ze niet. Als je meerdere keren tussen Macs bent gewisseld, heb je waarschijnlijk twee of drie kopieën van je oudste foto's. Voer Archive Duplicate Scanner uit op je thuismap om ze allemaal te vinden.

**2. RAW + JPEG-paren**
Veel camera's — en de ProRAW-modus van de iPhone — slaan tegelijkertijd een RAW- en een JPEG-bestand op. Na het bewerken in Lightroom of Capture One heb je de originele JPEG vaak niet meer nodig. Archive Duplicate Scanner groepeert RAW-bestanden met hun JPEG-tegenhangers zodat je de overbodige bestanden kunt opruimen zonder handmatig op datum te sorteren.

**3. Ophoping van downloads van sociale media**
Jaren lang Instagram-screenshots en gedownloade foto's opslaan resulteert in tientallen kopieën van dezelfde afbeelding op verschillende resoluties. Perceptuele hashing detecteert ze allemaal, zelfs als de bestandsnamen willekeurige reeksen cijfers zijn.

## Veelgestelde vragen

### Verwijdert Archive Duplicate Scanner foto's permanent?

Nee. De app verplaatst bestanden naar de Mac-Prullenmand. Er wordt niets permanent verwijderd totdat je de Prullenmand zelf leegt. Dit geeft je een volledig veiligheidsnet om alles te herstellen wat per ongeluk is verwijderd.

### Kan het duplicaten vinden tussen verschillende indelingen, zoals HEIC en JPEG?

Ja. Perceptuele hashing vergelijkt visuele inhoud, niet bestandsbytes. Een foto opgeslagen als HEIC en opnieuw geëxporteerd als JPEG wordt als duplicaat gedetecteerd, ook al zijn de bestandsindelingen en byte-inhoud volledig verschillend.

### Hoe lang duurt een scan van een grote bibliotheek?

Op een Apple Mac met M-chip is een bibliotheek van 10.000 foto's doorgaans klaar in minder dan twee minuten. Bibliotheken van 50.000+ foto's duren 5 tot 10 minuten afhankelijk van de schijfsnelheid en bestandsindeling. HEIC-bestanden met HDR-metadata duren iets langer om te decoderen.

### Vindt het ook bijna-identieke RAW-burst-opnames?

Ja, met de similariteitsdrempel ingesteld op een hogere gevoeligheid. Burst-opnames van dezelfde scène lijken bijna identiek en produceren zeer vergelijkbare perceptuele hashes. Je kunt de gevoeligheid aanpassen zodat de scanner ze groepeert, waarna je alleen het scherpste frame behoudt.

### Werkt het met externe schijven en netwerkopslag?

Ja. Je kunt elke map toevoegen die toegankelijk is in de Finder — interne schijven, externe USB-schijven, SD-kaarten of via een netwerk gemounte volumes. De scan wordt lokaal op je Mac uitgevoerd; er worden geen bestanden naar een server geüpload.

### Is Archive Duplicate Scanner beschikbaar voor Windows?

Ja. Archive Duplicate Scanner is beschikbaar voor zowel Mac als Windows. De Windows-versie heeft dezelfde perceptuele hashing-engine en ondersteunt dezelfde bestandsindelingen.

## Herstel je opslagruimte — zonder risico

Een bibliotheek van 40.000 foto's met 30% duplicaten verspilt tientallen gigabytes aan opslagruimte. Archive Duplicate Scanner geeft je de tools om deze veilig op te schonen — perceptuele hashing die visuele duplicaten over indelingen heen detecteert, automatische selectiestrategieën die het giswerk wegnemen, en verwijdering uitsluitend naar de Prullenmand die je beschermt.

[Download Archive Duplicate Scanner](/nl/archive/) en start vandaag nog je eerste scan. Als je ook je fotocollecties wilt comprimeren of batchgewijs wilt converteren, verwerkt de [BiblioFuse-webtool](/nl/webapp/) EPUB-, CBZ- en PDF-bestanden volledig in je browser.
