// First Demo

let theColors = ["white", "red", "blue", "yellow", "green", "violet", "teal"];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background("black");
  recursiveCircle(width/2, height, 0);
}

function recursiveCircle(x, diameter, level) {
  fill(theColors[level]);
  circle(x, height/2, diameter);

  if (diameter > 20) {
    recursiveCircle(x-(mouseX/width/2)*diameter, diameter/2, level+1);
    recursiveCircle(x+(mouseX/width/2)*diameter, diameter/2, level+1);
  }
}