// let answer = 0;
// let max = 0;
// do{
//     answer = +prompt("Введіть позитивне число")
//     if(answer > max){
//         max = answer}
// }while(answer !=0)
// alert(`Максимальне введене число це ${max}`)  

// let count = +prompt('Яке число будемо перевіряти')
// let summ = 0;
// for(i = 1 ; i < count; i++){
//    if(count % i == 0){
//     summ += i} 
// }alert(`Сума всіх дільників числа ${count} дорівнює ${summ}`)

// let min = +prompt("Введіть мінімальне число")
// let max = +prompt("Введіть максимальне число")
// let count = 0;
// if(min < max){
//     for(let i = min; i < max; i++){
//         let lnumm = (i**3) % 10;
//         if(lnumm == 4 || lnumm == 9) count++
//     }
// alert(`В діапазоні від ${min} до ${max} , кількість чисел в кубі які закінчуються на 4 або на 9 дорівнює ${count}`)
// }else{
//     alert(`Ти телепень мінімальне число ${min} більше за ${max}`)
// }

// let m = +prompt(`Сікльки було бандеровцов спочатку`)
// let p = +prompt(`Як швидко вони розмножуються`)
// let n = +prompt(`Скільки днів пройшло`)
// for(let i = 1; i <= n; i++){
//     console.log(`День ${i}: ${Math.floor(m)}`)
//     m *= (p / 10) * m
// }