// State Variables and Timing
// Mr. Scott
// Feb 13, 2025
// State Variables, Switch, Frames/Time 

// Global Variable Declarations
let shapeState = 1;     //1-Circle  2-Square  3-Tri  4-Transition
let startTime, elapsedTime;

function setup() {
  createCanvas(windowWidth, windowHeight);
  startTime = millis(); //should roughly 0
}

function manageTimer(){
  //update elapsedTime variable
  //and display
  elapsedTime = millis() - startTime;
  text(elapsedTime/1000, width*0.3, height*0.75);
}

function draw() {
  background(220);
  drawShape();
  manageTimer();
  if(shapeState===4 && elapsedTime > 2000){
    shapeState=1;
  }
}

function keyPressed(){
  //on each keypress, let's advance the state
  //varible  1→2  2→3   3→4(for 2 second)→1
  if(shapeState < 4){
    shapeState++;
    if(shapeState === 4){
      startTime = millis();
    }
  }
}

function drawShape(){
  switch(shapeState){
    case 1:
      circle(width/2, height/2, 150);
      break;
    case 2:
      square(width/2, height/2, 150);
      break;
    case 3:
      let x = width/2;   let y = height/2;
      triangle(x-50,y+50, x+50, y+50, x, y-25);
      break;
    case 4:
      for(let i = 0; i < 20; i++){
        let x = random(width*0.4, width*0.6);
        let y = random(height *0.4, height*0.6);
        line(x, y, x+25, y);
      }
  }

}




