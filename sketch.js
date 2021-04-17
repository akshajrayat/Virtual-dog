var dog,happydog,foodS,foodStock,database;
function preload(){
 dog =loadImage("dog.png")
 happydog =loadImage("happydog.png")
}
function setup() {
  createCanvas(500,500); 
  dog = new createSprite(400, 200, 50, 50);
}

function draw() {
  background(46, 139, 87); 
  drawSprites();
}