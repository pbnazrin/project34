//Create variables here
var dog,happyDog,database,foodS,foodStock
function preload()
{
  //load images here
  doggyHappy = loadImage("images/happydog.png")
  doggy = loadImage("images/Dog.png")
}

function setup() {
  createCanvas(500,500);
  dog = createSprite(200,300,50,50);
  dog.addImage(doggy);
  dog.scale= 0.3;
    database = firebase.database();
  foodStock = database.ref('Food');
  foodStock.on("value",readStock,showError)
  
}


function draw() {  
background(46,139,87);

if(keyWentDown("up")){
  writeStock(foodS);
  dog.addImage(doggyHappy);
}
  
  //add styles here
  
  fill(255,255,254);
  stroke("black");
  textSize(20);
text("Food Stock "+foodS,225,30);
drawSprites();
}

function readStock(data){
   foodS = data.val();
}

function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  } 
  database.ref('/').update(
    {
      Food : x
    }
  )
}

function showError(){
  console.log("ERROR");
}

