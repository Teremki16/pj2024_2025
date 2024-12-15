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

let scoreCount = 0
let bestScoreCount = 0

let pipes = []
    pipes[0] = {
        x: canvas.width,
        y: 0,
    }

    let isPause = false;


function draw(){
    if(!isPause) {
    c.drawImage(back, 0, 0)
    c.drawImage(bird,birdX, birdY,)
    c.drawImage(road, 0, canvas.height - road.height)
    velY += g
    birdY += velY

    for(let i = 0; i < pipes.length; i++) {
        pipes[i].x-= 2
        c.drawImage(pipeUp, pipes[i].x, pipes[i].y)
        c.drawImage(pipeBottom, pipes[i].x, pipes[i].y + pipeUp.height + 120)

        if(pipes[i].x == 80){
            pipes.push({
                x: canvas.width,
                y: (Math.random() * pipeUp.height) - pipeUp.height
            })
        }

        if(pipes[i].x < -pipeUp.width){
            pipes.shift()
            score.play()
            scoreCount++
            document.querySelector(".score").innerHTML = "Score: "+scoreCount
        }

        if(birdX + bird.width >= pipes[i].x &&
            birdX <= pipes[i].x + pipeUp.width &&
            (
                birdY <= pipes [i].y + pipeUp.height ||
                birdY + bird.height >= pipes[i].y + pipeUp.height + 120
            )
        ){
            location.reload()
        }
    }

    if(birdY >= canvas.height - road.height){
        location.reload()
    }
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

function reload(){
    if(scoreCount > bestScoreCount) bestScoreCount = scoreCount
    document.querySelector(".bestScore").innerHTML = "Best score: " + bestScoreCount
    scoreCount = 0
    birdX = 10
    birdY = 100
    velY = 0
    pipes = []
    pipes[0] = {
        x: canvas.width,
        y:0
    }
}


document.querySelector("button").addEventListener("click", ()=> {
    isPause = !isPause
    document.querySelector(".box").style.display = isPause ? "block" : "none"
})
