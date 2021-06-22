const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var snow=[];

var engine, world;
var platform,platformImg;
var playState="serve"

function preload(){
 platformImg=loadImage("snow2.jpg");
 
}

function setup() {
  createCanvas(1300,700);
    engine = Engine.create();
    world = engine.world;
    platform=createSprite(450,30,2,2);
    platform.addImage(platformImg);
    platform.scale=1.75;

  
 

}

function draw() {
  background(0);  

    Engine.update(engine);
 platform.display();


 drawSprites();

 if(frameCount%1===0)
 {
   snow.push(new Snow(random(0,1400),10,-10,10))
 }
  
 for (var j=0;j<snow.length;j++)
 {
   snow[j].display()
 }  


   }
  
 
