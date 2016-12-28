'use strict'
const Koa = require('koa')
const convert = require('koa-convert')
const multer = require('koa-multer')
const route = require('koa-route')

let app = new Koa();
app.use(ctx => {
  ctx.body = 'hello koa'
})
app.listen(406);
console.log(`koa is listening on port 406`);
