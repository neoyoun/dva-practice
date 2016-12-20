import dva from 'dva'

export default {
  namespace: 'products', //全局 state 上的 key
  state: [], // 初始值
  reducers: {
    'delete'(state, { payload: id }) {
      return state.filter(item => item.id !== id)
    }, // 相当于 redux 中的 reducer，更新 state 的方法
  },
};

