// let password = prompt(`Введіть пароль`)
// let repeadpassword = prompt(`пітвердіть пароль`)
// if (password == repeadpassword){
//     alert(`Пароль співпадає`)
// } else {
//     alert(`Паролі не збігаються`)
// }

// let n1 = +prompt(`Введіть перше число`)
// let n2 = +prompt(`Введіть друге число`)
// let n3 = +prompt(`Введіть третє число`)

// let summ = 0

// if(n1 > 0)summ += n1
// if(n2 > 0)summ += n2
// if(n3 > 0)summ += n3
// alert(`Сума додатніх чисел: ${summ}`)


// let number = +prompt(`Введіть число`)
// let n1 = number % 10
// let n2 = Math.floor (number % 100 / 10)
// let n3 = Math.floor (number % 1000 / 100)
// let n4 = Math.floor (number % 10000 / 1000)
// if(n1 + n4 == n3 - n2){
//     alert(`все вірно`)
// }else{
//     alert(`ні не виходит`)
// }

// let number = +prompt(`Перевіремо твоє чило на гарність`)
// if(number % 7 == 0 || number % 17 == 0){
//     alert(`Число дуже гарне`)  
// } else{
//     alert(`не гарне число`)
// }

// let year = +prompt(`Введіть рік і я скажу чи він високосний`)
// if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
//     alert(`рік високосний`)
// }else{
//     alert(`рік НЕ високосний`)
// }

// let n1 = Math.floor(Math.random() * 100)
// let n2 = Math.floor(Math.random() * 100)
// let n3 = Math.floor(Math.random() * 100)
// console.log(n1, n2, n3)
// if((n1 > n2 && n1 < n3) || (n1 < n2 && n1 > n3)) console.log(`середнє` + n1)
// if((n2 > n1 && n2 < n3) || (n2 < n1 && n2 > n3)) console.log(`середнє` + n2)
// if((n3 > n1 && n3 < n2) || (n3 < n1 && n3 > n2)) console.log(`середнє` + n3)


let i = +prompt(`Скільки ти хочеш рандомних цифр`)
let count = 1
while(count <=i){
    console.log(`Random number ${count}: ${Math.floor(Math.random() * 100)}`)
    count++;
}