const http = require("http")
const mysql = require("mysql2")

let db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "chat_elina"
})

let server = http.createServer(function(req, res){
    if(req.url == "/"){
        db.query("select * from message", (err, results) => {
            if(err) {
                res.writeHeader(404)
                res.end("Помилка бд!")
            }else{
                let html = `<html><body><ul>`
                results.forEach(mess=>html += `<li>${mess.content}</li>`)
                html += `</ul>
                <form action="/add" method="post">
                    <input name="content">
                    <button>Add</button>
                </form>
                </body></html>`
                res.end(html)
            }
        });
    }
}).listen(3000, ()=>console.log("server on!"))

// db.query("insert into message (content, author_id, dialog_id) values ('I`m good', 3, 3)", (err, result, fields)=>{
//     console.log(result)
// })