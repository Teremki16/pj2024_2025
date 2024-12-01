let canvas = document.querySelector("canvas")
let c = canvas.getContext("2d")

canvas.width = 256;
canvas.height = 512;

let voyna = new Image()
voyna.src = "img/voyna.png"
// let back = new Image()
// back.src = "img/back.jng"
// let bird = new Image()
// bird.src = "img/bird.png"
let pipeBottom = new Image()
pipeBottom.src = "img/pipeBottom.png"
let pipeUp = new Image()
pipeUp.src = "img/pipeUp.png"
let road = new Image()
road.src = "img/road.png"
let shahed = new Image()
shahed.src = "img/shahed.png"

let fly = new Audio()
fly.src = "audio/fly.mp3"
let vzryiv = new Audio()
vzryiv.src = "audio/vzryiv.mp3"
let krik = new Audio()
krik.src = "audio/krik.mp3"

let shahedX = 20
let shahedY = 20

let g = 0.5
let velY = 0

function draw() {
    c.drawImage(voyna, 0, 0)
    c.drawImage(shahed, shahedX, shahedY)

    velY += g
    shahedY += velY

    if (shahedY == canvas.height) {
        location.reload()
    }
}
setInterval(draw, 20)

function moveUp() {
    if (shahedX > 5){
        velY = -5
        fly.play();
    }
}

canvas.addEventListener("click", moveUp)

window.addEventListener("keydown", (e) => {
    if (e.key == "ArrowUp") moveUp()
})