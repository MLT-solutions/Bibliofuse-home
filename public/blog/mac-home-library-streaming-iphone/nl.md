# Stream Je Mac-Comicbibliotheek naar iPhone via Wi-Fi (Zonder Kopiëren)

BiblioFuse Mac Home Library laat je je volledige Mac-comic- en eboekcollectie streamen naar iPhone of iPad via Wi-Fi, zonder bestanden naar het apparaat te kopiëren en zonder iPhone-opslag te gebruiken. Werkt met CBZ-, CBR-, EPUB-, PDF- en TXT-bibliotheken op een Mac naast een iPhone of iPad met iOS 17 of later — geen speciale netwerkconfiguratie nodig, alleen dat beide apparaten op hetzelfde Wi-Fi-netwerk zitten.

Je Mac-harde schijf bevat 400 GB aan CBZ- en EPUB-bestanden — decennia aan manga, graphic novels en gescande strips. Je iPhone heeft in totaal 64 GB, en het meeste is al bezet. Je hebt iCloud geprobeerd, maar het gaat langzaam en verbruikt opslag. Je hebt Wi-Fi Transfer geprobeerd om losse volumes te importeren, maar één voor één bestanden kiezen heeft geen zin als je een volledige collectie hebt.

Mac Home Library in [BiblioFuse](/nl/) lost dit anders op. In plaats van bestanden naar je telefoon te kopiëren, worden ze gestreamd. Je Mac wordt een lokale server; je iPhone leest op aanvraag. Er wordt niets gekopieerd. Er wordt niets geüpload. Je hebt je volledige bibliotheek van 400 GB op je iPhone, zolang je op hetzelfde Wi-Fi-netwerk zit.

## Wat Is Mac Home Library

Mac Home Library is een lokale streamingfunctie, geen synchronisatiefunctie. Het verschil is belangrijk.

**Synchronisatie** (zoals iCloud) kopieert bestanden naar het apparaat. Om 400 GB te synchroniseren, heb je 400 GB vrije ruimte op je iPhone nodig — wat de meeste mensen niet hebben.

**Streaming** kopieert niets. Het bestand blijft op de Mac; de iPhone haalt pagina's op aanvraag op terwijl je leest. Wanneer je op een volume tikt in de Mac Library-weergave op je iPhone, vraagt [BiblioFuse](/nl/) de betreffende pagina's op via het lokale netwerk. Gebruikte opslag op iPhone: nul (afgezien van de app zelf en de voortgangsgegevens).

## Wat Je Nodig Hebt

- Een iPhone met iOS 17 of later
- Een Mac op hetzelfde Wi-Fi-netwerk als de iPhone
- [BiblioFuse](/nl/) geïnstalleerd op beide apparaten (de iOS-app en de Mac-companion)
- Je comicbibliotheek lokaal opgeslagen op de Mac

## Mac Home Library Instellen

Instellen duurt ongeveer twee minuten en vereist geen speciale netwerkconfiguratie.

**Op je Mac:**

1. Open **BiblioFuse** (de Mac-companion app).
2. Ga naar **Voorkeuren → Home Library**.
3. Klik op **Home Library-deling inschakelen**.
4. Als macOS vraagt om toestemming voor lokale netwerkcommunicatie, klik op **Toestaan**.
5. Je ziet een lokale URL zoals `bibliofuse.local:8765` — dat is het adres dat je iPhone gebruikt.

**Op je iPhone:**

1. Open **BiblioFuse** op de iPhone.
2. Tik op het tabblad **Bibliotheek**.
3. Tik op de bronkiezer bovenaan — je zou **Mac Home Library** naast je lokale bibliotheek moeten zien.
4. Tik op **Mac Home Library**. Als je Mac aan staat en deling ingeschakeld is, is de verbinding binnen enkele seconden gemaakt en verschijnt je volledige Mac-bibliotheek.

Geen IP-adressen om in te stellen, geen routerinstellingen, geen port-forwarding. BiblioFuse gebruikt Bonjour om de Mac automatisch te ontdekken op het lokale netwerk.

## Bladeren en Lezen

De Mac Library-weergave op de iPhone weerspiegelt de mappenstructuur op je Mac. Als je manga per serie sorteert, zie je diezelfde mappen.

Tik op een map om volumes te bladeren. Tik op een volume om het te openen. BiblioFuse haalt de eerste pagina's direct op. De laadtijd van pagina's is snel — op een typisch 5 GHz Wi-Fi-netwerk komen afzonderlijke pagina's in minder dan een seconde aan, zelfs voor grote CBZ-bestanden.

De leeservaring is identiek aan het lezen van een lokaal opgeslagen volume: rechts-naar-links-modus voor manga, verticaal scrollen voor webtoons, dubbele pagina in liggende stand, zoomen en pannen.

## Hoe Leesvoortgang Werkt

De leesvoortgang van Mac Home Library-sessies wordt gesynchroniseerd via iCloud, net als de voortgang van lokaal opgeslagen volumes. Als je op pagina 87 van een gestreamd volume stopt, registreert de iPhone pagina 87 en stuurt dit naar iCloud. Als je daarna datzelfde volume op je iPad opent, start het op pagina 87.

## Verschillen met Wi-Fi Transfer en iCloud Sync

Deze drie functies in [BiblioFuse](/nl/) dienen verschillende doelen.

**Wi-Fi Transfer** verplaatst bestanden van de Mac naar de iPhone. Gebruik het voor het opbouwen van je lokale iPhone-collectie — volumes die je offline beschikbaar wilt hebben.

**iCloud Sync** houdt bestanden gesynchroniseerd tussen apparaten via Apple's cloudopslag. Het beste voor bibliotheken van gemiddelde omvang.

**Mac Home Library** streamt zonder te overdragen. Gebruik het voor je volledige bibliotheek thuis op een goed Wi-Fi-netwerk. Niets gebruikt iPhone-opslag; de Mac is de enige bron.

## Tips voor Betere Prestaties

**Gebruik 5 GHz Wi-Fi.** Zorg ervoor dat zowel je Mac als je iPhone op de 5 GHz-band zitten voor de beste prestaties met grote CBZ-bestanden.

**Houd de Mac wakker.** Als de Mac in slaapstand gaat, valt de streamingverbinding weg. Stel in via **Systeeminstellingen → Batterij → Voorkom slaapstand** wanneer aangesloten.

**Bibliotheek op SSD is sneller.** Als je bibliotheek op een externe harde schijf staat, zijn de toegangstijden langzamer dan op een SSD, wat tot een kleine vertraging bij de eerste paginalading van een volume kan leiden.

## Offline Lezen vanuit de Mac-Bibliotheek

Als je weet dat je zonder Wi-Fi zult zijn, kun je individuele volumes van de Mac-bibliotheek naar je iPhone downloaden voordat je vertrekt.

Tik in de Mac Library-weergave op de iPhone op het **downloadpictogram** naast een volume. BiblioFuse kopieert het naar de lokale opslag van de iPhone via Wi-Fi Transfer. Daarna is het volume offline beschikbaar.

## Aan de Slag

[BiblioFuse](/nl/) is beschikbaar in de App Store voor iPhone en iPad. Mac Home Library maakt deel uit van de standaard app, zonder premium-niveau. Installeer het op je Mac en iPhone, schakel deling in via Mac-voorkeuren, en je volledige bibliotheek is beschikbaar op de iPhone de volgende keer dat je op hetzelfde netwerk bent.


## Veelgestelde vragen

**Wat is Mac Home Library in BiblioFuse?**
Mac Home Library is een BiblioFuse-functie die je volledige Mac-comic- en eboekenbibliotheek direct naar iPhone of iPad streamt via Wi-Fi. Er worden geen bestanden naar het apparaat gekopieerd, dus er wordt geen iPhone-opslag gebruikt. Vereist BiblioFuse op zowel Mac als iPhone, en beide op hetzelfde Wi-Fi-netwerk (of Tailscale voor externe toegang).

**Hoeveel iPhone-opslag gebruikt Mac Home Library?**
Nul opslag voor CBZ- en CBR-bestanden, die pagina voor pagina op aanvraag worden gestreamd. EPUB- en TXT-bestanden worden tijdelijk gedownload naar het apparaat voor het lezen. Je kunt collecties van honderden GB bladeren en lezen zonder iPhone-opslag te gebruiken.

**Kan ik Mac Home Library buiten thuis gebruiken?**
Ja, met Tailscale. Tailscale maakt een privé versleuteld netwerk tussen je apparaten, waardoor de iPhone je Mac kan bereiken via mobiele data of openbaar Wi-Fi. Zonder Tailscale werkt de verbinding alleen op hetzelfde lokale Wi-Fi-netwerk.

**Wordt leesvoortgang gesynchroniseerd bij gebruik van Mac Home Library?**
Ja. Leesvoortgang van streamingsessies wordt opgeslagen in de lokale database van de Mac. Als iCloud is ingeschakeld voor BiblioFuse, synchroniseert de voortgang zoals gewoonlijk naar andere apparaten.

**Werkt Mac Home Library met alle bestandsformaten?**
CBZ en CBR worden pagina voor pagina gestreamd — ze openen direct zonder het volledige bestand te downloaden. EPUB- en TXT-bestanden worden eerst naar het apparaat gedownload en dan geopend. Alle formaten die BiblioFuse ondersteunt zijn beschikbaar via Mac Home Library.
