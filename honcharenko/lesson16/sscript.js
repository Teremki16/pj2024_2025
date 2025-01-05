const chalk = require("chalk")
const a = require("cowsay")
const j = require("one-liner-joke")

// console.log(chalk.bgGreen("hello world 2!"))

 console.log(
    chalk.red(
    a.say({text:j.getRandomJoke().body,
     e: "$",
     t: "&",
     f: "mona-lisa"

 }))

 )