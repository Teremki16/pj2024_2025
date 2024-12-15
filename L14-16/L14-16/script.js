let canvas = document.querySelector("#canvas")
let score_text = document.querySelector("#score_text")

let ctx = canvas.getContext("2d")

let bird = new Image()
bird.src = "./bird.png"
bird.className = bird

let player = new Image()
player.src = "./player.png"
player.width = 100

let score = 0;
let birdX = Math.random() * 800 - 20
let birdY = 0
let birdVel = 0
let gravity = 0.2
let playerX = 0

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    birdVel += gravity
    birdY += birdVel
    ctx.drawImage(bird, birdX, birdY, 20, 20)

    ctx.drawImage(player, playerX, 480, 122, 130)

    if (birdY >= 480 && birdX < playerX + player.width && birdX + bird.width > playerX) {
        score++;
        score_text.innerHTML = "SCORE: " + score
        birdX = Math.random() * 800 - 20
        birdY = 0
        birdVel = 0
    }
    if(birdY >= 600) {
        birdX = Math.random() * 800 - 20
        birdY = 0
        birdVel = 0
    }
}

setInterval(draw, 20)

document.addEventListener("keydown", function(event){
    if(event.code === "ArrowLeft") {
        playerX -= 60
        if(playerX < 0){
            playerX = 0
        }
    }
    if(event.code === "ArrowRight") {
        playerX += 60
        if(playerX > 678){
            playerX = 678
        }
    }
})
