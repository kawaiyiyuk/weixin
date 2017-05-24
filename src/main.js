// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './vuex/store'
import FastClick from 'fastclick'
import filters from './filters'

Vue.use(VueAxios,axios,Vuex)
filters(Vue)

Vue.config.productionTip = false

FastClick.attach(document.body)

/* eslint-disable no-new */
//注册全局过滤器

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
