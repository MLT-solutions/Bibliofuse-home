#!/usr/bin/env python3
"""Apply hardcoded translations for the 3 new archivePage keys."""
import json
from pathlib import Path

base = Path(__file__).parent.parent / "src" / "locales"

EN_FAQ7Q = "Can it match a color scan with a black-and-white version of the same content?"
EN_FAQ8Q = "Does image resolution affect duplicate detection?"

TRANSLATIONS = {
    "es": {
        "bullet4": "Detecta duplicados entre distintas resoluciones y modos de color — un escaneo en escala de grises de 1200px y uno en color de 3000px de la misma página aún se marcan como duplicados",
        "faq7q": "¿Puede comparar un escaneo a color con una versión en blanco y negro del mismo contenido?",
        "faq7a": "Sí. El algoritmo dHash trabaja con gradientes de luminancia, no con valores de color. Un escaneo a todo color y una versión en escala de grises de la misma página producen hashes casi idénticos y se marcarán como duplicados.",
        "faq8q": "¿Afecta la resolución de imagen a la detección de duplicados?",
        "faq8a": "No. dHash redimensiona cada imagen a una cuadrícula fija pequeña antes de comparar, por lo que un escaneo de 1200px y uno de 3000px de la misma página generan el mismo hash. Las diferencias de resolución entre fuentes se ignoran por completo.",
    },
    "fr": {
        "bullet4": "Détecte les doublons quelle que soit la résolution ou le mode couleur — un scan en niveaux de gris à 1200px et un scan couleur à 3000px de la même page sont quand même signalés",
        "faq7q": "Peut-il faire correspondre un scan couleur avec une version en noir et blanc du même contenu ?",
        "faq7a": "Oui. L'algorithme dHash travaille sur les gradients de luminance, pas sur les valeurs de couleur. Un scan couleur et une version en niveaux de gris de la même page produisent des hashes presque identiques et seront signalés comme doublons.",
        "faq8q": "La résolution de l'image affecte-t-elle la détection des doublons ?",
        "faq8a": "Non. dHash redimensionne chaque image vers une petite grille fixe avant de comparer, donc un scan à 1200px et un à 3000px de la même page donnent la même valeur de hash. Les différences de résolution entre les sources sont complètement ignorées.",
    },
    "nl": {
        "bullet4": "Herkent duplicaten bij verschillende resoluties en kleurmodi — een grijswaardenscan van 1200px en een kleurscan van 3000px van dezelfde pagina worden toch gemarkeerd",
        "faq7q": "Kan het een kleurscan vergelijken met een zwart-witversie van dezelfde inhoud?",
        "faq7a": "Ja. Het dHash-algoritme werkt op luminantiegradiënten, niet op kleurwaarden. Een volkleurenscan en een grijswaardenscan van dezelfde pagina leveren vrijwel identieke hashes op en worden als duplicaten gemarkeerd.",
        "faq8q": "Heeft de beeldresolutie invloed op de duplicaatdetectie?",
        "faq8a": "Nee. dHash schaalt elke afbeelding naar een klein vast raster voordat er vergeleken wordt, waardoor een scan van 1200px en een van 3000px van dezelfde pagina dezelfde hashwaarde opleveren. Resolutieverschillen tussen bronnen worden volledig genegeerd.",
    },
    "pt": {
        "bullet4": "Detecta duplicados entre diferentes resoluções e modos de cor — um scan em escala de cinza de 1200px e um scan colorido de 3000px da mesma página ainda são sinalizados",
        "faq7q": "Ele pode comparar um scan colorido com uma versão em preto e branco do mesmo conteúdo?",
        "faq7a": "Sim. O algoritmo dHash trabalha com gradientes de luminância, não com valores de cor. Um scan colorido e uma versão em escala de cinza da mesma página produzem hashes quase idênticos e serão sinalizados como duplicados.",
        "faq8q": "A resolução da imagem afeta a detecção de duplicados?",
        "faq8a": "Não. O dHash redimensiona cada imagem para uma grade fixa pequena antes de comparar, então um scan de 1200px e um de 3000px da mesma página geram o mesmo valor de hash. As diferenças de resolução entre fontes são completamente ignoradas.",
    },
    "ru": {
        "bullet4": "Находит дубликаты при разных разрешениях и цветовых режимах — скан в оттенках серого 1200px и цветной скан 3000px одной и той же страницы всё равно помечаются",
        "faq7q": "Может ли программа сравнить цветной скан с чёрно-белой версией того же контента?",
        "faq7a": "Да. Алгоритм dHash работает с градиентами яркости, а не со значениями цвета. Полноцветный скан и версия в оттенках серого одной и той же страницы дают почти идентичные хэши и будут помечены как дубликаты.",
        "faq8q": "Влияет ли разрешение изображения на обнаружение дубликатов?",
        "faq8a": "Нет. dHash уменьшает каждое изображение до небольшой фиксированной сетки перед сравнением, поэтому скан 1200px и скан 3000px одной и той же страницы дают одинаковое значение хэша. Различия в разрешении между источниками полностью игнорируются.",
    },
    "zh": {
        "bullet4": "跨分辨率和色彩模式识别重复项——同一页面的 1200px 灰度扫描和 3000px 彩色扫描仍会被标记",
        "faq7q": "它能将彩色扫描与同一内容的黑白版本进行匹配吗？",
        "faq7a": "可以。dHash 算法基于亮度梯度而非色彩值进行比较。同一页面的全彩扫描和灰度版本会产生几乎相同的哈希值，并被标记为重复项。",
        "faq8q": "图像分辨率会影响重复检测吗？",
        "faq8a": "不会。dHash 在比较前会将每张图像缩放到固定的小网格，因此同一页面的 1200px 和 3000px 扫描会生成相同的哈希值。来自不同来源的分辨率差异会被完全忽略。",
    },
    "ja": {
        "bullet4": "解像度やカラーモードが異なっていても重複を検出 — 同じページの1200pxのグレースケールスキャンと3000pxのカラースキャンも重複としてフラグが立てられます",
        "faq7q": "カラースキャンと同じコンテンツの白黒バージョンを照合できますか？",
        "faq7a": "はい。dHashアルゴリズムは色の値ではなく輝度のグラデーションで動作します。同じページのフルカラースキャンとグレースケール版はほぼ同一のハッシュ値を生成し、重複としてフラグが立てられます。",
        "faq8q": "画像の解像度は重複検出に影響しますか？",
        "faq8a": "いいえ。dHashは比較前にすべての画像を小さな固定グリッドにリサイズするため、同じページの1200pxと3000pxのスキャンは同じハッシュ値になります。ソース間の解像度の違いは完全に無視されます。",
    },
    "ko": {
        "bullet4": "해상도와 색상 모드가 달라도 중복을 감지합니다 — 동일 페이지의 1200px 흑백 스캔과 3000px 컬러 스캔도 중복으로 표시됩니다",
        "faq7q": "컬러 스캔과 동일한 콘텐츠의 흑백 버전을 매칭할 수 있나요?",
        "faq7a": "예. dHash 알고리즘은 색상 값이 아닌 밝기 그래디언트로 작동합니다. 동일한 페이지의 풀컬러 스캔과 흑백 버전은 거의 동일한 해시 값을 생성하여 중복으로 표시됩니다.",
        "faq8q": "이미지 해상도가 중복 감지에 영향을 미치나요?",
        "faq8a": "아니요. dHash는 비교 전에 모든 이미지를 작은 고정 그리드로 리사이즈하므로, 동일 페이지의 1200px와 3000px 스캔은 같은 해시 값을 생성합니다. 소스 간 해상도 차이는 완전히 무시됩니다.",
    },
    "id": {
        "bullet4": "Mendeteksi duplikat di berbagai resolusi dan mode warna — hasil pindaian skala abu-abu 1200px dan pindaian berwarna 3000px dari halaman yang sama tetap ditandai",
        "faq7q": "Bisakah mencocokkan pindaian berwarna dengan versi hitam-putih dari konten yang sama?",
        "faq7a": "Ya. Algoritma dHash bekerja berdasarkan gradien luminansi, bukan nilai warna. Pindaian berwarna penuh dan versi skala abu-abu dari halaman yang sama menghasilkan hash yang hampir identik dan akan ditandai sebagai duplikat.",
        "faq8q": "Apakah resolusi gambar memengaruhi deteksi duplikat?",
        "faq8a": "Tidak. dHash mengubah ukuran setiap gambar ke grid tetap yang kecil sebelum membandingkan, sehingga pindaian 1200px dan 3000px dari halaman yang sama menghasilkan nilai hash yang sama. Perbedaan resolusi antar sumber diabaikan sepenuhnya.",
    },
    "ms": {
        "bullet4": "Mengesan duplikat merentas resolusi dan mod warna yang berbeza — imbasan skala kelabu 1200px dan imbasan berwarna 3000px pada halaman yang sama tetap ditandakan",
        "faq7q": "Bolehkah ia memadankan imbasan berwarna dengan versi hitam-putih kandungan yang sama?",
        "faq7a": "Ya. Algoritma dHash beroperasi berdasarkan kecerunan luminans, bukan nilai warna. Imbasan berwarna penuh dan versi skala kelabu halaman yang sama menghasilkan hash yang hampir sama dan akan ditandakan sebagai duplikat.",
        "faq8q": "Adakah resolusi imej mempengaruhi pengesanan duplikat?",
        "faq8a": "Tidak. dHash mengubah saiz setiap imej kepada grid tetap yang kecil sebelum membandingkan, jadi imbasan 1200px dan 3000px halaman yang sama menghasilkan nilai hash yang sama. Perbezaan resolusi antara sumber diabaikan sepenuhnya.",
    },
}

for lang_code, t in TRANSLATIONS.items():
    fp = base / lang_code / "translation.json"
    d = json.loads(fp.read_text(encoding="utf-8"))

    d["redesign"]["archivePage"]["scanning"]["bullet4"] = t["bullet4"]

    faq = d["redesign"]["archivePage"]["faq"]
    # Remove any English stubs (from sync-keys) for these 2 entries
    while faq and faq[-1]["q"] in (EN_FAQ7Q, EN_FAQ8Q):
        faq.pop()
    faq.append({"q": t["faq7q"], "a": t["faq7a"]})
    faq.append({"q": t["faq8q"], "a": t["faq8a"]})

    fp.write_text(json.dumps(d, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"✓ {lang_code}")

print("All done.")
