# Komga vs Kavita vs BiblioFuse: as melhores alternativas de leitor CBZ, CBR e EPUB em 2026

Se você está comparando servidores de quadrinhos e livros auto-hospedados, os dois nomes mais citados são [Komga](https://komga.org/) e [Kavita](https://kavitareader.com/) — ambos gratuitos, de código aberto e realmente bons para ler arquivos CBZ, CBR e (no caso do Kavita) EPUB a partir do seu próprio armazenamento. [Calibre-Web](https://github.com/janeczku/calibre-web) e [Ubooquity](https://vaemendis.net/ubooquity/) são outras duas opções veteranas que vale a pena conhecer. O [BiblioFuse](/pt/) adota uma abordagem diferente: em vez de um servidor que você monta sozinho mais um aplicativo cliente de terceiros, ele oferece uma família de aplicativos conectados — celular, tablet, Mac, PC, Apple Vision Pro, Apple TV e Android TV — criada por uma única equipe, com um servidor auto-hospedado gratuito para quem também quiser essa opção.

Nenhuma dessas opções é objetivamente "a melhor" para todo mundo. Este guia compara o que cada uma faz bem, onde ela deixa a desejar e qual se encaixa na sua configuração.

## Por que essa comparação importa agora

As coleções digitais de quadrinhos e livros já superaram os jardins fechados estilo Kindle. Os leitores digitalizam suas próprias coleções físicas, baixam de comunidades de scanlation e tradução de fãs, ou simplesmente preferem possuir os arquivos em vez de alugar acesso a eles. Essa coleção geralmente vive em um NAS, um PC antigo ou uma pasta em um Mac — e a pergunta se torna: o que realmente lê isso, em todos os dispositivos que você tem, sem que você vire administrador de sistemas de meio período?

Essa pergunta ficou mais difícil de responder, não mais fácil. Komga e Kavita amadureceram e se tornaram servidores genuinamente capazes. Enquanto isso, o lado do cliente dessa equação — o aplicativo de fato no seu celular, tablet ou TV — costuma ser um projeto separado, de um desenvolvedor diferente e independente, com seu próprio ritmo de lançamentos, seus próprios bugs, e nenhuma garantia de que continuará mantido no ano que vem.

## O que realmente observar

Antes de comparar produtos, ajuda separar as duas funções que um sistema de quadrinhos/ebooks desempenha:

1. **Hospedagem** — onde seus arquivos ficam e como um servidor os organiza e disponibiliza.
2. **Leitura** — o aplicativo ou página da web que você realmente usa todos os dias, em cada dispositivo.

Algumas ferramentas só fazem bem uma dessas coisas. Tenha isso em mente ao ler as comparações abaixo.

## As alternativas comparadas

| | [Komga](https://komga.org/) | [Kavita](https://kavitareader.com/) | [Calibre-Web](https://github.com/janeczku/calibre-web) | [Ubooquity](https://vaemendis.net/ubooquity/) | [BiblioFuse](/pt/) |
|---|---|---|---|---|---|
| Formatos | CBZ, CBR, PDF | CBZ, CBR, CB7, CBT, ZIP, RAR, 7zip, PDF, EPUB | EPUB (via Calibre) | EPUB, CBZ, CBR, PDF | EPUB, PDF, CBZ, CBR, RAR, ZIP, TXT |
| App móvel oficial própria | Não — apenas de terceiros | Não — apenas de terceiros | Não — apenas navegador | Não — apenas navegador/OPDS | Sim — iPhone, iPad, Mac, Vision Pro, Apple TV, Android, Android TV, Windows |
| Gestão de pastas | Uma pasta por série, rígido | Flexível, assistido por metadados | Importação de biblioteca Calibre | Varredura simples de pastas | Lê suas pastas existentes como estão, sem reorganizar |
| Ferramenta de compressão embutida | Não | Não | Não | Não | Sim — redimensionar, recodificar para WebP/JPG, mesclar |
| Transmitir em vez de armazenar localmente | Somente via clientes OPDS | Somente via clientes OPDS | Não | Somente via clientes OPDS | Sim, nativo (Wi-Fi local, Tailscale, iCloud) |
| Configuração no Synology | Container Manager / Docker | Container Manager / Docker | Docker | Docker ou Java | App nativo do Package Center com seletor de pasta |
| Idiomas da interface | Contribuições da comunidade | 13+ via Weblate comunitário | Contribuições da comunidade | Limitado | 11, próprios |
| Custo | Grátis, código aberto | Grátis, código aberto | Grátis, código aberto | Grátis | Auto-hospedagem gratuita; a compra do app desbloqueia recursos Pro |

## Komga: o melhor para uma biblioteca pura de quadrinhos e mangá

O Komga é especialista em quadrinhos e mangá. Ele não tenta ser um leitor de ebooks — sem suporte a EPUB — e esse foco aparece no seu polimento: uma API REST sólida, suporte a OPDS v2 e integração estreita com Tachiyomi e outros apps de acompanhamento de mangá. Sua extração de metadados é realmente boa se você mantém uma coleção grande e bem curada de mangá.

A contrapartida é a estrutura. O Komga espera uma pasta por série. Se sua biblioteca ainda não segue essa convenção, você vai gastar tempo reorganizando arquivos antes que o Komga fique satisfeito.

**Bom para:** bibliotecas voltadas para mangá, usuários do Tachiyomi, qualquer pessoa confortável com Docker e disposta a reorganizar arquivos conforme a convenção de pastas do Komga.

**Fique atento a:** nenhum suporte a ebooks (EPUB), nenhum app oficial — você vai combiná-lo com um cliente de terceiros como Komic, KMReader ou Panels, cada um mantido de forma independente do Komga.

## Kavita: o melhor "faz tudo" para quadrinhos e ebooks juntos

O Kavita é o servidor mais abrangente desta lista — quadrinhos, mangá e ebooks (EPUB, PDF) em uma única biblioteca, com varredura de pastas mais tolerante que o Komga e extras úteis como metadados do AniList e cores de destaque por capa. É uma escolha genuinamente sólida se você quer um único servidor para tudo e não se importa com Docker.

Seus 13+ idiomas traduzidos pela comunidade soam impressionantes, mas a cobertura depende de tradutores voluntários via Weblate — alguns idiomas estão mais completos que outros, e não há compromisso próprio de manter cada idioma atualizado.

**Bom para:** bibliotecas mistas de quadrinhos e ebooks, quem quer o servidor auto-hospedado mais completo, usuários que não se importam com uma interface parcialmente traduzida pela comunidade.

**Fique atento a:** a mesma história do Komga no lado do cliente — nenhum app oficial próprio, então você vai combiná-lo com um leitor de terceiros como Panels ou Komic.

## Calibre-Web: o melhor se você já usa o Calibre

O Calibre-Web é uma interface web enxuta e limpa para uma biblioteca Calibre já existente. Se você passou anos organizando livros no Calibre e só quer acesso pelo navegador, ele cumpre bem essa função.

Não é feito para quadrinhos como o Komga e o Kavita, e não tem nenhum app dedicado para celular ou TV — é uma experiência de navegador, ponto final.

**Bom para:** usuários existentes do Calibre que querem principalmente acesso remoto/móvel via navegador a uma biblioteca de ebooks.

**Fique atento a:** quadrinhos são, na melhor das hipóteses, um caso de uso secundário; nenhum app nativo em qualquer plataforma.

## Ubooquity: a melhor opção leve e sem frescuras

O Ubooquity existe há muito tempo e se mantém fiel à sua proposta: um servidor pequeno e simples, baseado em Java, com um feed OPDS embutido. Ele roda em quase qualquer coisa, incluindo hardware de NAS antigo ou de baixa potência que poderia sofrer com o Komga ou o Kavita.

Também é o mais básico das quatro alternativas aqui apresentadas — menos recursos, uma interface datada e, como as outras, sem app próprio.

**Bom para:** hardware de baixa potência, qualquer pessoa que queira a menor pegada possível e não precise de recursos modernos.

**Fique atento a:** o menos ativamente desenvolvido do grupo; ainda apenas navegador/OPDS.

## BiblioFuse: o melhor para um ecossistema de um único fornecedor, sem configuração

O BiblioFuse parte de uma premissa diferente: a maioria das pessoas não quer administrar um servidor *e também* procurar separadamente um cliente de terceiros que pode ser abandonado. Por isso, o app e o host são construídos pela mesma equipe, e ambos são projetados para que uma pessoa sem conhecimento técnico consiga configurá-los.

Na prática, isso significa:

- **Organiza por pasta ou tag, não por metadados obrigatórios.** O BiblioFuse não exige extração de metadados para ser útil, e não impõe a regra rígida de uma pasta por série do Komga.
- **Nunca reorganiza seus arquivos.** Ele lê sua biblioteca exatamente como você já a organizou — sem etapa de importação, sem convenção de pastas a seguir.
- **Feito para economizar armazenamento do dispositivo, não só para servir arquivos.** Uma ferramenta embutida de compressão/redimensionamento/mesclagem (EPUB, PDF, CBZ, CBR, RAR, ZIP — redimensionar para uma resolução alvo, recodificar para WebP ou JPG) e a capacidade de transmitir uma biblioteca a partir de um host em vez de baixá-la localmente. Nenhuma das quatro alternativas acima tem uma ferramenta de compressão embutida.
- **Configuração que não exige digitar um endereço IP.** No Synology, o app nativo do Package Center oferece um seletor de pasta em vez de um caminho de contêiner para digitar. No lado do cliente, os apps descobrem automaticamente um host via Wi-Fi local, ou se conectam automaticamente via iCloud + Tailscale em dispositivos Apple — sem precisar digitar manualmente uma URL de servidor ou endpoint OPDS.
- **Um ecossistema, um fornecedor.** iPhone, iPad, Mac, Apple Vision Pro, Apple TV, celular Android, tablet Android, Android TV e PC com Windows rodam apps construídos e mantidos pela mesma equipe — não um servidor auto-hospedado remendado com qualquer cliente de terceiros que ainda esteja sendo mantido.
- **11 idiomas de interface próprios** (inglês, espanhol, francês, holandês, português, russo, chinês, japonês, coreano, indonésio e malaio), não uma cobertura dependente da comunidade.
- **O progresso de leitura te acompanha em qualquer lugar** — celular, tablet, Mac, PC, TV ou headset — porque é um único produto, não apps independentes se sincronizando via OPDS.

Para ser justo sobre onde o BiblioFuse *não* está à frente: Komga e Kavita têm ecossistemas de extração de metadados mais maduros para grandes bibliotecas de mangá bem curadas, e o Kavita lê alguns formatos de arquivo de nicho (7zip, CBT) que o BiblioFuse não suporta. O leitor gratuito do BiblioFuse para Docker/Synology no navegador também é mais básico que seus apps nativos — ainda sem suporte a PDF, sem texto para fala nem peek zoom.

**Bom para:** qualquer pessoa que queira uma configuração funcional em minutos em vez de uma tarde, famílias com uma mistura de dispositivos Apple, Android e Windows, qualquer pessoa que queira que sua estrutura de pastas existente simplesmente funcione, e qualquer pessoa que leia especificamente na Apple TV, Android TV ou Vision Pro.

**Fique atento a:** extração de metadados menos madura que Komga/Kavita para grandes bibliotecas de mangá curadas; o leitor gratuito do navegador no Docker/Synology ainda não lê PDF.

## Qual você deve escolher?

- **Coleção pura de mangá, quer integração com Tachiyomi:** Komga.
- **Quer um único servidor para quadrinhos e ebooks juntos, não se importa com Docker:** Kavita.
- **Já investiu em uma biblioteca Calibre:** Calibre-Web.
- **Hardware antigo ou de baixa potência, quer a opção mais leve:** Ubooquity.
- **Quer que simplesmente funcione em dispositivos Apple, Android e Windows — incluindo Vision Pro, Apple TV ou Android TV — sem virar administrador de sistemas:** [BiblioFuse](/pt/comicreader/).

## Perguntas frequentes

**O Komga tem um app oficial para iPhone?**
Não. O Komga não tem nenhum app móvel próprio. Usuários de iPhone se conectam por meio de um cliente de terceiros como Komic, KMReader ou Panels, cada um construído e mantido de forma independente do projeto Komga.

**O Kavita é gratuito?**
Sim, o Kavita é gratuito e de código aberto. Assim como o Komga, você ainda vai precisar de um app de terceiros separado (ou de um cliente navegador/OPDS) para ler no celular ou na TV, já que o Kavita em si não vem com um.

**Qual é a melhor alternativa gratuita e auto-hospedada ao Komga?**
O Kavita é a alternativa gratuita mais próxima se você também quiser suporte a EPUB/ebook no mesmo servidor. A hospedagem Docker e Synology do BiblioFuse também é gratuita, com a diferença de vir com um app próprio combinando em cada dispositivo, em vez de um cliente de terceiros separado.

**Alguma dessas opções consegue ler diretamente de um compartilhamento SMB ou NAS sem reorganizar arquivos?**
A varredura do Kavita é a mais tolerante entre as opções de código aberto, mas o Komga ainda espera uma pasta por série. O BiblioFuse lê sua estrutura de pastas existente como está em qualquer uma dessas opções, sem etapa de importação ou reorganização, e a configuração no Synology usa um seletor de pasta gráfico em vez de um caminho digitado.

**Preciso de Docker para auto-hospedar alguma dessas opções?**
Komga, Kavita, Calibre-Web e Ubooquity são tipicamente implantados via Docker (o Ubooquity também roda em qualquer máquina com Java). A hospedagem Docker e Package Center do Synology do BiblioFuse cobre o mesmo caso de uso de auto-hospedagem, com o pacote Synology especificamente construído para evitar Docker ou configuração via linha de comando.

**O BiblioFuse funciona na Apple TV ou Android TV?**
Sim — o BiblioFuse tem apps nativos para ambas, transmitindo de um host Mac, PC, Docker ou Synology. Nenhum dos Komga, Kavita, Calibre-Web ou Ubooquity tem um app oficial de TV em qualquer uma das duas plataformas.

## Conclusão

Komga e Kavita são servidores excelentes e maduros — escolha um deles se você se sente confortável rodando Docker e combinando com um cliente móvel separado. Se você prefere ter uma única família de apps que simplesmente funciona em todos os dispositivos que possui, de um iPhone a um Vision Pro a uma Android TV, com sua estrutura de pastas existente permanecendo exatamente como está, [experimente o BiblioFuse](/pt/comicreader/) — é gratuito para auto-hospedar, e os [apps de leitura](/pt/) são gratuitos para usar.
