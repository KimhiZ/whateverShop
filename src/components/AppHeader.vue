<template>
  <van-nav-bar title="求其商城">
    <template #left>
      <van-icon name="arrow-left" />
    </template>
    <template #right>
      <van-icon name="search" size="18" />
    </template>
  </van-nav-bar>
</template>

<script>
import { NavBar,Icon } from "vant";
export default {
  name: "AppHeader",
  methods: {
    onClickLeft() {
      alert("返回");
    },
    onClickRight() {
      alert("按钮");
    },
  },
  components: {
    [NavBar.name]: NavBar,
    [Icon.name]: Icon,
  },
};
</script>

<style lang="scss" scoped>

</style>
