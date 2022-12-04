function setup() {
  createCanvas(600, 400);
  somTrilha.loop();
}

function draw() {
  background(estrada);
  mostraAtor();
  movimentaAtor();
  mostraCarro();
  movimentaCarro();
  resetCarros();
  colisao();
  placar();
}