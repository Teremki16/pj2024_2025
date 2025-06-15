function setup(){
    createCanvas(400, 400)
}

function draw(){
    background("lightBlue")
    strokeWeight(0)
    fill("darkred")
    rect(140, 120, 132, 145)
    fill("darkOrange")
    triangle(140, 120, 140 + 132 / 2, 120 - 40, 140 + 132, 120);
    strokeWeight(0)
    fill("lightBlue")
    rect(160, 150, 40, 40)
    strokeWeight(0)
    fill("darkOrange")
    rect(210, 215, 30, 50)
    strokeWeight(0)
    fill("orange")
    rect(0, 265, 1000, 200)
}