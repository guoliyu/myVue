<template>
  <div id="app">
    <button @click="increment">增加</button>
    <button @click="decrement">减少</button>
    <p>当前数字为：{{count}}</p>
    <p>当前为：{{isEvenOrOld}}</p>
  </div>
</template>

<script>
// 方式二
import { mapGetters, mapActions } from "vuex";
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  // 方式一
  // computed: {
  //   count() {
  //     return this.$store.state.count;
  //   }
  // }
  // 方式二
  computed: mapGetters(["count", "isEvenOrOld"]),
  methods: mapActions(["increment", "decrement"])
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
