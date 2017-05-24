<template>
  <div id="wx-header">
    <!--右上角图标-->
    <div class="other">
      <span class="iconfont icon-tips-jia" v-on:click="$store.commit('toggleTipsStatus')"></span>
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
