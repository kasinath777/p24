
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var iron,hammer,ground,sand,sand2,sand3,sand4,sand5,sand6,sand7,rubber;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	iron = new Iron(500,650,40,40);
	hammer = new Hammer(400,400,60,20);

	ground = new Ground(600,height,1200,20);

	sand = new Circle(40,650,5);
	sand2 = new Circle(45,650,5)
	sand3 = new Circle(48,650,5)
	sand4 = new Circle(37,650,5)
	sand5 = new Circle(52,650,5)
	sand6 = new Circle(55,650,5)
	sand7 = new Circle(59,650,5)

	rubber= new Circle(590,650,20);

	//Create the Bodies Here.
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  hammer.display();
  iron.display();
  ground.display();
  sand.display();
  sand2.display();
  sand3.display();

  sand4.display();
  sand5.display();
  
  sand6.display();

  sand7.display();
  rubber.display();

  
  drawSprites();
 
}



