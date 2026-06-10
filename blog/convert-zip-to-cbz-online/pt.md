# Como converter ZIP para CBZ online: renomeie arquivos de quadrinhos em segundos

Você tem um arquivo ZIP cheio de imagens de quadrinhos e seu leitor não o reconhece. A solução leva cerca de três segundos: arquivos CBZ são arquivos ZIP com uma extensão diferente. Renomeie o arquivo e o leitor o vê como um quadrinho. A [ferramenta web do BiblioFuse](https://bibliofuse.com/pt/webapp/) pode fazer isso no navegador — sem upload, sem software, sem conta.

## Por que seu leitor de quadrinhos ignora arquivos ZIP

A maioria dos leitores de quadrinhos identifica tipos de arquivo pela extensão, não pelo conteúdo. Um arquivo chamado `capitulo-01.zip` parece um arquivo genérico. O mesmo arquivo renomeado para `capitulo-01.cbz` é reconhecido imediatamente como um container de quadrinhos. Não há diferença nos bytes — apenas o nome muda.

CBZ significa Comic Book ZIP. O formato CBZ foi criado para dar aos leitores de quadrinhos uma extensão reconhecível. Dentro sempre há um ZIP com imagens nomeadas de forma a se ordenarem na sequência de leitura correta. CBR usa o mesmo conceito com um arquivo RAR.

## Opção 1 — Renomear o arquivo diretamente

O método mais rápido é simplesmente renomear. No Mac ou Windows, mude a extensão de `.zip` para `.cbz` no Finder ou Explorador de Arquivos. No iOS:

1. Abra o app **Arquivos** e navegue até o arquivo ZIP.
2. Pressione e segure o arquivo → **Renomear**.
3. Mude `.zip` para `.cbz` e toque em **Concluído**.

O iOS pode avisar sobre a mudança de extensão. Confirme a alteração. O arquivo agora é um CBZ que qualquer leitor de quadrinhos — incluindo o [BiblioFuse para iPhone](https://bibliofuse.com/pt/) — abrirá sem problemas.

## Opção 2 — Usar a ferramenta web do BiblioFuse

A [ferramenta web do BiblioFuse](https://bibliofuse.com/pt/webapp/) funciona inteiramente no seu navegador usando WebAssembly. Seus arquivos nunca saem do dispositivo — nada é enviado a um servidor.

Para converter ZIP para CBZ:
1. Acesse **[bibliofuse.com/pt/webapp](https://bibliofuse.com/pt/webapp/)** em qualquer navegador moderno.
2. Selecione a ferramenta **Converter**.
3. Arraste seu arquivo ZIP para a ferramenta ou clique para selecionar.
4. Escolha **ZIP → CBZ** como formato de saída.
5. Clique em **Converter** e baixe o resultado.

O CBZ resultante contém exatamente as mesmas imagens que o ZIP de entrada, na mesma ordem, sem recodificação ou perda de qualidade.

## Conversão em lote

Se você tiver dezenas de arquivos ZIP, a ferramenta web aceita múltiplas entradas: arraste vários ZIPs de uma vez e ela produz um CBZ para cada um.

## O que há dentro de um CBZ

Um CBZ é um ZIP com imagens ordenadas alfabeticamente por nome de arquivo. O leitor as exibe nessa ordem. Convenção recomendada: `0001.jpg`, `0002.jpg`... (com preenchimento de zeros). Sem zeros, `10.jpg` vem antes de `2.jpg` na ordem alfabética.

## E os arquivos CBR?

CBR usa RAR em vez de ZIP. Converter CBR para CBZ requer extrair o RAR e reempacotá-lo como ZIP. A ferramenta web do BiblioFuse também trata isso: selecione **CBR → CBZ** e ela reempacota as imagens como ZIP com extensão CBZ.

## Conclusão

CBZ é ZIP disfarçado. Renomear a extensão é tudo que se precisa na maioria dos casos. Quando você quer uma solução no navegador para conversão em lote sem upload, a [ferramenta web do BiblioFuse](https://bibliofuse.com/pt/webapp/) converte ZIP para CBZ em segundos — totalmente privado, sem software necessário.
