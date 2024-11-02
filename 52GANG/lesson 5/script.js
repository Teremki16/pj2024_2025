let boxSize = +prompt()
function draw_box(){
    for(let i = 0; i < boxSize; i++){
        let a = ""
        for(let j = 0; j < boxSize; j++){
            a += "*   "
        }
        console.log(a)
    }
}

function draw_triG(size){
    for(let i = 1; i <= size; i++){
        let a = ""
        for(let j = 1; j <= i; j++){
            a += "*   "
        }
        console.log(a)
    }
}

function convert_to_miles(km = 1){
    return km * 0.6214
}

function get_days(month){
    if(month < 1 || month > 12) return "wrong number"
    if(month == 2){
        return 28;
    }else if (month == 4 || month == 6 || month == 9 || month == 11){
        return 30
    }else{
        return 31
    }
}
// let d = +prompt()
// alert(`in ${d}th month are ${get_days(d)} days`)

function v(w, d, h){
    return w*d*h
}

function add(a, b){
return a+b
}
function subT(a, b){
return a-b
}
function multP(a, b){
return a*b
}
function devD(a, b){
    if(b == 0){
        console.log("на ноль делить можно но не надо")
    }
    return a/b
}
function calculator(){
    let a = +prompt("First number")
    let a = +prompt("Operator")
    let a = +prompt("Second number")
    switch(o){
        case "+":
            console.log(`${a} + ${b} = ${add(a, b)}`)
            break;
        case "-":
            console.log(`${a} - ${b} = ${subT(a, b)}`)
            break;
        case "*":
            console.log(`${a} * ${b} = ${multP(a, b)}`)
            break;
        case "/":
            console.log(`${a} / ${b} = ${devD(a, b)}`)
            break;
    }
}
