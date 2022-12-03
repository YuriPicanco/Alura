let pontos = 0;

function placar(){
  textSize(20);
  fill(255,0,0);
  rect(350,10,40,20);
  fill(255);
  text(pontos, 363, 25);
  
  
  if(yAtor < 25){
    yAtor = 366;
    xAtor = 100;
    somPonto.play();
    pontos++;
    
  }
}