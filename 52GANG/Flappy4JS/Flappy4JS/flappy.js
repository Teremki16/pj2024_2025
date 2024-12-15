let canvas = document.querySelector("canvas")
let c = canvas.getContext("2d")

canvas.width = 256;
canvas.height = 512;


let voyna = new Image()
voyna.src = "img/voyna.jpg"
let captionBottom = new Image()
captionBottom.src = "img/captionBottom.jpg"
let captionUp = new Image()
captionUp.src = "img/captionUp.jpg"
let road = new Image()
road.src = "img/road.jpg"
let shahed = new Image()
shahed.src = "img/shahed.png"

let vzryiv = new Audio()
vzryiv.src = "audio/vzryiv.mp3"
let krik = new Audio()
krik.src = "audio/krik.mp3"
let islamic = new Audio()
islamic.src = "audio/islamic.mp3"
let Pau = new Audio()
Pau.src = "audio/Pau.mp3"

let shahedX = 20
let shahedY = 20

let g = 0.5
let velY = 0

let scoreCount = 0
let bestScoreCount = 0

let pipes = []
pipes[0] = {
    x: canvas.width,
    y: 0,
}

islamic.play()
Pau.play()

let isPause = false;

function draw() {
    if (!isPause) {
        c.drawImage(voyna, 0, 0)
        c.drawImage(shahed, shahedX, shahedY)
        c.drawImage(road, 0, canvas.height - road.height)

        velY += g
        shahedY += velY

        for (let i = 0; i < pipes.length; i++) {
            pipes[i].x -= 2
            c.drawImage(captionUp, pipes[i].x, pipes[i].y)
            c.drawImage(captionBottom, pipes[i].x, pipes[i].y + captionUp.height + 150)

            if (pipes[i].x == 80) {
                pipes.push({
                    x: canvas.width,
                    y: (Math.random() * captionUp.height) - captionUp.
                        height
                })
            }
            if (pipes[i].x < -captionUp.width) {
                pipes.shift()
                vzryiv.play()
                krik.play();
                islamic.play()
                Pau.play()

                scoreCount++
                document.querySelector(".score").innerHTML = "Score: " + scoreCount
            }

            if (shahedX + shahed.width >= pipes[i].x &&
                shahedX <= pipes[i].x + captionUp.width &&
                (
                    shahedY <= pipes[i].y + captionUp.height ||
                    shahedY + shahed.height >= pipse[i].y + captionUp.height + 150
                )
            ) {
                reload();
            }
        }
        if (shahedY >= canvas.height - road.height) {
            reload()
        }
    }
}
setInterval(draw, 20)

function moveUp() {
    if (shahedX > 5) {
        velY = -5
    }
}


canvas.addEventListener("click", moveUp)

window.addEventListener("keydown", (e) => {
    if (e.key == "ArrowUp") moveUp()
})

function reload() {
    if (scoreCount > bestScoreCount) bestScoreCount = scoreCount
    document.querySelector(".bestScore").innerHTML = "Best score: " + bestScoreCount
    scoreCount = 0
    shahedX = 10
    shahedY = 100
    velY = 0
    pipes = []
    pipes[0] = {
        x: canvas.width,
        y: 0
    }
} document.querySelector("button").addEventListener("click", () => {
    isPause = !isPause
    document.querySelector("box").style.display = isPause ? "block" : "none"
})