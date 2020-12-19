
var monkey , monkey_running;
var ground;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0;
var survivalTime = 0;

function preload(){
  
  
  monkey_running=
  loadImage("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
  FoodGroup = new Group;
  ObstacleGroup = new Group;
  
}



function setup() {
  createCanvas(400,400)
  
  monkey = createSprite(40,350,10,10);
  monkey.addImage(monkey_running);
  monkey.scale = 0.11
  
  ground = createSprite(200,380,500,10)
  ground.velocityX = -4;
  ground.scale = 2;
  
 

  
}


function draw() {
  background("white");
   if(ground.x < 200){
     ground.x = ground.width/2;
   }
  monkey.collide(ground);
  
  Stone();
  food();
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate())
  text("survivalTime: " + survivalTime,50,50)
  
  if(keyDown("space") && monkey.y > 250){
     monkey.velocityY = -3;
  }
  monkey.velocityY = monkey.velocityY + 1.5;
  
  console.log(frameCount);
  
  drawSprites();
}

function food(){
  banana = createSprite(400,-70,10,10);
  banana.addImage(bananaImage);
  banana.scale = 0.11;
  banana.velocityX = -2;
  banana.lifetime = 400;
  FoodGroup.add(banana);
  if(frameCount%80 === 0){
    banana.y = Math.round(random(250,280));
  }
}

function Stone(){
  if(frameCount%300 === 0){
    obstacle = createSprite(380,350,15,15);
    obstacle.addImage("stone", obstacleImage);
    obstacle.scale = 0.18;
    obstacle.velocityX = -2
    obstacle.Lifetime = 100;
    ObstacleGroup.add(obstacle);
  }

}







