
// let surname = prompt("Введіть своє прізвище")
// let age = prompt("Введіть свій вік")
// let sex = prompt("Ваша стать")
// console.log(`Привіт ${name} ${surname}, тобі ${age} років, я думаю ти ${sex}`)

// let number = +prompt("Введіть перше число", 5)
// сonsole.log(`Ти обрав ${number}`)
// console.log(`Наступне число: ${number + 1}`)
// console.log(`Наступне число: ${number + 1}`)

// let l = +prompt("Введіть довжину ребра куба")
// console.log(`Введене ребро: ${l} см`)
// console.log(`Об'єм: ${l**3} см`)
// console.log(`Площа сторін куба: ${6 * (l**2)} см`)

// let number = +prompt("Введіть число!")
// let n1 = number % 10
// let n2 = Math.floor((number % 100) / 10)
// let n3 = Math.floor(number / 100)
// console.log(`Число ${number}, сума цифр ${n1 + n2 + n3}, добуток цифр ${n1 * n2 * n3}`)

// let age = +prompt("Введіть свій вік")
// if (age >= 18) {
//     alert("Ви повнолітні, прибудьте в ТЦК(Торгова Центральна Карта) там ви зможете отримати картку")
// } else {
//     alert("Ви ще не досягли 18 років")
// }

// let number = +prompt()
// number % 2 === 0 ? alert("Число парне") : alert("Число непарне")\

// let password = prompt("Введіть пароль")
// let repeatpassword = prompt("Введіть пароль ще раз")
// if (password == repeatpassword) {
//     alert("Паролі збігаються")
// } else {
//     alert("Ви відправляєтеся на АТО бо ввели неправильний пароль")
// }

// let n1 = +prompt("Введіть перше число")
// let n2 = +prompt("Введіть другу число")
// let n3 = +prompt("Введіть третє число")
// let summ = 0
// if (n1>0) summ += n1
// if (n2>0) summ += n2
// if (n3>0) summ += n3
// alert(`Сума додатніх чисел: ${summ}`)

// let number = +prompt("Введи чотири циферки")
// let n1 =  number % 10
// let n2 =  Math.floor(number % 100 / 10)
// let n3 =  Math.floor(number % 1000 / 100)
// let n4 =  Math.floor(number % 10000 / 1000)

// if(n1 + n4 == n3 - n2){
//     alert("ZOV")
// }else{
//     alert("Not ZOV")
// }

// let number = +prompt("Перевіримо твоє число на гарність")
// if(number % 7 == 0 || number % 17 == 0){
//     alert("Твоє число є гарним")
// }else{a
//     alert("Твоє число не є гарним")
// }

// let year = +prompt("Введи рік я скажу чи він високосний")
// if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
//     alert("Високосний")
// }else{
//     alert("Не високосний")
// }

let n1 = Math.floor(Math.random() * 100)
let n2 = Math.floor(Math.random() * 100)
let n3 = Math.floor(Math.random() * 100)

console.log(n1, n2, n3)
if((n1 > n2 && n1 < n3) || (n1 < n2 && n1 > n3)) console.log("Середнє: " + n1)
if((n2 > n1 && n2 < n3) || (n2 < n1 && n2 > n3)) console.log("Середнє: " + n2)
if((n3 > n1 && n3 < n2) || (n3 < n1 && n3 > n2)) console.log("Середнє: " + n3)