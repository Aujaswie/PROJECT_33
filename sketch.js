
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var gr;

var particles = [];
var plinkos =[];
var division = [];

var divisionHeight= 300;

var score = 0;

var particle ;

var turn = 0 ;

var gameState ;



function setup() {  createCanvas(720,800);
	

	engine = Engine.create();
	world = engine.world;


	ground_1=new Ground(360,800,720,20);

	for (var k=0; k <=innerWidth; k= k+80){
		division.push(new Divisions(k,height-divisionHeight/2,15,divisionHeight));
   }
   
	for (var j=25; j<=width; j=j+50)
	{
		plinkos.push(new Plinko(j,75,10));
   }
   
	for (var j=50; j<=width-10; j=j+50)
	{
		plinkos.push(new Plinko(j,175,10));
   }
   
	for (var j=25; j<=width; j=j+50)
	{
		plinkos.push(new Plinko(j,275,10));
   }
   
	for (var j=50; j<=width-10; j=j+50)
	{
		plinkos.push(new Plinko(j,375,10));
	}

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0,0,0);
  Engine.update(engine);

  noStroke();
  textSize(30)
  fill("lavender")
  text("Score   "+ score, width-450, 50)
  text("500" , 20, 600);
  text("500" , 90, 600);
  text("500" , 170, 600);
  text("1000" , 250, 600);
  text("1000" , 330, 600);
  text("1000" , 410, 600);
  text("1500" , 490, 600);
  text("1500" , 570, 600);
  text("1500" , 650, 600);

  ground_1.display(); 
  
  
  if(frameCount%50===0){
	particles.push(new Particle(random(width/2-10,width/2+10),10,10));
}

  for(var k=0;k<division.length;k++){
	division[k].display();
  }


  for(var a=0;a<particles.length;a++){
	particles[a].display();
  }


  for(var b=0;b<plinkos.length;b++){
	plinkos[b].display();
  }

  if (particle.body.position.x > 180 && particle.body.position.x < 0)
  {
			score=score+500;      
			particle=null;
			if ( turn>= 5) gameState ="end";                         
		 
  

		else if (particle.body.position.x < 180 && particle.body.position.x > 400 ) 
		{
			  score = score + 1000;
			  particle=null;
			  if ( turn>= 5) gameState ="end";

		}
		else if (particle.body.position.x < 660 && particle.body.position.x > 400 )
		{
			  score = score + 1500;
			  particle=null;
			  if ( turn>= 5)  gameState ="end";

		}      
		
	}
  


  

  drawSprites();
 
}
function mousePressed(){
	if (gameState == "end"){
		turn ++ ;
		particle = new Particle (mouseX , 10 ,10 ,10);
	}
}




