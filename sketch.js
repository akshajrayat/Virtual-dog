var dog,happydog,foodS,foodStock,database;
function preload(){
 dog =loadImage("dog.png")
 happydog =loadImage("happydog.png")
}
function setup() {
  database = firebase.database();
  console.log(database);
  createCanvas(500,500); 
  dog1 = createSprite(400, 200, 50, 50);
  dog1.addImage(dog);
  foodStock=database.ref('food')
  foodStock.on("value",readStock);
}

function draw() {
  background(46, 139, 87); 
  dog1.addImage(dog)
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog1.addImage(happydog);
    
  }

  drawSprites();
}
function readStock(data){
   foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1
  }
  }
database.ref('food').update({
  Food:x
})
