const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

// 通过ctx.query获取请求的 Get 参数 
router.get('/',(ctx,next) => {
    ctx.body = ctx.query
})

app.use(router.routes(),router.allowedMethods())

app.listen(3000, err => {
    if(!err) {
        console.log('the port is  running...'   )
    }
})