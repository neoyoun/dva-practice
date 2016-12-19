import React, { PropTypes } from 'react'
import { Table, Popconfirm, Button } from 'antd'

const ProductList = ({onDelete, products}) => {
  const columns = [{
    title:'产品名',
    dataIndex: 'name',
  },{
    title: '产品ID',
    render: (text, record)=>{
      return (
        <Popconfirm title="delete?" onConfirm={()=>onDelete(record.id)}>
          <Button>Delete</Button>
        </Popconfirm>
        )
    }
  }];

  return (
      <Table
        dataSource = {products}
        columns={columns}
        />
    )
}

ProductList.PropTypes = {
  onDelete:PropTypes.func.isRequired,
  products:PropTypes.array.isRequired
}

export default ProductList
