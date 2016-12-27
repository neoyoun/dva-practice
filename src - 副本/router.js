import React, { PropTypes } from 'react';
import { Router, Route, IndexRoute, Link } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Good from './routes/Good';

export default function({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={ IndexPage } />
      <Route path="/goodList/:code" component={ Good } />
    </Router>
  );
};
