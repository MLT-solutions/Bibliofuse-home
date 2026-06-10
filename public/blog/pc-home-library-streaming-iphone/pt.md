# Transmita sua biblioteca de quadrinhos do PC Windows para o iPhone — Wi-Fi em casa e 5G fora

Sua coleção de quadrinhos vive em um PC com Windows. Centenas de gigabytes de arquivos CBZ, EPUB e PDF organizados exatamente do seu jeito. Seu iPhone tem 64 GB de armazenamento, a maior parte já ocupada. A solução óbvia — copiar arquivos — significa gerenciar duas cópias de tudo, ficar sem espaço constantemente e transferir arquivos sempre que adiciona algo novo.

[BiblioFuse](https://bibliofuse.com/pt/) resolve isso de forma diferente. O aplicativo BiblioFuse PC Reader para Windows inclui um servidor de streaming integrado. Seu iPhone se conecta ao PC e transmite páginas sob demanda — nada é copiado, nada é enviado e o armazenamento do iPhone permanece livre. O mesmo recurso que os usuários de Mac já têm agora está disponível nativamente no Windows, para download na Microsoft Store.

## Como funciona o streaming da biblioteca do PC

O BiblioFuse PC Reader executa um servidor HTTP local na sua máquina Windows. Quando seu iPhone e PC estão na mesma rede Wi-Fi, o aplicativo iOS descobre o PC automaticamente usando Bonjour (o mesmo protocolo de rede de configuração zero que alimenta o AirPrint e o AirDrop). Sua biblioteca aparece no iPhone sem precisar inserir um endereço IP nem configurar o roteador.

Quando você abre um volume, o BiblioFuse busca as primeiras páginas imediatamente e pré-carrega as seguintes enquanto você lê. Arquivos CBZ e CBR são transmitidos página a página; arquivos EPUB e PDF usam solicitações HTTP Range para que arquivos grandes abram rapidamente sem baixar tudo. A experiência de leitura — modo direita para esquerda, rolagem vertical para webtoons, página dupla no modo paisagem — é idêntica à de um arquivo armazenado localmente. A única diferença é de onde os dados vêm.

O servidor continua funcionando mesmo após fechar a janela do aplicativo. Ele vai para a bandeja do sistema em vez de fechar. Isso significa que sua biblioteca permanece acessível pelo iPhone mesmo quando você está usando o PC para outra coisa. Para restaurar a janela, clique duas vezes no ícone da bandeja. Para parar completamente o servidor, clique com o botão direito no ícone da bandeja e escolha Sair.

## Parte 1: Streaming na sua rede Wi-Fi doméstica

Esta é a configuração mais simples. Seu PC e iPhone estão na mesma rede, e o BiblioFuse cuida da descoberta automaticamente.

### No seu PC

1. Baixe e instale o **BiblioFuse PC Reader** na Microsoft Store.
2. Abra o aplicativo e vá para **Configurações → Biblioteca Doméstica**.
3. Clique em **Adicionar Pasta** e selecione a pasta (ou pastas) onde seus quadrinhos e ebooks estão armazenados. Você pode adicionar várias pastas — uma para mangá, uma para graphic novels, uma para PDFs.
4. Ative **Compartilhamento de Biblioteca**. O servidor inicia imediatamente na porta 7341 e começa a escanear sua biblioteca em segundo plano.
5. Opcionalmente, defina uma **senha** em Configurações → Segurança para proteger o acesso. Se você pular isso, qualquer pessoa na sua rede local pode se conectar — adequado para uso doméstico, recomendado bloquear em Wi-Fi público ou compartilhado.
6. Você pode fechar a janela. O servidor continua na bandeja do sistema.

### No seu iPhone

1. Abra o **[BiblioFuse](https://bibliofuse.com/pt/)** no iPhone.
2. Toque na aba **Biblioteca**.
3. Toque no seletor de fonte no topo — se o seu PC estiver funcionando e o compartilhamento ativado, **Biblioteca Doméstica do PC** aparece em alguns segundos.
4. Toque nela. A estrutura de pastas do seu PC aparece imediatamente.

É isso. Sua biblioteca completa agora pode ser navegada e lida no iPhone, sem nenhum arquivo transferido para o dispositivo. Quando você adiciona novos volumes ao PC, eles aparecem na visualização do iPhone na próxima atualização da biblioteca — sem etapa de ressincronização.

### Formatos suportados

O BiblioFuse PC Reader transmite qualquer formato que consiga ler localmente: **CBZ, CBR, EPUB, PDF e TXT**. Mangá em CBZ, graphic novels em CBR, ebooks em EPUB, livros digitalizados em PDF — todos suportados pela mesma conexão de streaming.

### Dicas de desempenho

**Use Wi-Fi de 5 GHz.** Se seu roteador transmite nas bandas 2,4 GHz e 5 GHz, certifique-se de que seu PC e iPhone estejam conectados à de 5 GHz. A maior largura de banda faz diferença notável com arquivos CBZ grandes em alta resolução.

**Biblioteca em SSD é mais rápida.** Se sua coleção de quadrinhos está em um HD mecânico, o carregamento da primeira página de cada novo volume terá um pequeno atraso. Mover a biblioteca para um SSD (interno ou externo) elimina isso.

**Se o iPhone não encontrar o PC:** O aplicativo do PC mostra um endereço de rede em Configurações → Biblioteca Doméstica quando o compartilhamento está ativo. Verifique se o Firewall do Windows não está bloqueando a porta 7341. Você também pode inserir o endereço IP local do PC manualmente no aplicativo iOS em Biblioteca → Adicionar Servidor → Manual.

## Parte 2: Streaming fora de casa via 5G

O streaming por Wi-Fi doméstico só funciona quando os dois dispositivos estão na mesma rede. Para acessar sua biblioteca de um café, hotel ou qualquer lugar via 5G, você precisa conectar as duas redes. A solução é o [Tailscale](https://tailscale.com) — a mesma configuração descrita no [guia BiblioFuse com Tailscale](/pt/blog/tailscale-remote-library-access/).

O Tailscale cria uma rede mesh privada e criptografada entre seus dispositivos. Uma vez configurado, seu iPhone pode acessar o servidor de streaming do seu PC exatamente como se ambos estivessem na mesma rede local — por qualquer conexão com a internet, sem encaminhamento de porta e sem IP estático.

### Configurando o Tailscale para streaming remoto

**No seu PC Windows:**

1. Baixe o Tailscale em [tailscale.com](https://tailscale.com) ou na Microsoft Store.
2. Faça login com Google, GitHub, Microsoft ou uma conta Tailscale gratuita.
3. O Tailscale fica na bandeja do sistema ao lado do BiblioFuse. Anote o endereço IP Tailscale do seu PC (começa com `100.`).
4. Certifique-se de que o BiblioFuse PC Reader está rodando com Compartilhamento de Biblioteca ativado.

**No seu iPhone:**

1. Instale o Tailscale na App Store.
2. Faça login com a mesma conta Tailscale.
3. Ative o botão VPN do Tailscale.
4. Abra o BiblioFuse no iPhone. Em Biblioteca → Adicionar Servidor, insira o endereço IP Tailscale do seu PC e a porta `7341`.
5. Toque em Conectar.

O BiblioFuse prefere automaticamente o IP do Tailscale quando disponível, então a mesma conexão salva funciona tanto em casa (via LAN) quanto fora (via Tailscale). Não é necessário ter duas entradas de conexão separadas.

### O que esperar em dados móveis

O Tailscale estabelece conexões ponto a ponto quando possível, evitando servidores de retransmissão para melhor desempenho. Em uma conexão 5G típica, o streaming de páginas de quadrinhos funciona bem. O BiblioFuse envia apenas a página atual e pré-carrega as próximas — não transmite o arquivo CBZ inteiro de uma vez, então um arquivo de 200 MB não significa 200 MB de uso de dados. Espere cerca de **1 a 3 MB por página**, dependendo da resolução da imagem e das configurações de compressão do servidor.

Para ler com um plano de dados limitado, use o [BiblioFuse](https://bibliofuse.com/pt/) para baixar volumes individuais via Wi-Fi antes de sair de casa. Na visualização de Biblioteca do PC no iPhone, toque no ícone de download ao lado de qualquer volume para armazená-lo localmente. Esse volume fica disponível offline, sem Tailscale ou conexão de dados.

## PC vs Mac: o que é diferente?

Se você já usou o aplicativo companion do Mac, a experiência no PC é quase idêntica do lado do iOS. Algumas diferenças específicas do Windows:

- **Porta:** O servidor do PC usa a porta **7341** (o aplicativo Mac usa 8686 por padrão).
- **Descoberta:** Ambos usam Bonjour/mDNS com o tipo de serviço `_bibliofuse._tcp`, então o iOS os descobre de forma idêntica.
- **Bandeja do sistema:** O aplicativo do PC permanece na bandeja quando a janela é fechada; o servidor nunca para até você escolher Sair.
- **Arquivo de configurações:** As configurações do PC são armazenadas em `%APPDATA%\BiblioFuse\settings.json` caso precise inspecioná-las ou redefini-las manualmente.
- **Um servidor ativo por vez:** Na versão atual, o BiblioFuse iOS conecta-se a um servidor Mac ou PC — não aos dois simultaneamente. A máquina que estiver rodando e ativa é a que o iOS descobre primeiro.

Para detalhes específicos do streaming no Mac, veja [Transmita sua biblioteca de quadrinhos do Mac para iPhone via Wi-Fi](/pt/blog/mac-home-library-streaming-iphone/).

## Perguntas frequentes

**O BiblioFuse tem um aplicativo para Windows?**
Sim. O BiblioFuse PC Reader é um aplicativo Windows nativo disponível na Microsoft Store. Ele lê localmente arquivos CBZ, CBR, EPUB, PDF e TXT e transmite sua biblioteca completa para o aplicativo iOS pela sua rede.

**Como transmitir quadrinhos do meu PC Windows para o iPhone?**
Instale o BiblioFuse PC Reader no Windows e ative o Compartilhamento de Biblioteca nas configurações. Instale o BiblioFuse no iPhone. Na mesma rede Wi-Fi, abra o BiblioFuse no iPhone e toque em Biblioteca — sua biblioteca do PC aparece automaticamente via descoberta Bonjour. Nenhum endereço IP ou configuração de roteador é necessário.

**Posso acessar minha biblioteca do PC via 5G quando estou longe de casa?**
Sim, usando o Tailscale. Instale o Tailscale no seu PC Windows e iPhone, faça login com a mesma conta e ative em ambos os dispositivos. O BiblioFuse detecta a conexão Tailscale automaticamente e a usa para acessar seu PC de qualquer lugar — Wi-Fi de hotel, 5G, qualquer conexão à internet.

**O streaming do PC usa armazenamento do iPhone?**
Não. As páginas são buscadas do PC sob demanda; nada é armazenado no iPhone além do próprio aplicativo e dos dados de progresso de leitura. Você pode navegar e ler uma biblioteca de 500 GB sem usar armazenamento do iPhone para os arquivos.

**O PC precisa ficar acordado para o streaming funcionar?**
Sim. O servidor de streaming roda no PC; se o PC entrar em suspensão ou o servidor for parado, a conexão iOS cai. Para evitar suspensão durante o streaming, vá em Configurações do Windows → Energia e suspensão e defina a suspensão como Nunca, ou use uma ferramenta como PowerToys para manter a máquina ativa.

**Qual porta o servidor de streaming do PC usa?**
Porta 7341. Se você tiver um firewall que bloqueie tráfego nessa porta, precisará adicionar uma exceção para o BiblioFuse PC Reader.

## Primeiros passos

O [BiblioFuse PC Reader](https://bibliofuse.com/pt/) está disponível agora na Microsoft Store. O BiblioFuse para iPhone está na App Store. Instale os dois, aponte o aplicativo do PC para sua pasta de biblioteca e toda sua coleção estará no iPhone na próxima vez que abrir o aplicativo — sem cabos, sem nuvem, sem cópias.
