// let password = prompt("Введіть пароль")
// let repeadPassword = prompt("Введіть пароль ще раз")
// if (password == repeadPassword){
//     alert("Паролі співпадають")
// }else{
//     alert("Паролі не співпадають")
// } 

// let number = +prompt("Введіть число")
// let n1 = number % 10
// let n2 = Math.floor( number % 100 / 10)
// let n3 = Math.floor( number % 1000 / 100)
// let n4 = Math.floor( number % 10000 / 1000)

// alert(n1 + n2 + n3 + n4)

// let number = +prompt("перевіримо твоє число на гарність")
// if(number % 7 == 0 || number % 17 == 0){
//     alert("Ваше число гарне")
// }else{
//     alert("Ваше число не гарне")
// }

// let year = +prompt("Введіть рік")
// if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
//     alert("Високосний рік")
// }else{
//     alert("Не високосний рік")
// }
let n1 = Math.floor(Math.random() * 100)
let n2 = Math.floor(Math.random() * 100)
let n3 = Math.floor(Math.random() * 100)

console.log(n1, n2, n3)
if ((n1 > n2 && n1< n3) || (n1 < n2 && n1 > n3)) console.log("середнє" +  n1)
if ((n2 > n2 && n2< n3) || (n2 < n2 && n2 > n3)) console.log("середнє" +  n2)
if ((n3 > n1 && n3< n2) || (n3 < n1 && n3 > n2)) console.log("середнє" +  n3)

