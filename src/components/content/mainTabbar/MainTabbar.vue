<template>
  <tarbar>
    <tarbaritem path="/home" activeColor="pink">
      <img
        src="../../../assets/image/tabbar/home.gif"
        alt=""
        slot="slot-icon"
      />
      <!-- 
        路径要是这么写../就老麻烦了 而且特别容易出错 平时换个文件夹什么的又得重新改 
        而且也说过 组建的源码是不需要改的 需要改的话就说明我们这个组件还有毛病 一切都要动态的来  
      -->
      <img
        src="../../../assets/image/tabbar/home_active.gif"
        alt=""
        slot="slot-icon-active"
      />
      <!--注意 这里的路径不能直接用别名替换 因为他不是在js里 直接用别名替换 虽然编译什么的不出错 但是在这里他就不是一个正确的路径 图片是无法显示的 我们还得在前面加上一个~-->
      <!--
            我们每个子组件里的内容是不一样的 我们不能再组件里写死 而是应该在组件里定义几个插槽 
            在每个子组件的模板里动态的填上我们想要的东西 它会自动替换插槽
          -->
      <p slot="slot-text">首页</p>
    </tarbaritem>
    <tarbaritem path="/category" activeColor="pink"
      ><!--为什么这里没有用v-bind绑定 因为我们的父组件里并没有这些数据 我们要传输的也并不是变量只是单纯的字符串 和proof对应上就可以-->
      <img
        src="../../../assets/image/tabbar/category.gif"
        alt=""
        slot="slot-icon"
      />
      <img
        src="../../../assets/image/tabbar/category_active.gif"
        alt=""
        slot="slot-icon-active"
      />
      <p slot="slot-text">分类</p>
    </tarbaritem>
    <tarbaritem path="/cart" activeColor="pink">
      <img
        src="../../../assets/image/tabbar/shopping_cart.gif"
        alt=""
        slot="slot-icon"
      />
      <img
        src="../../../assets/image/tabbar/shopping_cart_active.gif"
        alt=""
        slot="slot-icon-active"
      />
      <p slot="slot-text">购物车</p>
    </tarbaritem>
    <tarbaritem path="/profile" activeColor="pink">
      <img
        src="../../../assets/image/tabbar/profile.gif"
        alt=""
        slot="slot-icon"
      />
      <img
        src="../../../assets/image/tabbar/profile_active.gif"
        alt=""
        slot="slot-icon-active"
      />
      <p slot="slot-text">档案</p>
    </tarbaritem>
  </tarbar>
</template>
<script>
import tarbar from "../../common/Tabbar/tar-bar";
import tarbaritem from "../../common/Tabbar/tar-bar-item";
//我们使用我们配置好的components来代替../components这样复杂的路径 因为别名别名是我们给主要的文件夹起的名字 根据这个别名找到特定的文件夹 这才是别名的用处
//注意 这里是js 通过import引入的模块 他可以直接会用别名替换
export default {
  name: "MainTabbar",
  components: {
    tarbar,
    tarbaritem,
  },
};
</script>
<style scoped>
</style>