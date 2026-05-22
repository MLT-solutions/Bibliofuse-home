# Por que arquivos de quadrinhos e ebooks são tão grandes — e como resolver

Você copia uma série manga de 50 volumes para o seu iPhone e vê 20 gigabytes de armazenamento desaparecerem de uma vez. Ou baixa um único CBZ e ele tem 400 MB para apenas um volume. Para onde vai todo esse espaço?

A resposta está no formato do arquivo — e quando você entende isso, resolver o problema leva menos de um minuto.

## CBZ e EPUB: os dois são arquivos ZIP disfarçados

Um arquivo CBZ é um arquivo ZIP com uma extensão diferente. Renomeie qualquer `.cbz` para `.zip`, descompacte e você encontrará uma pasta de imagens nomeadas em ordem de leitura — `001.png`, `002.png`, e assim por diante. Arquivos CBR funcionam da mesma forma, mas usam RAR em vez de ZIP. Sem codificação proprietária, sem mistério: apenas imagens em um contêiner.

O EPUB é estruturalmente similar. Renomeie um `.epub` para `.zip`, descompacte e você encontrará arquivos HTML (o texto dos capítulos), folhas de estilo CSS, metadados e imagens incorporadas — capa, ilustrações e fotos. EPUB é um padrão aberto W3C compatível com todos os principais aplicativos de leitura.

Ambos os formatos são bem projetados para o que fazem. O problema de tamanho não está no contêiner — é o que está dentro.

## Por que imagens PNG consomem tanto armazenamento

A maioria dos grupos de scan e editores de ebooks usa PNG por padrão porque é sem perda: cada pixel do arquivo salvo é idêntico ao scan original. Essa fidelidade tem um custo.

Uma página de quadrinho em alta resolução — tipicamente 1800 × 2700 pixels em cor de 24 bits — pesa 2 MB ou mais como PNG. A maioria dos volumes manga tem entre 180 e 220 páginas. O custo de armazenamento se acumula rapidamente:

| Formato do volume | Páginas | Tamanho por página | Tamanho total |
|------------------|---------|------------------|--------------|
| PNG (sem perda) | 200 | ~2 MB | **~400 MB** |
| WebP (comprimido) | 200 | ~250 kB | **~50 MB** |
| Armazenamento economizado | | | **87,5%** |

Multiplique por uma série longa. Uma biblioteca manga de 50 volumes em PNG ocupa cerca de **20 GB**. A mesma série comprimida para WebP cabe em **2,5 GB** — uma economia de **17,5 GB** de uma única série. Ferramentas como o [BiblioFuse](/pt/webapp) fazem essa conversão completamente no dispositivo, sem precisar de nenhum software no computador.

## O que torna o WebP melhor

WebP é um formato de imagem desenvolvido pelo Google que alcança arquivos muito menores que o PNG, e menores que JPEG com qualidade comparável. Com uma configuração de qualidade moderada (cerca de 80–85%), a diferença visual em relação ao PNG original é imperceptível em uma tela de celular ou tablet. Quadrinhos e manga comprimem especialmente bem porque a maioria dos painéis usa cores planas e linhas limpas.

Todo iPhone, iPad e dispositivo Android moderno exibe WebP nativamente. Você não está trocando qualidade de exibição por armazenamento — você está armazenando a mesma informação visual de forma mais eficiente.

## Por que a BiblioFuse integrou a compressão no app

A solução comum — converter arquivos no computador antes de carregá-los no celular — funciona na teoria, mas cria atrito. Você precisa de uma ferramenta de processamento em lote, das configurações corretas, de uma forma de remontar o ZIP e de mais uma etapa de importação. Na prática, a maioria dos leitores pula tudo isso e convive com bibliotecas gigantes.

O recurso **Mesclar e Comprimir** da BiblioFuse remove todo esse atrito. A conversão acontece completamente no dispositivo — nada é enviado a um servidor. Selecione os livros, escolha um nível de qualidade e a BiblioFuse cuida de tudo: extrair cada imagem, recodificá-la como WebP e remontar um CBZ ou EPUB comprimido no lugar.

**Para comprimir um livro:**
1. Toque e segure qualquer capa na sua biblioteca e toque em **Comprimir**.
2. Ajuste o controle de qualidade — a configuração padrão oferece um bom equilíbrio para a maioria dos quadrinhos.
3. Toque em **Comprimir**. O original é substituído ao final.

**Para mesclar uma série:** toque e segure para selecionar vários arquivos CBZ, depois toque em **Mesclar**. A BiblioFuse os combina em ordem de leitura e comprime o resultado em uma única etapa.

A [Ferramenta Web BiblioFuse](/pt/webapp) oferece a mesma compressão e mesclagem em qualquer navegador — sem instalação. É a opção ideal quando você está em um computador Windows ou Linux sem o app iOS ou Mac.

## Quanto espaço você pode realmente recuperar?

Os 87,5% podem parecer abstratos até você ver na sua própria biblioteca:

| Coleção | Tamanho PNG | Após compressão | Espaço liberado |
|---------|-----------|----------------|----------------|
| Série manga de 10 volumes | ~4 GB | ~500 MB | **3,5 GB** |
| Série manga de 50 volumes | ~20 GB | ~2,5 GB | **17,5 GB** |
| 500 HQs ocidentais | ~50 GB | ~6,25 GB | **43,75 GB** |
| Biblioteca EPUB ilustrada (100 livros) | ~5 GB | ~625 MB | **4,4 GB** |

Em um iPhone de 128 GB onde cada gigabyte conta, essa diferença é a entre carregar toda a sua coleção ou deixar metade em casa.

## Quando comprimir e quando manter os originais

A compressão é um processo irreversível: uma vez que o PNG é substituído por WebP dentro do arquivo, os dados originais sem perda desaparecem. Para leitura diária, é uma troca que vale a pena. Mas se você está arquivando scans brutos para preservação ou trabalhando com arte original onde a precisão de pixels importa, mantenha os originais em um disco externo e comprima apenas as cópias do dia a dia.

## Perguntas frequentes

**A compressão afeta a qualidade de leitura?**
Na configuração padrão, a diferença é imperceptível durante a leitura normal em celular ou tablet. Zoom excessivo em traços finos pode revelar um leve suavizamento. Para a maioria dos leitores, o resultado é visualmente idêntico ao original.

**Posso comprimir EPUBs também?**
Sim. A BiblioFuse processa EPUBs da mesma forma — recodificando as imagens incorporadas sem alterar o texto, o CSS ou a estrutura dos capítulos.

**E se eu quiser manter o original?**
Faça uma cópia no app Arquivos antes de comprimir — a BiblioFuse substitui o arquivo no lugar sem backup automático. Você também pode usar a [Ferramenta Web BiblioFuse](/pt/webapp) para baixar uma versão comprimida sem alterar os arquivos originais.

**A compressão funciona offline?**
Sim — todo o processo roda no seu dispositivo. Nenhuma conexão com internet é necessária e nenhum arquivo é enviado a um servidor.
