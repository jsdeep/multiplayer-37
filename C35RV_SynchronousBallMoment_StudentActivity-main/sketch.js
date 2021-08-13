var hypnoticBall, database;
var position;
var canvas;
var form,player,playerCount;
var bg,c1,c2,track,title;

function preload(){
bg =loadImage("./assets/background.png");
c1=loadImage("./assets/car1.png");
c2=loadImage("./assets/car2.png");
track=loadImage("./assets/track.jpg");
title=loadImage("./assets/title.png");
}
  


function setup(){
  database = firebase.database();
  game=new Game();
  game.getState();
  game.start();
  canvas = createCanvas(windowWidth,windowHeight);

  //hypnoticBall = createSprite(250,250,10,10);
  //hypnoticBall.shapeColor = "red";


  //var hypnoticBallPosition = database.ref('ball/position');
  //hypnoticBallPosition.on("value", readPosition, showError);
}

function draw(){
  background("white");
  
    /*if(keyDown(LEFT_ARROW)){
      writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
      writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
      writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
      writePosition(0,+1);
    }
    drawSprites();*/

  
}

function writePosition(x,y){
  
}

function readPosition(data){
  position = data.val();
  console.log(position.x);
  hypnoticBall.x = position.x;
  hypnoticBall.y = position.y;
}

function showError(){
  console.log("Error in writing to the database");
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
