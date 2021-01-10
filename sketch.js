const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

//variables
var ball, playerPaddle;
var mouseX;
function setup() {
  //canvas
  createCanvas(400,800);

  //engine
  engine = Engine.create();
  world = engine.world;

  //mouseY
  world.mouseX = mouseX;
  
  //objects
  ball = new Ball(200,500,10);
  playerPaddle = new PlayerPaddle(175 , 625 , 50 , 10)

	Engine.run(engine);
}

function draw() {
  Engine.update(engine);

  //background
  background(0);
  playerPaddle.x = mouseX
  
  //displaying
  ball.display();  
  playerPaddle.display();
}