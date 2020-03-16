<template>
  <div class>
    <div>路由传参: {{$route.params.id}}</div>
    <nuxt-child />
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>

<style lang="" scoped>
</style>