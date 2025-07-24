// function setup() {
//     createCanvas(512, 512, WEBGL);
//     background("Pink");
// }

// function draw() {
//     background("Pink");
//     translate(0, 0, mouseX);
//     rotateX(frameCount * 0.01);
//     rotateY(frameCount * 0.01);
//     rotateZ(frameCount * 0.01);
//     box(100);
// }

// function setup() {
//     createCanvas(400, 400, WEBGL);
// }

// let angle = 0;

// function draw() {
//     background(220);

//     translate (mouseX - 200, mouseY - 200, -200) ; // Biднімаємо половину канваC

//     rotateY (angle) ;
//     angle += 0.01;

//     fill("orange");
//     sphere(100);

//     fill(0);
//     translate(30, 0, 100);
//     sphere(10);
//     translate(-60, 0, 0);
//     sphere(10);
//     translate(30, 0, -100);

//     translate(0, -100, 0);
//     rotateX(-PI);
//     fill("red");
//     cone(120, 80);
// }
let img;
function preload() {
    img = loadImage("https://upload.wikimedia.org/wikipedia/commons/3/3f/Official_portrait_of_Petro_Poroshenko.jpg")
}

function setup() {
    createCanvas(400, 400, WEBGL);
}

function draw() {
    background(220);
    fill("orange");
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    // normalMaterial()

    ambientMaterial(0, 150, 255);
    // ambientLight(255);
    // directionalLight(255, 255, 255, -1, -1, -1);
    spotLight(600, 600, 600, mouseX - width /2 , mouseY - height /2, 450, 0, 0, -1, PI / 16);
    texture(img);
    noStroke()
    torus(100, 50);
}
