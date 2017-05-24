<template>
  <div id="wx-footer">
    <nav>
      <router-link to="/" tag="dl" exact class="router-link-active">
        <dt class="iconfont icon-wechat">
          <i class="new-msg-count" v-show="$store.state.newMsgCount">{{$store.state.newMsgCount}}</i>
        </dt>
        <dd>微信</dd>
      </router-link>
      <router-link to="/contact" tag="dl">
        <dt class="iconfont icon-contact">

        </dt>
        <dd>通讯录</dd>
      </router-link>
      <router-link to="explore" tag="dl">
        <dt class="iconfont icon-find">
          <i class="new-msg-dot"></i>
        </dt>
        <dd>发现</dd>
      </router-link>
      <router-link to="/self" tag="dl">
        <dt class="iconfont icon-me">
          <i class="new-msg-dot"></i>
        </dt>
        <dd>我</dd>
      </router-link>
    </nav>

  </div>
</template>
<script>
  export default{
    data (){
      return {}
    },
    mounted(){
      for(var i in this.$store.state.msgList.baseMsg){
        if(this.$store.state.msgList.baseMsg[i].read === false && this.$store.state.msgList.baseMsg[i].quiet === false){
          this.$store.commit('addNewMsg')
        }
      }
    }
  }
</script>
<style>
  @import url(../../assets/css/wx-footer.css);
</style>
