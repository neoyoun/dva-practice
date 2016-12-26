import dva from 'dva'

export default {
  namespace:'cates',
  state:{
    selected:1,
    list:[]
  },
  reducers:{
    setCate(state,{selected:id}){
      return Object.assign({}, state, {selected:id})
    }
  }
}
