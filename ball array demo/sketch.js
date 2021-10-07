// Ball Array Demo

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i=0; i<100; i++) {
    spawnBall();
  }
}

function draw() {
  background("black");

  for (let myBalls of ballArray) {
    noStroke();
    fill(myBalls.theColor);
    myBalls.x = noise(myBalls.time)*width;
    myBalls.y = noise(myBalls.time + 100)*height;
    circle(myBalls.x, myBalls.y, myBalls.radius*2);
    myBalls.time += 0.002;
  }
}

function spawnBall() {
  let myBalls = {
    radius: random(10, 30),
    x: random(width),
    y: random(height),
    time: random(1, 1000),
    theColor: color(random(255), random(255), random(255), random(255))
  };
  ballArray.push(myBalls);
}

function mousePressed() {
  for (let i=0; i<5; i++) {
    spawnBall();
  }
}