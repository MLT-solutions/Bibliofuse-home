# CBZ, CBR, RAR, ZIP: qual formato de arquivo de quadrinhos usar?

Você acabou de baixar um lote de quadrinhos e metade está em `.cbz`, alguns em `.cbr`, e um deles é um simples `.rar`. Você abre o seu leitor de quadrinhos e tudo funciona — mas agora você fica se perguntando: faz diferença o formato que a sua coleção usa? Você deveria converter tudo para um único formato? E qual é a diferença de verdade?

Aqui está uma explicação direta de todos os principais formatos de arquivo de quadrinhos, quando usar cada um e por que o [BiblioFuse](https://bibliofuse.com/pt/) lê todos eles sem nenhum problema.

## O que são realmente os formatos de arquivo de quadrinhos

Nenhum desses formatos é um formato especial para quadrinhos. CBZ, CBR, ZIP e RAR são todos contêineres de arquivo de uso geral. O que há dentro é apenas uma pasta de arquivos de imagem, geralmente JPEG ou PNG, e cada vez mais WebP. Um leitor de quadrinhos simplesmente extrai o arquivo na memória e exibe as imagens em ordem.

Isso significa que a escolha do formato diz respeito quase exclusivamente ao **algoritmo de compressão** e à **compatibilidade com o ecossistema**, e não a qualquer recurso projetado especificamente para quadrinhos.

## CBZ — A melhor opção para a maioria das coleções

CBZ é um arquivo ZIP renomeado com a extensão `.cbz`. É só isso. Descompacte um arquivo CBZ e você terá uma pasta de imagens.

**Por que CBZ é o melhor padrão:**

- ZIP é aberto, isento de royalties e compatível nativamente com todos os sistemas operacionais e ferramentas de arquivo
- macOS, Windows e Linux conseguem abrir arquivos ZIP sem nenhum software extra
- O suporte a leitura e escrita é trivialmente fácil de implementar, por isso praticamente todos os leitores de quadrinhos suportam CBZ
- Sem preocupações com patentes ou licenças, ao contrário do RAR
- Fácil de modificar — adicione, remova ou reordene páginas sem recomprimir o arquivo inteiro

**O compromisso na compressão:** ZIP usa compressão Deflate, que é rápida mas não a mais eficiente. Para arquivos de quadrinhos que já contêm imagens JPEG comprimidas, a diferença de tamanho em relação ao RAR costuma ser inferior a 5%. Para arquivos de imagens PNG, o RAR pode economizar de 10 a 20%, mas o próprio PNG geralmente é o maior responsável pelo tamanho do arquivo.

**Conclusão:** Se você está montando ou digitalizando uma coleção do zero, use CBZ.

## CBR — Amplamente compatível, mas tecnicamente inferior

CBR é um arquivo RAR renomeado com a extensão `.cbr`. RAR é um formato proprietário criado por Eugene Roshal — o "RAR" no WinRAR. Ele oferece uma compressão ligeiramente melhor que o ZIP, especialmente para formatos de imagem sem compressão como PNG.

**O problema com CBR:**

- RAR é proprietário. Criar arquivos RAR exige uma cópia licenciada do WinRAR ou do RAR para Unix
- A biblioteca de código aberto UnRAR consegue ler arquivos RAR, mas não criá-los
- O RAR 5 introduziu um novo formato de cabeçalho que alguns leitores mais antigos ainda não conseguem processar
- Remontar ou editar arquivos CBR exige ferramentas adicionais

**Quando você vai encontrar CBR:** A maioria dos arquivos CBR disponíveis data do início e meados dos anos 2000, quando o WinRAR era o compactador dominante no Windows. Novos lançamentos raramente usam CBR porque não há nenhum benefício significativo em relação ao CBZ.

**Você deve converter CBR para CBZ?** Se o espaço de armazenamento for limitado e você tiver muitos arquivos CBR com bastante imagens PNG, a conversão pode economizar espaço. Para a maioria das coleções baseadas em JPEG, a diferença de tamanho é insignificante e a conversão não vale o esforço. O [BiblioFuse](https://bibliofuse.com/pt/) lê CBR nativamente, então você não precisa converter só para poder ler.

## RAR e ZIP — Os formatos base

Arquivos `.rar` e `.zip` simples funcionam de forma idêntica ao CBR e CBZ quando abertos em um leitor de quadrinhos. A única diferença é a extensão do arquivo — leitores de quadrinhos verificam a extensão para decidir como tratar o arquivo, não o formato interno.

Alguns scanners e programas de captura mais antigos salvam arquivos com a extensão de arquivo original em vez de renomeá-los para `.cbz` ou `.cbr`. Pode ser necessário renomeá-los, ou usar um leitor que suporte ZIP/RAR simples. O BiblioFuse no iOS suporta arquivos `.zip` e `.rar` diretamente, sem necessidade de renomear.

## CB7 e CBT — Os formatos minoritários

**CB7** é um arquivo 7-Zip (`.7z`) renomeado para `.cb7`. A compressão LZMA2 do 7-Zip é significativamente melhor que ZIP e RAR para dados comprimíveis como arquivos de texto, mas os quadrinhos são principalmente imagens JPEG já comprimidas, então a economia real de espaço é pequena. O suporte é menos universal.

**CBT** é um arquivo TAR renomeado para `.cbt`. O TAR não comprime nada — apenas agrupa arquivos. CBT aparece ocasionalmente em arquivos provenientes do Linux. É rápido de descompactar, mas gera arquivos maiores.

Nenhum dos dois tem adoção significativa. Fique com CBZ a menos que tenha um motivo específico.

## PDF — Não é um arquivo de quadrinhos, mas é comum

PDF é um formato de documento, não um arquivo de imagens. Quadrinhos salvos como PDF usam imagens incorporadas (ou, em livros digitalizados, páginas rasterizadas), mas o formato adiciona sobrecarga de layout e geralmente não pode ser editado página a página sem ferramentas especializadas.

PDFs são comuns em quadrinhos digitais vendidos por editoras e em volumes de mangá digitalizados. O BiblioFuse lê PDFs, mas a experiência de leitura de PDFs baseados em imagens é geralmente pior do que o CBZ equivalente — navegação mais lenta, sem metadados por página e maior tamanho de arquivo por imagem.

Se você tem quadrinhos em PDF e quer convertê-los para CBZ, a [ferramenta web do BiblioFuse](https://bibliofuse.com/pt/webapp/) funciona completamente no seu navegador, sem necessidade de upload.

## Tabela comparativa de formatos

| Formato | Contêiner | Compressão | Criação livre | Suporte universal | Ideal para |
|---------|-----------|------------|---------------|-------------------|------------|
| CBZ | ZIP | Deflate | ✅ Sim | ✅ Sim | Novas coleções, digitalização |
| CBR | RAR | RAR/RAR5 | ⚠️ Requer WinRAR | ✅ A maioria | Arquivos legados |
| ZIP | ZIP | Deflate | ✅ Sim | ✅ Sim | Leitores com suporte a ZIP simples |
| RAR | RAR | RAR/RAR5 | ⚠️ Requer WinRAR | ✅ A maioria | Arquivos legados |
| CB7 | 7-Zip | LZMA2 | ✅ Sim | ⚠️ Parcial | Experimentos de alta compressão |
| CBT | TAR | Nenhuma | ✅ Sim | ⚠️ Parcial | Arquivos provenientes do Linux |
| PDF | PDF | Variada | ✅ Sim | ✅ Sim | Quadrinhos sem DRM de editoras |

## Como o BiblioFuse lida com todos esses formatos

O [BiblioFuse para iPhone e iPad](https://bibliofuse.com/pt/) lê CBZ, CBR, ZIP, RAR, CB7, CBT, EPUB e PDF nativamente. Você não precisa converter sua coleção antes de importar.

Todo o processamento acontece no dispositivo. Nenhum arquivo é enviado para um servidor. Para grandes bibliotecas com múltiplos formatos, o BiblioFuse organiza os arquivos por série e registra o progresso de leitura por livro usando sincronização com iCloud, independentemente de o formato subjacente ser CBZ ou CBR.

A aba Ferramentas do BiblioFuse permite converter entre formatos diretamente no iPhone. Selecione um arquivo CBR, toque em Converter, escolha CBZ — o aplicativo remonta o arquivo sem sair do app.

## Recomendações práticas

**Começando uma nova coleção do zero:** Use CBZ. É aberto, compatível de forma universal e fácil de trabalhar.

**Coleção existente em CBR:** Não converta a menos que tenha um motivo específico (espaço em disco, uma ferramenta que não suporta CBR). CBR funciona perfeitamente no BiblioFuse e em qualquer leitor moderno.

**Biblioteca com formatos mistos:** Não se preocupe em padronizar só por estética. Um leitor de quadrinhos que suporta múltiplos formatos — como o BiblioFuse — elimina a necessidade de manter uma coleção em formato único.

**Quadrinhos em PDF de editoras:** Mantenha-os como PDF a menos que queira editar ou juntar volumes; nesse caso, convertê-los para CBZ via a ferramenta web do BiblioFuse faz sentido.

O debate sobre o formato importa muito menos do que ter um leitor que os gerencie todos. Uma vez que você tem isso, o contêiner fica invisível.
