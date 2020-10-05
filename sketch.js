var cube1,cube2,cube3;

function setup() {
  createCanvas(800,400);

  cube1 = createSprite(400, 200, 50, 50);
  cube2 = createSprite(100,200,50,50);
  cube3 = createSprite(600,100,50,50);

  cube1.shapeColor = "green";
  cube2.shapeColor = "green";
  cube3.shapeColor = "yellow";

  cube1.debug = true;
  cube2.debug = true;
  cube3.debug = true;
}

function draw() {
  background(0);  

  cube2.x = World.mouseX;
  cube2.y = World.mouseY;

  if(cube2.x - cube1.x < cube1.width/2 + cube2.width/2 && 
    cube1.x - cube2.x < cube1.width/2 + cube2.width/2 &&
    cube2.y - cube1.y < cube1.height/2 + cube2.height/2 && 
    cube1.y - cube2.y < cube1.height/2 + cube2.height/2){

    cube1.shapeColor = "red";
    cube2.shapeColor = "red";
  }
  else{
    cube1.shapeColor = "green";
    cube2.shapeColor = "green";
  }

  drawSprites();
}