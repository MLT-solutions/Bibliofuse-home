#!/usr/bin/env python3
"""Update archivePage.seo.desc in all 10 locales."""
import json
from pathlib import Path

base = Path(__file__).parent.parent / "src" / "locales"

TRANSLATIONS = {
    "es": "Archive Duplicate Scanner encuentra archivos duplicados de CBZ, CBR, ZIP, RAR y fotos usando hash perceptual — incluso tras renombrar, recomprimir, o con diferentes resoluciones y modos de color. Gratis hasta 1.000 archivos, Pro de pago único $19,99.",
    "fr": "Archive Duplicate Scanner trouve les doublons de fichiers CBZ, CBR, ZIP, RAR et photos par hachage perceptuel — même après renommage, recompression, ou avec des résolutions et modes couleur différents. Gratuit jusqu'à 1 000 fichiers, Pro à 19,99 $ en achat unique.",
    "nl": "Archive Duplicate Scanner vindt dubbele CBZ-, CBR-, ZIP-, RAR- en fotobestanden met perceptuele hashing — ook na hernoemen, hercompressie, of bij verschillende resoluties en kleurmodi. Gratis tot 1.000 bestanden, Pro eenmalig $19,99.",
    "pt": "Archive Duplicate Scanner encontra arquivos duplicados de CBZ, CBR, ZIP, RAR e fotos usando hash perceptual — mesmo após renomeação, recompressão, ou com resoluções e modos de cor diferentes. Gratuito até 1.000 arquivos, Pro por pagamento único de $19,99.",
    "ru": "Archive Duplicate Scanner находит дубликаты файлов CBZ, CBR, ZIP, RAR и фотографий с помощью перцептивного хэширования — даже после переименования, перекомпрессии, при разных разрешениях и цветовых режимах. Бесплатно до 1 000 файлов, Pro за единовременный платёж $19,99.",
    "zh": "Archive Duplicate Scanner 使用感知哈希查找重复的 CBZ、CBR、ZIP、RAR 和照片文件——即使在重命名、重新压缩或不同分辨率和色彩模式下也能识别。免费支持最多 1,000 个文件，Pro 版一次性购买 $19.99。",
    "ja": "Archive Duplicate Scanner は知覚ハッシュを使って CBZ、CBR、ZIP、RAR および写真ファイルの重複を検出します。名前変更や再圧縮後、あるいは解像度やカラーモードが異なる場合でも対応。1,000ファイルまで無料、Pro は買い切り $19.99。",
    "ko": "Archive Duplicate Scanner는 지각 해싱을 사용하여 CBZ, CBR, ZIP, RAR 및 사진 파일의 중복을 찾습니다. 이름 변경, 재압축 후에도, 또는 해상도와 색상 모드가 달라도 감지합니다. 1,000개 파일까지 무료, Pro 일회성 구매 $19.99.",
    "id": "Archive Duplicate Scanner menemukan file duplikat CBZ, CBR, ZIP, RAR, dan foto menggunakan perceptual hashing — bahkan setelah penggantian nama, rekompresi, atau dengan resolusi dan mode warna berbeda. Gratis hingga 1.000 file, Pro pembelian satu kali $19,99.",
    "ms": "Archive Duplicate Scanner mencari fail pendua CBZ, CBR, ZIP, RAR dan foto menggunakan perceptual hashing — walaupun selepas penamaan semula, pemampatan semula, atau dengan resolusi dan mod warna berbeza. Percuma sehingga 1,000 fail, Pro pembelian sekali $19.99.",
}

for lang_code, desc in TRANSLATIONS.items():
    fp = base / lang_code / "translation.json"
    d = json.loads(fp.read_text(encoding="utf-8"))
    d["redesign"]["archivePage"]["seo"]["desc"] = desc
    fp.write_text(json.dumps(d, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"✓ {lang_code}")

print("All done.")
