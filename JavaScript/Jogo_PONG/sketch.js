//variáveis da bolinha
let xBolinha = 300;
let yBolinha = 200;
let diametro = 12;
let raio = diametro / 2 ;
let colidiu = false;
let velocidadeXBolinha = 15;
let velocidadeYBolinha = 15;


//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let raqueteComprimento = 8;
let raqueteAltura = 90;

//raquete do oponente
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;
let chanceDeErrar = 0;

//variaves do placar
let meusPontos = 0; 
let pontosOponente = 0;

//sons do jogo

let sonRaquete;
let ponto;
let trilha;


function preload(){
  trilha = loadSound("trilha.mp3");
  raquete = loadSound("raquetada.mp3");
  ponto = loadSound("ponto.mp3");
}

function setup() {
  createCanvas(600, 400);
  //trilha.loop();
  
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisaoBorda();
  mostraRaquete(xRaquete, yRaquete);
  movimentaMinhaRaquete();
  verificaColisaoRaquete(xRaquete, yRaquete);
  mostraRaquete(xRaqueteOponente, yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente, yRaqueteOponente);
  incluiPlacar();
  marcandoPlacar();
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro);
}

function movimentaBolinha(){
  xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
}

function verificaColisaoBorda(){
  if (xBolinha + raio> width ||
     xBolinha - raio< 0){
     velocidadeXBolinha *= -1;
     ponto.play();
  }
  if (yBolinha + raio> height ||
     yBolinha - raio < 0){
     velocidadeYBolinha *= -1;
  }
  
}

function mostraRaquete(x, y){
  rect(x, y, raqueteComprimento, 
      raqueteAltura);
}


function movimentaMinhaRaquete(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}


/*function verificaColisaoRaquete(){
  if (xBolinha - raio < xRaquete + raqueteComprimento && 
      yBolinha - raio < yRaquete + raqueteAltura && 
      yBolinha + raio > yRaquete){
    velocidadeXBolinha *= -1;
  }
}*/

function verificaColisaoRaquete(x, y) {
    colidiu = collideRectCircle(x, y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
    if (colidiu) {
        velocidadeXBolinha *= -1;
      raquete.play();
    }
}

function movimentaRaqueteOponente() {
  
  /*if (keyIsDown(87)){
    yRaqueteOponente -= 10;
  }
  if (keyIsDown(83)){
    yRaqueteOponente += 10;
  }*/
  
  velocidadeYOponente = yBolinha - yRaqueteOponente - raqueteComprimento / 2 - 30;
    yRaqueteOponente += velocidadeYOponente + chanceDeErrar;
  
  calcularChaceErro();
}

function calcularChaceErro(){
  if(pontosOponente >= meusPontos+3){
    chanceDeErrar = 30;
  }
  if(pontosOponente <= meusPontos-3){
    chanceDeErrar -=3;
  }
}

function incluiPlacar(){
  stroke(255);
  textSize(20);
  textAlign(CENTER);
  fill(color(255, 40,0));
  rect(130, 10, 40, 20);
  rect(450, 10, 40, 20);
  fill(255);
  text(meusPontos, 150, 26);
  text(pontosOponente, 470, 26);
}

function marcandoPlacar(){
  if(xBolinha - raio > 590){
    meusPontos +=1;
  }
  if(xBolinha + raio <10){
    pontosOponente+=1;
  }
}

function bolinhaNaoFicaPresa(){
    if (XBolinha - raio < 0){
    XBolinha = 23
    }
}
