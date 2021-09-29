// Traffic Light Starter Code
// Alex Wriston
// 9/29/2021

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/#/p5/millis
let isRed,
  isYellow = false;
let isGreen = true;
let lastTimeSwitched = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  drawOutlineOfLights();
  changeLight();
}

function changeLight() {
  // Coloring lights
  if (isRed) {
    fill("red");
    ellipse(width / 2, height / 2 - 65, 50, 50); //top
  }
  else if (isYellow) {
    fill("yellow");
    ellipse(width / 2, height / 2, 50, 50); //middle
  }
  else if (isGreen) {
    fill("green")
    ellipse(width / 2, height / 2 + 65, 50, 50); //bottom
  }
  // Slecting light
  if (millis() > lastTimeSwitched + 10000) {
    isGreen = !isGreen;
    isYellow = true;
  }
  if (millis() > lastTimeSwitched + 15000) {
    isYellow = !isYellow;
    isRed = true;
  }
  if (millis() > lastTimeSwitched + 25000) {
    lastTimeSwitched = millis();
    isRed = !isRed;
    isGreen = true;
  }
}

function drawOutlineOfLights() {
  // box
  rectMode(CENTER);
  fill(0);
  rect(width / 2, height / 2, 75, 200, 10);

  // lights
  fill("white");
  ellipse(width / 2, height / 2 - 65, 50, 50); //top
  ellipse(width / 2, height / 2, 50, 50); //middle
  ellipse(width / 2, height / 2 + 65, 50, 50); //bottom
  
}