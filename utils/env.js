const env = process.env.NODE_ENV

module.exports = {
    isDev: env === 'dev',
    isPrd: env === 'prd'
}