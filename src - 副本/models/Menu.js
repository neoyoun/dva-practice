import dva from 'dva'

export default {
  namespace:'menu',
  state:{
    theme:'light'
  },
  reducers:{
    changeTheme(state, {text:theme}){
      return Object.assign({},state,{theme:theme})
    }
  }
}
