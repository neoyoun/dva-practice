import React, { Component, PropTypes } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Menu, Icon } from 'antd'
import styles from './IndexPage.css';

class App extends Component {
  constructor(props){
    suer(props)
  }
  render(){
    return(
      <Menu onClick={this.handleClick} selectBrand={this.state.currentBrand}>

      </Menu>
      )
  }
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
