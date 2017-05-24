<template>
  <div id="search" :class="{'search-open':!$store.state.headerStatus}">
    <div class="weui-search-bar" id="search_bar" :class="{'weui-search-bar_focusing':!$store.state.headerStatus}">
      <form class="weui-search-bar__form">
        <div class="weui-search-bar__box">
          <i class="weui-icon-search"></i>
          <input type="search" v-model="searchInput" class="weui-search-bar__input" id="search_input" placeholder="搜索" @focus="closeHeader">
          <a class="weui-icon-clear" ></a>
        </div>
        <label class="weui-search-bar__label" id="search_text" for="search_input">
          <i class="weui-icon-search"></i>
          <span>搜索</span>
        </label>
      </form>
      <a class="weui-search-bar__cancel-btn" id="search-cancel" v-on:click="$store.commit('toggleHeaderStatus',true)">取消</a>
    </div>
    <article>
      <h3 class="weui-media-box__desc">搜素指定内容</h3>
      <div class="tag"><span>朋友圈</span><span>新闻</span><span>音乐</span><span>你最喜欢</span><span>公众号</span><span>美图</span></div>
      <div class="weui-cells">
        <a class="weui-cell weui-cell_access" href="javascript:;">
          <div class="weui-cell__hd"><img src="../../assets/images/book.png" alt="" style="width:20px;display: block;margin-right: 5px"></div>
          <div class="weui-cell__bd">
            <p>时事热闻</p>
          </div>
          <div class="weui-cell__ft"></div>
        </a>
      </div>
    </article>
  </div>
</template>
<script>
  export default{
    data(){
      return{
        searchInput:''
      }
    },
    methods:{
      closeHeader(){
        if (this.$store.state.headerStatus) {
          this.$store.commit('toggleHeaderStatus', false)
        } else {}
      },
      searchClear(){
        this.searchInput = ''
      }
    }
  }
</script>
<style>
  @import "../../assets/css/search.css";
</style>
