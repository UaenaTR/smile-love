const Router = require('koa-router')

const UserController = require('../controllers/user.js')

const router = new Router()

router.get('/user/login', UserController.detail)
router.post('/user/register', UserController.create)
router.get('/user/logout', UserController.del)
router.get('/user/getAll', UserController.all)
router.post('/user/update', UserController.updateOne)

module.exports = router
