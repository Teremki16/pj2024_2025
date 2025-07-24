let p = require("path")
let fs = require("fs")

// let dirPath = p.join(__dirname, "MaCKSimka")

// for(let i = 0; i < 10; i++){
//     dirPath = p.join(dirPath, "MaCKSimka" + i)
//     fs.mkdirSync(dirPath);
// }


// let txtPath = p.join(__dirname, "text.txt")

// let buffer = fs.readFileSync(txtPath)
// let text = Buffer.from(buffer).toString()

// text = 

// fs.writeFileSync(p.join(__dirname, "text.txt"), text)

// fs.appendFileSync(txtPath, "\n Макисмчик вміє працювати з файловою системою але не вмієж писати грамотно")

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

let b = fs.readFileSync(p.join(__dirname, "order.json"))
let order = Buffer.from(b).toString()
order = JSON.parse(order)
order.products.forEach((el, i)=> console.log(i + 1 + ". " + el))