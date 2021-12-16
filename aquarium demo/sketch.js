// First Demo

let theCreatures = [];
let clownfishImg;
let octopusImg;

function preload() {
  clownfishImg = loadImage("assets/ClownFish.png");
  octopusImg = loadImage("assets/octopus.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i=0; i<50; i++) {
    if (random(100) < 30) {
      let octopus = new Octopus(random(100, width-100), random(100, height-100), random(50, 100), octopusImg);
      theCreatures.push(octopus);
    }
    else {
      let fish = new Clownfish(random(100, width-100), random(100, height-100), random(50, 100), clownfishImg);
      theCreatures.push(fish);
    }
  }
}

function draw() {
  background(220);
  for (let someCreature of theCreatures) {
    someCreature.update();
    someCreature.display();
  }
}

class Creature {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
  }

  update() {
    this.x -= 2;
  }

  display() {
    fill("green");
    circle(this.x, this.y, this.size);
  }
}

class Clownfish extends Creature {
  constructor(x, y, size, theImage) {
    super(x, y, size);
    this.myImage = theImage;
    this.YTime = 1000;
  }

  update() {
    super.update();
    this.y = noise(this.YTime)*height;
    this.YTime += random(0.001, 0.005);

    if (this.x <= 0-this.size/2) {
      this.x = width+this.size/2;
    }
  }

  display() {
    imageMode(CENTER);
    image(this.myImage, this.x, this.y, this.size, this.size);
  }
}

class Octopus extends Creature {
  constructor(x, y, size, someImage) {
    super(x, y, size);
    this.myImage = someImage;
    this.YTime = 1000;
  }

  update() {
    super.update();
    this.y = noise(this.YTime)*height;
    this.YTime += random(0.001, 0.005);

    if (this.x <= 0-this.size/2) {
      this.x = width+this.size/2;
    }
  }

  display() {
    imageMode(CENTER);
    image(this.myImage, this.x, this.y, this.size, this.size);
  }
}
