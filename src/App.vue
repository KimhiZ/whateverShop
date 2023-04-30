<template>
  <div id="app">
    <!-- 头部栏 -->
    <AppHeader />
    <!-- 内容 -->
    <transition  name="van-fade">
      <router-view :banner="banner" :products="products" :cates="cates"></router-view>
    </transition>
    <!-- 底部导航栏 -->
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from "./components/AppFooter.vue";
import AppHeader from "./components/AppHeader.vue";
export default {
  name: "app",
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      banner: [],
      cates: [],
      products: [],
      news: [],
    };
  },
  methods: {
    getBanner() {
      this.$axios({
        method: "get",
        url: "/api/banner",
      })
        .then((res) => {
          var address = "http://qqshop.com/upload/";
          for (let i = 0; i < res.data.data.length; i++) {
            res.data.data[i].img_path = address + res.data.data[i].img_path;
          }
          this.banner = res.data.data;
          console.log(this.banner);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getCate() {
      this.$axios({ method: "get", url: "/api/Category" }).then((res) => {
        this.cates=res.data.data
        console.log(this.cates)
      });
    },
    getPro() {
      this.$axios({ method: "get", url: "/api/Products" }).then((res) => {
        var address = "http://qqshop.com/upload/";
          for (let i = 0; i < res.data.data.length; i++) {
            res.data.data[i].imgPath = address + res.data.data[i].imgPath;
          }
        this.products=res.data.data
        console.log(this.products)
      });
    },
  },
  mounted() {
    this.getBanner();
    this.getCate();
    this.getPro()
  },
};
</script>
<style lang="scss"></style>
