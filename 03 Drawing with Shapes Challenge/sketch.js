// Drawing with Shapes Practice
// Mr. Scott
// Feb 10, 2025

// Global Variable Declarations
let boxX = 200, boxY = 100; 

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
}

function draw() {
  background(220);
  drawCharacter();
  //drawBox();
}

function drawCharacter(){
  //to practice drawing with shapes and understanding
  //the underlying coordinate system, draw the alien...

}







function drawBox(){
  //draw a box on the screen
  fill(255,155,55);
  rect(boxX, boxY, 50, 30, 5, 5, 0, 0);
  rect(boxX, boxY - 50, 30);
}

function keyPressed(){
  if(key === "a"){
    boxX = 0;
  }
  if(key === "b"){
    boxY = 400;
  }
  if(keyCode === ESCAPE){
    boxX = width * 0.85; //85% across the screen
    boxY = height * 0.6; //60% down the screen
  }
}








