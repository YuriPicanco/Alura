let ordenacao = document.getElementById('btnOrdenarPorPreco');
ordenacao.addEventListener('click', ordenaLivrosPorPreco)

function ordenaLivrosPorPreco(){
    let livrosOrdenados = livros.sort((a, b)=> a.preco - b.preco);
    limpaTela();
    exibirLivros(livrosOrdenados);
}