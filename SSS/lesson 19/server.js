const http = require("http")

let server = http.createServer((req, res) => {
    res.end("hello")
}, 3000)