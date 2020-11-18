<template>
  <div class="tar-bar-item" v-on:click="click()">
    <div class="img" v-if="!isActive">
      <slot name="slot-icon"></slot>
    </div>
    <div class="img" v-else>
      <slot name="slot-icon-active"></slot>
    </div>
    <div v-bind:style="sas">
      <!--动态绑定样式-->
      <slot name="slot-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "tar-bar-item",
  data() {
    return {
      //isActive: false, 我们现在要动态的获取活跃状态 tar-bar-item因该是那个处在活跃状态就给那个添加类名 所以我们不能在这里写死
      //组件里的一切都应该是动态的
    };
  },
  props: {
    path: {
      type: String,
    },
    activeColor: {
      type: String,
      default: "red",
    },
  },
  methods: {
    click() {
      this.$router.push(this.path);
      console.log(this.isActive);
    },
  },
  computed: {
    isActive() {
      return this.$route.path == this.path; //所说属性不能写死
      //但是我们的$route肯定是而且只有一条的是当前的活跃路由
      //我们就判断当前活跃路由和我们父组件绑定返回给子组件的oath是否相同 相同的话必定返回true
      //而且这是一个计算属性
    },
    sas() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
};
</script>
<style scoped>
.tar-bar-item {
  flex: 1;
  text-align: center;
  font-size: 14px;
}
.img {
  width: 24px;
  height: 24px;
  margin: 0 auto;
  margin-top: 3px;
}
.img img {
  width: 100%;
  width: 100%;
}
/* .tar-bar-item-text {
   color: red;    我们也不能在这里把样式写死 想一下 我们这个组件给了别人以后 别人不喜欢我们设定的颜色 他想改的话只能该我们的源码
   我们好不容易写的源码不希望别人随便改 而且别人需要修改源码就说明我们这个组件封装的不够彻底 组件里一切都要动态的来

     *************<tarbaritem path="cart" activeColor="pink">********** 所以 我们的组件封装好以后 用户要考虑的只是调用的时候做什么 具体操作我们来
                  想咋没呢用他们来 他们想要什么颜色 就在调用组建的时候动态的传入改属性 然后通过组件通信传到子组件进行处理
} */
</style>