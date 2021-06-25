var tom, racoon;
var rr;
var road,roadImage;

function preload(){
roadImage = loadImage("Road.png");
}

function setup(){
   createCanvas(displayWidth,displayHeight);
   road = createSprite(width/2,200);
   road.addImage(roadImage);
   road.velocityY=4;
   tom = createSprite(width/2,height-20, 50, 50);
   tom.shapeColor= "red";
   racoon = createSprite(width/2,height-520,50,50);
   racoon.shapeColor="blue";
   racoon.velocityX= 3;
   racoon.velocityY= 0;
   
}

function draw (){
background(roadImage)
if(road.y>height){
  road.y= height/2;
}
if(keyIsDown(RIGHT_ARROW)){
tom.velocityX=4;
tom.velocityY=0;
}
if(keyIsDown(LEFT_ARROW)){
  tom.velocityX=-4;
  tom.velocityY=0;
  }
  // if(World.frameCount%300==0){
  //   rr=random(0,displayWidth);
  //   racoon.x= rr;  
  // }
createEdgeSprites();
// racoon.bounceOff(edges);
drawSprites();
}
