import React from 'react'
import { connect, dispatch } from 'dva'
import ProductList from '../components/ProductList'

const Products = ({ dispatch, products})=>{
  return(
      <div>
        <h2>List of Products</h2>
        <ProductList onDelete={deleteHandle} products={products}/>
      </div>
    )
  function deleteHandle(id) {
    dispatch({
      type: 'products/delete',
      payload: id
    })
  }
}

export default connect(({ products })=>({
  products,
}))(Products)
