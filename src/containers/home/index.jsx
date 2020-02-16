import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Switch, Route, Redirect } from 'react-router-dom';
import routes from 'router.sidebar';
import Navbar from 'components/Navbar/Navbar';
import SideBar from 'components/Sidebar/Sidebar';
import style from 'assets/jss/containers/home';
import bgImage from 'assets/img/sidebar-2.jpg';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(style);

export default () => {
  const role = useSelector(({ user: { user: userState } }) => (userState ? userState.role : {}));
  const classes = useStyles();
  const [image] = useState(bgImage);

  const switchROutes = (
    <Switch>
      {
        routes.map((route, key) => (
          <Route path={`/${role.name}${route.path}`} component={route.component} key={key} />
        ))
      }
      <Redirect from={`/${role.name}`} to={`/${role.name}/dashboard`} />
    </Switch>
  );

  return (
    <div className={classes.wrapper}>
      <SideBar image={image} routes={routes} />
      <div className={classes.mainPanel}>
        <Navbar />
        <div className={classes.content}>
          <div className={classes.container}>{switchROutes}</div>
        </div>
      </div>
    </div>
  );
};
