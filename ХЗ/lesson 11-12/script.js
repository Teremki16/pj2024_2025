let color = "black"

let canvas = document.querySelector("canvas")
let c = canvas.getContext("2d")

function fillIn(){
    c.fillStyle = color;
    c.fillRect(0, 0, canvas.width, canvas.height)
}