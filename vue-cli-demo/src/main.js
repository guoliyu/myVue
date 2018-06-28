import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routerConfig from './router.config'
import axios from 'axios'
//引用vuerouter模块
Vue.use(VueRouter);

Vue.prototype.$http = axios; //定义Vue属性axios
//创建路由实例
const router = new VueRouter(routerConfig)
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
