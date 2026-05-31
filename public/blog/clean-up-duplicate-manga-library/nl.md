# Hoe je een duplicaat mangacollectie op de slimme manier opruimt

Je opent je mangamap en ziet iets vreemds: deel 47 van *One Piece* staat er drie keer in — één bestand genaamd `one_piece_v47.cbz`, een andere `OP_47_HQ.cbz` en een derde begraven in een submap genaamd "backup_old". Je kent het probleem. Je weet alleen nog niet hoe erg het is.

Voor de meeste mangalezers hopen duplicaten zich stilletjes op over jaren van downloads van verschillende bronnen, verplaatsingen van archieven tussen schijven en back-ups die nooit opgeruimd werden. Het resultaat is verspilde opslag, verwarring bij het lezen en geen eenvoudige manier om te bepalen welke versie de beste kwaliteit heeft.

Deze gids beschrijft een praktische workflow voor het vinden, beoordelen en verwijderen van dubbele manga met [Archive Duplicate Scanner](https://bibliofuse.com/en/) — een Mac-hulpprogramma dat speciaal voor dit probleem is gebouwd.

---

## Waarom mangabibliotheken zo rommelig worden

Mangaduplicaten zijn niet willekeurig. Ze volgen voorspelbare patronen:

**Meerdere bronnen, verschillende bestandsnamen.** Je downloadde deel 10 van een groep jaren geleden, en downloadde het daarna opnieuw van een andere site met betere beeldkwaliteit. Dezelfde inhoud, volledig andere bestandsnamen.

**Opnieuw gecomprimeerde archieven.** Iemand hernoemde de bestanden in een CBZ, comprimeerde ze opnieuw met een andere kwaliteitsinstelling en verspreidde het resultaat. De afbeeldingen zijn pixel voor pixel identiek, maar de checksums van het archief verschillen volledig.

**Overgebleven back-upkopieën.** Je verplaatste je bibliotheek naar een nieuwe schijf en bewaarde de oude map "voor het geval dat". Zes maanden later ben je vergeten dat hij bestaat. Nu heb je een tweede volledige kopie van 500 delen.

Een standaard zoeker naar dubbele bestanden detecteert de meeste gevallen niet omdat hij bestandscontrolesommen vergelijkt. Je hebt een hulpmiddel nodig dat begrijpt wat er *in* het archief zit.

---

## Wat Archive Duplicate Scanner anders doet

[Archive Duplicate Scanner](https://bibliofuse.com/en/) gebruikt **perceptuele hashing** om de werkelijke afbeeldingen in je CBZ- en CBR-archieven te vergelijken. In plaats van te vragen "zijn deze twee bestanden byte voor byte identiek?", vraagt het "bevatten deze twee archieven dezelfde strippagina's?"

Dit betekent dat het duplicaten detecteert die zijn:

- Hernoemd (andere bestandsnaam, zelfde inhoud)
- Opnieuw gecomprimeerd met een andere kwaliteitsinstelling
- Opnieuw verpakt met een andere interne structuur
- Gekopieerd naar een andere map of schijf

---

## Stap voor stap: Je mangabibliotheek opruimen

### Stap 1: Scan je bibliotheekmap

Open Archive Duplicate Scanner en voeg je mangamap toe. Je kunt mappen rechtstreeks naar de app slepen.

De scanner leest elk CBZ- en CBR-bestand, extraheert afbeeldingen en genereert perceptuele hashes voor elke pagina. Dit gebeurt volledig op je Mac zonder netwerkverbinding.

### Stap 2: Beoordeel gematchte paren

Na voltooiing van de scan presenteert Archive Duplicate Scanner gematchte paren naast elkaar met miniatuurvoorbeelden, bestandsgrootte en overeenkomstpercentage.

### Stap 3: Selecteer wat je wilt verwijderen

Veelgebruikte strategie: bewaar het grotere bestand (doorgaans hogere resolutie) of de versie van een betrouwbare bron.

### Stap 4: Verplaats duplicaten naar de Prullenmand

Archive Duplicate Scanner verplaatst bestanden naar de Prullenmand — geen definitieve verwijdering. Je kunt bestanden herstellen als dat nodig is.

---

## Tips om je bibliotheek schoon te houden

**Stel één "gezaghebbende" map in.** Bewaar je gecureerde bibliotheek op één plek.

**Scan na elke grote downloadsessie.** Start Archive Duplicate Scanner na het downloaden van een batch nieuwe delen om overlapping te detecteren.

**Gebruik [BiblioFuse](https://bibliofuse.com/en/) om te lezen vanuit je gecureerde map.** Wanneer je je Mac-bibliotheek streamt naar iPhone of iPad via BiblioFuse, lees je van de enige bron van de waarheid.

---

## Veelgestelde vragen

**Verwijdert Archive Duplicate Scanner mijn bestanden automatisch?**
Nee. Het verplaatst bestanden naar de Prullenmand, niet definitief verwijderd.

**Welke formaten worden ondersteund?**
CBZ, CBR en afbeeldingsarchieven.

**Mijn twee bestanden hebben volledig verschillende checksums — zal het de overeenkomst toch vinden?**
Ja. Archive Duplicate Scanner gebruikt perceptuele hashing op de afbeeldingen in elk archief, niet de bestandschecksum.
