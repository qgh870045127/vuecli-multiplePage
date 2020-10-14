import qs from 'qs'

export default {
  /**
   * @description 页面跳转
   * @param {String} path 路径
   * @param {Object} params 参数
   */
  push: function(path, params = {}) {
    if (!path.trim()) {
      console.error('缺少路径')
      return
    }
    if (params.constructor != Object) {
      console.error('参数错误')
      return
    }
    let data = `?${qs.stringify(params)}`
    let isEmpty = JSON.stringify(params) === '{}'
    window.location.href = `${path}.html${isEmpty ? '' : data}`
  },
  /**
   * @description 获取地址参数
   */
  query: (function() {
    let data = window.location.search.split('?')[1]
    return qs.parse(data)
  })(),
}
