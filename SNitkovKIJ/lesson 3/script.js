let i = +prompt("Скільки ви хочете рандомних чисел")
let count = 1
while(count <= i){
   console.log('Random number ${count} is ${Math.floor(Math.random() * 100)}')
   
    count++
}