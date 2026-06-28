# Hoe perceptuele hashing dubbele strips vindt zelfs na hernaming

Je hebt een bestand hernoemd. Je hebt een archief opnieuw gecomprimeerd. Je hebt hetzelfde volume van een andere bron gedownload. Naar gewone maatstaven zijn dit nu "verschillende" bestanden — andere namen, andere checksums, andere bestandsgroottes.

Toch is de strip erin hetzelfde. Elke pagina is hetzelfde. En als je je digitale bibliotheek probeert op te ruimen, zijn deze bijna-identieke duplicaten precies de bestanden die door standaard duplicaatzoektools glippen.

Dit is het probleem dat perceptuele hashing oplost, en het is de techniek in de kern van [Archive Duplicate Scanner](/en/).

---

## Waarom standaard bestandsvergelijking tekortschiet

De meeste "dubbele bestanden zoek"-tools berekenen een **checksum** voor elk bestand en markeren bestanden die dezelfde checksum delen. Dit werkt perfect voor exacte kopieën.

Maar voor comicarchives mist deze aanpak de meest voorkomende echte duplicaten:

| Scenario | Zelfde checksum? | Echt duplicaat? |
|----------|-----------------|-----------------|
| Kopie met andere bestandsnaam | Nee | Ja |
| Opnieuw gecomprimeerd met andere kwaliteit | Nee | Ja |
| Opnieuw verpakt met andere structuur | Nee | Waarschijnlijk ja |
| Gedownload van twee verschillende bronnen | Nee | Vaak ja |
| Exacte byte-voor-byte kopie | Ja | Ja |

---

## Wat perceptuele hashing in plaats daarvan doet

Een **perceptuele hash** is een korte vingerafdruk berekend van de *visuele inhoud* van een afbeelding — niet de bytes. Het meest gebruikte algoritme, **pHash**, werkt ruwweg als volgt:

1. Vergroot/verklein de afbeelding naar een kleine vaste grootte (bijv. 32×32 pixels)
2. Converteer naar grijswaarden
3. Pas een discrete cosinustransformatie (DCT) toe
4. Behoud het laagfrequentiedeel — dit legt de algehele structuur vast
5. Vergelijk elke waarde met de mediaan, wat een bitreeks produceert

Twee afbeeldingen met vergelijkbare visuele inhoud produceren hashes met een lage **Hamming-afstand**.

---

## Hoe Archive Duplicate Scanner dit toepast

[Archive Duplicate Scanner](/en/) past perceptuele hashing toe op archiefniveau:

1. **Extractie** — opent elk CBZ- of CBR-archief en leest de interne afbeeldingen
2. **Hash van elke pagina** — elke pagina krijgt een perceptuele hash
3. **Vergelijking** — bouwt een gelijkheidsindex en vindt archieven die een hoog percentage overeenkomende pagina's delen
4. **Score** — kent een matchbetrouwbaarheid toe

Wanneer 90% van de pagina's in twee archieven overeenkomen, daalt de kans op een vals-positief tot bijna nul.

---

## Praktijkgevallen

**Geval 1: Verschillende bronnen, verschillende bestandsnamen**
Je downloadde `HxH_v12_en.cbz` van de ene site en `Hunter_X_Hunter_Volume_12.cbz` van een andere. Checksumvergelijking: geen match. Perceptuele hashing: vrijwel identieke pagina's → gemarkeerd als duplicaat.

**Geval 2: Opnieuw gecomprimeerd archief**
Iemand comprimeerde een CBZ, waardoor elke JPEG naar 80% kwaliteit ging. Checksums veranderden. Perceptuele hashing: visueel identiek → gedetecteerd.

**Geval 3: Intern hernoemde of herschiktte pagina's**
Het ene archief heeft pagina's `001.jpg`, het andere `page_001.jpg`. Perceptuele hashing kijkt niet naar interne bestandsnamen → toch gedetecteerd.

---

## De grenzen van perceptuele hashing

**Significante visuele bewerkingen verbreken de match.** Lichte watermerken of kleine uitsnijdingen beïnvloeden de detectie doorgaans niet.

**Zeer lage resolutie afbeeldingen zijn onbetrouwbaar.**

**Manga met vergelijkbare kunststijlen over volumes heen.** Occasionele vals-positieven zijn mogelijk — de beoordelingsinterface laat je miniaturen controleren voor verwijdering.

---

## Archive Duplicate Scanner gebruiken

[Archive Duplicate Scanner](/en/) is een native Mac-app die perceptuele hashing naar je volledige bibliotheek brengt. Het verplaatst geselecteerde duplicaten naar de Prullenmand (geen definitieve verwijdering).

Eenmaal je bibliotheek schoon, combineer het met [BiblioFuse](/en/) op iPhone voor één gecureerde bron voor lezen.
