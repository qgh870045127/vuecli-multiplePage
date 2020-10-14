const vueApp = `import Vue from 'vue'
window.Vue = Vue

import App from './index.vue'
window.App = App`

const vueTemplate = function(className) {
  return `<template>
  <div class="${className}">I'm ${className}</div>
</template>
<script>
export default {
  name: "${className}",
  data() {
    return {}
  },
  mounted() {},
  created() {},
  methods: {},
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
`
}

const publicHtml = `<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="icon" href="<%= BASE_URL %>favicon.ico">
  <title><%= htmlWebpackPlugin.options.title %></title>
  <link rel="stylesheet" type="text/css" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css">
</head>

<body></body>

</html>`

module.exports = {
  vueApp,
  vueTemplate,
  publicHtml,
}
