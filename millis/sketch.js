let isRed = false;
let lastTimeSwitched = 0;
let dog;

function preload() {
  dog = loadimage(dog.png);
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  if (isRed) {
    background("red");
  }
  else {
    background("black");
  }
  if (millis() > lastTimeSwitched + 2000) {;
    lastTimeSwitched = millis();
    isRed = !isRed;
    console.log(millis());
  }
  preload();
}