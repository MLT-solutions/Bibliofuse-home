# Como Encontrar e Remover Ficheiros de Banda Desenhada CBZ Duplicados no Mac

Archive Duplicate Scanner encontra ficheiros CBZ, CBR e outros arquivos de banda desenhada duplicados no Mac usando hashing percetual, detetando correspondências mesmo após renomeação, recompressão ou reempacotamento. Analise toda a sua biblioteca, reveja os pares correspondentes lado a lado e mova os duplicados para o Lixo em segurança sem arriscar os originais.

## Por Que os Duplicados de Banda Desenhada São Mais Difíceis de Encontrar do que Parece

Uma biblioteca digital de banda desenhada acumula duplicados de formas que enganam as comparações padrão por nome de ficheiro ou tamanho. Faz o download de um CBZ de uma fonte e mais tarde descarrega o que parece ser uma edição diferente — mas contém as mesmas páginas digitalizadas, reempacotadas com um nome diferente. Uma tradução de fãs é relançada com uma codificação de imagem ligeiramente diferente. Um disco de backup de três anos atrás é integrado na biblioteca principal, trazendo os mesmos ficheiros com marcas temporais diferentes.

As ferramentas de duplicados padrão comparam hashes de ficheiros — qualquer alteração, mesmo renomear ou adicionar uma etiqueta de comentário, produz um hash diferente e o duplicado passa despercebido. O hashing percetual funciona de forma diferente: analisa o conteúdo visual das imagens dentro do arquivo e cria uma impressão digital baseada no que se vê, não nos bytes exatos.

Archive Duplicate Scanner usa hashing percetual para encontrar duplicados de banda desenhada que nenhuma outra ferramenta deteta.

## Como Funciona o Hashing Percetual para Banda Desenhada?

Quando Archive Duplicate Scanner analisa um CBZ ou CBR, abre o arquivo, faz a amostragem das imagens internas e calcula um hash percetual para cada uma. Estes hashes capturam a estrutura visual — as formas, os padrões de contraste e o layout — sem depender dos valores exatos dos píxeis.

Dois ficheiros CBZ que contêm as mesmas páginas produzem hashes correspondentes mesmo que:
- Os nomes dos ficheiros sejam completamente diferentes
- Os arquivos tenham sido recomprimidos com configurações de qualidade diferentes
- Um ficheiro tenha etiquetas de metadados que o outro não tem
- A ordem das páginas seja diferente entre edições

Isto faz do Archive Duplicate Scanner a ferramenta certa para o tipo de duplicados que uma biblioteca de banda desenhada acumula ao longo de anos de downloads de múltiplas fontes.

## Como Encontrar Ficheiros CBZ Duplicados no Mac

### Passo 1: Descarregar e Iniciar o Archive Duplicate Scanner

[Archive Duplicate Scanner](/pt/archive/) está disponível na Mac App Store. Instale-o e inicie-o a partir da pasta Aplicações.

### Passo 2: Adicionar a Pasta da Sua Biblioteca de Banda Desenhada

Arraste a pasta das suas bandas desenhadas para a janela do Archive Duplicate Scanner, ou use o botão Adicionar Pasta para navegar. Pode analisar várias localizações simultaneamente — a sua biblioteca principal, um disco externo e uma localização de backup, tudo de uma vez.

### Passo 3: Iniciar a Análise

Clique em Analisar. Archive Duplicate Scanner abre cada CBZ e CBR, faz a amostragem das imagens e calcula os hashes percetuais. Uma biblioteca de 1.000 bandas desenhadas fica normalmente concluída em poucos minutos num Mac moderno.

### Passo 4: Rever os Pares Correspondentes

Após a análise, Archive Duplicate Scanner apresenta os grupos de duplicados detetados. Cada grupo mostra os arquivos correspondentes lado a lado com nomes de ficheiro, tamanhos, datas de modificação e caminhos de pasta. Pode pré-visualizar a imagem de capa ou abrir qualquer um dos arquivos para confirmar.

### Passo 5: Seleção Automática do Ficheiro a Manter

A estratégia de seleção automática do Archive Duplicate Scanner escolhe qual o ficheiro a manter com base nas suas regras configuradas: manter o ficheiro maior (provavelmente de melhor qualidade), manter o ficheiro numa pasta preferida (a sua biblioteca principal) ou manter a cópia modificada mais recentemente. Também pode selecionar manualmente o ficheiro a manter em cada grupo.

### Passo 6: Mover os Duplicados para o Lixo

Clique em Remover Duplicados (ou Mover para o Lixo). Archive Duplicate Scanner nunca elimina ficheiros permanentemente — apenas os move para o Lixo. Reveja-os antes de esvaziar, se necessário.

## Estratégias de Seleção Automática para Grandes Bibliotecas

Quando tem 200 grupos de duplicados para gerir, rever cada um manualmente não é prático. As estratégias de seleção automática do Archive Duplicate Scanner automatizam a decisão:

**Manter o ficheiro maior:** Os arquivos CBZ maiores geralmente contêm imagens de maior qualidade. Esta estratégia mantém automaticamente a melhor versão.

**Manter o ficheiro numa pasta preferida:** Se a sua biblioteca principal está em `~/Comics` mas os duplicados estão num disco de backup, indique ao Archive Duplicate Scanner que prefira sempre a cópia em `~/Comics`. A cópia de backup fica marcada para remoção.

**Manter o modificado mais recentemente:** Útil quando um ficheiro mais recente é uma versão corrigida ou atualizada do mesmo grupo de digitalização.

Após a seleção automática, reveja as seleções marcadas uma vez antes de confirmar. Archive Duplicate Scanner nunca elimina sem a sua confirmação explícita.

## Como Ajuda a Correspondência Aproximada de Nomes de Ficheiro?

Além do hashing percetual, Archive Duplicate Scanner também usa correspondência aproximada de nomes de ficheiro para identificar prováveis duplicados antes mesmo da análise de imagens. Ficheiros como `One-Punch-Man-v01.cbz` e `One_Punch_Man_Vol_1.cbz` são sinalizados como possíveis correspondências.

Esta abordagem de duas camadas — correspondência aproximada de nomes mais confirmação por hash percetual — deteta duplicados que são óbvios para um humano mas invisíveis para ferramentas que dependem de comparações exatas de cadeias de caracteres ou bytes.

## Perguntas Frequentes

**Como encontro ficheiros CBZ duplicados no Mac?**
Use Archive Duplicate Scanner. Adicione a pasta das suas bandas desenhadas, clique em Analisar e a aplicação identifica os ficheiros CBZ e CBR duplicados usando hashing percetual. Deteta correspondências mesmo após renomeação ou recompressão e permite-lhe mover os duplicados para o Lixo em segurança.

**O Archive Duplicate Scanner consegue encontrar duplicados se os nomes dos ficheiros forem diferentes?**
Sim. Archive Duplicate Scanner usa hashing percetual nas imagens dentro dos arquivos CBZ. Se dois arquivos contiverem as mesmas páginas digitalizadas, são sinalizados como duplicados independentemente do nome de ficheiro, tamanho ou metadados.

**O Archive Duplicate Scanner elimina ficheiros permanentemente?**
Não. Archive Duplicate Scanner apenas move os ficheiros para o Lixo. Pode revê-los e restaurá-los antes de esvaziar — é seguro usar em bibliotecas de qualquer dimensão.

**Que formatos de banda desenhada suporta o Archive Duplicate Scanner?**
Archive Duplicate Scanner suporta arquivos de banda desenhada CBZ e CBR. Também analisa ficheiros de fotos (JPEG, PNG, HEIC, WebP, RAW) e arquivos padrão ZIP/RAR.

**Quanto tempo demora a análise de uma grande biblioteca de banda desenhada?**
A velocidade de análise depende do tamanho da biblioteca e do seu Mac. Uma biblioteca de 1.000 ficheiros CBZ fica normalmente concluída em poucos minutos. Os Macs com Apple Silicon analisam significativamente mais rápido do que os Intel em grandes coleções.

**O Archive Duplicate Scanner funciona em múltiplos discos?**
Sim. Adicione qualquer disco montado ou pasta como localização de análise. Archive Duplicate Scanner compara ficheiros em múltiplos discos simultaneamente — ideal para encontrar duplicados entre a sua biblioteca principal e um disco de backup.

## Organize a Sua Biblioteca Numa Tarde

Os duplicados de banda desenhada desperdiçam espaço de armazenamento, sobrecarregam a vista da biblioteca e dificultam a organização ao longo do tempo. Archive Duplicate Scanner trata da parte difícil — detetar arquivos visualmente idênticos independentemente do nome de ficheiro — e oferece-lhe um caminho seguro para a limpeza, apenas através do Lixo. Encontre o **Archive Duplicate Scanner** na Mac App Store para realizar a sua primeira análise hoje. Depois de a biblioteca estar organizada, use o [BiblioFuse](/pt/) para ler e organizar a sua coleção de banda desenhada no iPhone e Mac.

[Archive Duplicate Scanner](/pt/archive/) — disponível na Mac App Store e na Microsoft Store.
