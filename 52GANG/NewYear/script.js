let canvas = document.querySelector("canvas");
let c = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 512;

let bg = new Image
bg.src = "https://images.joseartgallery.com/7435/conversions/landscape-painting-winter-in-the-carpathians-thumb1920.jpg"
c.drawImage(bg, 0, 0, 512, 512)

function triengle(x, y, w, h, color) {
    c.fillStyle = color;
    c.beginPath();
    c.moveTo(x, y);
    c.lineTo(w / 2 + x, y + h);
    c.lineTo(x - w / 2, y + h);
    c.fill();
    c.closePath();
}
triengle(300, 230, 180, 80, "rgb(27, 113, 27)")
triengle(300, 230, 179, 75, "rgb(205, 224, 205)")
triengle(300, 180, 160, 70, "rgb(26, 107, 26)")
triengle(300, 179, 160, 65, "rgb(220, 211, 211)")
triengle(300, 140, 130, 60, "rgb(24, 99, 24)")
triengle(300, 139, 130, 55, "rgb(177, 199, 177)")
triengle(300, 100, 100, 50, "rgb(29, 118, 29)")
triengle(300, 98, 100, 45, "rgb(233, 233, 233)")

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
toy(270, 140, "rgb(234, 92, 26)");
toy(330, 150, "rgb(114, 46, 15)");
toy(250, 200, "rgb(59, 201, 52)");
toy(300, 190, "rgb(91, 70, 249)");
toy(340, 220, "rgb(222, 18, 18)");
toy(250, 280, "rgb(250, 87, 168)");
toy(280, 250, "rgb(254, 254, 254)");
toy(330, 270, "rgb(210, 240, 13)");

function stick(x, y, w, h, color) {
    c.fillStyle = color;
    c.fillRect(x, y, w, h, color)
}
stick(295, 300, 15, 70, "rgb(102, 50, 25)");