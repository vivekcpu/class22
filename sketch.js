const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var box;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var object_options ={
        isStatic: true
    }
    var box_options ={
        restitution:1.8
    }
   
    ground= Bodies.rectangle(200,390,400,20,object_options);
    World.add(world,ground);
    box= Bodies.rectangle(200,90,50,50,box_options);
    World.add(world,box);


   
console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    rect(box.position.x,box.position.y,50,50);
}
