# Toegang tot je comicsbibliotheek op afstand met BiblioFuse en Tailscale

Je bent op zakenreis, zit om 22 uur in een hotelkamer zonder iets te lezen. Je volledige comicscollectie — 800 volumes precies zoals je ze hebt georganiseerd — staat op een externe schijf die thuis is aangesloten op je Mac. Normaal zou je moeten wachten tot je terugkomt. Niet meer.

De thuisbibliotheek-streamingfunctie van BiblioFuse laat je iPhone verbinding maken met je Mac alsof ze op hetzelfde Wi-Fi-netwerk zitten, zelfs als je aan de andere kant van de wereld bent. De brug die dit mogelijk maakt is Tailscale — een nul-configuratie VPN-mesh die stil op de achtergrond draait en geen port forwarding, statisch IP of routerconfiguratie vereist.

## Waarom "upload het naar de cloud" niet het antwoord is

De voor de hand liggende optie is je bibliotheek synchroniseren met iCloud, Dropbox of Google Drive. Dat werkt voor kleine collecties. Op schaal faalt het:

- Een comicsbibliotheek van 1 TB duurt weken om te uploaden op een thuisverbinding.
- Cloudopslag op die schaal kost maandelijks 10–30 euro, permanent.
- Je verliest controle: elke pagina van elk comic staat op de servers van iemand anders.

De Tailscale-aanpak uploadt niets. Je bibliotheek blijft op je Mac. Je iPhone haalt pagina's op aanvraag op via een versleutelde tunnel. Je betaalt niets voor opslag en je bestanden verlaten nooit je controle.

## Hoe BiblioFuse-thuisstreaming werkt

BiblioFuse voor macOS bevat een ingebouwde HTTP-server waarmee de iPhone-app verbinding kan maken. Wanneer beide apparaten op hetzelfde Wi-Fi-netwerk zitten, kan je iPhone je Mac-bibliotheek browsen, pagina's streamen terwijl je leest en leesvoortgang synchroniseren — zonder bestanden te kopiëren.

Tailscale breidt dat lokale netwerk uit naar waar je ook bent, waardoor het privé-IP-adres van je Mac bereikbaar is vanaf elk apparaat dat Tailscale gebruikt onder jouw account, veilig en end-to-end versleuteld.

## Wat Tailscale doet

Tailscale is gebouwd op WireGuard, een modern VPN-protocol dat bekend staat als snel en cryptografisch robuust. Het creëert een peer-to-peer mesh: elk apparaat verbindt direct met andere apparaten onder jouw account, zonder verkeer via een centrale server te leiden.

De installatie duurt ongeveer 5 minuten en vereist geen toegang tot de router.

## Stap-voor-stap configuratie

### Op je Mac

1. Download Tailscale van [tailscale.com](https://tailscale.com) of de Mac App Store.
2. Log in met Google, GitHub, Microsoft of maak een gratis Tailscale-account.
3. Noteer het Tailscale-IP-adres van je Mac (bijv. `100.x.x.x`).
4. Open BiblioFuse op je Mac en ga naar **Voorkeuren → Thuisbibliotheekserver**.
5. Schakel de server in. De standaardpoort is `8686`.

### Op je iPhone

1. Installeer Tailscale vanuit de App Store.
2. Log in op hetzelfde Tailscale-account als op je Mac.
3. Zet de Tailscale VPN-schakelaar aan.
4. Open [BiblioFuse](https://bibliofuse.com/nl/) op je iPhone en ga naar **Bibliotheek → Verbinden met Mac**.
5. Voer het Tailscale-IP-adres van je Mac en poort `8686` in.
6. Tik op Verbinden. Je Mac-bibliotheek verschijnt onmiddellijk.

## Prestaties en bandbreedte

Tailscale maakt directe peer-to-peer verbindingen als dat mogelijk is. Op een typisch hotel-Wi-Fi of mobiele verbinding werkt het streamen van comicspagina's comfortabel. BiblioFuse stuurt alleen de huidige pagina en laadt de volgende pagina's alvast in.

## Privacy en beveiliging

De Tailscale-verbinding is end-to-end versleuteld met WireGuard. Niemand anders kan toegang krijgen tot je BiblioFuse-server. Je bestanden gaan nooit via een server van derden.

## Veelgestelde vragen

**Moet mijn Mac wakker blijven?**
Ja. BiblioFuse draait terwijl je Mac actief is. Schakel slaapstand uit via Systeeminstellingen → Batterij.

**Werkt dit met mobiele data?**
Ja. Tailscale werkt via elke internetverbinding. Streamen van comics verbruikt ongeveer 1–3 MB per pagina.

**Kan ik dit gebruiken met meerdere Macs?**
Ja. Voeg elke Mac toe aan je Tailscale-account en sla elke Mac op als verbinding in BiblioFuse.

**Kost Tailscale geld?**
Het heeft een gratis niveau dat tot 3 gebruikers en 100 apparaten ondersteunt — meer dan genoeg voor persoonlijk gebruik.

## Aan de slag

Als je [BiblioFuse](https://bibliofuse.com/nl/) nog niet hebt, download het dan uit de App Store voor iPhone en iPad, en van de Mac App Store voor macOS. Tailscale is gratis op [tailscale.com](https://tailscale.com).

De combinatie van beide zorgt ervoor dat je thuisbibliotheek altijd bij je is — zonder ook maar één bestand naar de cloud te uploaden.
