var monkey;
var bananaGroup, stoneGroup;
var scene, ground;
var bananaImage, monkeyImage, stoneImage;
var sceneImage;
var score;

function preload () {
  
  //Animation Image
  bananaImage = loadImage("banana.png");
  stoneImage = loadImage("stone.png");
  sceneImage = loadImage("jungle.jpg");
  
  //Monkey Animation Image
  monkeyImage = loadAnimation("Monkey_01.png", "Monkey_02.png",
                              "Monkey_03.png", "Monkey_04.png",
                              "Monkey_05.png", "Monkey_06.png",
                              "Monkey_07.png", "Monkey_08.png",
                              "Monkey_09.png", "Monkey_10.png");
}
 
function setup() {
  createCanvas(400, 400);
  
  //Background
  scene = createSprite(200,200,10,10);
  scene.addImage("scene",sceneImage);
  scene.velocityX = -2;
  
  //Group declaration
  stoneGroup = new Group();
  bananaGroup = new Group();
  
  //Ground
  ground = createSprite(200,395,400,5);
  ground.visible = false;
  
  //Monkey 
  monkey = createSprite(40,380,10,10);
  monkey.scale = 0.1;
  monkey.addAnimation("monkey",monkeyImage);
  
  //Score
  score = 0;

}

function draw() {
  background(220);
  
  //Infinite ground
  if (scene.x < 0){         
    scene.x = 200;
  }
  
  //Monkey Jump Controls
  if (keyDown("space")&& monkey.y < 370) { 
      monkey.velocityY = -6;
      }
  monkey.velocityY = monkey.velocityY + 0.3;
    monkey.collide(ground);
  
  if (monkey.isTouching (bananaGroup)){ 
      monkey.scale = monkey.scale + 0.0005;
      //nanaGroup.destroyEach();     
      }
  
  if (monkey.isTouching (stoneGroup)){
      stoneGroup.destroyEach();
  }

  bananas();
  stones();
  drawSprites();
  
  //Score
  fill("white");
  textSize(15);
  text("score:" + score, 200,100);
  score = round(frameCount/30);
}

function bananas (){
  if (frameCount %80===0 ){
    var banana
    banana = createSprite(400,280,10,10);
    banana.scale = 0.07;
    banana.addImage("banana",bananaImage);
    banana.velocityX = -4;
    
    //Assigning a lifetime
    banana.lifetime = 85;
    
    //Adding it to group
    bananaGroup.add(banana);
    
  }
}

function stones(){
  if (frameCount %210===0){
    var stone;
    stone = createSprite(400,385,10,10);
    stone.scale = 0.07;
    stone.addImage("stone", stoneImage);
    stone.velocityX = -6;
    
  //Stone assigned a lifetime
    stone.lifetime = 80;
    
  }
}