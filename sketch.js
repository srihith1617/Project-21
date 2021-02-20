var bullet, wall; 
var speed, weight,damage;
var thickness;
function setup() {
  thickness=random(22,83);
  createCanvas(1600,400);
  speed=random(30,52);
  weight=random(223,321);
  bullet= createSprite(50,200,50,10);
  wall= createSprite(1000,200,thickness,200);
  bullet.velocityX= speed;
}

function draw() {
  background(255,255,255);
  drawSprites();
  if (wall.x-bullet.x<((wall.width+bullet.width)/2)){
    bullet.velocityX=0;
    damage= 0.5*weight*speed^2/thickness^3;
    if (damage>10) {
      bullet.shapeColor="red";
    } else {
      bullet.shapeColor="green";
    }
    
  }
}