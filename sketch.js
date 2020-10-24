var car,wall;
var speed,weigth;



function setup() {
  createCanvas(1600,800);
  car =createSprite(50, 200, 50, 50);
  wall=createSprite(1500,300,45,height/2)
  

  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background("black");  

  car.velocityX=speed;

  touch();
  drawSprites();
}

function touch(){

  if (wall.x-car.x < (car.width+wall.width)/2)
  {
    car.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;
    if (deformation>180)
    {
      car.shapecolor=color(225,0,0);

    }

    if(deformation<180 && deformation>100)
    {
      car . shapeColor=color(230,230,0);

    }

    if (deformation<100)
    {
      car.shapeColor=color(0,225,0);
    }
  }

}