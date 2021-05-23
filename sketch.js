var bullet,speed, weight;
var thickness,wall;
function setup() {
  createCanvas(1600,400);
  car = createSprite(50,200,50,50);
  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color (80,80,80);
  car.velocityX = speed;
  createSprite(400, 200, 50, 50);
  speed = random(55,90);
  weight = random(223,321);
  thickness = random(30,52);
  
}

function draw() {
  background(255,255,255);  
  car.x = World.mouseX;
  car.y = World.mouseY;
  if (hasCollided (bullet,wall)) {
  bullet.velocityX = 0;
 var damage  = 0.5*weight*speed*speed/(thickness*thickness*thickness);
 
 if (damage>10){
   wall.shapeColor = color(255,0,0);
 }
 if (damage){
   car.shapeColor = color(230,230,0);
 }
 if (damage<10){
   wall.shapeColor = color(0,255,0);
 }
   
 

  function hasCollided(lbullet,lwall)
  bulletRightEdge = lbullet.x+lbullet.width;
  wallLeftEdge = lwall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}
drawSprites();
}