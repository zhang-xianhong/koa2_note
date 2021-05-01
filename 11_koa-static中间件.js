const Koa = require('koa')

const path = require('path')

const static = require('koa-static')

const app = new Koa()

const staticPath = ('./static')

app.use(static(path.join(__dirname,staticPath)))

app.use(async ctx=> {
    ctx.body = 'Hello Zhangxianhong'
})


app.listen(3000,()=> {
    console.log('is running...')
})

// 访问
// http://localhost:3000/style.css