const fs = require('fs');
const path = require('path');
const base = path.join(__dirname, '..', 'src', 'locales');

const T = {
es: {
  navChangelog: "Historial",
  changelog: { eyebrow: "Registro de desarrollo", title: "Qué ha cambiado", subtitle: "Historial de versiones, correcciones, problemas conocidos y próximas novedades en todas las plataformas.", filterAll: "Todas las plataformas", knownIssuesTitle: "Problemas conocidos", roadmapTitle: "Hoja de ruta" },
  seo: { changelogTitle: "Historial de BiblioFuse — Registro de desarrollo de la app", changelogDesc: "Historial de versiones, correcciones, problemas conocidos y hoja de ruta de BiblioFuse Reader para iOS, macOS, Android y PC." }
},
fr: {
  navChangelog: "Historique",
  changelog: { eyebrow: "Journal de développement", title: "Quoi de neuf", subtitle: "Historique des versions, corrections de bugs, problèmes connus et prochaines nouveautés sur toutes les plateformes.", filterAll: "Toutes les plateformes", knownIssuesTitle: "Problèmes connus", roadmapTitle: "Feuille de route" },
  seo: { changelogTitle: "Historique BiblioFuse — Journal de développement de l'application", changelogDesc: "Historique des versions, corrections, problèmes connus et feuille de route de BiblioFuse Reader pour iOS, macOS, Android et PC." }
},
nl: {
  navChangelog: "Geschiedenis",
  changelog: { eyebrow: "Ontwikkelingslog", title: "Wat er veranderd is", subtitle: "Versiegeschiedenis, bugfixes, bekende problemen en wat er nog komt — voor alle platforms.", filterAll: "Alle platforms", knownIssuesTitle: "Bekende problemen", roadmapTitle: "Roadmap" },
  seo: { changelogTitle: "BiblioFuse Changelog — App-ontwikkelingsgeschiedenis", changelogDesc: "Versiegeschiedenis, bugfixes, bekende problemen en roadmap voor BiblioFuse Reader op iOS, macOS, Android en PC." }
},
pt: {
  navChangelog: "Histórico",
  changelog: { eyebrow: "Registro de desenvolvimento", title: "O que mudou", subtitle: "Histórico de versões, correções de bugs, problemas conhecidos e o que vem por aí — em todas as plataformas.", filterAll: "Todas as plataformas", knownIssuesTitle: "Problemas conhecidos", roadmapTitle: "Roadmap" },
  seo: { changelogTitle: "Histórico do BiblioFuse — Registro de desenvolvimento do app", changelogDesc: "Histórico de versões, correções, problemas conhecidos e roadmap do BiblioFuse Reader para iOS, macOS, Android e PC." }
},
ru: {
  navChangelog: "История",
  changelog: { eyebrow: "Журнал разработки", title: "Что изменилось", subtitle: "История релизов, исправления ошибок, известные проблемы и планы на будущее — для всех платформ.", filterAll: "Все платформы", knownIssuesTitle: "Известные проблемы", roadmapTitle: "Дорожная карта" },
  seo: { changelogTitle: "История изменений BiblioFuse — журнал разработки приложения", changelogDesc: "История релизов, исправления, известные проблемы и дорожная карта BiblioFuse Reader для iOS, macOS, Android и PC." }
},
zh: {
  navChangelog: "更新记录",
  changelog: { eyebrow: "开发日志", title: "版本更新", subtitle: "各平台的发布历史、错误修复、已知问题及未来计划。", filterAll: "所有平台", knownIssuesTitle: "已知问题", roadmapTitle: "路线图" },
  seo: { changelogTitle: "BiblioFuse 更新记录 — 应用开发历史", changelogDesc: "BiblioFuse Reader 在 iOS、macOS、Android 和 PC 上的发布历史、错误修复、已知问题及路线图。" }
},
ja: {
  navChangelog: "更新履歴",
  changelog: { eyebrow: "開発ログ", title: "変更内容", subtitle: "全プラットフォームのリリース履歴、バグ修正、既知の問題、今後の予定。", filterAll: "全プラットフォーム", knownIssuesTitle: "既知の問題", roadmapTitle: "ロードマップ" },
  seo: { changelogTitle: "BiblioFuse 更新履歴 — アプリ開発記録", changelogDesc: "iOS、macOS、Android、PC 向け BiblioFuse Reader のリリース履歴、バグ修正、既知の問題、ロードマップ。" }
},
ko: {
  navChangelog: "변경 이력",
  changelog: { eyebrow: "개발 로그", title: "변경 사항", subtitle: "모든 플랫폼의 릴리스 기록, 버그 수정, 알려진 문제 및 향후 계획.", filterAll: "모든 플랫폼", knownIssuesTitle: "알려진 문제", roadmapTitle: "로드맵" },
  seo: { changelogTitle: "BiblioFuse 변경 이력 — 앱 개발 기록", changelogDesc: "iOS, macOS, Android, PC용 BiblioFuse Reader의 릴리스 기록, 버그 수정, 알려진 문제 및 로드맵." }
},
id: {
  navChangelog: "Riwayat",
  changelog: { eyebrow: "Log pengembangan", title: "Apa yang berubah", subtitle: "Riwayat rilis, perbaikan bug, masalah yang diketahui, dan rencana ke depan — untuk semua platform.", filterAll: "Semua platform", knownIssuesTitle: "Masalah yang diketahui", roadmapTitle: "Roadmap" },
  seo: { changelogTitle: "Changelog BiblioFuse — Riwayat pengembangan aplikasi", changelogDesc: "Riwayat rilis, perbaikan, masalah yang diketahui, dan roadmap BiblioFuse Reader untuk iOS, macOS, Android, dan PC." }
},
ms: {
  navChangelog: "Sejarah",
  changelog: { eyebrow: "Log pembangunan", title: "Apa yang berubah", subtitle: "Sejarah keluaran, pembaikan pepijat, isu yang diketahui dan perancangan masa hadapan — untuk semua platform.", filterAll: "Semua platform", knownIssuesTitle: "Isu yang diketahui", roadmapTitle: "Peta jalan" },
  seo: { changelogTitle: "Changelog BiblioFuse — Sejarah pembangunan aplikasi", changelogDesc: "Sejarah keluaran, pembaikan, isu yang diketahui dan peta jalan BiblioFuse Reader untuk iOS, macOS, Android dan PC." }
}
};

for (const lang of Object.keys(T)) {
  const file = path.join(base, lang, 'translation.json');
  const data = JSON.parse(fs.readFileSync(file, 'utf8'));
  const t = T[lang];

  // nav.changelog
  data.nav = data.nav || {};
  data.nav.changelog = t.navChangelog;

  // redesign.changelog
  data.redesign = data.redesign || {};
  data.redesign.changelog = t.changelog;

  // redesign.seo changelog keys
  data.redesign.seo = data.redesign.seo || {};
  data.redesign.seo.changelogTitle = t.seo.changelogTitle;
  data.redesign.seo.changelogDesc = t.seo.changelogDesc;

  fs.writeFileSync(file, JSON.stringify(data, null, 2) + '\n');
  console.log(`✅ ${lang}`);
}
console.log('Done.');
