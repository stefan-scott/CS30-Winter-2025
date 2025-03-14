// Classes and Objects (Random Walkers)
// Mr. Scott
// March 14, 2025
// a first look at working with multiple objects

let singleWalker;

function setup() {
  createCanvas(windowWidth, windowHeight);
  singleWalker = new Walker(100, 150, "green");
}

function draw() {
  background(220);
  singleWalker.move();
  singleWalker.display();
}

class Walker {
  //1. constructor
  constructor(x, y, c){
    this.x = x;   this.y = y;   this.c = c;
    this.speed = random(2,10);
    this.size = 5;
  }

  //2. class methods
  display(){  //render the walker on screen
    rectMode(CENTER);
    fill(this.c);
    square(this.x, this.y, this.size);
  }

  move(){
    //equally likely chance of ↑ ↓ → ←  (alt-24)
    let choice = floor(random(4));  //0 , 1, 2, 3
    switch(choice){
      case 0: //LEFT
        this.x -= this.speed;   break;
      case 1: //RIGHT
        this.x += this.speed;   break;
      case 2: //UP
        this.y -= this.speed;   break;
      case 3: //DOWN
        this.y += this.speed;   break;
    }
  }
}
