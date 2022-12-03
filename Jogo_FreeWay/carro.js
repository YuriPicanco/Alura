


let xCarros = [550, 550, 550, 550, 550, 550];
let yCarros = [40, 96, 150, 210, 270, 308];
let vCarros = [2, 2.5, 3.2, 4.3, 3, 4];


function mostraCarro(){
  for(let i=0; i<carros.length;i++){
    image(carros[i], xCarros[i], yCarros[i], 50, 40);
    image(carros[i], xCarros[i], yCarros[i], 50, 40);
    image(carros[i], xCarros[i], yCarros[i], 50, 40);
  }

}

function movimentaCarro(){
  for(let i=0; i<carros.length;i++){
    xCarros[i] -= vCarros[i];
    xCarros[i] -= vCarros[i];
    xCarros[i] -= vCarros[i];
  }
}

function resetCarros(){
  for(let i=0; i<carros.length;i++){
    if(xCarros[i] < -40)
      xCarros[i] = 550;
  }
}