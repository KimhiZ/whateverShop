<template>
  <van-tabbar v-model="active" route>
    <van-tabbar-item icon="home-o" replace to="/index">首页</van-tabbar-item>
    <van-tabbar-item icon="coupon-o" replace to="/cate">分类</van-tabbar-item>
    <van-tabbar-item icon="newspaper-o" replace to="/find" badge="5">发现</van-tabbar-item>
    <van-tabbar-item icon="cart-o" replace to="/cart" badge="5"
      >购物车</van-tabbar-item
    >
    <van-tabbar-item icon="friends-o" replace to="/my" badge="20">我的</van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from "vant";
export default {
  name: "AppFooter",
  data() {
    return {
      active: 0,
    };
  },
  methods: {},
  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
  },
};
</script>

<style lang="scss" scoped></style>
