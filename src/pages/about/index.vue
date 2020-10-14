<template>
  <div class="about">
    <loading :show="true"></loading>
  </div>
</template>
<script>
export default {
  name: 'about',
  data() {
    return {}
  },
  mounted() {},
  created() {
    this.$api.aboutList()
  },
  methods: {},
}
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
