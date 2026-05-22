# Hoe je strips naar de iPhone overzet zonder iTunes of een kabel

Je mangabibliotheek staat op je Mac. Tweehonderd CBZ-bestanden, gesorteerd op reeks, elk volume tussen de 80 en 200 MB. Je iPhone is waar je daadwerkelijk leest — in bed, in de trein, tijdens de lunch. Die bestanden overkrijgen is het probleem waar niemand het over heeft.

E-mail is beperkt tot 25 MB. AirDrop werkt, maar je moet bestanden één voor één versturen en elke overdracht goedkeuren. iCloud Drive kan ze synchroniseren, maar eerst 20 GB aan strips uploaden en daarna wachten tot ze binnenkomen is niet handig. iTunes-bestanden delen bestaat nog steeds, maar vereist een kabel en een geduld dat de meeste mensen al jaren geleden hebben laten varen.

[BiblioFuse](/nl/) lost dit op met Wi-Fi Transfer — een ingebouwde lokale webserver waarmee je een volledige stripbibliotheek vanuit elke browser op je Mac of pc rechtstreeks naar je iPhone kunt slepen, zonder kabel, zonder software te installeren op je computer en zonder cloud-upload. Deze handleiding legt het volledige proces uit.

## Wat Wi-Fi Transfer precies doet

Wi-Fi Transfer draait een kleine HTTP-server op je iPhone, die alleen zichtbaar is op je lokale netwerk. Als je het opgegeven adres (zoiets als `http://192.168.1.x:8080`) in een willekeurige browser opent, krijg je een upload-interface met slepen en neerzetten. Je sleept bestanden of mappen van je bureaublad naar het browservenster, en [BiblioFuse](/nl/) ontvangt ze rechtstreeks via Wi-Fi.

Het sleutelwoord is *rechtstreeks*. Bestanden gaan van je computer naar je iPhone zonder enige cloudservice aan te raken. Er wordt niets geüpload naar een externe server. Je hoeft nergens op ingelogd te zijn. De enige vereiste is dat beide apparaten op hetzelfde Wi-Fi-netwerk zitten.

De overdrachtssnelheid wordt bepaald door je lokale netwerk, niet je internetverbinding. Op een typische thuisrouter kun je 15–40 MB/s verwachten. Een mangavolume van 150 MB duurt ongeveer vijf seconden.

## Stap 1 — Installeer BiblioFuse

Installeer [BiblioFuse](/nl/) via de App Store als je dat nog niet hebt gedaan. De app is gratis te downloaden en vereist geen account of aanmelding.

Na installatie maakt de app twee mappen aan in de iOS Bestanden-app:
- **iCloud Drive → BiblioFuse** — gesynchroniseerde opslag, toegankelijk op al je Apple-apparaten
- **Op mijn iPhone → BiblioFuse** — alleen lokale opslag, sneller en zonder synchronisatievertraging

Bestanden die via Wi-Fi Transfer worden overgezet, komen standaard in de lokale opslagmap terecht.

## Stap 2 — Schakel Wi-Fi Transfer in op je iPhone

1. Open BiblioFuse
2. Tik op **Instellingen** (rechtsonder in het bibliotheekscherm)
3. Zet bij **Wi-Fi Import** de schakelaar aan
4. Er verschijnt een lokale URL: `http://192.168.x.x:8080`

Houd BiblioFuse open en het scherm aan tijdens de overdracht — iOS onderbreekt de server als de app op de achtergrond gaat.

## Stap 3 — Open de URL op je computer

Open op je Mac of pc een willekeurige browser — Safari, Chrome, Firefox, Edge — en voer de URL in die in BiblioFuse wordt weergegeven. Je ziet een eenvoudige pagina met een dropzone.

Je hoeft niets te installeren. Geen extensie, geen app, geen account. De pagina wordt rechtstreeks van je iPhone geserveerd.

## Stap 4 — Sleep je strips erin

Sleep je CBZ-, CBR-, ZIP-, RAR- of EPUB-bestanden vanuit Finder (of Windows Verkenner) naar de dropzone in de browser. Je kunt slepen:

- Eén enkel bestand
- Meerdere bestanden tegelijk
- Een hele map met volumes

Als je een map sleept, ontvangt BiblioFuse alle bestanden daarin en behoudt de mappenstructuur. Als je een map met de naam `Berserk` met 40 volumes sleept, komen ze allemaal georganiseerd onder die mapnaam in je bibliotheek terecht.

Een voortgangsindicator toont elk bestand dat wordt geüpload. Grote batches — 10 GB aan strips — kunnen onbeheerd doorlopen. Je hoeft nergens op te klikken of individuele bestanden goed te keuren.

## Stap 5 — Schakel Wi-Fi Transfer uit

Zodra de overdracht klaar is, ga je terug naar BiblioFuse en schakel je Wi-Fi Transfer uit. Dit is een beveiligingsstap — de server is alleen toegankelijk op je lokale netwerk, maar hem uitschakelen als je klaar bent zorgt ervoor dat niemand anders op het netwerk er doorheen kan bladeren.

Je overgezette bestanden verschijnen automatisch in de bibliotheek. Tik op een cover om te beginnen met lezen.

## Snelheidsreferentie voor overdracht

Deze getallen zijn bij benadering, gebaseerd op een modern 802.11ac (Wi-Fi 5) thuisnetwerk:

| Bestandsgrootte | Overdrachtstijd |
|-----------------|-----------------|
| 50 MB (klein mangavolume) | ~2 seconden |
| 150 MB (typisch mangavolume) | ~5 seconden |
| 500 MB (grote CBZ) | ~15 seconden |
| 10 GB (complete reeks) | ~5 minuten |

Oudere 802.11n-netwerken of mesh-systemen met congestie zijn langzamer. Zet je iPhone dicht bij de router als je een grote batch overdraagt.

## Andere manieren om strips op de iPhone te zetten

Wi-Fi Transfer is de snelste methode voor grote collecties, maar niet de enige.

**Delen via de Bestanden-app** — Als de strip al in iCloud Drive staat of op een USB-schijf die op je Mac is aangesloten, houd dan de strip ingedrukt in de Bestanden-app en tik op Delen → BiblioFuse. Het beste voor één of twee bestanden.

**iCloud Drive-synchronisatie** — Kopieer bestanden naar `iCloud Drive → BiblioFuse` op je Mac. Ze synchroniseren automatisch naar je iPhone. De leesvoortgang synchroniseert ook op deze manier — handig als je op meerdere apparaten leest. Nadeel: vereist eerst uploaden naar iCloud, wat traag kan zijn bij grote collecties.

**AirDrop** — Werkt voor afzonderlijke bestanden. Tik op het AirDrop-pictogram, kies je iPhone en BiblioFuse biedt aan het bestand te openen. Niet praktisch voor reeksen met veel volumes.

**Tailscale / toegang op afstand** — Als je niet op hetzelfde netwerk als je Mac zit, kun je Tailscale gebruiken om een privé virtueel netwerk tussen je apparaten te maken en toch Wi-Fi Transfer of iCloud-synchronisatie op afstand te gebruiken. Dit is een geavanceerde instelling, maar geeft toegang tot je thuisbibliotheek vanaf overal.

## Problemen oplossen

**Kan de URL niet bereiken vanuit de browser.**
Controleer of beide apparaten op hetzelfde Wi-Fi-netwerk zitten. Sommige routers isoleren apparaten van elkaar (ook wel 'client-isolatie' of 'AP-isolatie' genoemd) — controleer de routerinstellingen als apparaten elkaar niet kunnen zien.

**Bestanden zijn overgedragen maar verschijnen niet in de bibliotheek.**
Veeg omlaag in de bibliotheek om te vernieuwen. Controleer de map **Op mijn iPhone → BiblioFuse** in de Bestanden-app om te bevestigen dat de bestanden zijn aangekomen. Bestanden die buiten de BiblioFuse-map terechtkomen, worden niet geïndexeerd.

**De overdracht stopte halverwege.**
Het scherm is waarschijnlijk vergrendeld en iOS heeft de app onderbroken. Ga terug naar BiblioFuse, bevestig dat Wi-Fi Transfer nog steeds aan staat en herstart de upload in de browser. Al geüploade bestanden zijn veilig.

**CBR-bestanden geven 'niet-ondersteund formaat' aan.**
Sommige zeer oude CBR-archieven gebruiken RAR5, dat niet universeel wordt ondersteund. Pak ze opnieuw in als CBZ: pak het RAR-archief uit, selecteer alle afbeeldingen, comprimeer naar ZIP en hernoem `.zip` naar `.cbz`. Het tabblad Extra in BiblioFuse kan ook helpen bij formaatconversie rechtstreeks op het apparaat.

## Wat je daarna kunt doen

Zodra je bibliotheek op de iPhone staat, geeft [BiblioFuse](/nl/) je een paar hulpmiddelen om hem beter beheersbaar te maken. Het tabblad Extra laat je CBZ-bestanden comprimeren op het apparaat zelf — handig als een volume van 200 MB kan worden teruggebracht naar 40 MB zonder zichtbaar kwaliteitsverlies. De Mac-thuisbibliotheek gaat nog een stap verder: in plaats van bestanden naar de iPhone over te zetten, kun je je volledige Mac-stripbibliotheek in realtime via Wi-Fi streamen, zodat er niets gekopieerd hoeft te worden.

Dat is het volledige plaatje — een Wi-Fi-overdracht die minuten kost in plaats van het uur dat een iTunes-synchronisatie vroeger vergde.
