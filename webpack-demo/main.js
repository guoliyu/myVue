/**
 * 使用ES6语法引入模块
 */
import Vue from 'vue';
import App from './App.vue'

new Vue({
    el: '#App',
    render: function (h) { //使用render渲染模块
        return h(App)
    }
})