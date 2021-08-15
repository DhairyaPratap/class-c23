const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var tower1;

function preload(){
    backgroundImg=loadImage("./assests/background.gif")
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    angle=-PI/4
    ground=new Ground(0,600,1200,1)
    

    tower1=new tower(100,350,150,300)
    cannon=new Cannon(180,110,100,50,angle)

}

function draw(){
    background(189);
    image(backgroundImg,0,0,width,height)
    Engine.update(engine);
    ground.display()
    tower1.display()
    cannon.display()
}
