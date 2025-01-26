const path = require("path")
const fs = require("fs")

// let pathToFile = path.join(__dirname, "files", "text.txt")
// let text = fs.readFileSync(pathToFile)
// let t = Buffer.from(text).toString()

// console.log(t)

// t += "\nа ще мені 20 рочків"

// // fs.writeFileSync(pathToFile, t)

// fs.appendFileSync(pathToFile, "Мені взагалі то звати максимчик, мені так мама сказала")

// let p = path.join(__dirname, "kalash")

// for(let i = 0; i < 20; i++){
//     fs.mkdirSync(p)
//     p = path.join(p, "kalash" + i)
// }

// let p = path.join(__dirname, "files", "text.txt")
// let text = Buffer.from(fs.readFileSync(p)).toString()
// text = text.toUpperCase()
// fs.writeFileSync(p, text)

let order = {
    id:1233,
    products:["banana X3", "apple X5", "kalash X0"],
    totalPrise: 123123,
    userPhone:"@kalash",
    postNumber: 12312
}

let p = path.join(__dirname, "order.json")
// fs.writeFileSync(p, JSON.stringify(order))

let orders = fs.readFileSync(p)
orders = Buffer.from(orders).toString()
orders = JSON.parse(orders)
console.log(orders.products)

