let i = +prompt("Скільки рандомних чисел ти хочеш")
let count = 1
while(count <= i){
    console.log(`Рандомне число ${count}:  ${Math.floor(Math.random() * 100)}`)
    count++
}