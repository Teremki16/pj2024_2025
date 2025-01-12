const chalk = require("chalk")
const a = require("cowsay")
const j = require("one-liner-joke")

// console.log(chalk.bgGreen("hello world 2!"))

 console.log(
    chalk.red(
    a.say({text:j.getRandomJoke().body,
     e: "$",
     t: "&",
    F: "mona-lisa"

 }))
 )
const path = require("path")
 
 console.log(path.basename(__filename))
 console.log(path.extname(__filename))
 console.log(path.dirname(__filename))
 console.log(path.parse(__filename))


 let newPath = path.join(__dirname, "music", "DJ anonim - krutoe muzlo2000.mp3")