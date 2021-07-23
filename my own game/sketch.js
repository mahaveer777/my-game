var zombieImage;
var bg1;
var bg2;
function setup(){
  bg1=loadImage("bg.jpg");
  zombieImage=loadAnimation("npc1.png","npc2.png","npc3.png","npc4.png");

}

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  
  bg2=createSprite(400,200,800,400);
  bg2.addImage("bg1",bg1);
}
function draw() {
  background("white");  
  drawSprites();
}