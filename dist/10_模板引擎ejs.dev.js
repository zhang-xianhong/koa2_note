"use strict";

var Koa = require('koa');

var path = require('path');

var app = new Koa();

var views = require('koa-views');

app.use(views(path.join(__dirname, './views'), {
  extension: 'ejs'
}));
app.use(function _callee(ctx) {
  var title;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          title = 'Hello Zxh';
          _context.next = 3;
          return regeneratorRuntime.awrap(ctx.render('index', {
            title: title
          }));

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
});
app.listen(3000, function () {
  console.log('the port is running...');
});