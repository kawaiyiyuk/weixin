<template>
  <div >
    <header id="wx-header">
      <div class="center">
        <router-link to="/contact" tag="div" class="iconfont icon-return-arrow">
          <span>通讯录</span>
        </router-link>
        <span>标签</span>
      </div>
    </header>
    <div class="weui-cells">
      <a class="weui-cell weui-cell_access" href="javascript:;">
        <div class="weui-cell__bd">
          <i class="weui-icon-success" style="float: left"></i>
          <p>新建标签</p>
        </div>
        <div class="weui-cell__ft">

        </div>
      </a>
    </div>
    <div class="weui-cells">
      <div class="weui-cell weui-cell_access">
        <div class="weui-cell__bd">
          <p> vue 2.0</p>
        </div>
        <div class="weui-cell__ft"></div>
      </div>
      <div class="weui-cell weui-cell_access">
        <div class="weui-cell__bd">
          <p> webpack 2.0</p>
        </div>
        <div class="weui-cell__ft"></div>
      </div>

    </div>
  </div>
</template>
<script>

</script>
<style>

</style>
