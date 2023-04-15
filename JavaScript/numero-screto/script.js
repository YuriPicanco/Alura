const menorValor = 1;
const maiorValor = 1000;
const numeroSecreto = geraNumeroAleatorio();



function geraNumeroAleatorio(){
    return parseInt(Math.random()*maiorValor + 1);
}

console.log(`Numero Secreto: ${numeroSecreto}`);

const elementoMenor = document.getElementById('menor-valor');
elementoMenor.innerText = menorValor;

const elementoMaior = document.getElementById('maior-valor');
elementoMaior.innerText = maiorValor;