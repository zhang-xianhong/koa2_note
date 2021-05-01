const Koa = require('koa')

const app = new Koa()
app.use(async (ctx) => {
    if(ctx.url === '/index') {
//  ctx.cookies.get(name,[optins]):读取上下文请求中的cookie。
//  ctx.cookies.set(name,value,[options])：在上下文中写入cookie。
        ctx.cookies.set(
            'MyName' , 'zhangxianhong', {
                domain: '127.0.0.1',
                path: '/index',
                maxAge: 1000*60*60*24,
                expires: new Date('2021-05-02'),
                httpOnly: false,
                overwrite: false
            }
        )
        ctx.body = 'Cookie is OK'
    }
    else {
        if(ctx.cookies.get('MyName')) {
            ctx.body = ctx.cookies.get('MyName')
        } else {
            ctx.body = "Cookie not found"
        }
    }
})

app.listen(3000, err => {
    if(!err) {
        console.log('the port is running...')
    }
})