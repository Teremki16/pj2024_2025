function rnd(){
    return Math.floor(Math.random() * 255)
}

function b1(){
    document.getElementsByClassName("el1")[0].style.color = `rgb(${rnd()},${rnd()},${rnd()})`
}

function b2(){
    document.getElementsByClassName("el2")[0].style.borderRadius = "1rem"
}

function b3(){
    document.body.style.backgroundColor = `rgb(${rnd()},${rnd()},${rnd()})`
}



function b4(){
    document.querySelector(".el4").style.backgroundColor = `rgb(${rnd()},${rnd()},${rnd()})`
}

function b5(){
    if(document.body.style.fontFamily = "cursive"){
        document.body.style.fontFamily = "sans-serif"
    }else{
        document.body.style.fontFamily = "cursive"
    }
}


console.dir(document.querySelectorAll("div")[2])
document.querySelectorAll("div")[2].innerHTML += "<h1>пайтон для геев</h1>"
console.log(document.querySelectorAll("div")[2].outerHTML)

setInterval(function(){
    let el = document.querySelector(".el3")
    el.hidden = !el.hidden

}, 200)