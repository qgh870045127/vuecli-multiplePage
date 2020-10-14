const path = require('path')
const pages = require('./config/configuration')
const isProd = process.env.BABEL_ENV == 'production'

const templateFunction = require('./config/spriteTem')
const SpritesmithPlugin = require('webpack-spritesmith')

module.exports = {
  pages,
  publicPath: './',
  lintOnSave: false,
  productionSourceMap: false,
  css: {
    // 开发环境设为false（影响样式热更新）
    extract: isProd,
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/var.scss";`,
      },
    },
  },
  chainWebpack: (config) => {
    // 删除默认的splitChunk
    config.optimization.delete('splitChunks')
    // 将小图标拼接成雪碧图
    config.plugin('webpack-spritesmith').use(SpritesmithPlugin, [
      {
        src: {
          cwd: './src/assets/icons/',
          glob: ['*.png', '*.jpg'],
        },
        target: {
          image: './src/assets/sprite/sprite.png',
          css: [
            [
              path.resolve(__dirname, './src/styles/sprite.scss'),
              {
                // 引用自己的模板
                format: 'function_based_template',
              },
            ],
          ],
        },
        apiOptions: {
          cssImageRef: '../assets/sprite/sprite.png',
        },
        customTemplates: {
          function_based_template: templateFunction,
        },
        spritesmithOptions: {
          algorithm: 'binary-tree',
          padding: 10,
        },
      },
    ])
    // 图片压缩
    config.module
      .rule('images')
      .use('image-webpack-loader')
      .loader('image-webpack-loader')
      .options({
        bypassOnDebug: true,
        mozjpeg: {
          // 压缩 jpeg 的配置
          progressive: true,
          quality: 100,
        },
        optipng: {
          enabled: false,
        },
        pngquant: {
          quality: [0.95, 1],
          speed: 1,
        },
        gifsicle: {
          interlaced: false,
        },
        webp: {
          quality: 100,
        },
      })
      .end()
  },
  // 多页面在这里配置提取公共代码
  configureWebpack: (config) => {
    config.optimization = {
      splitChunks: {
        cacheGroups: {
          common: {
            // 抽取公共入口文件
            name: 'common',
            chunks: 'initial',
            minChunks: 2,
            maxInitialRequests: 5,
            minSize: 0,
            priority: 1,
            reuseExistingChunk: true,
            enforce: true,
          },
          // 抽取公共依赖
          vendors: {
            name: 'vendors',
            test: /[\\/]node_modules[\\/]/,
            chunks: 'initial',
            priority: 2,
            reuseExistingChunk: true,
            enforce: true,
          },
        },
      },
    }
  },
  devServer: {
    index: '/home.html',
    proxy: {
      '/api': {
        target: 'http://172.16.11.62:9322',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
    },
  },
}
