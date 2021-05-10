const mysql = require('mysql2')
const { MYSQL_CONF } = require('../config/db')

const con = mysql.createConnection(MYSQL_CONF)

con.connect(err => {
    if (err) {
        throw err
        return
    }
    console.log('Connect to mysql client Successfully.')
})

// 执行
const exec = sql => {
    return new Promise((resolve, reject) => {
        con.query(sql, (err, data) => {
            if (err) {
                reject(err)
                return
            }
            resolve(data)
        })
    })
}

module.exports = exec