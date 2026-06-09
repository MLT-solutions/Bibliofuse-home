# Hoe BiblioFuse Leesvoortgang Synchroniseert Tussen iPhone, iPad en Mac via iCloud

BiblioFuse synchroniseert leesvoortgang, labels, beoordelingen en leesrichting automatisch tussen iPhone, iPad en Mac via iCloud — zonder handmatige stappen. Het werkt met EPUB-, CBZ-, CBR- en PDF-bestanden opgeslagen in iCloud Drive op iOS 17 of later, waarbij de voortgang wordt gekoppeld aan de contenthash van elk bestand zodat het intact blijft bij hernoemingen en mapverplaatsingen. iCloud-synchronisatie is inbegrepen zonder premium-abonnement.

Je leest een manga-volume op je iPhone tijdens je woon-werkverkeer — je bereikt pagina 80, schakelt dan thuis over naar je iPad en moet door de paginaminiaturen zoeken om te vinden waar je gebleven was. Of je leest een hoofdstuk op je Mac en de volgende ochtend toont je iPhone nog steeds pagina één.

Synchronisatie van leesvoortgang klinkt eenvoudig, maar gaat subtiel fout in de meeste lezers. [BiblioFuse](/nl/) gebruikt iCloud om je exacte leespositie te synchroniseren — paginanummer, leesrichting en weergave-instellingen — tussen iPhone, iPad en Mac, zonder handmatige stappen.

## Waarom voortgangssynchronisatie moeilijk goed te doen is

De eenvoudige aanpak — een paginanummer opslaan in een clouddocument — mislukt op verschillende manieren: het houdt geen rekening met volumes met verschillende paginaaantallen in verschillende coderingen, synchroniseert geen leesrichting, en heeft geen mechanisme om een volume als "gelezen" te markeren dat persistent is over apparaten.

[BiblioFuse](/nl/) slaat voortgangsdata op als metadata die gekoppeld is aan de contenthash van het bestand, niet de bestandsnaam. Zelfs als je een CBZ hernoemt of verplaatst, komen de voortgangsdata nog steeds correct overeen op elk apparaat.

## iCloud-synchronisatie instellen

Op iPhone of iPad:
1. Ga naar **Instellingen** (systeeminstellingen)
2. Tik op je Apple ID → **iCloud** → **iCloud Drive**
3. Zoek **BiblioFuse** en bevestig dat de schakelaar aan staat

Op Mac:
1. Open **Systeeminstellingen → Apple ID → iCloud**
2. Schakel iCloud Drive in en zorg dat BiblioFuse in de lijst staat

Zodra deze schakelaars aan staan, regelt BiblioFuse alles automatisch. Er is geen knop "Nu synchroniseren" — wijzigingen worden op de achtergrond doorgegeven wanneer apparaten online zijn.

## Wat wordt gesynchroniseerd

**Leespositie.** Het exacte paginanummer. Als je een volume sluit op pagina 87, opent elk ander apparaat het op pagina 87.

**Leesrichting.** Als je een manga-volume op rechts-naar-links hebt ingesteld, volgt die instelling het volume naar elk apparaat.

**Voltooiingsstatus.** Een volume als gelezen markeren op één apparaat markeert het overal.

**Tags en beoordelingen.** Tags en sterrenwaarderingen synchroniseren op alle apparaten.

## Hoe iCloud Drive-bestandssynchronisatie werkt

[BiblioFuse](/nl/) gebruikt ook iCloud Drive voor de bibliotheekbestanden zelf.

**Mac naar iPhone**: Open Finder en navigeer naar **iCloud Drive → BiblioFuse**. Zet een CBZ, CBR, EPUB of PDF-bestand in die map. Het verschijnt binnen minuten in BiblioFuse op je iPhone.

**iPhone naar andere apparaten**: Bestanden die je via Wi-Fi Transfer toevoegt, worden opgeslagen in de iCloud-map van BiblioFuse en worden beschikbaar op je andere apparaten.

## Wi-Fi Transfer voor bulkoverdrachten

Voor eerste installatie of grote batchtransfers is Wi-Fi Transfer sneller dan iCloud-synchronisatie.

1. Open **Instellingen → Wi-Fi-import** in de app
2. Zet het aan
3. Bezoek de getoonde URL in een browser op hetzelfde Wi-Fi-netwerk
4. Sleep je collectie naar het browservenster

[BiblioFuse](/nl/) ontvangt op lokale netwerksnelheid: 50–100 MB/s op een typisch thuisnetwerk.

## Mac Home Library: lezen zonder bestanden te kopiëren

Als je hoofdcollectie op een Mac staat en je je iPhone-opslag niet wilt vullen, is Mac Home Library een andere aanpak: het streamt volumes direct van je Mac naar iPhone via lokale Wi-Fi. Er worden geen bestanden naar het apparaat of iCloud gekopieerd.

Inschakelen:
1. Zorg dat BiblioFuse op je Mac is geïnstalleerd
2. In de Mac-app, ga naar **Voorkeuren → Home Library** en schakel delen in
3. Op iPhone, open BiblioFuse en schakel over naar het tabblad Mac Library

Leesvoortgang van Mac Home Library-sessies wordt nog steeds gesynchroniseerd via iCloud.

## Offline lezen

Als je offline leest, slaat BiblioFuse de voortgang lokaal op en synchroniseert bij de volgende verbinding. Als twee apparaten conflicteren, wint het apparaat met het hogere paginanummer.

## Aan de slag

[BiblioFuse](/nl/) is gratis in de App Store voor iPhone en iPad. iCloud-synchronisatie is inbegrepen zonder premium-niveau vereist. Schakel iCloud Drive in voor BiblioFuse in de apparaatinstellingen en je voortgang begint direct te synchroniseren.


## Veelgestelde vragen

**Hoe synchroniseert BiblioFuse leesvoortgang tussen iPhone en iPad?**
BiblioFuse slaat voortgangsmetadata op in iCloud en koppelt die aan de contenthash van elk bestand, niet de bestandsnaam. Hierdoor synchroniseert de voortgang correct, zelfs als je een bestand hernoemt of verplaatst. Zet iCloud Drive voor BiblioFuse aan via Instellingen → Apple ID → iCloud om de synchronisatie te activeren.

**Synchroniseert BiblioFuse voortgang voor CBZ- en mangabestanden?**
Ja. Voortgangsynchronisatie werkt voor CBZ, CBR, EPUB en PDF. Voor CBZ en CBR wordt het exacte paginanummer gesynchroniseerd. Voor EPUB de precieze positie in een hoofdstuk. Leesrichting (links naar rechts of rechts naar links) wordt ook per volume gesynchroniseerd.

**Wat moet ik inschakelen voor iCloud-synchronisatie in BiblioFuse?**
Twee dingen: iCloud Drive moet zijn ingeschakeld via Instellingen → Apple ID → iCloud, en BiblioFuse moet zijn geactiveerd in die lijst. Zodra beide aan staan, start de synchronisatie automatisch zonder knop 'Nu synchroniseren'.

**Werkt iCloud-synchronisatie als ik offline lees?**
Ja. Als je zonder internetverbinding leest, slaat BiblioFuse de voortgang lokaal op. De volgende keer dat het apparaat verbinding maakt met iCloud, wordt de update verstuurd. Als twee apparaten conflicteren, geeft BiblioFuse voorrang aan het apparaat met het hogere paginanummer.

**Wat is het verschil tussen iCloud-synchronisatie en Mac Home Library in BiblioFuse?**
iCloud-synchronisatie kopieert bestanden en voortgangsdata naar de cloud zodat ze op elk apparaat beschikbaar zijn. Mac Home Library streamt bestanden op aanvraag van je Mac via lokaal Wi-Fi — er wordt niets gekopieerd naar het apparaat of iCloud. Gebruik iCloud voor offline toegang overal; gebruik Mac Home Library om je volledige collectie thuis te doorzoeken zonder opslag te dupliceren.
