let list = document.querySelector(".list")
let count = 1;

function add(){
    let val = document.querySelector("input").value
    if(val =="") return
    let elem = document.createElement("div")
    elem.textContent = val
    elem.setAttribute("class", "task " + "t" + count )
    elem.setAttribute("onclick", `removeTask('.t${count}')`)
    count++
    list.append(elem)
    document.querySelector("input").value = ""
    
}

function removeTask(name){
    let elem = document.querySelector(name)
elem.style.textDecoration = "line-through"
setTimeout(()=>elem.remove(), 1000)
}