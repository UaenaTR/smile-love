const Koa = require('koa2')
const bodyParser = require('koa-bodyparser')
const router = require('./router/index.js')

const app = new Koa()

app.use(bodyParser())

app.use(router.routes())

app.listen(3000)
