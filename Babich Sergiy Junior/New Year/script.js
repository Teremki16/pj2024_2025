let canvas = document.querySelector("canvas")
let c = canvas.getContext("2d")
canvas.width = 602
canvas.height = 602

function triagle(x, y, w, h, color){
    c.fillStyle = color; 
    c.beginPath();
    c.moveTo(x, y);
    c.lineTo(w / 2 + x, y + h);
    c.lineTo(x - w / 2, y + h);
    c.fill();
    c.closePath();
}

triagle(256, 300, 200, 200, "green");
triagle(256, 190, 190, 190, "green");
triagle(256, 80, 170, 180, "green");


function toy(x, y, color){
    c.fillStyle = "black"
    c.fillRect(x, y, 2, 10)
    c.fillRect(x-5, y+ 10, 12, 6)
    c.beginPath();
    c.fillStyle = color;
    c.arc(x + 1,y + 24, 10, 0, Math.PI * 2);
    c.fill();
    c.closePath();
}

toy(220, 320, "red");
toy(220, 180, "blue");
toy(220, 420, "yellow");
toy(280, 420, "pink");
toy(280, 180, "yellow");
toy(280, 320, "brown");

c.fillStyle = "brown"
c.fillRect(230, 500, 50, 100)