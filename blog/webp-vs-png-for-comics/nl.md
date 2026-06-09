# WebP vs PNG voor comics: welk formaat biedt de beste kwaliteit-grootteverhouding?

Je opent je comicsmap en merkt iets vreemds op: twee gescande hoofdstukken van dezelfde serie, visueel identiek op het scherm, maar het ene is 45 MB en het andere slechts 14 MB. Het verschil? Het ene is opgeslagen als PNG, het andere als WebP. Als je je ooit hebt afgevraagd waarom comicsarchieven zo sterk in grootte variëren — en of je opslagruimte verspilt op je iPhone — geeft deze analyse de antwoorden.

## Waarom bestandsformaat belangrijk is voor comics

Comics zijn van nature beeldintensief. Een gescand nummer van 24 pagina's kan 50 tot 200 afbeeldingen bevatten, elk enkele megabytes in PNG-formaat. Vermenigvuldig dat met een bibliotheek van 500 volumes en je hebt het over honderden gigabytes, waarvan het grootste deel wordt bepaald door hoe die afbeeldingen worden gecodeerd.

Bestandsformaat beïnvloedt drie dingen: bestandsgrootte (opslag en overdrachtssnelheid), visuele kwaliteit (vooral voor fijne lijnen en kleurgradiënten) en app-compatibiliteit.

## Hoe PNG-compressie werkt

PNG gebruikt verliesloze compressie. Elke pixel van de originele afbeelding wordt exact bewaard. Voor comics is dit belangrijk omdat stripkunst scherpe overgangen heeft tussen zwart en wit. Formaten met verlies zoals JPEG introduceren artefacten bij die overgangen. PNG vermijdt dit, maar ten koste van grotere bestandsgroottes: een kleurpagina van 3000×4500 px kan gemakkelijk 8–15 MB bereiken.

## Hoe WebP-compressie werkt

WebP, ontwikkeld door Google, ondersteunt zowel verliesloze als verlieshebbende modi. In verliesloze modus verslaat WebP PNG doorgaans met 25–35% in bestandsgrootte voor fotografische inhoud. In verlieshebbende modus bij kwaliteit 85–90 kan een pagina van 12 MB als verliesloze PNG dalen tot onder de 1 MB als verlieshebbend WebP, met verschillen die nauwelijks zichtbaar zijn op typische schermresoluties.

## Directe vergelijking: dezelfde comic in verschillende formaten

Geschatte waarden voor een kleurenmangapagina van 2200×3200 px:

| Formaat | Modus | Bestandsgrootte | Kwaliteit |
|---------|-------|-----------------|-----------|
| PNG | Verloorloos | 8,2 MB | Perfect |
| WebP | Verloorloos | 6,1 MB | Perfect |
| WebP | Kwaliteit 90 | 1,8 MB | Uitstekend |
| WebP | Kwaliteit 75 | 0,9 MB | Goed |
| JPEG | Kwaliteit 90 | 2,1 MB | Uitstekend |

## Hoe BiblioFuse met WebP-comics omgaat

[BiblioFuse](https://bibliofuse.com/nl/) ondersteunt native WebP-afbeeldingen in CBZ-archieven op iOS en macOS. De [webtools van BiblioFuse](https://bibliofuse.com/nl/webapp/) laten je ook CBZ-archieven rechtstreeks in de browser comprimeren. De tool converteert PNG-pagina's naar WebP met kwaliteitsinstellingen die zijn afgesteld om visuele getrouwheid te behouden terwijl de bestandsgrootte aanzienlijk wordt verminderd.

Alle verwerking vindt lokaal plaats in je browser via WebAssembly. Je comics verlaten nooit je apparaat.

## Stap voor stap: je comicsarchief converteren naar WebP

1. Ga naar de [BiblioFuse webtool](https://bibliofuse.com/nl/webapp/) in een browser.
2. Sleep een CBZ- of ZIP-bestand naar het compressiegebied.
3. Pas de kwaliteitsschuif aan — begin bij 85 voor kleur, 80 voor zwart-wit.
4. Klik op Comprimeren. De tool verwerkt alles lokaal.
5. Download het resultaat en open het in BiblioFuse ter vergelijking.

## Wanneer bij PNG blijven

**Originele scans die je gaat bewerken.** Als je bewerkingen uitvoert (descreen, ruisonderdrukking), werk altijd in PNG.

**Lijntekeningen met kleine bestanden.** Voor zeer schone zwart-witte lijntekeningen kan PNG-compressie gelijk zijn aan of beter dan verliesloze WebP.

**Maximale archiefveiligheid.** PNG is de veiligste keuze voor leesbaarheid over 20 jaar.

## Wanneer WebP wint

**Grote kleurencollecties.** WebP met verlies bij kwaliteit 85–90 vermindert de opslag met 70–80% zonder zichtbaar kwaliteitsverschil.

**Trage overdrachten.** Kleinere bestanden betekenen snellere synchronisatie tussen je Mac en iPhone.

**Leesschermen.** Een iPhone-scherm met 326 ppi kan het verschil niet oplossen tussen PNG en WebP bij kwaliteit 90.

## Veelgestelde vragen

**Beïnvloedt compressie met verlies de leeservaring?**
Bij kwaliteit 85 of hoger niet. Artefacten liggen onder de waarnemingsdrempel bij normale leesafstand.

**Kan BiblioFuse CBZ-bestanden openen met gemengde WebP- en PNG-pagina's?**
Ja. BiblioFuse detecteert het formaat van elke pagina onafhankelijk.

**Hoe zit het met AVIF? Is het beter dan WebP?**
AVIF biedt betere compressieverhoudingen, maar in 2026 is de compatibiliteit in comicsreaders nog ongelijkmatig. WebP is de betere praktische keuze.

## Conclusie

Voor een actieve leesbibliotheek op je iPhone is WebP bij kwaliteit 85–90 de juiste keuze voor kleurencomics. Voor zwart-wit manga zijn de winsten kleiner maar reëel. Bewaar een PNG-masterkopie van alles wat kostbaar is; gebruik WebP voor alles wat je normaal leest.

[BiblioFuse](https://bibliofuse.com/nl/) verwerkt beide formaten naadloos, en de webtool maakt van conversie een klus van 30 seconden zonder software te installeren.
