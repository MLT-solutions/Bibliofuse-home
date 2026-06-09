# Meerdere EPUB-bestanden samenvoegen tot één (online, privé en gratis)

De BiblioFuse Web Tool voegt meerdere EPUB-bestanden samen tot één enkel e-boek, volledig in je browser — zonder software te installeren, zonder account en zonder dat je bestanden ooit naar een server worden geüpload. Laad je EPUB-bestanden, rangschik ze in volgorde en download het samengevoegde resultaat in enkele seconden. De gratis versie verwerkt tot drie bestanden per batch.

## Waarom wil je EPUB-bestanden online samenvoegen?

Stel je voor: je hebt een fantasyserie van acht delen gedownload, elk als apart EPUB-bestand. Elke keer dat je een deel uithebt, moet je terug naar de bibliotheek om het volgende te openen. Of je hebt een manga die deel voor deel is uitgebracht en je wilt het hele verhaalboek in één keer lezen. Het opdelen van inhoud in afzonderlijke bestanden is begrijpelijk vanuit een uitgaversperspectief, maar het is frustrerend voor lezers die gewoon ononderbroken willen lezen.

De meest voor de hand liggende oplossing is al die bestanden samenvoegen tot één EPUB voordat je ze in je lezer laadt. Alleen blijkt dat in de praktijk lastiger dan je zou denken.

## Waarom EPUB-bestanden samenvoegen lastiger is dan het lijkt

Een EPUB-bestand is niet zomaar een verzameling tekst. Onder de motorkap is het een ZIP-archief met een XML-spine die de leesvolgorde bepaalt, een manifest met alle bronbestanden, hoofdstukken in XHTML, een inhoudsopgave in `toc.ncx`- of `nav.xhtml`-formaat en ingesloten afbeeldingen en lettertypen. Wanneer je twee EPUB's samenvoegt, moeten al deze structuren op elkaar worden afgestemd: hoofdstuk-ID's moeten worden ontdubbeld, spine-vermeldingen opnieuw worden geordend, inhoudsopgave-vermeldingen opnieuw worden genummerd en conflicterende metadata worden opgelost.

De meeste online tools die beweren EPUB's samen te voegen, plakken de ZIP-bytes gewoon aaneen (wat een corrupt bestand oplevert) of verwijderen de inhoudsopgave volledig. BiblioFuse voert de volledige structurele samenvoeging uit: hoofdstukken worden opnieuw genummerd, de inhoudsopgave wordt opnieuw opgebouwd vanuit alle bronboeken en het uitvoerbestand voldoet aan de EPUB-validatie.

## EPUB-bestanden online samenvoegen met BiblioFuse

Het volledige proces duurt minder dan een minuut.

**Stap 1: Open de BiblioFuse Web Tool**

Ga naar de [BiblioFuse Web Tool](/nl/webapp/). De tool wordt volledig in je browser geladen via WebAssembly — er wordt op geen enkel moment iets naar een server verzonden.

**Stap 2: Voeg je EPUB-bestanden toe in leesvolgorde**

Klik op de bestandskiezer of sleep je EPUB-bestanden naar de dropzone. De tool accepteert EPUB-, CBZ-, CBR-, PDF- en ZIP-bestanden. Voeg de bestanden toe in de volgorde waarin je ze in het samengevoegde resultaat wilt hebben — Deel 1 eerst, dan Deel 2, enzovoort.

**Stap 3: Controleer en voer de samenvoeging uit**

Controleer of de bestanden in de juiste volgorde staan. Je kunt ze slepen om ze indien nodig te herordenen. Selecteer de samenvoegbewerking en bevestig.

**Stap 4: Download het samengevoegde EPUB-bestand**

De samenvoeging wordt volledig in je browser uitgevoerd. Als dat klaar is, klik je op de downloadknop. Het uitvoerbestand is een geldig EPUB dat in elke standaard lezer werkt, waaronder Apple Books, Kobo en [BiblioFuse](/nl/).

Met de gratis versie kun je tot drie bestanden per batch samenvoegen. Voor langere series voer je gewoon meerdere batches uit en voeg je de resultaten daarna samen.

## Praktische toepassingen voor het samenvoegen van EPUB-boeken

**Fantasy- of sciencefictionseries in meerdere delen.** Uitgevers publiceren afzonderlijke delen vaak als aparte EPUB-bestanden, ook als een lezer de hele serie in één keer wil lezen. Door ze samen te voegen krijg je één bestand met een gecombineerde inhoudsopgave, zodat je direct naar elk hoofdstuk in alle delen kunt springen.

**Manga-omnibus-edities.** Veel manga-titels worden hoofdstuk voor hoofdstuk of als afzonderlijke tankōbon-volumes als EPUB verspreid. Ze samenvoegen tot een omnibus-stijl bestand is een veelgebruikte werkwijze voor lezers die liever minder bestanden in hun bibliotheek hebben.

**Academische leerboeken opgesplitst in delen.** Sommige universitaire leerboeken worden gepubliceerd als Deel 1, Deel 2 en Deel 3. Ze samenvoegen tot één bestand maakt aantekeningen maken en kruisverwijzingen een stuk eenvoudiger, vooral bij het studeren voor examens.

**Geserialiseerde fictie.** Webromans en geserialiseerde verhalen worden vaak geëxporteerd als meerdere EPUB-bestanden. Ze samenvoegen houdt je bibliotheek overzichtelijk en je voortgang op één plek.

## Veelgestelde vragen

### Blijft de inhoudsopgave behouden na het samenvoegen van EPUB-bestanden?

Ja. BiblioFuse reconstrueert de volledige inhoudsopgave vanuit alle bron-EPUB-bestanden. De hoofdstukken van elk deel verschijnen als een aaneengesloten blok in de samengevoegde inhoudsopgave, en de originele hoofdstuktitels blijven intact. Navigatie werkt normaal in elke EPUB-lezer.

### Kan ik EPUB-bestanden met verschillende auteurs of metadata samenvoegen?

Ja. Wanneer bronbestanden verschillende metadata hebben — verschillende auteurs, uitgevers of omslagafbeeldingen — gebruikt BiblioFuse de metadata van het eerste bestand in de lijst als basis voor het samengevoegde resultaat. Je kunt de metadata van het uitvoerbestand achteraf handmatig bewerken met een EPUB-editor.

### Is het veilig om EPUB-bestanden online samen te voegen — worden ze geüpload?

Er worden nooit bestanden geüpload. De [BiblioFuse Web Tool](/nl/webapp/) werkt 100% in je browser via WebAssembly. Je bestanden blijven van begin tot eind op je apparaat. Er is geen server, geen account en geen cloudopslag betrokken.

### Wat gebeurt er met bladwijzers en markeringen na het samenvoegen?

Bladwijzers en markeringen worden opgeslagen door je lees-app, niet in het EPUB-bestand zelf. Wanneer je bestanden samenvoegt en het nieuwe gecombineerde EPUB laadt, behandelt je app het als een nieuw bestand, waardoor eerdere leesposities uit de afzonderlijke delen niet worden overgedragen.

### Kan ik meer dan 3 EPUB-bestanden tegelijk samenvoegen?

De gratis versie ondersteunt tot 3 bestanden per batch. Voor langere series kun je in stappen werken: voeg deel 1–3 samen tot Deel A, deel 4–6 tot Deel B, enzovoort, en doe dan een definitieve samenvoeging van alle delen.

### Werken samengevoegde EPUB's op Kindle en Kobo?

Kobo-apparaten ondersteunen EPUB van nature, dus een samengevoegd EPUB-bestand opent direct. Kindle gebruikt zijn eigen formaten, dus je moet het samengevoegde EPUB omzetten met een tool zoals Calibre voordat je het op je Kindle laadt.

## Begin vandaag met het ordenen van je EPUB-bibliotheek

Als je een serie hebt die verspreid is over meerdere bestanden, combineer ze dan met een paar klikken in de [BiblioFuse Web Tool](/nl/webapp/) tot één goed gestructureerd e-boek met een volledige inhoudsopgave — volledig in je browser, zonder uploads en zonder account. Na het samenvoegen kun je het bestand overzetten naar je iPhone of iPad via de ingebouwde Wi-Fi-overdracht van [BiblioFuse](/nl/).
