let color = "black"
let lw = 10
let isMouseDown = false;
let canvas = document.querySelector("canvas")
let c = canvas.getContext("2d")

function fillin(){
    c.fillStyle = color;
    c.fillRect(0,0, canvas.width, canvas.height)
    
}
function clearAll(){
    c.clearRect(0,0, canvas.width, canvas.height)
    
}

document.querySelector("#color").addEventListener("change", ()=>color = e.target.value);
    
