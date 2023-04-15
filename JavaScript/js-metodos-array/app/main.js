let livros = [];
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
const valorGeral = document.getElementById('valor_total_livros_disponiveis');

getBuscarLivrosDaApi();
const elementoInsereLivro = document.getElementById('livros');

async function getBuscarLivrosDaApi(){
  const res = await fetch(endpointDaAPI);
  livros = await res.json();
  let livrosDesconto = aplicaDesconto(livros);
  exibirLivros(livrosDesconto);
}

function aplicaDesconto(livros){
  const desconto = 0.3;
  
    return livros.map(livro=>{
      return {...livro, preco: livro.preco-(livro.preco*desconto)}
  })
}

function exibirLivros(lista){
  valorGeral.innerHTML = '';
  lista.forEach(livro=>{
    let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'; 
    elementoInsereLivro.innerHTML += `
    <div class="livro">
      <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
      <h2 class="livro__titulo">
      ${livro.titulo}
      </h2>
      <p class="livro__descricao">${livro.autor}</p>
      <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
      <div class="tags">
        <span class="tag">${livro.categoria}</span>
      </div>
    </div>`
  })
}

function limpaTela(){
  elementoInsereLivro.innerHTML = '';
}