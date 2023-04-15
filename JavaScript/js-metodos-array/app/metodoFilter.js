const botoes = document.querySelectorAll('.btn');
botoes.forEach(btn => btn.addEventListener('click', filtraLivros));

function filtraLivros(){
    const botao = document.getElementById(this.id);
    const categoria = botao.value;
    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria);
    limpaTela();
    exibirLivros(livrosFiltrados);
    if(categoria == 'disponivel'){
        const valorTotal = calculaValorTotal(livrosFiltrados);
        exibirValorTotal(valorTotal);
        
    }
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}


function exibirValorTotal(valor){
    valorGeral.innerHTML = `
    <div class="livros__disponiveis">
    <p>Todos os livros disponíveis por R$ <span id="valor">${valor.toFixed(2)}</span></p>
    </div>`
}