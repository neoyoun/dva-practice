import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
//import styles from './IndexPage.css';
import MenuList from '../components/MenuList.js'


const IndexPage = ({dispatch, brands})=>{
  function handleClick() {
    dispatch({
      type:'brands/logger',
      payload: 1
    })
  }
  return (
    <div>
      <MenuList brandList={brands}/>
      <h2 onClick={handleClick}>Menu list</h2>
    </div>
    )
}
function mapStateToProps({brands}) {
  return {brands}
}
export default connect(mapStateToProps)(IndexPage);
