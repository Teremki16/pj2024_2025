// let name  = prompt("як тебе звати, Чебурече")
// let IP  = prompt("Який твій ел адрес")
// let age  = prompt("скілбки тобі років")
// let phone  = prompt("номер телефону будь ласка")
// console.log(`ПРивіт ${name}`)
// console.log(`твое IP  ${IP}`)
// console.log(`тВІЙ РІК НОРОДЖЕННЯ ${2024 -age}`)
// console.log(`Вже дзвоню на   ${phone}`)

// let number = +prompt("Чебуречеб введи якесь число",5)
// console.log(`Обране число:${number}`)
// console.log(`Наступне  число:${number + 1}`)
// console.log(`Наступне число:${number + 2}`)

// let l = +prompt("Ведіть довжина ребра")
// console.log(`Введене ребро ${l} см`)
// console.log(`Об'єм куба: ${l ** 3}`)
// console.log(`Площа сторін куба: ${6 * (1 ** 2)}`)

// let number = +prompt("Ведіть число")
// let n1 = number % 10
// let n2 = Math.floor((number % 100) / 10)
// let n3 = Math.floor(number / 100)
// console.log(`Число ${number}, сума цифр${n1 + n2 + n3}, добуток ${n1 * n2 * n3}`)

// let age = +prompt("Скільки тобі років")
// if(age < 18){
//     alert("ТОБІ ПІСЛЯ завтра в школу")
// }else{
//     alert("Тобі після завтра в тцк")
// }

// let number = +prompt("Ведіть число")
// number % 2 == 0 ? alert("Парне"):alert("не парне")



// let password = prompt("Ведіть пароль")
// let repeadpassword = prompt("Ведіть пароль ще раз")
// if (password == repeadpassword){
//     alert("password is correct")
// }else{
//     alert("password isn`t corect")
// }

// let n1 = +prompt("Enter firs nomber")
// let n2 = +prompt("Enter second nomber")
// let n3 = +prompt("Enter third nomber")

// let summ = 0 

// if(n1 > 0) summ += n1
// if(n2 > 0) summ += n2
// if(n3 > 0) summ += n3
// alert(`Сума додатніх чисел: ${summ}`)   

// let number = +prompt("Перевіримо твое число на гарність")
// if(number % 7 == 0 || number % 17 == 0){
//     alert("число дуже гарнеб Я німагу")
// }else{
//     alert("no")
// }

// let year = +prompt("Введи рік і я скажу чи він високоний")
// if((year % 4 == 0 % year % 100 != 0) || year % 400 == 0){
//     alert("рік високосний ")
// }else{
//     alert("рік НЕ високосний")
// }

let n1 = Math.floor(Math.random() * 100)
let n2 = Math.floor(Math.random() * 100)
let n3 = Math.floor(Math.random() * 100)

console.log(n1,n2,n3)
if((n1 > n2 && n1 < n3) || (n1 < n2 && n1 > n3)) console.log("Середне" + n1)
if((n2 > n1 && n2 < n3) || (n2 < n1 && n2 > n3)) console.log("Середне" + n1)
if((n3 > n1 && n3 < n2) || (n3 < n1 && n3 > n2)) console.log("Середне" + n1)