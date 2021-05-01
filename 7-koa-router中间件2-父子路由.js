const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()
/* const router = new Router({
    prefix: '/zxh' //可以用于指定目录，加前缀
})  */


// 声明两个子级路由
const home = new Router()
home.get('/zxh', async (ctx,next) => {
    ctx.body = 'ZXH Home Page'
}).get('/todo', async (ctx,next) => {
    ctx.body = 'TODO Home page'
})

const page = new Router()
page.get('/zxh', async (ctx,next) => {
    ctx.body = 'ZXH page Page'
}).get('/todo', async (ctx,next) => {
    ctx.body = 'TODO page page'
})


/* router
    .get('/',(ctx,next) => {
        ctx.body = "张献洪"
    })
    .get('/todo',(ctx,next) => {
        ctx.body = "Todo page"
    }) */

    // 声明父级路由
const router = new Router()
router.use('/home',home.routes(),home.allowedMethods())
router.use('/page',page.routes(),page.allowedMethods())

app.use(router.routes(),router.allowedMethods())

app.listen(3000, err => {
    if(!err) {
        console.log('the port 3000 is running...')
    }
})