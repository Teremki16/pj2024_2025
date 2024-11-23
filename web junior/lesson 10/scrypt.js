let canvas = document.querySelector("canvas")
let c = canvas.getContext("2d")

canvas.width = 700
canvas.height = 500

// c.moveTo(300, 150)
// c.lineTo(350, 250)
// c.lineTo(410, 90)
// c.lineWidth = 5

// c.arc(370, 229, 200, 0.4, 1.9 * Math.PI)
// c.lineTo(400,230)
// c.fillStyle = "yellow"
// c.fill()
// c.closePath()
// c.stroke()

// c.beginPath()
// c.fillStyle = "black"
// c.arc(410, 140, 20, 0, 6)
// c.fill()
// c.closePath()


c.strokeRect(215, 115, 266, 266)
c.strokeRect(218, 118, 260, 260)
c.fillStyle = "rgb(92, 48, 1)"
c.fillRect(220, 120, 256, 256)

c.fillStyle = "black"
for(let i = 0; i < 8; i += 2) {
    for(let j = 0; j < 8; j += 2){
         c.fillRect(220 + 32 * i, 120 + 32 * j, 32, 32)
         c.fillRect(252 + 32 * i, 152 + 32 * j, 32, 32)
    }
}