# Como transferir quadrinhos para o iPhone sem iTunes ou cabo

BiblioFuse inclui um recurso de Wi-Fi Transfer integrado que permite arrastar arquivos CBZ, CBR, EPUB, PDF e ZIP de qualquer navegador no Mac ou PC diretamente para a biblioteca do iPhone — sem cabo, sem iTunes e sem envio para a nuvem. As velocidades de transferência chegam a 15–40 MB/s em uma rede Wi-Fi doméstica típica com iOS 17 ou posterior, movendo um volume de mangá de 150 MB em cerca de cinco segundos.

Sua biblioteca de mangá está no Mac. Duzentos arquivos CBZ, organizados por série, cada volume com entre 80 e 200 MB. O iPhone é onde você realmente lê — na cama, no trem, durante o almoço. O problema é justamente levar esses arquivos até lá.

O e-mail tem limite de 25 MB. O AirDrop funciona, mas exige enviar os arquivos um por um e aprovar cada transferência. O iCloud Drive pode sincronizá-los, mas fazer upload de 20 GB de quadrinhos e depois aguardar o download não é prático. O compartilhamento de arquivos pelo iTunes ainda existe, mas requer um cabo e uma paciência que a maioria das pessoas abandonou há anos.

O [BiblioFuse](/pt/) resolve isso com a Transferência Wi-Fi — um servidor web local integrado que permite arrastar uma biblioteca inteira de quadrinhos de qualquer navegador no Mac ou PC direto para o iPhone, sem cabo, sem instalar nada no computador e sem fazer upload para a nuvem. Este guia percorre o processo completo.

## O que a Transferência Wi-Fi realmente faz

A Transferência Wi-Fi executa um pequeno servidor HTTP no iPhone, visível apenas na sua rede local. Ao acessar o endereço fornecido (algo como `http://192.168.1.x:8080`) em qualquer navegador, você vê uma interface de upload com arrastar e soltar. Você arrasta arquivos ou pastas do computador para a janela do navegador, e o [BiblioFuse](/pt/) os recebe diretamente via Wi-Fi.

A palavra-chave é *diretamente*. Os arquivos vão do computador para o iPhone sem passar por nenhum serviço em nuvem. Nada é enviado para servidores de terceiros. Não é necessário estar logado em conta alguma. O único requisito é que os dois dispositivos estejam na mesma rede Wi-Fi.

A velocidade de transferência é determinada pela sua rede local, não pela sua conexão com a internet. Em um roteador doméstico típico, espere entre 15 e 40 MB/s. Um volume de mangá de 150 MB leva cerca de cinco segundos.

## Passo 1 — Instale o BiblioFuse

Se ainda não o fez, instale o [BiblioFuse](/pt/) na App Store. É gratuito e não requer conta nem login.

Após a instalação, o app cria duas pastas no aplicativo Arquivos do iOS:
- **iCloud Drive → BiblioFuse** — armazenamento sincronizado, acessível em todos os seus dispositivos Apple
- **No meu iPhone → BiblioFuse** — armazenamento somente local, mais rápido e sem atraso de sincronização

Os arquivos transferidos via Transferência Wi-Fi chegam por padrão na pasta de armazenamento local.

## Passo 2 — Ative a Transferência Wi-Fi no iPhone

1. Abra o BiblioFuse
2. Toque em **Ajustes** (canto inferior direito da tela da biblioteca)
3. Em **Importação Wi-Fi**, ative a opção
4. Uma URL local aparece: `http://192.168.x.x:8080`

Mantenha o BiblioFuse aberto e a tela ligada durante a transferência — o iOS suspende o servidor se o app for para o plano de fundo.

## Passo 3 — Abra a URL no computador

No Mac ou PC, abra qualquer navegador — Safari, Chrome, Firefox, Edge — e digite a URL exibida no BiblioFuse. Você verá uma página simples com uma zona de upload.

Não é necessário instalar nada. Sem extensão, sem aplicativo, sem conta. A página é servida diretamente pelo iPhone.

## Passo 4 — Arraste seus quadrinhos

Arraste seus arquivos CBZ, CBR, ZIP, RAR ou EPUB do Finder (ou do Explorador do Windows) para a zona de upload no navegador. Você pode arrastar:

- Um único arquivo
- Vários arquivos ao mesmo tempo
- Uma pasta inteira de volumes

Ao arrastar uma pasta, o BiblioFuse recebe todos os arquivos dentro dela, preservando a estrutura de pastas. Se você arrastar uma pasta chamada `Berserk` com 40 volumes, todos chegam organizados sob esse nome na sua biblioteca.

Um indicador de progresso mostra o andamento de cada arquivo. Lotes grandes — 10 GB de quadrinhos — podem rodar sem supervisão. Você não precisa clicar em nada nem aprovar arquivos individualmente.

## Passo 5 — Desative a Transferência Wi-Fi

Quando a transferência terminar, volte ao BiblioFuse e desligue a Transferência Wi-Fi. É uma medida de segurança — o servidor só é acessível na sua rede local, mas desativá-lo ao terminar garante que ninguém mais na rede possa acessá-lo.

Os arquivos transferidos aparecem automaticamente na biblioteca. Toque em qualquer capa para começar a ler.

## Referência de velocidade de transferência

Esses números são aproximados, baseados em uma rede doméstica 802.11ac (Wi-Fi 5) moderna:

| Tamanho do arquivo | Tempo de transferência |
|--------------------|------------------------|
| 50 MB (volume de mangá pequeno) | ~2 segundos |
| 150 MB (volume de mangá típico) | ~5 segundos |
| 500 MB (CBZ grande) | ~15 segundos |
| 10 GB (série completa) | ~5 minutos |

Redes 802.11n mais antigas ou sistemas mesh com congestionamento serão mais lentos. Posicione o iPhone perto do roteador ao transferir um lote grande.

## Outras formas de colocar quadrinhos no iPhone

A Transferência Wi-Fi é o método mais rápido para coleções grandes, mas não é o único.

**Compartilhar pelo app Arquivos** — Se o quadrinho já está no iCloud Drive ou em um pendrive conectado ao Mac, mantenha pressionado no app Arquivos e toque em Compartilhar → BiblioFuse. Ideal para um ou dois arquivos.

**Sincronização pelo iCloud Drive** — Copie os arquivos para `iCloud Drive → BiblioFuse` no Mac. Eles sincronizarão automaticamente para o iPhone. O progresso de leitura também sincroniza dessa forma — útil se você lê em vários dispositivos. Desvantagem: exige fazer upload para o iCloud primeiro, o que pode ser lento para coleções grandes.

**AirDrop** — Funciona para arquivos individuais. Toque no ícone do AirDrop, escolha seu iPhone e o BiblioFuse se oferecerá para abrir o arquivo. Não é prático para séries com muitos volumes.

**Tailscale / acesso remoto** — Se você não estiver na mesma rede que o Mac, pode usar o Tailscale para criar uma rede virtual privada entre seus dispositivos e ainda usar a Transferência Wi-Fi ou a sincronização do iCloud remotamente. É uma configuração avançada, mas permite acessar sua biblioteca de casa de qualquer lugar.

## Solução de problemas

**Não consigo acessar a URL pelo navegador.**
Certifique-se de que ambos os dispositivos estão na mesma rede Wi-Fi. Alguns roteadores isolam os dispositivos entre si (chamado de "isolamento de cliente" ou "isolamento de AP") — verifique as configurações do roteador se os dispositivos não conseguem se enxergar.

**Os arquivos foram transferidos, mas não aparecem na biblioteca.**
Puxe a tela para baixo na biblioteca para atualizar. Verifique a pasta **No meu iPhone → BiblioFuse** no app Arquivos para confirmar que os arquivos chegaram. Arquivos fora da pasta do BiblioFuse não serão indexados.

**A transferência parou no meio do caminho.**
A tela provavelmente bloqueou e o iOS suspendeu o app. Volte ao BiblioFuse, confirme que a Transferência Wi-Fi ainda está ativada e reinicie o upload no navegador. Os arquivos já enviados estão em segurança.

**Arquivos CBR exibem "formato não suportado".**
Alguns arquivos CBR muito antigos usam RAR5, que não é universalmente suportado. Reempacote como CBZ: extraia o RAR, selecione todas as imagens, compacte em ZIP e renomeie `.zip` para `.cbz`. A aba Ferramentas do BiblioFuse também pode ajudar com a conversão de formato diretamente no dispositivo.

## O que fazer a seguir

Com a biblioteca no iPhone, o [BiblioFuse](/pt/) oferece algumas ferramentas para torná-la mais gerenciável. A aba Ferramentas permite compactar arquivos CBZ no próprio dispositivo — útil quando um volume de 200 MB pode ser reduzido para 40 MB sem perda visível de qualidade. O recurso Biblioteca Mac vai ainda mais longe: em vez de transferir arquivos para o iPhone, ele permite transmitir toda a sua biblioteca de quadrinhos do Mac via Wi-Fi em tempo real, sem precisar copiar nada.

Esse é o quadro completo — uma transferência Wi-Fi que leva minutos em vez da hora que uma sincronização pelo iTunes costumava exigir.

## Perguntas frequentes

**Como transfiro quadrinhos para o iPhone sem fio e sem iTunes?**
No BiblioFuse, vá em Configurações → Wi-Fi Import e ative. Uma URL local aparecerá — abra-a em qualquer navegador no Mac ou PC (na mesma rede Wi-Fi) e arraste seus arquivos CBZ, CBR ou EPUB para a janela do navegador. Os arquivos chegam à biblioteca automaticamente.

**Qual é a velocidade do Wi-Fi Transfer no BiblioFuse?**
Em uma rede doméstica 802.11ac (Wi-Fi 5) moderna, espere 15–40 MB/s. Um volume de mangá de 150 MB é transferido em cerca de cinco segundos; uma série de 10 GB leva aproximadamente cinco minutos. A velocidade depende do roteador e da congestionamento da rede.

**Posso transferir pastas de séries completas de uma vez?**
Sim. Ao arrastar uma pasta para a área de drop do navegador, o BiblioFuse recebe todos os arquivos dentro dela e preserva o nome da pasta na biblioteca. Uma pasta com 40 capítulos chega organizada sob esse nome de pasta — sem etapas extras.

**O Wi-Fi Transfer funciona fora da minha rede doméstica?**
O Wi-Fi Transfer padrão requer que ambos os dispositivos estejam na mesma rede local. Para acesso remoto, o Tailscale cria uma rede privada criptografada entre Mac e iPhone para que o Wi-Fi Transfer funcione em qualquer lugar com conexão à internet.

**O que acontece se a transferência parar antes de terminar?**
Se a tela travar e o iOS suspender o BiblioFuse, a transferência é pausada. Os arquivos já enviados estão seguros. Reabra o BiblioFuse, confirme que o Wi-Fi Transfer ainda está ativo e reinicie o upload — a maioria dos navegadores tentará novamente os arquivos incompletos.
