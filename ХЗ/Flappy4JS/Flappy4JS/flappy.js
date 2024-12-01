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
fly.src = (audio/fly.mp3)
let score = new Audio()
score.src = (audio/score.mp3)

function draw(){
    c.drawImage(back, 0, 0)
}

setInterval(draw, 20)