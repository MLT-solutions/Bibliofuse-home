# Leesvoortgang synchroniseren zonder cloudaccount

Je bent halverwege een manga-reeks op je iPhone als je de iPad oppakt en weer op pagina één begint. Cloudsynchronisatie lost dit op — maar alleen als je bereid bent in te loggen bij een synchronisatiedienst, een derde partij toegang te geven tot je bibliotheekmetadata, en te accepteren dat een verbindingsprobleem je voortgang verouderd kan maken.

Wat als je dat niet wilt? Wat als je op reis bent zonder stabiele verbinding, clouddiensten niet vertrouwt met je leesdata, of simpelweg alles lokaal wilt bewaren?

[BiblioFuse](https://bibliofuse.com/nl/) biedt meerdere manieren om leesvoortgang consistent te houden op al je apparaten, zonder afhankelijk te zijn van een cloudaccount. Hier lees je hoe elke optie werkt.

## Waarom leesvoortgang synchroniseren moeilijker is dan het lijkt

Op het eerste gezicht klinkt "leesvoortgang synchroniseren" simpel — je slaat een getal op. Maar een stripbibliotheek heeft tientallen of honderden delen, elk met een eigen paginatelling en de laatste gelezen pagina. Leesvoortgang is een **per-boek, per-apparaat toestand** die tegelijkertijd op meerdere apparaten kan veranderen. Zonder een centrale beheerder (een cloudserver) kunnen twee apparaten die beide offline zijn conflicterende updates maken.

Elke lokale synchronisatiestrategie moet een afweging accepteren: ofwel stel je een strikt primair/replica-model in, accepteer je dat de laatst geschreven voortgang wint, of synchroniseer je alleen wanneer apparaten op hetzelfde netwerk zijn.

BiblioFuse's iCloud-synchronisatie regelt de arbitrage automatisch. Maar als iCloud geen optie is, geven de volgende benaderingen je controle op verschillende niveaus van automatisering.

## Optie 1: Wi-Fi-bibliotheekkoppeling via Mac (aanbevolen voor thuisgebruik)

Als je een Mac hebt waarop de Mac Home Library-functie van BiblioFuse draait, kan je iPhone er via Wi-Fi mee verbinden. De Mac fungeert als de primaire bron voor zowel bestanden als voortgang.

**Hoe het werkt:**

1. Open op je Mac BiblioFuse en schakel de thuisbibliothteekserver in via Instellingen → Thuisbibliotheek.
2. Tik op je iPhone op het netwerkpictogram in het bibliotheektabblad en selecteer je Mac.
3. Je iPhone toont de bibliotheek van de Mac en leest boeken rechtstreeks van de opslag van de Mac — er wordt niets naar de iPhone gekopieerd.

Voortgang wordt opgeslagen aan de Mac-kant. Elk apparaat dat vanuit de Mac-bibliotheek leest, registreert de voortgang daar. Wanneer je de iPhone opent en opnieuw verbinding maakt met de Mac, ga je verder waar de Mac-sessie was gebleven.

**Beperkingen:** Beide apparaten moeten op hetzelfde Wi-Fi-netwerk zijn. Werkt het best voor thuisgebruik; niet geschikt voor lezen onderweg tenzij je externe toegang instelt via een VPN of Tailscale.

## Optie 2: Handmatig voortgang exporteren en importeren

BiblioFuse stelt je in staat je leesvoortgang te exporteren als een JSON-bestand en op een ander apparaat te importeren. Dit is de meest draagbare, offline optie — geen netwerk vereist.

**Exporteren van Apparaat A:**

1. Ga naar Instellingen → Bibliotheek → Voortgang exporteren.
2. BiblioFuse slaat een `.json`-bestand op met de laatste gelezen pagina voor elk boek in je bibliotheek.
3. Deel dit bestand via AirDrop, Bestanden of een andere methode — geen internet nodig.

**Importeren op Apparaat B:**

1. Ontvang het `.json`-bestand en open het met BiblioFuse, of ga naar Instellingen → Bibliotheek → Voortgang importeren.
2. BiblioFuse voegt de geïmporteerde voortgang samen met de bestaande lokale voortgang, waarbij het hoogste paginanummer voor elk boek wordt genomen (zodat je nooit achteruitgaat).

Deze aanpak werkt volledig offline. AirDrop maakt de overdracht vrijwel instant wanneer apparaten dichtbij zijn. De enige handmatige stap is het onthouden om te exporteren voordat je van apparaat wisselt — een gewoonte die een paar dagen duurt om te vormen.

## Optie 3: Op bestanden gebaseerde synchronisatie via een lokaal netwerkstation of USB

Als je je bibliotheek beheert via de Bestanden-app, kan voortgang het boekbestand volgen. BiblioFuse slaat voortgang op per bestandsnaam, niet per cloud-ID. Dit betekent:

- Als je een bestand kopieert van Apparaat A naar Apparaat B met dezelfde bestandsnaam, toont BiblioFuse op Apparaat B geen voortgang (het bestand is nieuw voor dat apparaat).
- Maar als je zowel het boekbestand **als** een voortgangsexport (Optie 2 hierboven) naar Apparaat B kopieert en vervolgens het voortgangsbestand importeert, ga je verder op de juiste pagina.

Voor lezers die hun bibliotheek op een NAS of een gedeeld SMB-station bijhouden, werkt deze aanpak soepel: boeken blijven op het station, apparaten verbinden wanneer ze op het lokale netwerk zijn, en voortgang wordt op elk apparaat afzonderlijk bijgehouden totdat je het voortgangsbestand handmatig synchroniseert.

## Optie 4: iCloud Drive zonder een cloudsynchronisatieaccount

Dit is de moeite waard om te verduidelijken omdat het mensen vaak verwarrt: **iCloud Drive is niet hetzelfde als BiblioFuse's iCloud-synchronisatie**.

BiblioFuse's iCloud-synchronisatie gebruikt `NSUbiquitousKeyValueStore` en CloudKit om leesvoortgang-metadata te synchroniseren. Dit vereist een actief iCloud-account.

Je kunt echter je **boekbestanden** opslaan in iCloud Drive (de Bestanden-app) zonder BiblioFuse's iCloud-voortgangsynchronisatie in te schakelen. In deze configuratie:

- Boekbestanden zijn toegankelijk vanaf elk apparaat dat is aangemeld bij hetzelfde Apple ID
- Leesvoortgang wordt lokaal per apparaat bijgehouden en wordt **niet** gesynchroniseerd
- Je moet nog steeds Opties 1, 2 of 3 gebruiken om voortgang te synchroniseren als je die consistent wilt houden

Als je iCloud Drive puur als bestandsopslag gebruikt en geen voortgangsynchronisatie wilt, is dit een nette configuratie.

## Optie 5: Voortgang per apparaat accepteren en bladwijzers gebruiken

Niet elke lezer heeft perfecte voortgangsynchronisatie nodig. Als je voornamelijk één boek tegelijk leest en niet halverwege een deel van apparaat wisselt, is voortgang per apparaat prima werkbaar.

BiblioFuse stelt je in staat bladwijzers te plaatsen op elke pagina. Een bladwijzer is een benoemde opgeslagen positie — je kunt er één instellen voordat je van apparaat wisselt en er direct naartoe springen op het andere apparaat. Het is één tik om in te stellen en één tik om naar te springen, wat voor af en toe van apparaat wisselen sneller is dan een volledige synchronisatie.

## De juiste optie kiezen

| Scenario | Beste optie |
|----------|-------------|
| Thuislezer, Mac in huis | Wi-Fi Thuisbibliotheek (Optie 1) |
| Reizen, offline, twee iOS-apparaten | Handmatig exporteren/importeren via AirDrop (Optie 2) |
| NAS of gedeeld station als bibliotheek | Op bestanden gebaseerde synchronisatie + voortgangsexport (Optie 3) |
| Incidenteel van apparaat wisselen, één boek tegelijk | Bladwijzers (Optie 5) |
| Apple ID maar geen cloud van derde partij | iCloud Drive voor bestanden + handmatige voortgangsynchronisatie |

## Het privacyaspect

[BiblioFuse](https://bibliofuse.com/nl/) slaat leesvoortgang lokaal op je apparaat op. Wanneer iCloud-synchronisatie is uitgeschakeld, verlaat er geen leesdata je apparaat. Voor lezers die er de voorkeur aan geven hun leesgewoonten niet bij een externe dienst op te slaan — voor privacyredenen of simpelweg uit voorkeur — is lokale werking een volwaardige modus, geen tijdelijke oplossing.

De bovenstaande opties zijn geen omwegen voor een ontbrekende functie. Ze zijn de bedoelde manier om BiblioFuse te gebruiken wanneer cloudsynchronisatie niet past bij jouw situatie.

## Aan de slag

1. [Download BiblioFuse](https://bibliofuse.com/nl/) uit de App Store.
2. Importeer je strips of e-boeken via de Bestanden-app, Wi-Fi-overdracht of Mac Thuisbibliotheek.
3. Kies de synchronisatiestrategie die past bij jouw leesgewoonten — of combineer ze. Opties 2 en 5 werken naast elke andere aanpak.

Je hoeft geen gemak op te geven als je cloudaccounts vermijdt. Een kleine gewoonte — een snelle AirDrop-export voordat je van apparaat wisselt — houdt je bibliotheekstatus consistent zonder je leesdata aan iemand anders toe te vertrouwen.
