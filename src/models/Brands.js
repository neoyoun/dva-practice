import dva from 'dva'

export default {
  namespace: 'brands',
  state:[],
  reducers: {
    logger(state, { payload: id}){
      console.log('this menu id is '+ id)
      return state
    }
  },
}
