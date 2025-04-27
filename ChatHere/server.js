const http = require("http")
const mysql = require("mysql2")

let db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "chat_elina"
})

let server = http.createServer(function (req, res) {
    if (req.url == "/") {
        db.query("select * from message", (err, results) => {
            if (err) {
                res.writeHeader(404)
                res.end("Помилка бд!")
            } else {
                let html = `<html><body><ul>`
                results.forEach(mess => html += `<li>${mess.content}</li>`)
                html += `</ul>
                <form action="/add" method="post">
                    <input name="content">
                    <button>Add</button>
                </form>
                </body></html>`
                res.end(html)
            }
        });
    } else if (req.url == "/add" && req.method == "POST") {
        let data = ""
        req.on("data", (chunk) => data += chunk)
        req.on("end", () => {
            console.log(data)
            let content = new URLSearchParams(data).get("content")
            console.log(content);

            db.query("insert into message (content, author_id, dialog_id) values (?, 3, 3)", [content], (err, result, fields) => {
                console.log(result)
            });

            res.writeHead(302, { "location": "/" })
            res.end()
        })
    } else {
        res.writeHead(404)
        res.end("Page not found")
    }
}).listen(3000, () => console.log("server on!"))
