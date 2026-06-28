# CBR Omzetten naar CBZ Online: Gratis, Zonder Software

Je hebt een map vol CBR-bestanden — strips in RAR-archiefformaat — en een lezer die alleen CBZ opent. Of je archiveert je collectie en wilt een consistent, open formaat. De oplossing klinkt eenvoudig: hernoem de extensie van `.cbr` naar `.cbz`. Maar dat werkt niet.

CBR-bestanden zijn RAR-archieven. CBZ-bestanden zijn ZIP-archieven. Ze gebruiken verschillende compressie-indelingen onder de motorkap — je kunt de bestandsextensie niet zomaar hernoemen. Je moet de afbeeldingen uit het RAR-archief extraheren en ze opnieuw als ZIP inpakken. [De online converter van BiblioFuse](https://bibliofuse.com/nl/webapp/) doet dit in je browser, zonder dat er bestanden naar een server worden geüpload.

## CBR vs CBZ: Wat Is het Echte Verschil?

Zowel CBR als CBZ zijn archiefindelingen voor strips. Beide bevatten een reeks afbeeldingsbestanden (meestal JPG of PNG), die de lezer in volgorde weergeeft om het lezen van een strip te simuleren.

Het verschil zit in de onderliggende compressie:

| Indeling | Archieftype | Open standaard? |
|----------|------------|----------------|
| CBZ | ZIP | Ja |
| CBR | RAR | Nee (propriëtair) |

RAR is een propriëtair formaat ontwikkeld door Eugene Roshal. Het openen van RAR-bestanden vereist de officiële WinRAR-software of een bibliotheek die de RAR-specificatie implementeert — en die bibliotheek moet expliciet in elke lezer zijn opgenomen. Veel moderne lezers, inclusief browsergebaseerde tools, ondersteunen alleen op ZIP gebaseerde CBZ omdat de ZIP-specificatie open en breed geïmplementeerd is.

CBZ werd de de facto standaard voor digitale strips mede omdat ZIP royaltyvrij en platformonafhankelijk is. Elk besturingssysteem kan een ZIP-bestand openen zonder software van derden. Als je een collectie voor de lange termijn archiveert, is CBZ de veiligere keuze.

## Hoe de Conversie Werkt

CBR naar CBZ converteren omvat drie stappen:

1. De afbeeldingen uit het CBR (RAR-archief) extraheren
2. Die afbeeldingen in een nieuw ZIP-archief plaatsen
3. De `.zip`-extensie hernoemen naar `.cbz`

De online tool van BiblioFuse voert alle drie stappen uit in je browser met WebAssembly. Je bestanden worden nooit geüpload — extractie, hercompressie en download vinden allemaal lokaal op je apparaat plaats.

## Stap voor Stap: CBR naar CBZ Online Converteren

1. Ga naar [bibliofuse.com/nl/webapp/](https://bibliofuse.com/nl/webapp/)
2. Open de **Converteren**-tool vanuit de werkbalk.
3. Klik op **Bestanden selecteren** of sleep je `.cbr`-bestanden naar de dropzone.
4. De tool extraheert de afbeeldingen, maakt een nieuw ZIP-archief en downloadt het `.cbz`-bestand automatisch.

Voor batchconversie — meerdere CBR-bestanden tegelijk — selecteer je alle bestanden in de bestandsselecteur. Elk bestand wordt afzonderlijk verwerkt en gedownload. Er is geen rij-limiet opgelegd door de tool, hoewel zeer grote bestanden (400+ MB) langer kunnen duren afhankelijk van de verwerkingskracht van je apparaat.

## Waarom Browsergebaseerde Conversie Privé Is

De conversie wordt volledig in je browser uitgevoerd via WebAssembly (WASM). Dit is dezelfde technologie die games en video-editors in een browser laat werken zonder plugin — rekenintensief werk dat native in de browser-sandbox wordt uitgevoerd.

Wanneer je de [BiblioFuse-webtool](https://bibliofuse.com/nl/webapp/) gebruikt:

- Je CBR-bestand wordt in het browsergeheugen geladen
- De afbeeldingen worden in het geheugen geëxtraheerd
- Een nieuw ZIP-bestand wordt in het geheugen geconstrueerd
- De ZIP wordt naar je apparaat gedownload

Op geen enkel moment verlaat er data je machine. Er zijn geen serveraanroepen tijdens de conversie. Je kunt dit verifiëren door de netwerkinspector van je browser te openen (F12 → Netwerk): de enige aanvragen zijn de initiële paginalading. Er verschijnen geen uploads.

Dit is belangrijk als je stripverzameling gelicentieerde inhoud, persoonlijke scans of iets anders bevat dat je liever niet naar een server van derden upload.

## CBR-Bestanden Converteren op iPhone of iPad

De BiblioFuse-webtool werkt ook op mobiele browsers. Ga naar [bibliofuse.com/nl/webapp/](https://bibliofuse.com/nl/webapp/) in Safari of Chrome op iPhone of iPad.

Op iOS tik je op **Bestanden selecteren** en navigeer je naar je CBR-bestanden in de Bestanden-app, iCloud Drive, of een verbonden cloudstorage-provider. Gedownloade CBZ-bestanden gaan naar je Downloadmap, vanwaar je ze direct in [BiblioFuse](https://bibliofuse.com/nl/) kunt delen om te lezen.

## Na de Conversie: CBZ-Bestanden Lezen in BiblioFuse

BiblioFuse op iPhone leest CBZ-bestanden native — geen verdere conversie nodig. Om je geconverteerde bestanden te lezen:

1. Converteer CBR naar CBZ met de webtool op je Mac of iPhone.
2. Zet de CBZ-bestanden over naar je iPhone via Wi-Fi Transfer of AirDrop.
3. Importeer in BiblioFuse door de bestanden in de Bestanden-app te selecteren en te delen naar de app.

Opmerking: BiblioFuse leest ook CBR-bestanden direct op iPhone — het verwerkt RAR-extractie native. De voornaamste reden om te converteren is als je bestanden archiveert, deelt met anderen, of een ander tool in je workflow gebruikt dat specifiek CBZ vereist.

## Veelgestelde Vragen

**Kan ik meerdere CBR-bestanden tegelijk converteren?**

Ja. Selecteer alle CBR-bestanden in de bestandsselecteur en de tool verwerkt ze allemaal. Bestanden worden afzonderlijk gedownload — je krijgt één `.cbz` per `.cbr`. Als je ze daarna wilt samenvoegen tot één volume, gebruik dan de CBZ-samenvoeg-tool.

**Verandert de beeldkwaliteit tijdens de conversie?**

Nee. De afbeeldingen in het archief worden niet opnieuw gecodeerd. De conversie extraheert de originele JPG- of PNG-bestanden en plaatst ze in een nieuwe ZIP zonder de afbeeldingsdata aan te raken. De geconverteerde CBZ is pixelidentiek aan de originele CBR.

**Wat als het CBR-bestand met een wachtwoord is beveiligd?**

Met een wachtwoord beveiligde CBR-bestanden kunnen niet worden geopend zonder het wachtwoord. De webtool kan wachtwoordbeveiliging niet omzeilen. Als je CBR versleuteld is, ontgrendel het dan eerst — SmartDecrypt kan met wachtwoord beveiligde CBZ-, PDF- en ZIP-bestanden op iPhone en Mac in batches ontgrendelen.

**Mijn CBR-bestand is geconverteerd maar de CBZ opent niet — wat is er gebeurd?**

Sommige bestanden gelabeld als `.cbr` zijn eigenlijk ZIP-archieven (hernoemd van `.cbz` of gemaakt door software die standaard ZIP gebruikt). Als de conversie een bestand produceert dat je lezer niet kan openen, probeer dan het originele `.cbr` te hernoemen naar `.zip` en controleer of het al een ZIP-archief is. Mogelijk hoef je het alleen maar direct naar `.cbz` te hernoemen zonder conversie.

**Is er een bestandsgroottelimiet?**

Er bestaat geen door de server opgelegde limiet omdat er nooit een bestand wordt geüpload. De praktische limiet is het beschikbare RAM van je apparaat — zeer grote CBR-bestanden (1 GB+) kunnen de browser vertragen op apparaten met beperkt geheugen. Voor de meeste stripbestanden onder de 200 MB is de conversie in enkele seconden klaar.

## De Kern van de Zaak

CBR en CBZ lijken op elkaar maar gebruiken onder de motorkap verschillende archiefindelingen. CBR naar CBZ converteren betekent de stripafbeeldingen herarchiveren van RAR naar ZIP-formaat — de [online tool van BiblioFuse](https://bibliofuse.com/nl/webapp/) doet dit volledig in je browser zonder dat er bestanden hoeven te worden geüpload. De beeldkwaliteit blijft behouden, het proces is privé, en het resulterende CBZ-bestand werkt in elke lezer die het open ZIP-gebaseerde formaat ondersteunt.
