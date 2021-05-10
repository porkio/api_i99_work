const router = require('koa-router')()
const { saveOrigin, getAllRequestHistory } = require('../controllers/indexController')
const getClientIp = require('../utils/getClientIp')

router.get('/', async (ctx, next) => {
    await ctx.render('index', {
        title: 'Hello Koa 2!'
    })
})

router.get('/string', async (ctx, next) => {
    ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
    ctx.body = {
        title: 'koa2 json'
    }
})

// 获取页面来源
router.post('/origin', async (ctx, next) => {
    const { currentUrl, originUrl } = ctx.request.body
    saveOrigin(currentUrl, originUrl, getClientIp(ctx))
    ctx.body = {
        code: 0,
        msg: 'OK',
        data: { origin: originUrl }
    }
})

router.get('/allHistory', async (ctx, next) => {
    const result = await getAllRequestHistory()
    ctx.body = {
        code: 0,
        msg: 'OK',
        data: { result }
    }
})

module.exports = router
