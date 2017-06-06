<template>
  <!--手机联系人组件-->
  <div :class="{'search-open-contact':!$store.state.headerStatus}">
    <header id="wx-header">
      <div class="center">
        <router-link to="/contact/new-friends" tag="div" class="iconfont icon-return-arrow">
          <span>新的朋友</span>
        </router-link>
        <span>通讯录朋友</span>
      </div>
    </header>
    <search></search>
    <section>
      <div class="weui-cells__title">G</div>
      <div class="weui-cells">
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <img src="http://webapp-yuanse.oss-cn-shanghai.aliyuncs.com/wexin/header_08.jpg">
          </div>
          <div class="weui-cell__bd">关羽</div>
        </div>
      </div>
      <div class="weui-cells__title">L</div>
      <div class="weui-cells">
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <img src="http://webapp-yuanse.oss-cn-shanghai.aliyuncs.com/wexin/header_06.jpg"/>
          </div>
          <div class="weui-cell__bd">露娜</div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <img src="http://webapp-yuanse.oss-cn-shanghai.aliyuncs.com/wexin/header_07.jpg"/>
          </div>
          <div class="weui-cell__bd">鲁班</div>
        </div>
      </div>
      <div class="weui-cells__title">X</div>
      <div class="weui-cells">
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <img src="http://webapp-yuanse.oss-cn-shanghai.aliyuncs.com/wexin/header_02.jpg"/>
          </div>
          <div class="weui-cell__bd">小学生a</div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <img src="http://webapp-yuanse.oss-cn-shanghai.aliyuncs.com/wexin/header_03.jpg"/>
          </div>
          <div class="weui-cell__bd">小学生b</div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <img src="http://webapp-yuanse.oss-cn-shanghai.aliyuncs.com/wexin/header_04.jpg"/>
          </div>
          <div class="weui-cell__bd">小学生c</div>
        </div>
      </div>
      <div class="weui-cells__title">Y</div>
      <div class="weui-cells">
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <img src="http://webapp-yuanse.oss-cn-shanghai.aliyuncs.com/wexin/header_01.jpg" alt="">
          </div>
          <div class="weui-cell__hd">原色调</div>
        </div>
        <div class="weui-cell">
          <div class="weui-cell__hd">
            <img src="http://webapp-yuanse.oss-cn-shanghai.aliyuncs.com/wexin/header_05.jpg" alt="">
          </div>
          <div class="weui-cell__bd">杨戬</div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
  import search from '../common/search.vue'
  export default {
    mixins: [window.mixin],
    data(){
      return {
        pageName: '通讯录朋友'
      }
    },
    components: { search }
  }
</script>
<style>

</style>
