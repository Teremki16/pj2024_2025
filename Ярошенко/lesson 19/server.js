const http = require("http")
const path = require("path")
const fs = require("fs")
let count = 0 

let pathToIndex = path.join(__dirname, "static", "index.html")
let index = fs.readFileSync(pathToIndex)
index = Buffer.from(index).toString()

let pathToContacts = path.join(__dirname, "static", "contacts.html")
let contacts = fs.readFileSync(pathToContacts)
contacts = Buffer.from(contacts).toString()

let pathToStyle = path.join(__dirname, "static", "style.css")
let style = fs.readFileSync(pathToStyle)
style = Buffer.from(style).toString()

let server = http.createServer((req, res)=>{
 if(req.url == "/"){
    res.writeHead(200, {"content-type": "text/html"})
    res.end(index)
 }else if(req.url == "/contacts"){
    res.writeHead(200, {"content-type": "text/html"})
    res.end(contacts)

 }else if(req.url == "/style.css"){
    res.writeHead(200, {"style-type": "text/html"})
    res.end(style)
 
 }else{
    res.writeHead(404, {"content-type": "text/plain"})
    res.end("404 NOT FOUND")
 }
})

server.listen(3000, ()=>console.log("on"))