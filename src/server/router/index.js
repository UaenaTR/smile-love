const Router = require('koa-router')

const UserController = require('../controllers/user.js')

const router = new Router()

router.get('/user/login', UserController.detail)

module.exports = router
