function setup() {
  createCanvas(400, 400);
  background(200, 230, 255); // світле небо

  stroke(0);
  strokeWeight(1);

  // Тіло
  fill(230, 200, 50); // жовтий
  ellipse(200, 220, 150, 100);

  // Голова
  ellipse(270, 140, 50, 50);

  // Око
  fill(0);
  ellipse(280, 135, 10, 10);

  // Дзьоб
  fill(255, 150, 0);
  triangle(295, 160, 315, 150, 315, 170);

  // Шия
  stroke(0);
  line(235, 190, 255, 150);

  // Ноги
  line(180, 270, 170, 350);
  line(220, 270, 230, 350);
}
