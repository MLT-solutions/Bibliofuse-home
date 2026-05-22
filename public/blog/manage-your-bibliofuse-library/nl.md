# Je BiblioFuse-bibliotheek beheren: mappen, overdrachten en Mac-streaming

BiblioFuse is gebouwd op een eenvoudige regel: je bestanden blijven waar jij ze neerzet. De app verplaatst, hernoemt of sluit bestanden nooit op in een eigen formaat. Begrijpen waar boeken staan — en hoe je ze daar krijgt — maakt het verschil tussen een bibliotheek die voor je werkt en een waartegen je constant vecht.

## Boeken toevoegen: vier manieren

### Mac en Android — Een map toevoegen

Op Mac en Android houdt BiblioFuse mappen in de gaten in plaats van bestanden te bezitten. Tik in de zijbalk op **Map toevoegen** en wijs een locatie aan — je Downloadmap, een externe schijf, een NAS. BiblioFuse indexeert de inhoud en houdt wijzigingen bij zonder de bestanden aan te raken.

### iOS — Kopiëren naar de BiblioFuse-map

iPhone en iPad gebruiken een sandbox-bestandsmodel, dus kopieer je boeken naar een locatie die de app kan zien. Twee locaties werken:

**iCloud Drive → BiblioFuse** — Open de Bestanden-app en ga naar iCloud Drive → BiblioFuse. Kopieer of verplaats je eboekenmappen hierheen. Elke map die je hier neerzet verschijnt als een aparte map in de BiblioFuse-lijst. Boeken of bestanden die je rechtstreeks in de root van iCloud Drive → BiblioFuse plaatst (niet in een submap) verschijnen onder een map genaamd **iCloud** in de app. Boeken die hier zijn opgeslagen krijgen automatisch voortgangsbeheer: je leespositie synchroniseert tussen iPhone, iPad en Mac. Je pakt het op precies waar je gebleven was, op elk apparaat.

**Op mijn iPhone → BiblioFuse** — Voor opslag alleen op het apparaat kopieer je de eboekenmappen hierheen. Mappen verschijnen op dezelfde manier in de lijst, maar de voortgang blijft alleen op dat apparaat.

Zet in beide gevallen mappen neer — geen losse bestanden. Een map met de volumes van een mangaserie wordt één item in de lijst met alle volumes erin.

### Wi-Fi-overdracht

De ingebouwde browser-importserver laat je bestanden slepen vanaf elke computer, zonder kabel of synchronisatiesoftware.

- **iOS**: Ga naar **Instellingen → Wi-Fi-import** en schakel het in. Een lokale URL verschijnt — open die in een desktopbrowser en sleep bestanden erin. Bestanden komen terecht in **Op mijn iPhone → BiblioFuse → import** en verschijnen automatisch in je bibliotheek.
- **Android**: Je kiest de doelmap bij het instellen van de Wi-Fi-overdracht.

### Boeken verwerkt door het tabblad Tools

Wanneer je het [tabblad Tools](/nl/webapp) gebruikt om bestanden te comprimeren of samen te voegen, gaat de uitvoer naar:

- **iOS**: **Op mijn iPhone → BiblioFuse → export** — verwerkte bestanden verschijnen hier automatisch.
- **Android**: Je kiest de uitvoermap bij het uitvoeren van de tools.

De [BiblioFuse Webtool](/nl/webapp) voert dezelfde bewerkingen uit in elke browser — handig op Windows of Linux. Zie onze [gids over bestandsgrootte van strips en ebooks](/nl/blog/reduce-comic-ebook-file-size) voor meer details over de opslagruimte die compressie bespaart.

### Mac: Naar iCloud sturen met één rechtsklik

Als je op Mac leest en een boek op je iPhone wilt hebben, klik je met de rechtermuisknop op een boekomslag en kies je **Stuur naar iCloud**. BiblioFuse kopieert het bestand direct naar **iCloud Drive / BiblioFuse** — dezelfde container die je iPhone in de gaten houdt. Het verschijnt binnen minuten op je telefoon, zonder handmatige stap.

Om meerdere boeken tegelijk te sturen, schakel je de selectiemodus in (het vinkje-icoon rechtsboven), selecteer je de gewenste boeken en tik je op **Stuur naar iCloud** in de actiebalk.

## Het bibliotheekraster: opties bij lang indrukken

Lang indrukken op een boekomslag op iOS opent een contextmenu:

- **Openen** — direct naar het lezen springen
- **Delen** — het bestand doorgeven aan een andere app
- **Hernoemen** — de weergavenaam wijzigen (hernoemt het bestand op schijf niet)
- **Metadata bewerken** — labels toevoegen en een sterrenwaardering van 1 tot 5 instellen
- **Verwijderen** — een bevestiging verschijnt met twee opties:
  - *Uit bibliotheek verwijderen* — verwijdert de bibliotheekvermelding, het bestand blijft onaangeroerd op schijf
  - *Van opslag verwijderen* — verwijdert zowel de vermelding als het fysieke bestand

Om boeken naar het tabblad Tools te sturen, schakel je de selectiemodus in (lang indrukken op het eerste boek, dan andere aantippen). Een balk verschijnt onderaan met een **Tools**-knop (toverstaf-icoon). Tik erop om geselecteerde boeken in de wachtrij te zetten voor compressie of samenvoegen.

## Je Mac-bibliotheek streamen naar iPhone

Als je hoofdcollectie op een Mac staat, hoef je niets te kopiëren. [BiblioFuse](/nl/) kan direct streamen van Mac naar iPhone — maar gebruik Tailscale in plaats van de basale Wi-Fi-methode, die onbetrouwbaar kan zijn als je telefoon van netwerk wisselt.

Tailscale maakt een privé versleuteld netwerk tussen je apparaten. Eenmaal ingesteld, kan je iPhone je Mac bereiken of je nu op mobiele data zit, op een openbaar Wi-Fi of thuis.

### Stap 1: Installeer Tailscale op beide apparaten

1. Mac: download van [tailscale.com/download](https://tailscale.com/download) of de Mac App Store.
2. iPhone: zoek "Tailscale" in de App Store.
3. Log in met **hetzelfde Tailscale-account** op beide.

Eenmaal verbonden kunnen beide apparaten privé met elkaar communiceren.

### Stap 2: Streaming inschakelen op Mac

Scroll in BiblioFuse voor Mac in de linker zijbalk naar de sectie **Streaming** en schakel hem in. Er verschijnen twee endpoints: een voor LAN/Wi-Fi en een voor **Remote / Tailscale**. De Tailscale-verbinding is de betrouwbare optie.

### Stap 3: Controleer machtigingen op iPhone

Twee iOS-machtigingen zijn vereist:

1. **Lokaal netwerk** — ga naar **Instellingen → Privacy & beveiliging → Lokaal netwerk** en schakel BiblioFuse in.
2. **iCloud** — ga naar **Instellingen → [Jouw naam] → iCloud** en schakel BiblioFuse in.

Snelle controle: open BiblioFuse op iPhone, ga naar **Instellingen → Machtigingen**. Groene vinkjes betekenen dat alles goed is; een rood teken linkt direct naar de systeeminstelling die aangepast moet worden.

### Stap 4: Verbinding maken vanuit iPhone

1. Open het tabblad **Bibliotheek** in BiblioFuse.
2. Scroll in de zijbalk (linkerpaneel op iPad, tik op het zijbalk-icoon op iPhone) naar beneden — de sectie **Mac** toont gevonden streaming-endpoints.
3. Zoek het item met **(iCloud)** in de naam, bijvoorbeeld *MacBook Pro van Martin (iCloud)*.
4. Tik erop. Wacht 10–30 seconden totdat de beveiligde verbinding tot stand is gebracht.

Je Mac-bibliotheekmappen verschijnen nu in de zijbalk, net als lokale opslag. Blader en lees normaal.

### Wat wordt gestreamd vs. wat wordt gedownload

| Formaat | Gedrag |
|---------|--------|
| CBZ / CBR | Pagina voor pagina gestreamd — geen download nodig, opent direct |
| EPUB / TXT | Eerst gedownload naar het apparaat, dan geopend |

**Opmerking over leesvoortgang:** voortgang van gestreamde sessies wordt opgeslagen in de lokale database van je Mac, niet in iCloud. Het synchroniseert niet naar andere apparaten — het blijft op de Mac.

## Snelle tips

- **iCloud is het eenvoudigste synchronisatiepad**: boeken in iCloud Drive → BiblioFuse verschijnen op al je Apple-apparaten met voortgangsbeheer.
- **De exportmap is een tussenstation**: na compressie op iOS vind je resultaten in Op mijn iPhone → BiblioFuse → export, verplaats ze dan naar de gewenste definitieve locatie.
- **Controleer machtigingen als streaming niet werkt**: de meeste verbindingsproblemen zijn te herleiden tot Lokaal netwerk of iCloud dat uitgeschakeld is.
