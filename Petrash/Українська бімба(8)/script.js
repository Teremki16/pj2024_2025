let input = document.querySelector("#text")
let addBTN = document.querySelector("#add")
let clearBTN = document.querySelector("#clear")
let list = document.querySelector(".list")

let tasks = []
function add(){
    let value = input.value
    tasks.push(value)
    input.value = ""
    draw()
}

function draw(){
    list.innerHTML = ""
    for(let i = 0; i < tasks.length; i++){
        list.innerHTML += `<div>${i + 1}. ${tasks[i]}</div>`
    }
}