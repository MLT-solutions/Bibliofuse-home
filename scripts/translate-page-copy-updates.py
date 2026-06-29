import anthropic, json, sys, os

locales_dir = os.path.join(os.path.dirname(__file__), '..', 'src', 'locales')
client = anthropic.Anthropic()

LANGS = {
    'es': 'Spanish', 'fr': 'French', 'nl': 'Dutch', 'pt': 'Portuguese',
    'ru': 'Russian', 'zh': 'Simplified Chinese', 'ja': 'Japanese',
    'ko': 'Korean', 'id': 'Indonesian', 'ms': 'Malay'
}

en_path = os.path.join(locales_dir, 'en', 'translation.json')
with open(en_path, encoding='utf-8') as f:
    en = json.load(f)

r = en['redesign']

keys_to_translate = {
    'grepTagPage.seo.desc': r['grepTagPage']['seo']['desc'],
    'grepTagPage.hero.desc': r['grepTagPage']['hero']['desc'],
    'grepTagPage.hero.trust1': r['grepTagPage']['hero']['trust1'],
    'grepTagPage.grep.desc': r['grepTagPage']['grep']['desc'],
    'grepTagPage.grep.bullet3': r['grepTagPage']['grep']['bullet3'],
    'grepTagPage.tags.desc': r['grepTagPage']['tags']['desc'],
    'grepTagPage.tags.bullet2': r['grepTagPage']['tags']['bullet2'],
    'grepTagPage.tags.bullet3': r['grepTagPage']['tags']['bullet3'],
    'smartdecryptPage.seo.desc': r['smartdecryptPage']['seo']['desc'],
    'smartdecryptPage.patterns.desc': r['smartdecryptPage']['patterns']['desc'],
    'smartdecryptPage.patterns.bullet1': r['smartdecryptPage']['patterns']['bullet1'],
    'smartdecryptPage.patterns.bullet2': r['smartdecryptPage']['patterns']['bullet2'],
    'archivePage.hero.desc': r['archivePage']['hero']['desc'],
    'archivePage.scanning.desc': r['archivePage']['scanning']['desc'],
    'archivePage.scanning.bullet1': r['archivePage']['scanning']['bullet1'],
    'contentcuePage.seo.desc': r['contentcuePage']['seo']['desc'],
    'contentcuePage.hero.desc': r['contentcuePage']['hero']['desc'],
    'contentcuePage.hero.trust1': r['contentcuePage']['hero']['trust1'],
}

def set_nested(obj, dot_path, value):
    parts = dot_path.split('.')
    cur = obj
    for p in parts[:-1]:
        cur = cur.setdefault(p, {})
    cur[parts[-1]] = value

def translate_for_lang(lang, lang_name):
    prompt = f"""You are a professional UI/app-store copywriter translating app page copy into {lang_name}.

Rules:
- Keep brand names unchanged: BiblioFuse, GrepTag Reader, SmartDecrypt, Archive Duplicate Scanner, ContentCue
- Keep format names unchanged: EPUB, TXT, CBZ, CBR, PDF, ZIP, 7z, RAR
- Keep platform names unchanged: iOS, macOS, Windows, iPhone, iPad, Mac, App Store, Microsoft Store, iCloud, Keychain
- Keep technical terms unchanged: Wi-Fi, AND, OR, NOT, NRIC, URL, TTS, DBS_Statement_*
- Translate naturally for native {lang_name} speakers — app store quality
- Keep bullet points concise (same length as English)
- Return ONLY a valid JSON object with the same keys as the input, no extra text

Translate these UI strings from English to {lang_name}:
{json.dumps(keys_to_translate, ensure_ascii=False, indent=2)}"""

    msg = client.messages.create(
        model='claude-sonnet-4-6',
        max_tokens=2000,
        messages=[{'role': 'user', 'content': prompt}]
    )
    raw = msg.content[0].text.strip()
    if raw.startswith('```'):
        raw = raw.split('\n', 1)[1].rsplit('```', 1)[0]
    return json.loads(raw)

for lang, lang_name in LANGS.items():
    print(f'Translating {lang} ({lang_name})...', end='', flush=True)
    try:
        translations = translate_for_lang(lang, lang_name)
        fp = os.path.join(locales_dir, lang, 'translation.json')
        with open(fp, encoding='utf-8') as f:
            t = json.load(f)
        for key, val in translations.items():
            set_nested(t['redesign'], key, val)
        with open(fp, 'w', encoding='utf-8') as f:
            json.dump(t, f, ensure_ascii=False, indent=2)
        print(' ✅')
    except Exception as e:
        print(f' ❌ {e}')

print('\nDone!')
