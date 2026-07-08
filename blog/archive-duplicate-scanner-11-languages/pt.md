# Comic Duplicate Scanner Agora Disponível em 11 Idiomas — Encontre Quadrinhos que Você Não Sabia Serem Duplicados

Quando você gerencia uma grande coleção de quadrinhos, os duplicados nem sempre parecem duplicados. Um arquivo se chama `comic_E1-5.cbz`. Outro, `ComiX_E1-10.cbz`. Nome diferente, intervalo aparente diferente — mas as páginas internas se sobrepõem. [Comic Duplicate Scanner](/pt/archive/) foi construído exatamente para isso: ele abre os arquivos e compara as imagens das páginas diretamente, não apenas os nomes dos arquivos.

Esse recurso agora está disponível em 11 idiomas. Comic Duplicate Scanner expandiu sua localização completa para inglês, espanhol, francês, holandês, português, russo, chinês simplificado, japonês, coreano, bahasa indonesia e malaio.

## O Problema com a Detecção por Nome de Arquivo

Localizadores de duplicados padrão comparam nomes, tamanhos ou hashes. Essa abordagem falha com arquivos de quadrinhos porque:

- **Mesmo conteúdo, nome diferente**: `Spider-Man_001.cbz` e `spiderman_issue01.cbz` são o mesmo quadrinho, mas nenhuma comparação de nomes detecta isso
- **Intervalos de episódios sobrepostos**: `manga_vol1_ch1-5.cbz` e `manga_vol1_ch3-8.cbz` contêm capítulos idênticos em arquivos diferentes
- **Arquivos recodificados**: um CBZ reexportado tem um hash diferente, mas conteúdo de páginas idêntico

[Comic Duplicate Scanner](/pt/archive/) contorna isso extraindo amostras de imagens de cada arquivo e comparando-as visualmente usando hashing perceptual.

## O Que Há de Novo: Suporte Completo para 11 Idiomas

| Idioma | Novidade |
|--------|----------|
| Inglês | — |
| Espanhol | — |
| Português | — |
| Bahasa Indonesia | — |
| Chinês Simplificado | — |
| **Francês** | ✓ |
| **Holandês** | ✓ |
| **Russo** | ✓ |
| **Japonês** | ✓ |
| **Coreano** | ✓ |
| **Malaio** | ✓ |

A interface completa é traduzida — controles de varredura, lista de resultados, rótulos de confiança, botões de ação e painéis de preferências.

## Como Funciona a Comparação Visual

Comic Duplicate Scanner abre cada arquivo CBZ, CBR, ZIP ou RAR, extrai páginas iniciais e gera um hash perceptual de cada uma. Se hashes suficientes corresponderem, o par é marcado como possível duplicado — independentemente do que os nomes dos arquivos digam.

Você controla a sensibilidade de correspondência. Um limite mais estrito exige uma correspondência visual mais próxima; um limite mais frouxo captura mais casos limítrofes.

Comic Duplicate Scanner é gratuito para varrer e visualizar correspondências. Comic Duplicate Scanner Pro é uma compra única que permite ações de mover/excluir em massa. Sem assinatura.

Baixe [Comic Duplicate Scanner](/pt/archive/) na App Store ou Microsoft Store.
