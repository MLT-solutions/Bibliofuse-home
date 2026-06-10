# Stream je Windows PC-stripbibliotheek naar iPhone — Wi-Fi thuis en 5G onderweg

Je stripverzameling staat op een Windows-pc. Honderden gigabytes aan CBZ-, EPUB- en PDF-bestanden, precies georganiseerd zoals jij het wilt. Je iPhone heeft 64 GB opslag, waarvan het meeste al bezet is. De voor de hand liggende oplossing — bestanden kopiëren — betekent twee kopieën van alles beheren, voortdurend ruimtegebrek en bestanden overdragen telkens als je iets toevoegt.

[BiblioFuse](https://bibliofuse.com/nl/) pakt dit anders aan. De BiblioFuse PC Reader-app voor Windows bevat een ingebouwde streamingserver. Je iPhone verbindt zich met de pc en streamt pagina's op aanvraag — er wordt niets gekopieerd, niets geüpload en de opslag van je iPhone blijft vrij. Dezelfde functie die Mac-gebruikers al hadden, is nu native beschikbaar op Windows, te downloaden via de Microsoft Store.

## Hoe pc-bibliotheekstreaming werkt

BiblioFuse PC Reader draait een lokale HTTP-server op je Windows-machine. Wanneer je iPhone en pc op hetzelfde Wi-Fi-netwerk zitten, ontdekt de iOS-app de pc automatisch via Bonjour (hetzelfde nul-configuratienetwerkprotocol dat AirPrint en AirDrop aandrijft). Je bibliotheek verschijnt op je iPhone zonder dat je een IP-adres hoeft in te voeren of je router hoeft te configureren.

Wanneer je een volume opent, haalt BiblioFuse de eerste pagina's direct op en laadt de volgende alvast in tijdens het lezen. CBZ- en CBR-bestanden worden pagina voor pagina gestreamd; EPUB- en PDF-bestanden gebruiken HTTP Range-verzoeken zodat grote bestanden snel openen zonder alles te downloaden. De leeservaring — rechts-naar-links-modus, verticaal scrollen voor webtoons, dubbele pagina in landschap — is identiek aan een lokaal opgeslagen bestand. Het enige verschil is waar de data vandaan komt.

De server blijft actief, ook nadat je het app-venster hebt gesloten. In plaats van te stoppen, verplaatst het naar het systeemvak. Zo blijft je bibliotheek toegankelijk vanaf iPhone, ook als je de pc voor iets anders gebruikt. Dubbelklik op het systeemvakpictogram om het venster te herstellen. Klik met rechts op het pictogram en kies Afsluiten om de server volledig te stoppen.

## Deel 1: Streamen op je thuisnetwerk

Dit is de eenvoudigste instelling. Zowel je pc als je iPhone zitten op hetzelfde netwerk, en BiblioFuse regelt de ontdekking automatisch.

### Op je pc

1. Download en installeer **BiblioFuse PC Reader** via de Microsoft Store.
2. Open de app en ga naar **Instellingen → Thuisbibliotheek**.
3. Klik op **Map toevoegen** en selecteer de map of mappen waar je strips en ebooks staan. Je kunt meerdere mappen toevoegen — een voor manga, een voor graphic novels, een voor pdf's.
4. Schakel **Bibliotheek delen** in. De server start direct op poort 7341 en begint je bibliotheek op de achtergrond te scannen.
5. Stel optioneel een **wachtwoord** in via Instellingen → Beveiliging om toegang te beschermen. Als je dit overslaat, kan iedereen op je lokale netwerk verbinding maken — prima voor thuisgebruik, maar verstandig om te vergrendelen op gedeelde of openbare wifi.
6. Je kunt het venster sluiten. De server draait in het systeemvak.

### Op je iPhone

1. Open **[BiblioFuse](https://bibliofuse.com/nl/)** op iPhone.
2. Tik op het tabblad **Bibliotheek**.
3. Tik op de bronkiezer bovenaan — als je pc actief is en delen is ingeschakeld, verschijnt **PC-thuisbibliotheek** binnen enkele seconden.
4. Tik erop. De mapstructuur van je pc verschijnt direct.

Dat is alles. Je volledige bibliotheek is nu te bladeren en te lezen op iPhone, zonder bestanden naar het apparaat te zetten. Wanneer je nieuwe volumes toevoegt aan je pc, verschijnen ze bij de volgende bibliotheekverversing in de iPhone-weergave — geen hersynchronisatie nodig.

### Ondersteunde formaten

BiblioFuse PC Reader streamt elk formaat dat het lokaal kan lezen: **CBZ, CBR, EPUB, PDF en TXT**. Manga in CBZ, graphic novels in CBR, ebooks in EPUB, gescande boeken in PDF — allemaal ondersteund via dezelfde streamingverbinding.

### Prestatietips

**Gebruik 5 GHz wifi.** Als je router zowel 2,4 GHz als 5 GHz uitzendt, zorg er dan voor dat zowel je pc als iPhone verbonden zijn met 5 GHz. De hogere bandbreedte maakt een merkbaar verschil bij grote CBZ-bestanden met hoge resolutie.

**Bibliotheek op SSD is sneller.** Als je stripverzameling op een mechanische harde schijf staat, zal de eerste paginalading van elk nieuw volume een kleine vertraging hebben. Het verplaatsen van de bibliotheek naar een SSD (intern of extern) elimineert dit.

**Als iPhone de pc niet vindt:** De pc-app toont een netwerkadres in Instellingen → Thuisbibliotheek wanneer delen actief is. Controleer of de Windows Firewall poort 7341 niet blokkeert. Je kunt ook het lokale IP-adres van de pc handmatig invoeren in de iOS-app via Bibliotheek → Server toevoegen → Handmatig.

## Deel 2: Streamen onderweg via 5G

Thuisnetwerk-streaming werkt alleen als beide apparaten op hetzelfde netwerk zitten. Om je bibliotheek te benaderen vanuit een café, hotel of ergens anders via 5G, moet je de twee netwerken overbruggen. De oplossing is [Tailscale](https://tailscale.com) — dezelfde instelling als beschreven in de [BiblioFuse Tailscale-gids](/nl/blog/tailscale-remote-library-access/).

Tailscale maakt een privé, versleuteld mesh-netwerk tussen je apparaten. Eenmaal ingesteld kan je iPhone de streamingserver van je pc bereiken alsof ze op hetzelfde lokale netwerk zitten — via elke internetverbinding, zonder port-forwarding en zonder statisch IP.

### Tailscale instellen voor remote streaming

**Op je Windows-pc:**

1. Download Tailscale via [tailscale.com](https://tailscale.com) of de Microsoft Store.
2. Log in met Google, GitHub, Microsoft of een gratis Tailscale-account.
3. Tailscale draait in het systeemvak naast BiblioFuse. Noteer het Tailscale IP-adres van je pc (begint met `100.`).
4. Zorg dat BiblioFuse PC Reader actief is met Bibliotheek delen ingeschakeld.

**Op je iPhone:**

1. Installeer Tailscale via de App Store.
2. Log in met hetzelfde Tailscale-account.
3. Schakel de Tailscale VPN-schakelaar in.
4. Open BiblioFuse op iPhone. Voer bij Bibliotheek → Server toevoegen het Tailscale IP-adres van je pc en poort `7341` in.
5. Tik op Verbinden.

BiblioFuse geeft automatisch de voorkeur aan het Tailscale IP-adres wanneer het beschikbaar is, zodat dezelfde opgeslagen verbinding zowel thuis (via LAN) als onderweg (via Tailscale) werkt. Je hebt geen twee aparte verbindingsinvoeren nodig.

### Wat te verwachten op mobiele data

Tailscale maakt waar mogelijk peer-to-peer verbindingen, waarbij relayservers worden omzeild voor betere prestaties. Op een typische 5G-verbinding werkt het streamen van strippagina's goed. BiblioFuse stuurt alleen de huidige pagina en laadt de volgende alvast in — het streamt niet het hele CBZ-bestand in één keer, dus een archief van 200 MB betekent niet 200 MB aan datagebruik. Reken op ongeveer **1–3 MB per pagina**, afhankelijk van beeldresolutie en servercompressie-instellingen.

Voor lezen met een beperkt databundel gebruik je [BiblioFuse](https://bibliofuse.com/nl/) om individuele volumes via wifi te downloaden voordat je het huis verlaat. Tik in de pc-bibliotheekweergave op iPhone op het downloadpictogram naast een volume om het lokaal te cachen. Dat volume is dan offline beschikbaar, zonder Tailscale of dataverbinding.

## PC versus Mac: wat is anders?

Als je de Mac-companion-app hebt gebruikt, is de pc-ervaring vanuit iOS-perspectief vrijwel identiek. Een paar Windows-specifieke verschillen:

- **Poort:** De pc-server gebruikt poort **7341** (de Mac-app gebruikt standaard 8686).
- **Ontdekking:** Beide gebruiken Bonjour/mDNS met het servicetype `_bibliofuse._tcp`, dus iOS ontdekt ze op identieke wijze.
- **Systeemvak:** De pc-app blijft in het systeemvak wanneer het venster wordt gesloten; de server stopt nooit totdat je Afsluiten kiest.
- **Instellingenbestand:** Pc-instellingen worden opgeslagen in `%APPDATA%\BiblioFuse\settings.json` als je ze ooit handmatig wilt inspecteren of resetten.
- **Één actieve server tegelijk:** In de huidige versie maakt BiblioFuse iOS verbinding met een Mac- of een pc-server — niet met beide tegelijkertijd. Welke machine actief is, wordt als eerste ontdekt door iOS.

Voor Mac-specifieke streamingdetails, zie [Stream je Mac-stripbibliotheek naar iPhone via Wi-Fi](/nl/blog/mac-home-library-streaming-iphone/).

## Veelgestelde vragen

**Heeft BiblioFuse een Windows-app?**
Ja. BiblioFuse PC Reader is een native Windows-applicatie beschikbaar in de Microsoft Store. Het leest lokaal CBZ-, CBR-, EPUB-, PDF- en TXT-bestanden en streamt je volledige bibliotheek naar de iOS-app via je netwerk.

**Hoe stream ik strips van mijn Windows-pc naar iPhone?**
Installeer BiblioFuse PC Reader op Windows en schakel Bibliotheek delen in bij Instellingen. Installeer BiblioFuse op iPhone. Op hetzelfde Wi-Fi-netwerk open je BiblioFuse op iPhone en tik je op Bibliotheek — je pc-bibliotheek verschijnt automatisch via Bonjour-ontdekking. Geen IP-adres of routerconfiguratie nodig.

**Kan ik mijn pc-bibliotheek via 5G benaderen als ik niet thuis ben?**
Ja, via Tailscale. Installeer Tailscale op je Windows-pc en iPhone, log in met hetzelfde account en schakel het in op beide apparaten. BiblioFuse detecteert de Tailscale-verbinding automatisch en gebruikt die om je pc van overal te bereiken — hotel-wifi, 5G, elke internetverbinding.

**Gebruikt pc-streaming iPhone-opslag?**
Nee. Pagina's worden op aanvraag van de pc opgehaald; er wordt niets op iPhone opgeslagen, behalve de app zelf en je leesvoortgangsdata. Je kunt een bibliotheek van 500 GB bladeren en lezen zonder iPhone-opslag voor de bestanden te gebruiken.

**Moet de pc actief blijven voor streaming?**
Ja. De streamingserver draait op de pc; als de pc in slaapstand gaat of de server stopt, valt de iOS-verbinding weg. Ga naar Windows Instellingen → Energie & slaapstand en stel slaapstand in op Nooit, of gebruik een tool zoals PowerToys om de machine actief te houden.

**Welke poort gebruikt de pc-streamingserver?**
Poort 7341. Als je een firewall hebt die verkeer op deze poort blokkeert, voeg dan een uitzondering toe voor BiblioFuse PC Reader.

## Aan de slag

[BiblioFuse PC Reader](https://bibliofuse.com/nl/) is nu beschikbaar in de Microsoft Store. BiblioFuse voor iPhone staat in de App Store. Installeer beide, wijs de pc-app naar je bibliotheekmap en je volledige verzameling staat op je iPhone de volgende keer dat je de app opent — geen kabels, geen cloud, geen kopiëren.
