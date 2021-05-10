const { isDev, isPrd } = require('../utils/env')

const MYSQL_CONF = {
    host: '127.0.0.1',
    port: 3306,
    database: 'api_i99_work',
    user: 'root',
    password: '12345678'
}

if (isPrd) {
    Object.assign(MYSQL_CONF, {
        user: 'api_i99_work',
        password: 'mrWW5EBfB3PhRcB4'
    })
}

module.exports = {
    MYSQL_CONF
}