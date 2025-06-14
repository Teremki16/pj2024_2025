function setup(){
    createCanvas(512, 512, WEBGL)
    t = loadImage("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTexGfzV5dmJJAkacsLERcKuTpOggck0QFXFA&s")

    f = loadImage("https://ichef.bbci.co.uk/ace/ws/640/amz/worldservice/live/assets/images/2012/01/21/120121035914_hitler_224x280_bbc.jpg.webp")

    mor = loadImage("https://images.freeimages.com/images/premium/previews/1569/1569884-marijuana-buds.jpg")
    roj = loadImage("https://static.dw.com/image/47316391_605.jpg")
}

function draw(){
    background("aqua")
    rotateY(frameCount * 0.1)
    // fill("orange")
    // rotateY(frameCount * 0.03)
    // rotateX(frameCount * 0.1)
    // rotateY(frameCount * 0.1)
    // rotateZ(frameCount * 0.1)
    // noStroke()
    // texture(t)
    // torus(100, 50)
    // rotateX(90)
    translate(mouseX - 256, mouseY - 256, 0)
    // texture(f)
    // cylinder(50, 200, 50, )
    

    // sphere(100)
    // translate(0, -90, 0)
    // cone(120, -90)
    // translate(40, 70, 90)
    // sphere(8)
    // translate(-70, 0, 0)
    // sphere(8)

    noStroke()
    texture(roj)
    cone(71,150, 15,10)
    texture(mor)
    translate(0,-72,0)
    sphere(63)
 }   