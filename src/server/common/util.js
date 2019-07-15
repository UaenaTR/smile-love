class Common {
  // url参数转成obj
  static urlStringToObj (url) {
    const newObj = Object.create(null)
    const urlStringArr = url.split('?')[1].split('&')
    urlStringArr.forEach(item => {
      const itemArr = item.split('=')
      newObj[itemArr[0]] = itemArr[1]
    })
    return newObj
  }
}

module.exports = Common
