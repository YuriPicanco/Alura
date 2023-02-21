

const lista = document.querySelector('[data-lista]');
const botao = document.querySelector('[data-botao]');

botao.addEventListener('click', ()=> {
    if(lista.style.display == "none"){
        lista.style.display = "block";
    }else{
        lista.style.display = "none";
    }
})
