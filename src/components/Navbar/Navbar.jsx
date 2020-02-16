import React from 'react';
import style from 'assets/jss/components/navbar';
import Typography from '@material-ui/core/Typography';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(style);

export default () => {
  const classes = useStyle();

  return (
    <AppBar className={classes.appbar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h4" color="textSecondary">HEllo</Typography>
      </Toolbar>
    </AppBar>
  );
};
