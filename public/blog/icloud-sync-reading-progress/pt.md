# Como o BiblioFuse Sincroniza o Progresso de Leitura entre iPhone, iPad e Mac via iCloud

Você está lendo um volume de manga no iPhone durante o trajeto — chega à página 80, depois muda para o iPad em casa e precisa procurar nas miniaturas para encontrar onde parou. Ou você lê um capítulo no Mac e na manhã seguinte pega o iPhone, que ainda mostra a página um.

A sincronização do progresso de leitura parece simples, mas falha sutilmente na maioria dos leitores. O [BiblioFuse](/pt/) usa iCloud para sincronizar sua posição de leitura exata — número de página, direção de leitura e configurações de exibição — entre iPhone, iPad e Mac, sem etapas manuais.

## Por que a sincronização de progresso é difícil de fazer certo

A abordagem básica — salvar um número de página em um documento na nuvem — falha de várias maneiras: não considera volumes com contagens de páginas diferentes em codificações distintas, não sincroniza a direção de leitura e não tem mecanismo para marcar um volume como "concluído" de forma persistente entre dispositivos.

O [BiblioFuse](/pt/) armazena dados de progresso como metadados vinculados ao hash de conteúdo do arquivo, não ao seu nome. Mesmo que você renomeie um CBZ ou o mova entre pastas, os dados de progresso ainda correspondem corretamente em qualquer dispositivo.

## Configurando a sincronização iCloud

No iPhone ou iPad:
1. Vá para **Ajustes** (configurações do sistema)
2. Toque no seu Apple ID → **iCloud** → **iCloud Drive**
3. Encontre **BiblioFuse** e confirme que a chave está ativada

No Mac:
1. Abra **Ajustes do Sistema → Apple ID → iCloud**
2. Ative o iCloud Drive e certifique-se de que o BiblioFuse aparece na lista

Uma vez ativadas essas opções, o BiblioFuse cuida de tudo automaticamente. Não há botão "Sincronizar agora" — as alterações se propagam em segundo plano quando os dispositivos estão online.

## O que é sincronizado

**Posição de leitura.** O número exato da página. Se você fechar um volume na página 87, todos os outros dispositivos o abrirão na página 87.

**Direção de leitura.** Se você configurou um volume de manga como da direita para a esquerda, essa configuração segue o volume em todos os dispositivos.

**Status de conclusão.** Marcar um volume como lido em um dispositivo o marca em todos.

**Tags e classificações.** Tags e classificações com estrelas sincronizam em todos os dispositivos.

## Como funciona a sincronização de arquivos do iCloud Drive

O [BiblioFuse](/pt/) também usa o iCloud Drive para os próprios arquivos da biblioteca.

**Mac para iPhone**: Abra o Finder e navegue até **iCloud Drive → BiblioFuse**. Coloque qualquer CBZ, CBR, EPUB ou PDF nessa pasta. Ele aparece no BiblioFuse no seu iPhone em minutos.

**iPhone para outros dispositivos**: Arquivos adicionados via Wi-Fi Transfer são armazenados na pasta iCloud do BiblioFuse e ficam disponíveis nos outros dispositivos.

## Wi-Fi Transfer para cargas em massa

Para configuração inicial ou grandes transferências em lote, o Wi-Fi Transfer é mais rápido que a sincronização iCloud.

1. Abra **Configurações → Importar por Wi-Fi** no app
2. Ative
3. Visite a URL mostrada em um navegador na mesma rede Wi-Fi
4. Arraste sua coleção para a janela do navegador

O [BiblioFuse](/pt/) recebe na velocidade da rede local: 50–100 MB/s em uma rede doméstica típica.

## Mac Home Library: lendo sem copiar arquivos

Se sua coleção principal está em um Mac e você não quer preencher o armazenamento do iPhone, o Mac Home Library é uma abordagem diferente: transmite volumes diretamente do Mac para o iPhone via Wi-Fi local. Nenhum arquivo é copiado para o dispositivo ou para o iCloud.

Para ativar:
1. Certifique-se de que o BiblioFuse está instalado no Mac
2. No app do Mac, vá em **Preferências → Home Library** e ative o compartilhamento
3. No iPhone, abra o BiblioFuse e mude para a aba Biblioteca Mac

O progresso de leitura das sessões do Mac Home Library ainda é sincronizado via iCloud.

## Leitura offline

Se você ler offline, o BiblioFuse armazena o progresso localmente e sincroniza na próxima vez que o dispositivo se conectar. Se dois dispositivos conflitarem, o dispositivo com o número de página mais alto vence.

## Começando

O [BiblioFuse](/pt/) é gratuito na App Store para iPhone e iPad. A sincronização iCloud está incluída sem nível premium. Ative o iCloud Drive para o BiblioFuse nas configurações do dispositivo e seu progresso começa a sincronizar imediatamente.
