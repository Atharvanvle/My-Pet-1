//Create variables here
var database;
var dog,dogIMG,happyDog,happyDogIMG;
var foodS,foodStock;
var database;

function preload()
{
  dogIMG=loadImage("images/dog.png");
  happyDogIMG=loadImage("images/dog2.png");
}

function setup() {
  createCanvas(900,500);
  
  database = firebase.database();
  
   dog = createSprite(700,250,20,20);
   dog.addImage(dogIMG);
   dog.scale=0.2;

   foodStock=database.ref('food');
   foodStock.on("value",readStock);
}



function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
     writeStock(foodS);
     dog.addImage(happyDogIMG)
     
  }
  /*fill("white");
  textSize(12);
  text("foodStock : ",660,160);*/

  fill("red");
  textSize(18);
  //stroke(1);
  text("NOTE:use up arrow to feed lucky pedigree",300,20);

  
  drawSprites();
  //add styles here

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
  

  database.ref('/').update({food:x})
}
  


