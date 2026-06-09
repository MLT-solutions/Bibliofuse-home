# Como sincronizar o progresso de leitura sem uma conta na nuvem

Você está no meio de uma série de mangá no iPhone quando pega o iPad e se vê de volta na primeira página. A sincronização na nuvem resolve isso — mas só se você estiver disposto a entrar em um serviço de sincronização, confiar a um terceiro os metadados da sua biblioteca e aceitar que uma queda de conexão pode deixar seu progresso desatualizado.

E se você não quiser isso? E se você viaja sem conexão estável, não confia em serviços na nuvem com seus dados de leitura, ou simplesmente prefere manter tudo localmente?

O [BiblioFuse](https://bibliofuse.com/pt/) oferece várias formas de manter o progresso de leitura consistente entre dispositivos sem depender de nenhuma conta na nuvem. Veja como cada opção funciona.

## Por que sincronizar o progresso de leitura é mais difícil do que parece

À primeira vista, "sincronizar o progresso de leitura" parece trivial — é só salvar um número. Mas uma biblioteca de quadrinhos tem dezenas ou centenas de volumes, cada um com sua própria contagem de páginas e última página lida. O progresso de leitura é um **estado por livro e por dispositivo** que pode mudar simultaneamente em vários dispositivos. Sem um árbitro central (um servidor na nuvem), dois dispositivos que estão ambos offline podem gerar atualizações conflitantes.

Toda estratégia de sincronização somente local precisa aceitar uma compensação: impor um modelo estrito de principal/réplica, aceitar que o último progresso gravado prevalece, ou sincronizar apenas quando os dispositivos estiverem na mesma rede.

A sincronização com iCloud do BiblioFuse lida com a arbitragem automaticamente. Mas se o iCloud não for uma opção, as abordagens a seguir oferecem controle em diferentes níveis de automação.

## Opção 1: Sincronização de biblioteca por Wi-Fi via Mac (recomendada para uso em casa)

Se você tem um Mac com o recurso Biblioteca em Casa do BiblioFuse ativado, seu iPhone pode se conectar a ele por Wi-Fi. O Mac funciona como fonte de verdade tanto para os arquivos quanto para o progresso.

**Como funciona:**

1. No Mac, abra o BiblioFuse e ative o servidor de biblioteca em casa em Ajustes → Biblioteca em Casa.
2. No iPhone, toque no ícone de rede na aba da biblioteca e selecione seu Mac.
3. Seu iPhone exibe a biblioteca do Mac e lê os livros diretamente do armazenamento do Mac — sem copiar nada para o iPhone.

O progresso é salvo no lado do Mac. Qualquer dispositivo que leia da biblioteca do Mac registra o progresso lá. Quando você abre o iPhone e se conecta ao Mac novamente, você retoma a leitura exatamente de onde a sessão do Mac parou.

**Limitações:** Requer que ambos os dispositivos estejam na mesma rede Wi-Fi. Funciona melhor para uso em casa; não é adequado para leitura durante viagens, a menos que você configure acesso remoto via VPN ou Tailscale.

## Opção 2: Exportação e importação manual do progresso

O BiblioFuse permite exportar seu progresso de leitura como um arquivo JSON e importá-lo em outro dispositivo. Esta é a opção mais portátil e adequada para uso offline — nenhuma rede é necessária.

**Exportar do Dispositivo A:**

1. Vá em Ajustes → Biblioteca → Exportar Progresso.
2. O BiblioFuse salva um arquivo `.json` contendo a última página lida de cada livro na sua biblioteca.
3. Compartilhe este arquivo via AirDrop, Arquivos ou qualquer outro meio — sem internet.

**Importar no Dispositivo B:**

1. Receba o arquivo `.json` e abra-o com o BiblioFuse, ou vá em Ajustes → Biblioteca → Importar Progresso.
2. O BiblioFuse combina o progresso importado com o progresso local existente, mantendo o número de página mais alto de cada livro (para que você nunca retroceda).

Esta abordagem funciona completamente offline. O AirDrop torna a transferência quase instantânea quando os dispositivos estão próximos. O único passo manual é lembrar de exportar antes de trocar de dispositivo — um hábito que se forma em poucos dias.

## Opção 3: Sincronização baseada em arquivos com uma unidade de rede local ou USB

Se você gerencia sua biblioteca pelo app Arquivos, o progresso pode seguir o arquivo do livro. O BiblioFuse armazena o progresso por nome de arquivo, e não por ID na nuvem. Isso significa:

- Se você copiar um arquivo do Dispositivo A para o Dispositivo B com o mesmo nome de arquivo, o BiblioFuse no Dispositivo B não mostrará nenhum progresso (o arquivo é novo para aquele dispositivo).
- Mas se você copiar tanto o arquivo do livro **quanto** uma exportação de progresso (Opção 2 acima) para o Dispositivo B e depois importar o arquivo de progresso, você retomará a leitura da página correta.

Para leitores que mantêm sua biblioteca em um NAS ou em um compartilhamento SMB, essa abordagem funciona bem: os livros ficam na unidade, os dispositivos se conectam quando estão na rede local, e o progresso é registrado em cada dispositivo de forma independente até que você sincronize o arquivo de progresso manualmente.

## Opção 4: iCloud Drive sem uma conta de sincronização na nuvem

Vale a pena esclarecer isso porque frequentemente gera confusão: **iCloud Drive não é o mesmo que a sincronização com iCloud do BiblioFuse**.

A sincronização com iCloud do BiblioFuse usa `NSUbiquitousKeyValueStore` e CloudKit para sincronizar os metadados do progresso de leitura. Isso requer uma conta iCloud ativa.

No entanto, você pode armazenar seus **arquivos de livros** no iCloud Drive (o app Arquivos) sem ativar a sincronização de progresso com iCloud do BiblioFuse. Nessa configuração:

- Os arquivos de livros ficam acessíveis em qualquer dispositivo com o mesmo Apple ID
- O progresso de leitura é registrado localmente por dispositivo e **não** é sincronizado
- Você ainda precisa usar as Opções 1, 2 ou 3 acima para sincronizar o progresso se quiser que ele seja consistente

Se você usa o iCloud Drive puramente como armazenamento de arquivos e não quer sincronização de progresso, esta é uma configuração limpa.

## Opção 5: Aceitar o progresso por dispositivo e usar marcadores

Nem todo leitor precisa de uma sincronização perfeita do progresso. Se você lê principalmente um livro de cada vez e não troca de dispositivo no meio de um volume, o progresso por dispositivo funciona perfeitamente bem.

O BiblioFuse permite criar marcadores em qualquer página. Um marcador é uma posição salva com nome — você pode criar um antes de trocar de dispositivo e acessá-lo imediatamente no outro dispositivo. É um toque para criar e um toque para saltar, o que para trocas de dispositivo ocasionais é mais rápido do que uma sincronização completa.

## Escolhendo a opção certa

| Situação | Melhor opção |
|----------|-------------|
| Leitor em casa com Mac disponível | Biblioteca em Casa por Wi-Fi (Opção 1) |
| Viajando, offline, dois dispositivos iOS | Exportação/importação manual via AirDrop (Opção 2) |
| Biblioteca em NAS ou unidade compartilhada | Sincronização por arquivos + exportação de progresso (Opção 3) |
| Troca de dispositivo ocasional, um livro por vez | Marcadores (Opção 5) |
| Apple ID mas sem nuvem de terceiros | iCloud Drive para arquivos + sincronização manual do progresso |

## O aspecto da privacidade

O [BiblioFuse](https://bibliofuse.com/pt/) armazena o progresso de leitura localmente no seu dispositivo. Quando a sincronização com iCloud está desativada, nenhum dado de leitura sai do seu dispositivo. Para leitores que preferem não ter seus hábitos de leitura armazenados em nenhum serviço externo — seja por motivos de privacidade ou simplesmente por preferência pessoal — o funcionamento somente local é um modo de primeira classe, não uma solução improvisada.

As opções acima não são alternativas para suprir um recurso ausente. São a forma prevista de usar o BiblioFuse quando a sincronização na nuvem não é adequada para a sua situação.

## Primeiros passos

1. [Baixe o BiblioFuse](https://bibliofuse.com/pt/) na App Store.
2. Importe seus arquivos de quadrinhos ou ebooks via app Arquivos, transferência Wi-Fi ou Biblioteca em Casa do Mac.
3. Escolha a estratégia de sincronização que se adapta aos seus hábitos de leitura — ou combine-as. As Opções 2 e 5 funcionam junto com qualquer outra abordagem.

Você não precisa abrir mão da comodidade ao dispensar contas na nuvem. Um pequeno hábito — uma exportação rápida por AirDrop antes de trocar de dispositivo — mantém o estado da sua biblioteca consistente sem confiar seus dados de leitura a ninguém.
