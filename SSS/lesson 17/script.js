// const asd = require("chalk")
// const aasd = require("cowsay")
// const j = require("one-liner-joke")


// console.log(aasd.say({text: j.getRandomJoke().body,
//     e: "oO",
//     T: "U",
//     // f: "mona-lisa",
// }))
const path = require("path")

console.log(path.basename(__filename))

let newPath = path.join(__dirname, "music", "DJ MAXIM - krutoe ,uzlo 2004.mp3")
console.log(path.parse(newPath))