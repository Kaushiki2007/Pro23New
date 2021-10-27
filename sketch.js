	var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
	var packageBody,ground,box,package;
	var rect_1,rect_2,rect_3;
	const Engine = Matter.Engine;
	const World = Matter.World;
	const Bodies = Matter.Bodies;
	const Body = Matter.Body;

	function preload()
	{
		helicopterIMG=loadImage("helicopter.png")
		
	}

	function setup() {
		createCanvas(800, 700);
		rectMode(CENTER);
		engine = Engine.create();
		world = engine.world;
		
		box = new Box(width/2, 200);

		helicopterSprite=createSprite(width/2, 200, 10,10);
		helicopterSprite.addImage(helicopterIMG)
		helicopterSprite.scale=0.6

		groundSprite=createSprite(width/2, height-35, width,10);
		groundSprite.shapeColor=color(255)
		
		rect_1=createSprite(400,680,220,35);
		rect_1.shapeColor="red";

		rect_2=createSprite(280,640,28,210);
		rect_2.shapeColor="red";

		rect_3=createSprite(500,640,28,210);
		rect_3.shapeColor="red";

		//Create a Ground
		ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
		World.add(world, ground);
		Engine.run(engine);
	
	}

	function draw() {

	rectMode(CENTER);
	background(0);
	box.display();
    drawSprites();
	}

	function keyPressed() {

	if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
		Matter.Body.setStatic(box.body,false)
	} }