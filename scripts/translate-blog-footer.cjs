/**
 * translate-blog-footer.cjs
 * Fills pre-existing untranslated strings: blog UI, blog tags, footer nav
 * Run: node scripts/translate-blog-footer.cjs
 */
const fs = require('fs');
const path = require('path');
const base = path.join(__dirname, '..', 'src', 'locales');

const T = {

es: {
  blog: {
    title: "Consejos, guías y novedades",
    subtitle: "Guías, notas de versión e ideas para sacar más partido a tu vida lectora.",
    readMore: "Leer artículo",
    backToBlog: "Volver al blog",
    notFound: "Artículo no encontrado. Es posible que haya sido movido o eliminado.",
    homeSectionEyebrow: "Del blog",
    homeSectionTitle: "Consejos y novedades",
    homeSectionDesc: "Guías, notas de versión e ideas para tu vida lectora.",
    viewAll: "Ver todos los artículos",
    tags: { guide: "Guía", news: "Noticias", tips: "Consejos", update: "Actualización" }
  },
  footer: {
    desc: "Un pequeño conjunto de herramientas y lectores para personas que quieren su biblioteca en sus propios dispositivos, no detrás del inicio de sesión de otra persona.",
    products: "Productos", company: "Empresa", legal: "Legal",
    contact: "Contacto", work: "Trabaja con nosotros", eula: "Términos de uso (EULA)"
  }
},

fr: {
  blog: {
    title: "Conseils, guides et actualités",
    subtitle: "Guides, notes de version et idées pour tirer le meilleur parti de votre vie de lecteur.",
    readMore: "Lire l'article",
    backToBlog: "Retour au blog",
    notFound: "Article introuvable. Il a peut-être été déplacé ou supprimé.",
    homeSectionEyebrow: "Du blog",
    homeSectionTitle: "Conseils et actualités",
    homeSectionDesc: "Guides, notes de version et idées pour votre vie de lecteur.",
    viewAll: "Voir tous les articles",
    tags: { guide: "Guide", news: "Actualités", tips: "Conseils", update: "Mise à jour" }
  },
  footer: {
    desc: "Un petit ensemble d'outils et de lecteurs pour les personnes qui souhaitent avoir leur bibliothèque sur leurs propres appareils, sans dépendre d'un compte tiers.",
    products: "Produits", company: "Entreprise", legal: "Mentions légales",
    contact: "Contact", work: "Travailler avec nous", eula: "Conditions d'utilisation (CLUF)"
  }
},

nl: {
  blog: {
    title: "Tips, handleidingen en updates",
    subtitle: "Handleidingen, release-notes en ideeën om meer uit je leesleven te halen.",
    readMore: "Artikel lezen",
    backToBlog: "Terug naar blog",
    notFound: "Artikel niet gevonden. Het is mogelijk verplaatst of verwijderd.",
    homeSectionEyebrow: "Van de blog",
    homeSectionTitle: "Tips & updates",
    homeSectionDesc: "Handleidingen, release-notes en ideeën voor je leesleven.",
    viewAll: "Alle artikelen bekijken",
    tags: { guide: "Handleiding", news: "Nieuws", tips: "Tips", update: "Update" }
  },
  footer: {
    desc: "Een kleine suite van tools en lezers voor mensen die hun bibliotheek op hun eigen apparaten willen bewaren, niet achter iemand anders zijn login.",
    products: "Producten", company: "Bedrijf", legal: "Juridisch",
    contact: "Contact", work: "Werk met ons", eula: "Gebruiksvoorwaarden (EULA)"
  }
},

pt: {
  blog: {
    title: "Dicas, guias e novidades",
    subtitle: "Guias, notas de versão e ideias para aproveitar mais sua vida de leitura.",
    readMore: "Ler artigo",
    backToBlog: "Voltar ao blog",
    notFound: "Artigo não encontrado. Pode ter sido movido ou removido.",
    homeSectionEyebrow: "Do blog",
    homeSectionTitle: "Dicas e novidades",
    homeSectionDesc: "Guias, notas de versão e ideias para sua vida de leitura.",
    viewAll: "Ver todos os artigos",
    tags: { guide: "Guia", news: "Notícias", tips: "Dicas", update: "Atualização" }
  },
  footer: {
    desc: "Um pequeno conjunto de ferramentas e leitores para pessoas que querem sua biblioteca nos próprios dispositivos, sem depender do login de outra pessoa.",
    products: "Produtos", company: "Empresa", legal: "Legal",
    contact: "Contato", work: "Trabalhe conosco", eula: "Termos de uso (EULA)"
  }
},

ru: {
  blog: {
    title: "Советы, руководства и обновления",
    subtitle: "Руководства, заметки о выпусках и идеи для вашей читательской жизни.",
    readMore: "Читать статью",
    backToBlog: "Назад в блог",
    notFound: "Статья не найдена. Возможно, она была перемещена или удалена.",
    homeSectionEyebrow: "Из блога",
    homeSectionTitle: "Советы и обновления",
    homeSectionDesc: "Руководства, заметки о выпусках и идеи для вашей читательской жизни.",
    viewAll: "Все статьи",
    tags: { guide: "Руководство", news: "Новости", tips: "Советы", update: "Обновление" }
  },
  footer: {
    desc: "Небольшой набор инструментов и читалок для людей, которые хотят хранить библиотеку на собственных устройствах, а не за чужим логином.",
    products: "Продукты", company: "Компания", legal: "Правовая информация",
    contact: "Контакты", work: "Работайте с нами", eula: "Условия использования (EULA)"
  }
},

zh: {
  blog: {
    title: "技巧、指南与更新",
    subtitle: "指南、版本说明和让您的阅读生活更精彩的想法。",
    readMore: "阅读文章",
    backToBlog: "返回博客",
    notFound: "文章未找到，可能已被移动或删除。",
    homeSectionEyebrow: "来自博客",
    homeSectionTitle: "技巧与更新",
    homeSectionDesc: "指南、版本说明和阅读生活的灵感。",
    viewAll: "查看所有文章",
    tags: { guide: "指南", news: "资讯", tips: "技巧", update: "更新" }
  },
  footer: {
    desc: "一套小型工具和阅读器，专为希望将书库保存在自己设备上（而非依赖他人账号）的读者设计。",
    products: "产品", company: "公司", legal: "法律信息",
    contact: "联系我们", work: "与我们合作", eula: "使用条款（EULA）"
  }
},

ja: {
  blog: {
    title: "ヒント、ガイド、アップデート",
    subtitle: "ガイド、リリースノート、読書生活をより豊かにするアイデア。",
    readMore: "記事を読む",
    backToBlog: "ブログに戻る",
    notFound: "記事が見つかりません。移動または削除された可能性があります。",
    homeSectionEyebrow: "ブログから",
    homeSectionTitle: "ヒントとアップデート",
    homeSectionDesc: "読書生活のためのガイド、リリースノート、アイデア。",
    viewAll: "すべての記事を見る",
    tags: { guide: "ガイド", news: "ニュース", tips: "ヒント", update: "アップデート" }
  },
  footer: {
    desc: "自分のデバイスに本棚を持ちたい方のための、小さなツールとリーダーのセット。",
    products: "製品", company: "会社", legal: "法的情報",
    contact: "お問い合わせ", work: "採用・協業", eula: "利用規約（EULA）"
  }
},

ko: {
  blog: {
    title: "팁, 가이드 & 업데이트",
    subtitle: "가이드, 릴리스 노트, 독서 생활을 더욱 풍요롭게 하는 아이디어.",
    readMore: "기사 읽기",
    backToBlog: "블로그로 돌아가기",
    notFound: "기사를 찾을 수 없습니다. 이동되었거나 삭제되었을 수 있습니다.",
    homeSectionEyebrow: "블로그에서",
    homeSectionTitle: "팁 & 업데이트",
    homeSectionDesc: "독서 생활을 위한 가이드, 릴리스 노트 및 아이디어.",
    viewAll: "모든 기사 보기",
    tags: { guide: "가이드", news: "뉴스", tips: "팁", update: "업데이트" }
  },
  footer: {
    desc: "자신의 기기에 서재를 보관하고 싶은 분들을 위한 소형 툴 및 리더 모음입니다.",
    products: "제품", company: "회사", legal: "법적 정보",
    contact: "문의하기", work: "함께 일하기", eula: "이용 약관 (EULA)"
  }
},

id: {
  blog: {
    title: "Tips, panduan & pembaruan",
    subtitle: "Panduan, catatan rilis, dan ide untuk meningkatkan kehidupan membaca Anda.",
    readMore: "Baca artikel",
    backToBlog: "Kembali ke blog",
    notFound: "Artikel tidak ditemukan. Mungkin sudah dipindahkan atau dihapus.",
    homeSectionEyebrow: "Dari blog",
    homeSectionTitle: "Tips & pembaruan",
    homeSectionDesc: "Panduan, catatan rilis, dan ide untuk kehidupan membaca Anda.",
    viewAll: "Lihat semua artikel",
    tags: { guide: "Panduan", news: "Berita", tips: "Tips", update: "Pembaruan" }
  },
  footer: {
    desc: "Rangkaian kecil alat dan pembaca untuk orang-orang yang ingin menyimpan perpustakaan di perangkat mereka sendiri, bukan di balik akun orang lain.",
    products: "Produk", company: "Perusahaan", legal: "Hukum",
    contact: "Kontak", work: "Bergabung dengan kami", eula: "Ketentuan Penggunaan (EULA)"
  }
},

ms: {
  blog: {
    title: "Tips, panduan & kemas kini",
    subtitle: "Panduan, nota keluaran, dan idea untuk meningkatkan kehidupan membaca anda.",
    readMore: "Baca artikel",
    backToBlog: "Kembali ke blog",
    notFound: "Artikel tidak dijumpai. Ia mungkin telah dipindahkan atau dibuang.",
    homeSectionEyebrow: "Dari blog",
    homeSectionTitle: "Tips & kemas kini",
    homeSectionDesc: "Panduan, nota keluaran, dan idea untuk kehidupan membaca anda.",
    viewAll: "Lihat semua artikel",
    tags: { guide: "Panduan", news: "Berita", tips: "Tips", update: "Kemas kini" }
  },
  footer: {
    desc: "Suite kecil alat dan pembaca untuk orang yang ingin menyimpan perpustakaan mereka di peranti sendiri, bukan di sebalik log masuk orang lain.",
    products: "Produk", company: "Syarikat", legal: "Undang-undang",
    contact: "Hubungi kami", work: "Bekerja bersama kami", eula: "Terma Penggunaan (EULA)"
  }
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

for (const lang of Object.keys(T)) {
  const file = path.join(base, lang, 'translation.json');
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  data.redesign = deepMerge(data.redesign, T[lang]);
  fs.writeFileSync(file, JSON.stringify(data, null, 2) + '\n');
  console.log(`✅ ${lang}`);
}
console.log('Done.');
