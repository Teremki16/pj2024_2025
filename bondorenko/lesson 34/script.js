let gameState = 'game'

let headX = 0;
let headY = 0;

let moveX = 0;
let moveY = 0;

let foodX = Math.floor(Math.random() * 20) * 20
let foodY = Math.floor(Math.random() * 20) * 20

let tail = [{
    x: 0,
    y: 0
}]

let score = 0;
let button;
function setup(){
    createCanvas(400 , 400);
    button = createButton("Reload")
    .position(182, 160)
    .hide()
    .mousePressed(()=>{
        tail = [{
            x: 0,
            y: 0
        }]

        headX = 0
        heaadY = 0
        moveX = 0
        moveY = 0
        score = 0
        button.hide()
         gameState = "game"
    })
        
    }



function setup(){
    createCanvas(400, 400)
}

function draw (){
    if(gameState == `game`){
      background(238, 253, 180);  
      fill("skyblue")
      square(headX, headY,  20) 
       fill("red")
      square(foodX, foodY, 20)
      if(foodX == headX && foodY == headY){
         foodX = Math.floor(Math.random() * 20) * 20
         foodY = Math.floor(Math.random() * 20) * 20
         addTail()
         score++
      }
     
      if(frameCount % 10 == 0){
        headX += moveX
        headY += moveY
        if(headX > 400) headX = 0
        if(headY > 400) headY = 0
        if(headX < 0) headX = 380
        if(headY < 0) headY = 380
        updateTail(headX, headY)
        checkCollision()
      }
      drawTAil()
      textSize(20)
      fill(0,0,0)
      text("Score: " + score,5,20)
    }else if (gameState == "game over"){
        background(0, 0, 0,)
        textSize(20)
        fill("white")
        textAlign(CENTER)
        text("GAME OVER", 200, 100)
        textSize(15)
        text("Score: "+ score, 200, 130)
        button.show()
        
    }
}

function keyPressed(){
    if(keyCode == DOWN_ARROW && moveY != -20){
        moveX = 0;
        moveY = 20
    }
    if(keyCode == UP_ARROW  && moveY != 20){
        moveX = 0;
        moveY = -20
    }
    if(keyCode == LEFT_ARROW  && moveX != 20){
        moveX = -20;
        moveY = 0
    }
    if(keyCode == RIGHT_ARROW  && moveX != -20){
        moveX = 20;
        moveY = 0
    }
    
}

function addTail(){
    tail.push({
        x: headX,
        y: headY
    })
}

function updateTail(targetX, targetY){
    if(tail.length > 0){
        for(let i = tail.length - 1 ; i > 0; i--){
            tail[i].x = tail[i - 1].x
            tail[i].y = tail[i - 1].y
        }
        tail[0].x = targetX
        tail[0].y = targetY
    }
}

function drawTAil(){
    fill("skyblue")
    for(let i = 0; i < tail.length; i++){
        square(tail[i].x, tail[i].y, 20)
    }
}

function checkCollision(){
    for(let i = 2; i < tail.length; i++){
        if(tail[i].x == headX && tail[i].y == headY){
            gameState = "game over"
        }
    }
}