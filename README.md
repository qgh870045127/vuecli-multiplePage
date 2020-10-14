## 介绍

一个 vuecli4 搭建的多页面项目。功能特点：

- 使用 qs.js 简单封装页面跳转。
- 使用配置路由的方式自动生成页面。
- 使用发布订阅模式实现组件之间的通信。
- 使用 webpack-spritesmith 合成雪碧图。
- 使用 image-webpack-loader 压缩图片。
- 使用 webpack.splitChunks 抽离公共代码。
- 通过 webpack.entry 配置自身入口以及公共入口 [自身, 公共]，有了全局入口我们可以做很多事情。

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
