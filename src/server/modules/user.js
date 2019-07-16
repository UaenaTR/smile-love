const db = require('../config/db.config.js')

const Sequelize = db.sequelize

const User = Sequelize.import('../schema/user.js')

User.sync({ force: false })

class UserModel {
  // 查询所有用户
  static async getAll () {
    const result = await User.findAll()
    return result
  }
  // 注册用户
  static async createUser (data) {
    const result = await User.create({
      name: data.name,
      password: data.password
    })
    return result
  }
  // 查询单个用户
  static async getUser (id) {
    const result = await User.findOne({
      where: {
        id
      }
    })
    return result
  }
  // 更新用户信息
  static async upUser (id, upObj) {
    const result = await User.update({ ...upObj }, {
      where: {
        id
      }
    })
    return result
  }
  // 注销用户
  static async delUser (id) {
    const result = await User.destroy({
      where: {
        id
      }
    })
    return result
  }
}

module.exports = UserModel
