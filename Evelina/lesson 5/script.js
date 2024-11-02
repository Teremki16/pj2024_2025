let boxSize = 5

function draw_box(){
    for(let i = 0; i <boxSize; i++){
        let a = ""
        for(let j = 0; j < boxSize; j++){
            a += "* "
    }
    console.log(a) 
  }
}

function convert_to_miles(km){
   return km * 0.6214
}

    

function get_days(month){
    if(month < 1 || month > 12) return "wrong number"
    if(month == 2){
        return 28;
    }else if (month == 4 || month == 6 || month || month == 11){
        return 30;
    }else {
        return 31
    }
}
// let d = +prompt()
//     alert(`in ${d}th mounth are ${get_days(d)} days`)


function v(h, w, d){
    return w * d * h 
}

function add(a, b){
    return a + b
}
function subtract(a, b ){
    return a-b
}
function multiply(a, b){
    return a*b
}
function devide(a, b){
    if(b == 0){
        console.log("на нуль ділити не можна")
        return 0;
    }
    return a/b
}

function calculator(){
    let a = +prompt("First number") 
    let o = +prompt("operator") 
    let b = +prompt("Second number") 
    switch(o){
        case "+":
            console.log(`${a} + ${b} = ${add(a,b)}`)
            break;
        case "-":
            console.log(`${a} - ${b} = ${subtract(a,b)}`)
            break;
        case "*":
            console.log(`${a} + ${b} = ${multipy(a,b)}`)
            break;
        case "/":
            console.log(`${a} / ${b} = ${devide(a,b)}`)
            break;
    }
}
calculator