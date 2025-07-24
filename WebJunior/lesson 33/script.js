
let t;
function setup(){
    createCanvas(512, 512, WEBGL)
    t = loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9_%D0%93%D0%BE%D1%80%D0%B4%D0%BE%D0%BD_%28cropped%29.jpg/1200px-%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9_%D0%93%D0%BE%D1%80%D0%B4%D0%BE%D0%BD_%28cropped%29.jpg")
}

function draw(){
    background("pink")
    translate(mouseX - 256, mouseY- 256, 0)
    rotateY(frameCount * 0.03)
    noStroke()
    texture(t)
    sphere(100)
    translate(0, -90, 0)
    cone(120, -80)
    translate(40, 70, 90)
    sphere(10)
    translate(-70, 0, 0)
    sphere(10)
    
}