# PDF naar CBZ omzetten online (zonder software, zonder upload)

Je hebt een gescande graphic novel als PDF gedownload. In Preview of Acrobat opent het prima, maar in je strippenlezer klopt er iets niet: pagina's laden traag, zoomen wordt wazig en bladeren gaat niet zo snel als het zou moeten. Je weet dat CBZ beter werkt voor strips. Het probleem is converteren zonder nóg een desktopprogramma te installeren of je bestanden naar een onbekende website te sturen.

De [BiblioFuse Web Tool](/nl/webapp/) lost dit op in je browser. Geen account. Geen upload. Geen installatie. Je bestanden verlaten je apparaat op geen enkel moment.

## Waarom PDF slecht werkt voor strips

PDF is ontworpen voor documenten — tekstrijke opmaken bedoeld voor de drukpers. Lettertypen, vectorafbeeldingen en tekstomloop gaan er uitstekend in. Daar is het voor gemaakt.

Strips werken anders. Een gescande strip bestaat uit een reeks volledige pagina-afbeeldingen, één per pagina. PDF verpakt die afbeeldingen in een interne structuur die het bestand groter maakt zonder iets toe te voegen, gebruikt een paginaweergave-engine die trager is dan een dedicated afbeeldingskijker, en verhindert dat strippenreaders pagina's vooraf in de cache kunnen plaatsen.

CBZ is een ZIP-archief met een genummerde reeks afbeeldingsbestanden. Nauwelijks overhead. Strippenreaders decomprimeren afbeeldingen vooraf, slaan ze op in het geheugen en bladeren er direct doorheen. Zoomkwaliteit wordt volledig bepaald door het afbeeldingsbestand zelf, niet door een engine die een documentformaat probeert te verwerken.

Als je een PDF-strip naar CBZ converteert, extraheer je de ruwe pagina-afbeeldingen uit de PDF en verpak je ze opnieuw als een ZIP. Het resultaat is een bestand waar je strippenreader specifiek voor is gebouwd.

## Wat de BiblioFuse Web Tool doet

De [BiblioFuse Web Tool](/nl/webapp/) draait volledig in WebAssembly in je browser. WebAssembly voert gecompileerde code uit in een sandbox-omgeving, waardoor de app intensieve bestandsverwerking kan doen — het soort werk dat normaal voor native desktopsoftware is voorbehouden — zonder iets naar een server te sturen.

Je bestanden worden vanaf je lokale schijf rechtstreeks in het browsergeheugen ingelezen. De conversie vindt plaats in het browsertabblad. Het uitvoerbestand wordt teruggeschreven naar je schijf. Niets gaat op enig moment via een server.

Dit is belangrijk als je strips gelicentieerde inhoud bevatten, privéarchieven, of bestanden die je simpelweg niet in iemand anders z'n cloud wilt opslaan.

## Hoe je PDF naar CBZ converteert

**Stap 1: Open de tool**

Ga naar de [BiblioFuse Web Tool](/nl/webapp/) in een desktopbrowser — Chrome, Firefox, Safari of Edge. Geen login of account vereist. Met de gratis versie kun je tot drie bestanden tegelijk verwerken.

**Stap 2: Voeg je PDF-bestanden toe**

Klik op de dropzone of sleep je PDF-bestanden er direct naartoe. Je kunt meerdere bestanden tegelijk toevoegen. De tool toont elk bestand met naam en gedetecteerde grootte. Als een bestand te groot is voor het beschikbare geheugen van je browser, verschijnt er een waarschuwing voordat de verwerking begint.

**Stap 3: Kies CBZ als uitvoerformaat en converteer**

Kies CBZ als uitvoerformaat in de conversieopties. Klik op Converteren. De tool verwerkt elk bestand achtereenvolgens, extraheert de pagina-afbeeldingen uit de PDF en verpakt ze in een CBZ-archief. Een voortgangsindicator laat zien hoe ver je bent. Als de conversie klaar is, verschijnen je uitvoerbestanden klaar om te downloaden.

Gedownloade bestanden behouden dezelfde naam als de originelen, waarbij `.pdf` is vervangen door `.cbz`.

## Beeldkwaliteit tijdens conversie

Dit is de vraag die het vaakst opkomt, en het antwoord hangt af van hoe je bron-PDF is gemaakt.

**Gescande PDF's:** Dit is het meest voorkomende geval voor oudere strips en mangavolumes. De PDF bevat gescande afbeeldingen die er direct in zijn opgeslagen. De conversie extraheert ze zonder ze opnieuw te coderen. De afbeeldingen in je CBZ zijn identiek aan die in de PDF — geen kwaliteitsverlies, geen extra compressie.

**Gegenereerde PDF's:** Sommige PDF's worden gemaakt van vectorillustraties of op tekst gebaseerde opmaken. Deze naar CBZ converteren rasteriseert elke pagina op een vaste resolutie. De [BiblioFuse Web Tool](/nl/webapp/) gebruikt standaard een hoge resolutie, zodat resultaten scherp ogen bij normale leeszoomniveaus.

**Vooraf gecomprimeerde PDF's:** Als er bij het aanmaken van de PDF al zware JPEG-compressie is toegepast, weerspiegelen de geëxtraheerde afbeeldingen die bestaande compressie. De tool voegt geen extra compressie toe, maar kan ook geen compressie ongedaan maken die er al ingebakken zit.

Voor gescande strips — het meest voorkomende conversiescenario — krijg je verliesvrije extractie. De CBZ is doorgaans even groot als de PDF of iets kleiner, zonder kwaliteitsverandering.

## Een serie in bulk converteren

Als je een serie hebt die meerdere PDF-volumes omvat, kun je met de [BiblioFuse Web Tool](/nl/webapp/) de hele batch in één sessie converteren. Voeg al je PDF-bestanden tegelijk toe, stel het doel in op CBZ en start. Elk bestand wordt verwerkt en is afzonderlijk beschikbaar om te downloaden zodra het klaar is.

De gratis versie verwerkt tot drie bestanden per batch. Voor een langere serie voer je meerdere batches uit in dezelfde browsersessie — je hoeft de pagina niet opnieuw te laden tussen batches.

## CBZ-bestanden na conversie naar je telefoon overzetten

Zodra de conversie klaar is en je je CBZ-bestanden hebt gedownload, zijn er een paar handige manieren om ze op je telefoon te krijgen:

**Wi-Fi-overdracht (snelste optie):** Als je BiblioFuse op je iPhone gebruikt, kun je met de ingebouwde [Wi-Fi-overdracht-functie](/nl/) bestanden vanuit een browservenster op een computer op hetzelfde netwerk slepen. Open BiblioFuse, activeer Wi-Fi-overdracht en sleep je CBZ-bestanden vanuit je Mac of pc-browser rechtstreeks in de bibliotheek. Geen USB-kabel, geen iTunes, geen cloudopslag.

**iCloud Drive:** Zet de bestanden in een iCloud Drive-map die is gekoppeld aan BiblioFuse, en ze synchroniseren automatisch zodra je telefoon verbonden is met Wi-Fi.

**AirDrop:** Selecteer op een Mac je CBZ-bestanden in Finder, klik met de rechtermuisknop en stuur ze via AirDrop naar je iPhone. Tik op "Open in BiblioFuse" als de overdracht klaar is.

## Veelgestelde vragen

**Kan de tool PDF's verwerken die zowel afbeeldingen als tekstlagen bevatten?**

Ja. PDF's met een gescande afbeeldingslaag plus een OCR-tekstoverlay worden correct verwerkt — de tool extraheert de visuele pagina-afbeeldingen. De tekstlaag wordt niet meegenomen naar CBZ (CBZ is by design een afbeeldingsarchief-formaat), maar je originele PDF blijft ongewijzigd.

**Wat is de maximale bestandsgrootte?**

De tool hanteert geen vaste maximale bestandsgrootte. De praktische limieten hangen af van het beschikbare geheugen van je browser. De meeste desktopbrowsers verwerken bestanden van meerdere gigabytes zonder problemen. Zeer grote bestanden op oudere hardware kunnen traag zijn, maar worden doorgaans wel afgerond.

**Werkt het op mobiele browsers?**

Ja, maar de prestaties zijn merkbaar trager dan op een desktop. Voor grote PDF's wordt een desktopbrowser aangeraden.

**Is er een paginanummerlimiet?**

Nee. De tool verwerkt hoeveel pagina's de PDF ook bevat.

**Welk afbeeldingsformaat gebruikt de CBZ?**

De CBZ bevat het afbeeldingsformaat dat in de bron-PDF was opgeslagen. Bij gescande strips is dat meestal JPEG. De tool hercoört afbeeldingen niet tijdens de conversie, tenzij je compressie als afzonderlijke stap hebt ingeschakeld.

## Een compleet werkproces: van PDF naar telefoon

De [BiblioFuse Web Tool](/nl/webapp/) verzorgt de conversie van PDF naar CBZ zonder softwareinstallatie, cloudaccount of bestandsupload. Je bestanden blijven gedurende het hele proces op jouw apparaat.

In combinatie met BiblioFuse op iPhone of iPad heb je een naadloos werkproces van begin tot eind: converteren in de browser, Wi-Fi-overdracht naar je telefoon, lezen in de app. Je hebt geen aparte strippenmanager voor de desktop nodig, geen synchronisatiedienst, geen tussenstap.

Als je een map met PDF-strips hebt die je al een tijdje wilt converteren, open dan nu de [BiblioFuse Web Tool](/nl/webapp/) en gooi de eerste batch erin.
