<template>
<div>
<!-- 轮播图 -->
<mt-swipe :auto="4000">
    <mt-swipe-item v-for="(item,index) in imageList" :key="index">
        <img :src="item.img" alt="">
    </mt-swipe-item>
</mt-swipe>

<!-- 九宫格布局 -->
<ul class="mui-table-view mui-grid-view mui-grid-9">
    <li class="mui-table-view-cell mui-media mui-col-xs-4 ">
        <router-link to="/home/newslist">
            <img src="../../assets/images/menu1.png" alt="">
            <div class="mui-media-body">新闻资讯</div>
        </router-link>
    </li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 ">
      <a href="#">
            <img src="../../assets/images/menu2.png" alt="">
            <div class="mui-media-body">图片分享</div>
      </a>
    </li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 ">
        <a href="#">
            <img src="../../assets/images/menu3.png" alt="">
            <div class="mui-media-body">商品购买</div>
        </a>
    </li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 ">
        <a href="#">
            <img src="../../assets/images/menu4.png" alt="">
            <div class="mui-media-body">留言反馈</div>
        </a>
    </li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 ">
        <a href="#">
            <img src="../../assets/images/menu5.png" alt="">
            <div class="mui-media-body">视频专区</div>
        </a>
    </li>
    <li class="mui-table-view-cell mui-media mui-col-xs-4 ">
        <a href="#">
            <img src="../../assets/images/menu6.png" alt="">
            <div class="mui-media-body">联系我们</div>
        </a>
    </li>
</ul> 
</div>
</template>

<script>
    export default {
    name:'home',
    data(){
        return {
            imageList: []
        }
    },
    created() {
    // 发起获取轮播图的数据请求
    this.getlunbo();
  },
  methods: {
    getlunbo() {
      this.$http.get("api/getlunbo").then(result => {
        if (result.body.status === 0) {
            this.imageList = result.body.message;
        } else {
          Toast("数据加载失败...");
        }
      });
    }
  }
}
</script>
<style scoped>
.mint-swipe{
    height: 200px;
}
.mint-swipe .mint-swipe-item img{
    width: 100%;
    height: 100%;
}

.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
}
.mui-grid-view.mui-grid-9 img{
    width: 60px;
}
.mui-grid-view.mui-grid-9 .mui-media-body {
    font-size: 13px;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0;
}
</style>