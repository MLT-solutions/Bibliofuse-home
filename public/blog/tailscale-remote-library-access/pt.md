# Acesse sua Biblioteca de Quadrinhos em Casa Remotamente com BiblioFuse e Tailscale

BiblioFuse lê arquivos CBZ, CBR, EPUB, PDF, ZIP, RAR e TXT no iPhone e iPad com iOS 17 ou posterior. O recurso Mac Home Library permite transmitir toda a sua biblioteca de quadrinhos do Mac para o iPhone via rede Wi-Fi local, sem copiar arquivos. Combinado com Tailscale, você pode estender essa mesma conexão de streaming pela internet e acessar sua biblioteca doméstica de qualquer lugar do mundo.

Você sai de casa com 2 TB de mangás no seu Mac. Seu iPhone tem 128 GB de armazenamento — longe de ser suficiente para tudo. Você quer ler essa biblioteca enquanto viaja, sem mover arquivos para a nuvem nem pagar por um serviço de sincronização separado. Este guia mostra como fazer isso funcionar usando [BiblioFuse](/pt/) e o plano gratuito do Tailscale.

## O Que Significa Acesso Remoto à Biblioteca de Quadrinhos com BiblioFuse e Tailscale?

O recurso Mac Home Library do BiblioFuse transforma seu Mac em um servidor de streaming para sua coleção de quadrinhos. Quando seu iPhone e Mac estão na mesma rede Wi-Fi, você navega e abre arquivos do seu Mac no BiblioFuse no iPhone — sem copiar, sem sincronizar, sem usar armazenamento no próprio telefone.

A limitação é "mesma rede". No momento em que você sai de casa, a conexão se interrompe — seu Mac está atrás do seu roteador doméstico e seu iPhone não consegue mais acessá-lo diretamente.

O Tailscale resolve isso criando uma rede mesh criptografada ponto a ponto entre seus dispositivos. Seu iPhone e Mac aparecem na mesma rede virtual independentemente de onde estejam fisicamente. Para o BiblioFuse, isso significa que a conexão Mac Home Library funciona exatamente da mesma forma pela internet que na sua rede Wi-Fi doméstica.

## Por Que Funciona Melhor do Que Armazenamento em Nuvem?

O armazenamento em nuvem é a alternativa óbvia — sincronize tudo no iCloud Drive ou Google Drive e acesse de qualquer lugar. Mas para grandes bibliotecas de quadrinhos, a sincronização em nuvem tem limites reais:

- **Custo de armazenamento.** 2 TB de iCloud custa R$54,90/mês. O plano gratuito do Tailscale cobre 100 dispositivos sem taxa de armazenamento.
- **Tempo de upload.** Fazer upload de 2 TB para qualquer serviço de nuvem leva dias em uma conexão doméstica. Com Tailscale + BiblioFuse, você transmite diretamente do seu Mac — sem necessidade de upload.
- **Privacidade.** Os arquivos nunca saem da sua rede. O Tailscale roteia o tráfego ponto a ponto; os servidores de retransmissão do Tailscale apenas tratam da negociação de conexão, não dos seus arquivos.
- **Experiência de leitura.** O streaming via Mac Home Library do [BiblioFuse](/pt/) é rápido — as páginas carregam ao tocar, assim como no armazenamento local. Arquivos sincronizados na nuvem exigem download completo antes de abrir.

## Passo 1 — Configurar o Mac Home Library no BiblioFuse

O Mac Home Library do BiblioFuse é um recurso que disponibiliza as pastas de quadrinhos do seu Mac para o aplicativo do iPhone via rede local.

1. Instale o **BiblioFuse** tanto no seu iPhone quanto no seu Mac (na App Store em cada plataforma)
2. No seu Mac, abra o BiblioFuse e vá para **Configurações → Mac Home Library**
3. Clique em **Ativar** — o Mac começa a servir sua biblioteca em uma porta local
4. No seu iPhone, abra o BiblioFuse e vá para **Biblioteca → Adicionar Fonte → Mac Home Library**
5. Seu Mac deve aparecer automaticamente na rede local. Toque nele para se conectar.

Verifique se funciona: navegue por uma pasta do seu Mac a partir do iPhone e abra um CBZ. As páginas devem carregar em um ou dois segundos. Uma vez que isso funcione no Wi-Fi local, você está pronto para adicionar o Tailscale.

## Passo 2 — Instalar e Configurar o Tailscale

O Tailscale é uma VPN construída sobre WireGuard. O plano gratuito suporta até 100 dispositivos e cobre tudo que você precisa aqui.

1. Acesse **tailscale.com** e crie uma conta gratuita
2. Instale o **aplicativo Tailscale** no seu Mac (disponível na App Store ou em tailscale.com/download)
3. Instale o **aplicativo Tailscale** no seu iPhone (na App Store)
4. Faça login no Tailscale em ambos os dispositivos usando a mesma conta
5. No aplicativo Tailscale no seu Mac, confirme que ele exibe um endereço IP do Tailscale (normalmente `100.x.x.x`)
6. No seu iPhone, abra o aplicativo Tailscale e confirme que seu Mac aparece na lista de dispositivos com status verde

Ambos os dispositivos estão agora na sua rede privada Tailscale. Eles podem se comunicar independentemente da localização física.

## Passo 3 — Conectar o BiblioFuse ao Seu Mac via Tailscale

Com o Tailscale em execução, o BiblioFuse pode acessar a Mac Home Library do seu Mac usando o endereço IP do Tailscale.

1. No seu Mac, anote o endereço IP do Tailscale (mostrado no aplicativo da barra de menus do Tailscale — algo como `100.64.0.2`)
2. No seu iPhone, abra o BiblioFuse e vá para **Biblioteca → Adicionar Fonte → Mac Home Library**
3. Se o seu Mac não aparecer automaticamente (não aparecerá quando você estiver em uma rede diferente), toque em **Inserir Endereço Manualmente**
4. Digite o endereço IP do Tailscale e a porta que o BiblioFuse usa (padrão: `8080`)
5. Toque em **Conectar**

Sua biblioteca do Mac agora aparece no BiblioFuse no seu iPhone. Abra qualquer pasta, toque em qualquer volume e ele é transmitido via Tailscale exatamente como no Wi-Fi local.

## Passo 4 — Manter Tudo Funcionando Quando Você Sair

Para que o acesso remoto funcione, seu Mac precisa estar:

- **Acordado** — desative o modo de repouso para acesso à rede em **Configurações do Sistema → Bateria → Opções → Impedir que o computador entre em repouso automaticamente quando a tela estiver desligada** (para Mac desktop) ou configure um agendamento
- **Conectado à internet** — seu roteador doméstico permanece conectado enquanto você viaja
- **Executando o Tailscale** — configure o Tailscale para iniciar ao fazer login nas suas preferências

Em um MacBook, a opção "Impedir repouso" requer o adaptador de energia. Se o seu Mac doméstico é um MacBook desconectado da tomada, defina um agendamento específico: acordar às 06:00 e dormir às 23:00, por exemplo.

## Casos de Uso Práticos

**Ler uma série longa durante uma viagem.** Sua coleção completa de One Piece (107 volumes, ~15 GB em CBZ comprimido) está no seu Mac em casa. Em um avião sem Wi-Fi você não terá acesso — mas durante a viagem com qualquer conexão à internet (Wi-Fi do hotel, dados móveis), o [BiblioFuse](/pt/) transmite cada página sob demanda. Você não está baixando 15 GB; está baixando páginas individuais conforme lê.

**Lendo em uma conexão lenta.** O Tailscale usa WireGuard, que é eficiente em dados móveis. Páginas CBZ comprimidas (codificadas em WebP via a aba Ferramentas do BiblioFuse) têm tipicamente 200–500 KB cada. Em velocidades 4G de 10–20 Mbps, cada página carrega em menos de 0,1 segundo. Mesmo em um Wi-Fi de hotel congestionado a 2 Mbps, as páginas carregam em menos de um segundo.

**Gerenciando uma biblioteca familiar.** Adicione o iPhone do seu cônjuge ou um tablet à mesma conta do Tailscale (até 100 dispositivos no plano gratuito). Todos na família podem fazer streaming da mesma biblioteca do Mac sem assinaturas de nuvem separadas.

## Solução de Problemas

**Mac não aparece no BiblioFuse após ativar o Tailscale.** Use o método de entrada manual de IP com o IP do Tailscale do seu Mac. A descoberta automática depende de broadcast mDNS, que não atravessa fronteiras de rede.

**Páginas carregam lentamente em dados móveis.** Comprima seus arquivos CBZ usando a aba Ferramentas do BiblioFuse ou a [Ferramenta Web do BiblioFuse](/pt/webapp/) para reduzir os tamanhos das páginas. Arquivos CBZ codificados em WebP com qualidade 82 são tipicamente 75–88% menores que arquivos baseados em PNG, tornando o streaming remoto muito mais rápido.

**Mac entrou em repouso.** Ative "Impedir que o computador entre em repouso automaticamente quando a tela estiver desligada" nas Configurações do Sistema do Mac, ou use o comando macOS `caffeinate -i &` no Terminal para mantê-lo acordado.

**Conexão Tailscale cai.** O Tailscale se reconecta automaticamente quando as condições de rede mudam. Se a conexão falhar, feche e reabra o BiblioFuse no seu iPhone para tentar reconectar. Os servidores DERP do Tailscale lidam com situações em que o roteamento direto ponto a ponto não é possível.

## Perguntas Frequentes

**Posso acessar minha biblioteca de quadrinhos em casa remotamente sem o Tailscale?**
Sim, mas as alternativas são mais complexas ou menos privadas. O encaminhamento de portas no seu roteador expõe seu Mac diretamente à internet — um risco de segurança. A sincronização na nuvem (iCloud, Google Drive) exige o upload de toda a sua biblioteca primeiro. O Tailscale fornece acesso remoto criptografado e sem configuração sem expor nenhuma porta.

**O Tailscale tem algum custo para este caso de uso?**
O plano gratuito do Tailscale suporta até 100 dispositivos em uma única conta pessoal sem taxas de armazenamento e sem limites de largura de banda. Para uma biblioteca pessoal de quadrinhos compartilhada entre seus próprios dispositivos, o plano gratuito é suficiente indefinidamente.

**Qual é a velocidade de streaming de quadrinhos via conexão de dados móveis?**
Com arquivos CBZ comprimidos (páginas WebP), páginas individuais têm tipicamente 200–500 KB cada. Em uma conexão 4G de 10 Mbps, cada página carrega em menos de meio segundo. Mesmo em Wi-Fi de hotel mais lento a 2 Mbps, a experiência de leitura é fluida. Arquivos baseados em PNG (2–5 MB por página) são visivelmente mais lentos e se beneficiam mais da compressão antes do streaming remoto.

**O BiblioFuse funciona com Tailscale no iPad também?**
Sim. O BiblioFuse suporta iPhone e iPad, e o Tailscale também está disponível no iPad. A configuração é idêntica — instale ambos os aplicativos, faça login no Tailscale e conecte-se à Mac Home Library usando o endereço IP do Tailscale.

**Minha coleção de quadrinhos é privada ao usar o Tailscale?**
Sim. O Tailscale usa criptografia WireGuard para todo o tráfego entre dispositivos. Seus arquivos são transmitidos diretamente entre seu iPhone e seu Mac em um túnel criptografado. Os servidores do Tailscale lidam com a coordenação de conexão, mas nunca veem o conteúdo dos seus arquivos.

**O que acontece se meu Mac reiniciar enquanto estou fora?**
Se o Tailscale estiver configurado para iniciar ao fazer login e a Mac Home Library estiver configurada para executar na inicialização no BiblioFuse para Mac, a conexão é restaurada automaticamente após a reinicialização. Configure ambos os aplicativos para iniciar ao fazer login nas respectivas configurações para garantir a continuidade.
