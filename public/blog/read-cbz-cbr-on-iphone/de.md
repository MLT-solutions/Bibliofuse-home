# So liest du CBZ- und CBR-Comics auf dem iPhone

Du hast eine CBZ- oder CBR-Datei gefunden — ein Manga-Kapitel, einen Graphic Novel, einen gescannten Comic — und sie auf deinem iPhone angetippt. Nichts passierte. Keine App meldete sich. Du bist nicht allein.

iOS unterstützt CBZ- oder CBR-Dateien nicht von Haus aus. Apples Books-App verarbeitet EPUB und PDF, ignoriert aber archivbasierte Comic-Formate vollständig. Um diese Dateien auf dem iPhone richtig zu lesen, brauchst du eine spezialisierte App. [BiblioFuse](/en/) ist genau dafür gebaut — es liest CBZ, CBR, ZIP, RAR, EPUB, PDF und TXT, mit einem Reader für lange Lesesitzungen und große Sammlungen.

Diese Anleitung erklärt alles: was diese Formate sind, wie du Dateien auf dein iPhone bekommst und wie du das Leseerlebnis optimierst.

## Was CBZ und CBR wirklich sind

CBZ und CBR sind Comic-Archivformate. Sie sind keine spezielle Kodierung — es sind gewöhnliche ZIP- und RAR-Dateien mit umbenannten Erweiterungen. Entpacke eine `.cbz`-Datei und du findest einen Ordner mit sequenziellen Bildern: `001.jpg`, `002.jpg`, in Lesereihenfolge.

| Endung | Container | Typische Verwendung |
|--------|-----------|---------------------|
| CBZ | ZIP | Westliche Comics, Manga, Fan-Scans |
| CBR | RAR | Ältere Comic-Veröffentlichungen, japanische Scans |
| ZIP | ZIP | Wie CBZ, ohne umbenannte Endung |
| RAR | RAR | Wie CBR, ohne umbenannte Endung |

Das Format ist bewusst einfach gehalten — kein DRM, keine Verschlüsselung, keine proprietäre Struktur. Genau deshalb ist es das bevorzugte Format in Manga- und Comic-Communities.

Das Problem auf dem iPhone: iOS öffnet ZIP-Dateien nur als generisches Archiv — die Bilder darin werden nicht als Comic angezeigt. Du brauchst einen Reader, der die sequenzielle Seitenstruktur versteht.

## Schritt 1 — BiblioFuse installieren

[BiblioFuse](/en/) ist im App Store verfügbar. Kostenlos herunterladen, kein Konto erforderlich.

Nach der Installation erstellt es zwei Ordner in der Dateien-App:
- **iCloud Drive → BiblioFuse** — für synchronisierten Speicher über alle Geräte
- **Auf meinem iPhone → BiblioFuse** — für lokalen Speicher

Vor dem Import musst du nichts konfigurieren.

## Schritt 2 — Comics auf das iPhone übertragen

Drei Hauptwege, um CBZ- oder CBR-Dateien auf dein iPhone zu bringen.

### Teilen aus der Dateien-App

Wenn dein Comic bereits in iCloud Drive oder auf einem zugänglichen Mac/PC ist:

1. Öffne die **Dateien**-App
2. Navigiere zur Datei
3. Halte die Datei gedrückt und tippe auf **Teilen**
4. Wähle **BiblioFuse** im Teilen-Menü

Die Datei wird sofort importiert.

### WLAN-Transfer — Am besten für große Sammlungen

Mit dem WLAN-Transfer ziehst du einen ganzen Comic-Ordner von Mac oder PC in BiblioFuse — ohne Kabel oder iTunes.

1. Gehe in BiblioFuse zu **Einstellungen → WLAN-Import** und aktiviere es
2. Eine lokale URL erscheint — z. B. `http://192.168.1.x:8080`
3. Öffne diese URL im Browser deines Computers
4. Ziehe deine CBZ- oder CBR-Dateien ins Browserfenster
5. Die Dateien werden direkt in deine iPhone-Bibliothek übertragen

Nach dem Transfer deaktiviere den WLAN-Import. Deine Dateien erscheinen automatisch in der Bibliothek.

### iCloud Drive — Für geräteübergreifenden Zugriff

Wenn du auf iPhone, iPad und Mac liest, speichere Comics in iCloud Drive.

1. Kopiere auf dem Mac deinen Comic-Ordner nach **iCloud Drive → BiblioFuse**
2. Öffne auf dem iPhone die Dateien-App und warte auf den Download
3. Öffne BiblioFuse — der Ordner erscheint automatisch in der Bibliothek

Hier gespeicherte Bücher synchronisieren den Lesefortschritt über alle Geräte via iCloud.

## Schritt 3 — Ein Heft öffnen und lesen

Wenn deine Comics in der Bibliothek sind, tippe auf ein Cover, um es zu öffnen. BiblioFuse lädt das Archiv, entpackt die Seiten und zeigt die erste Seite sofort an.

### Seitennavigation

- **Links/rechts wischen** — eine Seite vor oder zurück
- **Rechten Rand antippen** — nächste Seite
- **Linken Rand antippen** — vorherige Seite
- **Mitte antippen** — Navigationsleiste ein-/ausblenden

### Leserichtung

Für Manga — das von rechts nach links gelesen wird — kannst du die Leserichtung umkehren. Tippe auf die Mitte des Bildschirms, öffne die Steuerung und wechsle zu **Von rechts nach links**.

### Doppelseiten

Viele westliche Comics haben Kunstwerke über zwei Seiten. Drehe das iPhone ins Querformat und [BiblioFuse](/en/) wechselt automatisch zur Doppelseitenansicht.

### Zoom

Kneifen zum Zoomen auf jeder Seite. BiblioFuse behält hochauflösendes Rendering.

## Eine Serie organisieren

Wenn du mehrere Bände derselben Serie importierst, gruppiert BiblioFuse sie nach Ordner. Halte ein Cover gedrückt, um eine Bewertung oder ein Tag hinzuzufügen.

## Fehlerbehebung

**Die Datei wurde übertragen, erscheint aber nicht in der Bibliothek.** Ziehe nach unten zum Aktualisieren. Prüfe, ob die Datei in **Auf meinem iPhone → BiblioFuse** in der Dateien-App liegt.

**Seiten sind in falscher Reihenfolge.** Manche Dateien nummerieren Seiten ohne führende Nullen. BiblioFuse liest alphanumerisch. Bei falscher Reihenfolge liegt ein Benennungsproblem im Archiv vor.

**CBR-Dateien öffnen sich nicht.** Sehr alte CBR-Dateien verwenden RAR5. Versuche, die Datei als CBZ neu zu verpacken.

## Nächste Schritte

Sobald deine erste Serie importiert ist, entdecke, was [BiblioFuse](/en/) noch kann. Der Werkzeuge-Tab verwaltet Komprimierung und Konvertierung direkt auf dem Gerät.
