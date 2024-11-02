// let answer = 0
// let max = 0
// do {
//     answer = +prompt("Введіть позитивне числo")
//     if (answer > max) {
//         max = answer
//     }
// }while(answer != 0)
//     alert(`макс введене число це ${max}`)

// let count = +prompt('яке число будем перевіряти')
// let summ = 0
// for (let i = 1; i < count; i++){
//     if(count % i == 0){
//         summ += i;
//     }
// }
// alert(`сума всіх дільників числоа ${count} дорівнює ${summ}`)


// let a = +prompt("введіть перше числ")
// let b = +prompt("введіть друге числ")
// let count = 0;
// if(a < b){
//     for(let i = a; i < b; i++){
//         let lastNumber = (i**3) % 10;
//      if(lastNumber == 4 || lastNumber == 9) count++;
//     }
//     alert(`в діапазоні від ${a} до ${b} кількість чисел в кубі які закінчуются на 4 або 9 дорівнює ${count}`)
// }else{
//     alert(`дура? число ${a}більше за ${b}`)
// }


let m = +prompt(`скільки бул боссінів спочатку`)
let p = +prompt(`з якою швидкістью розмножуються босінни`)
let n = +prompt(`скільки днів пройшло`)

for(let i = 1; i <= n; i++){
    console.log(`день ${i}: ${m}`)
    m += (p / 100) * m
}