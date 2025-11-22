let cardContainer = document.querySelector(".card-container");
let searchInput = document.querySelector('input[type="text"]'); // Adicionado para pegar o campo de busca
let dados = [];

/**
 * Inicia a busca de dados com base no termo inserido no campo de busca.
 * Carrega os dados do 'data.json' se ainda não tiverem sido carregados,
 * filtra os resultados e chama a função para renderizá-los na tela.
 */
async function iniciarBusca() {
    // Carrega os dados apenas uma vez para melhorar a performance
    if (dados.length === 0) {
        try {
            let resposta = await fetch("./data.json");
            dados = await resposta.json();
        } catch (error) {
            console.error("Erro ao buscar os dados:", error);
            return; // Para a execução se houver erro
        }
    }

    // Pega o termo da busca e converte para minúsculas
    let termoBusca = searchInput.value.toLowerCase();

    // Filtra os dados com base no termo de busca (nome, autor ou descrição)
    let resultados = dados.filter(dado => {
        const nome = dado.nome ? dado.nome.toLowerCase() : '';
        const autor = dado.autor ? dado.autor.toLowerCase() : '';
        const descricao = dado.descrição ? dado.descrição.toLowerCase() : '';

        return nome.includes(termoBusca) || autor.includes(termoBusca) || descricao.includes(termoBusca);
    });

    renderizarCards(resultados); // Mostra apenas os resultados filtrados
}

/**
 * Renderiza os cards na tela com base nos dados fornecidos.
 * @param {Array} dados - Um array de objetos contendo as informações para criar os cards.
 */
function renderizarCards(dados) {
    cardContainer.innerHTML = ""; // Limpa os cards antigos antes de mostrar os novos
    for (let dado of dados){
        let article = document.createElement("article");
        article.classList.add("card");
        article.innerHTML = `
        <h2>${dado.nome}</h2>
        <p class ="autor">${dado.autor}</p>
        <p>${dado.ano}</p>
        <p>${dado.descricao}</p>
        <p class = "tags">${dado.tags}</p>
        <a class = "link" href="${dado.link}" target="_blank">Mais informações sobre o autor</a>
        `
        cardContainer.appendChild(article);
    }
}

// Adiciona um event listener para a tecla "Enter" no campo de busca
searchInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        iniciarBusca();
    }
});
        
