<template>
  <div id="app">
    <h1>{{ msg }}</h1>
      <router-link to="/home">首页</router-link>
      <router-link to="/news">新闻</router-link>
      <keep-alive>
      <router-view></router-view>    
      </keep-alive>
      <button @click="sendAjax">发送Ajax请求</button>
      <!-- 自定义事件需要加修饰符 -->
      <myButton @click.native="sendAjax"></myButton>
  </div>
</template>

<script>
// import axios from "axios";
import myButton from "./components/myButton"; //引入自定义组件
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  mounted() {
    console.log(this.$route);
  },
  watch: {
    $route: function(newVal, oldVal) {
      console.log("路由跳转变化：" + newVal.path);
    }
  },
  methods: {
    sendAjax() {
      this.$http
        .get("https://api.github.com/users/tangyang8942")
        .then(resp => {
          console.log(resp.data);
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  //注册自定义组件
  components: {
    myButton
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
