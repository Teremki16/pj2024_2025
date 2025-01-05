// const chalk = require("chalk")
// const cow = require("cowsay")
// const j = require("one-liner-joke")

// console.log(
//     chalk.green(
//     cow.say({ text: j.getRandomJoke().body,
//     e: "--",
//     T: "+",
//     // f: "mona-lisa"
//     }))
// );
const path = require("path")

console.log(path.basename(__filename))
console.log(path.extname(__filename))
console.log(path.dirname(__filename))
console.log(path.parse(__filename))

let newPath = path.join(__dirname, "music", "DJ MAXIMKA - krutoe muzlo 2004.mp3")
console.log(path.parse(newPath))