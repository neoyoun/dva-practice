import React,{ Component } from 'react'
import { connect } from 'dva'

const GoodPage = ({dispatch, goodsInfo})=>{
  return (
    <div>
      <h2>产品详情页</h2>
    </div>
  )
}

export default connect()(GoodPage)
