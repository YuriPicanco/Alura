let pxAtor = 30;
let colide = false;

let xAtor = 100;
let yAtor = 370;

function mostraAtor(){
  image(vaca, xAtor, yAtor, pxAtor, pxAtor);
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor-=3;
  }
  if(keyIsDown(DOWN_ARROW)){
    yAtor+=3;
  }
}

function colisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  
  for(let i =0; i<carros.length; i++){
    colide = collideRectCircle(xCarros[i], yCarros[i], 50 ,40, xAtor, yAtor, pxAtor);
    if(colide){
      colidiu();
      somColisao.play();
    }
  }
  if(yAtor > 370){
    colidiu();
  }
}

function colidiu(){
  yAtor = 370;
  xAtor = 100;
  colide = false;
  if(pontos > 0){
     pontos--;
   }
}