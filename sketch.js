var movesquare, staysquare;
function setup() {
  createCanvas(800,400);
  movesquare=createSprite(400, 200, 50, 50);
  staysquare= createSprite(200,200,50,50);
  movesquare.shapeColor="red";
  staysquare.shapeColor="yellow";
  movesquare.velocityX=(movesquare.x-staysquare.x)/400;
  movesquare.velocityY=(movesquare.y-staysquare.y)/400;
}

function draw() {
  background(0);
  if (mouseIsPressed) {
  movesquare.x=mouseX;
  movesquare.y=mouseY;
  movesquare.velocityX=(staysquare.x-movesquare.x)/100;
  movesquare.velocityY=(staysquare.y-movesquare.y)/100;
  }
  bounceOff(movesquare,staysquare);
  drawSprites();
}
function bounceOff(square1,square2) {
  if (square1.x-(square1.width/2)<=square2.x+(square2.width/2)&&
  square1.x+(square1.width/2)>=square2.x-(square2.width/2) &&
  square1.y-(square1.width/2)<=square2.y+(square2.width/2)&&
  square1.y+(square1.width/2)>=square2.y-(square2.width/2)) {
    square1.velocityX=-(square1.velocityX);
    square1.velocityY=-(square1.velocityY);
}}