
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball1;
var ball2;
var box1;
var ground1;
var box2;
var box3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	ball1=new ball(900,450,70);
	ball2=new ball(200,200,50);
	box1=new Box(700,320,100,100);
	box2=new Box(200,200,50,50);
	box3=new Box(30,40,60,30);
	ground1 = new ground(600,height,1200,20)
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball1.display();
  ball2.display();
  box1.display();
  box2.display();
  box3.display();
  ground1.display();
  drawSprites();
 
}



