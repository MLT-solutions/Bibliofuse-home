# Gerencie sua biblioteca BiblioFuse: pastas, transferências e streaming do Mac

O [BiblioFuse](https://bibliofuse.com) é construído em torno de uma regra simples: seus arquivos ficam onde você os coloca. O app nunca move, renomeia nem prende arquivos em um formato proprietário. Entender onde os livros ficam — e como colocá-los lá — faz a diferença entre uma biblioteca que trabalha para você e uma com a qual você está sempre brigando.

## Como adicionar livros: quatro caminhos

### Mac e Android — Adicionar pasta

No Mac e no Android, o BiblioFuse monitora pastas em vez de possuir arquivos. Na barra lateral, toque em **Adicionar pasta** e aponte para qualquer local — sua pasta de Downloads, um disco externo, um NAS. O BiblioFuse indexa o conteúdo e acompanha alterações sem tocar nos arquivos.

### iOS — Copiar para a pasta do BiblioFuse

iPhone e iPad usam um modelo de arquivos em sandbox, então você copia os livros para um local que o app pode ver. Dois locais funcionam:

**iCloud Drive → BiblioFuse** — Abra o app Arquivos e navegue até iCloud Drive → BiblioFuse. Copie ou mova suas pastas de ebooks aqui. Cada pasta que você colocar aparece como uma pasta separada na lista do BiblioFuse. Livros ou arquivos colocados diretamente na raiz do iCloud Drive → BiblioFuse (sem estar dentro de uma subpasta) aparecem em uma pasta chamada **iCloud** no app. Livros armazenados aqui têm rastreamento automático de progresso: sua posição de leitura sincroniza entre iPhone, iPad e Mac. Retome exatamente de onde parou em qualquer dispositivo.

**No meu iPhone → BiblioFuse** — Para armazenamento apenas local, copie as pastas de ebooks aqui. As pastas aparecem da mesma forma na lista, mas o progresso fica apenas naquele dispositivo.

Em ambos os casos, solte pastas — não arquivos individuais. Uma pasta com os volumes de uma série manga se torna uma entrada na lista com todos os volumes dentro.

### Transferência por Wi-Fi

O servidor de importação integrado permite arrastar arquivos de qualquer computador sem cabo ou software de sincronização.

- **iOS**: Vá em **Configurações → Importar por Wi-Fi** e ative. Uma URL local aparece — abra-a em qualquer navegador de desktop e arraste os arquivos. Os arquivos vão para **No meu iPhone → BiblioFuse → import** e aparecem na sua biblioteca automaticamente.
- **Android**: Você escolhe a pasta de destino ao configurar a Transferência Wi-Fi.

### Livros processados pela aba Ferramentas

Quando você usa a [aba Ferramentas](/pt/webapp) para comprimir ou mesclar arquivos, a saída vai para:

- **iOS**: **No meu iPhone → BiblioFuse → export** — arquivos processados aparecem aqui automaticamente.
- **Android**: Você escolhe a pasta de saída ao executar as ferramentas.

A [Ferramenta Web BiblioFuse](/pt/webapp) realiza as mesmas operações em qualquer navegador — útil no Windows ou Linux. Para mais detalhes sobre economia de espaço com compressão, veja nosso [guia sobre tamanho de arquivos de quadrinhos e ebooks](/pt/blog/reduce-comic-ebook-file-size).

### Mac: Enviar para o iCloud com um clique direito

Se você está lendo no Mac e quer ter um livro no iPhone, clique com o botão direito na capa do livro e escolha **Enviar para o iCloud**. O BiblioFuse copia o arquivo diretamente para **iCloud Drive / BiblioFuse** — o mesmo contêiner que seu iPhone está monitorando. Aparece no telefone em minutos, sem nenhuma etapa manual.

Para enviar vários livros de uma vez, ative o modo de seleção (ícone de marca de seleção, canto superior direito), escolha os livros e toque em **Enviar para o iCloud** na barra de ação.

## A grade da biblioteca: opções ao pressionar e segurar

Pressionar e segurar qualquer capa de livro no iOS abre um menu contextual:

- **Abrir** — ir direto para a leitura
- **Compartilhar** — passar o arquivo para outro app
- **Renomear** — mudar o nome exibido (não renomeia o arquivo no disco)
- **Editar metadados** — adicionar tags e uma avaliação de 1 a 5 estrelas
- **Remover** — uma confirmação aparece com duas opções:
  - *Remover da biblioteca* — exclui a entrada, o arquivo permanece intocado no disco
  - *Excluir do armazenamento* — remove tanto a entrada quanto o arquivo físico

Para enviar livros para a aba Ferramentas, ative o modo de seleção (pressione e segure o primeiro livro, depois toque nos outros). Uma barra aparece na parte inferior com um botão **Ferramentas** (ícone de varinha). Toque para colocar os livros selecionados na fila para compressão ou mesclagem.

## Streaming da sua biblioteca Mac para iPhone

Se sua coleção principal está no Mac, não precisa copiar nada. O [BiblioFuse](/pt/) pode transmitir diretamente do Mac para o iPhone — mas use o Tailscale em vez do método Wi-Fi básico, que pode ser instável quando o telefone muda de rede.

O Tailscale cria uma rede privada criptografada entre seus dispositivos. Uma vez configurado, seu iPhone pode acessar seu Mac esteja você em dados móveis, em um Wi-Fi público ou em casa.

### Passo 1: Instale o Tailscale em ambos os dispositivos

1. Mac: baixe em [tailscale.com/download](https://tailscale.com/download) ou na Mac App Store.
2. iPhone: pesquise "Tailscale" na App Store.
3. Entre com a **mesma conta Tailscale** nos dois.

Uma vez conectados, ambos os dispositivos podem se comunicar de forma privada.

### Passo 2: Ative o streaming no Mac

No BiblioFuse para Mac, role a barra lateral esquerda até a seção **Streaming** e ative-a. Dois endpoints aparecem: um para LAN/Wi-Fi e um para **Remoto / Tailscale**. O Tailscale é o caminho confiável.

### Passo 3: Verifique as permissões no iPhone

Duas permissões do iOS são necessárias:

1. **Rede local** — vá em **Configurações → Privacidade e segurança → Rede local** e ative o BiblioFuse.
2. **iCloud** — vá em **Configurações → [Seu nome] → iCloud** e ative o BiblioFuse.

Verificação rápida: abra o BiblioFuse no iPhone, vá em **Configurações → Permissões**. Marcas verdes indicam que está tudo certo; uma marca vermelha leva direto à configuração do sistema que precisa ser ajustada.

### Passo 4: Conectar pelo iPhone

1. Abra a aba **Biblioteca** no BiblioFuse.
2. Na barra lateral (painel esquerdo no iPad, toque no ícone da barra lateral no iPhone), role até o final — a seção **Mac** lista os endpoints de streaming encontrados.
3. Procure a entrada com **(iCloud)** no nome, por exemplo *MacBook Pro do Mateus (iCloud)*.
4. Toque nela. Aguarde 10 a 30 segundos para a conexão segura ser estabelecida.

As pastas da sua biblioteca Mac aparecem agora na barra lateral como armazenamento local. Navegue e leia normalmente.

### O que é transmitido vs. o que é baixado

| Formato | Comportamento |
|---------|--------------|
| CBZ / CBR | Transmitido página a página — sem download, abre instantaneamente |
| EPUB / TXT | Baixado para o dispositivo primeiro, depois abre |

**Nota sobre o progresso de leitura:** o progresso das sessões em streaming é salvo no banco de dados local do Mac, não no iCloud. Não sincroniza com outros dispositivos — fica no Mac.

## Dicas rápidas

- **O iCloud é o caminho de sincronização mais simples**: livros em iCloud Drive → BiblioFuse aparecem em todos os seus dispositivos Apple com rastreamento de progresso.
- **A pasta export é uma área de espera**: após comprimir no iOS, encontre os resultados em No meu iPhone → BiblioFuse → export, depois mova-os para onde quiser guardar a longo prazo.
- **Verifique as permissões primeiro se o streaming não funcionar**: a maioria dos problemas de conexão se deve à Rede local ou ao iCloud estarem desativados.
