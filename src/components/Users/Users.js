import React from 'react';
import { connect } from 'dva'
import { Link, routerRedux } from 'dva/router'
import { Table, Pagination, Popconfirm } from 'antd'
import styles from './Users.css';
import { PAGE_SIZE } from '../../constant'
import UserEditModal from './UserEditModal'

function Users({ dispatch, list: dataSource, loading, total, page: current,children,}) {
  function deleteHandle(id) {
    dispatch({
      type:'users/remove',
      payload: id
    })
  }
  function editHandler(id,values) {
    dispatch({
      type:'users/patch',
      payload:{id, values}
    })
  }
  function createHandler(values) {
    dispatch({
      type:'users/create',
      payload:{values}
    })
  }
  const columns = [
    {
      title:'Name',
      dataIndex:'name',
      key:'name',
      render: (text, {id})=> <Link to={`/users/${id}/`}>{text}</Link>
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
      render: text=> <a href={'/'+text}>website</a>
    },
    {
      title:'username',
      dataIndex:'username',
    },
    {
      title:'Operation',
      key:'operation',
      render: (text, record)=>(
        <span className={styles.operation}>
          <UserEditModal record={record} onOk={editHandler.bind(null, record.id)}>
             <a>Edit</a>
          </UserEditModal>
          <Popconfirm title="Confirm to delete?" onConfirm={deleteHandle.bind(null, record.id)}>
            <a>Delete</a>
          </Popconfirm>
        </span>
        )
    }
  ]
  function changPageHandle(page) {
    dispatch(routerRedux.push({
      pathname:'/users',
      query: {page}
    }))
  }
  return (
    <div className={styles.normal}>
      <div className={styles.create}>
        <UserEditModal record={{}} onOk={createHandler.bind(null)}>
          <a>create</a>
        </UserEditModal>
      </div>
      <Table
        columns={columns}
        dataSource={dataSource}
        loading={loading}
        rowKey={record=>record.id}
        pagination={false}
        />
      <Pagination
        className="ant-table-pagination"
        total={total}
        current={current}
        pageSize={PAGE_SIZE}
        onChange={changPageHandle}
        />
    </div>
  );
}

function mapStateToProps(state) {
  const {list, total, page} = state.users
  return {
    loading:state.loading.models.users,
    list,
    total,
    page
  }
}
export default connect(mapStateToProps)(Users);
