// let answer = 0
// let max = 0
// do{
//     answer = +prompt("Введіть позитивне число")
//     if(answer > max){
//         max = answer
//     }
// }while(answer != 0)
//     alert(`Максимальне введене число це ${max}`)

// let count = +prompt("Яке число будемо перервіряти")
// let summ = 0
// for(let i = 1; i < count; i++){
//     if(count % i == 0){
//         summ += i
//     }
// }
// alert(`Сума всіх дільників числа ${summ} дорівнює ${summ}`)

// let a = +prompt("Введіть перше число")
// let b = +prompt("Введіть друге число")
// let count = 0
// if(a > b){
//     for(let i = a ; i < b; i++){
//         let LastNumber = (i**3) % 10
//         if(LastNumber == 4 || LastNumber == 9) count++;
//     }
//     alert(`в діапазоні від ${a}до ${b}, кількість чисел в кубі які закінчуються на 4 або 9 дорівнює ${count}`)
// }else{
//     alert(`ну ти і дудук ${a} більше за ${b}`)
// }

let m = +prompt(`Скілки буде кроликів спочатку`)
let p = +prompt(`Скілки швидко вони множаться`)
let n = +prompt(`Скільки днів пройшло`)

for(let i = 1; i <= n; i++){
    console.log(`День ${i}: ${m}`)
    m += (p / 100) * m

}
