# Kavita-leesapp voor iPhone, iPad en Android: voortgang, bladwijzers en annotaties synchroniseren

**Kort antwoord:** [BiblioFuse Reader](https://bibliofuse.com/nl/comicreader/) maakt verbinding met een Kavita-server via de eigen API van Kavita, niet alleen via de OPDS-feed. Daardoor kan de app leesvoortgang in beide richtingen synchroniseren, bladwijzers synchroniseren en EPUB-markeringen en -notities synchroniseren — inclusief toevoegen, bewerken en verwijderen — met dezelfde annotaties die je in de weblezer van Kavita ziet. De installatie kost één QR-scan.

Deze gids behandelt wat wel en niet synchroniseert, welke bestandsformaten worden ondersteund en hoe je in minder dan een minuut verbinding maakt.

## Waarom Kavita-voortgang in leesapps vaak niet synchroniseert

De meeste lezers van derden praten met Kavita via OPDS. OPDS is een catalogusprotocol: het is goed in het tonen van series en het aanleveren van bestanden, maar het is nooit ontworpen om je leespositie, bladwijzers of notities terug te sturen naar de server. De documentatie van Kavita zegt zelf dat de API de rijkste manier is om een Kavita-server te gebruiken.

Heb je ooit een deel uitgelezen op je telefoon terwijl het in Kavita nog als ongelezen stond? Dan gebruikte de app vrijwel zeker alleen OPDS.

BiblioFuse gebruikt de Kavita-API rechtstreeks. Je series, delen, hoofdstukken, specials, leeslijsten en collecties verschijnen zoals in Kavita, en wat je in de lezer doet, wordt teruggeschreven naar de server.

## Wat er synchroniseert tussen BiblioFuse en Kavita

| Functie | Wat BiblioFuse doet op een Kavita-server |
|---|---|
| Leesvoortgang | Synchroniseert in beide richtingen. Open een boek en het gaat verder waar je volgens Kavita was gebleven; lees verder en Kavita wordt bijgewerkt. |
| Exacte EPUB-positie | Gaat verder op de plek binnen het hoofdstuk, niet alleen bij het hoofdstuk. |
| Bladwijzers | Paginabladwijzers voor strips en PDF, en bladwijzers in de tekst voor EPUB, opgeslagen in Kavita. |
| Markeringen | EPUB-markeringen synchroniseren via de annotatie-API van Kavita, met de markeerkleuren van je eigen server. |
| Notities | EPUB-notities synchroniseren, inclusief opgemaakte notities die in de weblezer van Kavita zijn geschreven. |
| Annotatiebeheer | Voeg markeringen en notities toe, bewerk en verwijder ze vanuit de lezer of de lijst Annotaties. Wijzigingen komen op de server terecht. |
| Offline wijzigingen | Worden eerst op het apparaat opgeslagen en verzonden zodra de server weer bereikbaar is. |

Markeringen en notities die je in BiblioFuse maakt, verschijnen in het annotatiepaneel van de Kavita-weblezer, en annotaties die op het web zijn gemaakt, verschijnen in BiblioFuse zodra je het boek weer opent.

## Ondersteuning voor bestandsformaten op een Kavita-server

Niet elk formaat ondersteunt elke vorm van synchronisatie. Dat is een beperking van wat Kavita per formaat opslaat, geen instelling die je kunt wijzigen.

| Formaat | Lezen | Voortgang | Bladwijzers | Markeringen / notities |
|---|---|---|---|---|
| CBZ / CBR | Gestreamd, geen volledige download | Synchroniseert | Paginabladwijzers | Niet ondersteund |
| EPUB | Gestreamd | Synchroniseert (op positie in het hoofdstuk) | Synchroniseren | Synchroniseren (Kavita-annotatie-API) |
| PDF | Ja | Synchroniseert (per pagina) | Paginabladwijzers | Niet ondersteund (Kavita-annotaties zijn alleen voor EPUB) |

In de praktijk:

- **Strips en manga (CBZ, CBR)** openen pagina voor pagina. Er wordt niets volledig gedownload, tenzij je ervoor kiest het boek op te slaan om offline te lezen.
- **EPUB** krijgt de complete set: voortgang, bladwijzers, markeringen en notities.
- **PDF** houdt de pagina en paginabladwijzers gesynchroniseerd. Kavita heeft geen annotatieopslag voor PDF, dus PDF-markeringen blijven op je apparaat.

## Je Kavita-server toevoegen in minder dan een minuut

Je hebt BiblioFuse Pro nodig voor serververbindingen, het adres van je Kavita-server en je Kavita-authenticatiesleutel (open in Kavita je gebruikersinstellingen en zoek het gedeelte voor de API-sleutel of clients van derden).

### Optie 1: een QR-code scannen (het snelst)

1. Open op een computer de [BiblioFuse QR-generator voor Kavita en Komga](https://bibliofuse.com/nl/tools/qr-generator/).
2. Kies **Kavita**, voer je serveradres in en plak je authenticatiesleutel. De QR-code wordt in je browser gemaakt; er wordt nergens iets naartoe gestuurd.
3. Open op je telefoon of tablet **BiblioFuse > Instellingen > OPDS** en tik op het **QR-scanpictogram**.
4. Scan de code. De server wordt toegevoegd met het adres en de sleutel al ingevuld.

Behandel de QR-code als een wachtwoord. Hij bevat je authenticatiesleutel, dus plaats er geen screenshot van online.

### Optie 2: zelf invoeren

Open **BiblioFuse > Instellingen > OPDS > Server toevoegen**, kies Kavita en voer het adres (bijvoorbeeld `http://192.168.1.20:5000`) en de authenticatiesleutel handmatig in.

Zodra de server is toegevoegd, open je het paneel Locatie boven in de Bibliotheek en kies je je Kavita-server. De volledige [installatiegids](https://bibliofuse.com/nl/guide/) bevat screenshots van elke stap.

## Markeringen en notities beheren

Selecteer tekst in een Kavita-EPUB om die te markeren of een notitie toe te voegen. Bij een Kavita-boek toont de kleurkiezer de vijf markeerkleuren van je server, zodat een markering er in BiblioFuse en in de weblezer van Kavita hetzelfde uitziet.

- **Toevoegen:** selecteer tekst en kies Markeren of Notitie.
- **Bewerken:** selecteer binnen een bestaande markering en kies Annotatie bewerken, of bewerk haar vanuit de lijst Annotaties. Je kunt de kleur en de notitie wijzigen.
- **Verwijderen:** verwijder haar vanuit de lezer of de lijst Annotaties. De verwijdering wordt naar Kavita gestuurd.

De lijst Annotaties toont elke markering en notitie in het huidige boek, met zoekfunctie, en springt direct naar de passage wanneer je er een aantikt.

## Welke apparaten worden ondersteund

- **iPhone, iPad en iPhone Duo:** synchronisatie van voortgang, bladwijzers en annotaties, in BiblioFuse 2.1.15.
- **Apple Vision Pro:** Kavita-bibliotheken, voortgang, bladwijzers en annotaties in de native visionOS-app, in BiblioFuse 2.1.15.
- **Android-telefoons en -tablets:** synchronisatie van voortgang, bladwijzers en annotaties, in BiblioFuse 2.0.16.
- **Apple TV en Android TV:** deze lezen vanaf een BiblioFuse-host op je eigen netwerk en maken geen verbinding met Kavita.

De [functiematrix](https://bibliofuse.com/nl/features/) laat zien wat elk platform ondersteunt en sinds welke versie.

## Geen Kavita-server? BiblioFuse heeft een eigen host

Kavita is een uitstekende server, maar je hebt er geen nodig. BiblioFuse bevat een eigen gratis host voor Mac, Windows-pc, Docker en Synology NAS. Wijs de mappen aan die je al hebt en stream naar BiblioFuse op je andere apparaten via wifi thuis, of op afstand met Tailscale.

Het verschil dat de moeite waard is om te kennen: op een BiblioFuse-host synchroniseren leesvoortgang, bladwijzers, markeringen en notities voor **elk** ondersteund formaat — CBZ, CBR, PDF, EPUB en TXT — omdat de host annotaties zelf opslaat in plaats van afhankelijk te zijn van een serverfunctie per formaat.

| | Kavita-server | BiblioFuse-host |
|---|---|---|
| Draait op | Docker, Windows, Linux, macOS | Mac, Windows-pc, Docker, Synology |
| Voortgang synchroniseren | CBZ, CBR, EPUB, PDF | CBZ, CBR, PDF, EPUB, TXT |
| Bladwijzers synchroniseren | CBZ, CBR, EPUB, PDF | CBZ, CBR, PDF, EPUB, TXT |
| Markeringen / notities synchroniseren | EPUB | CBZ, CBR, PDF, EPUB, TXT |
| Weblezer | Ja | Ja (NAS- en Docker-host) |
| Bibliotheekserver voor meerdere gebruikers | Ja | Nee — een persoonlijke bibliotheekhost |

Je kunt beide gebruiken. Veel lezers houden manga op Kavita en voegen een BiblioFuse-host toe voor een map met PDF’s of tekstbestanden. Bekijk [BiblioFuse Reader](https://bibliofuse.com/nl/comicreader/) voor de hostdownloads en de installatiekiezer.

## Komga en andere OPDS-servers

BiblioFuse maakt ook native verbinding met Komga, met leesvoortgang die in beide richtingen synchroniseert en exacte EPUB-positie. Synchronisatie van bladwijzers en annotaties is alleen voor Kavita, omdat Komga daar geen API voor heeft. Elke andere OPDS 1.x-server werkt als catalogus, met streaming per pagina wanneer de server OPDS-PSE ondersteunt.

Ben je nog aan het bepalen hoe je een collectie ordent voordat je die op een server zet? Dan zijn de [gids voor het beheren van een digitale stripbibliotheek](https://bibliofuse.com/nl/blog/digital-comic-library-management-guide/) en de [vergelijking van CBZ, CBR en EPUB](https://bibliofuse.com/nl/blog/cbz-vs-cbr-vs-epub-formats-explained/) goede startpunten.

## FAQ

**Synchroniseert BiblioFuse leesvoortgang met Kavita?**
Ja, in beide richtingen. BiblioFuse gebruikt de API van Kavita, dus een boek gaat verder waar je volgens Kavita was gebleven en je voortgang wordt teruggeschreven terwijl je leest. Dit werkt voor CBZ, CBR, EPUB en PDF.

**Kan ik markeringen en notities met Kavita synchroniseren op iPhone of iPad?**
Ja, voor EPUB-boeken. Markeringen en notities die je in BiblioFuse maakt, worden opgeslagen via de annotatie-API van Kavita en verschijnen in de weblezer van Kavita. Je kunt ze aan beide kanten toevoegen, bewerken en verwijderen.

**Waarom worden markeringen niet ondersteund voor CBZ, CBR of PDF op Kavita?**
Kavita slaat alleen annotaties op voor EPUB. Strips en PDF synchroniseren nog steeds leesvoortgang en paginabladwijzers. Wil je dat markeringen en notities in PDF of strips synchroniseren, dan ondersteunt een BiblioFuse-host ze voor elk formaat.

**Moet ik een hele strip downloaden om die vanaf Kavita te lezen?**
Nee. CBZ en CBR worden pagina voor pagina gestreamd. Je kunt een boek desgewenst opslaan om offline te lezen.

**Wat is de snelste manier om een Kavita-server aan BiblioFuse toe te voegen?**
Maak in je browser een QR-code met de BiblioFuse QR-generator, open daarna Instellingen > OPDS in de app en tik op het QR-scanpictogram. Het serveradres en de authenticatiesleutel worden voor je ingevuld.

**Is Kavita-ondersteuning gratis in BiblioFuse?**
Lokale bestanden lezen is gratis. Verbinden met Kavita-, Komga- en OPDS-servers hoort bij BiblioFuse Pro, verkrijgbaar als maand- of jaarabonnement of als eenmalige levenslange aankoop.

**Werkt BiblioFuse met Kavita via internet?**
Ja. Als je Kavita-server van buiten je huis bereikbaar is — via een reverse proxy, een VPN of Tailscale — voer je dat adres in en maakt BiblioFuse op dezelfde manier verbinding.

**Kan ik Kavita en een BiblioFuse-host tegelijk gebruiken?**
Ja. Beide verschijnen in het paneel Locatie en elk houdt zijn eigen voortgang, bladwijzers en annotaties bij.
