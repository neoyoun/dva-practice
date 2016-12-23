import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Menu, Breadcrumb, Icon, Switch } from 'antd'
import styles from './MainPage.module.less'

const SubMenu = Menu.SubMenu
const MenuItemGroup = Menu.ItemGroup
class MainPage extends Component {
  menuClickHandle(item,key){
    let itemNode = ReactDOM.findDOMNode(item.item)
    console.log('click key is ',key)
  }
  subMenuOpen(openkeys){
    console.log(openkeys)
    if(openkeys.length>1){
      openkeys.shift()
    }
    console.log(openkeys)
  }
  render() {
    const { clickHandle, brandList, menu, onThemeChange } = this.props
    return (
        <div className={styles['layout-aside']}>
          <aside className={styles['layout-sider']}>
            <div className={styles['layout-logo']}></div>
            <Switch
              checked={menu.theme === 'dark'}
              onChange={(val)=>{
                let theme = val?'dark':'light'
                onThemeChange(theme)
              }}
              checkedChildren="Dark"
              unCheckedChildren="light" />
            <Menu mode="inline" theme={menu.theme} onOpenChange={this.subMenuOpen} onClick={(item,key)=>this.menuClickHandle(item, item.key)} defaultOpenKeys={['sub4']} defaultSelectedKeys={['1']} >
              {brandList.map( brand =>{
               return (
                <SubMenu key={'sub'+brand.id} title={<span><Icon type='tablet'/>{brand.name}</span>}>
                <MenuItemGroup title="group1">
                  <Menu.Item key={brand.id+'_1'}>选项1</Menu.Item>
                  <Menu.Item key={brand.id+'_2'}>选项2</Menu.Item>
                </MenuItemGroup>
                <MenuItemGroup title="group2">
                  <Menu.Item key={brand.id+'_3'}>选项3</Menu.Item>
                  <Menu.Item key={brand.id+'_4'}>选项4</Menu.Item>
                  <Menu.Item key={brand.id+'_5'}>选项5</Menu.Item>
                </MenuItemGroup>
                </SubMenu>
                )
              })}
            </Menu>
          </aside>
          <div className={styles['layout-main']}>
            <div className={styles['layout-header']}></div>
            <div className={styles['layout-container']}>
              <Menu mode="horizontal">
                {brandList.map((brand, idx)=>{
                  return (<Menu.Item key={'topmenu'+idx}>{brand.name+' topmenu'+idx}</Menu.Item>)
                })}
              </Menu>
              {/*<div className={styles['layout-breadcrumb']}>
                <Breadcrumb>
                  <Breadcrumb.Item>首页</Breadcrumb.Item>
                  <Breadcrumb.Item>产品分类</Breadcrumb.Item>
                  <Breadcrumb.Item>当前分类</Breadcrumb.Item>
                  <Breadcrumb.Item>海格客车</Breadcrumb.Item>
                </Breadcrumb>
              </div>*/}
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
