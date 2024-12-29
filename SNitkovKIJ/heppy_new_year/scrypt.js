let canvas = document.querySelector("canvas");
let c = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 512;


function triagle(x, y, w, h, color) {
    c.fillStyle = color;
    c.beginPath();
    c.moveTo(x, y);
    c.lineTo(w / 2 + x, y + h);
    c.lineTo(x - w / 2, y + h);
    c.fill();
    c.closePath();
}


triagle(256, 100, 100, 50, "rgb(79, 238, 111)");
triagle(256, 130, 150, 90, "rgb(79, 238, 111)");
triagle(256, 180, 200, 130, "rgb(79, 238, 111)");

function toy(x, y, color) {
    c.fillStyle = "black";
    c.fillRect(x, y, 2, 10);
    c.fillRect(x-5, y+ 10, 12, 6 );
    c.beginPath();
    c.fillStyle = color;
    c.arc(x + 1, y + 24,  10, 0, 2 * Math.PI);
    c.fill();
    c.closePath();
    
}
toy(200, 270, "red");
toy(260,260, "blue")
toy(300,270, "yellow")
toy(280, 170, "red");
toy(260,190, "blue")
toy(220,180, "yellow")


c.fillStyle = "brown";
c.fillRect(240, 310, 30, 40);

function drawStar(
    centerX,
    centerY,
    arms,
    innerRadius,
    outerRadius,
    startAngle,
    fillStyle,
    strokeStyle,
    lineWidth
  ) {
    startAngle = startAngle * Math.PI / 180  || 0;
    var step = Math.PI / arms,
        angle = startAngle
        ,hyp,x,y;
    ctx.strokeStyle = strokeStyle;
    ctx.fillStyle = fillStyle;
    ctx.lineWidth = lineWidth;
    ctx.beginPath();
    for (var i =0,len= 2 * arms; i <len; i++) {
      hyp = i & 1 ? innerRadius : outerRadius;
      x = centerX + Math.cos(angle) * hyp;
      y = centerY +Math.sin(angle) * hyp;
      angle+=step;
      ctx.lineTo(x, y);
    }
    ctx.closePath();
    fillStyle && ctx.fill();
    strokeStyle && ctx.stroke();
  }
  

  drawStar(120, 200, 5, 50, 100, -18,'yellow','red', 20);
  drawStar(120, 450, 6, 50, 100, 0,null,'blue', 5);
  drawStar(350, 120, 4, 50, 100, 0,'lime',null);
  drawStar(350, 450, 10, 50, 100, 0,'purple','black',10);
  drawStar(480, 250, 10, 80, 100, 0,'pink','green',10);
  

  c.fillStyle = "brown";
c.fillRect(10, 10, 30, 40);