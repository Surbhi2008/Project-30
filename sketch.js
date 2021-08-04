const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var stone,boy,polygon_Img;

function preload()
{
  polygon_Img = loadImage('polygon.png');
}

function setup() {
	createCanvas(1200, 500);
  engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  floor = new Ground(600,482.5,1200,35);
  stand1 = new Ground(490,402.5,250,15);
  stand2 = new Ground(900,200,250,15);

  block1 = new Box(400,372.5,30,40);
  block2 = new Box(430,372.5,30,40);
  block3 = new Box(460,375.5,30,40);
  block4 = new Box(490,375,30,40);
  block5 = new Box(520,375,30,40);
  block6 = new Box(550,375,30,40);
  block7 = new Box(580,375,30,40);
  
  block8 = new Box(430,335,30,40);
  block9 = new Box(460,335,30,40);
  block10 = new Box(490,335,30,40);
  block11 = new Box(520,335,30,40);
  block12 = new Box(550,335,30,40);

  block13 = new Box(460,295,30,40);
  block14 = new Box(490,295,30,40);
  block15 = new Box(520,295,30,40);

  block16 = new Box(490,255,30,40);



  block17 = new Box(840,175,30,40);
  block18 = new Box(870,175,30,40);
  block19 = new Box(900,175,30,40);
  block20 = new Box(930,175,30,40);
  block21 = new Box(960,175,30,40);

  block22 = new Box(870,135,30,40);
  block23 = new Box(900,135,30,40);
  block24 = new Box(930,135,30,40);

  block25 = new Box(900,95,30,40);

  polygon = Bodies.circle(150,280,20);
  World.add(world,polygon);

  slingshot = new Slingshot(this.polygon,{x:100,y:250});


}


function draw() {
  rectMode(CENTER);
  background(56,44,44);
  Engine.update(engine);

  

  floor.display();
  stand1.display();
  stand2.display();
  fill("lightblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
  fill("lightblue");
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  fill("turquoise");
  block22.display();
  block23.display();
  block24.display();
  fill("pink");
  block25.display();

  imageMode(CENTER);
  image(polygon_Img,polygon.position.x,polygon.position.y,40,40);

  slingshot.display();
}

function mouseDragged(){
	Matter.Body.setPosition(this.polygon,{x: mouseX, y: mouseY });
}

function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    slingshot.attach(this.polygon);
    Matter.Body.setPosition(this.polygon,{x: 150, y: 280 });
  }
}