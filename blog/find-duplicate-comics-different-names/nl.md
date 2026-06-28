# Duplicaat-Comics Vinden Wanneer de Bestanden Verschillende Namen Hebben

Je ruimt je comicbibliotheek op en voert een standaard duplicatenzoeker uit. Die zegt: geen duplicaten gevonden. Maar je weet dat er iets niet klopt — je hebt afleveringen 1-5 in één bestand en afleveringen 1-10 in een ander, en de eerste vijf overlappen duidelijk.

Dit is het specifieke probleem waarvoor [Archive Duplicate Scanner](/nl/archive/) is gebouwd: duplicaat-comicarchiven vinden door de daadwerkelijke pagina-inhoud te vergelijken, niet de bestandsnamen of -groottes.

## Waarom Standaard Duplicatenvingers Niet Werken voor Comics

- **Verschillende afleverings­bundeling**: je downloadde `manga_ch1-5.cbz` van de ene bron en `manga_ch1-10.cbz` van een andere
- **Verschillende naamgevingconventies**: `Spider-Man_001.cbz` en `spiderman_issue01.cbz` kunnen hetzelfde nummer zijn
- **Opnieuw gecodeerde bestanden**: zelfde comic van twee bronnen, andere JPEG-kwaliteit, volledig andere hash
- **Andere formaten**: zelfde inhoud als CBZ en CBR

## Hoe Archive Duplicate Scanner Dit Detecteert

[Archive Duplicate Scanner](/nl/archive/) gebruikt perceptuele hashing op de werkelijke pagina-afbeeldingen in elk archief. Het:

1. Opent beide archieven (CBZ, CBR, ZIP of RAR)
2. Extraheert de beginpagina's van elk
3. Genereert een perceptuele hash voor elke pagina
4. Vergelijkt de hashes tussen de twee archieven

Als de hashes overeenkomen boven een configureerbare drempel, worden de archieven gemarkeerd als mogelijke duplicaten — ongeacht bestandsnamen of -groottes.

Een strengere drempel vereist een nauwere visuele overeenkomst. Een lossere drempel vangt meer grensgevallen. De standaard is gekalibreerd voor praktische duplicaten zonder valse positieven.

Archive Duplicate Scanner is gratis om te scannen en te previewen. Pro maakt bulkacties mogelijk. Geen abonnement.

Download [Archive Duplicate Scanner](/nl/archive/) in de App Store of Microsoft Store.
