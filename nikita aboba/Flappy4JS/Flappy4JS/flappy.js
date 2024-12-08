let canvas = document.querySelector("canvas")
let c = canvas.getContext("2d")

canvas.width = 256
canvas.height = 512



let back = new Image()
back.src = "img/back.png"
let bird = new Image()
bird.src = "img/bird.png"
let pipeBotton = new Image()
pipeBotton.src = "img/pipeBottom.png"
let pipeUp = new Image()
pipeUp.src = "img/pipeUp.png"
let road = new Image()
road.src = "img/road.png"


let fly = new Audio()
fly.src = "audio/fly.mp3"
let score = new Audio()
score.src = "audio/score.mp3"
let scor = new Audio()
scor.scr = "audio/scor.mp3"

let birdX = 20
let birdY = 20

let g = 0.5
let velY = 0

let scorecount = 0
let bestscorecount = 0

let pipes = []
pipes[0] = {
    x: canvas.width,
    y: 0,
}
function draw() {
    c.drawImage(back, 0, 0)
    c.drawImage(bird, birdX, birdY)
    c.drawImage(road, 0, canvas.height - road.height)

    velY += g
    birdY += velY

    for (let i = 0; i < pipes.length; i++) {
        pipes[i].x -= 2
        c.drawImage(pipeUp, pipes[i].x, pipes[i].y)
        c.drawImage(pipeBotton, pipes[i].x, pipes[i].y + pipeUp.height + 130)

        if (pipes[i].x == 80) {
            pipes.push({
                x: canvas.width,
                y: (Math.random() * pipeUp.height) - pipeUp.height
            })
        }
        if (pipes[i].x < -pipeUp.width) {
            pipes.shift()
            score.play()
            scorecount++ 
            document.querySelector(".score").innerHTML = "Score: "+scorecount


        }
        
        if(birdX + bird.width >= pipes[i].x &&
            birdX <= pipes[i].x + pipeUp.width &&
            (
                birdY <= pipes[i].y + pipeUp.height ||
                birdY + bird.height >= pipes[i].y +  pipeUp.height + 130
            )
        ){
        reload()
        scor.play()
        }
    }


    if (birdY >= canvas.height - road.height) {
        reload()
        score.play()
        
    }
}

setInterval(draw, 20)

function moveUp() {
    if (birdX > 5) {
        velY = -5
        fly.play()
    }
}

canvas.addEventListener("click", moveUp)

window.addEventListener("keydown", (e) => {
    if (e.key == "e") moveUp()
})

function reload(){
    if(scorecount > bestscorecount) bestscorecount = scorecount
    document.querySelector(".bestScore").innerHTML = "Best score: " + bestscorecount
    scorecount = 0
    birdX = 10
    birdY = 100
    velY = 0
    pipes = []
    pipes[0] = {
        x: canvas.width,
        y: 0
    }
}