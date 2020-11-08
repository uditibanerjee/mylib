var fixedRect, movingRect;


function setup() {
  createCanvas(800,800);
  fixedRect=createSprite(400, 100, 50, 50);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;
  movingRect=createSprite(400, 600, 80, 50);
  movingRect.shapeColor="green";
  movingRect.debug=true;
  gameObject1=createSprite(50, 100, 80, 50);
  gameObject1.shapeColor="green";
  gameObject1.debug=true;
  gameObject2=createSprite(650, 100, 80, 50);
  gameObject2.shapeColor="green";
  gameObject2.debug=true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  gameObject1.velocityX=+5;
  gameObject2.velocityX=-5;
}

function draw() {
  background(220);  
 // movingRect.x=World.mouseX;
 // movingRect.y=World.mouseY;
/*if (isTouching(gameObject2,movingRect)){
  gameObject2.shapeColor="red";
  movingRect.shapeColor="red";
}
else{
  gameObject2.shapeColor="green";
  movingRect.shapeColor="green";
}*/
  bounceOff(gameObject1,gameObject2)
  bounceOff(movingRect,fixedRect);
  drawSprites();
}

