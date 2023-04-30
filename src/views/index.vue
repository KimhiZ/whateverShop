<template>
  <div class="main">
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" indicator-color="#fff">
      <van-swipe-item v-for="(image, index) in banner" :key="index">
        <img :src="image.img_path" width="100%" />
      </van-swipe-item>
    </van-swipe>
    <van-divider
  :style="{ color: '#666', borderColor: '#333', padding: '10px 16px' }"
>
  推荐商品
</van-divider>
    <!-- 首页商品 -->
    <div class="pro">
      <div class="pro_item" v-for="(i, index) in products" v-if="index<14" :key="index">
        <div class="pro_img">
          <img
          :src="i.imgPath"
          alt="图片加载失败"
          :title="i.content"
          width="70%"
        />
        </div>
        <p class="pro_text van-ellipsis">{{ i.product_name }}</p>
        <div class="pro_bottom">
          <div class="pro_price">￥<span>{{i.price}}</span></div>
          <div class="addCart"><button>+</button></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swipe, SwipeItem,Divider  } from "vant";
export default {
  data() {
    return {};
  },
  props: ["banner", "products"],
  methods: {},
  mounted() {},
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Divider.name]: Divider,
  },
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
.main {
  width: 100%;
  .pro {
    width: 100%;
    margin-bottom: 52px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    .pro_item {
      background: #f5f5f5;
      width: 45%;
      height: auto;
      border: 1px solid #f5f5f5af;
      border-radius: 10px;
      margin-bottom: 15px;
      box-shadow: 3px 3px 5px 2px rgba($color: #000000, $alpha: 0.3);
      .pro_img {
        width: 100%;
        border-radius: 10px;
        display: flex;
        justify-content: center;
      }
      .pro_text{
        font-size: 14px;
        color: #666;
        padding: 5px 10px;
      }
      .pro_bottom{
        display: flex;
        width: 100%;
        height: 2rem;
        justify-content: space-between;
        .pro_price{
          padding-left: 10px;
          font-size: 15px;
          font-weight: bold;
          color: #ff6600;
          span{
            font-size: 18px;
          }
        }
         .addCart{
           padding-right: 12px;
            button{
              width: 1.5rem;
              height: 1.5rem;
              border-radius: 50%;
              font-size: 20px;
              color: #fff;
              background: #ff6600;
              border: none;
            }
          }
      }
    }
  }
}
</style>
