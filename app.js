function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Obtém o valor do campo de pesquisa e converte para minúsculas para facilitar a comparação
    let campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();

    // Verifica se o campo de pesquisa está vazio
    if (campoPesquisa == "") {
        // Se estiver vazio, exibe uma mensagem de erro na seção de resultados
        section.innerHTML = "<p>Nemhum jogo foi encontrado.</p>"
        return; // Interrompe a função
    }

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";

    // Itera sobre cada elemento do array 'dados' (assumido que 'dados' seja um array de objetos)
    for (let dado of dados) {
        // Converte os campos 'titulo', 'descricao' e 'tags' para minúsculas para facilitar a comparação
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();

        // Verifica se o termo de pesquisa está presente no título, descrição ou tags
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
            // Se o termo for encontrado, adiciona o resultado à string 'resultados'
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="https://forza.net/horizon" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href=${dado.link} target="_blank">Compre na Steam</a>
                </div>
            `;
        }
    }

    // Verifica se foram encontrados resultados
    if (resultados == "") {
        // Se não houver resultados, exibe uma mensagem informando
        resultados = "<p>Nada foi encontrado</p>"
    }

    // Atribui os resultados à seção HTML
    section.innerHTML = resultados;
}