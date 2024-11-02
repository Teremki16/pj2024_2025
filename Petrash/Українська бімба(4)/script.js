// let answer = 0
// let max = 0
// do {
//     answer = +prompt("Введіть позитивне число")
//     if(answer > max){
//         max = answer
//     }
// } while (answer != 0);
// alert(`Максимальне введене число це ${max}`)

// let count = +prompt(`Яке число будемо перевіряти`)
// let sum = 0
// for(let i = 1; i < count; i++){
//     if(count % i == 0){
//         sum += i
//     }
// }
// alert(`Сума всіх дільників числа ${count} дорівнює ${sum}`)

// let a = +prompt("Введіть перше число")
// let b = +prompt("Введіть друге число")
// let count = 0
// if(a < b){
//     for(let i = a; i < b; i++){
//         let lastNumber = i**3 % 10
//         if(lastNumber == 4 || lastNumber == 9) count++;
//     }

//     alert(`В діапазоні від ${a} до ${b}, кількість чисел в кубі які закінчуються на 4 або 9 дорівнює ${count}`)
// }else{
//     alert(`Ти шо бездарь? Твоє число ${a} більше ${b}`) 
// }

let m = +prompt("Скільки було кроликів спочатку") 
let p = +prompt("Як швидко вони множаться")
let n = +prompt("Скільки днів пройшло")

for(let i = 1; i < n; i++){
    console.log(`День ${i}: ${Math.floor(m)}`)
    m += (p / 100) * m
}