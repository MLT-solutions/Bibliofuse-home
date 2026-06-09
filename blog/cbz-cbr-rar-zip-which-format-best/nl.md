# CBZ, CBR, RAR, ZIP — Welk striparchief-formaat moet je gebruiken?

Je hebt net een batch strips gedownload en de helft zijn `.cbz`-bestanden, een paar zijn `.cbr`, en één uitzondering is een gewone `.rar`. Je opent je stripreader en alles werkt — maar nu vraag je je af: maakt het uit welk formaat je collectie gebruikt? Moet je alles omzetten naar één formaat? En wat is het eigenlijke verschil?

Hier is een begrijpelijke uitleg van elk belangrijk striparchief-formaat, wanneer je welk formaat het beste kunt gebruiken, en waarom [BiblioFuse](https://bibliofuse.com/nl/) ze allemaal zonder problemen leest.

## Wat striparchief-formaten eigenlijk zijn

Geen van deze formaten is een speciaal stripformaat. CBZ, CBR, ZIP en RAR zijn allemaal algemene archiefcontainers. Wat erin zit is simpelweg een map met afbeeldingen — meestal JPEG of PNG, en steeds vaker WebP. Een stripreader pakt het archief gewoon in het geheugen uit en toont de afbeeldingen op volgorde.

Dit betekent dat de formaatkeuze bijna volledig draait om het **compressie-algoritme** en de **ecosysteemcompatibiliteit**, niet om een functie die speciaal voor strips is ontworpen.

## CBZ — De beste keuze voor de meeste collecties

CBZ is een ZIP-archief met een `.cbz`-extensie. Meer niet. Pak een CBZ-bestand uit en je krijgt een map met afbeeldingen.

**Waarom CBZ de beste standaardkeuze is:**

- ZIP is open, rechtenvrij en wordt door elk besturingssysteem en elke archieftool native ondersteund
- macOS, Windows en Linux kunnen ZIP-bestanden openen zonder extra software
- Lees- en schrijfondersteuning is eenvoudig te implementeren, waardoor vrijwel elke stripreader CBZ ondersteunt
- Geen patent- of licentieproblemen, in tegenstelling tot RAR
- Aanpassen is eenvoudig — pagina's toevoegen, verwijderen of herordenen zonder het hele archief opnieuw te comprimeren

**Compressie-afweging:** ZIP gebruikt Deflate-compressie, wat snel is maar niet de meest efficiënte methode. Voor stripbestanden die al gecomprimeerde JPEG-afbeeldingen bevatten, is het verschil in bestandsgrootte ten opzichte van RAR doorgaans minder dan 5%. Voor archieven met PNG-afbeeldingen kan RAR 10–20% schelen, maar PNG zelf is gewoonlijk de grotere boosdoener voor bestandsgrootte.

**Conclusie:** Als je een collectie from scratch opbouwt of ripped, gebruik dan CBZ.

## CBR — Breed ondersteund maar technisch minderwaardig

CBR is een RAR-archief met een `.cbr`-extensie. RAR is een propriëtair formaat gemaakt door Eugene Roshal — de "RAR" in WinRAR. Het biedt iets betere compressie dan ZIP, met name voor ongecomprimeerde afbeeldingsformaten zoals PNG.

**Het probleem met CBR:**

- RAR is propriëtair. Het aanmaken van RAR-bestanden vereist een gelicentieerde versie van WinRAR of RAR voor Unix
- De open-source UnRAR-bibliotheek kan RAR-bestanden lezen maar niet aanmaken
- RAR 5 introduceerde een nieuw headerformaat dat sommige oudere readers nog altijd niet aankunnen
- Het opnieuw inpakken of bewerken van CBR-archieven vereist extra gereedschap

**Wanneer je CBR tegenkomt:** De meeste CBR-bestanden in het wild dateren uit de vroege tot midden jaren 2000, toen WinRAR de dominante Windows-archiver was. Nieuwe releases gebruiken zelden CBR omdat er geen zinvol voordeel is ten opzichte van CBZ.

**Moet je CBR naar CBZ converteren?** Als opslagruimte schaars is en je veel PNG-zware CBR-archieven hebt, kan conversie ruimte besparen. Voor de meeste op JPEG gebaseerde collecties is het grootteverschil verwaarloosbaar en is conversie de moeite niet waard. [BiblioFuse](https://bibliofuse.com/nl/) leest CBR native, dus je hoeft niet te converteren om te kunnen lezen.

## RAR en ZIP — De basisformaten

Gewone `.rar`- en `.zip`-bestanden werken identiek aan CBR en CBZ wanneer ze in een stripreader worden geopend. Het enige verschil is de bestandsextensie — stripreaders kijken naar de extensie om te bepalen hoe het bestand behandeld moet worden, niet naar het interne formaat.

Sommige scanners en oudere rippers slaan bestanden op met de originele archiefextensie in plaats van ze te hernoemen naar `.cbz` of `.cbr`. Mogelijk moet je ze hernoemen, of een reader gebruiken die gewone ZIP/RAR ondersteunt. BiblioFuse op iOS ondersteunt `.zip`- en `.rar`-bestanden direct — hernoemen is niet nodig.

## CB7 en CBT — De minderheidsformaten

**CB7** is een 7-Zip-archief (`.7z`) hernoemd naar `.cb7`. De LZMA2-compressie van 7-Zip is aanzienlijk beter dan zowel ZIP als RAR voor comprimeerbare data zoals tekstbestanden, maar strips bestaan voornamelijk uit al-gecomprimeerde JPEG-afbeeldingen, dus de werkelijke bestandsbesparingen zijn klein. Ondersteuning is minder universeel.

**CBT** is een TAR-archief hernoemd naar `.cbt`. TAR comprimeert helemaal niet — het bundelt alleen bestanden. CBT wordt soms aangetroffen in archieven afkomstig van Linux-systemen. Het is snel uit te pakken maar produceert grotere bestanden.

Geen van beide formaten heeft noemenswaardige adoptie. Houd het bij CBZ tenzij je een specifieke reden hebt.

## PDF — Geen striparchief, maar wel veel gebruikt

PDF is een documentformaat, geen afbeeldingsarchief. Strips opgeslagen als PDF gebruiken ingesloten afbeeldingen (of, in gescande boeken, gerasterde pagina's), maar het formaat voegt lay-outoverhead toe en kan doorgaans niet pagina voor pagina worden bewerkt zonder gespecialiseerde tools.

PDF's zijn veel voorkomend voor digitale strips die door uitgevers worden verkocht en voor gescande manga-volumes. BiblioFuse leest PDF's, maar de leeservaring voor PDF's op afbeeldingsbasis is over het algemeen slechter dan het equivalente CBZ — langzamer om door te bladeren, geen metagegevens per pagina, en een groter bestandsformaat per afbeelding.

Als je strip-PDF's hebt en ze naar CBZ wilt converteren, werkt de [BiblioFuse webtool](https://bibliofuse.com/nl/webapp/) volledig in je browser zonder dat er iets hoeft te worden geüpload.

## Formaatoverzicht

| Formaat | Container | Compressie | Vrij aanmaken | Universele ondersteuning | Beste voor |
|---------|-----------|-------------|----------------|--------------------------|------------|
| CBZ | ZIP | Deflate | ✅ Ja | ✅ Ja | Nieuwe collecties, rippen |
| CBR | RAR | RAR/RAR5 | ⚠️ Vereist WinRAR | ✅ Meeste readers | Oudere archieven |
| ZIP | ZIP | Deflate | ✅ Ja | ✅ Ja | Readers die gewone ZIP ondersteunen |
| RAR | RAR | RAR/RAR5 | ⚠️ Vereist WinRAR | ✅ Meeste readers | Oudere archieven |
| CB7 | 7-Zip | LZMA2 | ✅ Ja | ⚠️ Gedeeltelijk | Hogecompressie-experimenten |
| CBT | TAR | Geen | ✅ Ja | ⚠️ Gedeeltelijk | Linux-archieven |
| PDF | PDF | Divers | ✅ Ja | ✅ Ja | Strips van uitgevers zonder DRM |

## Hoe BiblioFuse al deze formaten verwerkt

[BiblioFuse voor iPhone en iPad](https://bibliofuse.com/nl/) leest CBZ, CBR, ZIP, RAR, CB7, CBT, EPUB en PDF native. Je hoeft je collectie niet te converteren voordat je importeert.

Alle verwerking vindt plaats op het apparaat zelf. Er worden geen bestanden naar een server geüpload. Voor grote bibliotheken met meerdere formaten organiseert BiblioFuse bestanden per reeks en houdt het leesvoortgang per boek bij via iCloud-synchronisatie — ongeacht of het onderliggende formaat CBZ of CBR is.

Met het tabblad Tools in BiblioFuse kun je rechtstreeks op de iPhone tussen formaten converteren. Selecteer een CBR-archief, tik op Converteren, kies CBZ — de app pakt het archief opnieuw in zonder de app te verlaten.

## Praktische aanbevelingen

**Een nieuwe collectie from scratch beginnen:** Gebruik CBZ. Het is open, universeel ondersteund en eenvoudig te bewerken.

**Bestaande CBR-collectie:** Converteer alleen als je een specifieke reden hebt (schijfruimte, een tool die CBR niet ondersteunt). CBR werkt prima in BiblioFuse en elke moderne reader.

**Gemengde bibliotheek:** Doe geen moeite om te standaardiseren alleen voor de esthetiek. Een stripreader die meerdere formaten aankan — zoals BiblioFuse — maakt het onderhouden van een collectie met één formaat overbodig.

**Strip-PDF's van uitgevers:** Bewaar ze als PDF, tenzij je volumes wilt bewerken of samenvoegen — in dat geval is converteren naar CBZ via de BiblioFuse webtool zinvol.

Het formaatdebat doet er veel minder toe dan het hebben van een reader die ze allemaal ondersteunt. Zodra je die hebt, is de container onzichtbaar.
