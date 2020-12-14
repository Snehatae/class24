const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,bird;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,550,70,70);
    box2 = new Box(900,550,70,70);
    box3= new Box (700,450,70,70);
    box4= new Box (900,450,70,70);
    ground = new Ground(600,height,1200,20);
    bird= new Bird(200,200);
    pig= new Pig(800,550);
    log1= new Log(800,500,300,PI/2);
    log2= new Log(800,400,300,PI/2);
    pig2= new Pig(800,450);
    box5= new Box(800,350,70,70);
    log3=new Log(750,350,150,PI/7);
    log4=new Log(850,350,150,-PI/7);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    bird.display();
    pig.display();
    log1.display();
    box3.display();
    box4.display();
    log2.display();
    pig2.display();
    log3.display();
    log4.display();
}