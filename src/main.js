// 全局api
import api from '@/api'
Vue.prototype.$api = api

// 公共样式
import '@/styles/index.scss'
import '@/styles/sprite.scss'
import '@/styles/animation.scss'

Vue.config.productionTip = false

// 全局组件
import loading from '@/components/loading'
Vue.component('loading', loading)

// 跳转封装
import router from '@/utils/router'
Vue.prototype.$router = router

// 发射事件
import eventBus from '@/utils/eventBus'
Vue.prototype.$bus = eventBus

import header from '@/components/header'
import footer from '@/components/footer'

// 指令
import * as directives from '@/utils/directives'
Object.keys(directives).forEach((directiveName) => {
  Vue.directive(directiveName, directives[directiveName])
})

// 头部
let Header = new Vue({
  render: (h) => h(header),
}).$mount().$el

// 内容
let Content = new Vue({
  render: (h) => h(App),
}).$mount().$el

// 底部
let Footer = new Vue({
  render: (h) => h(footer),
}).$mount().$el

document.body.append(Header, Content, Footer)
