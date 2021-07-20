var spacecraft,iss;
var hasDocked=false
var spaceBgImg,issImg,spacecraftImg1,spacecraftImg2,spacecraftImg3,spacecraftImg4;

function preload(){

 spaceBgImg = loadImage("spacebg.jpg");
 issImg = loadImage("iss.png")
 spacecraftImg1 = loadImage("spacecraft1.png")
 spacecraftImg2 = loadImage("spacecraft2.png")
 spacecraftImg3 = loadImage("spacecraft3.png")
 spacecraftImg4 = loadImage("spacecraft4.png") 
}

function setup(){
  createCanvas(1200,600);

  iss = createSprite(600,300,50,50);
  iss.addImage("Iss",issImg);

  spacecraft = createSprite(600,430,40,40);
  spacecraft.addImage("spaceCraft1",spacecraftImg1);
  spacecraft.addImage("spaceCraft2",spacecraftImg2);
  spacecraft.addImage("spaceCraft3",spacecraftImg3);
  spacecraft.addImage("spaceCraft4",spacecraftImg4);
  spacecraft.scale = 0.2;

}

function draw(){
  background(spaceBgImg);
  
  if(!hasDocked){
    spacecraft.x=spacecraft.x+Math.random(200,700);

    if(keyDown(LEFT_ARROW)){
       spacecraft.x=spacecraft.x-3;
       spacecraft.changeImage("spaceCraft3",spacecraftImg3)
    }
    else if(keyDown(RIGHT_ARROW)){
       spacecraft.x=spacecraft.x+3
       spacecraft.changeImage("spaceCraft4",spacecraftImg4)
    }
    else if(keyDown(DOWN_ARROW)){
      spacecraft.changeImage("spaceCraft2",spacecraftImg2)
    }
    else if(keyDown(UP_ARROW)){
       spacecraft.y=spacecraft.y-3;   
    } else {
      spacecraft.changeImage("spaceCraft1",spacecraftImg1)
    }
 }
 if(spacecraft.x<=(iss.x-5) && spacecraft.y<=(iss.y+70)){
    hasDocked=true;
    fill("White");
    strokeWeight(4);
    textSize(25);
    text("SUCCESSFULLY DOCKED",420,520);
 }

  drawSprites();
}