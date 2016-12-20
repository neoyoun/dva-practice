import React,{ Component, PropTypes } from 'react'
import { Table, Popconfirm, Button } from 'antd'

class ProductList extends Component {
  render(){
    const { onDelete, products } = this.props
    const columns = [{
      title:'品牌',
      dataIndex: 'name'
    },{
      title:'配件代码',
      dataIndex: 'code'
    },{
      title:'Actions',
      render: (text, record)=>{
        return (
          <Popconfirm title={"delete "+text['name']+"?"} onConfirm={()=>onDelete(record.id)}>
            <Button>delete</Button>
          </Popconfirm>
          )
      }
    }];
    return (
      <Table
        dataSource={products}
        columns = {columns}
      />
      )
  }
}
ProductList.propTypes = {
  onDelete:PropTypes.func.isRequired,
  products:PropTypes.array.isRequired
}
export default ProductList
