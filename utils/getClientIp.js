module.exports = function getClientIP (req) {
    let ip = req.headers['x-forwarded-for'] || // 判断是否有反向代理 IP
        req.ip ||
        req.connection.remoteAddress || // 判断 connection 的远程 IP
        req.socket.remoteAddress || // 判断后端的 socket 的 IP
        req.connection.socket.remoteAddress || ''
    if (ip) {
        ip = ip.replace('::ffff:', '')
    }
    if (ip.indexOf(',') > 0)
        return ip.split(',')[0].join()
    return ip
}