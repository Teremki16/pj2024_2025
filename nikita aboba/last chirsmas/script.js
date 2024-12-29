let canvas = document.querySelector("canvas")
let c  = canvas.getContext("2d")
canvas.width = 512
canvas.height = 512

let bg = new Image()
bg.src = "https://thumbs.dreamstime.com/b/christmas-background-fir-tree-branch-cones-merry-christmas-happy-new-year-greeting-card-winter-landscape-snow-157858624.jpg"

let gb = new Image()
gb.src = "https://static.tildacdn.com/stor6439-6436-4336-b163-366632643764/89936113.png"

function triangle(x,y,w,h,color){
    c.fillStyle = color
    c.beginPath()
    c.moveTo(x,y)
    c.lineTo(w / 2 + x, y + h)
    c.lineTo(x - w / 2, y + h)
    c.fill()
    c.closePath()

}
c.drawImage(bg, 0 ,0 ,512 ,512)




function toy(x,y,color){ 
    c.fillStyle = "black"
    c.fillRect(x,y, 2,10)
    c.fillRect(x-5 , y+ 10,12,6)
    c.beginPath()
    c.fillStyle = color
    c.arc(x + 1, y + 24,10, 0, Math.PI *2)
    c.fill()
    c.closePath()
}


// triangle(256,160,170,70,"rgb(69, 156, 87)")
// triangle(256,130,155,60,"rgb(59, 182, 83)")
// triangle(256,100,120,50,"rgb(67, 152, 84)")
// toy(250,120,"red")
// toy(270,150,"blue")
// toy(230,190,"purple")
// c.fillStyle = "brown"
// c.fillRect(238,230,30,70)


function elka(x,y){
    triangle(x,y,170,70,"rgb(69, 156, 87)")
    triangle(x,y-30,155,60,"rgb(59, 182, 83)")
    triangle(x,y-60,120,50,"rgb(67, 152, 84)")
    toy(x-6,y-40,"red")
    toy(x+14,y-10,"blue")
    toy(x-26,y+30,"purple")
    c.fillStyle = "brown"
    c.fillRect(x-18,y+70,30,50)
}

// elka(256,310)

let y = 10;
setInterval(()=>{
    c.drawImage(bg, 0 ,0 ,512 ,512)
    elka(256, y)
    if (y < 310) y++
   
}, 1)