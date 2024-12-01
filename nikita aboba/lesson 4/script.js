// let answer = 0
// let max = 0
// do{
//     answer = +prompt("ВВВВВВВВВВВВВВВВВВВВВввведіть позитивне число")
//     if (answer > max){
//         max = answer
//     }
// }while(answer != 0)
// alert(`Максимальне введене число це ${max}`)

// let count = +prompt('Яке число будемо перевіряти')
// let summ = 0;
// for (let i = 1; i < count; i++) {
//     if(count % i == 0){
//         summ += i
//     }
// }  
// alert(`Сума всіх дільників числа${count} дорівнює ${summ}`)


// let a = +prompt("Ведіть перше число")
// let b = +prompt("Ведіть друге число")
// let count = 0
// if(a < b){
//     for(let i = a;i < b;i++){
//         let lastnumber = (i**3) % 10;
//         if(lastnumber == 4 || lastnumber == 9) count += 1
//     }
//     alert(`В діапазоні від до, кількість чиселв кубі які закінчуються на 4 або 9 дорівнює ${count}`)
// }else{
//     alert(`ну ти і дудук число${a} більше за ${b}`)
// }

let m = +prompt(`скільки було кроликів спочатку`)
let p = +prompt(`як швидко вони розмножуються `)
let n = +prompt(`скільки днів пройшло`)

for(let i = 1; i <= n; i++){
    console.log(`День ${i}: ${Math.floor(m)}`)
    m += (p / 100 ) * m
}