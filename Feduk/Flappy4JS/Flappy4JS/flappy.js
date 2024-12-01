let canvas = document.querySelector("canvas")
let c = canvas.getContext("2d")

canvas.width = 256; 
canvas.height = 512; 

let back = new Image()
back.src = "img/back.png"
let bird = new Image()
bird.src = "img/bird.png"
let pipeBottom = new Image()
pipeBottom.src = "img/pi.png"
let pipeUP = new Image()
pipeUP.src = "img/pipeUp.png"
let road = new Image()
road.src = "img/road.png"

let fly = new Audio()
fly.src = "audio/fly.mp3"