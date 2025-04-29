// Project Title
// Your Name
// Date
let c;
function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  drawShape();
}

function drawShape() {
  c=0;
  background(0);
  translate(width/2,height*0.2);
  lineFractal(120, 15);
}

function lineFractal(length, depth){
  if(depth > 0){
    c+=1;
    let val = map(c,0,15000,0,255);
    strokeWeight(c%100/20);
    stroke(val, val/2, 255-val,100);
    line(0,0,0,length);
    if(depth%2===0){
      //production rules for EVEN
      push();
        translate(0,length/2);
        rotate(75);
        lineFractal(length/2, depth-1);
      pop();
      push();
        translate(0,length);
        rotate(-75);
        lineFractal(length/2, depth-1);
      pop();
    }
    else{
      //production rules for ODD
      push();
        translate(0,length);
        rotate(-60);
        lineFractal(length*1.2, depth-1);
      pop();
      push();
        translate(0,length);
        rotate(60);
        lineFractal(length*1.2, depth-1);
      pop();
      
    }
  }
}


