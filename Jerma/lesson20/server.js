const http = require("http")
const path = require("path")
const fs = require("fs")



let server = http.createServer((req, res)=>{

    if(req.url == "/"){
        let pathToIndex = path.join(__dirname, "index.html")
        let index = fs.readFileSync(pathToIndex)
        index = Buffer.from(index).toString()
        res.writeHead(200, {"content-type": "text/html"})
        res.end(index)
    }
    else if(req.url == "/add" && req.method == "POST"){
        let data = ''
        req.on("data", function(chunk){
            data += chunk

        })
        req.on("end", function(){
            console.log(data)
            let usp = new URLSearchParams(data)
            let author = usp.get("author")
            let text = usp.get("text")
            console.log(author, text)
            let pathToIndex = path.join(__dirname, "index.html")
            fs.appendFileSync(pathToIndex, `
                \n<h1>${author}</h1>
                \n<p>${text}</p></>
                \n
                
                `)
            res.writeHead(302, {"location": '/'})
            res.end()
        })

    }
    else{
        res.writeHead(404, {"content-type": "text/plain"})
        res.end("404 NOT FOUND!")
    }

}).listen(3000, ()=>console.log("Server proshuvsya"))
