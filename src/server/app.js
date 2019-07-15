const Koa = require('koa2')
const router = require('./router/index.js')

const app = new Koa()

app.use(router.routes())

app.listen(3000)
