# Como extrair imagens de arquivos CBZ online (grátis, sem software)

A ferramenta web do BiblioFuse permite extrair imagens individuais de arquivos CBZ diretamente no seu navegador — sem software para instalar, sem arquivos enviados a um servidor, sem conta necessária. O processo roda completamente em WebAssembly dentro da sua aba, então seus quadrinhos ficam privados.

## Quando você precisa das imagens de um CBZ

Um arquivo CBZ é um arquivo ZIP contendo imagens numeradas sequencialmente — tipicamente páginas JPEG ou PNG de um quadrinho ou mangá digitalizado. Há muitas situações em que você precisa das imagens brutas:

- **Imprimir uma página específica:** sua impressora precisa de um arquivo de imagem, não de um arquivo de quadrinhos
- **Converter para outro formato:** alguns conversores aceitam imagens como entrada
- **Criar fan art ou folhas de referência:** você quer os arquivos originais em resolução total
- **Arquivar digitalizações de qualidade:** extrair imagens permite inspecionar qualidade e metadados
- **Reempacotar:** dividir um CBZ grande em arquivos menores por arco narrativo

## Como a ferramenta web do BiblioFuse funciona

O [BiblioFuse Web](https://bibliofuse.com/pt/webapp/) usa WebAssembly (WASM) para executar a lógica de processamento diretamente na sua aba do navegador. Seus arquivos nunca são enviados a nenhum servidor.

Esta é a mesma abordagem usada para todas as ferramentas web do BiblioFuse: conversão de PDF para CBZ, mesclagem de CBZ, compressão de EPUB e agora extração de imagens.

## Passo a passo: extrair imagens de um arquivo CBZ online

### Passo 1: Abra a ferramenta web do BiblioFuse

Navegue até o [aplicativo web BiblioFuse](https://bibliofuse.com/pt/webapp/) em qualquer navegador moderno. Sem login, sem extensão, sem cadastro.

### Passo 2: Selecione o extrator CBZ

Localize a ferramenta **Extrair imagens de CBZ** e clique para abrir a interface.

### Passo 3: Carregue seu arquivo CBZ

Clique em **Escolher arquivo** ou arraste o CBZ para a zona de soltar. O arquivo é lido diretamente do seu disco sem nenhuma solicitação de rede.

### Passo 4: Escolha as opções de extração

O extrator oferece várias opções:
- **Todas as imagens:** extrai todos os arquivos de imagem do arquivo CBZ
- **Intervalo de páginas:** extrai apenas as páginas que você especificar
- **Filtro de formato:** extrai apenas JPEG ou apenas PNG

### Passo 5: Extraia e baixe

Clique em **Extrair**. O motor WASM descomprime o CBZ e empacota as imagens em um arquivo ZIP. O navegador inicia automaticamente o download.

### Passo 6: Descompacte e use suas imagens

Abra o arquivo ZIP baixado com qualquer gerenciador de arquivos. Você encontrará as imagens extraídas numeradas na ordem de leitura.

## CBZ vs. CBR

Arquivos CBR usam o formato RAR. Se você tem um CBR, primeiro converta-o para CBZ (também disponível no aplicativo web BiblioFuse) e depois extraia as imagens do CBZ resultante.

## Privacidade e segurança

Como o extrator roda completamente no seu navegador, nenhum servidor recebe ou armazena seus arquivos:
- Coleções pessoais nunca saem do seu dispositivo
- Sem conta necessária
- Sem limites de tamanho de arquivo impostos por custos de servidor

## Perguntas frequentes

**A ferramenta é realmente gratuita?**
Sim. Todas as ferramentas web do BiblioFuse são gratuitas sem limites.

**Quais formatos de imagem são suportados?**
JPEG, PNG, WebP, GIF, BMP e TIFF.

**Posso extrair imagens de arquivos CBZ protegidos por senha?**
Primeiro remova a proteção de senha com o SmartDecrypt, depois extraia as imagens.

**Qual o tamanho máximo de arquivo CBZ que posso processar?**
Sem limite imposto — a restrição é a memória disponível do navegador.

**As imagens extraídas estarão na ordem de leitura?**
Sim. O extrator preserva os nomes de arquivo originais que determinam a ordem de leitura.

## Extraia imagens sem risco para sua privacidade

[Abra o aplicativo web BiblioFuse](https://bibliofuse.com/pt/webapp/) e extraia suas imagens CBZ em segundos, de forma completamente privada.
