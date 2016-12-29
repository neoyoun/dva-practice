import React from 'react';
import { connect } from 'dva';
import styles from './Users.css';

function UserDetail({ location }) {
  return (
    <div>
       <h2>user detail component</h2>
       <h3>{location.pathname}</h3>
    </div>
    );
}

export default connect()(UserDetail);
