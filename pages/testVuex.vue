<template>
  <div class>{{ $store.state.counter }}</div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    ...mapMutations
  }
};
</script>

<style lang="" scoped>
</style>