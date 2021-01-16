
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boyImage, boy;
var mango1, mango2,mango3,mango4,mango5,tree,ground, treeImage;
var stone, launcher;

function preload()
{
  boyImage = loadImage("boy.png");
  treeImage = loadImage("tree.png")
}

function setup() {
	createCanvas(1800, 700);

	engine = Engine.create();
  world = engine.world;
  
    boy = createSprite(200,620,20,20);
    boy.addImage(boyImage);
    boy.scale = 0.1;

  //Create the Bodies Here.
  ground = new Ground(600,700,2000,100);
  mango1 = new Mango(910,200,50);
  mango2 = new Mango(900,328,50);
  mango3 = new Mango(810,340,50);
  mango4 = new Mango(880,340,50);
  mango5 = new Mango(1080,260,55);
  stone = new Stone(100,200,50);
  launcher = new Launcher(stone.body,{x:150,y:550});
  
  tree = createSprite(910,370,390,1);
  tree.addImage(treeImage);
  tree.scale = 0.5;
  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("cyan");
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  ground.display();
  stone.display();
  launcher.display();

 detectCollision(stone,mango1);
 detectCollision(stone,mango2);
 detectCollision(stone,mango3);
 detectCollision(stone,mango4);
 detectCollision(stone,mango5);

  drawSprites();
 
}

function keyPressed(){
  if(keyCode === 32){
    Matter.Body.setPosition(stone.body,{x:160, y:550});
    launcher.attach(stone.body);
  }
}

function detectCollision(lstone,lmango){
  
  mangoBodyPosition = lmango.body.position;
  stoneBodyPosition = lstone.body.position;
  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
   if (distance <= lmango.radius+lstone.radius ){
     Matter.Body.setStatic(lmango.body,false);
   }
}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  launcher.fly();
}