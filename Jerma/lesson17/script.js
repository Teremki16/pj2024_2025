// const chalk = require("chalk")
// const c = require("cowsay")
// const j = require("one-liner-joke")


// console.log(
//     chalk.magenta.bold(
//         c.say({text: j.getRandomJoke().body, 
//     e: "$",
//     t: "m",
//     f: "turkey"
// })))

const path = require("path")

console.log(path.basename(__filename))
console.log(path.extname(__filename))
console.log(path.dirname(__filename))
console.log(path.parse(__filename))

let newPath = path.join(__dirname, "music", "DJ BOGdanchik - krutoe muzlo 2004.mp3")
console.log(path.parse(newPath))
