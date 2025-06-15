const mysql = require('mysql2')

const db = mysql.createConnection({
   host: 'localhost',
   user: 'root', 
   password: 'root',
   database: 'extra' 
})

let adb = db.promise()

async function existUser(login) {
    try {
        let [user] = await adb.query("SELECT * FROM users WHERE login = ?", [login])
        return user.length > 0
    } catch (error) {
        throw error.message
    }
}

async function getUser(login) {
    try {
        let [user] = await adb.query("SELECT * FROM users WHERE login = ?", [login])
        return user
    } catch (error) {
        throw error.message
    }
}
async function addUser(login, password) {
    try {
        let [user] = await adb.query("INSERT INTO users(login, password) values(?,?)", [login,password])
        return user.length > 0
    } catch (error) {
        throw error.message
    }
}

module.exports = {
    existUser,
    getUser,
    addUser
}