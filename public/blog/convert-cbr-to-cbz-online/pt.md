# Como Converter CBR para CBZ Online: Grátis, Sem Software

Você tem uma pasta cheia de arquivos CBR — quadrinhos no formato de arquivo RAR — e um leitor que só abre CBZ. Ou está arquivando sua coleção e quer um formato aberto e consistente. A solução parece simples: renomear a extensão de `.cbr` para `.cbz`. Mas isso não funciona.

Arquivos CBR são arquivos RAR. Arquivos CBZ são arquivos ZIP. Eles usam formatos de compressão diferentes por baixo — você não pode simplesmente renomear a extensão. Você precisa extrair as imagens do RAR e recomprimí-las como ZIP. [O conversor online do BiblioFuse](https://bibliofuse.com/pt/webapp/) faz isso no seu navegador, sem que nenhum arquivo seja enviado para qualquer servidor.

## CBR vs CBZ: Qual É a Diferença Real?

Tanto CBR quanto CBZ são formatos de arquivo para quadrinhos. Ambos contêm uma sequência de arquivos de imagem (geralmente JPG ou PNG), que o leitor exibe em ordem para simular a leitura de um quadrinho.

A diferença está na compressão subjacente:

| Formato | Tipo de arquivo | Padrão aberto? |
|---------|----------------|---------------|
| CBZ | ZIP | Sim |
| CBR | RAR | Não (proprietário) |

RAR é um formato proprietário desenvolvido por Eugene Roshal. Abrir arquivos RAR requer o software oficial WinRAR ou uma biblioteca que implemente a especificação RAR — e essa biblioteca precisa ser incluída explicitamente em cada leitor. Muitos leitores modernos, incluindo ferramentas baseadas em navegador, suportam apenas CBZ baseado em ZIP porque a especificação ZIP é aberta e amplamente implementada.

CBZ se tornou o padrão de fato para quadrinhos digitais em parte porque ZIP é livre de royalties e multiplataforma. Cada sistema operacional pode abrir um arquivo ZIP sem software de terceiros. Se você estiver arquivando uma coleção a longo prazo, CBZ é a escolha mais segura.

## Como Funciona a Conversão

Converter CBR para CBZ envolve três etapas:

1. Extrair as imagens do CBR (arquivo RAR)
2. Colocar essas mesmas imagens em um novo arquivo ZIP
3. Renomear a extensão `.zip` para `.cbz`

A ferramenta online do BiblioFuse executa as três etapas no seu navegador usando WebAssembly. Seus arquivos nunca são enviados — a extração, a recompressão e o download ocorrem localmente no seu dispositivo.

## Passo a Passo: Converter CBR para CBZ Online

1. Acesse [bibliofuse.com/pt/webapp/](https://bibliofuse.com/pt/webapp/)
2. Abra a ferramenta **Converter** na barra de ferramentas.
3. Clique em **Selecionar arquivos** ou arraste seus arquivos `.cbr` para a zona de soltar.
4. A ferramenta extrai as imagens, cria um novo arquivo ZIP e baixa o arquivo `.cbz` automaticamente.

Para conversão em lote — vários arquivos CBR de uma vez — selecione todos os seus arquivos no seletor de arquivos. Cada arquivo é processado e baixado separadamente. Não há limite de fila imposto pela ferramenta, embora arquivos muito grandes (400+ MB) possam demorar mais dependendo da capacidade de processamento do seu dispositivo.

## Por Que a Conversão no Navegador É Privada

A conversão é executada inteiramente no seu navegador via WebAssembly (WASM). É a mesma tecnologia que permite que jogos e editores de vídeo funcionem em um navegador sem plugin — trabalho computacionalmente intensivo executado nativamente no sandbox do navegador.

Quando você usa a [ferramenta web do BiblioFuse](https://bibliofuse.com/pt/webapp/):

- Seu arquivo CBR é lido na memória do navegador
- As imagens são extraídas na memória
- Um novo arquivo ZIP é construído na memória
- O ZIP é baixado para o seu dispositivo

Em nenhum momento qualquer dado sai da sua máquina. Não há chamadas ao servidor durante a conversão. Você pode verificar isso abrindo o inspetor de rede do seu navegador (F12 → Rede): as únicas solicitações são o carregamento inicial da página. Nenhum upload aparece.

Isso importa se sua coleção de quadrinhos inclui conteúdo licenciado, scans pessoais ou qualquer outra coisa que você prefira não enviar para um servidor de terceiros.

## Converter Arquivos CBR no iPhone ou iPad

A ferramenta web do BiblioFuse também funciona em navegadores móveis. Acesse [bibliofuse.com/pt/webapp/](https://bibliofuse.com/pt/webapp/) no Safari ou Chrome no iPhone ou iPad.

No iOS, toque em **Selecionar arquivos** e navegue até seus arquivos CBR no app Arquivos, iCloud Drive, ou um provedor de armazenamento em nuvem conectado. Os arquivos CBZ baixados vão para sua pasta de Downloads, de onde você pode compartilhá-los diretamente no [BiblioFuse](https://bibliofuse.com/pt/) para leitura.

## Após a Conversão: Lendo Arquivos CBZ no BiblioFuse

O BiblioFuse no iPhone lê arquivos CBZ nativamente — nenhuma conversão adicional é necessária. Para ler seus arquivos convertidos:

1. Converta CBR para CBZ usando a ferramenta web no seu Mac ou iPhone.
2. Transfira os arquivos CBZ para o iPhone via Transferência Wi-Fi ou AirDrop.
3. Importe para o BiblioFuse selecionando os arquivos no app Arquivos e compartilhando para o app.

Observação: o BiblioFuse também lê arquivos CBR diretamente no iPhone — ele lida com a extração RAR nativamente. O principal motivo para converter é se você está arquivando arquivos, compartilhando-os com outras pessoas ou usando outra ferramenta no seu fluxo de trabalho que exija especificamente CBZ.

## Perguntas Frequentes

**Posso converter vários arquivos CBR de uma vez?**

Sim. Selecione todos os seus arquivos CBR no seletor de arquivos e a ferramenta processa cada um. Os arquivos são baixados individualmente — você recebe um `.cbz` por `.cbr`. Se depois quiser mesclá-los em um único volume, use a ferramenta de mesclar CBZ.

**A qualidade da imagem muda durante a conversão?**

Não. As imagens dentro do arquivo não são recodificadas. A conversão extrai os arquivos JPG ou PNG originais e os coloca em um novo ZIP sem tocar nos dados de imagem. O CBZ convertido é idêntico ao CBR original no nível de pixel.

**E se o arquivo CBR estiver protegido por senha?**

Arquivos CBR protegidos por senha não podem ser abertos sem a senha. A ferramenta web não consegue contornar a proteção por senha. Se seu CBR estiver criptografado, desbloqueie-o primeiro — o SmartDecrypt pode desbloquear em lote arquivos CBZ, PDF e ZIP protegidos por senha no iPhone e Mac.

**Meu arquivo CBR foi convertido mas o CBZ não abre — o que aconteceu?**

Alguns arquivos rotulados como `.cbr` são na verdade arquivos ZIP (renomeados de `.cbz` ou criados por software que usa ZIP por padrão). Se a conversão produzir um arquivo que seu leitor não consiga abrir, tente renomear o `.cbr` original para `.zip` e verificar se já é um arquivo ZIP. Talvez você só precise renomeá-lo diretamente para `.cbz` sem conversão.

**Existe um limite de tamanho de arquivo?**

Não existe limite imposto pelo servidor porque nenhum arquivo é enviado. O limite prático é a RAM disponível no seu dispositivo — arquivos CBR muito grandes (1 GB+) podem fazer o navegador funcionar lentamente em dispositivos com memória limitada. Para a maioria dos arquivos de quadrinhos com menos de 200 MB, a conversão é concluída em alguns segundos.

## Conclusão

CBR e CBZ parecem similares, mas usam formatos de arquivo diferentes por baixo. Converter CBR para CBZ significa rearquivar as imagens dos quadrinhos do formato RAR para ZIP — a [ferramenta online do BiblioFuse](https://bibliofuse.com/pt/webapp/) faz isso inteiramente no seu navegador sem precisar enviar arquivos. A qualidade da imagem é preservada, o processo é privado e o arquivo CBZ resultante funciona em qualquer leitor que suporte o formato aberto baseado em ZIP.
