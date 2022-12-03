let estrada;
let vaca;
let carro, carros2, carros3
let carros;

let somTrilha, somColisao, somPonto;

function preload(){
  vaca = loadImage("imagens/ator-1.png")
  estrada = loadImage("imagens/estrada.png");
  carro = loadImage("imagens/carro-1.png");
  carro2 = loadImage("imagens/carro-2.png");
  carro3 = loadImage("imagens/carro-3.png");
  carros = [carro, carro2, carro3, carro3, carro2, carro];
  
  somTrilha = loadSound("sons/trilha.mp3");
  somColisao = loadSound("sons/colidiu.mp3");
  somPonto = loadSound("sons/pontos.wav");
}