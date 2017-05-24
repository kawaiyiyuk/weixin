<template>
  <div id="app">
    <welcome></welcome>
    <div class="outter" :class="{'hideLeft':$route.path.split('/').length>2}">
      <!--通用头部-->
      <header class="app-header" :class="{'header-hide':!$store.state.headerStatus}">
        <wx-header :pageName="pageName"></wx-header>
      </header>

      <!--搜索框 只在“微信”和“通讯录”页面下显示-->
      <search v-show="$route.path.indexOf('explore')===-1 && $route.path.indexOf('self')===-1"></search>

      <section class="app-content">
        <keep-alive>
          <router-view name="default"></router-view>
        </keep-alive>
      </section>

      <!--底部导航 路由 -->
      <footer class="app-footer">
        <wx-nav></wx-nav>
      </footer>

    </div>
    <transition name="custom-classes-transition" :enter-active-class="enterAnimate" :leave-active-class="leaveAnimate">
      <router-view name="subPage" class="sub-page"></router-view>
    </transition>
  </div>
</template>

<script>
  import welcome from './components/common/welcome.vue'
  import WxHeader from './components/common/wx-header.vue'
  import search from './components/common/search.vue'
  import wxNav from './components/common/wx-foooter.vue'
  import mixin from './vuex/mixin.js'
  window.mixin = mixin // 将 混合/mixin 暴露在窗口对象中，某些组件需要时，直接提取 window.mixin
  export default {
    name: 'app',
    components: { welcome, WxHeader, search, wxNav },
    data(){
      return {
        'pageName': '',
        'routerAnimate': false,
        'enterAnimate': '',//页面进入动效
        'leaveAnimate': ''//页面离开动效
      }
    },
    watch: {
      // 监听 $route 为页设置不同的过渡效果
      '$route'(to, from){
        const toDepth = to.path.split('/').length;
        const fromDepth = from.path.split('/').length;
        if (toDepth === 2) {
          this.$store.commit('setPageName', to.name)
        }
        //同一级页面无需设置过渡效果
        if (toDepth === fromDepth) {
          return;
        }
        this.enterAnimate = toDepth > fromDepth ? 'animated fadeInRight' : 'animated fadeInLeft';
        this.leaveAnimate = toDepth > fromDepth ? 'animated fadeOutLeft' : 'animated fadeOutRight'
        // 从店面页进入店内页 需要对店内页重新设置离开动效 因为他们处于不同 name 的 router-view
        if (toDepth === 3) {
          this.leaveAnimate = 'animated fadeOutRight'
        }
      }
    }

    /*
     *
     *$route.path	当前路由对象的路径，如'/view/a'
     $rotue.params	关于动态片段（如/user/:username)的键值对信息,如{username: 'paolino'}
     $route.query	请求参数，如/foo?user=1获取到query.user = 1
     $route.router	所属路由器以及所属组件信息
     $route.matched	数组，包含当前匹配的路径中所包含的所有片段所对应的配置参数对象。
     $route.name	当前路径名字*/
  }
</script>

<style>
  @import "assets/css/wx-header.css";
  @import "assets/css/base.css";
  @import "assets/css/common.css";
  @import "assets/css/lib/animate.css";
  @import "assets/css/lib/weui.min.css";
  @import "assets/css/lib/iconfont.css";

</style>
