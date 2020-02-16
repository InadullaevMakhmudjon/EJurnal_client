import React from 'react';
import style from 'assets/jss/components/navbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import routes from 'router.sidebar';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(style);

export default () => {
  const classes = useStyle();
  const activeRoute = (routeName) => window.location.href.indexOf(routeName) > -1;
  const route = routes.find(({ path }) => activeRoute(path));

  return (
    <AppBar className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" color="textSecondary" className={classes.title}>{ route ? route.name : '-' }</Typography>
      </Toolbar>
    </AppBar>
  );
};
