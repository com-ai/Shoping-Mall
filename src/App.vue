<template>
  <div id="app">
    <router-view />
    <MainTabber />
  </div>
</template>

<script>
import MainTabber from "components/content/mainTabbar/MainTabbar";
export default {
  name: "App",
  components: {
    MainTabber,
  },
};
</script>

<style>
@import "assets/css/base.css";
</style>
