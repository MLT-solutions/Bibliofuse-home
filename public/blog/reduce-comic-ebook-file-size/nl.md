# Waarom comic- en ebook-bestanden zo groot zijn — en hoe je dat oplost

Je kopieert een mangaserie van 50 delen naar je iPhone en ziet 20 gigabyte aan opslagruimte verdwijnen. Of je downloadt één CBZ-bestand en het is al 400 MB voor één deel. Waar gaat al die ruimte naartoe?

Het antwoord zit in het bestandsformaat — en als je dat eenmaal begrijpt, is het probleem in minder dan een minuut opgelost.

## CBZ en EPUB: allebei verkapte ZIP-archieven

Een CBZ-bestand is een ZIP-archief met een andere extensie. Hernoem een `.cbz` naar `.zip`, pak het uit en je vindt een map met afbeeldingen in leesvolgorde — `001.png`, `002.png`, enzovoort. CBR-bestanden werken hetzelfde maar gebruiken RAR in plaats van ZIP. Geen propriëtaire codering, geen geheimen: gewoon afbeeldingen in een container.

EPUB is structureel vergelijkbaar. Hernoem een `.epub` naar `.zip`, pak het uit en je vindt HTML-bestanden (de hoofdstuktekst), CSS-stylesheets, metadata en ingebedde afbeeldingen — omslagafbeelding, illustraties en foto's. EPUB is een open W3C-standaard die door alle grote lees-apps wordt ondersteund.

Beide formaten zijn goed ontworpen voor hun doel. Het grootteprobleem zit niet in de container — maar in wat erin is gestopt.

## Waarom PNG-afbeeldingen zoveel opslagruimte innemen

De meeste scancommunities en ebook-uitgevers gebruiken standaard PNG omdat het verliesvrij is: elk pixel in het opgeslagen bestand is identiek aan het originele beeld. Die nauwkeurigheid heeft een prijs.

Een hoge-resolutie comicpagina — doorgaans 1800 × 2700 pixels in 24-bits kleur — weegt 2 MB of meer als PNG. De meeste mangadelen bevatten 180 tot 220 pagina's. De opslagkosten lopen snel op:

| Volumeformaat | Pagina's | Grootte per pagina | Totale grootte |
|--------------|---------|-------------------|---------------|
| PNG (verliesvrij) | 200 | ~2 MB | **~400 MB** |
| WebP (gecomprimeerd) | 200 | ~250 kB | **~50 MB** |
| Opgeslagen ruimte | | | **87,5%** |

Over een lange serie: een mangabibliotheek van 50 delen in PNG neemt zo'n **20 GB** in beslag. Diezelfde serie gecomprimeerd naar WebP past in **2,5 GB** — een besparing van **17,5 GB** voor één enkele serie.

## Wat WebP beter maakt

WebP is een afbeeldingsformaat van Google dat veel kleinere bestanden oplevert dan PNG, en kleiner dan JPEG bij vergelijkbare kwaliteit. Bij een gemiddelde kwaliteitsinstelling (rond 80–85%) is het visuele verschil met de PNG-bron niet zichtbaar op een telefoon- of tabletscherm. Comics en manga comprimeren bijzonder goed omdat de meeste panels vlakke kleuren en heldere lijnen gebruiken.

Alle moderne iPhones, iPads en Android-apparaten tonen WebP native. Je offert geen weergavekwaliteit op voor opslag — je slaat gewoon dezelfde visuele informatie efficiënter op.

## Waarom BiblioFuse compressie in de app heeft ingebouwd

De gebruikelijke aanpak — bestanden eerst op een computer converteren voordat je ze op je telefoon laadt — werkt in theorie, maar schept drempels. Je hebt een batchconversietool nodig, de juiste instellingen, een manier om de ZIP opnieuw in te pakken en dan nog een importstap. In de praktijk slaan de meeste lezers dit over en leven met overvolle bibliotheken.

BiblioFuse's **Samenvoegen en comprimeren** verwijdert al die drempels. De conversie vindt volledig op het apparaat plaats — er wordt niets geüpload of verzonden. Selecteer de boeken, kies een kwaliteitsniveau, en BiblioFuse doet de rest: elke afbeelding extraheren, opnieuw coderen als WebP, en een nieuw gecomprimeerd CBZ of EPUB samenstellen.

**Een boek comprimeren:**
1. Houd een omslagafbeelding in je bibliotheek ingedrukt en tik op **Comprimeren**.
2. Pas de kwaliteitsschuifregelaar aan — de standaardinstelling biedt een goede balans voor de meeste comics.
3. Tik op **Comprimeren**. Het origineel wordt vervangen zodra de taak klaar is.

**Een serie samenvoegen:** houd ingedrukt om meerdere CBZ-bestanden te selecteren, tik dan op **Samenvoegen**. BiblioFuse combineert ze in leesvolgorde en comprimeer het resultaat in één keer.

De [BiblioFuse Webtool](/nl/webapp) biedt dezelfde compressie en samenvoeging in elke browser — geen installatie nodig. Ideaal als je op een Windows- of Linux-machine zit zonder de iOS- of Mac-app.

## Hoeveel ruimte kun je echt terugwinnen?

De 87,5% kan abstract klinken totdat je het ziet op je eigen bibliotheek:

| Collectie | PNG-grootte | Na compressie | Vrijgemaakte ruimte |
|-----------|-----------|--------------|---------------------|
| Mangaserie van 10 delen | ~4 GB | ~500 MB | **3,5 GB** |
| Mangaserie van 50 delen | ~20 GB | ~2,5 GB | **17,5 GB** |
| 500 westerse comics | ~50 GB | ~6,25 GB | **43,75 GB** |
| Geïllustreerde EPUB-bibliotheek (100 boeken) | ~5 GB | ~625 MB | **4,4 GB** |

Op een iPhone van 128 GB waar elke gigabyte telt, betekent dat het verschil tussen je hele collectie meenemen of de helft thuislaten.

## Wanneer comprimeren en wanneer originelen bewaren

Compressie is onomkeerbaar: zodra PNG is vervangen door WebP in het archief, zijn de originele verliesvrije gegevens weg. Voor dagelijks lezen is dat een goede ruil — het resultaat ziet er bij normaal gebruik identiek uit. Maar als je ruwe scans archiveert voor bewaring, bewaar dan originelen op een externe schijf en comprimeer alleen de kopieën die je dagelijks gebruikt.

## Veelgestelde vragen

**Heeft compressie invloed op de leeservaring?**
Bij de standaardinstelling is het verschil niet merkbaar bij normaal lezen op een telefoon of tablet. Sterk inzoomen op fijne lijnen kan een lichte zachtheid onthullen. Voor de meeste lezers is het gecomprimeerde resultaat visueel identiek aan het origineel.

**Kan ik ook EPUB comprimeren?**
Ja. BiblioFuse verwerkt EPUB op dezelfde manier — ingebedde afbeeldingen opnieuw coderen terwijl tekst, CSS en hoofdstukstructuur onaangeroerd blijven.

**Wat als ik het origineel wil bewaren?**
Maak een kopie in de Bestanden-app voor je comprimeer — BiblioFuse vervangt het bestand ter plekke zonder automatische back-up. Je kunt ook de [BiblioFuse Webtool](/nl/webapp) gebruiken om een gecomprimeerde versie te downloaden zonder de bronbestanden aan te raken.

**Werkt compressie offline?**
Ja — het hele proces draait op je apparaat. Er is geen internetverbinding nodig en er worden geen bestanden naar een server gestuurd.
