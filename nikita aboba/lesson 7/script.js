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
    document.body.style.background = `rgb(${rnd()},${rnd()},${rnd()})`
}

setInterval(()=>b3(), 100)

function b4(){
    document.querySelector(".el4").style.background = `rgb(${rnd()},${rnd()},${rnd()})`
}

function b5(){
    if(document.body.style.fontFamily == "cursive"){
        document.body.style.fontFamily = "sans-serif"
    }else{
        document.body.style.fontFamily = "cursive"
    }
}

console.dir(document.querySelectorAll("div")[2])
document.querySelectorAll("div")[2].innerText = "Богдан любить пайтон"