<template>
  <div class="container">
    <h1 v-if="error.statusCode == 404">页面不存在</h1>
    <!-- <h1>应用发生异常</h1> -->
    <nuxt-link to="/">首页</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ["error"]
};
</script>

<style lang="less" scoped>
</style>