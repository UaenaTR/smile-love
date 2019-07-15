import axios from 'axios'

export default class Axios {
  static async get (url, params) {
    try {
      const result = await axios({
        method: 'get',
        url,
        params
      })
      if (result.data.code !== 0) {
        alert('err')
      }
      return result
    } catch (err) {
      throw new Error(err)
    }
  }

  static async post (url, params) {
    try {
      const result = await axios({
        method: 'post',
        url,
        data: params
      })
      if (result.data.code !== 0) {
        alert('err')
      }
    } catch (err) {
      throw new Error(err)
    }
  }
}
