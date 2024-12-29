let canvas = document.querySelector("canvas")
let c = canvas.getContext("2d")
canvas.width = 512
canvas.height = 512
let bg = new Image()
bg.src = "https://www.ridivira.com/images/video/352.jpg"
c.drawImage(bg, 0, 0, 512, 512)
let star = new Image()
star.src = "https://png.klev.club/uploads/posts/2024-03/png-klev-club-p-zvezda-na-yelku-png-9.png"
c.drawImage(star, 241, 77, 30, 30)
function triangle(x, y, w, h, color){
    c.fillStyle = color
    c.beginPath()
    c.moveTo(x, y)
    c.lineTo(w/2 + x, y + h)
    c.lineTo(x - w/2, y + h)
    c.fill()
    c.closePath
}

function toy(x, y, color){
    c.fillStyle = "black"
    c.fillRect(x, y, 2, 10)
    c.fillRect(x-5, y+10, 12, 5)
    c.beginPath()
    c.fillStyle = color
    c.arc(x+1, y + 22, 10, 0, Math.PI *2)
    c.fill()
    c.closePath()
}

function svastika(x, y, color){
    c.fillStyle = color
    c.lineWidth = 3
    c.beginPath(x,y)
    c.lineTo(x + 10, y - 10)
}

triangle(256, 100, 100, 50, "green")
triangle(256, 135, 100, 50, "green")
triangle(256, 165, 100, 50, "green")
toy(209, 147, "red")
toy(280, 140, "orange")
toy(250, 130, "purple")
toy(230, 170, "blue")
toy(280, 182, "yellow")
c.fillStyle = "brown"
c.fillRect(239, 213, 30, 40)

