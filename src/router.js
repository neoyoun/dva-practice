import React from 'react';
import { Router, Route, IndexRoute } from 'dva/router';
import IndexPage from './routes/IndexPage';

import Users from "./routes/Users";
import UserDetail from "./routes/UserDetail";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Route path="/" component={IndexPage} />
      <Route path="/users" component={Users}>
        <Route path=":id" component={UserDetail} />
      </Route>
    </Router>
  );
}

export default RouterConfig;
