let size = +prompt("Write how many elements do you want")
let arr = []

for(let i = 0; i < size; i++){
    let rand = Math.floor(Math.random() * 100)
    arr.push(rand)
}
console.log(arr)

function ArraySumm(array){
    let summ = 0
    for(let el of array){
        summ += el
    }
    return summ
}

console.log(`summ of element = ${ArraySumm(arr)}`)

function showElementsArray(array){
    for(let i = 0; i < array.length; i++){
        console.log(`arr[${i}] = ${array[i]}`)
    }
}
showElementsArray(arr)