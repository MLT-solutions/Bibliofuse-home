# Toegang tot je thuisbibliotheek met strips op afstand via BiblioFuse en Tailscale

BiblioFuse leest CBZ, CBR, EPUB, PDF, ZIP, RAR en TXT bestanden op iPhone en iPad met iOS 17 of hoger. De Mac Home Library functie laat je je volledige Mac-stripbibliotheek streamen naar iPhone via een lokaal Wi-Fi-netwerk, zonder bestanden te kopiëren. Gecombineerd met Tailscale kun je diezelfde streamingverbinding uitbreiden over het internet en je thuisbibliotheek bereiken vanuit elke plek ter wereld via BiblioFuse en Tailscale.

Je vertrekt met 2 TB aan manga op je Mac thuis. Je iPhone heeft 128 GB opslag — bij lange na niet genoeg voor alles. Je wilt die bibliotheek lezen tijdens het reizen, zonder bestanden naar de cloud te verplaatsen of te betalen voor een aparte synchronisatieservice. Deze gids laat zien hoe je dat doet met [BiblioFuse](/nl/) en het gratis abonnement van Tailscale.

## Wat betekent externe toegang tot een stripbibliotheek met BiblioFuse en Tailscale?

De Mac Home Library functie van BiblioFuse maakt van je Mac een streamingserver voor je stripcollectie. Wanneer je iPhone en Mac op hetzelfde Wi-Fi-netwerk zijn aangesloten, kun je bestanden van je Mac bladeren en openen in BiblioFuse op je iPhone — zonder kopiëren, zonder synchroniseren, zonder opslagruimte op de telefoon zelf te gebruiken.

De beperking is "hetzelfde netwerk". Op het moment dat je het huis verlaat, verbreekt de verbinding — je Mac staat achter je thuisrouter en je iPhone kan hem niet meer rechtstreeks bereiken.

Tailscale lost dit op door een versleuteld peer-to-peer mesh-netwerk te creëren tussen je apparaten. Je iPhone en Mac verschijnen op hetzelfde virtuele netwerk, ongeacht hun fysieke locatie. Voor BiblioFuse betekent dat de Mac Home Library verbinding precies hetzelfde werkt over het internet als thuis op Wi-Fi.

## Waarom werkt BiblioFuse met Tailscale beter dan cloudopslag?

Cloudopslag is het voor de hand liggende alternatief — synchroniseer alles naar iCloud Drive of Google Drive en open het overal. Maar voor grote stripbibliotheken heeft cloudsynchronisatie echte beperkingen:

- **Opslagkosten.** 2 TB iCloud kost €9,99/maand. Het gratis abonnement van Tailscale ondersteunt 100 apparaten zonder opslagkosten.
- **Uploadtijd.** 2 TB uploaden naar een cloudservice duurt dagen via een thuisverbinding. Met Tailscale + BiblioFuse stream je rechtstreeks vanuit je Mac — geen upload nodig.
- **Privacy.** Bestanden verlaten je netwerk nooit. Tailscale routeert verkeer peer-to-peer; de Tailscale-relayservers behandelen alleen verbindingsonderhandeling, niet je bestanden.
- **Leeservaring.** Streamen via Mac Home Library van [BiblioFuse](/nl/) is snel — pagina's laden zodra je tikt, net als lokale opslag. Cloud-gesynchroniseerde bestanden vereisen volledige download voor het openen.

## Stap 1 — Mac Home Library instellen in BiblioFuse

Mac Home Library van BiblioFuse is een functie die de stripfolders van je Mac aanbiedt aan de iPhone-app via een lokaal netwerk.

1. Installeer **BiblioFuse** op zowel je iPhone als je Mac (vanuit de App Store op elk platform)
2. Open op je Mac BiblioFuse en ga naar **Instellingen → Mac Home Library**
3. Klik op **Inschakelen** — de Mac begint je bibliotheek te serveren op een lokale poort
4. Open op je iPhone BiblioFuse en ga naar **Bibliotheek → Bron toevoegen → Mac Home Library**
5. Je Mac zou automatisch moeten verschijnen op het lokale netwerk. Tik erop om verbinding te maken.

Controleer of het werkt: blader door een map op je Mac vanuit je iPhone en open een CBZ. Pagina's moeten binnen een of twee seconden laden. Zodra dit werkt op lokaal Wi-Fi, ben je klaar om Tailscale toe te voegen.

## Stap 2 — Tailscale installeren en configureren

Tailscale is een VPN gebouwd op WireGuard. Het gratis abonnement ondersteunt tot 100 apparaten en dekt alles wat je hier nodig hebt.

1. Ga naar **tailscale.com** en maak een gratis account aan
2. Installeer de **Tailscale-app** op je Mac (beschikbaar via de App Store of tailscale.com/download)
3. Installeer de **Tailscale-app** op je iPhone (vanuit de App Store)
4. Meld je aan bij Tailscale op beide apparaten met hetzelfde account
5. Controleer in de Tailscale-app op je Mac of een Tailscale IP-adres wordt weergegeven (doorgaans `100.x.x.x`)
6. Open op je iPhone de Tailscale-app en controleer of je Mac in de apparatenlijst verschijnt met een groene status

Beide apparaten zijn nu op je privé Tailscale-netwerk. Ze kunnen communiceren ongeacht hun fysieke locatie.

## Stap 3 — BiblioFuse verbinden met je Mac via Tailscale

Met Tailscale actief kan BiblioFuse de Mac Home Library bereiken via het Tailscale IP-adres.

1. Noteer op je Mac het Tailscale IP-adres (weergegeven in de Tailscale menubalk-app — iets als `100.64.0.2`)
2. Open op je iPhone BiblioFuse en ga naar **Bibliotheek → Bron toevoegen → Mac Home Library**
3. Als je Mac niet automatisch verschijnt (dat doet hij niet wanneer je op een ander netwerk zit), tik op **Adres handmatig invoeren**
4. Typ het Tailscale IP-adres en de poort die BiblioFuse gebruikt (standaard: `8080`)
5. Tik op **Verbinden**

Je Mac-bibliotheek verschijnt nu in BiblioFuse op je iPhone. Open een map, tik op een volume en het streamt via Tailscale, precies zoals op lokaal Wi-Fi.

## Stap 4 — Zorgen dat het actief blijft als je weggaat

Voor externe toegang moet je Mac:

- **Wakker zijn** — schakel slaapstand uit voor netwerktoegang via **Systeeminstellingen → Batterij → Opties → Voorkomen dat de computer automatisch in slaapstand gaat als het scherm uit is** (voor Mac desktop) of stel een schema in
- **Verbonden met internet** — je thuisrouter blijft verbonden terwijl je reist
- **Tailscale uitvoeren** — stel Tailscale in om te starten bij aanmelden in de voorkeuren

Op een MacBook vereist de optie "Slaapstand voorkomen" de stroomadapter. Als je thuisMac een MacBook is zonder stroomtoevoer, stel dan een specifiek schema in: ontwaken om 06:00 en slapen om 23:00, bijvoorbeeld.

## Praktische gebruiksscenario's

**Een lange serie lezen tijdens het reizen.** Je volledige One Piece collectie (107 delen, ~15 GB als gecomprimeerde CBZ) staat op je Mac thuis. In een vliegtuig zonder Wi-Fi heb je geen toegang — maar onderweg met een willekeurige internetverbinding (hotel-Wi-Fi, mobiele data) streamt [BiblioFuse](/nl/) elke pagina op aanvraag. Je downloadt geen 15 GB; je downloadt afzonderlijke pagina's terwijl je leest.

**Lezen op een trage verbinding.** Tailscale gebruikt WireGuard, wat efficiënt is op mobiele data. Gecomprimeerde CBZ-pagina's (WebP-gecodeerd via het tabblad Hulpmiddelen van BiblioFuse) zijn doorgaans 200–500 KB elk. Op 4G-snelheden van 10–20 Mbps laadt elke pagina in minder dan 0,1 seconde. Zelfs op een overbelast hotel-Wi-Fi van 2 Mbps laden pagina's in minder dan een seconde.

**Een gezinsbibliotheek beheren.** Voeg de iPhone van je partner of een tablet toe aan hetzelfde Tailscale-account (tot 100 apparaten op het gratis abonnement). Iedereen in het gezin kan streamen vanuit dezelfde Mac-bibliotheek zonder aparte cloudabonnementen.

## Problemen oplossen

**Mac verschijnt niet in BiblioFuse na het inschakelen van Tailscale.** Gebruik de handmatige IP-invoermethode met het Tailscale IP-adres van je Mac. De automatische ontdekking is gebaseerd op mDNS-uitzending, die geen netwerken oversteekt.

**Pagina's laden traag op mobiele data.** Comprimeer je CBZ-archieven via het tabblad Hulpmiddelen van BiblioFuse of de [BiblioFuse Web Tool](/nl/webapp/) om paginaformaten te verkleinen. WebP-gecodeerde CBZ-bestanden met kwaliteit 82 zijn doorgaans 75–88% kleiner dan PNG-gebaseerde archieven, wat extern streamen veel sneller maakt.

**Mac is in slaapstand gegaan.** Schakel "Voorkomen dat de computer automatisch in slaapstand gaat als het scherm uit is" in via Mac Systeeminstellingen, of gebruik het macOS-commando `caffeinate -i &` in Terminal om hem wakker te houden.

**Tailscale-verbinding valt weg.** Tailscale maakt automatisch opnieuw verbinding wanneer netwerkomstandigheden veranderen. Als de verbinding mislukt, sluit dan BiblioFuse op je iPhone en open het opnieuw om de verbinding te hervatten.

## Veelgestelde vragen

**Kan ik op afstand toegang krijgen tot mijn stripbibliotheek thuis zonder Tailscale?**
Ja, maar de alternatieven zijn complexer of minder privé. Port forwarding op je router stelt je Mac direct bloot aan internet — een beveiligingsrisico. Cloudsynchronisatie (iCloud, Google Drive) vereist het eerst uploaden van je volledige bibliotheek. Tailscale biedt versleutelde, zero-configuratie externe toegang zonder poorten bloot te stellen.

**Kost Tailscale iets voor dit gebruik?**
Het gratis abonnement van Tailscale ondersteunt tot 100 apparaten op één persoonlijk account zonder opslagkosten en zonder bandbreedtelimieten. Voor een persoonlijke stripbibliotheek gedeeld over je eigen apparaten is het gratis abonnement voor onbepaalde tijd voldoende.

**Hoe snel is het streamen van strips via een mobiele dataverbinding?**
Met gecomprimeerde CBZ-bestanden (WebP-pagina's) zijn afzonderlijke pagina's doorgaans 200–500 KB elk. Op een 4G-verbinding van 10 Mbps laadt elke pagina in minder dan een halve seconde. Zelfs op langzamer hotel-Wi-Fi van 2 Mbps is de leeservaring vloeiend. PNG-gebaseerde archieven (2–5 MB per pagina) zijn merkbaar trager en profiteren het meest van compressie voor extern streamen.

**Werkt BiblioFuse ook met Tailscale op iPad?**
Ja. BiblioFuse ondersteunt iPhone en iPad, en Tailscale is ook beschikbaar op iPad. De instelling is identiek — installeer beide apps, meld je aan bij Tailscale en maak verbinding met de Mac Home Library via het Tailscale IP-adres.

**Is mijn stripcollectie privé bij gebruik van Tailscale?**
Ja. Tailscale gebruikt WireGuard-versleuteling voor al het verkeer tussen apparaten. Je bestanden worden rechtstreeks verzonden tussen je iPhone en je Mac in een versleutelde tunnel. De servers van Tailscale regelen verbindingscoördinatie maar zien nooit de inhoud van je bestanden.

**Wat gebeurt er als mijn Mac opnieuw opstart terwijl ik weg ben?**
Als Tailscale is ingesteld om te starten bij aanmelden en Mac Home Library is ingesteld om te starten bij opstart in BiblioFuse voor Mac, herstelt de verbinding automatisch na herstart. Stel beide apps in om te starten bij aanmelden in de respectievelijke instellingen om continuïteit te garanderen.
