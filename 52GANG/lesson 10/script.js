let canvas = document.querySelector("canvas")
let z = canvas.getContext("2d")
let o = canvas.getContext("2d")
let v = canvas.getContext("2d")
let t = canvas.getContext("2d")

canvas.width = 700
canvas.height = 500

// z.moveTo(5, 200)
// z.lineTo(145, 200)
// z.lineTo(5, 350)
// z.lineTo(145, 350)
// z.lineWidth = 7
// z.stroke()

// o.beginPath()
// o.arc(350, 250, 200, 0.5, 1.9 * Math.PI)
// o.lineTo(350, 250)
// o.fillStyle = "yellow"
// o.fill()
// o.closePath()
// o.stroke()
// o.beginPath()
// o.fillStyle = "black"
// o.arc(450, 150, 20, 0.5, 2 * Math.PI)
// o.fill()
// o.closePath()

// v.moveTo(550, 200)
// v.lineTo(615, 350)
// v.lineTo(680, 200)
// v.lineWidth = 7
// v.stroke()

// t.strokeRect(215, 115, 266, 266)
// t.strokeRect(218, 118, 260, 260)
// t.fillStyle = "orange"
// t.fillRect(220, 120, 256, 256)
// t.fillStyle = "black"
// for(let x = 0; x < 8; x+=2){
//     for(let y = 0; y < 8; y +=2){
//         t.fillRect(220 + 32 * x, 120 + 32 * y, 32, 32)
//         t.fillRect(252 + 32 * x, 152 + 32 * y, 32, 32)
//     }
// }