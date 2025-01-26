let http = require("http")
let path = require("path")
let fs = require("fs")

let count = 0

let pathToIndex = path.join(__dirname, "static", "index.html")
let pathToContacts = path.join(__dirname, "static", "index.html")
let pathToStyle = path.join(__dirname, "static", "style.css")

let index = fs.readFileSync(pathToIndex)
let contacts =fs.readFileSync(pathToContacts)
let style = fs.readFileSync(pathToStyle)

index = Buffer.from(index).toString()
contacts = Buffer.from(contacts).toString()
style = Buffer.from(style).toString()

const server = http.createServer((req, res) => {
    if(req.url == "/"){
        res.end(index)
    }else if (req.url == "/countacts"){
        res.writeHead(200, {"Content-Type": "text/html"})
        res.end(contacts)
    }else if(req.url == "/style.css"){
        res.writeHead(200, {"Content-Type": "text/css"})
        res.end(style)
    } else {
        res.writeHead(404, {"Content-Type": "text/html"})
        res.end(`<h1>404 not found</h1>`)
    }
})

server.listen(3000, () => console.log("server is running") )