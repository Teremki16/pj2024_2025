function rnd(){
    return Math.floor(Math.random() * 255)
}
function b1(){
    document.getElementsByClassName("g")[0].style.color = `rgb(${rnd()},${rnd()},${rnd()})`
}
function b2(){
    document.getElementsByClassName("o")[0].style.borderRadius = "1rem"
}
function b3(){
    document.body.style.background = `rgb(${rnd()},${rnd()},${rnd()})`
}
function b4(){
    document.querySelector(".d").style.background = `rgb(${rnd()},${rnd()},${rnd()})`
}
function b5(){
    if(document.body.style.fontFamily == "cursive"){
        document.body.style.fontFamily = "Impact"
    }else{
        document.body.style.fontFamily= "cursive"
    }
}

 document.querySelector("div").innerHTML += "<h1>Гойда</h1>"
//  console.log(document.querySelectorAll("div")[2].outerHTML)

 setInterval(function(){
    let el = document.querySelector(".y")
    el.hidden = !el.hidden
 }, 200)