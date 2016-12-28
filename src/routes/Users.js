import React from 'react';
import { connect } from 'dva';
import styles from './Users.css';
import UsersComponent from '../components/Users/Users'
import MainLayout from '../components/MainLayout/MainLayout'
function Users({location}) {
  console.log('mailayout.....')
  return (
    <Mainlayout location={location}>
      <div className={styles.normal}>
        <UsersComponent />
      </div>
    </Mainlayout>
  );
}

export default connect()(Users);
