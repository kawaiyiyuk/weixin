<template>
<!--发现组件-->
  <div id="explore">
    <section>
      <div class="weui-cells">
        <router-link to="/explore/moments" class="weui-cell weui-cell_access" tag="div" v-on:click.native="momentNewMsg=false">
          <div class="weui-cell__hd">
            <img src="../../assets/images/find_icon-circle.png">
          </div>
          <div class="weui-cell__bd" style="line-height: 28px;">
            朋友圈
          </div>
          <div class="weui-cell__ft">
            <div class="home__notice" v-show="momentNewMsg">
              <img src="https://sinacloud.net/vue-wechat/images/headers/yehua.jpg" alt="" class="">
              <i class="new-msg-dot"></i>
            </div>
          </div>
        </router-link>

      </div>
      <div class="weui-cells">
        <div class="weui-cell weui-cell_access" id="scanCell">
          <div class="weui-cell__hd">
            <img src="../../assets/images/find_icon-qrcode.png" alt="">
          </div>
          <div class="weui-cell__bd">
            扫一扫
          </div>
        </div>
        <div class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="../../assets/images/find_icon-shake.png" alt="">
          </div>
          <div class="weui-cell__bd">
            摇一摇
          </div>
        </div>
      </div>
      <div class="weui-cells">
        <div class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="../../assets/images/find_icon-shopping.png" alt="">
          </div>
          <div class="weui-cell__bd">
            购物
          </div>
        </div>
        <div class="weui-cell weui-cell_access">
          <div class="weui-cell__hd">
            <img src="../../assets/images/find_icon-moregame.png" alt="">
          </div>
          <div class="weui-cell__bd">
            游戏
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default{
  mixins: [window.mixin],
  data (){
    return {
      pageName: "发现",
      momentNewMsg: true
    }
  },
  activated(){
    this.$store.commit("toggleTipsStatus", -1)
  }
}
</script>
<style>
  @import "../../assets/css/explore.css";
</style>
