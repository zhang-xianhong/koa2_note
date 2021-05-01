const Koa = require('koa')
const app = new Koa()
app.use(async ctx => {
    let url = ctx.url
    // 从request中接收get请求
    let request = ctx.request
    let req_request = request.query
    let req_requeststring = request.querystring
    

    // 从上下文中直接获取Get请求
    let ctx_query = ctx.query
    let ctx_querystring = ctx.querystring
    ctx.body = {
        url,
        // request,
        req_request,
        req_requeststring,
        ctx_query,
        ctx_querystring
    }
})

app.listen(3000,err => {
    if(!err) {
        console.log('the port 3000 is running')
    }
})