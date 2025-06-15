let http = require('http')
let bcrypt = require('bcrypt')
let db = require('./db')
let jwt = require('jsonwebtoken')


http.createServer(async (req, res) => {
    switch (req.url) {
        case "/api/register":
            let data = ''
            req.on('data', (chunk) => data += chunk)
            req.on('end', async () => {
                data = JSON.parse(data)
                console.log(data)

                if (await db.existUser(data.login)) {
                    res.end(JSON.stringify({ status: 'User exists' }))
                    return;
                }

                let hash = await bcrypt.hash(data.password, 10)
                console.log(data.password, hash)
                await addUser(data.login, hash)
                res.end(JSON.stringify({ status: 'OK' }))
            })
            break;

        case "/api/login":
            let dataLogin = ''
            req.on('data', (chunk) => dataLogin += chunk)
            req.on('end', async () => {
                dataLogin = JSON.parse(dataLogin)
                console.log(dataLogin)

                let user = await db.getUser(dataLogin.login)

                if (user.length === 0) {
                    res.writeHead(400)
                    res.end(JSON.stringify({ status: 'wrong creds' }))
                    return;
                }

                user = user[0]

                if (bcrypt.compare(dataLogin.password, user.password)) {
                    let token = jwt.sign({ login: user.login, id: user.id }, "token", { expiresIn: "1h" })
                    res.end(JSON.stringify({ status: 'OK', token, login: user.login }))

                } else {
                    res.writeHead(400)
                    res.end(JSON.stringify({ status: 'wrong creds' }))
                }
            })
            break;
        default:
            res.writeHead(400)
            res.end(JSON.stringify({ status: 'not found' }))
    }
}).listen(3000)