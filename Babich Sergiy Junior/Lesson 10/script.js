let canvas = document.querySelector("canvas")
let c = canvas.getContext("2d")

canvas.width = 700
canvas.height = 500

// c.beginPath()
// c.arc(350, 250, 200, 0.5, 1.9 * Math.PI)
// c.lineTo(350, 250)
// c.fillStyle = "yellow"
// c.fill()
// c.closePath
// c.stroke

// c.beginPath()
// c.arc(350, 150, 30, 0, -2 )
// c.fillStyle = "black"
// c.fill()

// c.closePath

c.strokeRect(215, 115, 266, 266)
c.strokeRect(218, 118, 260, 260)
c.fillStyle = "orange"
c.fillRect(220, 120, 256, 256)
c.fillStyle = "black"
for(let i = 0; i < 8; i += 2 ){
    for(let j = 0; j < 8; j += 2){
        c.fillRect(220 + 32 * i, 120 + 32 * j , 32, 32)
        c.fillRect(252 + 32 * i, 152 + 32 * j , 32, 32)
    }

}