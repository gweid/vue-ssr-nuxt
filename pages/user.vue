<template>
  <div class>
    <h1>用户列表</h1>
    <div v-for="item in userList" :key="item.id">
      <p>{{item.name}}</p>
    </div>
  </div>
</template>

<script>
function getUsers() {
  return [
    { id: "01", name: "你好" },
    { id: "02", name: "好的" }
  ];
}

export default {
  layout: "user", // 通用布局
  // 页面局部修改 head
  head() {
    return {
      title: "用户",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "用户列表"
        }
      ]
    };
  },
  // asyncData 能够在渲染组件之前异步获取数据
  //   async asyncData(cxt) {
  //     console.log(cxt);

  //     const userList = await getUsers();
  //     // 返回的数据最终会和 data 合并，所以可以直接当 data 使用
  //     return { userList }; // 必须在 {} 中包裹返回
  //   }
  async asyncData(cxt) {
    // 使用 @nuxtjs/axios, 内部处理封装在了上下文 ctx 中
    let userList = await cxt.$axios.$get("/api/users");  // 这个

    // 返回的数据最终会和 data 合并，所以可以直接当 data 使用
    return { userList }; // 必须在 {} 中包裹返回
  }
};
</script>

<style lang="" scoped>
</style>