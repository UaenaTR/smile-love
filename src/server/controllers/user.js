const UserModel = require('../modules/user.js')

class userController {
  static async create (ctx) {
    console.log(ctx)
  }

  static async detail (ctx) {
    const data = await UserModel.getUser(1)
    console.log(data)
    ctx.response.status = 200
    ctx.body = {
      code: 0,
      msg: '操作成功',
      data
    }
    console.log(ctx.response)
  }
}

module.exports = userController
