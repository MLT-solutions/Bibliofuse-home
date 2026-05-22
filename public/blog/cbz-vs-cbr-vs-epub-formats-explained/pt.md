# CBZ vs CBR vs EPUB — Formatos de Quadrinhos e Ebooks Explicados

Você está olhando uma página de download e vê quatro tipos de arquivo: CBZ, CBR, EPUB, PDF. Todos afirmam ser "o mesmo livro". Qual baixar? Qual funcionará no seu celular, tablet ou Mac?

Este guia esclarece tudo. Ao final, você saberá exatamente o que é cada formato, o que está dentro dele e qual é o certo para cada situação.

## A Resposta Curta

| Formato | Conteúdo | Melhor para |
|---------|----------|------------|
| CBZ | Imagens em um arquivo ZIP | Quadrinhos, mangá, graphic novels |
| CBR | Imagens em um arquivo RAR | O mesmo que CBZ, versões antigas |
| EPUB | HTML + imagens em um ZIP | E-books de texto, romances |
| PDF | Páginas em layout fixo | Documentos, livros técnicos |

## CBZ — Comic Book ZIP

CBZ significa Comic Book ZIP. O formato tem exatamente uma regra: renomear um arquivo ZIP para `.cbz`. Sem codificação especial. Abra qualquer `.cbz` com um utilitário de compressão e encontrará uma pasta com imagens numeradas em ordem de leitura.

O CBZ ficou popular no início dos anos 2000 porque resolveu um problema simples: arquivos de quadrinhos precisavam circular online, e o ZIP estava em todo lugar. A extensão `.cbz` indicava ao software leitor "isto é um quadrinho, exiba as imagens em sequência".

**O que contém:** Imagens sequenciais, normalmente JPG, PNG ou WebP. Alguns arquivos incluem um `ComicInfo.xml` com metadados. O [BiblioFuse](/pt/) lê esses metadados para exibir informações corretas na biblioteca.

**Suporte:** Universal. Todo aplicativo de quadrinhos em toda plataforma suporta CBZ.

## CBR — Comic Book RAR

CBR significa Comic Book RAR. Mesmo conceito que CBZ, mas o contêiner é um arquivo RAR em vez de ZIP.

O RAR era popular nas comunidades de compartilhamento quando a maioria dos scans de quadrinhos acontecia, então lançamentos mais antigos costumam ser CBR. A estrutura interna é idêntica. O [BiblioFuse](/pt/) suporta ambos.

**Converter?** Se você tem uma grande coleção de CBR, converter para CBZ é razoável. A conversão é sem perdas pois os mesmos arquivos são apenas re-arquivados.

**Nota sobre RAR5:** Alguns CBR muito antigos usam RAR5, que softwares mais antigos não conseguem abrir. Reempacotar como CBZ sempre resolve.

## EPUB — Electronic Publication

EPUB é um padrão W3C aberto projetado para e-books com muito texto — romances, não ficção. Ao contrário de CBZ e CBR, o conteúdo é *texto*, não imagens.

O EPUB é um arquivo ZIP contendo:
- **Arquivos HTML ou XHTML** — o texto dos capítulos
- **Folhas de estilo CSS** — fontes, espaçamento, layout
- **Imagens** — capa e ilustrações
- **Manifesto OPF** — lista todos os arquivos e define a ordem de leitura
- **Arquivo NCX ou NAV** — o índice

Diferenças principais:
- **Refluxo:** O leitor controla tamanho da fonte, espaçamento e cor de fundo.
- **Acessibilidade:** Leitores de tela podem ler o texto em voz alta.
- **Pesquisa:** Você pode pesquisar qualquer palavra em um EPUB.

**DRM:** Muitos EPUBs comerciais usam DRM da Adobe ou FairPlay da Apple. EPUBs sem DRM funcionam em qualquer leitor, incluindo o [BiblioFuse](/pt/).

## PDF — Portable Document Format

PDF é um formato de layout fixo. Ao contrário do EPUB, o autor controla exatamente onde cada elemento aparece. PDF foi projetado para impressão.

Para quadrinhos, o PDF funciona mas não é ideal: arquivos costumam ser grandes e o zoom no celular é incômodo. Para manuais técnicos e documentos digitalizados, o PDF costuma ser a melhor escolha.

## Qual Formato Baixar?

**Mangá ou quadrinhos:** CBZ é a melhor escolha. Se apenas CBR estiver disponível, baixe-o — são idênticos na prática.

**Romances e e-books de texto:** EPUB sempre. É fluido, acessível e legível em qualquer tamanho de tela.

**Livros técnicos ou digitalizados:** PDF se o layout importa; EPUB se a fonte oferece.

## Compatibilidade no BiblioFuse

O [BiblioFuse](/pt/) lê todos esses formatos nativamente no iPhone, iPad e Mac: CBZ, CBR, ZIP, RAR, EPUB, PDF e TXT. A aba Ferramentas gerencia conversão e compressão diretamente no dispositivo.

## Nota sobre Tamanho de Arquivo

| Formato | Tamanho relativo | Motivo |
|---------|-----------------|--------|
| CBZ com PNG | Maior | Imagens sem perda |
| CBZ com JPEG | Médio | Compressão com perda |
| CBZ com WebP | Menor | Compressão moderna |
| EPUB (texto) | Mínimo | Texto comprime muito bem |

Um volume de mangá em PNG CBZ pesa tipicamente 300–400 MB. O mesmo volume comprimido para WebP pesa 40–80 MB — uma redução de 80% sem perda de qualidade visível na tela do celular.
