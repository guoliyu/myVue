import Vue from 'vue'
import App from './App.vue'
import Store from './store' //导入store对象
new Vue({
  store: Store, //配置store选项，指定为store对象，会自动将store对象注入到所有自组件中，在子组件中通过this.$store访问store对象
  el: '#app',
  render: h => h(App)
})
