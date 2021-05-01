const Koa = require('koa')
const app = new Koa()
app.use(async(ctx) => {
    ctx.body="Hello ZXH"
})

// 设置监听端口
app.listen(3000,function(err) {
    if(!err) {
        console.log('the port 3000 is running')
    }
})
