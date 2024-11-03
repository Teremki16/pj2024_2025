let first = +prompt(`Glitch or Gift`)
console.log("дав перший будинок" +first)
let second = +prompt(`Glitch or Gift`)
console.log("дав другий будинок" +second)
let third = +prompt(`Glitch or Gift`)
console.log("дав  третій будинок" +third)
let summ = first + second + third
console.log("дали всього" +summ)
if(first < second && first < third){
    console.log(`перший жлоб`)
}
if(second < first && second < third){
    console.log(`другий жлоб`)
}
if(third < first && third < second){
    console.log(`третій жлоб`)
}
let podatok = Math.floor((summ/100)*13)
 
console.log(`кількість подарунків потрібно відати на покращення ${podatok}`)



