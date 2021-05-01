"use strict";

var Koa = require('koa');

var app = new Koa();
app.use(function _callee(ctx) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (ctx.url === '/index') {
            //  ctx.cookies.get(name,[optins]):读取上下文请求中的cookie。
            //  ctx.cookies.set(name,value,[options])：在上下文中写入cookie。
            ctx.cookies.set('MyName', 'zhangxianhong', {
              domain: '127.0.0.1',
              path: '/index',
              maxAge: 1000 * 60 * 60 * 24,
              expires: new Date('2021-05-02'),
              httpOnly: false,
              overwrite: false
            });
            ctx.body = 'Cookie is OK';
          } else {
            if (ctx.cookies.get('MyName')) {
              ctx.body = ctx.cookies.get('MyName');
            } else {
              ctx.body = "Cookie not found";
            }
          }

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
});
app.listen(3000, function (err) {
  if (!err) {
    console.log('the port is running...');
  }
});