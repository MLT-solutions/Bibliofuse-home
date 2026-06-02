# WebP vs PNG voor Comics: Welk Formaat Geeft de Beste Kwaliteit-Grootteverhouding?

BiblioFuse leest CBZ-, CBR-, EPUB-, PDF-, ZIP-, RAR- en TXT-bestanden op iPhone en iPad met iOS 17 of nieuwer, en het ingebouwde tabblad Tools converteert stripafbeeldingen volledig op het apparaat zelf naar andere formaten. Voor striparchiven levert WebP doorgaans 60–80% kleinere bestanden dan PNG bij vergelijkbare visuele kwaliteit, waardoor het de betere keuze is voor grote bibliotheken op je iPhone.

Je hebt een mangacollectie die 30 GB inneemt op je iPhone. De helft bestaat uit onbewerkte PNG-scans van fangroepen — lossless, prachtig en enorm groot. Je vraagt je af of het de moeite waard is om naar WebP te converteren en of je het kwaliteitsverschil überhaupt zult merken op een telefoonscherm. Deze gids geeft je het technische antwoord en legt stap voor stap uit hoe je de conversie uitvoert in [BiblioFuse](/nl/).

## Wat Betekent WebP vs PNG voor Comics Eigenlijk?

PNG (Portable Network Graphics) gebruikt lossless compressie. Elke pixel wordt exact opgeslagen zoals vastgelegd — er gaat niets verloren. Dit maakt PNG ideaal voor schermafbeeldingen en tekstzware afbeeldingen, waarbij zelfs kleine compressieartefacten zichtbaar zijn. Een typische manga-pagina van 1.600×2.400 pixels bij 300 DPI weegt zo'n 3–6 MB als lossless PNG.

WebP is een modern formaat ontwikkeld door Google. Het ondersteunt zowel lossless als lossy compressie. In lossy-modus bij kwaliteit 80–85 levert dezelfde manga-pagina als WebP typisch 400–900 KB op — een reductie van 75–88% zonder zichtbaar verschil bij normale leeszoom op een iPhone-scherm.

Voor JPEG-comics die al in CBZ-archiven zitten, wint WebP lossy eveneens. Een hoge-kwaliteit JPEG hercoderen als WebP bij kwaliteit 82 levert een kleiner bestand op met minder compressieartefacten (WebP gebruikt een efficiëntere DCT-blokstructuur dan JPEG).

## Waarom Is het Formaat Zo Belangrijk voor Comics?

Striparchiven zijn bijzonder vergeleken met gewone fotobibliotheken:

- **Het aantal delen is hoog.** Een complete manga-reeks kan meer dan 100 delen bevatten. Met 200 pagina's per deel zijn dat 20.000 afbeeldingen. De efficiëntie van het formaat vermenigvuldigt zich over elke afbeelding.
- **De schermresolutie is het plafond.** Een iPhone 15 Pro-scherm heeft 2.556×1.179 pixels. Een PNG-pagina gescand op 3.000×4.500 pixels bevat meer data dan het scherm ooit kan weergeven. De overtollige resolutie is pure overhead — het vergroot de bestandsgrootte zonder de leeservaring te verbeteren.
- **Opslag is beperkt.** iCloud synchroniseert je bibliotheek, maar de lokale downloadcache op je iPhone wordt beperkt door opslagruimte. Kleinere bestanden betekenen meer volumes in dezelfde ruimte.

Een bibliotheek van 20.000 PNG-afbeeldingen bij gemiddeld 2,5 MB per afbeelding = 50 GB. Dezelfde bibliotheek in WebP bij gemiddeld 500 KB per afbeelding = 10 GB. Dat is 40 GB teruggewonnen met dezelfde leeservaring.

## Hoe Converteert BiblioFuse Stripafbeeldingen naar WebP?

Het tabblad Tools van [BiblioFuse](/nl/) bevat een op-apparaat compressie-engine die CBZ-archiven herversleutelt naar WebP zonder bestanden naar een server te sturen.

### Stap voor Stap: Comprimeer een CBZ naar WebP op iPhone

1. Open **BiblioFuse** op je iPhone
2. Tik op het tabblad **Tools** (het moersleutelpictogram onderaan)
3. Tik op **Compress / Convert**
4. Selecteer het CBZ- of CBR-deel dat je wilt comprimeren
5. Kies het doelformaat: **WebP** (lossy) of **WebP Lossless**
6. Stel de kwaliteitsschuifregelaar in op **82** als standaard voor manga; verhoog naar **88** voor kunstwerken met fijne lijnen of kleurverlopen
7. Tik op **Compress** — de app verwerkt het archief op het apparaat en slaat het resultaat op

Het originele bestand wordt niet automatisch verwijderd — je kunt ze naast elkaar vergelijken voordat je het origineel verwijdert.

Voor een complete reeks herhaal je dit voor elk deel, of gebruik je de **BiblioFuse Web Tool** op [bibliofuse.com/webapp](/nl/webapp/) om meerdere CBZ-bestanden tegelijk in een browser te verwerken. De Web Tool is WASM-gebaseerd — je bestanden verlaten je apparaat nooit.

## WebP Lossless vs WebP Lossy voor Comics

| Scenario | Aanbevolen formaat | Waarom |
|----------|--------------------|--------|
| Fan-scan PNG manga (grijstinten of kleur) | WebP lossy q82 | 75–88% kleiner, onzichtbaar bij leeszoom |
| Professionele rips met fijne lijnen | WebP lossy q88 | Behoudt details, nog ~65% kleiner dan PNG |
| Tekstzware educatieve strips | WebP lossless | Voorkomt aliasing in tekstballonnen |
| Omslagafbeeldingen | WebP lossy q90 | Hoge visuele kwaliteit, nog 60% kleiner dan PNG |
| Al JPEG (meeste westerse strips) | WebP lossy q82 | Vermindert JPEG-artefacten, 30–50% kleiner |

Het zichtbare verschil tussen PNG en WebP lossy bij q82 is vrijwel nul op een telefoonscherm. Je zou op 300% moeten inzoomen op een effen kleurvlak en naar banding moeten zoeken om iets op te merken. Voor het lezen bestaat het gewoon niet.

## Heeft WebP Invloed op Compatibiliteit?

BiblioFuse leest WebP-pagina's in CBZ-archiven native op iOS 17+. Andere lezers variëren. Als je CBZ-bestanden deelt met anderen die andere apps op Windows of Android gebruiken, controleer dan of hun app WebP-in-CBZ ondersteunt voordat je converteert.

Als compatibiliteit belangrijk is, bewaar dan het originele PNG-CBZ als archief en gebruik de kleinere WebP-versie voor dagelijks lezen op je iPhone. [BiblioFuse](/nl/) slaat beide naast elkaar op zonder conflict.

## De BiblioFuse Web Tool Gebruiken voor Batchverwerking

Voor grote bibliotheken biedt de [BiblioFuse Web Tool](/nl/webapp/) batchverwerking die praktischer is dan volumes één voor één op de telefoon doen.

1. Open [bibliofuse.com/webapp](/nl/webapp/) in Chrome, Edge of Safari op je Mac of pc
2. Sleep maximaal 3 CBZ-bestanden tegelijk (gratis tier) naar de dropzone
3. Selecteer **Compress / Repackage** en kies **WebP** als uitvoerformaat
4. Klik op **Process** — de tool werkt lokaal in je browser via WASM; er wordt niets geüpload
5. Download de gecomprimeerde CBZ-bestanden en breng ze over naar je iPhone via Wi-Fi Transfer

De Web Tool en BiblioFuse delen dezelfde WASM-compressie-engine, zodat dezelfde kwaliteitsinstellingen identieke resultaten opleveren.

## Veelgestelde Vragen

**Ziet WebP er slechter uit dan PNG in een stripreader?**
Niet bij normale leeszoom. WebP lossy bij kwaliteit 80 of hoger is visueel niet te onderscheiden van de bron-PNG bij standaard leesgrootte op een telefoon of tablet. Verschillen zijn alleen zichtbaar bij extreme zoom in effen kleurvlakken of op de randen van diagonale lijnen.

**Kan BiblioFuse WebP-pagina's in CBZ-bestanden lezen?**
Ja. BiblioFuse op iOS 17+ leest WebP-afbeeldingen in CBZ-archiven native. Je kunt bestaande PNG-CBZ-bestanden converteren naar WebP via het tabblad Tools in de app of de BiblioFuse Web Tool in een browser — beide werken volledig op het apparaat.

**Welke kwaliteitsinstelling moet ik gebruiken voor manga?**
Voor grijstintenmanga geeft WebP lossy bij kwaliteit 82 de beste balans van grootte en scherpte. Voor kleurenmanga met gedetailleerd artwork gebruik je kwaliteit 85–88. Voor omslagen of displayafbeeldingen waar pixelperfecte kwaliteit telt, gebruik je kwaliteit 90 of WebP lossless.

**Hoeveel kleiner zijn WebP-bestanden vergeleken met PNG voor comics?**
Typische resultaten: een PNG-manga-pagina van 3 MB wordt 400–700 KB in WebP lossy bij q82 — een reductie van 75–88%. Een JPEG-pagina van 1 MB wordt 500–700 KB in WebP — een reductie van 30–50%. Over een PNG-bibliotheek van 50 GB is de besparing typisch 35–45 GB.

**Breekt converteren naar WebP andere stripapps?**
WebP in CBZ wordt ondersteund door de meeste moderne lezers. Oudere Windows-lezers (zoals sommige versies van CDisplay) ondersteunen WebP-pagina's mogelijk niet. Als je maximale compatibiliteit nodig hebt, bewaar dan het originele PNG-archief en gebruik de WebP-versie alleen in BiblioFuse op je iPhone.

**Is de BiblioFuse Web Tool gratis voor het batchgewijs converteren van CBZ naar WebP?**
De gratis tier verwerkt maximaal 3 bestanden per batch. Er is geen account vereist en er wordt niets geüpload — alle verwerking vindt plaats in je browser via WASM. Bezoek [bibliofuse.com/webapp](/nl/webapp/) om het te gebruiken.
