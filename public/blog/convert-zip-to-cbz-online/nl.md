# ZIP naar CBZ online converteren: hernoem striparchief in seconden

Je hebt een ZIP-bestand vol stripafbeeldingen en je lezer herkent het niet. De oplossing duurt zo'n drie seconden: CBZ-bestanden zijn ZIP-archieven met een andere extensie. Hernoem het bestand en de lezer ziet het als een strip. De [BiblioFuse webtool](https://bibliofuse.com/nl/webapp/) kan dit in de browser doen — geen upload, geen software, geen account vereist.

## Waarom je striplezer ZIP-bestanden negeert

De meeste stiplezers identificeren bestandstypen op extensie, niet op inhoud. Een bestand genaamd `hoofdstuk-01.zip` ziet eruit als een generiek archief. Datzelfde bestand hernoemd naar `hoofdstuk-01.cbz` wordt onmiddellijk herkend als een stripcontainer. Er is geen verschil in de bytes — alleen de naam verandert.

CBZ staat voor Comic Book ZIP. Het CBZ-formaat is uitgevonden om stiplezers een herkenbare extensie te geven. Binnenin zit altijd een ZIP met afbeeldingen die op naam gesorteerd worden in de juiste leervolgorde. CBR gebruikt hetzelfde concept met een RAR-archief.

## Optie 1 — Bestand direct hernoemen

De snelste methode is gewoon hernoemen. Op Mac of Windows, verander de extensie van `.zip` naar `.cbz` in Finder of Verkenner. Op iOS:

1. Open de **Bestanden**-app en navigeer naar het ZIP-bestand.
2. Druk lang op het bestand → **Hernoem**.
3. Verander `.zip` naar `.cbz` en tik op **Gereed**.

iOS kan waarschuwen voor het wijzigen van de extensie. Bevestig de wijziging. Het bestand is nu een CBZ die elke stripzlezer — inclusief [BiblioFuse voor iPhone](https://bibliofuse.com/nl/) — zonder problemen opent.

## Optie 2 — De BiblioFuse webtool gebruiken

De [BiblioFuse webtool](https://bibliofuse.com/nl/webapp/) werkt volledig in je browser via WebAssembly. Je bestanden verlaten je apparaat nooit — er wordt niets naar een server gestuurd.

ZIP naar CBZ converteren:
1. Ga naar **[bibliofuse.com/nl/webapp](https://bibliofuse.com/nl/webapp/)** in een moderne browser.
2. Selecteer het **Converteren** gereedschap.
3. Sleep je ZIP-bestand naar het tool of klik om te bladeren.
4. Kies **ZIP → CBZ** als uitvoerformaat.
5. Klik op **Converteren** en download het resultaat.

De output CBZ bevat exact dezelfde afbeeldingen als de input ZIP, in dezelfde volgorde, zonder hercodering of kwaliteitsverlies.

## Batchconversie

Als je tientallen ZIP-bestanden hebt, ondersteunt de webtool meerdere bestanden tegelijk: sleep meerdere ZIPs in één keer en het maakt een CBZ voor elk.

## Wat zit er in een CBZ?

Een CBZ is een ZIP met afbeeldingen alfabetisch gesorteerd op bestandsnaam. De lezer toont ze in die volgorde. Aanbevolen naamgeving: `0001.jpg`, `0002.jpg`... (met voorloopnullen). Zonder voorloopnullen sorteert `10.jpg` voor `2.jpg` in alfabetische volgorde.

## En CBR-bestanden?

CBR gebruikt RAR in plaats van ZIP. CBR naar CBZ converteren vereist het uitpakken van de RAR en opnieuw inpakken als ZIP. De BiblioFuse webtool handelt dit ook: selecteer **CBR → CBZ** en het herarchiveert de afbeeldingen als ZIP met de CBZ-extensie.

## Samenvatting

CBZ is ZIP vermomd. De extensie hernoemen is in de meeste gevallen alles wat nodig is. Wanneer je een browseroplossing nodig hebt voor batchconversie zonder upload, converteert de [BiblioFuse webtool](https://bibliofuse.com/nl/webapp/) ZIP naar CBZ in seconden — volledig privé, geen software vereist.
