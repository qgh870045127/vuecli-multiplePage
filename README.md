## 介绍

一个 vuecli4 搭建的多页面项目。功能特点：

- 使用 qs.js 简单封装页面跳转。
- 使用配置路由的方式自动生成页面。
- 使用发布订阅模式实现组件之间的通信。
- 使用 webpack-spritesmith 合成雪碧图。
- 使用 image-webpack-loader 压缩图片。
- 使用 webpack.splitChunks 抽离公共代码。
- 通过 webpack.entry 配置自身入口以及公共入口 [自身, 公共]，有了全局入口我们可以做很多事情。

## 自动生成页面

相关文件都放在了 config 目录里。
逻辑很简单，首先需要写好对应的几个模板，然后在 options.js 里配置页面属性，
前面工作完成后，在 configuration.js 里根据前面配置的页面属性进行遍历操作，
生成文件以及多页面入口需要的参数，最后暴露给 vue.config.js。

```
├─ .gitignore
├─ babel.config.js
├─ config
│  ├─ configuration.js
│  ├─ options.js
│  ├─ spriteTem.js
│  └─ template.js
├─ package.json
├─ public
│  └─ favicon.ico
├─ README.md
├─ src
│  ├─ api
│  │  ├─ index.js
│  │  ├─ modules
│  │  │  ├─ aboutApi.js
│  │  │  └─ homeApi.js
│  │  └─ request.js
│  ├─ assets
│  │  ├─ icons
│  │  │  ├─ ad1.jpg
│  │  │  ├─ ad2.jpg
│  │  │  ├─ banner02.jpg
│  │  │  ├─ cp-hover.jpg
│  │  │  ├─ logo.png
│  │  │  └─ ma2.png
│  │  └─ sprite
│  │     └─ sprite.png
│  ├─ components
│  │  ├─ footer.vue
│  │  ├─ header.vue
│  │  └─ loading.vue
│  ├─ main.js
│  ├─ pages
│  │  ├─ about
│  │  │  ├─ index.html
│  │  │  ├─ index.js
│  │  │  ├─ index.scss
│  │  │  └─ index.vue
│  │  └─ home
│  │     ├─ index.html
│  │     ├─ index.js
│  │     ├─ index.scss
│  │     └─ index.vue
│  ├─ styles
│  │  ├─ animation.scss
│  │  ├─ index.scss
│  │  ├─ sprite.scss
│  │  └─ var.scss
│  └─ utils
│     ├─ comFunc.js
│     ├─ directives.js
│     ├─ eventBus.js
│     └─ router.js
├─ vue.config.js
└─ yarn.lock

```
