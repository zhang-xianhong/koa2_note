const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const app = new Koa()

// 引用
app.use(bodyParser())
app.use(async ctx => {
    if(ctx.url === '/' && ctx.method === 'GET') {
        // 显示表单页面
        let html = `
            <h1>ZXH koa2 request Post</h1>
            <form method="POST" action="/"> 
                <p>username</p>
                <input name="username" /><br/>
                <p>age</p>
                <input name="age" /><br/>
                <p>webSite</p>
                <input name="webSite" /><br/>
                <button type="submit">submit</button>
            </form>
        `
        ctx.body = html
    } else if(ctx.url === '/' && ctx.method === 'POST') {
        // let postData = await parsePostData(ctx)
        let postData = ctx.request.body
        // ctx.body = '接收到POST参数'
        ctx.body = postData
    } else {
        ctx.body = '<h1>404</h1>'
    }
})

function parsePostData(ctx) {
    return new Promise((resolve,reject) => {
        try {
            let postData = ''
            ctx.req.addListener('data',(data) => {
                postData += data
            })
            ctx.req.on('end',() => {
                let parseData = parseQueryStr(postData)
                resolve(parseData)
            })
        } catch (error) {
            reject(error)
        }
    })
}

function parseQueryStr(queryStr) {
    let queryData = {}
    let queryList = queryStr.split('&') 
    console.log(queryList)
    console.log(queryList.entries())
    for(let [index,queryStr] of queryList.entries()) {
        let itemList = queryStr.split('=')
        console.log(itemList)
        queryData[itemList[0]] = decodeURIComponent(itemList[1])
    }
    return queryData
}


app.listen(3000,err => {
    if(!err) {
        console.log('the port 3000 is running...')
    }
})