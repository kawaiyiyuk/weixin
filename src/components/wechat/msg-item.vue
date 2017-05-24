<template>
  <li :class="{'item-hide':deleteMsg}">
    <router-link :to = "{path:'/wechat/dialogue',query: { mid: item.mid,name:item.group_name||(item.user[0].remark||item.user[0].nickname),group_num:item.user.length}}" tag="div" class="list-info" v-on:click.native="toggleMsgRead($event,'enter')"  v-swiper>
      <div class="header-box">
        <!--未读并且未屏蔽 才显示新信息数量-->
        <i class="new-msg-count" v-show="!read&&!item.quiet">{{item.msg.length}}</i>
        <!--未读并且屏蔽 只显示小红点-->
        <i class="new-msg-dot" v-show="!read&&item.quiet"></i>
        <!--如果是私聊，只显示一个头像； 如果是群聊，则显示多个头像，flex 控制样式-->
        <div class="header" :class="[item.type=='group'?'multi-header':'']">
          <img v-for="userInfo in item.user" :src="userInfo.headerUrl">
        </div>
      </div>
      <div class="desc-box">
        <!--使用过滤器 fmtDate 格式化时间-->
        <div class="desc-time">{{item.msg[item.msg.length-1].date | fmtDate('hh:ss')}}</div>
        <div class="desc-author" v-if="item.type=='group'">{{item.group_name}}</div>
        <!--如果没有备注好友，则显示微信昵称-->
        <div class="desc-author" v-else>{{item.user[0].remark||item.user[0].nickname}}</div>
        <div class="desc-msg">
          <div class="desc-mute iconfont icon-mute" v-show="item.quiet"></div>
          <span v-show="item.type=='group'">{{item.msg[item.msg.length-1].name}}:</span>
          <span>{{item.msg[item.msg.length-1].text}}</span>
        </div>
      </div>
    </router-link>
    <div class="operate-box">
      <div class="operate-unread" v-if="read" v-on:click = "toggleMsgRead">标为未读</div>
      <div class="operate-read" v-else v-on:click = "toggleMsgRead">标为已读</div>
      <div class="operate-del" v-on:click = "deleteMsgEvent">删除</div>
    </div>
  </li>
</template>
<script>
  export default {
    props:['item'],
    data (){
      return {
        read:this.item.read,
        deleteMsg:false
      }
    },
    methods:{
      toggleMsgRead(event,status){
        if(status==='enter'){
          if(this.read){
            return ''
          }
          this.read = true
        }else{
          this.read = !this.read
        }
        if(!this.item.quiet){
          if(this.read){
            this.$store.commit('minusNewMsg')
          }else{
            this.$store.commit('addNewMsg')
          }
        }
        event.target.parentNode.parentNode.firstChild.style.marginLeft = 0 + 'px'
      },
      deleteMsgEvent(){
        this.deleteMsg = true;
        if(!this.item.quiet){
          if(!this.read){
            this.$store.commit('minusNewMsg')
          }
        }
      }
    },
    directives:{
      swiper:{
        bind:function(element,binding){
          var isTouchMove, startTx, startTy
          element.addEventListener('touchstart',function(e){ //当手指触摸屏幕时候触发，即使已经有一个手指放在屏幕上也会触发。

            var touches = e.touches[0];
            startTx = touches.clientX;
            startTy = touches.clientY;
            isTouchMove = false;
          },false)
          element.addEventListener('touchmove',function(e){
            var touches = e.changedTouches[0],
                endTx = touches.clientX,
                entTy = touches.clientY,
                distanceX = startTx-endTx,
                distanceY = startTy-entTy;
            if(distanceX<0){ //右滑动
              if(Math.abs(distanceX) >= Math.abs(distanceY)){
                if(Math.abs(distanceX) >20 ){
                  element.style.transition = '0.3s';
                  element.style.marginLeft = 0 + 'px'
                }
              }
            }else{ //左滑动
              if(Math.abs(distanceX) >= Math.abs(distanceY)){
                if(distanceX < 156 && distanceX > 20){
                  e.preventDefault() //阻止默认事件
                  element.style.transition = '0s';
                  element.style.marginLeft = -distanceX + 'px';
                  isTouchMove = true
                }
              }
            }

          },false);
          element.addEventListener('touchend',function(e){
            if(!isTouchMove){
              return;
            }
            var touches = e.changedTouches[0],
              endTx = touches.clientX,
              endTy = touches.clientY,
              distanceX = startTx - endTx,
              distanceY = startTy - endTy,
              isSwipe = false;
            if(Math.abs(distanceX) >= Math.abs(distanceY)){//这句话代表手势横向拖动
              if(distanceX<0){
                return
              };
              if(distanceX<60){
                isSwipe = true;
                element.style.transition = '0.3s';
                element.style.marginLeft = 0 + 'px'
              }else{
                element.style.transition = '0s';
                element.style.marginLeft = '-156px'
              }
            }
          },false)
        }
      }
    }
  }
  /*
   * touches：表示当前跟踪的触摸操作的touch对象的数组。

   　　targetTouches：特定于事件目标的Touch对象的数组。

   　　changedTouches：表示自上次触摸以来发生了什么改变的Touch对象的数组。
       clientX：触摸目标在视口中的x坐标。

   　　clientY：触摸目标在视口中的y坐标。

   　　identifier：标识触摸的唯一ID。

   　　pageX：触摸目标在页面中的x坐标。

   　　pageY：触摸目标在页面中的y坐标。

   　　screenX：触摸目标在屏幕中的x坐标。

   　　screenY：触摸目标在屏幕中的y坐标。

   　　target：触目的DOM节点目标。

   *
   * */
</script>
<style>

</style>
