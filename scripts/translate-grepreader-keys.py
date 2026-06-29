import anthropic, json, sys, os

locales_dir = os.path.join(os.path.dirname(__file__), '..', 'src', 'locales')
client = anthropic.Anthropic()

LANGS = {
    'es': 'Spanish', 'fr': 'French', 'nl': 'Dutch', 'pt': 'Portuguese',
    'ru': 'Russian', 'zh': 'Simplified Chinese', 'ja': 'Japanese',
    'ko': 'Korean', 'id': 'Indonesian', 'ms': 'Malay'
}

with open(os.path.join(locales_dir, 'en', 'translation.json')) as f:
    en = json.load(f)

keys_to_translate = {
    'grepreader': en['redesign']['productFamily']['products']['grepreader'],
    'twoAppsSection': en['redesign']['twoAppsSection'],
    'grepTagPage': en['redesign']['grepTagPage'],
}

def flatten(obj, prefix=''):
    result = {}
    for k, v in obj.items():
        key = f"{prefix}.{k}" if prefix else k
        if isinstance(v, dict):
            result.update(flatten(v, key))
        else:
            result[key] = v
    return result

def set_nested(obj, dot_path, value):
    parts = dot_path.split('.')
    cur = obj
    for p in parts[:-1]:
        cur = cur.setdefault(p, {})
    cur[parts[-1]] = value

def translate_for_lang(lang_code, lang_name):
    flat = flatten(keys_to_translate)
    to_translate = {k: v for k, v in flat.items() if isinstance(v, str) and v.strip()}

    prompt = f"""Translate the following JSON values from English to {lang_name} for a mobile app marketing website.

Rules:
- Keep brand names unchanged: BiblioFuse, GrepTag, App Store, iCloud, Wi-Fi
- Keep technical abbreviations unchanged: EPUB, TXT, CBZ, PDF, CBR, RAR, ZIP, iOS, macOS, Windows, AND, OR, NOT, CJK
- Keep the same tone: direct, clear, marketing-friendly
- Translate only the values, keep the keys exactly as-is
- Return ONLY valid JSON with the same keys, no extra text

{json.dumps(to_translate, indent=2, ensure_ascii=False)}"""

    msg = client.messages.create(
        model='claude-haiku-4-5-20251001',
        max_tokens=4096,
        messages=[{'role': 'user', 'content': prompt}]
    )
    text = msg.content[0].text
    start = text.find('{')
    end = text.rfind('}') + 1
    return json.loads(text[start:end])

for lang_code, lang_name in LANGS.items():
    print(f"Translating {lang_code} ({lang_name})...", end=' ', flush=True)
    try:
        translations = translate_for_lang(lang_code, lang_name)
        file_path = os.path.join(locales_dir, lang_code, 'translation.json')
        with open(file_path) as f:
            data = json.load(f)

        for dot_key, value in translations.items():
            # Map to full redesign.* path
            if dot_key.startswith('grepreader.'):
                full_key = f"redesign.productFamily.products.{dot_key}"
            elif dot_key.startswith('twoAppsSection.') or dot_key.startswith('grepTagPage.'):
                full_key = f"redesign.{dot_key}"
            else:
                continue
            set_nested(data, full_key, value)

        with open(file_path, 'w') as f:
            json.dump(data, f, ensure_ascii=False, indent=2)
            f.write('\n')
        print('✅')
    except Exception as e:
        print(f'❌ {e}')

print('\n🎉 GrepTag key translations complete.')
