const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = (canvas.width = 800);
const CANVAS_HEIGHT = (canvas.height = 700);
let gameSpeed = 5;
let x = 0;
let x2 = 2400;

const backgroundLayer1 = new Image();
backgroundLayer1.src = "backgroundLayers/layer-1.png";
const backgroundLayer2 = new Image();
backgroundLayer2.src = "backgroundLayers/layer-2.png";
const backgroundLayer3 = new Image();
backgroundLayer3.src = "backgroundLayers/layer-3.png";
const backgroundLayer4 = new Image();
backgroundLayer4.src = "backgroundLayers/layer-4.png";
const backgroundLayer5 = new Image();
backgroundLayer5.src = "backgroundLayers/layer-5.png";

class Layer {
  constructor(image, speedModifier) {
    this.width = 2400;
    this.height = CANVAS_HEIGHT;
    this.x = 0;
    this.x2 = this.width;
    this.y = 0;
    this.image = image;
    this.gameSpeed = gameSpeed;
    this.speedModifier = speedModifier;
    this.speed = this.gameSpeed * this.speedModifier;
  }
  update() {
    this.gameSpeed = gameSpeed;
    this.x < -this.width ? (this.x = 0) : (this.x -= this.speed);
    this.x2 < 0 ? (this.x2 = this.width) : (this.x2 -= this.speed);
  }
  draw() {
    ctx.drawImage(this.image, this.x, 0);
    ctx.drawImage(this.image, this.x2, 0);
  }
}

const layer1 = new Layer(backgroundLayer1, 0.1);
const layer2 = new Layer(backgroundLayer2, 0.2);
const layer3 = new Layer(backgroundLayer3, 0.3);
const layer4 = new Layer(backgroundLayer4, 0.4);
const layer5 = new Layer(backgroundLayer5, 0.7);

const layerContainer = [layer1, layer2, layer3, layer4, layer5];

function animateLayers() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  layerContainer.forEach((object) => {
    object.update();
    object.draw();
  });
  requestAnimationFrame(animateLayers);
}

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.drawImage(backgroundLayer4, x, 0);
  ctx.drawImage(backgroundLayer4, x2, 0);
  if (x < -2400) x = 0;
  x -= gameSpeed;
  if (x2 < 0) x2 = 2400;
  x2 -= gameSpeed;
  requestAnimationFrame(animate);
}

animateLayers();

// animate();
