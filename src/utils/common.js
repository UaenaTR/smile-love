
export default class Common {
  // 递归实现深拷贝
  static deepClone (target) {
    let result
    const baseArr = ['string', 'number', 'boolean', 'undefined']
    if (baseArr.includes(typeof target) || target === null) {
      result = target
    } else {
      result = Object.prototype.toString.call(target) === '[object Object]' ? {} : []
      for (let key in target) {
        if (baseArr.includes(typeof target[key]) || target === null) {
          result[key] = target[key]
        } else {
          result[key] = this.deepClone(target[key])
        }
      }
    }
    return result
  }
}
