let n1 = +prompt("Введіть перше число")
console.log(`один негро: ${n1}`)
let n2 = +prompt("Введіть друге число")
console.log(`два негро: ${n2}`)
let n3 = +prompt("Введіть третє число")
console.log(`три негро: ${n3}`)
let summ = n1 + n2 + n3
if(n1<n2 && n1<n3)console.log("перший негро полнейший негр")
if(n2<n1 && n2<n3)console.log("другий негро полнейший негр")
if(n3<n1 && n3<n2)console.log("третій негро полнейший негр")

console.log(`Сума всіх подарунків = ${summ}`)
let podatork = Math.floor((summ/100) * 13) 
console.log(`Подарунків за ${podatork} `)


