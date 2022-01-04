<template>
  <div id="app">
    <Nav />
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
};
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.css";
</style>
