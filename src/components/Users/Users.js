import React from 'react';
import { connect } from 'dva'
import { Table, Pagination, Popconfirm } from 'antd'
import styles from './Users.css';
import { PAGE_SIZE } from '../../constant'

function Users({ list: dataSource, total, page: current }) {
  function deleteHandle(id) {
    console.warn(`TODO:${id}`)
  }
  const columns = [
    {
      title:'Name',
      dataIndex:'name',
      key:'name',
      render: text=> <a href="">{text}</a>
    },
    {
      title:'Email',
      dataIndex:'email',
      key:'email'
    },
    {
      title:'website',
      dataIndex:'website',
      key:'website',
      render: text=> <a href={text}>website</a>
    },
    {
      title:'username',
      dataIndex:'username',
    },
    {
      title:'Operation',
      key:'operation',
      render: (text, {id})=>(
        <span className={styles.operation}>
          <a href="">Edit</a>
          <Popconfirm title="Confirm to delete?" onConfirm={deleteHandle.bind(null, id)}>
            <a href="">Delete</a>
          </Popconfirm>
        </span>
        )
    }
  ]
  return (
    <div className={styles.normal}>
      <Table
        columns={columns}
        dataSource={dataSource}
        rowKey={record=>record.id}
        pagination={false}
        />
      <Pagination
        className="ant-table-pagination"
        total={total}
        current={current}
        pageSize={PAGE_SIZE}
        />
    </div>
  );
}

function mapStateToProps(state) {
  console.log(state.users)
  const {list, total} = state.users
  return {
    list,
    total,
    current:1
  }
}
export default connect(mapStateToProps)(Users);
