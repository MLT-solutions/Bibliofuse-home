#!/usr/bin/env node
/**
 * Part 1: Inject missing translations for grepTagPage, home, tools, productFamily
 */
const fs = require('fs');
const path = require('path');
const LOCALES_DIR = path.join(__dirname, '../src/locales');
const LANGS = ['es','fr','nl','pt','ru','zh','ja','ko','id','ms'];

// Deep merge helper
function deepMerge(target, source) {
  for (const [k, v] of Object.entries(source)) {
    if (v && typeof v === 'object' && !Array.isArray(v)) {
      if (!target[k]) target[k] = {};
      deepMerge(target[k], v);
    } else {
      target[k] = v;
    }
  }
  return target;
}

const translations = {

  // ── grepTagPage missing keys ──────────────────────────────────────────────
  grepTagPage: {
    es: {
      hero: { badge:'iOS · macOS · Windows', appStoreCta:'Descargar en App Store', msStoreCta:'Obtener en Microsoft' },
      sync: { bullet1:'Mac / PC ↔ iPhone / iPad, iPhone ↔ iPad, Mac ↔ Mac, PC ↔ PC' },
      whySeparate: {
        col1:'BiblioFuse Reader', col2:'GrepTag Reader',
        row1Label:'Ideal para', row1col1:'Cómics, manga, PDF', row1col2:'EPUB, novelas ligeras, TXT',
        row2Label:'Tamaño de archivo', row2col1:'50–300 MB por volumen', row2col2:'Menos de 5 MB cada uno',
        row5col1:'CBZ, CBR, PDF, EPUB, TXT', row5col2:'EPUB, TXT',
      },
      pricing: {
        freeDesc:'Busca y descubre tu biblioteca para siempre.',
        proTitle:'Pro', proDesc:'Una compra única desbloquea todo, para siempre.',
        proMonthly:'$0,99 / mes', proYearly:'$4,99 / año', proLifetime:'$14,99 único',
        proTrial:'Prueba gratuita de 7 días en mensual y anual', appStoreCta:'Probar gratis en App Store',
      },
    },
    fr: {
      hero: { badge:'iOS · macOS · Windows', appStoreCta:"Télécharger sur l'App Store", msStoreCta:'Obtenir sur Microsoft' },
      sync: { bullet1:'Mac / PC ↔ iPhone / iPad, iPhone ↔ iPad, Mac ↔ Mac, PC ↔ PC' },
      whySeparate: {
        col1:'BiblioFuse Reader', col2:'GrepTag Reader',
        row1Label:'Idéal pour', row1col1:'BD, manga, PDF', row1col2:'EPUB, light novels, TXT',
        row2Label:'Taille des fichiers', row2col1:'50–300 Mo par volume', row2col2:'Moins de 5 Mo chacun',
        row5col1:'CBZ, CBR, PDF, EPUB, TXT', row5col2:'EPUB, TXT',
      },
      pricing: {
        freeDesc:'Recherchez et découvrez votre bibliothèque pour toujours.',
        proTitle:'Pro', proDesc:'Un achat unique déverrouille tout, pour toujours.',
        proMonthly:'0,99 $ / mois', proYearly:'4,99 $ / an', proLifetime:'14,99 $ unique',
        proTrial:'Essai gratuit de 7 jours sur mensuel et annuel', appStoreCta:"Essayer gratuitement sur l'App Store",
      },
    },
    nl: {
      hero: { badge:'iOS · macOS · Windows', appStoreCta:'Downloaden in App Store', msStoreCta:'Verkrijg het van Microsoft' },
      sync: { bullet1:'Mac / PC ↔ iPhone / iPad, iPhone ↔ iPad, Mac ↔ Mac, PC ↔ PC' },
      whySeparate: {
        col1:'BiblioFuse Reader', col2:'GrepTag Reader',
        row1Label:'Beste voor', row1col1:'Comics, manga, PDF', row1col2:'EPUB, light novels, TXT',
        row2Label:'Bestandsgrootte', row2col1:'50–300 MB per volume', row2col2:'Minder dan 5 MB per stuk',
        row5col1:'CBZ, CBR, PDF, EPUB, TXT', row5col2:'EPUB, TXT',
      },
      pricing: {
        freeDesc:'Doorzoek en ontdek je bibliotheek voor altijd.',
        proTitle:'Pro', proDesc:'Eenmalige aankoop ontgrendelt alles, voor altijd.',
        proMonthly:'€ 0,99 / maand', proYearly:'€ 4,99 / jaar', proLifetime:'€ 14,99 eenmalig',
        proTrial:'7 dagen gratis proberen op maandelijks en jaarlijks', appStoreCta:'Gratis proberen in App Store',
      },
    },
    pt: {
      hero: { badge:'iOS · macOS · Windows', appStoreCta:'Baixar na App Store', msStoreCta:'Obter na Microsoft' },
      sync: { bullet1:'Mac / PC ↔ iPhone / iPad, iPhone ↔ iPad, Mac ↔ Mac, PC ↔ PC' },
      whySeparate: {
        col1:'BiblioFuse Reader', col2:'GrepTag Reader',
        row1Label:'Melhor para', row1col1:'HQs, mangás, PDF', row1col2:'EPUB, light novels, TXT',
        row2Label:'Tamanho do arquivo', row2col1:'50–300 MB por volume', row2col2:'Menos de 5 MB cada',
        row5col1:'CBZ, CBR, PDF, EPUB, TXT', row5col2:'EPUB, TXT',
      },
      pricing: {
        freeDesc:'Pesquise e descubra sua biblioteca para sempre.',
        proTitle:'Pro', proDesc:'Uma compra única desbloqueia tudo, para sempre.',
        proMonthly:'R$ 0,99 / mês', proYearly:'R$ 4,99 / ano', proLifetime:'R$ 14,99 único',
        proTrial:'Teste gratuito de 7 dias no mensal e anual', appStoreCta:'Experimentar grátis na App Store',
      },
    },
    ru: {
      hero: { badge:'iOS · macOS · Windows', appStoreCta:'Загрузить в App Store', msStoreCta:'Получить в Microsoft' },
      sync: { bullet1:'Mac / PC ↔ iPhone / iPad, iPhone ↔ iPad, Mac ↔ Mac, PC ↔ PC' },
      whySeparate: {
        col1:'BiblioFuse Reader', col2:'GrepTag Reader',
        row1Label:'Лучше всего для', row1col1:'Комиксы, манга, PDF', row1col2:'EPUB, ранобэ, TXT',
        row2Label:'Размер файлов', row2col1:'50–300 МБ на том', row2col2:'Менее 5 МБ каждый',
        row5col1:'CBZ, CBR, PDF, EPUB, TXT', row5col2:'EPUB, TXT',
      },
      pricing: {
        freeDesc:'Ищите и открывайте свою библиотеку навсегда.',
        proTitle:'Pro', proDesc:'Разовая покупка открывает всё навсегда.',
        proMonthly:'$0,99 / месяц', proYearly:'$4,99 / год', proLifetime:'$14,99 единовременно',
        proTrial:'7-дневный пробный период на месячном и годовом тарифе', appStoreCta:'Попробовать бесплатно в App Store',
      },
    },
    zh: {
      hero: { badge:'iOS · macOS · Windows', appStoreCta:'在 App Store 下载', msStoreCta:'从 Microsoft 获取' },
      sync: { bullet1:'Mac / PC ↔ iPhone / iPad，iPhone ↔ iPad，Mac ↔ Mac，PC ↔ PC' },
      whySeparate: {
        col1:'BiblioFuse Reader', col2:'GrepTag Reader',
        row1Label:'适合', row1col1:'漫画、manga、PDF', row1col2:'EPUB、轻小说、TXT',
        row2Label:'文件大小', row2col1:'每卷 50–300 MB', row2col2:'每本不超过 5 MB',
        row5col1:'CBZ、CBR、PDF、EPUB、TXT', row5col2:'EPUB、TXT',
      },
      pricing: {
        freeDesc:'永久搜索和发现您的书库。',
        proTitle:'Pro', proDesc:'一次购买，永久解锁所有功能。',
        proMonthly:'$0.99 / 月', proYearly:'$4.99 / 年', proLifetime:'$14.99 一次性',
        proTrial:'月度和年度计划提供 7 天免费试用', appStoreCta:'在 App Store 免费试用',
      },
    },
    ja: {
      hero: { badge:'iOS · macOS · Windows', appStoreCta:'App Storeでダウンロード', msStoreCta:'Microsoftから入手' },
      sync: { bullet1:'Mac / PC ↔ iPhone / iPad、iPhone ↔ iPad、Mac ↔ Mac、PC ↔ PC' },
      whySeparate: {
        col1:'BiblioFuse Reader', col2:'GrepTag Reader',
        row1Label:'最適な用途', row1col1:'コミック、マンガ、PDF', row1col2:'EPUB、ライトノベル、TXT',
        row2Label:'ファイルサイズ', row2col1:'1巻あたり50〜300 MB', row2col2:'各5 MB未満',
        row5col1:'CBZ、CBR、PDF、EPUB、TXT', row5col2:'EPUB、TXT',
      },
      pricing: {
        freeDesc:'いつでも無料でライブラリを検索・発見できます。',
        proTitle:'Pro', proDesc:'一回の購入で、すべての機能を永久に解放します。',
        proMonthly:'$0.99 / 月', proYearly:'$4.99 / 年', proLifetime:'$14.99 買い切り',
        proTrial:'月額・年額プランは7日間の無料トライアルあり', appStoreCta:'App Storeで無料トライアル',
      },
    },
    ko: {
      hero: { badge:'iOS · macOS · Windows', appStoreCta:'App Store에서 다운로드', msStoreCta:'Microsoft에서 받기' },
      sync: { bullet1:'Mac / PC ↔ iPhone / iPad, iPhone ↔ iPad, Mac ↔ Mac, PC ↔ PC' },
      whySeparate: {
        col1:'BiblioFuse Reader', col2:'GrepTag Reader',
        row1Label:'최적 용도', row1col1:'만화, 망가, PDF', row1col2:'EPUB, 라이트노벨, TXT',
        row2Label:'파일 크기', row2col1:'권당 50–300 MB', row2col2:'각 5 MB 미만',
        row5col1:'CBZ, CBR, PDF, EPUB, TXT', row5col2:'EPUB, TXT',
      },
      pricing: {
        freeDesc:'영원히 무료로 라이브러리를 검색하고 발견하세요.',
        proTitle:'Pro', proDesc:'일회 구매로 모든 기능을 영구적으로 잠금 해제.',
        proMonthly:'$0.99 / 월', proYearly:'$4.99 / 년', proLifetime:'$14.99 일회',
        proTrial:'월간 및 연간 플랜에서 7일 무료 체험', appStoreCta:'App Store에서 무료 체험',
      },
    },
    id: {
      hero: { badge:'iOS · macOS · Windows', appStoreCta:'Unduh di App Store', msStoreCta:'Dapatkan dari Microsoft' },
      sync: { bullet1:'Mac / PC ↔ iPhone / iPad, iPhone ↔ iPad, Mac ↔ Mac, PC ↔ PC' },
      whySeparate: {
        col1:'BiblioFuse Reader', col2:'GrepTag Reader',
        row1Label:'Terbaik untuk', row1col1:'Komik, manga, PDF', row1col2:'EPUB, novel ringan, TXT',
        row2Label:'Ukuran file', row2col1:'50–300 MB per volume', row2col2:'Di bawah 5 MB masing-masing',
        row5col1:'CBZ, CBR, PDF, EPUB, TXT', row5col2:'EPUB, TXT',
      },
      pricing: {
        freeDesc:'Cari dan temukan perpustakaan Anda selamanya.',
        proTitle:'Pro', proDesc:'Pembelian satu kali membuka semua fitur selamanya.',
        proMonthly:'$0,99 / bulan', proYearly:'$4,99 / tahun', proLifetime:'$14,99 sekali bayar',
        proTrial:'Uji coba gratis 7 hari untuk bulanan & tahunan', appStoreCta:'Coba Gratis di App Store',
      },
    },
    ms: {
      hero: { badge:'iOS · macOS · Windows', appStoreCta:'Muat turun di App Store', msStoreCta:'Dapatkan dari Microsoft' },
      sync: { bullet1:'Mac / PC ↔ iPhone / iPad, iPhone ↔ iPad, Mac ↔ Mac, PC ↔ PC' },
      whySeparate: {
        col1:'BiblioFuse Reader', col2:'GrepTag Reader',
        row1Label:'Terbaik untuk', row1col1:'Komik, manga, PDF', row1col2:'EPUB, novel ringan, TXT',
        row2Label:'Saiz fail', row2col1:'50–300 MB setiap jilid', row2col2:'Bawah 5 MB setiap satu',
        row5col1:'CBZ, CBR, PDF, EPUB, TXT', row5col2:'EPUB, TXT',
      },
      pricing: {
        freeDesc:'Cari dan temui perpustakaan anda selamanya.',
        proTitle:'Pro', proDesc:'Pembelian sekali gus membuka semua ciri, selamanya.',
        proMonthly:'$0.99 / bulan', proYearly:'$4.99 / tahun', proLifetime:'$14.99 sekali',
        proTrial:'Percubaan percuma 7 hari untuk bulanan & tahunan', appStoreCta:'Cuba Percuma di App Store',
      },
    },
  },

  // ── home missing keys ─────────────────────────────────────────────────────
  home: {
    es: {
      hero: { chipA:'Universal · iCloud', chipB:'iPhone · iPad · Mac' },
      table: {
        badges: { msStore:'Microsoft Store' },
        editions: { apple:'BiblioFuse Reader iOS / macOS', pc:'BiblioFuse Reader PC', android:'BiblioFuse Reader Android' },
        subtitles: { apple:'iPhone · iPad · Mac' },
        rows: {
          0: { 1:'EPUB / CBZ / CBR', 2:'EPUB / CBZ / CBR' },
          1: { 1:'EPUB · PDF · CBZ · CBR · RAR · ZIP · TXT', 2:'EPUB · PDF · CBZ · CBR · RAR · ZIP · TXT', 3:'EPUB · PDF · CBZ · ZIP' },
          4: { 2:'Local + iCloud + SMB' },
        },
      },
      toolsSection: {
        web: { name:'BiblioFuse Web' },
        pcCbz: { name:'BiblioFuse CBZ Resizer', subtitle:'Windows · Microsoft Store' },
        pcEpub: { name:'BiblioFuse EPUB Resizer', subtitle:'Windows · Microsoft Store' },
      },
      faq: { items: {
        1: { link: { href:'/blog/sideload-comics-iphone-without-itunes' } },
        9: { bullets: {
          0: { text:'iPhone / iPad' },
          2: { text:'Windows 10 / Windows 11' },
        }},
      }},
    },
    fr: {
      hero: { chipA:'Universel · iCloud', chipB:'iPhone · iPad · Mac' },
      table: {
        badges: { msStore:'Microsoft Store' },
        editions: { apple:'BiblioFuse Reader iOS / macOS', pc:'BiblioFuse Reader PC', android:'BiblioFuse Reader Android' },
        subtitles: { apple:'iPhone · iPad · Mac' },
        rows: {
          0: { 1:'EPUB / CBZ / CBR', 2:'EPUB / CBZ / CBR' },
          1: { 1:'EPUB · PDF · CBZ · CBR · RAR · ZIP · TXT', 2:'EPUB · PDF · CBZ · CBR · RAR · ZIP · TXT', 3:'EPUB · PDF · CBZ · ZIP' },
          4: { 2:'Local + iCloud + SMB' },
        },
      },
      toolsSection: {
        web: { name:'BiblioFuse Web' },
        pcCbz: { name:'BiblioFuse CBZ Resizer', subtitle:'Windows · Microsoft Store' },
        pcEpub: { name:'BiblioFuse EPUB Resizer', subtitle:'Windows · Microsoft Store' },
      },
      faq: { items: {
        1: { link: { href:'/blog/sideload-comics-iphone-without-itunes' } },
        9: { bullets: {
          0: { text:'iPhone / iPad' },
          2: { text:'Windows 10 / Windows 11' },
        }},
      }},
    },
    nl: {
      hero: { chipA:'Universeel · iCloud', chipB:'iPhone · iPad · Mac' },
      table: {
        badges: { msStore:'Microsoft Store' },
        editions: { apple:'BiblioFuse Reader iOS / macOS', pc:'BiblioFuse Reader PC', android:'BiblioFuse Reader Android' },
        subtitles: { apple:'iPhone · iPad · Mac' },
        rows: {
          0: { 1:'EPUB / CBZ / CBR', 2:'EPUB / CBZ / CBR' },
          1: { 1:'EPUB · PDF · CBZ · CBR · RAR · ZIP · TXT', 2:'EPUB · PDF · CBZ · CBR · RAR · ZIP · TXT', 3:'EPUB · PDF · CBZ · ZIP' },
          4: { 2:'Lokaal + iCloud + SMB' },
        },
      },
      toolsSection: {
        web: { name:'BiblioFuse Web' },
        pcCbz: { name:'BiblioFuse CBZ Resizer', subtitle:'Windows · Microsoft Store' },
        pcEpub: { name:'BiblioFuse EPUB Resizer', subtitle:'Windows · Microsoft Store' },
      },
      faq: { items: {
        1: { link: { href:'/blog/sideload-comics-iphone-without-itunes' } },
        9: { bullets: {
          0: { text:'iPhone / iPad' },
          2: { text:'Windows 10 / Windows 11' },
        }},
      }},
    },
    pt: {
      hero: { chipA:'Universal · iCloud', chipB:'iPhone · iPad · Mac' },
      table: {
        badges: { msStore:'Microsoft Store' },
        editions: { apple:'BiblioFuse Reader iOS / macOS', pc:'BiblioFuse Reader PC', android:'BiblioFuse Reader Android' },
        subtitles: { apple:'iPhone · iPad · Mac' },
        rows: {
          0: { 1:'EPUB / CBZ / CBR', 2:'EPUB / CBZ / CBR' },
          1: { 1:'EPUB · PDF · CBZ · CBR · RAR · ZIP · TXT', 2:'EPUB · PDF · CBZ · CBR · RAR · ZIP · TXT', 3:'EPUB · PDF · CBZ · ZIP' },
          4: { 2:'Local + iCloud + SMB' },
        },
      },
      toolsSection: {
        web: { name:'BiblioFuse Web' },
        pcCbz: { name:'BiblioFuse CBZ Resizer', subtitle:'Windows · Microsoft Store' },
        pcEpub: { name:'BiblioFuse EPUB Resizer', subtitle:'Windows · Microsoft Store' },
      },
      faq: { items: {
        1: { link: { href:'/blog/sideload-comics-iphone-without-itunes' } },
        9: { bullets: {
          0: { text:'iPhone / iPad' },
          2: { text:'Windows 10 / Windows 11' },
        }},
      }},
    },
    ru: {
      hero: { chipA:'Универсальное · iCloud', chipB:'iPhone · iPad · Mac' },
      table: {
        badges: { msStore:'Microsoft Store' },
        editions: { apple:'BiblioFuse Reader iOS / macOS', pc:'BiblioFuse Reader PC', android:'BiblioFuse Reader Android' },
        subtitles: { apple:'iPhone · iPad · Mac' },
        rows: {
          0: { 1:'EPUB / CBZ / CBR', 2:'EPUB / CBZ / CBR' },
          1: { 1:'EPUB · PDF · CBZ · CBR · RAR · ZIP · TXT', 2:'EPUB · PDF · CBZ · CBR · RAR · ZIP · TXT', 3:'EPUB · PDF · CBZ · ZIP' },
          4: { 2:'Локально + iCloud + SMB' },
        },
      },
      toolsSection: {
        web: { name:'BiblioFuse Web' },
        pcCbz: { name:'BiblioFuse CBZ Resizer', subtitle:'Windows · Microsoft Store' },
        pcEpub: { name:'BiblioFuse EPUB Resizer', subtitle:'Windows · Microsoft Store' },
      },
      faq: { items: {
        1: { link: { href:'/blog/sideload-comics-iphone-without-itunes' } },
        9: { bullets: {
          0: { text:'iPhone / iPad' },
          2: { text:'Windows 10 / Windows 11' },
        }},
      }},
    },
    zh: {
      hero: { chipA:'通用 · iCloud', chipB:'iPhone · iPad · Mac' },
      table: {
        badges: { msStore:'Microsoft Store' },
        editions: { apple:'BiblioFuse Reader iOS / macOS', pc:'BiblioFuse Reader PC', android:'BiblioFuse Reader Android' },
        subtitles: { apple:'iPhone · iPad · Mac' },
        rows: {
          0: { 1:'EPUB / CBZ / CBR', 2:'EPUB / CBZ / CBR' },
          1: { 1:'EPUB · PDF · CBZ · CBR · RAR · ZIP · TXT', 2:'EPUB · PDF · CBZ · CBR · RAR · ZIP · TXT', 3:'EPUB · PDF · CBZ · ZIP' },
          4: { 2:'本地 + iCloud + SMB' },
        },
      },
      toolsSection: {
        web: { name:'BiblioFuse Web' },
        pcCbz: { name:'BiblioFuse CBZ Resizer', subtitle:'Windows · Microsoft Store' },
        pcEpub: { name:'BiblioFuse EPUB Resizer', subtitle:'Windows · Microsoft Store' },
      },
      faq: { items: {
        1: { link: { href:'/blog/sideload-comics-iphone-without-itunes' } },
        9: { bullets: {
          0: { text:'iPhone / iPad' },
          2: { text:'Windows 10 / Windows 11' },
        }},
      }},
    },
    ja: {
      hero: { chipA:'ユニバーサル · iCloud', chipB:'iPhone · iPad · Mac' },
      table: {
        badges: { msStore:'Microsoft Store' },
        editions: { apple:'BiblioFuse Reader iOS / macOS', pc:'BiblioFuse Reader PC', android:'BiblioFuse Reader Android' },
        subtitles: { apple:'iPhone · iPad · Mac' },
        rows: {
          0: { 1:'EPUB / CBZ / CBR', 2:'EPUB / CBZ / CBR' },
          1: { 1:'EPUB · PDF · CBZ · CBR · RAR · ZIP · TXT', 2:'EPUB · PDF · CBZ · CBR · RAR · ZIP · TXT', 3:'EPUB · PDF · CBZ · ZIP' },
          4: { 2:'ローカル + iCloud + SMB' },
        },
      },
      toolsSection: {
        web: { name:'BiblioFuse Web' },
        pcCbz: { name:'BiblioFuse CBZ Resizer', subtitle:'Windows · Microsoft Store' },
        pcEpub: { name:'BiblioFuse EPUB Resizer', subtitle:'Windows · Microsoft Store' },
      },
      faq: { items: {
        1: { link: { href:'/blog/sideload-comics-iphone-without-itunes' } },
        9: { bullets: {
          0: { text:'iPhone / iPad' },
          2: { text:'Windows 10 / Windows 11' },
        }},
      }},
    },
    ko: {
      hero: { chipA:'유니버설 · iCloud', chipB:'iPhone · iPad · Mac' },
      table: {
        badges: { msStore:'Microsoft Store' },
        editions: { apple:'BiblioFuse Reader iOS / macOS', pc:'BiblioFuse Reader PC', android:'BiblioFuse Reader Android' },
        subtitles: { apple:'iPhone · iPad · Mac' },
        rows: {
          0: { 1:'EPUB / CBZ / CBR', 2:'EPUB / CBZ / CBR' },
          1: { 1:'EPUB · PDF · CBZ · CBR · RAR · ZIP · TXT', 2:'EPUB · PDF · CBZ · CBR · RAR · ZIP · TXT', 3:'EPUB · PDF · CBZ · ZIP' },
          4: { 2:'로컬 + iCloud + SMB' },
        },
      },
      toolsSection: {
        web: { name:'BiblioFuse Web' },
        pcCbz: { name:'BiblioFuse CBZ Resizer', subtitle:'Windows · Microsoft Store' },
        pcEpub: { name:'BiblioFuse EPUB Resizer', subtitle:'Windows · Microsoft Store' },
      },
      faq: { items: {
        1: { link: { href:'/blog/sideload-comics-iphone-without-itunes' } },
        9: { bullets: {
          0: { text:'iPhone / iPad' },
          2: { text:'Windows 10 / Windows 11' },
        }},
      }},
    },
    id: {
      hero: { chipA:'Universal · iCloud', chipB:'iPhone · iPad · Mac' },
      table: {
        badges: { msStore:'Microsoft Store' },
        editions: { apple:'BiblioFuse Reader iOS / macOS', pc:'BiblioFuse Reader PC', android:'BiblioFuse Reader Android' },
        subtitles: { apple:'iPhone · iPad · Mac' },
        rows: {
          0: { 1:'EPUB / CBZ / CBR', 2:'EPUB / CBZ / CBR' },
          1: { 1:'EPUB · PDF · CBZ · CBR · RAR · ZIP · TXT', 2:'EPUB · PDF · CBZ · CBR · RAR · ZIP · TXT', 3:'EPUB · PDF · CBZ · ZIP' },
          4: { 2:'Lokal + iCloud + SMB' },
        },
      },
      toolsSection: {
        web: { name:'BiblioFuse Web' },
        pcCbz: { name:'BiblioFuse CBZ Resizer', subtitle:'Windows · Microsoft Store' },
        pcEpub: { name:'BiblioFuse EPUB Resizer', subtitle:'Windows · Microsoft Store' },
      },
      faq: { items: {
        1: { link: { href:'/blog/sideload-comics-iphone-without-itunes' } },
        9: { bullets: {
          0: { text:'iPhone / iPad' },
          2: { text:'Windows 10 / Windows 11' },
        }},
      }},
    },
    ms: {
      hero: { chipA:'Universal · iCloud', chipB:'iPhone · iPad · Mac' },
      table: {
        badges: { msStore:'Microsoft Store' },
        editions: { apple:'BiblioFuse Reader iOS / macOS', pc:'BiblioFuse Reader PC', android:'BiblioFuse Reader Android' },
        subtitles: { apple:'iPhone · iPad · Mac' },
        rows: {
          0: { 1:'EPUB / CBZ / CBR', 2:'EPUB / CBZ / CBR' },
          1: { 1:'EPUB · PDF · CBZ · CBR · RAR · ZIP · TXT', 2:'EPUB · PDF · CBZ · CBR · RAR · ZIP · TXT', 3:'EPUB · PDF · CBZ · ZIP' },
          4: { 2:'Tempatan + iCloud + SMB' },
        },
      },
      toolsSection: {
        web: { name:'BiblioFuse Web' },
        pcCbz: { name:'BiblioFuse CBZ Resizer', subtitle:'Windows · Microsoft Store' },
        pcEpub: { name:'BiblioFuse EPUB Resizer', subtitle:'Windows · Microsoft Store' },
      },
      faq: { items: {
        1: { link: { href:'/blog/sideload-comics-iphone-without-itunes' } },
        9: { bullets: {
          0: { text:'iPhone / iPad' },
          2: { text:'Windows 10 / Windows 11' },
        }},
      }},
    },
  },

  // ── tools platform subtitles ──────────────────────────────────────────────
  tools: {
    es: { readerSub:'iPhone · iPad · Mac · Android', archiveSub:'Mac · Windows', smartSub:'iPhone · iPad · Mac · Windows', contentcueSub:'iPhone · iPad', grepSub:'iPhone · iPad · Mac' },
    fr: { readerSub:'iPhone · iPad · Mac · Android', archiveSub:'Mac · Windows', smartSub:'iPhone · iPad · Mac · Windows', contentcueSub:'iPhone · iPad', grepSub:'iPhone · iPad · Mac' },
    nl: { readerSub:'iPhone · iPad · Mac · Android', archiveSub:'Mac · Windows', smartSub:'iPhone · iPad · Mac · Windows', contentcueSub:'iPhone · iPad', grepSub:'iPhone · iPad · Mac' },
    pt: { readerSub:'iPhone · iPad · Mac · Android', archiveSub:'Mac · Windows', smartSub:'iPhone · iPad · Mac · Windows', contentcueSub:'iPhone · iPad', grepSub:'iPhone · iPad · Mac' },
    ru: { readerSub:'iPhone · iPad · Mac · Android', archiveSub:'Mac · Windows', smartSub:'iPhone · iPad · Mac · Windows', contentcueSub:'iPhone · iPad', grepSub:'iPhone · iPad · Mac' },
    zh: { readerSub:'iPhone · iPad · Mac · Android', archiveSub:'Mac · Windows', smartSub:'iPhone · iPad · Mac · Windows', contentcueSub:'iPhone · iPad', grepSub:'iPhone · iPad · Mac' },
    ja: { readerSub:'iPhone · iPad · Mac · Android', archiveSub:'Mac · Windows', smartSub:'iPhone · iPad · Mac · Windows', contentcueSub:'iPhone · iPad', grepSub:'iPhone · iPad · Mac' },
    ko: { readerSub:'iPhone · iPad · Mac · Android', archiveSub:'Mac · Windows', smartSub:'iPhone · iPad · Mac · Windows', contentcueSub:'iPhone · iPad', grepSub:'iPhone · iPad · Mac' },
    id: { readerSub:'iPhone · iPad · Mac · Android', archiveSub:'Mac · Windows', smartSub:'iPhone · iPad · Mac · Windows', contentcueSub:'iPhone · iPad', grepSub:'iPhone · iPad · Mac' },
    ms: { readerSub:'iPhone · iPad · Mac · Android', archiveSub:'Mac · Windows', smartSub:'iPhone · iPad · Mac · Windows', contentcueSub:'iPhone · iPad', grepSub:'iPhone · iPad · Mac' },
  },

  // ── productFamily missing keys ────────────────────────────────────────────
  productFamily: {
    es: { products: { reader: { secondary:'Google Play' }, archive: { tag:'Mac · Windows', cta:'Mac App Store', secondary:'Microsoft Store' }, smartdecrypt: { tag:'iOS · Mac · Windows', cta:'iOS · Mac App Store', secondary:'Microsoft Store' } } },
    fr: { products: { reader: { secondary:'Google Play' }, archive: { tag:'Mac · Windows', cta:'Mac App Store', secondary:'Microsoft Store' }, smartdecrypt: { tag:'iOS · Mac · Windows', cta:'iOS · Mac App Store', secondary:'Microsoft Store' } } },
    nl: { products: { reader: { secondary:'Google Play' }, archive: { tag:'Mac · Windows', cta:'Mac App Store', secondary:'Microsoft Store' }, smartdecrypt: { tag:'iOS · Mac · Windows', cta:'iOS · Mac App Store', secondary:'Microsoft Store' } } },
    pt: { products: { reader: { secondary:'Google Play' }, archive: { tag:'Mac · Windows', cta:'Mac App Store', secondary:'Microsoft Store' }, smartdecrypt: { tag:'iOS · Mac · Windows', cta:'iOS · Mac App Store', secondary:'Microsoft Store' } } },
    ru: { products: { reader: { secondary:'Google Play' }, archive: { tag:'Mac · Windows', cta:'Mac App Store', secondary:'Microsoft Store' }, smartdecrypt: { tag:'iOS · Mac · Windows', cta:'iOS · Mac App Store', secondary:'Microsoft Store' } } },
    zh: { products: { reader: { secondary:'Google Play' }, archive: { tag:'Mac · Windows', cta:'Mac App Store', secondary:'Microsoft Store' }, smartdecrypt: { tag:'iOS · Mac · Windows', cta:'iOS · Mac App Store', secondary:'Microsoft Store' } } },
    ja: { products: { reader: { secondary:'Google Play' }, archive: { tag:'Mac · Windows', cta:'Mac App Store', secondary:'Microsoft Store' }, smartdecrypt: { tag:'iOS · Mac · Windows', cta:'iOS · Mac App Store', secondary:'Microsoft Store' } } },
    ko: { products: { reader: { secondary:'Google Play' }, archive: { tag:'Mac · Windows', cta:'Mac App Store', secondary:'Microsoft Store' }, smartdecrypt: { tag:'iOS · Mac · Windows', cta:'iOS · Mac App Store', secondary:'Microsoft Store' } } },
    id: { products: { reader: { secondary:'Google Play' }, archive: { tag:'Mac · Windows', cta:'Mac App Store', secondary:'Microsoft Store' }, smartdecrypt: { tag:'iOS · Mac · Windows', cta:'iOS · Mac App Store', secondary:'Microsoft Store' } } },
    ms: { products: { reader: { secondary:'Google Play' }, archive: { tag:'Mac · Windows', cta:'Mac App Store', secondary:'Microsoft Store' }, smartdecrypt: { tag:'iOS · Mac · Windows', cta:'iOS · Mac App Store', secondary:'Microsoft Store' } } },
  },
};

// Apply translations
let updatedFiles = 0;
for (const lang of LANGS) {
  const filePath = path.join(LOCALES_DIR, lang, 'translation.json');
  const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  if (!data.redesign) data.redesign = {};

  for (const [section, langMap] of Object.entries(translations)) {
    if (langMap[lang]) {
      if (!data.redesign[section]) data.redesign[section] = {};
      deepMerge(data.redesign[section], langMap[lang]);
    }
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + '\n', 'utf-8');
  updatedFiles++;
  console.log(`✓ ${lang}/translation.json`);
}
console.log(`\nDone. Updated ${updatedFiles} locale files.`);
