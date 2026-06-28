# Como Encontrar Quadrinhos Duplicados Quando os Arquivos Têm Nomes Diferentes

Você está organizando sua biblioteca de quadrinhos e executa um localizador de duplicados padrão. Ele diz que não há duplicados. Mas você sabe que algo está errado — você tem os episódios 1-5 em um arquivo e os episódios 1-10 em outro, e os primeiros cinco claramente se sobrepõem.

Este é o problema específico para o qual [Archive Duplicate Scanner](/pt/archive/) foi criado: encontrar arquivos de quadrinhos duplicados comparando o conteúdo real das páginas, não os nomes dos arquivos ou tamanhos.

## Por Que Localizadores de Duplicados Padrão Não Funcionam para Quadrinhos

- **Agrupamento de episódios diferente**: você baixou `manga_ch1-5.cbz` de uma fonte e `manga_ch1-10.cbz` de outra
- **Convenções de nomenclatura diferentes**: `Spider-Man_001.cbz` e `spiderman_issue01.cbz` podem ser o mesmo número
- **Arquivos recodificados**: mesmo quadrinho de duas fontes, qualidade JPEG diferente, hash completamente diferente
- **Formatos diferentes**: mesmo conteúdo como CBZ e CBR

## Como Archive Duplicate Scanner Detecta Isso

[Archive Duplicate Scanner](/pt/archive/) usa hashing perceptual nas imagens reais das páginas dentro de cada arquivo. Ele:

1. Abre ambos os arquivos (CBZ, CBR, ZIP ou RAR)
2. Extrai as primeiras páginas de cada um
3. Gera um hash perceptual para cada página
4. Compara os hashes entre os dois arquivos

Se os hashes coincidirem acima de um limite configurável, os arquivos são marcados como possíveis duplicados — independentemente dos nomes ou tamanhos dos arquivos.

Um limite mais estrito exige uma correspondência visual mais próxima. Mais flexível, captura mais casos limítrofes. O padrão é calibrado para capturar a maioria dos duplicados práticos sem falsos positivos.

Archive Duplicate Scanner é gratuito para varrer e visualizar. Pro permite ações em massa. Sem assinatura.

Baixe [Archive Duplicate Scanner](/pt/archive/) na App Store ou Microsoft Store.
