let input = document.querySelector(".text")
let grid = document.querySelector(".grid")
let arr = []

function add(){
    let val = input.value
    arr.push(val)
    input.value = ""
}

function Cslear(){
    arr.length = 0
    show()
}

function show(){
    grid.innerHTML = ""
    for(let i = 0; i < arr.length; i++){
        let elem = document.createElement("div")
        elem.classList.add("elem")
        elem.textContent = arr[i]
        grid.append(elem)
    }
}