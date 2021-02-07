const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,platform;
var block,Polygon;
var score=0;

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    ground=new box(600,670,1500,30)

    platform=new box(400,240,700,20)

    block1=new block(390,155,30,40)
    block2=new block(420,195,30,40)
    block3=new block(390,195,30,40)
    block4=new block(360,195,30,40)
    block5=new block(450,235,30,40)
    block6=new block(420,235,30,40)
    block7=new block(390,235,30,40)
    block8=new block(360,235,30,40)
    block9=new block(330,235,30,40)

    slingshot=new Slingshot(polygon.body,pointB={x:100,y:150})

    Polygon=new polygon(100,100)
    
}
function draw(){
    textSize(30)
    fill("white")
    text("Score"+score,width-300,50)
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    Polygon.display();
    platform.display();
    ground.display();
    slingshot.display();
}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    slingshot.fly()
}
function keypressed(){
    if( keyCode=32){
        slingshot.attach(this.polygon)
    }
    
}