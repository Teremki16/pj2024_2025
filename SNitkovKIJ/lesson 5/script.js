//let boxSize = +prompt()
//
//function drawBox(size) {
//    for (let i = 0; i < boxSize; i++) {
//        let a = ""
//    for(let j = 0; j < boxSize; j++) {
//        a += "*   "
//    } 
//    console.log(a)
//    }  
//}
//drawBox()



function draw_traiangle(){
for (let i = 1; i <=boxSize; i++) {
    let a = ""
    for(let j = 1; j <= i; j++) {
        a += "*   "
    } 
    console.log(a)
    }
}
function convert_to_number(km = 1){
    return km * 0.621371
}


function get_days(moth){
    if(moth <1 || moth > 12) return "Error"
    if(moth == 2){
        return 28
    }else if(moth == 4 || moth == 6 || moth == 9 || moth == 11){
        return 30
    }else{
        return 31
    }
}
//let d = +prompt()
//alert(`in ${d}th munth are ${get_days(d)} days`)

function v(h, w, d){
    return h * w * d
}
function add(a, b){}