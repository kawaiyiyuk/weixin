import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
const routes = [
  {
    path: '/',
    name: "微信",
    component: resolve => require(['../components/wechat/wechat.vue'], resolve)
  }, {
    path: '/wechat/dialogue',
    name: '',
    components: {
      'default': resolve => require(['../components/wechat/wechat.vue'], resolve),
      'subPage': resolve => require(['../components/wechat/dialogue.vue'], resolve)
    }
  },
  {
    path:'/wechat/dialogue/dialogue-info',
    name:'',
    components:{
      'subPage':resolve => require(['../components/wechat/dialogue-info.vue'],resolve)
    }
  },
  {
    path:'/wechat/dialogue/dialogue-detail',
    name:'',
    components:{
      'subPage':resolve => require(['../components/wechat/dialogue-detail.vue'],resolve)
    }
  },
  {
    path:'/contact',
    name:'通讯录',
    component:resolve => require(['../components/contact/contact.vue'],resolve)
  }
]

export default new Router({
  base:'/',
  routes
})

