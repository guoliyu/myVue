/**
 * vuex配置
 */
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//定义属性（数据）
var state = {
  count: 6
};

//定义getters
var getters = {
  count(state) {
    return state.count;
  },
  isEvenOrOld(state) {
    return state.count % 2 == 0 ? '偶数' : '奇数'
  }
};
//定义活动事件
const actions = {
  increment({
    commit,
    state
  }) {
    commit("increment");
  },
  decrement(content) {
    content.commit('decrement')
  }
};
//定义mutation,处理状态（数据）的变化
const mutations = {
  increment(state) {
    state.count++;
  },
  decrement(state) {
    state.count--;
  }
};
//创建store对象
const store = new Vuex.Store({
  state: state,
  getters,
  mutations,
  actions
});

//导出store对象
export default store;
