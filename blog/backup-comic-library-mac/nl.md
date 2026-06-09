# Hoe maak je een back-up van je stripbibliotheek op Mac: externe schijf, NAS en cloudopties

BiblioFuse slaat je strips en e-books — EPUB, CBZ, CBR, PDF, ZIP, RAR en TXT — op op iPhone, iPad en Mac, en streamt je Mac-bibliotheek rechtstreeks naar je iPhone via Wi-Fi zonder bestanden te kopiëren. Om een back-up te maken van je stripbibliotheek op Mac kun je Time Machine gebruiken met een externe schijf of NAS, bestanden kopiëren naar cloudopslag zoals iCloud Drive of Dropbox, of elk back-uphulpmiddel gebruiken dat een standaardmap spiegelt. Je leesvoortgang in BiblioFuse wordt automatisch gesynchroniseerd via iCloud, zodat je plek in elk boek altijd bewaard blijft.

## Waarom een back-up van je stripbibliotheek zo belangrijk is

Stel je voor: je hebt vijf jaar besteed aan het downloaden van legale aankopen, het inscannen van je fysieke collectie en het samenstellen van honderden volumes in CBZ, CBR, EPUB en PDF. Op een dinsdagochtend faalt de interne schijf van je Mac. Geen waarschuwing. Geen tweede kans. Alles is weg.

Of misschien upgrade je naar een nieuwe Mac en weet je niet zeker of de Migratie-assistent je bibliotheek correct overzet, of dat je bestanden moet zoeken die verspreid zijn over mappen die je vaag herinnert in 2021 aangemaakt te hebben.

In beide gevallen is een goede back-upstrategie niet optioneel wanneer je bibliotheek het beschermen waard is.

## Waarom stripbibliotheken moeilijker te vervangen zijn dan je denkt

Muziek en foto's hebben streamingdiensten en cloudsynchronisatie als vangnet. Comics en manga zijn anders. DRM-vrije bestanden — de CBZ-rips die je kocht, de EPUB graphic novels van Humble Bundle, de doujinshi die je hebt opgespooord — zijn onvervangbaar zodra ze verloren gaan. Uitgevers houden downloadbibliotheken niet voor altijd in stand. Archieven van fan-vertalingen verdwijnen. Fysieke scans die je zelf hebt gemaakt, kunnen niet opnieuw worden gescand.

Een serieuze digitale stripverzameling kan gemakkelijk 50 GB, 200 GB of meer bereiken. Dat is groter dan de meeste fotobibliotheken en veel groter dan typische muziekbibliotheken. De bestandsgroottes maken accidenteel verwijderen ernstiger: je zult één ontbrekende CBZ in een map van 800 volumes pas opmerken als je er drie maanden later naar zoekt.

## Hoe maak je een back-up van je stripbibliotheek op Mac

De volgende methoden werken onafhankelijk of samen. Door twee methoden te gebruiken — lokaal en cloud — krijg je redundantie.

### Methode 1: Time Machine (aanbevolen voor de meeste gebruikers)

Time Machine is de eenvoudigste manier om een back-up te maken van je hele Mac, inclusief je stripbibliotheek.

1. Sluit een externe HDD, SSD of NAS aan op je Mac.
2. Open **Systeeminstellingen → Algemeen → Time Machine**.
3. Klik op **Voeg back-upschijf toe** en selecteer je externe schijf of NAS.
4. Time Machine maakt elk uur automatisch een back-up en bewaart uurlijkse snapshots gedurende 24 uur, dagelijkse snapshots gedurende een maand, en wekelijkse snapshots totdat de schijf vol is.

Time Machine maakt gebruik van versiebeheer, zodat als je per ongeluk een volume verwijdert of een map overschrijft, je de exacte versie kunt herstellen van de datum waarop alles nog goed was. Er is geen configuratie nodig buiten de initiële installatie.

### Methode 2: Handmatige kopie naar externe schijf

Voor lezers die een draagbare, zelfstandige kopie van hun bibliotheek willen, is een handmatige kopie naar een externe schijf snel en vereist geen software.

1. Open de **Finder** en navigeer naar je BiblioFuse-bibliotheekmap. De standaardlocatie is `~/Library/Containers/com.modernlogic.bibliofuse/Data/Documents/`, maar je hebt mogelijk een aangepaste map ingesteld.
2. Selecteer de map en sleep deze naar je externe schijf.
3. Herhaal dit steeds wanneer je een aanzienlijk aantal nieuwe volumes toevoegt.

Deze methode kan het beste gecombineerd worden met Time Machine in plaats van alleen gebruikt te worden. Een handmatige kopie geeft je een draagbare schijf die je buiten bewaren kunt; Time Machine geeft je versiegeschiedenis.

### Methode 3: Cloudopslag (iCloud Drive, Dropbox, Google Drive)

Cloudopslag is ideaal als je je bibliotheek toegankelijk wilt hebben op meerdere Macs of als externe back-up.

**iCloud Drive:**
1. Verplaats je stripbibliotheekmapnaar `~/Library/Mobile Documents/com~apple~CloudDocs/` (je iCloud Drive-map in Finder).
2. Bestanden worden automatisch gesynchroniseerd naar Apple-servers en naar elke andere Mac die is aangemeld met dezelfde Apple ID.
3. Schakel **Mac-opslag optimaliseren** in iCloud-instellingen alleen in als je Mac beperkte schijfruimte heeft — bewaar anders volledige lokale kopieën.

**Dropbox of Google Drive:**
1. Verplaats je bibliotheekmap naar de Dropbox- of Google Drive-map op je Mac.
2. De desktopapp synchroniseert wijzigingen automatisch.
3. Houd er rekening mee dat grote bibliotheken (100 GB+) een aanzienlijk deel van je cloudopslagquotum verbruiken.

Cloudsynchronisatie vervangt geen lokale back-up. Als je per ongeluk bestanden verwijdert, houdt de cloud-prullenbak ze doorgaans slechts 30 dagen vast.

### Methode 4: NAS (netwerkgebonden opslag)

Een NAS is de beste oplossing voor grote verzamelingen. Apparaten van Synology, QNAP of vergelijkbare fabrikanten bevinden zich op je thuisnetwerk en bieden terabytes aan redundante opslag.

1. Koppel de NAS-share in Finder: **Ga → Verbind met server** en voer `smb://[NAS-IP]/[sharenaam]` in.
2. Gebruik **rsync** voor geautomatiseerde synchronisatie. Open Terminal en voer uit:

```
rsync -av --delete ~/pad/naar/stripbibliotheek/ /Volumes/NAS-Share/stripbibliotheek/
```

3. Plan dit commando als een dagelijkse cron-taak of gebruik een hulpmiddel zoals **Hazel** of **Automator** om het automatisch te activeren.

Een NAS met RAID-redundantie betekent dat zelfs als één schijf in de array uitvalt, je gegevens overleven. Combineer het met Time Machine die naar een NAS-share wijst voor het beste van beide werelden: redundantie en versiebeheer.

### De BiblioFuse Mac Home Library begrijpen

[BiblioFuse](/nl/) bevat een Mac Home Library-functie die strips streamt vanuit een map op je Mac rechtstreeks naar je iPhone of iPad via Wi-Fi — geen bestanden kopiëren, geen synchronisatie, geen opslag gebruikt op het apparaat.

Dit is een streamingfunctie, geen back-upfunctie. De bestanden bevinden zich op je Mac. Als de schijf van je Mac uitvalt, heeft de iPhone niets om te streamen. **Je moet nog steeds een back-up maken van de bronmap op je Mac** met een of meer van de bovenstaande methoden.

Om de map te vinden die BiblioFuse streamt, open je BiblioFuse op je Mac en controleer je **Instellingen → Home Library**. Dat pad is wat je moet opnemen in je back-upstrategie.

## Praktische tips voor het georganiseerd houden van je bibliotheek

**Gebruik Finder om de bibliotheekmap te vinden.** Op Mac druk je op **⌘ + Spatie** en typ je `~/Library/Containers/com.modernlogic.bibliofuse` om direct naar de app-container te springen. Je bestanden bevinden zich in de submap `Data/Documents/`.

**Gebruik rsync voor incrementele NAS-back-ups.** De `--delete`-vlag zorgt ervoor dat je NAS-kopie je Mac exact spiegelt, waarbij volumes worden verwijderd die je lokaal hebt verwijderd. Voer het wekelijks uit of na bulkimports.

**Gebruik iCloud Drive voor automatische externe back-ups.** Als je bibliotheek kleiner is dan 50 GB en je een iCloud+-abonnement hebt, is het opslaan van je bibliotheek in iCloud Drive de minst wrijvende externe back-up die beschikbaar is op een Mac.

**Scheidt je leesvoortgang van je bestanden.** [BiblioFuse](/nl/) synchroniseert leesvoortgang automatisch via iCloud — je hoeft dit niet apart te back-uppen. Richt je back-upstrategie op de bronbestanden zelf.

## Veelgestelde vragen

**Waar slaat BiblioFuse mijn strips op op Mac?**
Standaard worden bestanden die door BiblioFuse op Mac worden beheerd opgeslagen in `~/Library/Containers/com.modernlogic.bibliofuse/Data/Documents/`. Als je de app naar een aangepaste map hebt gewezen, is die map de basis van je bibliotheek. In beide gevallen is het pad zichtbaar in de instellingen van BiblioFuse op Mac.

**Maakt Time Machine automatisch een back-up van de BiblioFuse-bibliotheek?**
Ja. Time Machine maakt standaard een back-up van je hele Mac, inclusief de toepassingscontainer waar BiblioFuse bestanden opslaat. Als je een aangepaste bibliotheekmap buiten de container gebruikt, zorg er dan voor dat deze niet op de uitsluitingslijst van Time Machine staat.

**Kan ik mijn stripbibliotheek naar een nieuwe Mac verplaatsen zonder mijn leesvoortgang te verliezen?**
Ja. Kopieer je stripbibliotheekmapnaar de nieuwe Mac en meld je aan met dezelfde Apple ID. BiblioFuse herstelt je leesvoortgang vanuit iCloud. Wijs de app naar hetzelfde relatieve mappad op de nieuwe Mac en je bibliotheek verschijnt precies zoals het was.

**Is iCloud Drive een veilige back-up voor grote stripbibliotheken?**
iCloud Drive is een betrouwbare externe back-up, maar vervangt geen lokale back-up. Als je een bestand verwijdert, bewaart iCloud het 30 dagen in de map Onlangs verwijderd. Voor grote verzamelingen blijft een externe schijf of NAS essentieel.

**Hoe automatiseer ik rsync-back-ups naar een NAS?**
Open **Terminal** en voer `crontab -e` uit. Voeg een regel toe zoals `0 2 * * * rsync -av --delete ~/Comics/ /Volumes/NAS/Comics/` om elke nacht om 2 uur een synchronisatie uit te voeren. Vervang de paden door de werkelijke paden van je bibliotheek en NAS-koppelpunt.

**Wat gebeurt er met mijn strips als de schijf van mijn Mac uitvalt?**
Als je een actuele Time Machine-back-up hebt, kun je je hele bibliotheek herstellen naar een nieuwe schijf of nieuwe Mac. Als je een handmatige kopie op een externe schijf of NAS hebt, zijn die bestanden intact en kunnen ze direct worden gekopieerd. Zonder back-up zijn de bestanden onherstelbaar — daarom is het instellen ervan vóór een storing zo belangrijk.

## Begin vandaag nog met het beschermen van je bibliotheek

Een stripbibliotheek die je jarenlang hebt opgebouwd, verdient dezelfde zorg als elke andere onvervangbare digitale verzameling. De snelste stap die je nu kunt nemen is een externe schijf aansluiten en Time Machine inschakelen — dat alleen beschermt je al tegen hardwarestoringen. Voeg een cloudback-up toe voor externe bescherming en een NAS voor grote verzamelingen.

[BiblioFuse](/nl/) maakt het lezen van je bibliotheek moeiteloos op iPhone, iPad en Mac. Combineer het met een solide back-upstrategie en je verzameling is beschermd, wat er ook met je hardware gebeurt.
