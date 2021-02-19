var dropObj, drops = [];
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	for(var i = 0; i < 256; i++ ){
		dropObj = new Drop(random(0,800), random(0,500));
		drops.push(dropObj);
	}
  //Create the Bodies Here.
  
 	Engine.run(engine);
 
}


function draw(){
  rectMode(CENTER);
  background(0);
  for(i = 0; i < 256; i++){
	drops[i].display();
  }
  drawSprites();
}
