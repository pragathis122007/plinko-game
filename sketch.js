const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
  
var score =0;
var particles;
var turn = 0;
var plinkos = [];
var divisions = [];
var ground;
var divisionHeight=300;

//var particle;
var gameState = play;

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   if(frameCount%40===0){
    particles.push(new Particle(random(width/2-30, width/2+30),100,100));
   }

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    
   Engine.run(engine);
    
}
 


function draw() {
  background("black");
  //textSize(20)
  //text("Score : "+score,20,30);
  noStroke();
  textSize(35)
  fill("white")
  text("Score  " + score, width-300, 50)
  
   textSize(20);
   text("500",25,520);
   textSize(20);
   text("500",105,520);
   textSize(20);
   text("500",185,520);
   textSize(20);
   text("200",265,520);
   textSize(20);
   text("200",345,520);
   textSize(20);
   text("300",425,520);
   textSize(20);
   text("300",505,520);
   textSize(20);
   text("400",585,520);
   textSize(20);
   text("400",665,520);
   textSize(20);
   text("400",745,520);


 
  
   for (var k = 0; k < divisions.length; k++){
     divisions[k].display();
   }

   for (var j = 0; j < plinkos.length; j++) {
     
     plinkos[j].display();
     
   }
   
  
  for (var p = 0; p < particles.length; p++){
   particles[p].display();
   } 

   if(particles = null){
     particles.display();

     if (particle.body.position.y>760){
       if(particles.body.position.x<300){
         score=score+500;
         particle = null;
         if (turn>= 5){
           gameState = "end";
           text("gameover",200,150);
         }
       }
     }
   }
   
  
 
   
   //if(particles.position < 300){
     //score = 500;
   //}

   //if(particles.position > 301 && particles.position < 600){
    //score = 100;
//  }

  //if(particles.position > 601 && particles.position < 900){
   // score = 200;
  //}
    drawSprites();

    Engine.update(engine);
   }


function mousePressed(){
  if (gameState === "end"){
    count++;
    particle = new Particle(mouseX,10,10,10);
  }
}