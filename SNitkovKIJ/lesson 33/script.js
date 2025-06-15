let coneTexture, iceCreamTexture;

function preload() {
  coneTexture = loadImage('cone_texture.jpg');
  iceCreamTexture = loadImage('ice_cream_texture.jpg');
}

function setup() {
  createCanvas(600, 600, WEBGL);
  noStroke();
}

function draw() {
  background("aqua");
  rotateY(frameCount * 0.01);
 
 
  push();
  texture(coneTexture);
  rotateX(PI);
  cone(40, -100); 
  pop();

 
  push();
  translate(0, -80, 0); 
  texture(iceCreamTexture);
  sphere(50); 
  pop();
}