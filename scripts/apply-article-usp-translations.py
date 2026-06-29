#!/usr/bin/env python3
"""
Inject USP content (resolution/color invariance) into 10 non-English locale
versions of 3 archive blog articles.
"""
from pathlib import Path

base = Path(__file__).parent.parent / "public" / "blog"
LANGS = ["es", "fr", "nl", "pt", "ru", "zh", "ja", "ko", "id", "ms"]

errors = []

def insert_before(text, anchor, insertion):
    idx = text.find(anchor)
    if idx == -1:
        return text, False
    return text[:idx] + insertion + text[idx:], True

def inject_after_paragraph(text, anchor, insertion):
    """Insert after the paragraph containing anchor (at the next blank line)."""
    idx = text.find(anchor)
    if idx == -1:
        return text, False
    end = text.find('\n\n', idx)
    if end == -1:
        end = len(text)
    return text[:end] + insertion + text[end:], True

def replace_first(text, old, new):
    if old not in text:
        return text, False
    return text.replace(old, new, 1), True


# ═══════════════════════════════════════════════════════════════════════════
# 1. perceptual-hashing-duplicate-detection
# ═══════════════════════════════════════════════════════════════════════════

# Anchor = end of Hamming sentence in each locale
PHASH_HAMMING_ANCHOR = {
    "es": "**distancia de Hamming** baja.",
    "fr": "**distance de Hamming** faible.",
    "nl": "lage **Hamming-afstand**.",
    "pt": "**distância de Hamming** baixa.",
    "ru": "малым **расстоянием Хэмминга**.",
    "zh": "**汉明距离**很低。",
    "ja": "低い**ハミング距離**のハッシュを生成する。",
    "ko": "낮은 **해밍 거리**의 해시를 생성한다.",
    "id": "**jarak Hamming** yang rendah.",
    "ms": "**jarak Hamming** yang rendah.",
}

PHASH_PROPERTIES = {
    "es": (
        "\n\nDos propiedades importantes se derivan directamente de estos pasos:\n\n"
        "- **La resolución es irrelevante.** El paso 1 redimensiona cada imagen a la misma cuadrícula fija antes de calcular nada. Un escaneo de 1200px y uno de 3000px de la misma página se convierten en la misma miniatura de 32×32 y producen el mismo hash.\n"
        "- **El modo de color es irrelevante.** El paso 2 convierte a escala de grises antes de comparar. Un escaneo a todo color y uno en escala de grises (blanco y negro) de la misma página producen hashes casi idénticos, porque el algoritmo solo analiza la estructura de luminancia, no los valores de color."
    ),
    "fr": (
        "\n\nDeux propriétés importantes découlent directement de ces étapes :\n\n"
        "- **La résolution est sans importance.** L'étape 1 redimensionne chaque image vers la même grille fixe avant tout calcul. Un scan à 1200px et un à 3000px de la même page donnent la même vignette de 32×32 et produisent le même hash.\n"
        "- **Le mode couleur est sans importance.** L'étape 2 convertit en niveaux de gris avant la comparaison. Un scan en couleur et un scan en niveaux de gris de la même page produisent des hashes presque identiques, car l'algorithme analyse uniquement la structure de luminance, pas les valeurs de couleur."
    ),
    "nl": (
        "\n\nTwee belangrijke eigenschappen vloeien rechtstreeks voort uit deze stappen:\n\n"
        "- **Resolutie is irrelevant.** Stap 1 schaalt elke afbeelding naar hetzelfde vaste raster voordat er iets wordt berekend. Een scan van 1200px en een van 3000px van dezelfde pagina worden beide omgezet naar dezelfde 32×32-miniatuur en produceren dezelfde hash.\n"
        "- **Kleurmodus is irrelevant.** Stap 2 converteert naar grijswaarden vóór de vergelijking. Een volkleurenscan en een grijswaardenscan van dezelfde pagina produceren bijna identieke hashes, omdat het algoritme alleen de luminantiestructuur analyseert, niet de kleurwaarden."
    ),
    "pt": (
        "\n\nDuas propriedades importantes derivam diretamente dessas etapas:\n\n"
        "- **A resolução é irrelevante.** A etapa 1 redimensiona cada imagem para a mesma grade fixa antes de qualquer cálculo. Um scan de 1200px e um de 3000px da mesma página tornam-se a mesma miniatura de 32×32 e produzem o mesmo hash.\n"
        "- **O modo de cor é irrelevante.** A etapa 2 converte para escala de cinza antes da comparação. Um scan colorido e um scan em escala de cinza da mesma página produzem hashes quase idênticos, pois o algoritmo analisa apenas a estrutura de luminância, não os valores de cor."
    ),
    "ru": (
        "\n\nДва важных свойства следуют непосредственно из этих шагов:\n\n"
        "- **Разрешение не имеет значения.** Шаг 1 изменяет размер каждого изображения до одной и той же фиксированной сетки перед любыми вычислениями. Скан на 1200px и скан на 3000px одной и той же страницы оба превращаются в одинаковую миниатюру 32×32 и дают одинаковый хэш.\n"
        "- **Цветовой режим не имеет значения.** Шаг 2 конвертирует в оттенки серого перед сравнением. Цветной скан и скан в оттенках серого одной и той же страницы дают почти идентичные хэши, потому что алгоритм анализирует только яркостную структуру, а не значения цвета."
    ),
    "zh": (
        "\n\n这些步骤直接带来两个重要特性：\n\n"
        "- **分辨率无关紧要。** 第 1 步在计算之前将每张图像调整为相同的固定网格。同一页面的 1200px 扫描和 3000px 扫描都会缩小为相同的 32×32 缩略图，并产生相同的哈希值。\n"
        "- **色彩模式无关紧要。** 第 2 步在比较之前转换为灰度。同一页面的彩色扫描和灰度（黑白）扫描产生几乎相同的哈希值，因为算法只分析亮度结构，而不是颜色值。"
    ),
    "ja": (
        "\n\nこれらのステップから直接、2つの重要な特性が導かれます：\n\n"
        "- **解像度は関係ありません。** ステップ1は、計算の前にすべての画像を同じ固定グリッドにリサイズします。同じページの1200pxスキャンと3000pxスキャンはどちらも同じ32×32サムネイルになり、同じハッシュ値を生成します。\n"
        "- **カラーモードは関係ありません。** ステップ2は比較前にグレースケールに変換します。同じページのフルカラースキャンとグレースケールスキャンは、アルゴリズムが輝度構造のみを分析し色の値は見ないため、ほぼ同一のハッシュ値を生成します。"
    ),
    "ko": (
        "\n\n이 단계들로부터 두 가지 중요한 특성이 직접 도출됩니다:\n\n"
        "- **해상도는 관계없습니다.** 1단계는 계산 전에 모든 이미지를 동일한 고정 그리드로 크기를 조정합니다. 같은 페이지의 1200px 스캔과 3000px 스캔은 모두 동일한 32×32 썸네일이 되어 같은 해시 값을 생성합니다.\n"
        "- **색상 모드는 관계없습니다.** 2단계는 비교 전에 그레이스케일로 변환합니다. 같은 페이지의 풀컬러 스캔과 그레이스케일 스캔은 알고리즘이 색상 값이 아닌 밝기 구조만 분석하므로 거의 동일한 해시 값을 생성합니다."
    ),
    "id": (
        "\n\nDua sifat penting muncul langsung dari langkah-langkah ini:\n\n"
        "- **Resolusi tidak relevan.** Langkah 1 mengubah ukuran setiap gambar ke grid tetap yang sama sebelum komputasi apa pun. Pemindaian 1200px dan 3000px dari halaman yang sama keduanya menjadi thumbnail 32×32 yang sama dan menghasilkan hash yang sama.\n"
        "- **Mode warna tidak relevan.** Langkah 2 mengonversi ke skala abu-abu sebelum perbandingan. Pemindaian berwarna penuh dan pemindaian skala abu-abu dari halaman yang sama menghasilkan hash yang hampir identik, karena algoritma hanya menganalisis struktur luminansi, bukan nilai warna."
    ),
    "ms": (
        "\n\nDua sifat penting terhasil terus daripada langkah-langkah ini:\n\n"
        "- **Resolusi tidak relevan.** Langkah 1 mengubah saiz setiap imej kepada grid tetap yang sama sebelum sebarang pengiraan. Imbasan 1200px dan 3000px daripada halaman yang sama kedua-duanya menjadi lakaran kecil 32×32 yang sama dan menghasilkan hash yang sama.\n"
        "- **Mod warna tidak relevan.** Langkah 2 menukar kepada skala kelabu sebelum perbandingan. Imbasan berwarna penuh dan imbasan skala kelabu daripada halaman yang sama menghasilkan hash yang hampir sama, kerana algoritma hanya menganalisis struktur luminans, bukan nilai warna."
    ),
}

# Limits heading per locale — insert Case 5 block before it
PHASH_LIMITS_HEADING = {
    "es": "## Los Límites del Hash Perceptual",
    "fr": "## Les limites du hachage perceptuel",
    "nl": "## De grenzen van perceptuele hashing",
    "pt": "## Os Limites do Hash Perceptual",
    "ru": "## Ограничения перцептивного хеширования",
    "zh": "## 感知哈希的局限性",
    "ja": "## 知覚ハッシュの限界",
    "ko": "## 지각 해싱의 한계",
    "id": "## Batas Perceptual Hashing",
    "ms": "## Had Pencincangan Persepsi",
}

PHASH_CASE5 = {
    "es": (
        "**Caso 5: Escaneo en color frente a escaneo en blanco y negro**\n"
        "Tienes dos copias del mismo volumen de manga: una es un escaneo en color de una edición digital temprana, la otra es un escaneo en escala de grises de una reedición posterior. Tamaños de archivo diferentes, profundidad de color diferente, apariencia visual diferente. Pero como dHash convierte a escala de grises antes de aplicar el hash, ambas copias se reducen a la misma huella de luminancia → marcadas como duplicados. Este es un caso que casi todos los demás detectores de duplicados pasan por alto.\n\n"
    ),
    "fr": (
        "**Cas 5 : Scan couleur contre scan en noir et blanc**\n"
        "Vous avez deux copies du même volume de manga : une est un scan couleur d'une édition numérique ancienne, l'autre est un scan en niveaux de gris d'une réédition ultérieure. Tailles de fichier différentes, profondeur de couleur différente, apparence visuelle différente. Mais comme dHash convertit en niveaux de gris avant le hachage, les deux copies se réduisent à la même empreinte de luminance → signalées comme doublons. C'est un cas que presque tous les autres détecteurs de doublons manquent entièrement.\n\n"
    ),
    "nl": (
        "**Geval 5: Kleurenscan versus zwart-witscan**\n"
        "Je hebt twee kopieën van hetzelfde mangavolume: één is een kleurenscan van een vroege digitale uitgave, de andere is een grijswaardenscan van een latere heruitgave. Verschillende bestandsgroottes, verschillende kleurdiepte, verschillende visuele weergave. Maar omdat dHash converteert naar grijswaarden vóór het hashen, worden beide kopieën gereduceerd tot dezelfde luminantie-vingerafdruk → gemarkeerd als duplicaat. Dit is een geval dat bijna alle andere duplicaatdetectors volledig missen.\n\n"
    ),
    "pt": (
        "**Caso 5: Scan colorido vs. scan em preto e branco**\n"
        "Você tem duas cópias do mesmo volume de manga: uma é um scan colorido de uma edição digital antiga, a outra é um scan em escala de cinza de uma reedição posterior. Tamanhos de arquivo diferentes, profundidade de cor diferente, aparência visual diferente. Mas como o dHash converte para escala de cinza antes de aplicar o hash, ambas as cópias são reduzidas à mesma impressão digital de luminância → marcadas como duplicatas. Este é um caso que quase todos os outros detectores de duplicatas ignoram completamente.\n\n"
    ),
    "ru": (
        "**Случай 5: Цветной скан против чёрно-белого скана**\n"
        "У вас есть две копии одного и того же тома манги: одна — цветной скан из ранней цифровой издания, другая — скан в оттенках серого из более позднего переиздания. Разные размеры файлов, разная глубина цвета, разный визуальный вид. Но поскольку dHash конвертирует в оттенки серого перед хэшированием, обе копии сводятся к одному и тому же отпечатку яркости → помечаются как дубликаты. Это случай, который почти все остальные детекторы дубликатов полностью упускают.\n\n"
    ),
    "zh": (
        "**案例5：彩色扫描与黑白扫描**\n"
        "您有同一本漫画册的两份副本：一份是早期数字版本的彩色扫描，另一份是后来再版的灰度扫描。文件大小不同，色彩深度不同，视觉外观不同。但由于 dHash 在哈希之前会转换为灰度，两个副本都简化为相同的亮度指纹 → 被标记为重复项。这是几乎所有其他重复检测工具完全忽略的情况。\n\n"
    ),
    "ja": (
        "**ケース5：カラースキャンとモノクロスキャン**\n"
        "同じ漫画巻の2つのコピーがあります：1つは初期デジタル版のカラースキャン、もう1つは後の再版のグレースケールスキャンです。ファイルサイズが異なり、色の深度が異なり、見た目も異なります。しかし、dHashはハッシュ前にグレースケールに変換するため、両方のコピーが同じ輝度フィンガープリントに還元され、重複としてフラグが立てられます。これは他のほぼすべての重複検出ツールが完全に見逃すケースです。\n\n"
    ),
    "ko": (
        "**사례 5: 컬러 스캔 대 흑백 스캔**\n"
        "같은 만화 권의 두 복사본이 있습니다: 하나는 초기 디지털 버전의 컬러 스캔이고, 다른 하나는 나중 재판본의 그레이스케일 스캔입니다. 파일 크기가 다르고, 색상 깊이가 다르며, 시각적 외관도 다릅니다. 하지만 dHash는 해싱 전에 그레이스케일로 변환하기 때문에, 두 복사본 모두 동일한 밝기 지문으로 축소되어 중복으로 표시됩니다. 이것은 거의 모든 다른 중복 검출 도구가 완전히 놓치는 경우입니다.\n\n"
    ),
    "id": (
        "**Kasus 5: Pindaian berwarna vs. pindaian hitam-putih**\n"
        "Anda memiliki dua salinan volume manga yang sama: satu adalah pindaian berwarna dari edisi digital awal, yang lain adalah pindaian skala abu-abu dari rilis ulang yang lebih baru. Ukuran file berbeda, kedalaman warna berbeda, tampilan visual berbeda. Tetapi karena dHash mengonversi ke skala abu-abu sebelum hashing, kedua salinan direduksi menjadi sidik jari luminansi yang sama → ditandai sebagai duplikat. Ini adalah kasus yang hampir semua detektor duplikat lain lewatkan sepenuhnya.\n\n"
    ),
    "ms": (
        "**Kes 5: Imbasan berwarna lwn. imbasan hitam putih**\n"
        "Anda mempunyai dua salinan jilid manga yang sama: satu ialah imbasan berwarna daripada edisi digital awal, satu lagi ialah imbasan skala kelabu daripada penerbitan semula yang lebih baharu. Saiz fail berbeza, kedalaman warna berbeza, penampilan visual berbeza. Tetapi kerana dHash menukar kepada skala kelabu sebelum penghasan, kedua-dua salinan direduksi kepada cap jari luminans yang sama → ditandakan sebagai pendua. Ini adalah kes yang hampir semua pengesan pendua lain terlepas pandang sepenuhnya.\n\n"
    ),
}

for lang in LANGS:
    fp = base / "perceptual-hashing-duplicate-detection" / f"{lang}.md"
    text = fp.read_text(encoding="utf-8")

    # Insert properties after Hamming sentence paragraph
    anchor = PHASH_HAMMING_ANCHOR[lang]
    text, ok = inject_after_paragraph(text, anchor, PHASH_PROPERTIES[lang])
    if not ok:
        errors.append(f"phash {lang}: Hamming anchor not found: {anchor[:40]}")
        continue

    # Insert Case 5 before the Limits heading
    limits = PHASH_LIMITS_HEADING[lang]
    text, ok = insert_before(text, limits, PHASH_CASE5[lang])
    if not ok:
        errors.append(f"phash {lang}: Limits heading not found")
        continue

    fp.write_text(text, encoding="utf-8")
    print(f"✓ phash/{lang}")


# ═══════════════════════════════════════════════════════════════════════════
# 2. best-duplicate-file-finder-mac
# ═══════════════════════════════════════════════════════════════════════════

# Anchor = end of the Hamming sentence in each locale's bestfinder article
BESTFINDER_HAMMING_ANCHOR = {
    "es": "más similares son visualmente las dos imágenes.",
    "fr": "plus la paire est visuellement similaire.",
    "nl": "hoe visueel gelijker het paar is.",
    "pt": "mais visualmente semelhante é o par.",
    "ru": "тем визуально ближе пара.",
    "zh": "距离越小，两个文件视觉上越相似。",
    "ja": "距離が短いほど、視覚的により類似したペアです。",
    "ko": "거리가 짧을수록 두 파일이 시각적으로 더 유사합니다.",
    "id": "semakin kecil jaraknya, semakin mirip pasangan tersebut secara visual.",
    "ms": "semakin kecil jaraknya, semakin serupa pasangan tersebut secara visual.",
}

BESTFINDER_HASH_INSERTION = {
    "es": (
        "\n\nComo el algoritmo de hash redimensiona cada imagen a una cuadrícula fija pequeña y convierte a escala de grises antes de comparar, se cumplen dos propiedades que la mayoría de los detectores de duplicados no pueden afirmar: **las diferencias de resolución se ignoran** (un escaneo de 1200px y uno de 3000px de la misma página producen el mismo hash), y **el modo de color se ignora** (un escaneo en color y uno en blanco y negro de la misma página siguen marcándose como duplicados)."
    ),
    "fr": (
        "\n\nParce que l'algorithme de hachage redimensionne chaque image vers une petite grille fixe et convertit en niveaux de gris avant de comparer, deux propriétés s'appliquent que la plupart des détecteurs de doublons ne peuvent pas revendiquer : **les différences de résolution sont ignorées** (un scan à 1200px et un à 3000px de la même page produisent le même hash), et **le mode couleur est ignoré** (un scan couleur et un scan en noir et blanc de la même page sont quand même signalés comme doublons)."
    ),
    "nl": (
        "\n\nOmdat het hashingalgoritme elke afbeelding naar een klein vast raster schaalt en naar grijswaarden converteert vóór de vergelijking, gelden twee eigenschappen die de meeste andere duplicaatdetectors niet kunnen claimen: **resolutieverschillen worden genegeerd** (een scan van 1200px en een van 3000px van dezelfde pagina hashen identiek), en **de kleurmodus wordt genegeerd** (een kleurenscan en een zwart-witscan van dezelfde pagina worden toch als duplicaat gemarkeerd)."
    ),
    "pt": (
        "\n\nComo o algoritmo de hash redimensiona cada imagem para uma grade fixa pequena e converte para escala de cinza antes de comparar, duas propriedades se aplicam que a maioria dos detectores de duplicatas não pode afirmar: **diferenças de resolução são ignoradas** (um scan de 1200px e um de 3000px da mesma página produzem o mesmo hash), e **o modo de cor é ignorado** (um scan colorido e um em preto e branco da mesma página ainda são sinalizados como duplicatas)."
    ),
    "ru": (
        "\n\nПоскольку алгоритм хэширования изменяет размер каждого изображения до небольшой фиксированной сетки и конвертирует в оттенки серого перед сравнением, выполняются два свойства, которых большинство детекторов дубликатов не могут обеспечить: **различия в разрешении игнорируются** (скан 1200px и скан 3000px одной и той же страницы дают одинаковый хэш), и **цветовой режим игнорируется** (цветной скан и чёрно-белый скан одной и той же страницы всё равно помечаются как дубликаты)."
    ),
    "zh": (
        "\n\n由于哈希算法在比较前将每张图像缩放到小型固定网格并转换为灰度，因此具备两个大多数重复检测工具无法实现的特性：**分辨率差异被忽略**（同一页面的 1200px 和 3000px 扫描产生相同的哈希值），以及**色彩模式被忽略**（同一页面的彩色扫描和黑白扫描仍会被标记为重复项）。"
    ),
    "ja": (
        "\n\nハッシュアルゴリズムは比較前にすべての画像を小さな固定グリッドにリサイズしてグレースケールに変換するため、ほとんどの重複検出ツールが主張できない2つの特性を持っています：**解像度の差異は無視されます**（同じページの1200pxと3000pxのスキャンは同一のハッシュ値を生成します）、そして**カラーモードは無視されます**（同じページのカラースキャンと白黒スキャンは依然として重複としてフラグが立てられます）。"
    ),
    "ko": (
        "\n\n해싱 알고리즘은 비교 전에 모든 이미지를 작은 고정 그리드로 크기를 조정하고 그레이스케일로 변환하므로, 대부분의 중복 검출기가 주장할 수 없는 두 가지 특성이 적용됩니다: **해상도 차이는 무시됩니다** (같은 페이지의 1200px와 3000px 스캔은 동일한 해시를 생성합니다), 그리고 **색상 모드는 무시됩니다** (같은 페이지의 컬러 스캔과 흑백 스캔은 여전히 중복으로 표시됩니다)."
    ),
    "id": (
        "\n\nKarena algoritma hashing mengubah ukuran setiap gambar ke grid tetap kecil dan mengonversi ke skala abu-abu sebelum membandingkan, dua sifat berlaku yang sebagian besar pendeteksi duplikat tidak dapat klaim: **perbedaan resolusi diabaikan** (pemindaian 1200px dan 3000px dari halaman yang sama menghasilkan hash yang sama), dan **mode warna diabaikan** (pemindaian berwarna dan hitam-putih dari halaman yang sama tetap ditandai sebagai duplikat)."
    ),
    "ms": (
        "\n\nKerana algoritma penghasan mengubah saiz setiap imej kepada grid tetap kecil dan menukar kepada skala kelabu sebelum membandingkan, dua sifat terpakai yang kebanyakan pengesan pendua tidak dapat dakwa: **perbezaan resolusi diabaikan** (imbasan 1200px dan 3000px daripada halaman yang sama menghasilkan hash yang sama), dan **mod warna diabaikan** (imbasan berwarna dan hitam putih daripada halaman yang sama masih ditandakan sebagai pendua)."
    ),
}

# ADS table row per locale (first cell only, used to find the row)
BESTFINDER_ADS_ROW = {
    "es": "| **Archive Duplicate Scanner** | Hash perceptual | Sí | Sí |",
    "fr": "| **Archive Duplicate Scanner** | Hachage perceptuel | Oui | Oui |",
    "nl": "| **Archive Duplicate Scanner** | Perceptuele hash | Ja | Ja |",
    "pt": "| **Archive Duplicate Scanner** | Hash perceptual | Sim | Sim |",
    "ru": "| **Archive Duplicate Scanner** | Перцептивный хэш | Да | Да |",
    "zh": "| **Archive Duplicate Scanner** | 感知哈希 | 是 | 是 |",
    "ja": "| **Archive Duplicate Scanner** | 知覚ハッシュ | あり | あり |",
    "ko": "| **Archive Duplicate Scanner** | 지각적 해시 | 예 | 예 |",
    "id": "| **Archive Duplicate Scanner** | Perceptual hash | Ya | Ya | Hanya Tempat Sampah |",
    "ms": "| **Archive Duplicate Scanner** | Perceptual hash | Ya | Ya | Tong Sampah sahaja |",
}

BESTFINDER_NEW_TABLE = {
    "es": (
        "| Herramienta | Método | ¿Multiformat? | ¿Cómics? | ¿Res. invariante? | ¿Color/B&N? | ¿Borrado seguro? |\n"
        "|------|--------|--------------|----------------|----------------------|-----------------|-------------|\n"
        "| **Archive Duplicate Scanner** | Hash perceptual | Sí | Sí | Sí | Sí | Solo Papelera |\n"
        "| Gemini 2 | Hash perceptual | Parcial | No | Parcial | No | Papelera |\n"
        "| dupeGuru | Hash perceptual | Parcial | No | Parcial | No | Papelera |\n"
        "| CleanMyMac | Hash de bytes | No | No | No | No | Papelera |\n"
        "| Terminal `fdupes` | Hash de bytes | No | No | No | No | Permanente |"
    ),
    "fr": (
        "| Outil | Méthode | Multiformat ? | Comics ? | Rés. invariante ? | Couleur/N&B ? | Suppr. sécurisée ? |\n"
        "|------|--------|--------------|----------------|----------------------|-----------------|-------------|\n"
        "| **Archive Duplicate Scanner** | Hachage perceptuel | Oui | Oui | Oui | Oui | Corbeille uniquement |\n"
        "| Gemini 2 | Hachage perceptuel | Partiel | Non | Partiel | Non | Corbeille |\n"
        "| dupeGuru | Hachage perceptuel | Partiel | Non | Partiel | Non | Corbeille |\n"
        "| CleanMyMac | Hachage d'octets | Non | Non | Non | Non | Corbeille |\n"
        "| Terminal `fdupes` | Hachage d'octets | Non | Non | Non | Non | Permanent |"
    ),
    "nl": (
        "| Tool | Methode | Crossformaat? | Comics? | Res.-onafh.? | Kleur/ZW? | Veilig verw.? |\n"
        "|------|--------|--------------|----------------|----------------------|-----------------|-------------|\n"
        "| **Archive Duplicate Scanner** | Perceptuele hash | Ja | Ja | Ja | Ja | Alleen Prullenbak |\n"
        "| Gemini 2 | Perceptuele hash | Gedeeltelijk | Nee | Gedeeltelijk | Nee | Prullenbak |\n"
        "| dupeGuru | Perceptuele hash | Gedeeltelijk | Nee | Gedeeltelijk | Nee | Prullenbak |\n"
        "| CleanMyMac | Byte-hash | Nee | Nee | Nee | Nee | Prullenbak |\n"
        "| Terminal `fdupes` | Byte-hash | Nee | Nee | Nee | Nee | Permanent |"
    ),
    "pt": (
        "| Ferramenta | Método | Multiformat? | Comics? | Res. invariante? | Cor/P&B? | Excl. segura? |\n"
        "|------|--------|--------------|----------------|----------------------|-----------------|-------------|\n"
        "| **Archive Duplicate Scanner** | Hash perceptual | Sim | Sim | Sim | Sim | Somente Lixeira |\n"
        "| Gemini 2 | Hash perceptual | Parcial | Não | Parcial | Não | Lixeira |\n"
        "| dupeGuru | Hash perceptual | Parcial | Não | Parcial | Não | Lixeira |\n"
        "| CleanMyMac | Hash de bytes | Não | Não | Não | Não | Lixeira |\n"
        "| Terminal `fdupes` | Hash de bytes | Não | Não | Não | Não | Permanente |"
    ),
    "ru": (
        "| Инструмент | Метод | Мультиформат? | Комиксы? | Рез. инвар.? | Цвет/Ч&Б? | Безопасн. удал.? |\n"
        "|------|--------|--------------|----------------|----------------------|-----------------|-------------|\n"
        "| **Archive Duplicate Scanner** | Перцептивный хэш | Да | Да | Да | Да | Только Корзина |\n"
        "| Gemini 2 | Перцептивный хэш | Частично | Нет | Частично | Нет | Корзина |\n"
        "| dupeGuru | Перцептивный хэш | Частично | Нет | Частично | Нет | Корзина |\n"
        "| CleanMyMac | Байтовый хэш | Нет | Нет | Нет | Нет | Корзина |\n"
        "| Terminal `fdupes` | Байтовый хэш | Нет | Нет | Нет | Нет | Постоянное |"
    ),
    "zh": (
        "| 工具 | 方法 | 跨格式？ | 漫画？ | 分辨率无关？ | 彩色/黑白？ | 安全删除？ |\n"
        "|------|--------|--------------|----------------|----------------------|-----------------|-------------|\n"
        "| **Archive Duplicate Scanner** | 感知哈希 | 是 | 是 | 是 | 是 | 仅移至废纸篓 |\n"
        "| Gemini 2 | 感知哈希 | 部分 | 否 | 部分 | 否 | 废纸篓 |\n"
        "| dupeGuru | 感知哈希 | 部分 | 否 | 部分 | 否 | 废纸篓 |\n"
        "| CleanMyMac | 字节哈希 | 否 | 否 | 否 | 否 | 废纸篓 |\n"
        "| Terminal `fdupes` | 字节哈希 | 否 | 否 | 否 | 否 | 永久删除 |"
    ),
    "ja": (
        "| ツール | 方法 | クロスフォーマット？ | コミック？ | 解像度非依存？ | カラー/モノクロ？ | 安全削除？ |\n"
        "|------|--------|--------------|----------------|----------------------|-----------------|-------------|\n"
        "| **Archive Duplicate Scanner** | 知覚ハッシュ | あり | あり | あり | あり | ゴミ箱のみ |\n"
        "| Gemini 2 | 知覚ハッシュ | 一部 | なし | 一部 | なし | ゴミ箱 |\n"
        "| dupeGuru | 知覚ハッシュ | 一部 | なし | 一部 | なし | ゴミ箱 |\n"
        "| CleanMyMac | バイトハッシュ | なし | なし | なし | なし | ゴミ箱 |\n"
        "| Terminal `fdupes` | バイトハッシュ | なし | なし | なし | なし | 完全削除 |"
    ),
    "ko": (
        "| 도구 | 방법 | 크로스 포맷? | 만화? | 해상도 독립? | 컬러/흑백? | 안전 삭제? |\n"
        "|------|--------|--------------|----------------|----------------------|-----------------|-------------|\n"
        "| **Archive Duplicate Scanner** | 지각적 해시 | 예 | 예 | 예 | 예 | 휴지통만 |\n"
        "| Gemini 2 | 지각적 해시 | 부분 | 아니요 | 부분 | 아니요 | 휴지통 |\n"
        "| dupeGuru | 지각적 해시 | 부분 | 아니요 | 부분 | 아니요 | 휴지통 |\n"
        "| CleanMyMac | 바이트 해시 | 아니요 | 아니요 | 아니요 | 아니요 | 휴지통 |\n"
        "| Terminal `fdupes` | 바이트 해시 | 아니요 | 아니요 | 아니요 | 아니요 | 영구 삭제 |"
    ),
    "id": (
        "| Alat | Metode | Lintas format? | Komik? | Res. invarian? | Warna/H&P? | Hapus aman? |\n"
        "|------|--------|--------------|----------------|----------------------|-----------------|-------------|\n"
        "| **Archive Duplicate Scanner** | Perceptual hash | Ya | Ya | Ya | Ya | Hanya Tempat Sampah |\n"
        "| Gemini 2 | Perceptual hash | Sebagian | Tidak | Sebagian | Tidak | Tempat Sampah |\n"
        "| dupeGuru | Perceptual hash | Sebagian | Tidak | Sebagian | Tidak | Tempat Sampah |\n"
        "| CleanMyMac | Hash byte | Tidak | Tidak | Tidak | Tidak | Tempat Sampah |\n"
        "| Terminal `fdupes` | Hash byte | Tidak | Tidak | Tidak | Tidak | Permanen |"
    ),
    "ms": (
        "| Alat | Kaedah | Pelbagai format? | Komik? | Res. bebas? | Warna/H&P? | Padam selamat? |\n"
        "|------|--------|--------------|----------------|----------------------|-----------------|-------------|\n"
        "| **Archive Duplicate Scanner** | Perceptual hash | Ya | Ya | Ya | Ya | Tong Sampah sahaja |\n"
        "| Gemini 2 | Perceptual hash | Sebahagian | Tidak | Sebahagian | Tidak | Tong Sampah |\n"
        "| dupeGuru | Perceptual hash | Sebahagian | Tidak | Sebahagian | Tidak | Tong Sampah |\n"
        "| CleanMyMac | Hash bait | Tidak | Tidak | Tidak | Tidak | Tong Sampah |\n"
        "| Terminal `fdupes` | Hash bait | Tidak | Tidak | Tidak | Tidak | Kekal |"
    ),
}

for lang in LANGS:
    fp = base / "best-duplicate-file-finder-mac" / f"{lang}.md"
    text = fp.read_text(encoding="utf-8")

    # Insert paragraph after Hamming sentence
    anchor = BESTFINDER_HAMMING_ANCHOR[lang]
    text, ok = inject_after_paragraph(text, anchor, BESTFINDER_HASH_INSERTION[lang])
    if not ok:
        errors.append(f"bestfinder {lang}: Hamming anchor not found: {anchor[:40]}")
        continue

    # Replace table: find the ADS row, walk back to find table header, replace through last row
    ads_row = BESTFINDER_ADS_ROW[lang]
    idx = text.find(ads_row)
    if idx == -1:
        errors.append(f"bestfinder {lang}: ADS table row not found")
        continue

    # Find start of table (last '| ' before ads_row that starts a line)
    table_start = text.rfind('\n|', 0, idx) + 1
    # Find end of table (blank line after the last row)
    # Advance past all table rows
    pos = idx
    while True:
        next_nl = text.find('\n', pos)
        if next_nl == -1:
            break
        next_line_start = next_nl + 1
        if next_line_start >= len(text) or text[next_line_start] != '|':
            pos = next_nl
            break
        pos = next_line_start

    text = text[:table_start] + BESTFINDER_NEW_TABLE[lang] + text[pos:]
    fp.write_text(text, encoding="utf-8")
    print(f"✓ bestfinder/{lang}")


# ═══════════════════════════════════════════════════════════════════════════
# 3. find-duplicate-photos-mac — use case 4 + 2 FAQs (already done for all 10)
# ═══════════════════════════════════════════════════════════════════════════
print("(photos already done in previous run)")

if errors:
    print("\nErrors:")
    for e in errors:
        print(f"  ✗ {e}")
else:
    print("\nAll done — no errors.")
