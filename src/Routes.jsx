import React from 'react';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router, Route, Switch, Redirect,
} from 'react-router-dom';
import Home from './containers/home';
import Auth from './containers/auth';

export default () => {
  const user = useSelector(({ user: { user: userState } }) => userState);
  return (
    <div>
      <Router>
        {
          user ? (
            <Switch>
              <Route path={`/${user.role.name}`} component={Home} />
              <Redirect from="/" to={`/${user.role.name}`} />
            </Switch>
          )
            : (
              <Switch>
                <Route path="/Auth" component={Auth} />
                <Redirect from="/" to="/Auth" />
              </Switch>
            )
        }
      </Router>
    </div>
  );
};
