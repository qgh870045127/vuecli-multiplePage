require('intersection-observer')

const observer = function(element, callback) {
  let listen = new IntersectionObserver((entries) => {
    entries.forEach((item) => {
      if (item.isIntersecting) {
        // 回调
        callback && callback(listen, item)
        // 移除监听
        listen.unobserve(item.target)
      }
    })
  })
  // 监听节点
  listen.observe(element)
}

// 图片懒加载
export const lazyImage = {
  bind: function(element, binding, node) {
    observer(element, () => {
      let { delay, type } = Object.assign(
        { delay: 0, type: 'up' },
        binding.value
      )
      if (binding.value) element.style.animationDelay = `${delay}s`
      element.classList.add(type)
      setTimeout(() => {
        // element.src = binding.value
        element.src =
          'https://is1-ssl.mzstatic.com/image/thumb/Purple113/v4/40/1b/ac/401bac19-2f4a-e14d-6f29-7e605e259611/AppIcon-0-1x_U007emarketing-0-85-220-0-5.png/180x180bb.png'
      }, 500)
    })
  },
}
