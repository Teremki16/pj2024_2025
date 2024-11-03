let first = +prompt("Введіть перше число")
console.log(`перший будинок${first}`)
let second = +prompt("Введіть друге число")
console.log(`другий будинок${second}`)
let third = +prompt("Введіть третє число")
console.log(`третій будинок${third}`)
let summ = first + second + third
console.log(`Сума всіх будинків${summ}`)
if(first < second && first < third)console.log("перший жмоб");
if(second < first && second < third)console.log("другий жмоб");
if(third < second && third < first)console.log("третій жмоб");
let podatok = (summ/100)*13 
console.log(`Подарунків ${podatok}`)

