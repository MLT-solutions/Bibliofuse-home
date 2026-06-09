# Como fazer backup da sua biblioteca de quadrinhos no Mac: disco externo, NAS e opções na nuvem

BiblioFuse armazena seus quadrinhos e e-books — EPUB, CBZ, CBR, PDF, ZIP, RAR e TXT — no iPhone, iPad e Mac, e transmite sua biblioteca do Mac diretamente para o iPhone via Wi-Fi sem copiar arquivos. Para fazer backup da sua biblioteca de quadrinhos no Mac, você pode usar o Time Machine com um disco externo ou NAS, copiar arquivos para armazenamento na nuvem como iCloud Drive ou Dropbox, ou usar qualquer ferramenta de backup que espelhe uma pasta padrão. O progresso de leitura do BiblioFuse sincroniza automaticamente via iCloud, então seu lugar em cada livro está sempre preservado.

## Por que fazer backup da sua biblioteca de quadrinhos é fundamental

Imagine este cenário: você passou cinco anos baixando compras legais, digitalizando sua coleção física e curadoria de centenas de volumes em CBZ, CBR, EPUB e PDF. Em uma terça-feira de manhã, o disco interno do seu Mac falha. Sem aviso. Sem segunda chance. Tudo perdido.

Ou talvez você esteja atualizando para um novo Mac e não tem certeza se o Assistente de Migração vai transferir sua biblioteca corretamente, ou se você terá que procurar arquivos espalhados em pastas que você se lembra vagamente de ter criado em 2021.

De qualquer forma, uma estratégia de backup adequada não é opcional quando sua biblioteca merece ser protegida.

## Por que bibliotecas de quadrinhos são mais difíceis de substituir do que você pensa

Música e fotos têm serviços de streaming e sincronização na nuvem como redes de segurança. Quadrinhos e mangás são diferentes. Arquivos sem DRM — as rips CBZ que você comprou, os romances gráficos EPUB do Humble Bundle, os doujinshi que você rastreou — são insubstituíveis uma vez perdidos. Editoras não mantêm bibliotecas de download para sempre. Arquivos de traduções feitas por fãs desaparecem. Digitalizações físicas que você mesmo fez não podem ser refeitas.

Uma coleção digital séria de quadrinhos pode facilmente chegar a 50 GB, 200 GB ou mais. Isso é maior do que a maioria das bibliotecas de fotos e muito maior do que as bibliotecas de música típicas. Os tamanhos de arquivo tornam a exclusão acidental mais grave: você não perceberá um CBZ ausente em uma pasta de 800 volumes até procurar por ele três meses depois.

## Como fazer backup da sua biblioteca de quadrinhos no Mac

Os métodos a seguir funcionam de forma independente ou em conjunto. Usar dois métodos — local e na nuvem — fornece redundância.

### Método 1: Time Machine (recomendado para a maioria dos usuários)

O Time Machine é a maneira mais simples de fazer backup de todo o seu Mac, incluindo sua biblioteca de quadrinhos.

1. Conecte um HDD externo, SSD ou NAS ao seu Mac.
2. Abra **Configurações do Sistema → Geral → Time Machine**.
3. Clique em **Adicionar Disco de Backup** e selecione seu disco externo ou NAS.
4. O Time Machine faz backup automaticamente a cada hora e mantém snapshots horários por 24 horas, snapshots diários por um mês e snapshots semanais até o disco ficar cheio.

O Time Machine é versionado, portanto, se você excluir acidentalmente um volume ou substituir uma pasta, pode restaurar a versão exata da data em que estava correto. Não requer configuração além da configuração inicial.

### Método 2: Cópia manual para disco externo

Para leitores que desejam uma cópia portátil e independente de sua biblioteca, uma cópia manual para um disco externo é rápida e não requer software.

1. Abra o **Finder** e navegue até sua pasta de biblioteca do BiblioFuse. O local padrão é `~/Library/Containers/com.modernlogic.bibliofuse/Data/Documents/`, mas você pode ter apontado para uma pasta personalizada.
2. Selecione a pasta e arraste-a para seu disco externo.
3. Repita sempre que adicionar um número significativo de novos volumes.

Este método é melhor combinado com o Time Machine em vez de usado sozinho. Uma cópia manual fornece um disco portátil que você pode levar para fora do local; o Time Machine fornece histórico versionado.

### Método 3: Armazenamento na nuvem (iCloud Drive, Dropbox, Google Drive)

O armazenamento na nuvem é ideal se você deseja que sua biblioteca seja acessível em vários Macs ou como backup externo.

**iCloud Drive:**
1. Mova sua pasta de biblioteca de quadrinhos para `~/Library/Mobile Documents/com~apple~CloudDocs/` (sua pasta do iCloud Drive no Finder).
2. Os arquivos sincronizam automaticamente com os servidores da Apple e com qualquer outro Mac conectado ao mesmo Apple ID.
3. Ative **Otimizar Armazenamento do Mac** nas configurações do iCloud somente se o seu Mac tiver espaço em disco limitado — caso contrário, mantenha cópias locais completas.

**Dropbox ou Google Drive:**
1. Mova sua pasta de biblioteca para a pasta Dropbox ou Google Drive no seu Mac.
2. O cliente de desktop sincroniza as alterações automaticamente.
3. Esteja ciente de que bibliotecas grandes (100 GB+) consumirão uma parte significativa da sua cota de armazenamento na nuvem.

A sincronização na nuvem não é substituta do backup local. Se você excluir arquivos acidentalmente, a lixeira da nuvem geralmente os mantém apenas por 30 dias.

### Método 4: NAS (armazenamento em rede)

Um NAS é a melhor solução para grandes coleções. Dispositivos da Synology, QNAP ou fabricantes similares ficam na sua rede doméstica e fornecem terabytes de armazenamento redundante.

1. Monte o compartilhamento NAS no Finder: **Ir → Conectar ao Servidor** e insira `smb://[IP-NAS]/[nome-compartilhamento]`.
2. Use **rsync** para sincronização automatizada. Abra o Terminal e execute:

```
rsync -av --delete ~/caminho/para/biblioteca-quadrinhos/ /Volumes/NAS-Share/biblioteca-quadrinhos/
```

3. Agende este comando como um cron job diário ou use uma ferramenta como **Hazel** ou **Automator** para acioná-lo automaticamente.

Um NAS com redundância RAID significa que mesmo que um disco no array falhe, seus dados sobrevivem. Combine-o com o Time Machine apontando para um compartilhamento NAS para o melhor dos dois mundos: redundância e versionamento.

### Entendendo a Biblioteca Mac Home do BiblioFuse

[BiblioFuse](/pt/) inclui um recurso Mac Home Library que transmite quadrinhos de uma pasta no seu Mac diretamente para o seu iPhone ou iPad via Wi-Fi — sem copiar arquivos, sem sincronização, sem uso de armazenamento no dispositivo.

Este é um recurso de streaming, não de backup. Os arquivos vivem no seu Mac. Se o disco do seu Mac falhar, o iPhone não tem nada para transmitir. **Você ainda precisa fazer backup da pasta de origem no seu Mac** usando um ou mais dos métodos acima.

Para encontrar a pasta que o BiblioFuse está transmitindo, abra o BiblioFuse no seu Mac e verifique **Configurações → Biblioteca Home**. Esse caminho é o que você precisa incluir na sua estratégia de backup.

## Dicas práticas para manter sua biblioteca organizada

**Use o Finder para localizar a pasta da biblioteca.** No Mac, pressione **⌘ + Espaço** e digite `~/Library/Containers/com.modernlogic.bibliofuse` para ir diretamente ao container do aplicativo. Seus arquivos estão na subpasta `Data/Documents/`.

**Use rsync para backups incrementais no NAS.** O flag `--delete` garante que sua cópia no NAS espelhe seu Mac exatamente, removendo volumes que você excluiu localmente. Execute semanalmente ou após importações em massa.

**Use iCloud Drive para backup externo automático.** Se sua biblioteca tiver menos de 50 GB e você tiver um plano iCloud+, armazenar sua biblioteca no iCloud Drive é o backup externo de menor atrito disponível em um Mac.

**Separe seu progresso de leitura dos seus arquivos.** [BiblioFuse](/pt/) sincroniza o progresso de leitura via iCloud automaticamente — você não precisa fazer backup disso separadamente. Concentre sua estratégia de backup nos próprios arquivos de origem.

## Perguntas frequentes

**Onde o BiblioFuse armazena meus quadrinhos no Mac?**
Por padrão, os arquivos gerenciados pelo BiblioFuse no Mac são armazenados em `~/Library/Containers/com.modernlogic.bibliofuse/Data/Documents/`. Se você apontou o aplicativo para uma pasta personalizada, essa pasta é a raiz da sua biblioteca. De qualquer forma, o caminho é visível nas configurações do BiblioFuse no Mac.

**O Time Machine faz backup da biblioteca do BiblioFuse automaticamente?**
Sim. O Time Machine faz backup de todo o seu Mac por padrão, incluindo o container do aplicativo onde o BiblioFuse armazena arquivos. Se você usar uma pasta de biblioteca personalizada fora do container, verifique se ela não está na lista de exclusões do Time Machine.

**Posso mover minha biblioteca de quadrinhos para um novo Mac sem perder meu progresso de leitura?**
Sim. Copie sua pasta de biblioteca de quadrinhos para o novo Mac e faça login com o mesmo Apple ID. O BiblioFuse restaura seu progresso de leitura do iCloud. Aponte o aplicativo para o mesmo caminho de pasta relativo no novo Mac e sua biblioteca aparecerá exatamente como estava.

**O iCloud Drive é um backup seguro para grandes bibliotecas de quadrinhos?**
O iCloud Drive é um backup externo confiável, mas não substitui um backup local. Se você excluir um arquivo, o iCloud o mantém na pasta Excluídos Recentemente por 30 dias. Para grandes coleções, um disco externo ou NAS continua sendo essencial.

**Como automatizo backups rsync para um NAS?**
Abra o **Terminal** e execute `crontab -e`. Adicione uma linha como `0 2 * * * rsync -av --delete ~/Quadrinhos/ /Volumes/NAS/Quadrinhos/` para executar uma sincronização toda noite às 2 da manhã. Substitua os caminhos pelos caminhos reais da sua biblioteca e ponto de montagem do NAS.

**O que acontece com meus quadrinhos se o disco do meu Mac falhar?**
Se você tiver um backup atual do Time Machine, pode restaurar toda a sua biblioteca para uma nova unidade ou novo Mac. Se você tiver uma cópia manual em um disco externo ou NAS, esses arquivos estão intactos e podem ser copiados diretamente. Sem backup, os arquivos são irrecuperáveis — por isso configurar um antes de uma falha é fundamental.

## Comece a proteger sua biblioteca hoje

Uma biblioteca de quadrinhos construída ao longo de anos merece o mesmo cuidado que qualquer outra coleção digital insubstituível. O passo mais rápido que você pode tomar agora é conectar um disco externo e ativar o Time Machine — só isso já protege você contra falhas de hardware. Adicione um backup na nuvem para proteção externa e um NAS para grandes coleções.

[BiblioFuse](/pt/) torna a leitura da sua biblioteca fácil no iPhone, iPad e Mac. Combine-o com uma sólida estratégia de backup e sua coleção estará protegida independentemente do hardware que vier e for.
