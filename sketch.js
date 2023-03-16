var trex, trex_running, edges;
var groundImage;
var ground;

function preload(){
  trex_running = loadAnimation("thief1.png","thief2.png");
  //groundImage = loadImage("ground2.png")
}

function setup(){
  createCanvas(1200,400);
  
  // creating trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  edges = createEdgeSprites();
  
/* ground= createSprite(250, 185, 700, 15)
ground.velocityX= -4;
ground.x= ground.width/2;
ground.addImage("ground", groundImage);*/
  //adding scale and position to trex
  trex.scale = 0.7;
  trex.x = 50
}


function draw(){
  //set background color 
  background("lightgrey");
  
  //logging the y position of the trex
  console.log(trex.y)
  
/*if (ground.x <0){
  ground.x= ground.width/2
}*/

  //jump when space key is pressed
  if(keyDown("space")){
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.5;
  
  //stop trex from falling down
  //trex.collide(ground)
  drawSprites();
}