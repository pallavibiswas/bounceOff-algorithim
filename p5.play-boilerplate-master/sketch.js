var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 50, 30, 80);
  fixedRect.shapeColor = "blue";
  fixedRect.velocityY = 2;
  movingRect = createSprite(400,350,80,30);
  movingRect.shapeColor = "blue";
  movingRect.velocityY = -2;
}

function draw() {
  background(0);
  
  movingRect.debug = true;
  fixedRect.debug = true;

  //movingRect.x = mouseX;
  //movingRect.y = mouseY;

  if (movingRect.height/2 + fixedRect.height/2 > movingRect.y - fixedRect.y && movingRect.height/2 + fixedRect.height/2 > fixedRect.y - movingRect.y) {
    fixedRect.velocityY = fixedRect.velocityY * (-1);
    movingRect.velocityY = movingRect.velocityY * (-1);
  }
  if(movingRect.width/2 + fixedRect.width/2 > movingRect.x - fixedRect.x && movingRect.width/2 + fixedRect.width/2 > fixedRect.x - movingRect.x){
    fixedRect.velocityX = fixedRect.velocityX * (-1);
    movingRect.velocityX = movingRect.velocityX * (-1);
  }
  drawSprites();
}