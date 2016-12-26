import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'

import styles from './MainPage.module.less'
import Goods from './Goods'
import MenuList from './MenuList'

class MainPage extends Component {
  menuClickHandle(item,key){
    let itemNode = ReactDOM.findDOMNode(item.item)
    console.log('click key is ',key)
  }
  subMenuOpen(openkeys){
    if(openkeys.length>1){
      openkeys.shift()
    }
  }
  render() {
    const { clickHandle, cateList, menu, onThemeChange, goods } = this.props
    return (<div className={styles['layout-aside']}>
          <MenuList styles={styles} cateList={cateList} menu={menu} clickHandle={this.menuClickHandle} subMenuOpen={this.subMenuOpen} />
          <div className={styles['layout-main']}>
            <div className={styles['layout-header']}></div>
            <div className={styles['layout-container']}>
              <div className={styles['layout-content']}>
              <Goods goods={goods}/>
              </div>
            </div>
            <div className={styles['layout-footer']}>
              当前页面使用 Ant design 框架搭建
            </div>
          </div>
        </div>)
  }
}

export default MainPage
