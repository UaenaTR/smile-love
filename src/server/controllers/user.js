const UserModel = require('../modules/user.js')

const Common = require('../common/util.js')

class userController {
  // 查询所有用户信息
  static async all (ctx) {
    const data = await UserModel.getAll()
    ctx.response.status = 200
    ctx.body = {
      code: 0,
      msg: '操作成功',
      data
    }
  }
  // 注册用户
  static async create (ctx) {
    const data = ctx.request.body
    await UserModel.createUser(data)
    ctx.response.status = 200
    ctx.body = {
      code: 0,
      msg: '操作成功'
    }
  }
  // 查询单个用户信息
  static async detail (ctx) {
    const id = Common.urlStringToObj(ctx.request.url).id
    const data = await UserModel.getUser(id)
    ctx.response.status = 200
    ctx.body = {
      code: 0,
      msg: '操作成功',
      data
    }
  }
  // 更新用户信息
  static async updateOne (ctx) {
    const { id, ...upObj } = ctx.request.body
    await UserModel.upUser(id, upObj)
    ctx.response.status = 200
    ctx.body = {
      code: 0,
      msg: '操作成功'
    }
  }
  // 用户注销
  static async del (ctx) {
    const id = Common.urlStringToObj(ctx.request.url).id
    await UserModel.delUser(id)
    ctx.response.status = 200
    ctx.body = {
      code: 0,
      msg: '操作成功'
    }
  }
}

module.exports = userController
