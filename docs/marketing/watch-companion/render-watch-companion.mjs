import sharp from 'sharp';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const captures = path.join(root, 'source-captures');
const output = path.join(root, 'generated');
await mkdir(output, { recursive: true });
const W = 828, H = 1800;
const locales = [
  {code:'en-US',site:'en',label:'Apple Watch companion',title:['Books, audio and comics','within wrist’s reach'],copy:['Start a novel’s narration on Apple Watch.','Your iPhone handles audio and comic pages.'],now:'NOVEL LISTENING',comic:'COMIC CONTROLS',phone:'ON IPHONE',foot:['Your iPhone stays in charge of','playback and comic reading.'],detail:'BiblioFuse pairs Apple Watch controls with your iPhone.'},
  {code:'es-ES',site:'es',label:'Apple Watch · compañero',title:['Libros, audio y cómics','al alcance de tu muñeca'],copy:['Inicia la narración de una novela en el Apple Watch.','El iPhone reproduce el audio y muestra el cómic.'],now:'LECTURA EN VOZ ALTA',comic:'CONTROL DEL CÓMIC',phone:'EN IPHONE',foot:['El iPhone se encarga del audio','y de leer el cómic.'],detail:'BiblioFuse conecta los controles del Apple Watch con tu iPhone.'},
  {code:'fr-FR',site:'fr',label:'Compagnon Apple Watch',title:['Livres, audio et BD','à portée de poignet'],copy:['Lancez l’audio d’un roman sur l’Apple Watch.','L’iPhone gère le son et les pages de BD.'],now:'ÉCOUTE DU ROMAN',comic:'COMMANDES DE BD',phone:'SUR IPHONE',foot:['L’iPhone gère la lecture audio','et les pages de BD.'],detail:'BiblioFuse relie les commandes de l’Apple Watch à votre iPhone.'},
  {code:'nl-NL',site:'nl',label:'Apple Watch · metgezel',title:['Boeken, audio en strips','binnen handbereik'],copy:['Start voorlezen op je Apple Watch.','Je iPhone speelt audio af en toont de strip.'],now:'VOORLEZEN',comic:'STRIPBEDIENING',phone:'OP IPHONE',foot:['Je iPhone regelt het voorlezen','en toont de strip.'],detail:'BiblioFuse koppelt Apple Watch-bediening aan je iPhone.'},
  {code:'pt-PT',site:'pt',label:'Companheiro Apple Watch',title:['Livros, áudio e BD','ao alcance do pulso'],copy:['Inicie a narração no Apple Watch.','O iPhone trata do áudio e das páginas de BD.'],now:'A OUVIR UM ROMANCE',comic:'CONTROLOS DE BD',phone:'NO IPHONE',foot:['O iPhone trata do áudio','e da leitura das páginas.'],detail:'O BiblioFuse liga os controlos do Apple Watch ao seu iPhone.'},
  {code:'pt-BR',site:'pt',label:'Companheiro Apple Watch',title:['Livros, áudio e quadrinhos','ao alcance do pulso'],copy:['Comece a narração no Apple Watch.','O iPhone cuida do áudio e das páginas do quadrinho.'],now:'OUVINDO UM ROMANCE',comic:'CONTROLES DE QUADRINHO',phone:'NO IPHONE',foot:['O iPhone cuida do áudio','e da leitura dos quadrinhos.'],detail:'O BiblioFuse conecta os controles do Apple Watch ao seu iPhone.'},
  {code:'ru',site:'ru',label:'Компаньон для Apple Watch',title:['Книги, аудио и комиксы','на вашем запястье'],copy:['Запускайте озвучивание на Apple Watch.','iPhone воспроизводит аудио и показывает комикс.'],now:'ОЗВУЧИВАНИЕ КНИГИ',comic:'УПРАВЛЕНИЕ КОМИКСОМ',phone:'НА IPHONE',foot:['iPhone отвечает за аудио','и чтение страниц комикса.'],detail:'BiblioFuse связывает управление с Apple Watch и вашим iPhone.'},
  {code:'zh-Hans',site:'zh',label:'Apple Watch 随身伴侣',title:['书籍、有声阅读与漫画，','尽在腕间'],copy:['在 Apple Watch 上开始小说朗读。','音频播放和漫画阅读都在 iPhone 上。'],now:'小说朗读',comic:'漫画控制',phone:'IPHONE 阅读',foot:['音频播放与漫画阅读','仍由 iPhone 处理。'],detail:'BiblioFuse 将 Apple Watch 控制与 iPhone 阅读体验相连。'},
  {code:'ja',site:'ja',label:'Apple Watch コンパニオン',title:['本も音声もマンガも、','手首から'],copy:['Apple Watchから小説の読み上げを開始。','音声再生とマンガ表示はiPhoneで行います。'],now:'小説の読み上げ',comic:'マンガ操作',phone:'IPHONEで表示',foot:['音声再生とマンガの閲覧は','iPhoneで行います。'],detail:'Apple Watchの操作をiPhone上のBiblioFuseにつなぎます。'},
  {code:'ko',site:'ko',label:'Apple Watch 동반 앱',title:['책, 오디오, 만화를','손목에서 간편하게'],copy:['Apple Watch에서 소설 읽어주기를 시작하세요.','오디오 재생과 만화 페이지는 iPhone에서 처리됩니다.'],now:'소설 듣기',comic:'만화 제어',phone:'IPHONE에서 보기',foot:['오디오 재생과 만화 읽기는','iPhone에서 진행됩니다.'],detail:'BiblioFuse는 Apple Watch 조작을 iPhone과 연결합니다.'},
  {code:'id',site:'id',label:'Pendamping Apple Watch',title:['Buku, audio, dan komik','dalam jangkauan'],copy:['Mulai audio novel dari Apple Watch.','iPhone memutar audio dan menampilkan halaman komik.'],now:'MENDENGARKAN NOVEL',comic:'KONTROL KOMIK',phone:'DI IPHONE',foot:['iPhone menangani audio','dan halaman komik.'],detail:'BiblioFuse menghubungkan kontrol Apple Watch dengan iPhone Anda.'},
  {code:'ms',site:'ms',label:'Teman Apple Watch',title:['Buku, audio dan komik','sentiasa dekat di pergelangan'],copy:['Mulakan bacaan novel pada Apple Watch.','iPhone memainkan audio dan memaparkan halaman komik.'],now:'SEDANG MENDENGAR',comic:'KAWALAN KOMIK',phone:'DI IPHONE',foot:['iPhone mengendalikan audio','dan halaman komik.'],detail:'BiblioFuse menghubungkan kawalan Apple Watch dengan iPhone anda.'},
];
const esc = s => s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&apos;');
const data = async p => `data:image/png;base64,${(await readFile(p)).toString('base64')}`;
async function firstExisting(paths){ for(const p of paths){ try{ await readFile(p); return p; }catch{} } return paths.at(-1); }
const libraryLabels = {'en-US':'NOVEL LIBRARY','es-ES':'BIBLIOTECA DE NOVELAS','fr-FR':'BIBLIOTHÈQUE DE ROMANS','nl-NL':'ROMANBIBLIOTHEEK','pt-PT':'BIBLIOTECA DE ROMANCES','pt-BR':'BIBLIOTECA DE ROMANCES','ru':'БИБЛИОТЕКА РОМАНОВ','zh-Hans':'小说书库','ja':'小説ライブラリ','ko':'소설 라이브러리','id':'PERPUSTAKAAN NOVEL','ms':'PERPUSTAKAAN NOVEL'};
const icon = await data(path.resolve(root,'../../../public/app-icon.png'));
const phonePath = path.join(captures,'en-US','iphone-comic-reader.png');
const manifests=[];
const tiles=[];
for(const l of locales){
  const libraryPath = await firstExisting([path.join(captures,l.code,'watch-novel-library.png'),path.join(captures,'en-US','watch-novel-library.png'),path.join(captures,'nl-NL','watch-novel-library.png')]);
  const nowPath = await firstExisting([path.join(captures,l.code,'watch-now-playing-timer.png'),path.join(captures,'en-US','watch-now-playing-timer.png')]);
  const comicPath = await firstExisting([path.join(captures,l.code,'watch-comic-controls.png'),path.join(captures,'en-US','watch-comic-controls.png')]);
  const nowLocale=path.relative(captures,nowPath).split(path.sep)[0];
  const comicLocale=path.relative(captures,comicPath).split(path.sep)[0];
  const libraryLocale=path.relative(captures,libraryPath).split(path.sep)[0];
  const [library,now,comic,phone]=await Promise.all([data(libraryPath),data(nowPath),data(comicPath),data(phonePath)]);
  const fontSize=l.code==='zh-Hans'||l.code==='ja'||l.code==='ko'?39:42;
  const headLines=l.title.map((t,i)=>`<text x="70" y="${244+i*52}" font-size="${fontSize}" font-weight="750" fill="#142B4C">${esc(t)}</text>`).join('');
  const copyLines=l.copy.map((t,i)=>`<text x="72" y="${365+i*34}" font-size="22" font-weight="450" fill="#45617F">${esc(t)}</text>`).join('');
  const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#EAF4FF"/><stop offset="1" stop-color="#F3F7FC"/></linearGradient>
      <clipPath id="screenLibrary"><rect x="67" y="565" width="220" height="262" rx="34"/></clipPath>
      <clipPath id="screenNow"><rect x="67" y="860" width="220" height="262" rx="34"/></clipPath>
      <clipPath id="screenComic"><rect x="67" y="1155" width="220" height="262" rx="34"/></clipPath>
      <clipPath id="screenPhone"><rect x="441" y="564" width="316" height="688" rx="34"/></clipPath>
      <filter id="shadow" x="-30%" y="-20%" width="160%" height="160%"><feDropShadow dx="0" dy="16" stdDeviation="18" flood-color="#47688B" flood-opacity=".20"/></filter>
    </defs>
    <rect width="828" height="1800" fill="url(#bg)"/>
    <circle cx="786" cy="1320" r="240" fill="#D9E9FA" opacity=".55"/>
    <circle cx="18" cy="920" r="180" fill="#DDEBFA" opacity=".45"/>
    <rect x="64" y="57" width="54" height="54" rx="16" fill="#fff" filter="url(#shadow)"/>
    <image href="${icon}" x="68" y="61" width="46" height="46" preserveAspectRatio="xMidYMid meet"/>
    <text x="132" y="94" font-family="Arial, Helvetica, sans-serif" font-size="28" font-weight="750" fill="#142B4C">BiblioFuse</text>
    <rect x="68" y="143" width="${Math.min(370,Math.max(230,l.label.length*11+42))}" height="38" rx="19" fill="#D6E8FB"/>
    <text x="88" y="168" font-family="Arial, Helvetica, sans-serif" font-size="15" font-weight="700" letter-spacing=".8" fill="#31577B">${esc(l.label.toUpperCase())}</text>
    ${headLines}
    ${copyLines}
    <text x="72" y="536" font-family="Arial, Helvetica, sans-serif" font-size="15" font-weight="750" letter-spacing="1.1" fill="#59728D">${esc(libraryLabels[l.code])}</text>
    <text x="72" y="831" font-family="Arial, Helvetica, sans-serif" font-size="15" font-weight="750" letter-spacing="1.1" fill="#59728D">${esc(l.now)}</text>
    <text x="441" y="512" font-family="Arial, Helvetica, sans-serif" font-size="15" font-weight="750" letter-spacing="1.1" fill="#59728D">${esc(l.phone)}</text>
    <path d="M293 1300 C350 1300 380 1170 420 1150" fill="none" stroke="#8CB6E1" stroke-width="4" stroke-linecap="round" stroke-dasharray="2 10"/>
    <circle cx="293" cy="1300" r="8" fill="#5B9AD8"/><circle cx="420" cy="1150" r="8" fill="#5B9AD8"/>
    <rect x="54" y="550" width="246" height="289" rx="43" fill="#101827" filter="url(#shadow)"/>
    <rect x="61" y="557" width="232" height="275" rx="38" fill="#050608" stroke="#26364B" stroke-width="2"/>
    <image href="${library}" x="67" y="565" width="220" height="262" preserveAspectRatio="xMidYMid slice" clip-path="url(#screenLibrary)"/>
    <rect x="54" y="845" width="246" height="289" rx="43" fill="#101827" filter="url(#shadow)"/>
    <rect x="61" y="852" width="232" height="275" rx="38" fill="#050608" stroke="#26364B" stroke-width="2"/>
    <image href="${now}" x="67" y="860" width="220" height="262" preserveAspectRatio="xMidYMid slice" clip-path="url(#screenNow)"/>
    <rect x="54" y="1140" width="246" height="289" rx="43" fill="#101827" filter="url(#shadow)"/>
    <rect x="61" y="1147" width="232" height="275" rx="38" fill="#050608" stroke="#26364B" stroke-width="2"/>
    <image href="${comic}" x="67" y="1155" width="220" height="262" preserveAspectRatio="xMidYMid slice" clip-path="url(#screenComic)"/>
    <rect x="426" y="550" width="346" height="716" rx="52" fill="#172338" filter="url(#shadow)"/>
    <rect x="433" y="557" width="332" height="702" rx="44" fill="#05070B" stroke="#29364A" stroke-width="2"/>
    <image href="${phone}" x="441" y="564" width="316" height="688" preserveAspectRatio="xMidYMid slice" clip-path="url(#screenPhone)"/>
    <rect x="432" y="1274" width="334" height="16" rx="8" fill="#203249" opacity=".15"/>
    <rect x="54" y="1450" width="718" height="260" rx="34" fill="#FFFFFF" opacity=".96" filter="url(#shadow)"/>
    <text x="88" y="1516" font-family="Arial, Helvetica, sans-serif" font-size="18" font-weight="750" letter-spacing="1" fill="#44749F">${esc(l.label.toUpperCase())}</text>
    ${l.foot.map((t,i)=>`<text x="88" y="${1573+i*36}" font-family="Arial, Helvetica, sans-serif" font-size="27" font-weight="750" fill="#142B4C">${esc(t)}</text>`).join('')}
    <text x="88" y="1660" font-family="Arial, Helvetica, sans-serif" font-size="17" font-weight="450" fill="#56708A">${esc(l.detail)}</text>
  </svg>`;
  const svgPath=path.join(output,`watch-companion-${l.code}.svg`);
  await writeFile(svgPath,svg);
  const out=path.join(output,`${l.code}.jpg`);
  await sharp(Buffer.from(svg)).jpeg({quality:92,mozjpeg:true,chromaSubsampling:'4:4:4'}).toFile(out);
  const hash=async p=>createHash('sha256').update(await readFile(p)).digest('hex');
  manifests.push({locale:l.code,websiteLocale:l.site,final:path.basename(out),dimensions:'828x1800',format:'JPEG',novelLibraryCapture:path.relative(root,libraryPath),novelLibraryCaptureLocale:libraryLocale,nowPlayingCapture:path.relative(root,nowPath),nowPlayingCaptureLocale:nowLocale,comicCapture:path.relative(root,comicPath),comicCaptureLocale:comicLocale,phoneCapture:path.relative(root,phonePath),novelLibrarySha256:await hash(libraryPath),nowPlayingSha256:await hash(nowPath),comicSha256:await hash(comicPath),phoneSha256:await hash(phonePath),finalSha256:await hash(out)});
  const thumb=await sharp(out).resize(207,450).png().toBuffer();
  const labelSvg=Buffer.from(`<svg width="207" height="44" xmlns="http://www.w3.org/2000/svg"><rect width="207" height="44" fill="#142B4C"/><text x="12" y="29" fill="#fff" font-family="Arial" font-size="19" font-weight="700">${esc(l.code)}</text></svg>`);
  const tile=await sharp(thumb).composite([{input:labelSvg,left:0,top:0}]).png().toBuffer();
  tiles.push({input:tile,left:(tiles.length%4)*207,top:Math.floor(tiles.length/4)*450});
}
await sharp({create:{width:828,height:1350,channels:3,background:'#DDEBFA'}}).composite(tiles).jpeg({quality:90}).toFile(path.join(output,'contact-sheet.jpg'));
await writeFile(path.join(output,'locale-manifest.json'),JSON.stringify({createdAt:'2026-10-28',sourceApp:'BiblioFuse Watch release 2.1.16 (132); iPhone app release 2.1.16 (132)',canvas:{width:828,height:1800,format:'JPEG',color:'sRGB'},assets:manifests},null,2)+'\n');
console.log(JSON.stringify(manifests.map(x=>({locale:x.locale,library:x.novelLibraryCaptureLocale,now:x.nowPlayingCaptureLocale,comic:x.comicCaptureLocale,final:x.final})),null,2));
