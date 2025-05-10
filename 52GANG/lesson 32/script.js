// function setup(){
// }
//  function draw(){
//     createCanvas(100, 100, WEBGL);
//     background("blue");

//     fill("yellow");
//     circle(-300, -300, 100);
//     fill("yellow");
//     circle(100, 100, 100);
//     fill("yellow");
//     circle(300, 300, 100);
//     fill("yellow");
//     circle(200, 200, 200);
// }

function setup() {
  createCanvas(400, 400);
  background(255);
  strokeWeight(20);
  stroke(0);

  // Центр
  translate(width / 2, height / 2);

  let arm = -80; // довжина рамена
  let bend = 80; // довжина загину

  // Вертикальна і горизонтальна лінії
  line(-arm, 0, arm, 0);
  line(0, -arm, 0, arm);

  // Загнуті кінці проти годинникової стрілки
  // Верхнє рамено
  line(0, -arm, -bend, -arm);
  // Ліве рамено
  line(-arm, 0, -arm, bend);
  // Нижнє рамено
  line(0, arm, bend, arm);
  // Праве рамено
  line(arm, 0, arm, -bend);
} 

let angle = 0;

function setup() {
  createCanvas(400, 400);
  strokeWeight(20);
  stroke(0);
}

function draw() {
  background(255);

  translate(width / 2, height / 2); // Центр полотна
  rotate(angle); // Повертаємо координати на кут angle

  let arm = 80;
  let bend = 80;

  // Малюємо свастику
  line(-arm, 0, arm, 0);
  line(0, -arm, 0, arm);
  line(0, -arm, -bend, -arm);
  line(-arm, 0, -arm, bend);
  line(0, arm, bend, arm);
  line(arm, 0, arm, -bend);

  angle += 0.02; // Збільшуємо кут для анімації
}

// function setup() {
//   createCanvas(400, 400);
//   background(200, 220, 255); // світло-блакитне небо

//   // Малюємо тюрму (стіни)
//   fill(180);
//   rect(50, 100, 300, 250); // корпус тюрми

//   // Малюємо ґрати
//   stroke(100);
//   strokeWeight(6);
//   // Вертикальні ґрати
//   for (let x = 80; x <= 320; x += 30) {
//     line(x, 100, x, 350);
//   }
//   // Горизонтальні ґрати
//   for (let y = 130; y <= 320; y += 30) {
//     line(50, y, 350, y);
//   }

//   noStroke();

//   // Малюємо півня всередині тюрми

//   // Тіло півня
//   fill(255, 150, 0); // оранжевий
//   ellipse(200, 280, 80, 100);

//   // Голова
//   fill(255, 0, 0); // червоний гребінь
//   ellipse(200, 210, 60, 60);

//   // Гребінь
//   fill(200, 0, 0);
//   beginShape();
//   vertex(185, 190);
//   vertex(190, 170);
//   vertex(200, 180);
//   vertex(210, 170);
//   vertex(215, 190);
//   endShape(CLOSE);

//   // Очі
//   fill(255);
//   ellipse(185, 210, 20, 20);
//   ellipse(215, 210, 20, 20);
//   fill(0);
//   ellipse(185, 210, 8, 8);
//   ellipse(215, 210, 8, 8);

//   // Дзьоб
//   fill(255, 200, 0);
//   triangle(190, 230, 210, 230, 200, 250);

//   // Хвіст
//   fill(255, 100, 0);
//   ellipse(250, 300, 40, 80);

//   // Ноги
//   stroke(255, 165, 0);
//   strokeWeight(6);
//   line(180, 330, 180, 370);
//   line(220, 330, 220, 370);
//   noStroke();
// }
