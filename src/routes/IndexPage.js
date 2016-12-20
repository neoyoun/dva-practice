import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
//import styles from './IndexPage.css';
import MenuList from '../components/MenuList'
import MainPage from '../components/MainPage'


const IndexPage = ({dispatch, brands})=>{
  function handleClick() {
    dispatch({
      type:'brands/logger',
      payload: 1
    })
  }
  return (
    <MainPage>
     <MenuList brandList={brands} style={{display:'none'}} />
      <h2 onClick={handleClick} style={{display:'none'}}>Menu list</h2>
    </MainPage>
    )
}
function mapStateToProps({brands}) {
  return {brands}
}
export default connect()(IndexPage);
