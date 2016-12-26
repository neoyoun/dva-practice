import React,{ Component, PropTypes } from 'react'
import { Menu, Breadcrumb, Icon, Switch } from 'antd'

const SubMenu = Menu.SubMenu
class MenuList extends Component {
  render(){
    const { styles, cateList, onThemeChange, menu, setCateHandle } = this.props
    return (
      <aside className={styles['layout-sider']}>
        <div className={styles['layout-logo']}>玉柴商品分类</div>
        <Switch
          checked={menu.theme === 'dark'}
          onChange={(val)=>{
            let theme = val?'dark':'light'
            onThemeChange(theme)
          }}
          checkedChildren="Dark"
          unCheckedChildren="light" />
        <Menu mode="vertical" theme={menu.theme} onClick={item=>setCateHandle(item.key)} >
          {cateList.list.map( cate=>{
           return (
            <SubMenu onTitleClick={()=>setCateHandle()} key={cate.id} title={<span><Icon type='tablet'/>{cate.name}</span>}>
              {
                cate.subCates.map(subCate=>{
                 return <Menu.Item key={subCate.id}>{subCate.name}</Menu.Item>
                })
              }
            </SubMenu>
            )
          })}
        </Menu>
      </aside>
      )
  }
}
/*MenuList.propTypes = {
  brandData: PropTypes.array.isRequired
}*/
export default MenuList
