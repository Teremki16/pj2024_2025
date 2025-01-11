// const chalk = require("chalk")
// const c = require("cowsay")
// const joke = require("one-liner-joke")

// console.log(chalk.bgBlue.red.bold("Hello Yeva"))

// console.log(chalk.blue(c.say({text: joke.getRandomJoke().body, f: ""})))

const path = require("path")
console.log(__dirname)
console.log(__filename)

console.log(path.parse(__filename))
