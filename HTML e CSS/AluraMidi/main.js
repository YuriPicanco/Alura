

//alert('ola mundo');

//Toca som



function tocaSom(idElementoAudio){ //Recebe o ID do audio
    const elemento = document.querySelector(idElementoAudio); //Recebe o conteúdo do audio

    if(elemento.localName === 'audio'){
        elemento.play(); 
    }else{
        console.log('Elemento não encontrado');
    }
}
const listaTeclas = document.querySelectorAll('.tecla'); //Armazena os arquivos da classe 'tecla'

for(let i = 0; i <listaTeclas.length;i++){
    const tecla = listaTeclas[i];
    const instrumento = tecla.classList[1];
    
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = () => tocaSom(idAudio);
    
    tecla.onkeydown = function (evento){
        if(evento.code == 'Space' || evento.code === 'Enter'){
            tecla.classList.add('ativa');
        }
    tecla.onkeyup = () => tecla.classList.remove('ativa');
    }
}


/*
//Alternativa Mais Acertiva

//Função para esxtrair apenas o nome do som que deverá ser tocado
function getOnlySoundName(classList){
    return soundName = classList[1].replace('tecla_', '');
}

//Função para tocar o som
function playSound(){
    var sound = getOnlySoundName(event.currentTarget.classList);

    documento.querySelector(`#som_tecla_${sound}`).play();
}*/