
var box
var base1,base2,base3,base4
var musicAmp;
var edges

function preload(){
    musicAmp=loadSound("music.mp3");
}


function setup(){
     createCanvas(800,600);

    
     
 base1=createSprite(700,590,200,20)
 base1.shapeColor="red"
 base2=createSprite(500,590,200,20)
 base2.shapeColor="green"
 base3=createSprite(300,590,200,20)
 base3.shapeColor="purple"
 base4=createSprite(100,590,200,20)
 base4.shapeColor="yellow"
 
 box=createSprite(400,300,30,30)
 box.shapeColor="white"
 box.velocityY=5
 box.velocityX=5
}

function draw() {
    background(rgb(169,169,169));
    
        edges=createEdgeSprites()
 box.bounceOff(edges)
 
    

 if(box.isTouching(base1) && box.bounceOff(base1)     ){
box.shapeColor="red"
musicAmp.play();
 
 }
    if(box.isTouching(base2) && box.bounceOff(base2)          ){
    box.shapeColor="green"
    musicAmp.play();
    }
       if(box.isTouching(base3) && box.bounceOff(base3)          ){
        box.shapeColor="purple"
        
        musicAmp.play();
        }
           if(box.isTouching(base4) && box.bounceOff(base4)          ){
           box.shapeColor="yellow"
           musicAmp.play();
            }

    //add condition to check if box touching surface and make it box
    drawSprites()
}
