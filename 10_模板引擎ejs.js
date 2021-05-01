const Koa = require('koa')
const path = require('path')
const app = new Koa()

const views = require('koa-views')

app.use(views(path.join(__dirname,'./views'),{
    extension: 'ejs'
}))

app.use(async ctx => {
    let title = 'Hello Zxh'
    await ctx.render('index',{title})
})

app.listen(3000,() => {
    console.log('the port is running...')
})