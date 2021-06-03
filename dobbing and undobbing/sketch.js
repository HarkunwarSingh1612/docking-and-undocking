
var backgroundImg;
var iss, issImg, spacecraft, spacecraftImg, spacecraftImg2, spacecraftImg3, spacecraftImg4;
var hasDocked=false;


function preload(){
  backgroundImg=loadImage("spacebg.jpg");
  issImg=loadImage("iss.png");
  spacecraftImg=loadImage("spacecraft1.png");
  spacecraftImg2=loadImage("spacecraft2.png");
  spacecraftImg3=loadImage("spacecraft3.png");
  spacecraftImg4=loadImage("spacecraft4.png");
}

function setup() {
  createCanvas(1200,800);
  iss=createSprite(600, 400, 10, 20);
  iss.addImage(issImg);
  spacecraft=createSprite(Math.round(random(20, 600)), 700, 10, 20 );
  spacecraft.addImage(spacecraftImg);
  spacecraft.scale=0.2;
  

  


  
}

function draw() {
  background(backgroundImg); 
  iss.setCollider("rectangle",-60,20,4, 4);

 /* if(!hasDocked){
   
   } */
   spacecraft.velocityX=0;
   spacecraft.velocityY=0;
   if(keyDown(LEFT_ARROW)){
   spacecraft.addImage(spacecraftImg3);
   spacecraft.velocityX=-2;
   }
   if(keyDown(DOWN_ARROW)){
    spacecraft.addImage(spacecraftImg2);
   
    }

    if(keyDown(RIGHT_ARROW)){
      spacecraft.addImage(spacecraftImg4);
      spacecraft.velocityX=2;
      }
      if(keyDown(UP_ARROW)){
        spacecraft.addImage(spacecraftImg);
        spacecraft.velocityY=-2;
        }
        if(iss.isTouching(spacecraft)){
          hasDocked=true;
          textSize(30);
          text("Docking succesful! Congratulations", 600, 700);
          text("Press space to dock the spacecraft again", 600, 750);
          spacecraft.velocityX=0;
          spacecraft.velocityY=0;
          spacecraft.addImage(spacecraftImg);
        }
        if(keyDown(32)){
          reset();
        }
  drawSprites();

}
function reset(){
  
    spacecraft.x=Math.round(random(20, 600));
    spacecraft.y=700;
    spacecraft.velocityX=0;
    spacecraft.velocityY=0;
    if(keyDown(LEFT_ARROW)){
    spacecraft.addImage(spacecraftImg3);
    spacecraft.velocityX=-2;
    }
    if(keyDown(DOWN_ARROW)){
     spacecraft.addImage(spacecraftImg2);
    
     }
 
     if(keyDown(RIGHT_ARROW)){
       spacecraft.addImage(spacecraftImg4);
       spacecraft.velocityX=2;
       }
       if(keyDown(UP_ARROW)){
         spacecraft.addImage(spacecraftImg);
         spacecraft.velocityY=-2;
         }
         

  
}