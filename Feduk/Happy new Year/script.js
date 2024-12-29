let canvas = document.querySelector("canvas")
let c = canvas.getContext("2d")
canvas.width = 512
canvas.height = 512
let bg = new Image()
bg.src = "https://t3.ftcdn.net/jpg/08/95/86/82/360_F_895868299_z8aR16uHjnkrtnUkzohVQ68m26JBNt4f.jpg"
c.drawImage(bg, 0, 0, 512, 512)

let g = new Image()
g.src = "https://star.aitico-trade.com/img/goods_n_s/089-95_MN.png"
c.drawImage(g, 231, 59, 50, 50)

//let rt = new Image()
//rt.src = "https://elki.kiev.ua/images/elki-logo.png"
//c.drawImage(rt, 30, 260, 250, 250)


function triagle(x, y, w, h, color) {
    c.fillStyle = color
    c.beginPath()
    c.moveTo(x, y)
    c.lineTo(w / 2 + x, y + h)
    c.lineTo(x - w / 2, y + h)
    c.fill()
    c.closePath()
}

triagle(256, 100, 100, 50, "rgb(79, 238, 111)")
triagle(256, 140, 100, 50, "rgb(79, 238, 111)")
triagle(256, 180, 100, 50, "rgb(79, 238, 111)")


function toy(x, y, color) {
    c.fillStyle = "black"
    c.fillRect(x, y, 3, 10)
    c.fillRect(x - 5, y + 10, 12, 6)
    c.beginPath()
    c.fillStyle = color
    c.arc(x + 1, y + 24, 10, 0, Math.PI * 2)
    c.fill()
    c.closePath()
}
toy(220, 140, "red")
toy(290, 140, "red")
toy(220, 185, "red")
toy(290, 185, "red")


function ctob(x, y, color){
    c.fillStyle = color 
    c.fillRect(x, y, 30, 50)
}

ctob( 240, 230, "rgb(200, 120, 50)")

