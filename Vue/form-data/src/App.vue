<template>
  <div id="app">
    <HomePage />
  </div>
</template>

<script>
import HomePage from "./components/HomePage.vue";
export default {
  name: "App",
  components: {
    HomePage,
  },
};
</script>

<style>
#app {
  background: #f2f4f7;
}
</style>
