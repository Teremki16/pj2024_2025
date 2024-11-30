let color = "black"
let lw = 10
let isMouseDown = false;

let canvas = document.querySelector("canvas")
let c = canvas.getContext("2d")

canvas.width = window.innerWidth
canvas.height = window.innerHeight

function fillIn() {
    c.fillStyle = color;
    c.fillRect(0, 0, canvas.width, canvas.height)
}
function ClearAll() {

    c.clearRect(0, 0, canvas.width, canvas.height)
}

document.querySelector("#color").addEventListener("change", (e) => color = e.target.value)

document.querySelector("#range").addEventListener("change", (e) => {
    lw = e.target.value
    document.querySelector("#rangeVal").textContent = lw;
})

canvas.addEventListener("mousedown", () => { isMouseDown = true;
c.beginPath();
});
canvas.addEventListener("mouseup", () => isMouseDown = false)

canvas.addEventListener("mousemove", (e) => {
    c.fillStyle = color
    c.strokeStyle = color
    c.lineWidth = lw

    c.lineTo(e.clientX, e.clientY)
    c.stroke()
    c.beginPath()
    c.arc(e.clientX, e.clientY, lw/2, 0, 2* Math.PI)
    c.fill()
    
    c.beginPath()
    c.moveTo(e.clientX, e.clientY)
})






