<template>
  <div :class="{'search-open-contact':!$store.state.headerStatus}">
    <header id="wx-header">
      <div class="other">
        <span>添加朋友</span>
      </div>
      <div class="center">
        <router-link to="/contact" tag="div" class="iconfont icon-return-arrow">
          <span>通讯录</span>
        </router-link>
        <span>新的朋友</span>
      </div>
    </header>
    <!--这里的search组件需要修改-->
    <search></search>
    <div class="weui-cells margin-top-0">
      <router-link to="/contact/new-friends/mobile-contacts" tag="div" class="weui-cell">
        <dl class="add-tel-address">
          <dt><span class="iconfont icon-iphone-address"></span></dt>
          <dd>添加手机联系人</dd>
        </dl>
      </router-link>
    </div>
    <div class="weui-cells message-list">
      <div class="weui-cell">
        <div class="weui-cell__hd">
          <img src="http://webapp-yuanse.oss-cn-shanghai.aliyuncs.com/wexin/addfriend.jpg" alt="">
        </div>
        <div class="weui-cell__bd weui-cell_primary">
          <p><b>小腾</b></p>
          <p><span>来自手机通讯录</span></p>
        </div>
        <div class="weui-cell__ft">已添加</div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd">
          <img src="http://webapp-yuanse.oss-cn-shanghai.aliyuncs.com/wexin/addfriend1.jpg">
        </div>
        <div class="weui-cell__bd weui-cell_primary">
          <p><b>小云</b></p>
          <p><span>来自手机通讯录</span></p>
        </div>
        <div class="weui-cell_ft">
          已拒绝
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd">
          <img src="http://webapp-yuanse.oss-cn-shanghai.aliyuncs.com/wexin/addfriend2.jpg">
        </div>
        <div class="weui-cell__bd">
          <p><b>小李</b></p>
          <p><span>来自百度搜索</span></p>
        </div>
        <div class="weui-cell__ft">
          <a href="javascript:;" class="weui-btn weui-btn_mini weui-btn_primary">接受</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import search from '../common/search.vue'
  export default{
    data(){
      return{
        pageName:'新的朋友'
      }
    },
    components:{
      search
    }
  }
</script>
<style>
  @import '../../assets/css/new-friends.css'
</style>
