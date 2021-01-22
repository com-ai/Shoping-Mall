<template>
  <div id="home">
    <NavBar class="nav-bar">
      <div slot="center">购物车</div>
    </NavBar>
  </div>
</template>
<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "home",
  components: {
    NavBar,
  },
};
</script>
<style scoped>
#home {
  color: #fff;
}
.nav-bar {
  background-color: pink;
}
</style>