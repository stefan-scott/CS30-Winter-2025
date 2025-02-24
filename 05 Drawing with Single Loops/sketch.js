// Drawing with Single Loops
// Mr. Scott
// Feb 24th


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  circleLine();
}

function circleLine(){
  //use a loop (for or while) to draw a line
  //of circles side by side.
  let d = 40; //diameter of each circle
  let y = height/2;
  let xStart = 0;
  let xEnd = mouseX;   //width*0.75;

  //use a loop to do the drawing
  for(let x = xStart; x <= xEnd; x+=d){
    //x: 0  40  80  120  160   200  240
    circle(x, y, d);
  }
}