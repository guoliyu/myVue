/**
 * vuex配置
 */
import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

//定义属性（数据）
var state = {
  count: 6
}

//定义getters
var getters = {
  count(state) {
    return state.count
  }
}
//创建store对象
const store = new Vuex.Store({
  state: state,
  getters
});

//导出store对象
export default store
