const Router = require('koa-router')

const UserController = require('../controllers/user.js')

const router = new Router()

router.get('/userLogin', UserController.detail)

module.exports = router
