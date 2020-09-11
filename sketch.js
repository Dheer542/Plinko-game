const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world;
var particle = [];
var plinko = [];
var divisions = [];

var divisionHeight = 300;
function setup() {
  createCanvas(480,800);
  
 
  engine = Engine.create(); 
  world = engine.world; 
 
 platform1 = new Ground(240,790,480,20);
 division1 = new Divisions(180,750,10,500);
division2 = new Divisions(90,750,10,500);
division3 = new Divisions(270,750,10,500);
division4 = new Divisions(360,750,10,500);
division5 = new Divisions(460,750,10,500);
division6 = new Divisions(10,750,10,500);
//first row of plinkos
plinko1 = new plinkos(40,40,10);
plinko2 = new plinkos(90,40,10);
plinko3 = new plinkos(140,40,10);
plinko4 = new plinkos(190,40,10);
plinko5 = new plinkos(240,40,10);
plinko6 = new plinkos(290,40,10);
plinko7 = new plinkos(340,40,10);
plinko8 = new plinkos(390,40,10);
plinko9 = new plinkos(440,40,10);
//second row of plinkos
plinko21 = new plinkos(10,140,10);
plinko22 = new plinkos(60,140,10);
plinko23 = new plinkos(110,140,10);
plinko24 = new plinkos(160,140,10);
plinko25 = new plinkos(210,140,10);
plinko26 = new plinkos(260,140,10);
plinko27 = new plinkos(310,140,10);
plinko28 = new plinkos(360,140,10);
plinko29 = new plinkos(410,140,10);
plinko30 = new plinkos(460,140,10);
//third row of plinkos
plinko31 = new plinkos(40,240,10);
plinko32 = new plinkos(90,240,10);
plinko33 = new plinkos(140,240,10);
plinko34 = new plinkos(190,240,10);
plinko35 = new plinkos(240,240,10);
plinko36 = new plinkos(290,240,10);
plinko37 = new plinkos(340,240,10);
plinko38 = new plinkos(390,240,10);
plinko39 = new plinkos(440,240,10);
//fourth row of plinkos
plinko41 = new plinkos(10,340,10);
plinko42 = new plinkos(60,340,10);
plinko43 = new plinkos(110,340,10);
plinko44 = new plinkos(160,340,10);
plinko45 = new plinkos(210,340,10);
plinko46 = new plinkos(260,340,10);
plinko47 = new plinkos(310,340,10);
plinko48 = new plinkos(360,340,10);
plinko49 = new plinkos(410,340,10);
plinko50 = new plinkos(460,340,10);

particle1 = new Particle(240,0,10);
}

function draw() {
  background("black");  
  Engine.update(engine);
  platform1.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  plinko1.display();
  plinko2.display();
  plinko3.display();
  plinko4.display();
  plinko5.display();
  plinko6.display();
  plinko7.display();
  plinko8.display();
  plinko9.display();
  plinko21.display();
  plinko22.display();
  plinko23.display();
  plinko24.display();
  plinko25.display();
  plinko26.display();
  plinko27.display();
  plinko28.display();
  plinko29.display();
  plinko30.display();
  plinko31.display();
  plinko32.display();
  plinko33.display();
  plinko34.display();
  plinko35.display();
  plinko36.display();
  plinko37.display();
  plinko38.display();
  plinko39.display();
  plinko41.display();
  plinko42.display();
  plinko43.display();
  plinko44.display();
  plinko45.display();
  plinko46.display();
  plinko47.display();
  plinko48.display();
  plinko49.display();
  plinko50.display();
  particle1.display();
  drawSprites();
}