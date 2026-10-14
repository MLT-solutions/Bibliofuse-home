# App de leitura para Kavita no iPhone, iPad e Android: sincronização de progresso, marcadores e anotações

**Resposta curta:** o [BiblioFuse Reader](https://bibliofuse.com/pt/comicreader/) liga-se a um servidor Kavita através da própria API do Kavita, e não apenas do feed OPDS. Isso permite sincronizar o progresso de leitura nos dois sentidos, sincronizar marcadores e sincronizar destaques e notas de EPUB — incluindo adicioná-los, editá-los e apagá-los — com as mesmas anotações que vê no leitor web do Kavita. A configuração faz-se com uma leitura de código QR.

Este guia explica o que sincroniza, o que não sincroniza, que formatos de ficheiro são suportados e como ligar em menos de um minuto.

## Porque é que o progresso do Kavita muitas vezes não sincroniza nas apps de leitura

A maioria dos leitores de terceiros comunica com o Kavita por OPDS. O OPDS é um protocolo de catálogo: é bom a listar séries e a entregar ficheiros, mas nunca foi concebido para devolver ao servidor a sua posição de leitura, os marcadores ou as notas. A própria documentação do Kavita indica que a forma mais completa de usar um servidor Kavita é através da sua API.

Por isso, se alguma vez terminou um volume no telemóvel e ele continuou marcado como não lido no Kavita, a app estava quase de certeza a usar apenas OPDS.

O BiblioFuse usa diretamente a API do Kavita. As suas séries, volumes, capítulos, especiais, listas de leitura e coleções aparecem como no Kavita, e o que faz no leitor é escrito de volta no servidor.

## O que sincroniza entre o BiblioFuse e o Kavita

| Funcionalidade | O que o BiblioFuse faz num servidor Kavita |
|---|---|
| Progresso de leitura | Sincroniza nos dois sentidos. Abra um livro e ele retoma onde o Kavita indica que parou; continue a ler e o Kavita é atualizado. |
| Posição exata no EPUB | Retoma no ponto dentro do capítulo, e não apenas no capítulo. |
| Marcadores | Marcadores de página para banda desenhada e PDF, e marcadores no texto para EPUB, guardados no Kavita. |
| Destaques | Os destaques de EPUB sincronizam através da API de anotações do Kavita, com as cores de destaque do seu servidor. |
| Notas | As notas de EPUB sincronizam, incluindo notas formatadas escritas no leitor web do Kavita. |
| Gestão de anotações | Adicione, edite e apague destaques e notas a partir do leitor ou da lista de Anotações. As alterações chegam ao servidor. |
| Alterações offline | São guardadas primeiro no dispositivo e enviadas quando o servidor volta a estar acessível. |

Os destaques e as notas que faz no BiblioFuse aparecem no painel de anotações do leitor web do Kavita, e as anotações criadas na web aparecem no BiblioFuse da próxima vez que abrir o livro.

## Formatos de ficheiro suportados num servidor Kavita

Nem todos os formatos suportam todos os tipos de sincronização. É um limite do que o Kavita guarda para cada formato, e não uma definição que possa alterar.

| Formato | Leitura | Progresso | Marcadores | Destaques / notas |
|---|---|---|---|---|
| CBZ / CBR | Em streaming, sem transferência completa | Sincroniza | Marcadores de página | Não suportado |
| EPUB | Em streaming | Sincroniza (pela posição no capítulo) | Sincronizam | Sincronizam (API de anotações do Kavita) |
| PDF | Sim | Sincroniza (por página) | Marcadores de página | Não suportado (as anotações do Kavita são só para EPUB) |

Na prática:

- **Banda desenhada e manga (CBZ, CBR)** abrem página a página. Nada é transferido por completo, a menos que opte por guardar o livro para ler offline.
- **EPUB** tem o conjunto completo: progresso, marcadores, destaques e notas.
- **PDF** mantém a página e os marcadores de página sincronizados. O Kavita não tem armazenamento de anotações para PDF, pelo que os destaques em PDF ficam no seu dispositivo.

## Como adicionar o seu servidor Kavita em menos de um minuto

Precisa do BiblioFuse Pro para ligações a servidores, do endereço do seu servidor Kavita e da sua chave de autenticação do Kavita (no Kavita, abra as definições de utilizador e procure a secção da chave de API ou de clientes de terceiros).

### Opção 1: ler um código QR (a mais rápida)

1. Num computador, abra o [gerador de QR do BiblioFuse para Kavita e Komga](https://bibliofuse.com/pt/tools/qr-generator/).
2. Escolha **Kavita**, introduza o endereço do servidor e cole a chave de autenticação. O código QR é criado no seu navegador; nada é enviado para lado nenhum.
3. No telemóvel ou tablet, abra **BiblioFuse > Definições > OPDS** e toque no **ícone de leitura de QR**.
4. Leia o código. O servidor é adicionado com o endereço e a chave já preenchidos.

Trate o código QR como uma palavra-passe. Contém a sua chave de autenticação, por isso não publique uma captura de ecrã.

### Opção 2: introduzir manualmente

Abra **BiblioFuse > Definições > OPDS > Adicionar servidor**, escolha Kavita e introduza manualmente o endereço (por exemplo `http://192.168.1.20:5000`) e a chave de autenticação.

Depois de adicionar o servidor, abra o painel Localização no topo da Biblioteca e escolha o seu servidor Kavita. O [guia de configuração](https://bibliofuse.com/pt/guide/) completo tem capturas de ecrã de cada passo.

## Gerir destaques e notas

Selecione texto num EPUB do Kavita para o destacar ou adicionar uma nota. Num livro do Kavita, o seletor de cor mostra as cinco cores de destaque do seu servidor, pelo que um destaque fica igual no BiblioFuse e no leitor web do Kavita.

- **Adicionar:** selecione texto e escolha Destacar ou Nota.
- **Editar:** selecione dentro de um destaque existente e escolha Editar anotação, ou edite-o a partir da lista de Anotações. Pode alterar a cor e a nota.
- **Apagar:** remova-o a partir do leitor ou da lista de Anotações. A eliminação é enviada para o Kavita.

A lista de Anotações mostra todos os destaques e notas do livro atual, com pesquisa, e salta diretamente para a passagem quando toca num deles.

## Dispositivos suportados

- **iPhone, iPad e iPhone Duo:** sincronização de progresso, marcadores e anotações, no BiblioFuse 2.1.15.
- **Apple Vision Pro:** bibliotecas Kavita, progresso, marcadores e anotações na app nativa para visionOS, no BiblioFuse 2.1.15.
- **Telemóveis e tablets Android:** sincronização de progresso, marcadores e anotações, no BiblioFuse 2.0.16.
- **Apple TV e Android TV:** leem a partir de um anfitrião BiblioFuse na sua própria rede e não se ligam ao Kavita.

A [matriz de funcionalidades](https://bibliofuse.com/pt/features/) indica o que cada plataforma suporta e desde que versão.

## Não tem servidor Kavita? O BiblioFuse tem o seu próprio anfitrião

O Kavita é um excelente servidor, mas não precisa de um. O BiblioFuse inclui o seu próprio anfitrião gratuito para Mac, PC com Windows, Docker e NAS Synology. Aponte-o para as pastas que já tem e transmita para o BiblioFuse nos seus outros dispositivos pelo Wi-Fi de casa ou remotamente com Tailscale.

A diferença que vale a pena conhecer: num anfitrião BiblioFuse, o progresso de leitura, os marcadores, os destaques e as notas sincronizam para **todos** os formatos suportados — CBZ, CBR, PDF, EPUB e TXT — porque o anfitrião guarda ele próprio as anotações, em vez de depender de uma funcionalidade do servidor para cada formato.

| | Servidor Kavita | Anfitrião BiblioFuse |
|---|---|---|
| Funciona em | Docker, Windows, Linux, macOS | Mac, PC com Windows, Docker, Synology |
| Sincronização de progresso | CBZ, CBR, EPUB, PDF | CBZ, CBR, PDF, EPUB, TXT |
| Sincronização de marcadores | CBZ, CBR, EPUB, PDF | CBZ, CBR, PDF, EPUB, TXT |
| Sincronização de destaques / notas | EPUB | CBZ, CBR, PDF, EPUB, TXT |
| Leitor web | Sim | Sim (anfitrião NAS e Docker) |
| Servidor de biblioteca multiutilizador | Sim | Não — um anfitrião de biblioteca pessoal |

Pode usar os dois. Muitos leitores mantêm o manga no Kavita e adicionam um anfitrião BiblioFuse para uma pasta de PDF ou ficheiros de texto. Veja o [BiblioFuse Reader](https://bibliofuse.com/pt/comicreader/) para as transferências do anfitrião e o assistente de configuração.

## Komga e outros servidores OPDS

O BiblioFuse também se liga nativamente ao Komga, com o progresso de leitura a sincronizar nos dois sentidos e posição exata no EPUB. A sincronização de marcadores e anotações é exclusiva do Kavita, porque o Komga não tem API para isso. Qualquer outro servidor OPDS 1.x funciona como catálogo, com streaming página a página quando o servidor suporta OPDS-PSE.

Se ainda está a decidir como organizar uma coleção antes de a colocar num servidor, o [guia de gestão de bibliotecas de banda desenhada digital](https://bibliofuse.com/pt/blog/digital-comic-library-management-guide/) e a [comparação entre CBZ, CBR e EPUB](https://bibliofuse.com/pt/blog/cbz-vs-cbr-vs-epub-formats-explained/) são bons pontos de partida.

## FAQ

**O BiblioFuse sincroniza o progresso de leitura com o Kavita?**
Sim, nos dois sentidos. O BiblioFuse usa a API do Kavita, por isso um livro retoma onde o Kavita indica que parou e o seu progresso é escrito de volta enquanto lê. Funciona com CBZ, CBR, EPUB e PDF.

**Posso sincronizar destaques e notas com o Kavita no iPhone ou iPad?**
Sim, em livros EPUB. Os destaques e as notas feitos no BiblioFuse são guardados através da API de anotações do Kavita e aparecem no leitor web do Kavita. Pode adicioná-los, editá-los e apagá-los a partir de qualquer um dos lados.

**Porque é que os destaques não são suportados em CBZ, CBR ou PDF no Kavita?**
O Kavita guarda anotações apenas para EPUB. A banda desenhada e os PDF continuam a sincronizar o progresso de leitura e os marcadores de página. Se precisa que os destaques e as notas em PDF ou banda desenhada sincronizem, um anfitrião BiblioFuse suporta-os em todos os formatos.

**Tenho de transferir uma banda desenhada inteira para a ler a partir do Kavita?**
Não. Os CBZ e CBR são transmitidos página a página. Se quiser, pode guardar um livro para ler offline.

**Qual é a forma mais rápida de adicionar um servidor Kavita ao BiblioFuse?**
Crie um código QR com o gerador de QR do BiblioFuse no navegador, depois abra Definições > OPDS na app e toque no ícone de leitura de QR. O endereço do servidor e a chave de autenticação são preenchidos automaticamente.

**O suporte para Kavita é gratuito no BiblioFuse?**
Ler ficheiros locais é gratuito. A ligação a servidores Kavita, Komga e OPDS faz parte do BiblioFuse Pro, disponível como subscrição mensal ou anual ou como compra única vitalícia.

**O BiblioFuse funciona com o Kavita através da internet?**
Sim. Se o seu servidor Kavita estiver acessível fora de casa — através de um proxy inverso, uma VPN ou Tailscale —, introduza esse endereço e o BiblioFuse liga-se da mesma forma.

**Posso usar o Kavita e um anfitrião BiblioFuse ao mesmo tempo?**
Sim. Ambos aparecem no painel Localização e cada um mantém o seu próprio progresso, marcadores e anotações.
