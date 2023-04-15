function verificaValor(chute){
    const numero =+ chute;

    if(chuteInvalido(numero)){
        elementoChute.innerHTML += '<div>Valor invalido</div>';
        if(chute.toUpperCase() === "GAME OVER"){
            document.body.innerHTML = `
                <h2>Game Over!!!</h2>
                <h3>Pressione o botão para jogar novamente</h3>
                <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
                `
                document.body.style.backgroundColor= "black";
        }
        return ;
    }

    if(intervaloDeValor(numero)){
        elementoChute.innerHTML +='<div>Fora do intervalo</div>';
        return ;
    }

    if(numero === numeroSecreto){
        document.body.innerHTML =`<h1>Você Acertou!
        <p>Para-bains!</p>!!!!!
        <p>O numero era ${numeroSecreto}</p></h1>
        <p><button id="jogar-novamente" class="atualiza value"Jogar Novamente">Jogar Novamente</button></p>`;
    } else if(numero > numeroSecreto){
            elementoChute.innerHTML += "<div>O numero secreto é menor";
        }else{
            elementoChute.innerHTML += "<div>O numero secreto é maior";
        }
}


function intervaloDeValor(numero) {
    return numero > maiorValor || numero < menorValor;
}

    function chuteInvalido(numero) {
        return Number.isNaN(numero);
}

document.body.addEventListener('click', e => {
    if(e.target.id == "jogar-novamente"){
        window.location.reload();
    }
})