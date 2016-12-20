import React, { Component, PropTypes } from 'react'
import { Menu, Breadcrumb, Icon } from 'antd'
import styles from './MainPage.module.less'

const SubMenu = Menu.SubMenu
class MainPage extends Component {
  render() {
    return (
        <div className={styles['layout-aside']}>
          <aside className={styles['layout-sider']}>
            <div className={styles['layout-logo']}></div>
            <Menu mode="inline" defaultOpenKeys={['sub4']} defaultSelectedKeys={['1']} >
              <SubMenu key='sub1' title={<span><Icon type='user' />导航一</span>}>
                <Menu.Item key='1'>选项1</Menu.Item>
                <Menu.Item key='2'>选项2</Menu.Item>
                <Menu.Item key='3'>选项3</Menu.Item>
                <Menu.Item key='4'>选项4</Menu.Item>
                <Menu.Item key='5'>选项5</Menu.Item>
              </SubMenu>
              <SubMenu key='sub2' title={<span><Icon type='laptop' />导航二</span>}>
                <Menu.Item key='6'>选项1</Menu.Item>
                <Menu.Item key='7'>选项2</Menu.Item>
                <Menu.Item key='8'>选项3</Menu.Item>
                <Menu.Item key='9'>选项4</Menu.Item>
                <Menu.Item key='10'>选项5</Menu.Item>
              </SubMenu>
              <SubMenu key='sub3' title={<span><Icon type='user' />导航三</span>}>
                <Menu.Item key='11'>选项1</Menu.Item>
                <Menu.Item key='12'>选项2</Menu.Item>
                <Menu.Item key='13'>选项3</Menu.Item>
                <Menu.Item key='14'>选项4</Menu.Item>
                <Menu.Item key='15'>选项5</Menu.Item>
              </SubMenu>
              <SubMenu key='sub4' title={<span><Icon type='user' />导航四</span>}>
                <Menu.Item key='1'>选项1</Menu.Item>
                <Menu.Item key='2'>选项2</Menu.Item>
                <Menu.Item key='3'>选项3</Menu.Item>
                <Menu.Item key='4'>选项4</Menu.Item>
                <Menu.Item key='5'>选项5</Menu.Item>
              </SubMenu>
            </Menu>
          </aside>
          <div className={styles['layout-main']}>
            <div className={styles['layout-header']}></div>
            <div className={styles['layout-container']}>
              <div className={styles['layout-breadcrumb']}>
                <Breadcrumb>
                  <Breadcrumb.Item>首页</Breadcrumb.Item>
                  <Breadcrumb.Item>产品分类</Breadcrumb.Item>
                  <Breadcrumb.Item>当前分类</Breadcrumb.Item>
                  <Breadcrumb.Item>海格客车</Breadcrumb.Item>
                </Breadcrumb>
              </div>
              <div className={styles['layout-content']}>

              </div>
            </div>
            <div className={styles['layout-footer']}>
              当前页面使用 Ant design 框架搭建
            </div>
          </div>
        </div>
      )
  }
}

export default MainPage
