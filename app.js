import Koa from 'koa'
import serve from 'koa-static2'
const app = new Koa()
const views = require('koa-views')
const convert = require('koa-convert')
const co = require('co')
const router = require('./router')

app.use(serve("static", "./assets"))

app.use(convert(views(`${__dirname}/views`, {
  map: {
    html: 'nunjucks'
  }
})));

// response
app.use(async (ctx, next) => {
  ctx.render = co.wrap(ctx.render)
  await next()
})

app
    .use(router.routes())
    .use(router.allowedMethods());

app.listen(2369, () => console.log('server started 2369'))

export default app

