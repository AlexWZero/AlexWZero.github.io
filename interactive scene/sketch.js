// Global variables
let picture;
let menuHeight, menuWidth;
let menuX, menuY;
let chargerRight, chargerFront, chargerBack, chargerLeft;
let m2Right, m2Front, m2Rear, m2Left;
let corollRight, corollFront, corollRear, corollLeft;
let imageWidth, imageHeight;
let profileNum = 1;
let menu = loadImage("menu.png");

// Preload images
function preload() {
  
  // Charger profiles
  chargerRight = loadImage("Charger Right.png");
  chargerFront = loadImage("Charger Front.png");
  chargerBack = loadImage("Charger Back.png");
  chargerLeft = loadImage("Charger Left.png");

  //M2 profiles
  m2Right = loadImage("M2 Right.png");
  m2Front = loadImage("M2 Front.png");
  m2Rear = loadImage("M2 Rear.png");
  m2Left = loadImage("M2 Left.png");
  
  // 86 profiles
  corollFront = loadImage("86 Front.png");
  corollLeft = loadImage("86 Left.png");
  corollRear = loadImage("86 Rear.png");
  corollRight = loadImage("86 Right.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Giving variable values
  menuHeight = windowHeight - 150;
  menuWidth = 100;
  menuX = windowWidth - menuWidth;
  menuY = windowHeight / 2;
  imageHeight = windowHeight - windowHeight / 8;
  imageWidth = imageHeight;
}

function draw() {
  background(173, 216, 230);

  // Mode selection
  imageMode(CENTER);
  rectMode(CENTER);

  // Creating menu
  image(menu, menuX, menuY, menuWidth, menuHeight);

  // Showing selected images & profiles
  if (picture === "Charger Right") {
    image(chargerRight, width / 2.5, height / 2, imageWidth, imageHeight);
  } else if (picture === "Charger Front") {
    image(chargerFront, width / 2.5, height / 2, imageWidth, imageHeight);
  } else if (picture === "Charger Back") {
    image(chargerBack, width / 2.5, height / 2, imageWidth, imageHeight);
  } else if (picture === "Charger Left") {
    image(chargerLeft, width / 2.5, height / 2, imageWidth, imageHeight);
  } else if (picture === "M2 Right") {
    image(m2Right, width / 2.5, height / 2, imageWidth, imageHeight);
  } else if (picture === "M2 Front") {
    image(m2Front, width / 2.5, height / 2, imageWidth, imageHeight);
  } else if (picture === "M2 Left") {
    image(m2Left, width / 2.5, height / 2, -imageWidth, imageHeight);
  } else if (picture === "M2 Rear") {
    image(m2Rear, width / 2.5, height / 2, imageWidth, imageHeight);
  } else if (picture === "86 Right") {
    image(corollRight, width / 2.5, height / 2, imageWidth, imageHeight);
  } else if (picture === "86 Front") {
    image(corollFront, width / 2.5, height / 2, imageWidth, imageHeight);
  } else if (picture === "86 Left") {
    image(corollLeft, width / 2.5, height / 2, imageWidth, imageHeight);
  } else if (picture === "86 Rear") {
    image(corollRear, width / 2.5, height / 2, imageWidth, imageHeight);
  }
}

// Changing the vehicle profile
function keyPressed() {
  if (
    (keyCode === LEFT_ARROW && picture === "Charger Left") ||
    (keyCode === RIGHT_ARROW && picture === "Charger Right")
  ) {
    picture = "Charger Front";
  }
  else if (
    (keyCode === LEFT_ARROW && picture === "Charger Back") ||
    (keyCode === RIGHT_ARROW && picture === "Charger Front")
  ) {
    picture = "Charger Left";
  }
  else if (
    (keyCode === LEFT_ARROW && picture === "Charger Right") ||
    (keyCode === RIGHT_ARROW && picture === "Charger Left")
  ) {
    picture = "Charger Back";
  }
  else if (
    (keyCode === LEFT_ARROW && picture === "Charger Front") ||
    (keyCode === RIGHT_ARROW && picture === "Charger Back")
  ) {
    picture = "Charger Right";
  }
  else if (
    (keyCode === LEFT_ARROW && picture === "M2 Left") ||
    (keyCode === RIGHT_ARROW && picture === "M2 Right")
  ) {
    picture = "M2 Front";
  }
  else if (
    (keyCode === LEFT_ARROW && picture === "M2 Rear") ||
    (keyCode === RIGHT_ARROW && picture === "M2 Front")
  ) {
    picture = "M2 Left";
  }
  else if (
    (keyCode === LEFT_ARROW && picture === "M2 Right") ||
    (keyCode === RIGHT_ARROW && picture === "M2 Left")
  ) {
    picture = "M2 Rear";
  }
  else if (
    (keyCode === LEFT_ARROW && picture === "M2 Front") ||
    (keyCode === RIGHT_ARROW && picture === "M2 Rear")
  ) {
    picture = "M2 Right";
  }
  else if (
    (keyCode === LEFT_ARROW && picture === "86 Left") ||
    (keyCode === RIGHT_ARROW && picture === "86 Right")
  ) {
    picture = "86 Front";
  }
  else if (
    (keyCode === LEFT_ARROW && picture === "86 Rear") ||
    (keyCode === RIGHT_ARROW && picture === "86 Front")
  ) {
    picture = "86 Left";
  }
  else if (
    (keyCode === LEFT_ARROW && picture === "86 Right") ||
    (keyCode === RIGHT_ARROW && picture === "86 Left")
  ) {
    picture = "86 Rear";
  }
  else if (
    (keyCode === LEFT_ARROW && picture === "86 Front") ||
    (keyCode === RIGHT_ARROW && picture === "86 Rear")
  ) {
    picture = "86 Right";
  }
}

// Response to selection
function mousePressed() {
  if (
    mouseX < menuX + menuWidth / 2 &&
    mouseX > menuX - menuWidth / 2 &&
    mouseY < menuY + menuHeight / 10 &&
    mouseY > menuY - menuHeight / 10
  ) {
    picture = "Charger Right";
  }
  if (
    mouseX < menuX + menuWidth / 2 &&
    mouseX > menuX - menuWidth / 2 &&
    mouseY > menuY - menuHeight / 2 &&
    mouseY < menuY - menuHeight / 3
  ) {
    picture = "M2 Right";
  }
  if (
    mouseX < menuX + menuWidth / 2 &&
    mouseX > menuX - menuWidth / 2 &&
    mouseY < menuY + menuHeight / 2 &&
    mouseY > menuY + menuHeight / 3
  ) {
    picture = "86 Right";
  }
}
