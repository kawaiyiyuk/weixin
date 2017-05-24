<template>
  <div id="wechat">
    <ul class="wechat-list">
      <!--props传递消息对象 baseMsgObj -->
      <msg-item v-for="baseMsgObj in $store.state.msgList.baseMsg" :item = "baseMsgObj" class="list-row line-bottom" :key="baseMsgObj.mid"></msg-item>
    </ul>

  </div>
</template>
<script>
  import search from '../common/search'
  import msgItem from '../wechat/msg-item'
  export default {
    data(){
      return{
        'pageName':'微信'
      }
    },
    components:{
      search,
      msgItem
    },
    mixins:[window.mixin]
  }
</script>
<style>
  @import "../../assets/css/wechat.css";

</style>
