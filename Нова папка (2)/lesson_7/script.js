let input = document.querySelector("#text")
let addBtn = document.querySelector("#add")
let clearBtn = document.querySelector("#clear")
let list = document.querySelector(".list")

let array = []

function add(){
    let value = input.value
    array.push(value)
    input.value = " "
    draw()
}

function draw(){
    list.innerHTML = ""
    for(let i = 0; i < array.length; i++){
        list.innerHTML += `<div>${i + 1}.${array[i]}</div>`
}
}