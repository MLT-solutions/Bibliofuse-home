/**
 * translate-streaming-faq.cjs
 * Updates:
 * 1. Streaming table cell text ("not fully tested" → "not in roadmap yet") in all 10 locales
 * 2. Adds new FAQ item: "Why does streaming require Tailscale?"
 * Run: node scripts/translate-streaming-faq.cjs
 */
const fs = require('fs');
const path = require('path');
const base = path.join(__dirname, '..', 'src', 'locales');

// New streaming cell value per language (replaces index 3 in rows array)
const STREAMING_ROWS = {
  es: ["Streaming PC / Mac → iPhone", "Tailscale activado — casa y 5G remoto||Sin Tailscale — solo Wi-Fi doméstico (no está en el roadmap aún)", "Tailscale activado — casa y 5G remoto||Sin Tailscale — solo Wi-Fi doméstico (no está en el roadmap aún)", "-"],
  fr: ["Streaming PC / Mac → iPhone", "Tailscale activé — maison et 5G à distance||Sans Tailscale — Wi-Fi domestique uniquement (pas encore dans la feuille de route)", "Tailscale activé — maison et 5G à distance||Sans Tailscale — Wi-Fi domestique uniquement (pas encore dans la feuille de route)", "-"],
  nl: ["PC / Mac → iPhone streaming", "Tailscale AAN — thuis en 5G op afstand||Zonder Tailscale — alleen thuis-wifi (nog niet in de roadmap)", "Tailscale AAN — thuis en 5G op afstand||Zonder Tailscale — alleen thuis-wifi (nog niet in de roadmap)", "-"],
  pt: ["Streaming PC / Mac → iPhone", "Tailscale ATIVO — casa e 5G remoto||Sem Tailscale — apenas Wi-Fi doméstico (não está no roadmap ainda)", "Tailscale ATIVO — casa e 5G remoto||Sem Tailscale — apenas Wi-Fi doméstico (não está no roadmap ainda)", "-"],
  ru: ["Стриминг PC / Mac → iPhone", "Tailscale ВКЛ — дом и 5G удалённо||Без Tailscale — только домашний Wi-Fi (не в дорожной карте)", "Tailscale ВКЛ — дом и 5G удалённо||Без Tailscale — только домашний Wi-Fi (не в дорожной карте)", "-"],
  zh: ["PC / Mac → iPhone 串流", "Tailscale 开启 — 家中及5G远程||不使用 Tailscale — 仅家中 Wi-Fi（暂不在开发计划中）", "Tailscale 开启 — 家中及5G远程||不使用 Tailscale — 仅家中 Wi-Fi（暂不在开发计划中）", "-"],
  ja: ["PC / Mac → iPhone ストリーミング", "Tailscale ON — 自宅 & 5Gリモート||Tailscaleなし — 自宅Wi-Fiのみ（現在ロードマップにはありません）", "Tailscale ON — 自宅 & 5Gリモート||Tailscaleなし — 自宅Wi-Fiのみ（現在ロードマップにはありません）", "-"],
  ko: ["PC / Mac → iPhone 스트리밍", "Tailscale 켜짐 — 집 & 5G 원격||Tailscale 없음 — 집 Wi-Fi만 (현재 로드맵에 없음)", "Tailscale 켜짐 — 집 & 5G 원격||Tailscale 없음 — 집 Wi-Fi만 (현재 로드맵에 없음)", "-"],
  id: ["Streaming PC / Mac → iPhone", "Tailscale AKTIF — rumah & 5G jarak jauh||Tanpa Tailscale — hanya Wi-Fi rumah (belum ada dalam roadmap)", "Tailscale AKTIF — rumah & 5G jarak jauh||Tanpa Tailscale — hanya Wi-Fi rumah (belum ada dalam roadmap)", "-"],
  ms: ["Penstriman PC / Mac → iPhone", "Tailscale HIDUP — rumah & 5G jauh||Tanpa Tailscale — Wi-Fi rumah sahaja (belum dalam pelan pembangunan)", "Tailscale HIDUP — rumah & 5G jauh||Tanpa Tailscale — Wi-Fi rumah sahaja (belum dalam pelan pembangunan)", "-"],
};

// New FAQ item (inserted at index 4, before "Why can't Android...")
const TAILSCALE_FAQ = {
  es: {
    q: "¿Por qué el streaming requiere Tailscale? ¿No puede funcionar solo con Wi-Fi doméstico?",
    a: "Tailscale es necesario por la forma en que iOS gestiona las conexiones de red local. Esto es lo que ocurrió:",
    bullets: [
      { text: "Las versiones anteriores funcionaban en Wi-Fi doméstico sin Tailscale", sub: ["La app usaba Bonjour (descubrimiento local de Apple) sobre HTTP — funcionaba bien", "Cuando se añadió el streaming remoto por 5G, iOS App Transport Security empezó a bloquear HTTP a direcciones IP directas, lo que rompió la ruta solo LAN"] },
      { text: "Tailscale funciona en Wi-Fi doméstico igual que en remoto", sub: ["Cuando ambos dispositivos están en la misma red, Tailscale enruta el tráfico directamente — no hay penalización de velocidad respecto al Wi-Fi normal", "Mantener Tailscale siempre activado en casa y fuera te da una configuración consistente sin cambios de modo"] },
      { text: "Un modo LAN sin Tailscale no está en el roadmap actual", sub: ["Incluso al desactivar Tailscale, la app puede intentar la dirección Tailscale almacenada anteriormente, causando un fallo de conexión", "Construir un fallback LAN automático y fiable es complejo y no está planificado por ahora", "La configuración más sencilla: mantener Tailscale activado en ambos dispositivos siempre. Funciona en Wi-Fi doméstico y 5G remoto sin configuración extra"] }
    ]
  },
  fr: {
    q: "Pourquoi le streaming nécessite-t-il Tailscale ? Ne peut-il pas fonctionner sur le Wi-Fi domestique ?",
    a: "Tailscale est requis en raison de la façon dont iOS gère les connexions réseau locales. Voici ce qui s'est passé :",
    bullets: [
      { text: "Les versions antérieures fonctionnaient sur Wi-Fi domestique sans Tailscale", sub: ["L'app utilisait Bonjour (découverte locale d'Apple) via HTTP — cela fonctionnait bien", "Une fois le streaming 5G distant ajouté, iOS App Transport Security a commencé à bloquer HTTP vers des adresses IP brutes, ce qui a brisé le chemin LAN uniquement"] },
      { text: "Tailscale fonctionne sur le Wi-Fi domestique aussi bien qu'à distance", sub: ["Lorsque les deux appareils sont sur le même réseau, Tailscale achemine le trafic directement — aucune pénalité de vitesse par rapport au Wi-Fi classique", "Garder Tailscale activé à la maison et ailleurs vous donne une configuration cohérente sans changement de mode"] },
      { text: "Un mode LAN sans Tailscale n'est pas dans la feuille de route actuelle", sub: ["Même en désactivant Tailscale, l'app peut tenter l'adresse Tailscale précédemment mémorisée, provoquant un échec de connexion", "Construire un fallback LAN automatique fiable est complexe et non prévu pour l'instant", "La configuration la plus simple : gardez Tailscale activé sur les deux appareils. Cela gère le Wi-Fi domestique et le 5G distant sans configuration supplémentaire"] }
    ]
  },
  nl: {
    q: "Waarom vereist streaming Tailscale? Kan het niet gewoon over thuis-wifi werken?",
    a: "Tailscale is vereist vanwege de manier waarop iOS lokale netwerkverbindingen afhandelt. Dit is wat er is gebeurd:",
    bullets: [
      { text: "Eerdere versies werkten op thuis-wifi zonder Tailscale", sub: ["De app gebruikte Bonjour (Apple's lokale ontdekking) via HTTP — dit werkte prima", "Zodra remote 5G-streaming werd toegevoegd, begon iOS App Transport Security HTTP naar rauwe IP-adressen te blokkeren, waardoor het LAN-pad kapot ging"] },
      { text: "Tailscale werkt op thuis-wifi net zo goed als op afstand", sub: ["Wanneer beide apparaten op hetzelfde netwerk zitten, stuurt Tailscale verkeer direct door — er is geen snelheidsnadeel ten opzichte van gewone wifi", "Tailscale altijd aan houden thuis en onderweg geeft één consistente setup zonder van modus te wisselen"] },
      { text: "Een LAN-modus zonder Tailscale staat niet in de huidige roadmap", sub: ["Zelfs als je Tailscale uitschakelt, kan de app het eerder opgeslagen Tailscale-adres proberen, wat een verbindingsfout veroorzaakt", "Een betrouwbare automatische LAN-fallback bouwen is complex en momenteel niet gepland", "De eenvoudigste setup: houd Tailscale op beide apparaten altijd aan. Het regelt thuis-wifi en 5G-remote zonder extra configuratie"] }
    ]
  },
  pt: {
    q: "Por que o streaming requer Tailscale? Não pode funcionar apenas com o Wi-Fi doméstico?",
    a: "O Tailscale é necessário por causa de como o iOS trata as conexões de rede local. Veja o que aconteceu:",
    bullets: [
      { text: "Versões anteriores funcionavam no Wi-Fi doméstico sem Tailscale", sub: ["O app usava Bonjour (descoberta local da Apple) via HTTP — isso funcionava bem", "Quando o streaming remoto por 5G foi adicionado, o iOS App Transport Security começou a bloquear HTTP para endereços IP brutos, o que quebrou o caminho LAN"] },
      { text: "O Tailscale funciona no Wi-Fi doméstico tão bem quanto remotamente", sub: ["Quando ambos os dispositivos estão na mesma rede, o Tailscale roteia o tráfego diretamente — não há penalidade de velocidade em relação ao Wi-Fi normal", "Manter o Tailscale sempre ativado em casa e fora dá uma configuração consistente sem troca de modo"] },
      { text: "Um modo LAN sem Tailscale não está no roadmap atual", sub: ["Mesmo ao desativar o Tailscale, o app pode tentar o endereço Tailscale armazenado anteriormente, causando falha de conexão", "Construir um fallback LAN automático confiável é complexo e não está planejado agora", "A configuração mais simples: mantenha o Tailscale ativado em ambos os dispositivos sempre. Funciona em Wi-Fi doméstico e 5G remoto sem configuração extra"] }
    ]
  },
  ru: {
    q: "Почему для стриминга нужен Tailscale? Разве нельзя использовать домашний Wi-Fi?",
    a: "Tailscale необходим из-за того, как iOS обрабатывает локальные сетевые подключения. Вот что произошло:",
    bullets: [
      { text: "Ранние версии работали через домашний Wi-Fi без Tailscale", sub: ["Приложение использовало Bonjour (локальное обнаружение Apple) через HTTP — это работало", "Когда был добавлен удалённый стриминг через 5G, iOS App Transport Security начал блокировать HTTP-запросы к обычным IP-адресам, что сломало путь через локальную сеть"] },
      { text: "Tailscale работает в домашнем Wi-Fi так же хорошо, как и удалённо", sub: ["Когда оба устройства находятся в одной сети, Tailscale маршрутизирует трафик напрямую — потери скорости по сравнению с обычным Wi-Fi нет", "Постоянное включение Tailscale дома и вне дома даёт единую настройку без переключения режимов"] },
      { text: "Режим только LAN без Tailscale не входит в текущую дорожную карту", sub: ["Даже при отключении Tailscale приложение может попытаться использовать ранее сохранённый адрес Tailscale, что приводит к ошибке соединения", "Создание надёжного автоматического LAN-fallback — сложная задача, которая пока не планируется", "Наиболее простая настройка: держите Tailscale включённым на обоих устройствах всегда. Это работает в домашнем Wi-Fi и по 5G без дополнительной настройки"] }
    ]
  },
  zh: {
    q: "为什么串流需要 Tailscale？不能直接用家里的 Wi-Fi 吗？",
    a: "需要 Tailscale 是因为 iOS 处理本地网络连接的方式。以下是发生的情况：",
    bullets: [
      { text: "早期版本在没有 Tailscale 的情况下通过家庭 Wi-Fi 工作", sub: ["应用使用 Bonjour（苹果的本地发现）通过 HTTP 运行——这很好用", "当添加远程 5G 串流后，iOS 应用传输安全（ATS）开始阻止对原始 IP 地址的 HTTP 连接，导致仅限局域网的路径失效"] },
      { text: "Tailscale 在家庭 Wi-Fi 上的效果与远程使用时一样好", sub: ["当两台设备在同一网络上时，Tailscale 直接路由流量——与普通 Wi-Fi 相比没有速度损失", "在家和外出时始终保持 Tailscale 开启，让您拥有一致的设置，无需切换模式"] },
      { text: "无 Tailscale 的局域网模式目前不在开发计划中", sub: ["即使关闭 Tailscale，应用可能仍会尝试之前存储的 Tailscale 地址，导致连接失败", "构建可靠的自动局域网回退机制较为复杂，目前暂无计划", "最简单的设置：始终在两台设备上保持 Tailscale 开启。无需额外配置即可在家庭 Wi-Fi 和 5G 远程下使用"] }
    ]
  },
  ja: {
    q: "なぜストリーミングにTailscaleが必要なのですか？自宅Wi-Fiだけでは使えないのですか？",
    a: "TailscaleはiOSがローカルネットワーク接続を処理する方法のために必要です。以下がその経緯です：",
    bullets: [
      { text: "初期バージョンはTailscaleなしで自宅Wi-Fiで動作していました", sub: ["アプリはBonjour（AppleのローカルディスカバリM）をHTTP経由で使用していました — 正常に動作していました", "5Gリモートストリーミングが追加されると、iOS App Transport SecurityがIPアドレスへのHTTP接続をブロックし始め、LANのみのパスが壊れました"] },
      { text: "Tailscaleは自宅Wi-Fiでもリモートと同様に機能します", sub: ["両デバイスが同じネットワーク上にある場合、Tailscaleはトラフィックを直接ルーティングします — 通常のWi-Fiと比較して速度の低下はありません", "自宅でも外出先でもTailscaleをオンにしておくと、モードの切り替えなしに一貫したセットアップが得られます"] },
      { text: "TailscaleなしのLANのみモードは現在のロードマップにはありません", sub: ["Tailscaleをオフにしても、アプリが以前に保存されたTailscaleアドレスを試みてハンドシェイク失敗になる場合があります", "信頼性の高い自動LANフォールバックを構築することは複雑で、現時点では予定されていません", "最もシンプルな設定：両デバイスで常にTailscaleをオンにしておいてください。追加設定なしで自宅Wi-Fiと5Gリモートの両方に対応します"] }
    ]
  },
  ko: {
    q: "스트리밍에 왜 Tailscale이 필요한가요? 집 Wi-Fi로는 안 되나요?",
    a: "Tailscale은 iOS가 로컬 네트워크 연결을 처리하는 방식 때문에 필요합니다. 다음은 그 경위입니다:",
    bullets: [
      { text: "초기 버전은 Tailscale 없이 집 Wi-Fi에서 작동했습니다", sub: ["앱은 Bonjour(Apple의 로컬 검색)를 HTTP로 사용했습니다 — 잘 작동했습니다", "5G 원격 스트리밍이 추가되자, iOS App Transport Security가 원시 IP 주소에 대한 HTTP 연결을 차단하기 시작하여 LAN 전용 경로가 작동하지 않게 되었습니다"] },
      { text: "Tailscale은 집 Wi-Fi에서도 원격에서와 동일하게 작동합니다", sub: ["두 기기가 같은 네트워크에 있을 때 Tailscale은 트래픽을 직접 라우팅합니다 — 일반 Wi-Fi 대비 속도 차이가 없습니다", "집과 외출 시 항상 Tailscale을 켜두면 모드 전환 없이 일관된 설정을 유지할 수 있습니다"] },
      { text: "Tailscale 없는 LAN 전용 모드는 현재 로드맵에 없습니다", sub: ["Tailscale을 꺼도 앱이 이전에 저장된 Tailscale 주소를 시도하여 연결 실패가 발생할 수 있습니다", "신뢰할 수 있는 자동 LAN 폴백을 구축하는 것은 복잡하며 현재 계획에 없습니다", "가장 간단한 설정: 항상 두 기기에서 Tailscale을 켜두세요. 추가 설정 없이 집 Wi-Fi와 5G 원격 모두에서 작동합니다"] }
    ]
  },
  id: {
    q: "Mengapa streaming memerlukan Tailscale? Tidak bisakah menggunakan Wi-Fi rumah saja?",
    a: "Tailscale diperlukan karena cara iOS menangani koneksi jaringan lokal. Berikut yang terjadi:",
    bullets: [
      { text: "Versi awal bekerja di Wi-Fi rumah tanpa Tailscale", sub: ["Aplikasi menggunakan Bonjour (penemuan lokal Apple) melalui HTTP — ini bekerja dengan baik", "Setelah streaming 5G jarak jauh ditambahkan, iOS App Transport Security mulai memblokir HTTP ke alamat IP mentah, yang merusak jalur hanya-LAN"] },
      { text: "Tailscale bekerja di Wi-Fi rumah sama baiknya dengan jarak jauh", sub: ["Ketika kedua perangkat berada di jaringan yang sama, Tailscale merutekan lalu lintas secara langsung — tidak ada penalti kecepatan dibandingkan Wi-Fi biasa", "Menjaga Tailscale selalu aktif di rumah dan saat bepergian memberikan satu konfigurasi yang konsisten tanpa pergantian mode"] },
      { text: "Mode LAN tanpa Tailscale belum ada dalam roadmap saat ini", sub: ["Bahkan saat mematikan Tailscale, aplikasi mungkin masih mencoba alamat Tailscale yang sebelumnya tersimpan, menyebabkan kegagalan koneksi", "Membangun fallback LAN otomatis yang andal adalah hal yang kompleks dan belum direncanakan saat ini", "Pengaturan paling sederhana: selalu aktifkan Tailscale di kedua perangkat. Menangani Wi-Fi rumah dan 5G jarak jauh tanpa konfigurasi tambahan"] }
    ]
  },
  ms: {
    q: "Mengapa penstriman memerlukan Tailscale? Tidakkah boleh menggunakan Wi-Fi rumah sahaja?",
    a: "Tailscale diperlukan kerana cara iOS mengendalikan sambungan rangkaian tempatan. Berikut adalah apa yang berlaku:",
    bullets: [
      { text: "Versi awal berfungsi pada Wi-Fi rumah tanpa Tailscale", sub: ["Apl menggunakan Bonjour (penemuan tempatan Apple) melalui HTTP — ini berfungsi dengan baik", "Setelah penstriman jauh 5G ditambah, iOS App Transport Security mula menyekat HTTP ke alamat IP mentah, yang merosakkan laluan LAN sahaja"] },
      { text: "Tailscale berfungsi pada Wi-Fi rumah sama baiknya dengan jauh", sub: ["Apabila kedua-dua peranti berada pada rangkaian yang sama, Tailscale menghalakan trafik secara terus — tiada penalti kelajuan berbanding Wi-Fi biasa", "Memastikan Tailscale sentiasa dihidupkan di rumah dan semasa keluar memberikan satu persediaan yang konsisten tanpa penukaran mod"] },
      { text: "Mod LAN tanpa Tailscale belum ada dalam pelan pembangunan semasa", sub: ["Walaupun mematikan Tailscale, apl mungkin masih mencuba alamat Tailscale yang disimpan sebelumnya, menyebabkan kegagalan jabat tangan", "Membina sandaran LAN automatik yang boleh dipercayai adalah kompleks dan tidak dirancang buat masa ini", "Persediaan paling mudah: sentiasa hidupkan Tailscale pada kedua-dua peranti. Ia mengendalikan Wi-Fi rumah dan 5G jauh tanpa konfigurasi tambahan"] }
    ]
  }
};

function deepMerge(target, source) {
  const out = Object.assign({}, target);
  for (const key of Object.keys(source)) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      out[key] = deepMerge(target[key] || {}, source[key]);
    } else {
      out[key] = source[key];
    }
  }
  return out;
}

const langs = ['es', 'fr', 'nl', 'pt', 'ru', 'zh', 'ja', 'ko', 'id', 'ms'];

for (const lang of langs) {
  const file = path.join(base, lang, 'translation.json');
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  const home = data.redesign.home;

  // 1. Update streaming row (index 3 in rows array)
  if (STREAMING_ROWS[lang]) {
    home.table.rows[3] = STREAMING_ROWS[lang];
  }

  // 2. Insert new Tailscale FAQ at index 4 (before "Why can't Android...")
  const items = home.faq.items;
  // Find the "Why can't Android" item
  const androidIdx = items.findIndex(item =>
    item.q && (item.q.includes('Android') || item.q.toLowerCase().includes('android'))
  );
  const insertAt = androidIdx >= 0 ? androidIdx : 4;

  // Only insert if not already present
  const alreadyHas = items.some(item => item.q && item.q.toLowerCase().includes('tailscale') && item.q.toLowerCase().includes('why'));
  if (!alreadyHas && TAILSCALE_FAQ[lang]) {
    items.splice(insertAt, 0, TAILSCALE_FAQ[lang]);
  }

  fs.writeFileSync(file, JSON.stringify(data, null, 2) + '\n');
  console.log(`✅ ${lang} updated (FAQ items: ${items.length})`);
}
console.log('Done.');
