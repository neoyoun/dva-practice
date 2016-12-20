import React,{ Component, PropTypes } from 'react'
import { Menu, Button } from 'antd'

class MenuList extends Component {
  render(){
    const { clickHandle, brandList } = this.props
    return (
      <Menu mode="horizontal"
          defaultSelectKeys={['2']}
          style={{lineHeight: '64px'}}>
          {brandList.map(brand=>{
            return <Menu.Item key={brand.id} onSelect={()=>clickHandle(brand.id)} >{brand.name}</Menu.Item>
          })}
          <Menu.Item><a href="/#/products">产品列表</a></Menu.Item>
      </Menu>
      )
  }
}
/*MenuList.propTypes = {
  brandData: PropTypes.array.isRequired
}*/
export default MenuList
