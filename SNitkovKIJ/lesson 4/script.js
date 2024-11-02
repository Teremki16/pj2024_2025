//let answer = 0;
//let max = 0;
//do{
//answer = +prompt("  Д-д-данічка введіть число")
//if (answer > max){
//    max = answer
//}
//}while(answer != 0 )
//    alert( `Максимальне введене число це ${max}`)

//let count = +prompt('Яке число будемо перевіряти')
//let summ = 0
//for (let i = 1; i < count; i++){
//    if(count % i == 0){
        summ += i;
//    }
//}
//alert(`Сума всіх дільників Числа ${count} дорівнює ${summ} `)

let a = +prompt("Ведіть перше число")
let b = +prompt("Введіть друге число")
let count = 0;
if(a < b){
for(let i = a; i < b; i++){
    let lastNumber = (i**3) % 10;
    if(lastNumber == 4 || lastNumber == 9) count++;
}
alert(`В діапазони від ${a} до ${b}, кількість  чисел в кубі які закінчується на 4 або 9 `)

}else{
    alert(`ну ти чеченец число ${a} більше за ${b}`)
}