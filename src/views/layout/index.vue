<template>
  <div>
    <router-view></router-view>
    <van-tabbar v-model="active" active-color="#ff7f50" inactive-color="#000">
      <van-tabbar-item name="home" to="/home" icon="wap-home-o"
        >首页</van-tabbar-item
      >
      <van-tabbar-item name="categorie" to="/categories" icon="apps-o"
        >分类</van-tabbar-item
      >
      <van-tabbar-item name="cart" to="/cart" icon="shopping-cart-o"
        >购物车</van-tabbar-item
      >
      <van-tabbar-item name="user" to="/user" icon="user-o"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "LayoutIndex",
  data() {
    return {
      active: "home",
    };
  },
};
</script>

<style>
</style>