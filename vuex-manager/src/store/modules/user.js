/**
 * 用户模块
 */
import types from '../types'

const state = {
  count: 6
}
//定义getters
var getters = {
  count(state) {
    return state.count;
  }
};
//定义活动事件
const actions = {
  increment({
    commit,
    state
  }) {
    commit(types.INCREMENT);
  },
  decrement(content) {
    content.commit(types.DECREMENT)
  }
};
//定义mutation,处理状态（数据）的变化
const mutations = {
  [types.INCREMENT](state) {
    state.count++;
  },
  [types.DECREMENT](state) {
    state.count--;
  }
};

//导出
export default {
  state,
  getters,
  actions,
  mutations
}
