const nota = document.querySelector("#calcular");
const resultado = document.querySelector(".resultado");

nota.addEventListener("click", ()=> {
    resultado.innerHTML = "Fui Clicado";
})