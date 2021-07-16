const funs = {
  getDate (x) {
    x = x || '/'
    var myDate = new Date()
    const y = myDate.getFullYear() // 获取完整的年份(4位,1970-????)
    const m = myDate.getMonth() + 1 // 获取当前月份(0-11,0代表1月)         // 所以获取当前月份是myDate.getMonth()+1;
    const d = myDate.getDate() // 获取当前日(1-31)
    const h = myDate.getHours() // 获取当前小时数(0-23)
    const min = myDate.getMinutes() // 获取当前分钟数(0-59)
    const s = myDate.getSeconds() // 获取当前秒数(0-59)
    return y + x + m + x + d + ' ' + h + ':' + min + ':' + s
  },
  /**
   * [setCookie 设置cookie]
   * [key value t 键 值 时间(秒)]
   */
  setCookie (key, value, t) {
    var oDate = new Date()
    oDate.setDate(oDate.getDate() + t)
    document.cookie = key + '=' + value + '; expires=' + oDate.toDateString()
  },
  /**
   * [getCookie 获取cookie]
   */
  getCookie (key) {
    var arr1 = document.cookie.split('; ')// 由于cookie是通过一个分号+空格的形式串联起来的，所以这里需要先按分号空格截断,变成[name=Jack,pwd=123456,age=22]数组类型；
    for (var i = 0; i < arr1.length; i++) {
      var arr2 = arr1[i].split('=')// 通过=截断，把name=Jack截断成[name,Jack]数组；
      if (arr2[0] === key) {
        return decodeURI(arr2[1])
      }
    }
  },
  /**
   * [removeCookie 移除cookie]
   */
  removeCookie (key) {
    this.setCookie(key, '', -1) // 把cookie设置为过期
  }
}
module.exports = funs
