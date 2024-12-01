let canvas = document.querySelector("canvas")
let c = canvas.getContext("2d")

canvas.width = 256;
canvas.height = 512;

let back = new Image()
back.src = "img/back.png"
let bird = new Image()
bird.src = "img/bird.png"
let pipeBottom = new Image()
pipeBottom.src = "img/pipeBottom.png"
let pipeUp = new Image()
pipeUp.src = "img/pipeUp.png"
let road = new Image()
road.src = "img/road.png"

let fly = new Audio()
fly.src = "audio/fly.mp3"
let score = new Audio()
score.src = "audio/score.mp3"

let birdX = 20;
let birdY = 20;

let g = 0.5
let velY = 0;

function draw(){
    c.drawImage(back, 0, 0)
    c.drawImage(bird,birdX, birdY,)

    velY += g
    birdY += velY

    if(birdY >= canvas.height){
        location.reload()
    }
}

setInterval(draw, 20)

function moveUp(){
    if(birdX > 5){
    velY = -6
    fly.play()
}
}

canvas.addEventListener("click", moveUp)

