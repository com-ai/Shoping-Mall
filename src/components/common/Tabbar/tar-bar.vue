<template>
  <div id="tar-bar">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "tar-bar",
};
</script>
<style scoped>
#tar-bar {
  display: flex;
  height: 49px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 49px;
  background-color: #f6f6f6;
  box-shadow: 0 -1px 10px rgba(100, 100, 100, 0.5);
}
</style>