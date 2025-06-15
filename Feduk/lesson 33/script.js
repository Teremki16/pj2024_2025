let t
let r
let isLit = false;

function setup(){

    createCanvas(512,512, WEBGL)
    r = loadImage('https://st.depositphotos.com/1263295/2545/i/450/depositphotos_25456309-stock-photo-vanilla-ice-cream.jpg')
    
    t = loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMlrH0GF1pHTw4hx3qwNH8PK4uKOb1nRBXYg&s")
    
}

function draw(){
    // colorMode(RGB, 225)
    background("lightblue")
    // fill('orange')
    // translate(mouseX - 256, mouseY - 256,0)
    rotateY(frameCount * 0.04)
    noStroke()
    // ambientLight(0,225,255)
    // let c = color(100,0,0)
    // let dir = createVector(0,-1,-1)
    // directionalLight(c, dir)
    // let c2 = color(0,100,0)
    // let dir2 = createVector(0,1,-1)
    // directionalLight(c2, dir2)
    // ambientMaterial(0,225,255)
    // rotateZ(frameCount * 1000)
    // rotateX(frameCount * 100000000)
    // translate(0, 0,50)
    // rotateX(frameCount * 0.1)
    // rotateY(frameCount * 0.1)
    // rotateZ(frameCount * 0.1)
    // torus(100,50)
    
    texture(r)
    sphere(100)
    texture(t)
    translate(0, 120,0)
    cone(110, 220) 


}
    
