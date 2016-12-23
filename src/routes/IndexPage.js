import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
//import styles from './IndexPage.css';
import MenuList from '../components/MenuList'
import MainPage from '../components/MainPage'


const IndexPage = ({dispatch, brands, menu})=>{
  function handleClick() {
    dispatch({
      type:'brands/logger',
      payload: 1
    })
  }
  function themeChangeHandle(theme) {
    console.log('indexpage theme change to ',theme)
    console.log(menu)
    dispatch({
      type:'menu/changeTheme',
      text:theme
    })
  }
  return (
    <MainPage brandList={brands} menu={menu} clickHandle={handleClick} onThemeChange={themeChangeHandle}/>
    )
}
function mapStateToProps({brands,menu}) {
  return {brands,menu}
}
/*function mapStateToProps({menu}) {
  return {menu}
}*/
export default connect(mapStateToProps)(IndexPage);
