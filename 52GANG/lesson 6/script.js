let size = 1
let arr = []
for(let i = 0; i < size; i++){
    let rand = Math.floor(Math.random() * 100)
    arr.push(rand)
}
 function ArraySumm(array){
    let summ = 0;
    for(let el of array){
        summ += el}
    return summ
}
 function showElementsArray(array){
    for(let i = 0; i < array.length; i++){
        console.log(`arr[${i}] = ${array[i]}`)}
}
// let elements = []
// let n;
// do{
//     n = +prompt()
//     if(!n) break
//     if(elements.includes(n)) continue;
//     elements.push(n)
// }while(n)
//     console.log(elements)

document.body.style.background:linergradient(purple)
document.body.h1.color(white)
console.log(document.body.childNodes[0])