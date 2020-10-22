
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var drops = [];
var lightning;
var lightningGroup;
var rain1;
var man;
var maxDrops = 100;

function setup() {
    createCanvas(500, 600);
    
	engine = Engine.create();
    world = engine.world;

    man = new Umbrella(250,420,100,100);

    rain1 = new Drop(random(50,450),0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");

  if(frameCount % 1 === 0) {
    drops.push(new Drop(random(50, 450), 10))
  }

  for(var i = 0; i < drops.length; i++) {
    drops[i].display();
  }

  rain1.display();

  man.display();
  
  drawSprites();
 
}