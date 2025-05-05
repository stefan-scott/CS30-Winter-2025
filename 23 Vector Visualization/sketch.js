// Vector Visualization
// Mr. Scott
// May 5, 2025

let objects = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  objects.push(new Ball(width*0.1, height*0.5));
}

function draw() {
  background(220);
}

class Ball{
  constructor(x,y){
    this.pos = createVector(x,y);
    this.vel = createVector(5,-5);
    this.grav = createVector(0,0.1);
  }

  move(){
    //update velocity and position vectors
    this.vel.add(this.grav);
    this.pos.add(this.vel);
  }
  
  display(){
    //display Ball
    circle(pos.x, pos.y, 20);

    //display vectors
  }

}
