const form = document.querySelector('#novoItem');//captura o formulario
const lista = document.querySelector('#lista');//captura a classe lista tag ul
    //JSON converte os dados de string para array em localSotare
const itens = JSON.parse(localStorage.getItem("itens")) || []; //ou recebe uma array vazia se não houver array

form.addEventListener("submit", (evento)=> {
    evento.preventDefault();//previne o ocorrido padrão

    const nome = evento.target.elements['nome'];
    const quantidade = evento.target.elements['quantidade'];
    const itemAtual = {
        "nome": nome.value,
        "quantidade": quantidade.value
    };
    const existe = itens.find( (elemento) => elemento.nome === nome.value);

    if(existe){
        itemAtual.id = existe.id;
        atualizaElemento(itemAtual);
        itens[itens.findIndex(elemento => elemento.id === existe.id)] = itemAtual;
        
    } else {
        itemAtual.id = itens[itens.length - 1] ? (itens[itens.length - 1]+1) : 0;

        criaElemento(itemAtual);

        itens.push(itemAtual);
    }


    //armazena em 'itens' o array transformado em string pelo JSON
    localStorage.setItem("itens", JSON.stringify(itens));

    nome.value = "";
    quantidade.value = "";
})

function criaElemento(item){
        //<li class="item"><strong>7</strong>Camisas</li>
    const novoItem = document.createElement('li'); //cria tag li
    novoItem.classList.add("item"); //adiciona a classe 'item' à tag li

    const numeroItem = document.createElement('strong'); //cria a tag strong

    numeroItem.innerHTML = item.quantidade;//recebe dentro da tag strong o valor de quantidade
    numeroItem.dataset.id = item.id
        //adiciona a tag strong como filho da tag li
    novoItem.appendChild(numeroItem);
    //recebe dentro da tag li o valor de nome
    novoItem.innerHTML += item.nome;
    novoItem.appendChild(botaoDeleta(item.id)); //cria o botao deleta

    lista.appendChild(novoItem); //adiciona a tag li como filho da tag lista
}

function atualizaElemento(item){
    document.querySelector("[data-id='" + item.id + "']").innerHTML = item.quantidade;
}

function botaoDeleta(id){
    const elementoBotao = document.createElement('button');
    elementoBotao.innerText = "X";

    elementoBotao.addEventListener("click", function(){ //função arrow não recebe o this do javascript
        deletaElemento(this.parentNode, id);
    })

    return elementoBotao;
}

function deletaElemento(tag, id){
    tag.remove();
    console.log(id);

    itens.splice(itens.findIndex(elemento => elemento.id === id), 1);

    console.log(itens);

    localStorage.setItem("itens", JSON.stringify(itens));
}