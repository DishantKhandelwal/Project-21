var thickness , wall;
var bullet , speed , weight;


function setup() {
  createCanvas(1600,400);
  speed = random(223,331);
  weight = random(30,52);
  thickness = random(22,83);
  bullet = createSprite(50,200,10,5);
  wall = createSprite(1200,200,thickness,200);
 wall.shapeColor = color(80,80,80);
 bullet.shapeColor = color(255,167,0);
 bullet.velocityX = speed;
  
  
}

function draw() {
  background(0,0,0); 
  
  if(wall.isTouching(bullet)){
    
    deform();
  }

  bullet.collide(wall);
  drawSprites();
}

function deform() {
  var damage;
  damage = (0.5*weight*speed*speed)/thickness*thickness*thickness;
  if(damage<10){
    wall.shapeColor = color(0,255,0);
  } else if(damage>10){
    wall.shapeColor = color(255,0,0);
  }

}