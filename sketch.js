//Create variables here
var dog;
var happyDog;
var database;
var food
var foodStoke;
function preload()
{
	//load images here
  dogImg=loadImage("images/dogImg.png");
  happyDog=loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database();
  dog=createSprite(250,250,10,10);
  dog.addImage(dogImg);
 dog.scale = 0.15;
  
  foodStock=database.ref("food");
  foodStock.on("value",readStock);
  textSize(20)


  
}


function draw() {  
  background("46,139,87")
  if(keyWentDown(UP_ARROW)){
    writeStock(food)
    dog.addImage(happyDog);
  }


  drawSprites();
    //add styles here
  fill(255,255,254);
  stroke("black");
  
  textSize(13);
  text("note : press up_arrow key to feed milk to tom",130,10,300,20);


}
function readStock(data){
  food = data.val();
  }

  function writeStock(x){
    if(x <= 0){
      x = 0;
    }
    else{
      x = x-1;
    }
      database.ref("/").update({
        Food : x,
      })
    }




