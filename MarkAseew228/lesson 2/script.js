// let name = prompt("як тебе звати, козаче?")
// let age = prompt("Скікі тобі рочків?")
// console.log(`Вітаю в Узбекістані`)
// console.log(`Твій рік народження ${2024 - age}`)

// let number =  +prompt("Козаче, введи якесь число?", 5)
// console.log(`Обране число: ${number}`)
// console.log(`Наступне число: ${number + 1}`)
// console.log(`Наступне число: ${number + 2}`)

// let l = +prompt("Введіть довжину ребра куба")
// console.log(`Введене ребро: ${1} см`)
// console.log(`Площа сторін куба: ${1 ** 3}`)
// console.log(`Площа сторін куба: ${ 6 * (1 ** 2)}`)

// let number = prompt("Введіть число!")
// let n1 = number % 10 
// let n2 = Math.floor((number % 100) / 10)
// let n3 = Math.floor(number / 100)

// console.timeLog(`Число ${number}, сума цифр ${n1 + n2 + n3},
//     добуток ${n1 * n2 * n3}`)

// let age = +prompt("Скільки вам років?")
// if(age < 18){
//     alert("Тобі після завтру в школу!")
// }else{
//     alert("Тобі пілся завтра в ТЦК (Твій центр кави)!")
// }

// let number = +prompt()
// number % 2 == 0 ? alert ("Парне") : alert("Не парне")

// let password = prompt("Введіть пароль")
// let repeatPassword = prompt("Введіть пароль ще раз")
// if(password == repeatPassword)
//     alert("Пароль збігається,ну ти й ...")
// else{
//     alert("Пароль не збігається, ну ти й ...")
// }

// let n1 = +prompt("Введіть перше число")
// let n2 = +prompt("Введіть друге число")
// let n3 = +prompt("Введіть третє число")

// let summ = 0

// if(n1 > 0) summ + 1
// if(n1 > 0) summ + 2
// if(n1 > 0) summ + 3
// alert(`Сума додатніх чисел ${summ}`)

// let number = +prompt("Введіть вже своє число")
// let n1 = number % 10
// let n2 = Math.floor(number % 100 / 10)
// let n3 = Math.floor(number % 1000 / 100)
// let n4 = Math.floor(number % 10000 / 1000)

// if(n1 + n4 == n3 - n2){
//     alert("Красавчик, все рівно")
// }else{
//     alert("Ні не виходить")
// }

// let number= +prompt("Перевіримо твоє число на гарність")
// if(number % 7 == 0 || number % 17 == 0){
//     alert("Число дуже гарне, Я німагу")
// }else{
//     alert("Фу яке не гарне число")
// }

// let year = +prompt("Введи рік і я скажу чи він високосний")
// if(year %  4 == 0 && year % 100 != 0 || year % 400 ==0){
//     alert("Використаний високосний рік")
// }else{
//     alert("Використаний не високосний рік")
// }

let n1 = Math.floor(Math.random() * 100)
let n2 = Math.floor(Math.random() * 100)
let n3 = Math.floor(Math.random() * 100)

console.log(n1, n2, n3)
if((n1 > n2 && n1 < n3)||(n1 < n2 && n1 > n3)) console.log("середнє" + n1)   
if((n2 > n1 && n2 < n3)||(n2 < n1 && n2 > n3)) console.log("середнє" + n2)   
if((n3 > n1 && n3 < n2)||(n3 < n1 && n3 > n2)) console.log("середнє" + n3)