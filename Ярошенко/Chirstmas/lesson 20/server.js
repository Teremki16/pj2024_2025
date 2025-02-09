let http = require("http")
let path = require("path")
let fs = require("fs")



http.createServer((req, res)=>{
    if(req.url == "/"){
        let pathToFile = path.join(__dirname, "index.html")
        let file = fs.readFileSync(pathToFile)
        let content = Buffer.from(file).toString()
        res.end(content)
    }else if(req.url == "/add" && req.method == "POST"){
        let data = ""
        req.on("data", function(chunk){
            data += chunk
        })
        req.on("end", function(){
            console.log(data)
            res.writeHead(302, {"location" : "/"})
            let usp = new URLSearchParams(data)
            let author = usp.get("author")
            let text = usp.get("text")
            console.log("Author:", author, "Text:", text)

            let pathToFile = path.join(__dirname, "index.html")
            fs.appendFileSync(pathToFile, `
                \n<h1>Author: ${author} </h1>
                \n<p>Text: ${text} </p>
            `)

            res.end()
        })
    }
    else{
        res.writeHead(404, {"content-type": "text/plain"})
        res.end("404 NOT FOUND");
    }
  
}).listen(3000, ()=>console.log("Server is ON"))