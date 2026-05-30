# Waarom privacy belangrijk is bij ebook-tools — en hoe WASM alles verandert

De BiblioFuse Web Tool verwerkt je ebooks en stripbestanden volledig in je browser met WebAssembly — je bestanden verlaten nooit je apparaat en er wordt niets naar een server geüpload. Het comprimeert, converteert en samenvoegt EPUB-, CBZ- en PDF-bestanden met volledige privacy, en het is gratis te gebruiken zonder account.

## Je persoonlijke bibliotheek verdient beter dan een cloudupload

Stel je voor: je hebt jaren besteed aan het opbouwen van een digitale boekenversmaeling — gekochte romans, gescande strips, documenten die je naar EPUB hebt omgezet voor gemakkelijker lezen. Nu moet je een paar bestanden comprimeren of een serie samenvoegen tot één volume. Je zoekt een online tool, sleept je bestanden erin en klikt op "Converteren". Op dat moment zijn al die bestanden naar de server van een vreemde gereisd.

De meeste mensen denken nooit na over wat er in dat moment gebeurt. Maar de gevolgen zijn reëel: je persoonlijke leesgewoonten, je privédocumenten en de inhoud van je bibliotheek bevinden zich nu op infrastructuur die je nooit hebt gekozen te vertrouwen.

## Wat zijn de echte privacyrisico's van cloudgebaseerde bestandstools?

Wanneer je een bestand uploadt naar een cloudgebaseerde ebook-converter of -compressor, geef je gegevens door aan een derde partij. De privacyrisico's stapelen zich snel op.

Je bestanden worden via internet verzonden, wat ze blootstelt bij elke netwerkhop. De dienst slaat je bestanden op — vaak voor uren of dagen — op servers die je niet kunt inspecteren. Als de dienst actief is onder een jurisdictie met zwakke privacywetten, kan die overheid toegang krijgen tot je inhoud. De AVG en vergelijkbare regelgeving beschermen EU-inwoners technisch gezien, maar handhaving is ongelijk en de meeste gebruikers lezen nooit het privacybeleid voor het uploaden.

Persoonlijke bibliotheken kunnen meer bevatten dan entertainment. Mensen bewaren medische gidsen, juridische documenten, privécorrespondentie en geannoteerde leerboeken in ebook-formaat. Een "gratis" tool die geld verdient door documentmetadata of inhoud te verzamelen is geen koopje — het is een ruil die je hebt gemaakt zonder de voorwaarden te kennen.

## Hoe maakt WebAssembly echt privé bestandsverwerking mogelijk?

WebAssembly (WASM) is een binair instructieformaat dat direct in de browser draait op bijna-native snelheid. Het is geen plugin, geen serveraanroep en geen cloudoverdracht. Dit is wat dat in de praktijk betekent:

1. **Je browser is de computer.** Wanneer je de [BiblioFuse Web Tool](/nl/webapp/) opent, wordt alle verwerkingslogica — compressiealgoritmen, formaatparsers, samenvoegroutines — eenmalig gedownload als WASM-binair en draait lokaal op je CPU.
2. **Bestanden reizen nooit over het netwerk.** De JavaScript FileReader API laadt je EPUB, CBZ of PDF direct van je schijf in het browsergeheugen. Er wordt niets geserialiseerd naar een verzoekbody en ergens naartoe gestuurd.
3. **Er is geen serverinfrastructuur betrokken.** Er is geen backend die wacht om je upload te ontvangen, te verwerken en een resultaat terug te sturen. De hele pipeline wordt uitgevoerd in de browsersandbox.
4. **Resultaten worden direct uit het geheugen gedownload.** Wanneer de verwerking klaar is, maakt de browser een lokale object-URL die verwijst naar de uitvoer in het geheugen. Je klikt op downloaden en het bestand wordt opgeslagen op je apparaat — weer zonder een server aan te raken.

Deze architectuur is geen belofte in een privacybeleid. Het is een technische garantie die wordt afgedwongen door hoe het webplatform werkt.

## Wat kun je doen met een privacygerichte ebook-tool?

De [BiblioFuse Web Tool](/nl/webapp/) is niet alleen privé — hij is ook praktisch. Hier zijn drie echte workflows waarbij clientside verwerking een wezenlijk verschil maakt.

**Een stripverzameling comprimeren voordat je naar je telefoon overzet**
Een mangaserie in CBZ-formaat beslaat vaak 80–150 MB per volume. Dat uploaden naar een cloudcompressor betekent dat je illustraties — mogelijk gelicentieerde content — bij een derde partij terechtkomen. Met BiblioFuse sleep je de bestanden in de browsertool, kies je een JPEG-kwaliteitsinstelling en download je de gecomprimeerde CBZ-bestanden in seconden. Er heeft niets je apparaat verlaten.

**Een EPUB-serie samenvoegen tot één volume**
Je hebt zes volumes van een light novel in EPUB-formaat en wilt ze samenvoegen voor een lange vlucht. Een cloudgebaseerde mergetool zou alle zes bestanden en de volledige tekst van je boeken verwerken. De WASM-motor van BiblioFuse voegt ze lokaal samen, met behoud van de hoofdstukstructuur en metadata, zonder enige blootstelling.

**PDF-documenten naar CBZ converteren voor gemakkelijker lezen**
PDF-bestanden komen veel voor bij gescande strips en technische handleidingen. Ze converteren naar CBZ levert een slanker bestand op dat sneller laadt in een stripboeklezer. Die conversie lokaal uitvoeren betekent dat je document — dat mogelijk privéannotaties of persoonlijke informatie bevat — tijdens het hele proces op je machine blijft.

## Zijn privacygerichte ebook-tools even krachtig als cloudtools?

Dat is de terechte vraag om te stellen. Cloudtools hebben traditioneel meer verwerkingskracht aangeboden omdat ze werk uitbesteden aan dedicated servers. Maar WebAssembly heeft dat gat aanzienlijk gedicht voor bestandsbewerkingen zoals compressie, formaatconversie en samenvoegen.

Moderne browsers voeren WASM uit op ongeveer 80–90% van de native applicatiesnelheid. Voor bestandsgroottes die typisch zijn voor ebook- en stripbibliotheken — tot een paar honderd megabyte per batch — wordt de verwerkingstijd in een browser gemeten in seconden. De gratis laag van de BiblioFuse Web Tool verwerkt drie items per batch, wat de meeste dagelijkse workflows dekt zonder enige kosten.

## Veelgestelde vragen

### Zijn mijn EPUB-bestanden veilig bij een online ebook-tool?

Dat hangt volledig af van hoe de tool je bestanden verwerkt. Tools die bestanden naar een server uploaden, stellen je inhoud bloot aan derden, retentiebeleid en mogelijke datalekken. De BiblioFuse Web Tool verwerkt alles in je browser met WebAssembly — bestanden worden direct van je schijf in het lokale geheugen gelezen en worden nooit over het netwerk verzonden. Dit is een technische garantie, niet alleen een beleidsverklaring.

### Wat is WebAssembly en waarom is het belangrijk voor privacy?

WebAssembly is een binair formaat dat berekeningen direct in de browser uitvoert op bijna-native snelheid. Voor privacy is het belangrijk omdat het de volledige verwerkingspipeline — compressie, conversie, samenvoegen — in staat stelt lokaal op je apparaat te draaien zonder enige serverbetrokkenheid. Je bestanden worden nooit geserialiseerd in een HTTP-verzoek, dus er is geen punt waarop ze door een derde partij kunnen worden onderschept of opgeslagen.

### Uploadt de BiblioFuse Web Tool mijn bestanden naar een server?

Nee. De BiblioFuse Web Tool draait volledig in WebAssembly in je browser. Je bestanden worden van je apparaat in het browsergeheugen geladen, lokaal verwerkt en teruggedownload naar je apparaat. Er worden op geen enkel moment in de workflow gegevens naar een server gestuurd. Je kunt dit verifiëren door de netwerkinspector van je browser te openen — je zult geen uploadverzoeken zien tijdens de verwerking.

### Kan ik de BiblioFuse Web Tool zonder account gebruiken?

Ja. De BiblioFuse Web Tool vereist geen account, geen aanmelding en geen e-mailadres. Open de tool in je browser en begin meteen met het verwerken van bestanden. De gratis laag ondersteunt tot drie items per batch zonder beperkingen op bestandsgrootte en zonder watermerken op uitvoerbestanden.

### Welke bestandsformaten ondersteunt de BiblioFuse Web Tool?

De BiblioFuse Web Tool ondersteunt EPUB, CBZ en PDF als primaire invoer- en uitvoerformaten. Je kunt EPUB- en CBZ-bestanden comprimeren, PDF naar CBZ converteren en meerdere EPUB- of CBZ-bestanden samenvoegen tot één volume. Gemengde batches worden ondersteund — je kunt verschillende bestandstypen in dezelfde batchrun verwerken.

### Is de BiblioFuse Web Tool volledig gratis?

De BiblioFuse Web Tool is gratis te gebruiken zonder account. De gratis laag verwerkt tot drie items per batch. Er zijn geen verborgen kosten, geen watermerken en geen tijdslimieten op gratis gebruik. De tool maakt deel uit van het bredere BiblioFuse-ecosysteem, dat ook reader-apps voor iOS, Android, macOS en Windows omvat.

## Begin met het verwerken van je bibliotheek met volledige privacy

Privacygerichte ebook-tools zijn geen compromis — het is een beter ontwerp. Clientside WebAssembly-verwerking betekent dat je persoonlijke bibliotheek persoonlijk blijft, je documenten van jou blijven en geen derde partij ooit je bestanden aanraakt. Probeer de [BiblioFuse Web Tool](/nl/webapp/) vandaag nog: sleep maximaal drie EPUB-, CBZ- of PDF-bestanden erin, comprimeer of voeg ze samen in seconden en download de resultaten — allemaal zonder je browser te verlaten.
