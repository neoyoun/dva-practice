import React,{ Component, PropTypes } from 'react'
import { Table, Popconfirm, Button } from 'antd'
import { Link } from 'dva/router'

class GoodList extends Component {
  render(){
    const { onDelete, goods } = this.props
    const columns = [{
      title:'品牌',
      dataIndex: 'brand'
    },{
      title:'商品名',
      dataIndex: 'name'
    },{
      title:'配件代码',
      dataIndex: 'code'
    },{
      title:'Actions',
      render: (text, record)=>{
        return (
          <Link to={'/goodList/'+text.code}>{text.name}</Link>
          )
      }
    }];
    return (
      <Table
        dataSource={goods}
        columns = {columns}
      />
      )
  }
}
GoodList.propTypes = {
  onDelete:PropTypes.func.isRequired,
  goods:PropTypes.array.isRequired
}
export default GoodList
