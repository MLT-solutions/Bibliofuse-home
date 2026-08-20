# Como Organizar sua Biblioteca de Ebooks sem Inserir Metadados ou Números ISBN

A maioria dos leitores de ebooks pede que você insira título, autor, gênero e ISBN ao adicionar um livro. Se o arquivo já tem metadados incorporados, o leitor os preenche automaticamente. Se não — o que ocorre com muitos arquivos EPUB e TXT que você realmente possui — uma longa sessão de inserção de dados está à sua espera.

[GrepTag Reader](/pt/grepreader/) adota a abordagem oposta. Ele lê o texto real dentro de cada livro e extrai automaticamente tags do conteúdo. Você não insere nada. A biblioteca se organiza sozinha.

## Como o GrepTag Reader Extrai Tags do Conteúdo

Quando você importa um arquivo EPUB ou TXT para o [GrepTag Reader](/pt/grepreader/), ele lê o texto completo do livro e procura palavras-chave recorrentes que indicam sobre o que o livro trata.

As tags geradas refletem o conteúdo real:
- Um romance ambientado em Tóquio com personagens samurai: `japão`, `samurai`, `histórico`, `ação`
- Um manual técnico sobre ferramentas de linha de comando do Linux: `linux`, `terminal`, `programação`
- Um diário de viagem pelo Sudeste Asiático: `viagem`, `ásia`, `memórias`

O etiquetamento automático é executado na importação do livro. Você não precisa acionar uma análise manualmente.

## Filtragem Multi-Tag — Lógica AND

A filtragem de tags no GrepTag Reader usa lógica AND: ao selecionar várias tags, você vê livros que correspondem a *todas*.

- Livros `ficção-científica` E `contos` — veja apenas coleções nesse gênero
- Livros `japão` E `detetive` — mostra ficção policial japonesa
- Livros `filosofia` E `antigo` — restringe a obras greco-romanas antigas

## Formatos Suportados

GrepTag Reader analisa o conteúdo de texto de **EPUB** e **TXT**.

Sua biblioteca — incluindo tags geradas automaticamente e progresso de leitura — sincroniza via iCloud.

Importe seus arquivos EPUB e TXT existentes para o [GrepTag Reader](/pt/grepreader/). O etiquetamento automático é executado imediatamente na importação. Disponível para iPhone, iPad e Mac.
