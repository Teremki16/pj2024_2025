let canvas = document.querySelector("canvas");
let c = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 512;

let bg = new Image()
bg.src = "https://t3.ftcdn.net/jpg/02/98/03/22/360_F_298032209_YD4pFLDyzMyqBzso5xF5USR05hxqGuXf.jpg"

c.drawImage(bg, 0, 0, 512, 512)

function triagle(x, y, w, h, color) {
    c.fillStyle = color;
    c.beginPath();
    c.moveTo(x, y);
    c.lineTo(w / 2 + x, y + h);
    c.lineTo(x - w / 2, y + h);
    c.fill();
    c.closePath();
}

triagle(256, 200, 300, 120, "rgb(32, 122, 50)");
triagle(256, 150, 250, 100, "rgb(53, 169, 76)");
triagle(256, 100, 200, 80, "rgb(79, 238, 111)");



function toy(x, y, color) {
    c.fillStyle = "black";
    c.fillRect(x, y, 2, 10);
    c.fillRect(x - 5, y + 10, 12, 6);
    c.beginPath();
    c.fillStyle = color;
    c.arc(x + 1, y + 24, 10, 0, Math.PI * 2);
    c.fill();
    c.closePath();
}

toy(248, 140, "red");
toy(270, 200, "pink");
toy(220, 280, "pink");

c.fillStyle = "rgb(195, 101, 7)"
c.fillRect(235, 320, 50, 80)
