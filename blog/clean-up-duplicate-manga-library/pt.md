# Como limpar uma coleção de mangá duplicada de forma inteligente

Você abre sua pasta de mangá e nota algo estranho: o volume 47 de *One Piece* está lá três vezes — um arquivo chamado `one_piece_v47.cbz`, outro `OP_47_HQ.cbz` e um terceiro enterrado em uma subpasta chamada "backup_old". Você conhece o problema. Só não sabe ainda o quão grave é.

Para a maioria dos leitores de mangá, duplicatas se acumulam silenciosamente ao longo de anos de downloads de diferentes fontes, movimentações de arquivos entre drives e backups que nunca foram limpos. O resultado é armazenamento desperdiçado, confusão na leitura e nenhuma maneira fácil de identificar qual versão tem melhor qualidade.

Este guia apresenta um fluxo de trabalho prático para encontrar, revisar e remover mangás duplicados usando o [Archive Duplicate Scanner](/en/) — um utilitário para Mac desenvolvido especificamente para esse problema.

---

## Por que as bibliotecas de mangá ficam tão bagunçadas

As duplicatas de mangá não são aleatórias. Elas seguem padrões previsíveis:

**Múltiplas fontes, nomes de arquivo diferentes.** Você baixou o volume 10 de um grupo há anos e depois o baixou novamente de outro site com melhor qualidade de imagem. Mesmo conteúdo, nomes de arquivo completamente diferentes.

**Arquivos recomprimidos.** Alguém renomeou os arquivos dentro de um CBZ, os recomprimiu com configuração de qualidade diferente e redistribuiu o resultado. As imagens são idênticas pixel a pixel, mas os checksums do arquivo diferem completamente.

**Cópias de backup que sobreviveram.** Você moveu sua biblioteca para um novo drive e manteve a pasta antiga "por precaução". Seis meses depois, esqueceu que ela existe. Agora você tem uma segunda cópia completa de 500 volumes.

Um localizador de arquivos duplicados padrão não detectará a maioria desses casos porque compara checksums de arquivos. Você precisa de uma ferramenta que entenda o que está *dentro* do arquivo.

---

## O que o Archive Duplicate Scanner faz de diferente

O [Archive Duplicate Scanner](/en/) usa **hash perceptual** para comparar as imagens reais dentro dos seus arquivos CBZ e CBR. Em vez de perguntar "esses dois arquivos são idênticos byte a byte?", ele pergunta "esses dois arquivos contêm as mesmas páginas de quadrinhos?"

Isso significa que ele detecta duplicatas que foram:

- Renomeadas (nome diferente, mesmo conteúdo)
- Recomprimidas com nível de qualidade diferente
- Reempacotadas com estrutura interna diferente
- Copiadas para uma pasta ou drive diferente

---

## Passo a passo: Limpando sua biblioteca de mangá

### Passo 1: Escaneie sua pasta de biblioteca

Abra o Archive Duplicate Scanner e adicione sua pasta de mangá. Você pode arrastar e soltar pastas diretamente no aplicativo.

O scanner lê cada arquivo CBZ e CBR, extrai imagens e gera hashes perceptuais para cada página. Tudo acontece completamente no seu Mac sem necessidade de conexão de rede.

### Passo 2: Revise os pares correspondentes

Após a conclusão do scan, o Archive Duplicate Scanner apresenta os pares correspondentes lado a lado com miniaturas, tamanho de arquivo e porcentagem de similaridade.

### Passo 3: Selecione o que remover

Estratégia comum: mantenha o arquivo maior (geralmente maior resolução) ou a versão de uma fonte confiável.

### Passo 4: Mova duplicatas para a Lixeira

O Archive Duplicate Scanner move arquivos para a Lixeira — não exclusão permanente. Você pode restaurar da Lixeira se necessário.

---

## Dicas para manter sua biblioteca limpa

**Estabeleça uma única pasta "autorizada".** Mantenha sua biblioteca curada em um lugar.

**Escaneie após cada sessão de download importante.** Execute o Archive Duplicate Scanner após baixar um lote de novos volumes para detectar sobreposições antes que se multipliquem.

**Use o [BiblioFuse](/en/) para ler a partir da sua pasta curada.** Ao transmitir sua biblioteca Mac para iPhone ou iPad pelo BiblioFuse, você lê da única fonte da verdade.

---

## Perguntas frequentes

**O Archive Duplicate Scanner excluirá meus arquivos automaticamente?**
Não. Ele move arquivos para a Lixeira, não exclusão permanente.

**Quais formatos são suportados?**
CBZ, CBR e arquivos de imagem em arquivo compactado.

**Meus dois arquivos têm checksums completamente diferentes — ele ainda encontrará a correspondência?**
Sim. O Archive Duplicate Scanner usa hash perceptual nas imagens dentro de cada arquivo, não o checksum do arquivo.
