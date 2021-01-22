<template>
  <div class="nav-bar">
    <div class="left">
      <!--slot是插槽 但是他也需要进行布局定位 所以一般在他外面套一个div-->
      <slot name="left"></slot>
    </div>
    <div class="center">
      <slot name="center"></slot>
    </div>
    <div class="right">
      <slot name="right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "NavBar",
};
</script>
<style scoped>
.nav-bar {
  line-height: 44px;
  height: 44px;
  display: flex;
}
.left,
.right {
  width: 60px;
}
.nav-bar .center {
  flex: 1;
}
</style>