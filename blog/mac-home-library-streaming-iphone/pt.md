# Transmita Sua Biblioteca de Comics do Mac para o iPhone via Wi-Fi (Sem Copiar Nada)

O BiblioFuse Mac Home Library permite transmitir toda a sua coleção de quadrinhos e ebooks do Mac para o iPhone ou iPad por Wi-Fi sem copiar nenhum arquivo para o dispositivo e sem usar armazenamento do iPhone. Funciona com bibliotecas CBZ, CBR, EPUB, PDF e TXT em um Mac junto a um iPhone ou iPad com iOS 17 ou posterior — sem configuração de rede especial além de ambos os dispositivos estarem na mesma rede Wi-Fi.

Seu disco rígido do Mac tem 400 GB de arquivos CBZ e EPUB — décadas de mangá, graphic novels e quadrinhos digitalizados. Seu iPhone tem 64 GB no total, e a maior parte já está ocupada. Você tentou o iCloud, mas é lento e consome armazenamento. Você tentou o Wi-Fi Transfer para importar volumes individuais, mas escolher arquivos um a um não faz sentido quando você tem uma coleção completa.

Mac Home Library no [BiblioFuse](/pt/) resolve esse problema de forma diferente. Em vez de mover arquivos para o seu telefone, ele os transmite. Seu Mac torna-se um servidor local; seu iPhone lê sob demanda. Nada é copiado. Nada é enviado para a nuvem. Você tem sua biblioteca completa de 400 GB no iPhone enquanto estiver na mesma rede Wi-Fi.

## O Que É o Mac Home Library

Mac Home Library é um recurso de streaming local, não de sincronização. A distinção é importante.

**Sincronização** (como o iCloud) copia arquivos para o dispositivo. Para sincronizar 400 GB, você precisa de 400 GB livres no iPhone — o que a maioria das pessoas não tem.

**Streaming** não copia nada. O arquivo permanece no Mac; o iPhone busca as páginas conforme você lê. Quando você toca em um volume na visualização Mac Library do iPhone, o [BiblioFuse](/pt/) solicita as páginas relevantes pela rede local. Armazenamento usado no iPhone: zero (além do próprio aplicativo e dos dados de progresso).

## O Que Você Precisa

- Um iPhone com iOS 17 ou posterior
- Um Mac na mesma rede Wi-Fi do iPhone
- [BiblioFuse](/pt/) instalado em ambos os dispositivos (o app iOS e o companion para Mac)
- Sua biblioteca de quadrinhos armazenada localmente no Mac

## Configurando o Mac Home Library

A configuração leva cerca de dois minutos e não requer nenhuma configuração especial de rede.

**No seu Mac:**

1. Abra o **BiblioFuse** (o app companion para Mac).
2. Vá para **Preferências → Home Library**.
3. Clique em **Ativar Compartilhamento do Home Library**.
4. Se o macOS solicitar permissão para comunicação na rede local, clique em **Permitir**.
5. Você verá uma URL local como `bibliofuse.local:8765` — esse é o endereço que seu iPhone usa.

**No seu iPhone:**

1. Abra o **BiblioFuse** no iPhone.
2. Toque na aba **Biblioteca**.
3. Toque no seletor de fonte no topo — você deverá ver **Mac Home Library** ao lado da sua biblioteca local.
4. Toque em **Mac Home Library**. Se o seu Mac estiver ligado e o compartilhamento ativado, a conexão é estabelecida em segundos e toda a sua biblioteca do Mac aparece.

Não é necessário configurar endereços IP, alterar configurações do roteador ou fazer encaminhamento de porta. O BiblioFuse usa o Bonjour para descobrir o Mac automaticamente na rede local.

## Navegação e Leitura

A visualização Mac Library no iPhone espelha a estrutura de pastas do seu Mac. Se você organiza o mangá por séries, você verá essas mesmas pastas.

Toque em qualquer pasta para navegar pelos volumes. Toque em um volume para abri-lo. O BiblioFuse busca as primeiras páginas imediatamente. O carregamento de páginas é rápido — em uma rede Wi-Fi de 5 GHz típica, as páginas chegam em menos de um segundo, mesmo para arquivos CBZ de alta resolução.

A experiência de leitura é idêntica à leitura de um volume armazenado localmente: modo da direita para a esquerda para mangá, rolagem vertical para webtoons, página dupla no modo paisagem, zoom e panorâmica.

## Como Funciona o Progresso de Leitura

O progresso de leitura das sessões do Mac Home Library é sincronizado via iCloud, assim como o progresso dos volumes armazenados localmente. Se você ler até a página 87 de um volume transmitido do seu Mac, o iPhone registra a página 87 e a envia para o iCloud. Se você abrir o mesmo volume no iPad depois, ele abre na página 87.

## Diferenças em Relação ao Wi-Fi Transfer e ao iCloud Sync

Esses três recursos do [BiblioFuse](/pt/) servem a propósitos diferentes.

**Wi-Fi Transfer** move arquivos do Mac para o iPhone. Use-o para construir sua coleção local no iPhone — volumes que você quer disponíveis offline.

**iCloud Sync** mantém os arquivos sincronizados entre dispositivos via armazenamento em nuvem da Apple. Ideal para bibliotecas de tamanho moderado.

**Mac Home Library** transmite sem transferir. Use-o para sua biblioteca completa em casa com uma boa conexão Wi-Fi. Nada ocupa armazenamento do iPhone; o Mac é a única fonte.

## Dicas para Melhor Desempenho

**Use Wi-Fi de 5 GHz.** Certifique-se de que tanto o Mac quanto o iPhone estão na faixa de 5 GHz para o melhor desempenho com arquivos CBZ de alta resolução.

**Mantenha o Mac ativo.** Se o Mac entrar em suspensão, a conexão de streaming cai. Configure em **Configurações do Sistema → Bateria → Impedir suspensão** quando conectado à energia.

**Biblioteca em SSD é mais rápida.** Se sua biblioteca está em um HD externo, os tempos de acesso são mais lentos do que em um SSD, o que pode causar um pequeno atraso no carregamento da primeira página de cada volume.

## Leitura Offline da Biblioteca do Mac

Se você sabe que ficará sem Wi-Fi, pode baixar volumes individuais da biblioteca do Mac para o iPhone antes de sair.

Na visualização Mac Library do iPhone, toque no **ícone de download** ao lado de qualquer volume. O BiblioFuse o copia para o armazenamento local do iPhone via Wi-Fi Transfer. Depois disso, o volume está disponível offline.

## Primeiros Passos

O [BiblioFuse](/pt/) está disponível na App Store para iPhone e iPad. O Mac Home Library faz parte do aplicativo padrão, sem nível premium. Instale-o no seu Mac e iPhone, ative o compartilhamento nas Preferências do Mac, e toda a sua biblioteca estará disponível no iPhone na próxima vez que você estiver na mesma rede.


## Perguntas frequentes

**O que é o Mac Home Library no BiblioFuse?**
O Mac Home Library é um recurso do BiblioFuse que transmite toda a sua biblioteca de quadrinhos e ebooks do Mac diretamente para o iPhone ou iPad via Wi-Fi. Nenhum arquivo é copiado para o dispositivo, portanto, nenhum armazenamento do iPhone é usado. Requer o BiblioFuse instalado no Mac e no iPhone, e ambos na mesma rede Wi-Fi (ou Tailscale para acesso remoto).

**Quanto armazenamento do iPhone o Mac Home Library usa?**
Zero armazenamento para arquivos CBZ e CBR, que são transmitidos página a página sob demanda. Arquivos EPUB e TXT são baixados temporariamente para o dispositivo para leitura. Você pode navegar e ler coleções de centenas de GB sem usar nenhum armazenamento do iPhone.

**Posso acessar o Mac Home Library de fora de casa?**
Sim, com o Tailscale. O Tailscale cria uma rede privada criptografada entre seus dispositivos, permitindo que o iPhone acesse seu Mac de dados móveis ou Wi-Fi público. Sem o Tailscale, a conexão só funciona na mesma rede Wi-Fi local.

**O progresso de leitura é sincronizado ao usar o Mac Home Library?**
Sim. O progresso de leitura das sessões de streaming é salvo no banco de dados local do Mac. Se o iCloud estiver ativado para o BiblioFuse, o progresso é sincronizado com outros dispositivos normalmente.

**O Mac Home Library funciona com todos os formatos de arquivo?**
CBZ e CBR são transmitidos página a página — abrem instantaneamente sem baixar o arquivo completo. Arquivos EPUB e TXT são baixados primeiro para o dispositivo e depois abertos. Todos os formatos suportados pelo BiblioFuse estão disponíveis via Mac Home Library.
