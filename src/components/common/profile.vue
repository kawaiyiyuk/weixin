<template>
  <!--个人信息组件-->
  <div class="profile">
    <header id="wx-header">
      <div class="center">
        <router-link to="/self" tag="div" class="iconfont icon-return-arrow">
          <span>我</span>
        </router-link>
        <span>
          个人信息
        </span>
      </div>
    </header>
    <div class="weui-cells">
      <div class="weui-cell" id="avatarCell">
        <div class="weui-cell__bd">
         <p>头像</p>
        </div>
        <div class="weui-cell__ft">
          <img src="http://webapp-yuanse.oss-cn-shanghai.aliyuncs.com/wexin/header_01.jpg" alt="" style="width:50px;height:50px;border-radius:4px;">
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__bd">
          <p>名字</p>
        </div>
        <div class="weui-cell__ft">
          <p>原色调</p>
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__bd">
          <p>微信号</p>
        </div>
        <div class="weui-cell__ft">
          123456
        </div>
      </div>
      <div class="weui-cell weui-cell_access">
        <div class="weui-cell__bd">
          <p>我的二维码</p>
        </div>
        <div class="weui-cell__ft">
          <img src="../../assets/images/contact_add-friend-my-qr.png" alt="" style="width: 24px;height: 24px;vertical-align: middle" class="_align-middle">
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__bd">
          <p>我的地址</p>
        </div>
      </div>
    </div>
    <div class="weui-cells">
      <div class="weui-cell">
        <div class="weui-cell__bd">
          <p>性别</p>
        </div>
        <div class="weui-cell__ft">
          男
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__bd">
          <p>地区</p>
        </div>
        <div class="weui-cell__ft">
          北京 朝阳
        </div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__bd">
          <p>个性签名</p>
        </div>
        <div class="weui-cell__ft">
          未填写
        </div>
      </div>
    </div>
    <div class="weui-cells">
      <div class="weui-cell">
        <div class="weui-cell__bd">
          <p>QQ 账号</p>
        </div>
        <div class="weui-cell__ft">
          未设置
        </div>
      </div>
    </div>
  </div>
</template>
<script>

</script>
<style>

</style>
