var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
 
 
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  box = createSprite(500, 400, 50, 50);
  box.shapeColor= "blue";
  
  box1 = createSprite(300, 200, 50, 50);
  box1.shapeColor= "orange";
  box1.velocityY = +3;

  box2 = createSprite(300, 500, 50, 50);
  box2.shapeColor= "pink";
  box2.velocityY = -3;

  
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(isTouching(box1,movingRect))
 {
  box1.shapeColor = "red";
  movingRect.shapeColor = "red";
 }
 else
 {
  box1.shapeColor = "orange";
  movingRect.shapeColor = "green";
 }


bounceOff(box1,box2);

  drawSprites();
}

