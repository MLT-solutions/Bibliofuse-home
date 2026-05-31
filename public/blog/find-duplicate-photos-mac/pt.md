# Encontrar Fotos Duplicadas no Mac — Incluindo HEIC, WebP e RAW

Archive Duplicate Scanner encontra fotos duplicadas no Mac usando hashing perceptual — uma técnica que identifica imagens visualmente idênticas mesmo que tenham nomes de ficheiro, formatos ou configurações de compressão diferentes. Suporta HEIC, WebP, JPEG, PNG, TIFF, RAW e dezenas de outros formatos. A aplicação está disponível para Mac e Windows e move os duplicados para o Lixo com segurança, em vez de os eliminar permanentemente.

## O Problema das Bibliotecas de Fotos Que Crescem Sem Limites

A sua biblioteca de fotos no Mac parecia gerível há cinco anos. Agora tem 40 000 ficheiros espalhados por uma pasta de Transferências, um disco de backup e três exportações do iCloud. Tem a mesma paisagem guardada como `IMG_4521.HEIC`, `IMG_4521-edited.JPG` e `landscape-final.webp`. Tem séries RAW em que 11 fotogramas quase idênticos sobreviveram à seleção. E cada migração de biblioteca — do iPhoto para o Apple Fotos, para um novo Mac — deixou para trás mais uma camada de duplicados.

As ferramentas integradas não conseguem ajudar. O Apple Fotos tem um localizador básico de duplicados para fotos já dentro da sua biblioteca, mas falha nos ficheiros espalhados pelo Finder. O Spotlight não compara o conteúdo das imagens. Os localizadores genéricos de ficheiros duplicados comparam hashes byte a byte e falham no momento em que dois ficheiros têm compressão JPEG diferente ou um foi exportado novamente.

## Por Que Razão o Hashing Perceptual Encontra Fotos Duplicadas em Qualquer Formato?

O hashing perceptual analisa o que uma imagem *parece*, não o que os seus bytes dizem. Archive Duplicate Scanner calcula uma impressão digital visual compacta para cada foto. Duas imagens que parecem idênticas ao olho humano produzem a mesma impressão digital (ou muito semelhante) — mesmo que uma seja HEIC e a outra JPEG, mesmo que uma tenha sido exportada novamente a 85% de qualidade, e mesmo que alguém tenha mudado o nome do ficheiro.

Esta é a diferença fundamental em relação a um deduplicador genérico. Uma ferramenta genérica compara hashes SHA-256 — idênticos byte a byte apenas. O hashing perceptual identifica imagens que são visualmente iguais mas tecnicamente ficheiros diferentes.

## Como Encontrar Fotos Duplicadas no Mac Passo a Passo

1. **Descarregue e abra o Archive Duplicate Scanner** a partir da Mac App Store ou do site do programador.
2. **Adicione as suas pastas de fotos** — arraste a pasta de exportação da sua biblioteca Fotos, a pasta de Transferências e quaisquer discos externos que pretenda analisar. Pode adicionar várias pastas numa só análise.
3. **Execute a análise** — a aplicação usa hashing perceptual para criar uma impressão digital de cada imagem suportada. Uma biblioteca de 10 000 fotos normalmente termina em menos de dois minutos num Mac com chip M.
4. **Reveja os grupos** — os duplicados aparecem em grupos. Cada grupo mostra o nome do ficheiro, formato, tamanho, dimensões e uma miniatura visual para que possa confirmar a correspondência.
5. **Escolha a sua estratégia de eliminação** — o Archive Duplicate Scanner oferece estratégias de seleção automática: manter o ficheiro maior (maior qualidade), manter o mais antigo (original) ou manter o que está numa pasta preferida. Também pode selecionar manualmente.
6. **Mover para o Lixo** — a aplicação nunca elimina ficheiros permanentemente. Os duplicados selecionados são movidos para o Lixo do Mac para que possa recuperar qualquer coisa removida por engano.

## Que Formatos de Fotografia Suporta?

Archive Duplicate Scanner suporta todos os formatos que um fotógrafo Mac encontra:

- **HEIC / HEIF** — o formato padrão do iPhone, incluindo ficheiros HDR e modo Retrato
- **JPEG / JPG** — o formato universal, incluindo exportações e versões editadas
- **WebP** — cada vez mais comum em transferências de redes sociais e capturas de ecrã da web
- **PNG** — capturas de ecrã e gráficos sem perdas
- **TIFF** — digitalizações de alta qualidade e exportações com camadas
- **Formatos RAW** — Canon CR2/CR3, Nikon NEF, Sony ARW, Fujifilm RAF, Adobe DNG e mais
- **CBZ / CBR** — arquivos de banda desenhada também são suportados ao lado das fotos

A funcionalidade de correspondência difusa de nomes de ficheiro encontra grupos como `ferias-2023.jpg`, `ferias-2023(1).jpg` e `ferias-2023-copia.jpg` em segundos, mesmo antes de executar a comparação de hash visual.

## Três Casos de Uso Práticos

**1. Limpeza após migração**
Após cada migração de Mac, o Assistente de Migração da Apple copia ficheiros mas não os deduplica. Se já mudou de Mac mais de uma vez, provavelmente tem duas ou três cópias das suas fotos mais antigas. Execute o Archive Duplicate Scanner na sua pasta pessoal para as encontrar todas.

**2. Pares RAW + JPEG**
Muitas câmaras — e o modo ProRAW do iPhone — guardam simultaneamente um RAW e um JPEG. Após editar no Lightroom ou Capture One, muitas vezes já não precisa do JPEG original. O Archive Duplicate Scanner agrupa ficheiros RAW com os seus equivalentes JPEG para que possa limpar os extras sem ordenar manualmente por data.

**3. Acumulação de transferências das redes sociais**
Anos a guardar capturas de ecrã do Instagram e fotos transferidas resultam em dezenas de cópias da mesma imagem em resoluções diferentes. O hashing perceptual apanha-as todas, mesmo quando os nomes dos ficheiros são sequências diferentes de dígitos aleatórios.

## Perguntas frequentes

### O Archive Duplicate Scanner elimina fotos permanentemente?

Não. A aplicação move os ficheiros para o Lixo do Mac. Nada é eliminado permanentemente até esvaziar o Lixo. Isto dá-lhe uma rede de segurança completa para recuperar qualquer coisa removida por engano.

### Consegue encontrar duplicados em formatos diferentes, como HEIC e JPEG?

Sim. O hashing perceptual compara o conteúdo visual, não os bytes do ficheiro. Uma foto guardada como HEIC e exportada novamente como JPEG será detetada como duplicado, mesmo que os formatos e o conteúdo em bytes sejam completamente diferentes.

### Quanto tempo demora uma análise numa biblioteca grande?

Num Mac Apple com chip M, uma biblioteca de 10 000 fotos normalmente termina em menos de dois minutos. Bibliotecas com mais de 50 000 fotos demoram entre 5 a 10 minutos, dependendo da velocidade do disco e do formato dos ficheiros. Os ficheiros HEIC com metadados HDR demoram ligeiramente mais a descodificar.

### Encontra fotos RAW em série quase duplicadas?

Sim, com o limiar de semelhança definido para um nível de sensibilidade mais elevado. As fotos em série da mesma cena parecem quase idênticas e produzem hashes perceptuais muito semelhantes. Pode ajustar a sensibilidade para que o programa as agrupe, mantendo depois apenas o fotograma mais nítido.

### Funciona com discos externos e armazenamento em rede?

Sim. Pode adicionar qualquer pasta acessível no Finder — discos internos, discos externos USB, cartões SD ou volumes montados em rede. A análise é executada localmente no seu Mac; nenhum ficheiro é enviado para qualquer servidor.

### O Archive Duplicate Scanner está disponível para Windows?

Sim. O Archive Duplicate Scanner está disponível para Mac e Windows. A versão Windows tem o mesmo motor de hashing perceptual e suporta os mesmos formatos de ficheiro.

## Recupere o Seu Espaço de Armazenamento — Sem Riscos

Uma biblioteca de 40 000 fotos com 30% de duplicados desperdiça dezenas de gigabytes de armazenamento. O Archive Duplicate Scanner dá-lhe as ferramentas para a limpar com segurança — hashing perceptual que deteta duplicados visuais entre formatos, estratégias de seleção automática que eliminam as suposições, e eliminação apenas para o Lixo que o mantém protegido.

[Descarregue o Archive Duplicate Scanner](/pt/) e inicie a sua primeira análise hoje. Se também quiser comprimir ou converter em lote as suas coleções de fotos, a [Ferramenta Web BiblioFuse](/pt/webapp/) suporta ficheiros EPUB, CBZ e PDF inteiramente no seu browser.
