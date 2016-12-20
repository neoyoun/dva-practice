import React from 'react'
import { connect } from 'dva'
import ProductList from '../components/ProductList.js'

const Products = ({ dispatch, products })=>{
  function handleDelete(id) {
    dispatch({
      type:'products/delete',
      payload: id
    })
  }
  return (
    <div>
      <h2>产品列表</h2>
      <ProductList products={products} onDelete={handleDelete} />
    </div>
    )
}

function mapStateToProps({products}) {
  return { products }
}
export default connect(mapStateToProps)(Products)
