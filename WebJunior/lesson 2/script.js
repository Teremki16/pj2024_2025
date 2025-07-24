// let name = prompt("Як тебе звати, козаче?")
// let age = prompt("Скікі тобі рочків?")
// console.log(`Привіт, ${name}`)
// console.log(`Вітаю в Узбекістані`)
// console.log(`Твій рік народження ${2024 - age}`)

// let number = +prompt("Козаче, введи якесь число?", 5)
// console.log(`Обране число: ${number}`)
// console.log(`Наступне число: ${number + 1}`)
// console.log(`Наступне число: ${number + 2}`)

// let l = +prompt("Введіть довжину ребра куба")
// console.log(`Введене ребро: ${l} см`)
// console.log(`Об'єм куба: ${l ** 3}`)
// console.log(`Площа сторін куба: ${ 6 * (l ** 2)}`)

// let number = +prompt("Введіть число!")
// let n1 = number % 10
// let n2 = Math.floor((number % 100) / 10)
// let n3 = Math.floor(number / 100)

// console.log(`Число ${number}, сума цифр ${n1 + n2 + n3}, добуток ${n1 * n2 * n3}`)

// let age = +prompt("Скільки тобі років?")
// if (age < 18){
//     alert("Тобі після завтра в школу!")
// }else{
//     alert("Тобі після завтра в ТЦК (Твій центр кави)!")
// }

// let number = +prompt()
// number % 2 == 0 ? alert("Парне") : alert("Не парне")

// if(number % 2 == 0){
//     alert("Парне")
// }else{
//     alert("Не парне")
// }


// let password = prompt("Введіь пароль")
// let repeadPassword = prompt("Введіь пароль ще раз")
// if (password == repeadPassword){
//     alert("Паролі збігаються")
// }else{
//     alert("Паролі не збігаються, ну ти й ...")
// }


// let n1 = +prompt("Введіть перше число")
// let n2 = +prompt("Введіть друге число")
// let n3 = +prompt("Введіть третє число")

// let summ = 0

// if(n1 >  0) summ += n1
// if(n2 >  0) summ += n2
// if(n3 >  0) summ += n3
// alert(`Сума додатніх чисел: ${summ}`)

// let number = +prompt("Введи вже своє число ...")
// let n1 = number % 10
// let n2 = Math.floor(number % 100 / 10)
// let n3 = Math.floor(number % 1000 / 100)
// let n4 = Math.floor(number % 10000 / 1000)

// if(n1 + n4 == n3 - n2){
//     alert("Красавчік, все вірно")
// }else{
//     alert("Ні не виходить")
// }

// let number = +prompt("перевіримо твоє число на гарність")
// if(number % 7 == 0 || number % 17 == 0){
//     alert("число дуже гарне, Я німагу")
// }else{
//     alert("фу яке не гарне число")
// }

// let year = +prompt("Введи рік і я скажу чи він високосний")
// if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
//     alert("рік високосний")
// }else{
//     alert("рік НЕ високосний")
// }

let n1 = Math.floor(Math.random() * 100)
let n2 = Math.floor(Math.random() * 100)
let n3 = Math.floor(Math.random() * 100)

console.log(n1, n2, n3)
if((n1 > n2 && n1 < n3) || (n1 < n2 && n1 > n3)) console.log("середнє" + n1)
if((n2 > n1 && n2 < n3) || (n2 < n1 && n2 > n3)) console.log("середнє" + n2)
if((n3 > n1 && n3 < n2) || (n3 < n1 && n3 > n2)) console.log("середнє" + n3)
