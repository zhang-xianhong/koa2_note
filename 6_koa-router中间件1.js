const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
const router = new Router()

router
    .get('/',(ctx,next) => {
        ctx.body = "张献洪"
    })
    .get('/todo',(ctx,next) => {
        ctx.body = "Todo page"
    })

app.use(router.routes(),router.allowedMethods())

app.listen(3000, err => {
    if(!err) {
        console.log('the port 3000 is running...')
    }
})