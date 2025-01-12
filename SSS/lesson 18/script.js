let p = require("path")
let fs = require("fs")

// // let dirPath = p.join(__dirname, "asdf")

// // for(let i = 0; i < 10; i++) {
// //     dirPath = p.join(dirPath, "asdf" + i)
// //     fs.mkdirSync(dirPath)
// // }


// let txtPath = p.join(__dirname, "text.txt")

// let buffer = fs.readFileSync(txtPath)
// let text = Buffer.from(buffer).toString()

// text = text.toUpperCase()

// fs.writeFileSync(p.join(__dirname, "text.txt"), text)

// // fs.appendFileSync(txtPath, "/n asdf")

let order = {
    id: 1,
    products: [
        "apple X3", "banana X2", "mango X1"
    ],
    totalPrice: 100500,
    userPhone: "+8(800)555-35-35",
    postNumber: 45
}

fs.writeFileSync(p.join(__dirname, "order.json"), JSON.stringify(order))

let json = fs.readFileSync(p.join(__dirname, "order.json"))
let order1 = Buffer.from(json).toString()
order1 = JSON.parse(order1)
order.products.forEach((el, i)=> console.log(i + 1 + ". " + el))
