const fs = require('fs')
const path = require('path')
const pages = require('./options')
const pagePath = path.join(__dirname, '../src/pages/')
const { vueApp, vueTemplate, publicHtml } = require('./template')

Object.values(pages).forEach((item) => {
  // 初始路径
  let { key, name, meta } = item,
    file = `${pagePath + key}`,
    js = `${file}\\index.js`,
    scss = `${file}\\index.scss`,
    vue = `${file}\\index.vue`,
    html = `${file}\\index.html`
  // 若文件夹不存在 创建文件
  if (!fs.existsSync(file)) {
    fs.mkdirSync(file)
    fs.writeFileSync(js, vueApp)
    fs.writeFileSync(scss, `.${key} {}`)
    fs.writeFileSync(vue, vueTemplate(key))
    fs.writeFileSync(html, publicHtml)
  }
  // 配置入口
  pages[key] = {
    // main.js 所有页面的公共文件
    entry: [js, './src/main.js'],
    template: html,
    filename: `${key}.html`,
    chunks: ['vendors', 'common', key],
    title: name,
    meta: meta ? meta : {},
  }
})

module.exports = pages
