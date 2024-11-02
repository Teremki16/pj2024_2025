// let name = prompt("Як тебе звати, девочка?")
// let age = prompt("Скільки тобі рочків?")
// console.log(`Привет, ${name}`)
// console.log(`Вітаю в Узбекистане`)
// console.log(`Твій рік народження ${2024 - age}`)

// let number = +prompt("Андрей, введи якесь число?", 5)
// console.log(`Обране число: ${number}`)
// console.log(`Наступне число: ${number + 1}`)
// console.log(`Обране число: ${number + 2}`)

// let l = +promt("Введіть довжину ребра куба")
// console.log(`Введене ребро: ${l} см`)
// console.log(`об'єм куба : ${l ** 3}`)
// console.log(`Площа сторін куба : ${ 6 * (l ** 2)}`)

// let number = +prompt("Введіть число!")
// let n1 = number % 10
// let n2 = Math.floor((number % 100) / 10)
// let n3 = Math.floor(number / 100)

// console.log(`Число ${number}, сумма цифр ${n1 + n2 + n3}, 
// добуток ${n1 * n2 * n3}`)

// let age = +prompt("Скільки тобі років?")
// if (age < 18){
//      alert("Тобі після завтра у школу!")
// }else{
//     alert("Тебе после завтра в ТЦК (Твій центр кави!")
// }


// let password = prompt("")
// let pereatPassword = prompt("")
// if (password == repeatPassword){
//     alert("паролі збігаються")
// }else{
//   alert("паролі не збігаються")
// }



// let n1 = +prompt("Введіть перше число")
// let n2 = +prompt("Введіть друге число")
// let n3 = +prompt("Введіть третє число")
 
// let summ = 0

// if(n1 >  0) summ += n1
// if(n2 >  0) summ += n2
// if(n3 >  0) summ += n3
// alert(`Сума додатніх чисел: ${summ}`)

// let number = +prompt("Введи вже своє число...")
// let n1 = number % 10
// let n2 = Math.floor(number % 100 / 10)
// let n3 = Math.floor(number % 1000 / 100)
// let n4 = Math.floor(number % 10000 / 1000)

// if(n1 + n4 == n3 - n2){
//       alert("Красавчік, все вірно")
// }else{
//    alert("Ні, не виходить")
// }

// let number = +prompt("Перевіримо твоє число на гарність")
// if(number % 7 == 0 || number % 17 == 0){
//     alert("число дуже гарне, Я не могу")
// }else{
//     alert("фУ, яке не гарне число")
// }

// let year = +prompt("Введи рік і я скажу чи він високосний")
// if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
//     alert("рік високосний")
// }else{
//     alert("рік не високосний")
// }\

let n1 = Math.floor(Math.random() * 100)
let n2 = Math.floor(Math.random() * 100)
let n3 = Math.floor(Math.random() * 100)

console.log(n1, n2, n3)
if((n1 > n2 && n1 < n3) || (n1 < n2 && n1 > n3)) console.log("середнє" + n1)
if((n2 > n1 && n2 < n3) || (n2 < n1 && n2 > n3)) console.log("середнє" + n2)
if((n3 > n1 && n3 < n2) || (n3 < n1 && n3 > n2)) console.log("середнє" + n3)