# Extraia Texto de Comics e Mangá no iPhone com OCR

O BiblioFuse inclui OCR no dispositivo para extrair texto de páginas de quadrinhos e mangá no iPhone, com suporte para japonês (incluindo texto vertical), chinês, coreano e caracteres ocidentais em arquivos CBZ, CBR, EPUB e PDF. Todo o processo é executado localmente no Neural Engine sem conexão de rede ou upload para servidor, produzindo resultados em menos de dois segundos no iPhone 14 ou mais recente.

Você está três volumes adentro de uma série de mangá quando um personagem menciona um clã, uma técnica ou um local cujo nome em japonês você quer pesquisar. Ou você encontra um diálogo memorável que quer copiar. O problema: as páginas de quadrinhos são imagens, não texto. Você não pode tocar no balão de diálogo para selecionar o que está dentro.

O OCR no [BiblioFuse](/pt/) muda isso. O aplicativo pode escanear qualquer página — ou uma região selecionada — extrair o texto encontrado e entregá-lo a você como uma string copiável. Funciona com arquivos CBZ, CBR, EPUB e PDF. Suporta japonês, chinês, coreano e scripts ocidentais. E funciona completamente no dispositivo, sem conexão à internet necessária.

## Por Que o OCR em Comics é Difícil

O OCR em documentos normais é um problema resolvido. As páginas de quadrinhos são mais difíceis por três razões:

**O texto fica em balões com bordas curvas.** O texto aparece sobre imagens desenhadas, muitas vezes com traços complexos diretamente atrás das letras, o que confunde os sistemas de OCR.

**As fontes costumam ser estilizadas ou desenhadas à mão.** Comics ocidentais usam fontes personalizadas que imitam a caligrafia ou têm formas de letras distorcidas para ênfase.

**O mangá tem convenções específicas de layout.** O texto japonês em mangá é tipicamente vertical, da direita para a esquerda, e comprimido em balões estreitos.

O [BiblioFuse](/pt/) treina seu OCR especificamente para layouts de comics e mangá, com modelos separados para texto ocidental horizontal e texto CJK (chinês, japonês, coreano) vertical.

## O Que Você Pode Fazer com o Texto Extraído

- **Pesquisar vocabulário em um idioma estrangeiro.** Se você lê mangá em japonês, extraia o diálogo de um painel e cole-o em um dicionário ou aplicativo de tradução.
- **Copiar citações.** Um diálogo memorável, uma legenda, um título de capítulo.
- **Pesquisar dentro de uma série.** Extraia o nome de um personagem ou termo técnico e pesquise em outros volumes.
- **Acessibilidade.** Extraia texto de quadrinhos digitalizados para usar em um leitor de tela ou aplicativo de texto para fala.
- **Tradução de conteúdo não traduzido.** Para mangás que nunca foram traduzidos oficialmente, OCR + tradução automática oferece uma experiência de leitura aproximada.

## Como Usar o OCR no BiblioFuse

O OCR está integrado na visualização do leitor. Não é necessário trocar de modo.

**Para escanear a página inteira:**

1. Enquanto lê, toque no centro da página para mostrar os controles.
2. Toque no botão **OCR** na barra de ferramentas.
3. O BiblioFuse escaneia a página atual e exibe o texto extraído em um painel abaixo.
4. Toque em qualquer bloco de texto para copiá-lo, ou use **Copiar Tudo**.

**Para escanear uma região específica:**

1. Pressione e segure qualquer parte da página.
2. Arraste para desenhar um retângulo de seleção ao redor da área desejada.
3. Levante o dedo. O BiblioFuse escaneia a região selecionada e exibe o resultado.
4. Toque para copiar ou compartilhar.

O modo de seleção de região é mais preciso para páginas com muitos elementos ou quando você quer o texto de um único balão.

## Detecção de Idioma e Suporte CJK

O BiblioFuse detecta o script automaticamente na maioria dos casos. O **texto japonês vertical** é tratado corretamente — o BiblioFuse reconstrói a ordem de leitura de cima para baixo em colunas da direita para a esquerda.

Para **chinês tradicional e simplificado**, o BiblioFuse distingue os conjuntos de caracteres na saída do OCR. O **manhwa coreano** (texto horizontal) é processado pelo mesmo pipeline que outros scripts CJK.

## Precisão: O Que Esperar

- **Digitalizações de alta resolução (600+ DPI):** Muito preciso.
- **Versões padrão (300 DPI):** Preciso em texto limpo; alguns erros em fontes estilizadas.
- **Digitalizações de baixa resolução ou comprimidas:** A precisão diminui com artefatos JPEG. O upscaling no [BiblioFuse](/pt/) pode ajudar antes de executar o OCR.
- **Comics com letras desenhadas à mão:** Mais variação. Fontes impressas por máquina funcionam melhor do que letras desenhadas à mão.

## O Que Fazer com o Texto

O painel de texto extraído no [BiblioFuse](/pt/) suporta ações padrão do menu de compartilhamento do iOS:

- **Copiar para a área de transferência** e colar em qualquer outro aplicativo
- **Compartilhar** diretamente com um aplicativo de tradução, Notas ou mensagens
- **Abrir no Safari** para pesquisar

Para texto em japonês, o dicionário do sistema iOS inclui busca japonês-inglês. Copie qualquer kanji extraído e abra o aplicativo Traduzir ou um dicionário.

## Dicas para Melhores Resultados

**Use o seletor de região para balões individuais.** O scan de página inteira fornece todo o texto, mas selecionar um único balão oferece resultados mais limpos quando os balões estão próximos.

**Ative o upscaling para digitalizações de baixa qualidade.** Nas configurações do leitor do BiblioFuse, o upscaling de imagem aplica um filtro de nitidez que melhora a qualidade de entrada para o OCR.

**Para mangá, segure o telefone reto.** O OCR em texto vertical é sensível à rotação.

## O OCR Funciona no Dispositivo

Todo o processamento de OCR no [BiblioFuse](/pt/) é executado localmente no seu iPhone. As páginas não são enviadas a nenhum servidor. Nenhuma imagem é carregada para processamento, nenhuma chamada de API externa é feita.

## Primeiros Passos

O OCR está disponível no [BiblioFuse](/pt/) para iOS sem nenhuma compra adicional. Baixe o aplicativo na App Store, importe um quadrinho ou mangá, e experimente o botão OCR enquanto lê. Para leitores de mangá especialmente, é uma funcionalidade da qual é difícil abrir mão depois de usar.


## Perguntas frequentes

**Quais idiomas o OCR do BiblioFuse suporta?**
O BiblioFuse suporta japonês (incluindo texto vertical de cima para baixo), chinês simplificado e tradicional, coreano e escritas ocidentais (latim, cirílico, grego). A seleção de idioma é automática, mas você pode forçar um idioma nas configurações de OCR se a detecção automática não funcionar bem com páginas mistas.

**Como funciona o OCR no BiblioFuse?**
Enquanto lê um quadrinho ou mangá, toque no botão OCR nos controles do leitor. Uma caixa de seleção aparece — arraste-a sobre qualquer painel ou balão de diálogo. O BiblioFuse processa a região selecionada localmente no Neural Engine e retorna o texto extraído. Toque no texto para copiar ou compartilhar.

**O OCR precisa de conexão com a internet?**
Não. O OCR do BiblioFuse roda completamente no dispositivo usando o Neural Engine da Apple. Nada é enviado para servidores externos. Funciona no modo avião, sem dados e sem Wi-Fi.

**Por que o OCR do BiblioFuse é melhor para japonês do que a câmera do iPhone?**
O BiblioFuse é otimizado para texto em páginas de quadrinhos: texto pequeno em balões, texto vertical em mangás, fontes estilizadas e texto em ângulo. O app Vision do sistema não é ajustado para esse contexto. O BiblioFuse também mantém o texto na posição de leitura, tornando copiar e colar em um dicionário uma operação de um único toque.

**Com quais formatos de arquivo o OCR do BiblioFuse funciona?**
O OCR funciona com CBZ, CBR, EPUB e PDF — todos os principais formatos de quadrinhos e ebooks suportados pelo BiblioFuse. O texto pode ser extraído de qualquer página renderizada como imagem, incluindo páginas digitalizadas em PDFs e EPUBs.
