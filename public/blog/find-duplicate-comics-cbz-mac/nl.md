# Hoe Vind en Verwijder Je Dubbele CBZ Stripbestanden op Mac

Comic Duplicate Scanner vindt dubbele CBZ-, CBR- en striparchief-bestanden op Mac via perceptuele hashing, waardoor bestanden worden herkend zelfs na hernoemen, opnieuw comprimeren of herverpakken. Scan je volledige bibliotheek, bekijk overeenkomende paren naast elkaar en verplaats duplicaten veilig naar de Prullenmand zonder originelen te riskeren.

## Waarom Dubbele Strips Moeilijker te Vinden Zijn Dan Je Denkt

Een digitale stripbibliotheek verzamelt duplicaten op manieren die standaard vergelijkingen op bestandsnaam of bestandsgrootte omzeilen. Je downloadt een CBZ van één bron, en later download je wat een andere uitgave lijkt te zijn — maar het bevat dezelfde gescande pagina's, herverpakt met een andere bestandsnaam. Een fan-vertaling wordt opnieuw uitgebracht met een iets andere afbeeldingscodering. Een back-upschijf van drie jaar geleden wordt samengevoegd met de hoofdbibliotheek, waarbij dezelfde bestanden met andere tijdstempels binnenkomen.

Standaard tools voor duplicaten vergelijken bestandshashes — elke wijziging, zelfs hernoemen of een commentaartag toevoegen, produceert een andere hash en het duplicaat blijft onopgemerkt. Een perceptuele hash werkt anders: het analyseert de visuele inhoud van de afbeeldingen in het archief en maakt een vingerafdruk op basis van wat je ziet, niet de exacte bytes.

Comic Duplicate Scanner gebruikt perceptuele hashing om stripduplicaten te vinden die geen enkel ander programma opvangt.

## Hoe Werkt Perceptuele Hashing voor Strips?

Wanneer Comic Duplicate Scanner een CBZ of CBR scant, opent het het archief, bemonstert de afbeeldingen erin en berekent een perceptuele hash voor elk. Deze hashes leggen de visuele structuur vast — de vormen, contrastpatronen en lay-out — zonder afhankelijk te zijn van exacte pixelwaarden.

Twee CBZ-bestanden met dezelfde pagina's produceren overeenkomende hashes zelfs als:
- De bestandsnamen volledig verschillend zijn
- De archieven opnieuw zijn gecomprimeerd met verschillende kwaliteitsinstellingen
- Het ene bestand metadatatags heeft die het andere niet heeft
- De volgorde van de pagina's verschilt tussen uitgaven

Dit maakt Comic Duplicate Scanner het juiste hulpmiddel voor het soort duplicaten dat een stripbibliotheek opeenstapelt na jaren van downloaden uit meerdere bronnen.

## Hoe Vind Je Dubbele CBZ-bestanden op Mac

### Stap 1: Download en Start Comic Duplicate Scanner

[Comic Duplicate Scanner](/nl/archive/) is beschikbaar in de Mac App Store. Installeer het en open het vanuit Programma's.

### Stap 2: Voeg Je Stripbibliotheekmap Toe

Sleep je strippenmap naar het venster van Comic Duplicate Scanner, of gebruik de knop Map toevoegen om te bladeren. Je kunt meerdere locaties tegelijk scannen — je hoofdbibliotheek, een externe schijf en een back-uplocatie allemaal tegelijk.

### Stap 3: Start de Scan

Klik op Scannen. Comic Duplicate Scanner opent elke CBZ en CBR, bemonstert de afbeeldingen en berekent perceptuele hashes. Een bibliotheek van 1.000 strips is doorgaans binnen enkele minuten klaar op een moderne Mac.

### Stap 4: Bekijk Overeenkomende Paren

Na het scannen toont Comic Duplicate Scanner gedetecteerde duplicaatgroepen. Elke groep laat overeenkomende archieven naast elkaar zien met bestandsnamen, bestandsgrootten, wijzigingsdatums en mappaden. Je kunt de omslagafbeelding bekijken of elk archief openen ter bevestiging.

### Stap 5: Automatisch Selecteren Welke Kopie Bewaard Wordt

De automatische selectiestrategie van Comic Duplicate Scanner kiest welk bestand bewaard wordt op basis van je geconfigureerde regels: behoud het grotere bestand (waarschijnlijk betere kwaliteit), behoud het bestand in een voorkeursmap (je hoofdbibliotheek) of behoud de meest recent gewijzigde kopie. Je kunt ook handmatig de te bewaren versie in elke groep selecteren.

### Stap 6: Verplaats Duplicaten naar de Prullenmand

Klik op Duplicaten verwijderen (of Naar Prullenmand verplaatsen). Comic Duplicate Scanner verwijdert nooit definitief bestanden — het verplaatst ze alleen naar de Prullenmand. Bekijk ze daar voordat je leegt, indien nodig.

## Automatische Selectiestrategieën voor Grote Bibliotheken

Als je met 200 duplicaatgroepen werkt, is het niet praktisch om ze allemaal handmatig te bekijken. De automatische selectiestrategieën van Comic Duplicate Scanner automatiseren de beslissing:

**Bewaar het grootste bestand:** Grotere CBZ-archieven bevatten gewoonlijk afbeeldingen van hogere kwaliteit. Deze strategie bewaart automatisch de betere versie.

**Bewaar het bestand in een voorkeursmap:** Als je hoofdbibliotheek in `~/Comics` staat maar duplicaten op een back-upschijf staan, vertel Comic Duplicate Scanner altijd de voorkeur te geven aan de `~/Comics`-kopie. De back-upkopie wordt gemarkeerd voor verwijdering.

**Bewaar het meest recent gewijzigde:** Handig wanneer een nieuwer bestand een gecorrigeerde of bijgewerkte versie is van dezelfde scangroep.

Nadat automatisch selecteren is uitgevoerd, bekijk je de gemarkeerde selecties nog één keer voordat je bevestigt. Comic Duplicate Scanner verwijdert nooit zonder je expliciete bevestiging.

## Hoe Helpt Fuzzy Bestandsnaammatching?

Naast perceptuele hashing gebruikt Comic Duplicate Scanner ook fuzzy bestandsnaammatching om waarschijnlijke duplicaten al vóór de beeldanalyse te identificeren. Bestanden zoals `One-Punch-Man-v01.cbz` en `One_Punch_Man_Vol_1.cbz` worden gemarkeerd als potentiële overeenkomsten.

Deze tweelaagsaanpak — fuzzy bestandsnaammatching plus perceptuele hashbevestiging — vangt duplicaten op die voor een mens voor de hand liggend zijn maar onzichtbaar voor tools die vertrouwen op exacte string- of byte-vergelijking.

## Veelgestelde Vragen

**Hoe vind ik dubbele CBZ-bestanden op Mac?**
Gebruik Comic Duplicate Scanner. Voeg je strippenmap toe, klik op Scannen en de app identificeert dubbele CBZ- en CBR-bestanden via perceptuele hashing. Het herkent bestanden ook na hernoemen of opnieuw comprimeren, en laat je vervolgens duplicaten veilig naar de Prullenmand verplaatsen.

**Kan Comic Duplicate Scanner duplicaten vinden als de bestandsnamen verschillend zijn?**
Ja. Comic Duplicate Scanner gebruikt perceptuele hashing op de afbeeldingen in CBZ-archieven. Als twee archieven dezelfde gescande pagina's bevatten, worden ze gemarkeerd als duplicaten, ongeacht bestandsnaam, bestandsgrootte of metadata.

**Verwijdert Comic Duplicate Scanner bestanden definitief?**
Nee. Comic Duplicate Scanner verplaatst bestanden alleen naar de Prullenmand. Je kunt ze bekijken en herstellen voordat je leegt — het is veilig te gebruiken voor een bibliotheek van elke omvang.

**Welke stripformaten ondersteunt Comic Duplicate Scanner?**
Comic Duplicate Scanner ondersteunt CBZ- en CBR-striparchieven. Het scant ook fotobestanden (JPEG, PNG, HEIC, WebP, RAW) en standaard ZIP/RAR-archieven.

**Hoe lang duurt het scannen van een grote stripbibliotheek?**
De scansnelheid hangt af van de bibliotheekgrootte en je Mac. Een bibliotheek van 1.000 CBZ-bestanden is doorgaans binnen enkele minuten klaar. Apple Silicon Macs scannen aanzienlijk sneller dan Intel Macs bij grote collecties.

**Werkt Comic Duplicate Scanner met meerdere schijven?**
Ja. Voeg elk gemount station of map toe als scanlocatie. Comic Duplicate Scanner vergelijkt bestanden op meerdere schijven tegelijk — ideaal voor het vinden van duplicaten tussen je hoofdbibliotheek en een back-upschijf.

## Bouw een Overzichtelijkere Bibliotheek in Één Middag

Dubbele strips verspillen opslagruimte, maken je bibliotheekweergave rommelig en bemoeilijken de organisatie na verloop van tijd. Comic Duplicate Scanner neemt het moeilijke deel over — het detecteren van visueel identieke archieven ongeacht bestandsnaam — en biedt je een veilig pad om op te ruimen via alleen de Prullenmand. Vind **Comic Duplicate Scanner** in de Mac App Store om vandaag nog je eerste scan uit te voeren. Zodra je bibliotheek opgeruimd is, gebruik je [BiblioFuse](/nl/) om je stripverzameling te lezen en te organiseren op iPhone en Mac.

[Comic Duplicate Scanner](/nl/archive/) — beschikbaar in de Mac App Store en Microsoft Store.
