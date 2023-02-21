const controle = document.querySelectorAll("[data-controle]");     //lista de botoes '+' e '-'
const estatisticas = document.querySelectorAll("[data-estatistica");     //lista de valores de cada peça
//console.log(estatisticas);
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach( (elemento)=>{                                //percorre cada elemento da lista controle
    elemento.addEventListener("click", (evento)=>{            //adicionando um escutador de evento e uma função anonima
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode); //(botao-alvo(data-controle), pai do botao)
        atualizaEstatisticas(evento.target.dataset.peca);
    })
})
    
function manipulaDados(operacao, controle){
    const peca = controle.querySelector("[data-contador]");        //captura o contador dentro do controle(pai do botao)

    if(operacao === '-'){ //se o dataset = -
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}

function atualizaEstatisticas(peca){
    console.log(pecas[peca]); //objeto[botao-alvo]

    estatisticas.forEach( (elemento)=>{ //percorre toda a lista
            //atualiza o textContent do elemento peca na posição peca a nível de estátistica
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica];    
    })
}