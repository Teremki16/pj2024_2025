let p = require("path")
let fs = require("fs")

// let dirPath = p.join(__dirname, "Hory")

// for(let i = 0; i < 10; i++){
//     dirPath = p.join(dirPath, "Hory" + i)
//     fs.mkdirSync(dirPath)
// }


// let txtPath = p.join(__dirname, "text.txt")
// // console.log(fs.readFileSync(txtPath, "utf8"))

// let buffer = fs.readFileSync(txtPath)
// let text = Buffer.from(buffer).toString()

// text = text.toUpperCase() 

// fs.writeFileSync(p.join(__dirname, "text.txt"), text)

// // fs.appendFileSync(txtPath, "\n Maximchik")

// let order = {
//     id: 1234,
//     products: [
//         "apple X3", "banana X5", "pineapple X100"
//     ],
//     totalPrice: 100500,
//     userPhone: "+380954650932",
//     postNumber: 45
// }

// fs.writeFileSync(p.join(__dirname, "order.json"), JSON.stringify(order))


let products = fs.readFileSync(p.join(__dirname, "order.json"))
let order = Buffer.from(products).toString()
order = JSON.parse(order)
order.products.forEach((el, i) => console.log(i + 1 + ". " + el));