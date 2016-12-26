import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Row, Col } from 'antd'
import styles from './IndexPage.less';
import MenuList from '../components/MenuList'
import GoodList from '../components/GoodList'


const IndexPage = ({dispatch, cates, menu, goods})=>{
  function setCateHandle(cateid) {
    console.log('sunmenu >>',cateid)
    dispatch({
      type:'goods/setCateId',
      payload: cateid
    })
  }
  function goodsDelete(id) {
    console.log('delete>> ',id)
  }

  function themeChangeHandle(theme) {
    dispatch({
      type:'menu/changeTheme',
      text:theme
    })
  }
  function subMenuOpen(openkeys){
    if(openkeys.length>1){
      openkeys.shift()
    }
  }
  return (
    <div className={styles['layout-aside']}>
      <MenuList cateList={cates} menu={menu} styles={styles} onThemeChange={themeChangeHandle}  subMenuOpen={subMenuOpen} setCateHandle={setCateHandle}/>
      <div className={styles['layout-main']}>
          <div className={styles['layout-header']}>

          </div>
          <div className={styles['layout-container']}>
            <div className={styles['layout-content']}>
            <GoodList goods={goods.list} onDelete={goodsDelete}/>
            </div>
          </div>
          <div className={styles['layout-footer']}>
            当前页面使用 Ant design 框架搭建
          </div>
        </div>
    </div>
    )
}

function mapStateToProps({cates, menu, goods}) {
  return {cates, menu, goods}
}
/*function mapStateToProps({menu}) {
  return {menu}
}*/
export default connect(mapStateToProps)(IndexPage);
