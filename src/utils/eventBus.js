class eventBus {
  constructor() {
    // 事件存储
    this.events = {}
  }
  /**
   * @description 订阅
   * @param {String} type       事件名
   * @param {Function} handler  事件
   */
  sub(type, handler) {
    this.events[type] = handler
  }
  /**
   * @description 发布
   * @param {String} type       事件名
   * @param {Any} data          数据
   */
  pub(type, data) {
    if (this.events[type] == undefined) return
    this.events[type](data)
  }
}

export default new eventBus()
