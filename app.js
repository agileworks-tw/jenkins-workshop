import Koa from 'koa'
import serve from 'koa-static2'
const app = new Koa()


app.use(serve("static", "./assets"));

// response
app.use(async (ctx) => {
  ctx.body = 'Hello World'
})

app.listen(3000, () => console.log('server started 3000'))

export default app

