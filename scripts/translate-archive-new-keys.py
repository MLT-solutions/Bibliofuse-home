#!/usr/bin/env python3
import json, os, re
from pathlib import Path
import anthropic

client = anthropic.Anthropic()
base = Path(__file__).parent.parent / "src" / "locales"

LANGS = {
    "es": "Spanish", "fr": "French", "nl": "Dutch", "pt": "Portuguese",
    "ru": "Russian", "zh": "Simplified Chinese", "ja": "Japanese",
    "ko": "Korean", "id": "Indonesian", "ms": "Malay",
}

EN = {
    "bullet4": "Matches across resolutions and color modes — a 1200px grayscale scan and a 3000px color scan of the same page are still flagged",
    "faq7q": "Can it match a color scan with a black-and-white version of the same content?",
    "faq7a": "Yes. The dHash algorithm works on luminance gradients, not color values. A full-color scan and a grayscale version of the same page produce nearly identical hashes and will be flagged as duplicates.",
    "faq8q": "Does image resolution affect duplicate detection?",
    "faq8a": "No. dHash resizes every image to a small fixed grid before comparing, so a 1200px and a 3000px scan of the same page hash to the same value. Resolution differences between sources are completely ignored.",
}

def translate(lang_code, lang_name):
    prompt = f"""Translate the following UI strings from English to {lang_name} for a Mac/Windows app called "Archive Duplicate Scanner" that finds duplicate comic book archives and photos using perceptual hashing (dHash algorithm).

Keep technical terms like "dHash", "CBZ", "CBR" as-is. Keep the tone factual and concise.

Return ONLY a JSON object with these exact keys:
{{
  "bullet4": "...",
  "faq7q": "...",
  "faq7a": "...",
  "faq8q": "...",
  "faq8a": "..."
}}

Strings to translate:
bullet4: "{EN['bullet4']}"
faq7q: "{EN['faq7q']}"
faq7a: "{EN['faq7a']}"
faq8q: "{EN['faq8q']}"
faq8a: "{EN['faq8a']}"
"""
    msg = client.messages.create(
        model="claude-haiku-4-5-20251001",
        max_tokens=1024,
        messages=[{"role": "user", "content": prompt}],
    )
    text = msg.content[0].text.strip()
    m = re.search(r'\{[\s\S]*\}', text)
    return json.loads(m.group(0))

for lang_code, lang_name in LANGS.items():
    print(f"Translating {lang_code}...", end=" ", flush=True)
    try:
        t = translate(lang_code, lang_name)
        fp = base / lang_code / "translation.json"
        d = json.loads(fp.read_text(encoding="utf-8"))

        d["redesign"]["archivePage"]["scanning"]["bullet4"] = t["bullet4"]

        faq = d["redesign"]["archivePage"]["faq"]
        # Remove any English stubs appended by sync-keys
        while faq and faq[-1]["q"] in (EN["faq7q"], EN["faq8q"]):
            faq.pop()
        faq.append({"q": t["faq7q"], "a": t["faq7a"]})
        faq.append({"q": t["faq8q"], "a": t["faq8a"]})

        fp.write_text(json.dumps(d, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
        print("done")
    except Exception as e:
        print(f"ERROR: {e}")

print("All done.")
