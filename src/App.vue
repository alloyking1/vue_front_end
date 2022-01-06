<template>
  <div id="app">
    <Nav :key="componentKey" />
    <router-view />
  </div>
</template>

<script>
import Nav from "./views/nav/nav.vue";
import "bootstrap/dist/js/bootstrap.min.js";

export default {
  name: "App",
  components: {
    Nav,
  },

  data() {
    return {
      componentKey: 0,
      status: false,
    };
  },

  mounted() {
    if (this.$cookie.get("login")) {
      this.status = true;
      this.componentKey += 1;
    }
  },
};
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.css";
</style>
