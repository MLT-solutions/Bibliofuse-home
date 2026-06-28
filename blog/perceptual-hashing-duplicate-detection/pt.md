# Como o Hash Perceptual Encontra Quadrinhos Duplicados Mesmo Após Renomeação

Você renomeou um arquivo. Recomprimiu um arquivo. Baixou o mesmo volume de uma fonte diferente. Por qualquer medida normal, agora são arquivos "diferentes" — nomes diferentes, checksums diferentes, tamanhos de arquivo diferentes.

No entanto, o quadrinho dentro é o mesmo. Cada página é a mesma. E se você estiver tentando limpar sua biblioteca digital, esses quase-idênticos duplicatas são exatamente os que escapam dos localizadores de duplicatas padrão.

Esse é o problema que o hash perceptual resolve, e é a técnica no núcleo do [Archive Duplicate Scanner](/en/).

---

## Por que a Comparação de Arquivos Padrão é Insuficiente

A maioria das ferramentas de "localização de arquivos duplicados" calcula um **checksum** para cada arquivo e sinaliza arquivos que compartilham o mesmo checksum. Isso funciona perfeitamente para cópias exatas.

Mas para arquivos de quadrinhos, essa abordagem perde os duplicatas mais comuns do mundo real:

| Cenário | Mesmo checksum? | Realmente duplicado? |
|---------|----------------|---------------------|
| Cópia com nome diferente | Não | Sim |
| Recomprimido com qualidade diferente | Não | Sim |
| Reempacotado com estrutura diferente | Não | Provavelmente sim |
| Baixado de duas fontes diferentes | Não | Frequentemente sim |
| Cópia exata byte a byte | Sim | Sim |

---

## O que o Hash Perceptual Faz em vez disso

Um **hash perceptual** é uma impressão digital curta calculada a partir do *conteúdo visual* de uma imagem — não seus bytes de arquivo. O algoritmo mais usado, **pHash**, funciona aproximadamente assim:

1. Redimensiona a imagem para um tamanho fixo pequeno (ex. 32×32 pixels)
2. Converte para escala de cinza
3. Aplica uma transformada de cosseno discreta (DCT) para extrair componentes de frequência
4. Mantém a porção de baixa frequência
5. Compara cada valor com a mediana, produzindo uma cadeia de bits

Dois hashes com conteúdo visual semelhante terão uma **distância de Hamming** baixa.

---

## Como o Archive Duplicate Scanner Aplica Isso

O [Archive Duplicate Scanner](/en/) aplica hash perceptual no nível do arquivo:

1. **Extração** — abre cada CBZ ou CBR e lê as imagens internas
2. **Hash de cada página** — cada página recebe um hash perceptual
3. **Comparação** — constrói um índice de similaridade e encontra arquivos que compartilham alto percentual de páginas correspondentes
4. **Pontuação** — atribui uma confiança de correspondência

Quando 90% das páginas de dois arquivos correspondem, a probabilidade de falso positivo cai quase a zero.

---

## Casos Práticos

**Caso 1: Fontes diferentes, nomes de arquivo diferentes**
Você baixou `HxH_v12_en.cbz` de um site e `Hunter_X_Hunter_Volume_12.cbz` de outro. Hash perceptual: páginas quase idênticas → sinalizado como duplicado.

**Caso 2: Arquivo recomprimido**
Alguém executou um CBZ por uma ferramenta de compressão, reduzindo cada JPEG para 80% de qualidade. Hash perceptual: visualmente idênticos → detectado.

**Caso 3: Páginas reordenadas ou renomeadas internamente**
Um arquivo tem páginas `001.jpg` enquanto outro tem `page_001.jpg`. Hash perceptual: não olha nomes internos → ainda detectado.

---

## Os Limites do Hash Perceptual

**Edições visuais significativas quebram a correspondência.** Marcas d'água leves ou recortes menores geralmente não afetam a detecção.

**Imagens de resolução muito baixa são não confiáveis.**

**Mangá com arte similar entre volumes.** Falsos positivos ocasionais são possíveis — a interface de revisão permite verificar miniaturas antes de excluir.

---

## Usando o Archive Duplicate Scanner

O [Archive Duplicate Scanner](/en/) é um aplicativo Mac nativo que traz hash perceptual para toda sua biblioteca. Move duplicatas selecionadas para a Lixeira (não exclusão permanente).

Com sua biblioteca limpa, combine-a com o [BiblioFuse](/en/) no iPhone para uma fonte única e curada para leitura.
