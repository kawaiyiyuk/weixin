<template>
  <div id="wx-header">
    <!--右上角图标-->
    <div class="other">
      <!--只在“微信”页显示 更多图标-->
      <span class="iconfont icon-tips-jia" v-on:click="$store.commit('toggleTipsStatus')" v-show="$route.path==='/'"></span>
      <!--只在“通讯录”页显示 显示添加好友图标-->
      <router-link tag="span" class="iconfont icon-tips-add-friend" v-show="$route.path==='/contact'" to="/contact/add-friend">

      </router-link>
      <span v-show="$route.path==='/contact/new-friends'">添加朋友</span>
      <!--下面这个好像有些多余 sad -->
      <span class="iconfont icon-chat-friends" v-show="$route.path==='/wechat/dialogue'"></span>
      <ul class="tips-menu" v-on:click="$store.commit('toggleTipsStatus', -1)"
          :class="[$store.state.tipsStatus?'tips-open':'tips-close']">
        <li>
          <span class="iconfont icon-tips-xiaoxi"></span>
          <div>发起群聊</div>
        </li>
        <li>
          <span class="iconfont icon-tips-add-friend"></span>
          <div>添加朋友</div>
        </li>

        <li><span class="iconfont icon-tips-saoyisao"></span>
          <div>扫一扫</div>
        </li>
        <li><span class="iconfont icon-tips-fukuan"></span>
          <div>收付款</div>
        </li>
      </ul>
    </div>
    <div class="center">
      <span>{{$store.state.currentPageName}}</span>
    </div>
  </div>
</template>
<script>

</script>

<style>

</style>
