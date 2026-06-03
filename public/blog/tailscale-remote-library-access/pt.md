# Acesse sua biblioteca de quadrinhos remotamente com BiblioFuse e Tailscale

Você está em uma viagem de trabalho, sentado no quarto de hotel às 22h sem nada para ler. Toda a sua coleção de quadrinhos — 800 volumes organizados exatamente como você gosta — está em um HD externo conectado ao seu Mac em casa. Normalmente você teria que esperar até voltar. Não mais.

A função de streaming de biblioteca doméstica do BiblioFuse permite que seu iPhone se conecte ao seu Mac como se estivessem na mesma rede Wi-Fi, mesmo que você esteja do outro lado do mundo. A ponte que torna isso possível é o Tailscale — uma VPN em malha de configuração zero que funciona silenciosamente em segundo plano e não requer redirecionamento de porta, IP estático nem configuração do roteador.

## Por que "apenas faça upload na nuvem" não é a resposta

A alternativa óbvia é sincronizar sua biblioteca com iCloud, Dropbox ou Google Drive. Funciona para coleções pequenas. Em escala, isso falha:

- Uma biblioteca de 1 TB de quadrinhos leva semanas para fazer upload em uma conexão residencial.
- Armazenamento em nuvem nessa escala custa R$ 50–150/mês indefinidamente.
- Você perde o controle: cada página de cada quadrinho fica nos servidores de outra pessoa.

A abordagem Tailscale não faz upload de nada. Sua biblioteca permanece no Mac. Seu iPhone busca páginas sob demanda através de um túnel criptografado. Você não paga nada pelo armazenamento e seus arquivos nunca saem do seu controle.

## Como funciona o streaming doméstico do BiblioFuse

O BiblioFuse para macOS inclui um servidor HTTP integrado ao qual o app do iPhone pode se conectar. Quando ambos os dispositivos estão na mesma rede Wi-Fi, o iPhone pode navegar pela biblioteca do Mac, transmitir páginas enquanto lê e sincronizar o progresso de leitura — sem copiar nenhum arquivo.

O Tailscale estende essa rede local para onde quer que você esteja, tornando o IP privado do seu Mac acessível de qualquer dispositivo rodando Tailscale sob sua conta, com criptografia de ponta a ponta.

## O que o Tailscale faz

O Tailscale é construído sobre o WireGuard, um protocolo VPN moderno conhecido por ser rápido e criptograficamente robusto. Ele cria uma malha peer-to-peer: cada dispositivo se conecta diretamente a outros dispositivos sob sua conta, sem rotear o tráfego por um servidor central.

A configuração leva cerca de 5 minutos e não requer acesso ao roteador.

## Configuração passo a passo

### No seu Mac

1. Baixe o Tailscale em [tailscale.com](https://tailscale.com) ou na Mac App Store.
2. Entre com Google, GitHub, Microsoft ou crie uma conta gratuita no Tailscale.
3. Anote o endereço IP do Tailscale do seu Mac (ex. `100.x.x.x`).
4. Abra o BiblioFuse no Mac e vá em **Preferências → Servidor de Biblioteca Doméstica**.
5. Ative o servidor. A porta padrão é `8686`.

### No seu iPhone

1. Instale o Tailscale na App Store.
2. Entre na mesma conta do Tailscale que usou no Mac.
3. Ative o switch de VPN do Tailscale.
4. Abra o [BiblioFuse](https://bibliofuse.com/pt/) no iPhone e vá em **Biblioteca → Conectar ao Mac**.
5. Digite o endereço IP do Tailscale do seu Mac e a porta `8686`.
6. Toque em Conectar. Sua biblioteca do Mac aparece imediatamente.

## Desempenho e largura de banda

O Tailscale estabelece conexões diretas peer-to-peer quando possível. Em uma conexão típica de Wi-Fi de hotel ou dados móveis, o streaming de páginas funciona confortavelmente. O BiblioFuse envia apenas a página atual e pré-carrega as próximas.

## Privacidade e segurança

A conexão do Tailscale é criptografada de ponta a ponta com WireGuard. Ninguém mais pode acessar seu servidor BiblioFuse. Seus arquivos nunca passam por servidores de terceiros.

## Perguntas frequentes

**Meu Mac precisa ficar ligado?**
Sim. O BiblioFuse funciona enquanto seu Mac está ativo. Desative o modo de repouso em Ajustes do Sistema → Bateria.

**Funciona com dados móveis?**
Sim. O Tailscale funciona em qualquer conexão à internet. Transmitir quadrinhos consome aproximadamente 1–3 MB por página.

**Posso usar com vários Macs?**
Sim. Adicione cada Mac à sua conta Tailscale e salve cada um como conexão no BiblioFuse.

**O Tailscale custa dinheiro?**
Tem um nível gratuito que suporta até 3 usuários e 100 dispositivos — mais que suficiente para uso pessoal.

## Para começar

Se você ainda não tem o [BiblioFuse](https://bibliofuse.com/pt/), baixe na App Store para iPhone e iPad, e na Mac App Store para macOS. O Tailscale é gratuito em [tailscale.com](https://tailscale.com).

A combinação dos dois faz sua biblioteca doméstica parecer sempre com você — sem fazer upload de um único arquivo para a nuvem.
