const exec = require('../services/mysql')
const axios = require('axios')
const { mapKey } = require('../config/sys')

const saveOrigin = async (currentUrl, origin, ip) => {
    const reqCity = `https://restapi.amap.com/v3/ip?ip=${ip}&key=${mapKey}`
    axios.get(reqCity).then(res => {
        const position = res.data.province + ' ' + res.data.city
        const sql = `INSERT INTO observe (current_url, origin_url, ip_address, position) VALUES ('${currentUrl}', '${origin}', '${ip}', '${position}')`
        return exec(sql).then(rows => {
            console.log(rows)
            return rows.affectedRows > 0
        })
    }).catch(err => console.log(err))
}

const getAllRequestHistory = async () => {
    const sql = `SELECT * from observe`
    return exec(sql).then(rows => rows)
}

module.exports = {
    saveOrigin,
    getAllRequestHistory
}