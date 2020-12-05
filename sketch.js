var wall, thickness;
var bullet, speed, weight;
var bulletRightEdge, wallLeftEdge;

function setup(){
createCanvas(1600, 400);

bullet = createSprite(100, 200, 70, 10);
bullet.shapeColor = "white";


thickness = random(22, 83);
weight = random(32, 50);
speed = random(223, 321);

bullet.velocityX = speed;

wall = createSprite(1200, 200, thickness, height/2);
wall.shapeColor = color(80, 80, 80);

}

function draw(){
background("skyblue");

if(collide(bullet, wall)) {
    bullet.velocityX = 0;

    var damage = 0.5 * weight * speed * speed / thickness * thickness * thickness;
    if(damage > 10){
        wall.shapeColor = "red";
    }

    if(damage < 10){
        wall.shapeColor = "green";
    }

}


drawSprites();
}

function collide(lbullet, lwall){
    bulletRightEdge = lbullet.x + lbullet.width;
    wallLeftEdge = lwall.x;
    
    if(bulletRightEdge >= wallLeftEdge){
       return true;
    } else{
      return false;
    }
}