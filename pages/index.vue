<template>
  <div class="container">
    <div>
      <!-- <van-picker :columns="columns" :default-index="2" /> -->
      <logo />
      <h1 class="title">vue-ssr</h1>
      <nuxt-link to="user">用户列表</nuxt-link>
      <nuxt-link :to="{name: 'detail-id', params: {id: 1}}">详情页</nuxt-link>
      <nuxt-link :to="{name: 'detail-detailList', query: {id: 1}}">详情列表</nuxt-link>
      <nuxt-link :to="{name: 'testVuex'}">测试 vuex</nuxt-link>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  },
  data() {
    return {
      columns: ["杭州", "宁波", "温州", "嘉兴", "湖州"]
    };
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
