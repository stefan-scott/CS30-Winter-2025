// Coordinate System and User Events
// Mr. Scott
// Feb 6th, 2025
// Not run-to-completion, but interactive programs...

function setup() {
  // runs ONCE, at the very beginning....
  createCanvas(500, 500);
  //               ?             ?
}

function draw() {
  // draw LOOP, repeats over and over forever...
  // - target of 60 frames per second
  // A new image is drawn at the bottom of the loop
  background(220);
  twoCircles();
}

function twoCircles(){
  //draws two circles, one at a fixed location
  //and one at the mouse location
    fill(0,255,0); //green fill
  stroke(0,0,255); //blue outline
  strokeWeight(5); //thickness of line:5
  circle(200,100,50);

  noStroke();  //turns off outlines
  fill(255,0,0); //red fill
  circle(mouseX, mouseY, 30);
  //secret calculated delay()
  //screen updates at end of loop
}
