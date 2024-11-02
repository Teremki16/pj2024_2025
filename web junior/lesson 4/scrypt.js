// let answer = 0;
// let max = 0;
// do {
//     answer = +prompt("Введіть позитивне число")
//     if (answer > max){
//         max = answer
//     }
// }while(answer != 0)
// alert(`Максимальне введня число це ${max}`)

// let count = +prompt('Яке число будем перевіряти')
// let summ = 0
// for (let i = 1; i < count; i++){
//     if(count % i == 0){
//         summ += i;
//     }   
// }
// alert(`Сума всіх дільників числа ${count} дорівнює ${summ}`)


// let a = +prompt("Введіть перше число")
// let b = +prompt("Введіть друе число")
// let count = 0;
// if (a < b){
//    for( let i = a; i < b; i++){
//     let lastNumber = (i**3) % 10;
//     if(lastNumber == 4 || lastNumber == 9)count++;
//    }
//    alert(`В діфпазоні від ${a} до ${b}, кулькість чисел в кубі яі закінчуются на 4 або 9 дорівнює ${count}`)
// }else{
//     alert(`ну ти і дундук ${a} більше за ${b}`)
// }

let m = +prompt(`Скільки було кроликів спочатку`)
let p = +prompt(`Як швидко вони множаться`)
let n = +prompt(`Скільки днів пройшло`)

for(let i = 1; i <= n; i++){
    console.log(`День ${i}: ${Math.floor(m)}`)
    m += (p / 100) * m 
}