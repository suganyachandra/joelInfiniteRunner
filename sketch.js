var missileImage


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	//helicopterIMG=loadImage("helicopter.png")
	//packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(1200, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	missileImage = loadImage("missile.png");

	//packageSprite=createSprite(width/2, 80, 10,10);
	//packageSprite.addImage(packageIMG)
	//packageSprite.scale=0.2

	//helicopterSprite=createSprite(width/2, 200, 10,10);
	//helicopterSprite.addImage(helicopterIMG)
	//helicopterSprite.scale=0.6

	//missile= new Missile(250,250,75,75);

	helicopter = new Helicopter(width / 2, 200, 200, 100);

	//groundSprite=createSprite(width/2, height-35, width,10);
	//groundSprite.shapeColor=color(255)

	//rectangle1=createSprite(400,650,200,20);

	//rectangle2=createSprite(300,610,20,100);
	//rectangle3 = createSprite(500,610,20,100);





	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	//World.add(world, packageBody);



	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	//World.add(world, ground);


	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);
	

	helicopter.display();
	


	camera.position.x= displayWidth/2;
	camera.position.y=helicopter.body.position.y;



	spawn();

	
	drawSprites();

}

function spawn() {
	if (frameCount % 60 === 0) {
		var missile = createSprite(150, random(1, 1200), 10, 40);
		missile.addImage("missile", missileImage);
		missile.scale = 0.05;
		missile.velocityX = 4;
	}
}

function keyPressed() {
	if (keyCode === 38) {
		console.log('up');
		console.log(helicopter.body.position.x+"---"+helicopter.body.position.y)

		Matter.Body.setPosition(helicopter.body,{x:helicopter.body.position.x,y:helicopter.body.position.y-50})


	}
	if (keyCode === 40) {
		console.log('down');
		console.log(helicopter.body.position.x+"---"+helicopter.body.position.y)

		Matter.Body.setPosition(helicopter.body,{x:helicopter.body.position.x,y:helicopter.body.position.y+50})



	}
}