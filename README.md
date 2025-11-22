Base de Conhecimento: Obras Literárias Clássicas da Rússia
Este projeto é uma aplicação web simples e interativa, criada para servir como uma base de conhecimento sobre obras literárias clássicas da Rússia. A interface permite que os usuários pesquisem e encontrem informações sobre livros, autores e suas descrições de forma rápida e eficiente.

Funcionalidades
Busca Dinâmica: Pesquise em tempo real por título da obra, nome do autor ou palavras-chave na descrição.
Interface Limpa: Os resultados são exibidos em formato de "cards", cada um contendo detalhes sobre a obra.
Acesso a mais informações: Cada card inclui um link para acessar a pagina de Wikipedia relacionado ao autor.
Uso Intuitivo: A busca pode ser acionada tanto pelo clique no botão "Buscar" quanto pela tecla "Enter", proporcionando uma melhor experiência de usuário.
Performance Otimizada: Os dados das obras são carregados apenas uma vez para garantir que as buscas subsequentes sejam mais rápidas.

Tecnologias Utilizadas
O projeto foi construído com tecnologias web fundamentais, sem a necessidade de frameworks complexos:
HTML5: Para a estrutura semântica da página.
CSS3: Para a estilização e o layout dos componentes (arquivo style.css).
JavaScript (Vanilla): Para toda a lógica da aplicação, incluindo:
Busca e filtragem de dados.
Manipulação do DOM para renderizar os resultados dinamicamente.
Gerenciamento de eventos (cliques e pressionamento de teclas).
JSON: Como formato para armazenar e consumir os dados das obras literárias (data.json).

Estrutura do Projeto
plaintext
 Show full code block 
/
├── index.html            # Arquivo principal da página web
├── style.css             # Folha de estilos para a aparência visual
├── script.js             # Lógica da aplicação (busca, renderização)
├── data.json             # Banco de dados com as informações das obras
├── Flag_of_Russia.jpeg   # Imagem da bandeira usada no cabeçalho
└── colecao-de-livros.jpeg  # Imagem utilizada no background


Como Funciona
index.html: Define a estrutura básica da página, incluindo o cabeçalho com o título, o campo de busca, o botão e a seção principal onde os cards dos livros são exibidos.
script.js:
Ao iniciar uma busca, o script carrega os dados do arquivo data.json (se ainda não tiverem sido carregados).
Ele captura o texto digitado pelo usuário e o converte para minúsculas para garantir uma busca case-insensitive.
Filtra o array de dados, procurando pelo termo de busca nos campos nome, autor e descrição de cada obra.
A função renderizarCards limpa a tela e exibe apenas os resultados encontrados, criando um elemento <article> para cada um.
data.json: Este arquivo atua como um banco de dados simples. É um array de objetos, onde cada objeto representa um livro e contém chaves como nome, autor, ano, descricao, tags e link.

Como Usar
Clone ou baixe este repositório.
Abra o arquivo index.html em qualquer navegador web moderno.
Digite o termo que deseja pesquisar no campo de busca.
Clique no botão "Buscar" ou pressione a tecla "Enter".
Os resultados correspondentes serão exibidos na tela.