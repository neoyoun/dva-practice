import dva from 'dva'
import goodsInfo from '../../codes/goodsInfo.json'
export default {
  namespace:'goods',
  state:{
    list:[],
    loading:false,
    current:null,
    currentItme:null,
    cateId:1
  },
  reducers:{
    setCateId(state, { payload:id }){
      let list= [];
      goodsInfo.forEach(item=>{
        if(item.id == id || item.parentId == id){
          list.push(item.goods)
        }
      })
      list = list.reduce((prevArr, nextArr)=>{
        return prevArr.concat(nextArr)
      })
      return Object.assign({},state, {list:list, cateId:id})
    },
  }
}
