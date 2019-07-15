const UserModel = require('../modules/user.js')

const Common = require('../common/util.js')

class userController {
  static async create (ctx) {

  }

  static async detail (ctx) {
    console.log(ctx.request.url)
    const id = Common.urlStringToObj(ctx.request.url).id
    const data = await UserModel.getUser(id)
    ctx.response.status = 200
    ctx.body = {
      code: 0,
      msg: '操作成功',
      data
    }
  }
}

module.exports = userController
