let boxSize = 5
let triangleSize = 5


function draw_box(){
    for(let i = 0; i < boxSize; i++){
        let a = ""
        for(let j = 0; j < boxSize; j++){
            a += "*  "
        }
        console.log(a)
    }
}

function draw_triangle(size){
    for(let i = 1; i <= size; i++){
        let a = ""
        for(let j = 1; j <= i; j++){
            a += "*  "
        }
        console.log(a)
    }
}

function convert_to_miles(km = 1){
    return km / 1.609
}

// let a = convert_to_miles(+prompt("Введіть кількість миль"))
// alert(a)

function get_days(month){
    if(month < 1 || month > 12){
        return "Такого місяця немає"
    }
    if(month == 2){
        return 28
    }
    if(month == 4 || month == 6 || month == 9 || month == 11){
        return 30
    }
    return 31
}
// let d = +prompt()
// alert(`in ${d} month ${get_days(d)} days`)

function v(h, w, d){
    return h * w * d
}
// alert(v(2, 3, 4))


function add(a, b){
    return a + b
}

function sub(a, b){
    return a - b
}

function mul(a, b){
    return a * b
}

function div(a, b){ 
    if(b == 0){
        console.log("На нуль ділити не можна")
        return 0;
    }
    return a / b    
}

function calculator(){
    let a = +prompt("Введіть перше число")
    let o = prompt("Введіть число оператора (+, -, *, /)")
    let b = +prompt("Введіть друге число")
    switch(o){
        case "+":
        console.log(`${a} + ${b} = ${add(a, b)}`)
        break
        case "-":
        console.log(`${a} - ${b} = ${sub(a, b)}`)
        break
        case "*":
        console.log(`${a} * ${b} = ${mul(a, b)}`)
        break
        case "/":
        console.log(`${a} / ${b} = ${div(a, b)}`)
        break
    }
}

calculator()