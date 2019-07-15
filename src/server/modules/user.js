const db = require('../config/db.config.js')

const Sequelize = db.sequelize

const User = Sequelize.import('../schema/user.js')

User.sync({ force: false })

class UserModel {
  static async createUser (data) {
    const result = await User.create({
      name: data.name,
      password: data.password
    })
    return result
  }

  static async getUser (id) {
    const result = await User.findOne({
      where: {
        id
      }
    })
    return result
  }
}

module.exports = UserModel
