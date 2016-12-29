import React,{ Component, PropTypes } from 'react';
import styles from './UserEditModal.css';
import { Modal, Form, Input } from 'antd'

const FormItem = Form.Item
class UserEditModal extends Component {
  constructor(props){
    super(props);
    this.state = {
      visible: false,
    }
  }
  showModalHandle = (e) =>{
    console.log(this.state)
    if(e) e.stopPropagation()

      this.setState({
        visible: true
      })
  }
  hideModalHandle = () =>{
      this.setState({
        visible: false
      })
  }
  handleOk = () =>{
    console.log('ok....')
    this.hideModalHandle()
  }
  handleCancel = () =>{
    console.log('cancel....')
    this.hideModalHandle()
  }
  render(){
    const { children } = this.props
    const { name, email, website, username } = this.props.record
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: { span: 4},
      wrapperCol : { span: 8}
    }
    return (
      <span>
        <span onClick={this.showModalHandle}>
          {children}
        </span>
        <Modal title={`Edit User:${username}`} visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>
          <Form onSubmit={this.handleOk}>
            <FormItem
              label='name'
              {...formItemLayout}
            >
            {
              getFieldDecorator('name', {
                initialValue:name,
              })(<Input />)
            }
            </FormItem>
            <FormItem
              label='email'
              {...formItemLayout}
            >
            {
              getFieldDecorator('email', {
                initialValue:email,
              })(<Input />)
            }
            </FormItem>
            <FormItem
              label='website'
              {...formItemLayout}
            >
            {
              getFieldDecorator('website', {
                initialValue:website,
              })(<Input />)
            }
            </FormItem>
            <FormItem
              label='username'
              {...formItemLayout}
            >
            {
              getFieldDecorator('username', {
                initialValue:username,
              })(<Input />)
            }
            </FormItem>
          </Form>
        </Modal>
      </span>
      )
  }
}

export default Form.create()(UserEditModal)
