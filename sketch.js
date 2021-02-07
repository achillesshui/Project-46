const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Engine = Matter.Engine;
const Constraint = Matter.Constraint;

var engine, world;
var monkey;
var fruits;
var veggies;
var rope;
var ground;
var jungle, bg;
var tree1IMG, tree2IMG, tree3IMG, tree4IMG;

function preload() {
  jungle = loadImage("images/bg1.jpg");
}

function setup() {
  createCanvas(displayWidth, displayHeight);

  engine = Engine.create();
  world = engine.world;
  bg = createSprite(1900, displayHeight/2, 10,10);
  bg.addImage(jungle);
  monkey = new Monkey(500, 200);
  rope = new Rope(monkey.body, {x:400, y:400});
}

function draw() {
  background(225);  
  Engine.update(engine);
  drawSprites();
  monkey.display();
  rope.display();
  console.log(bg.x)
  bg.velocityX = -10;
  if(bg.x<-300){
    bg.x = 1900;
  }
 
}

function spawnTrees() {
  if(frameCount% 80 == 0) {
    
  }
}