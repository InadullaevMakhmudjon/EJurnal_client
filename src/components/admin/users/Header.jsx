import React from 'react';
import style from 'assets/jss/components/admin/users/header';
import { useHistory, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyle = makeStyles(style);

export default () => {
  const classes = useStyle();
  const role = useSelector(({ user: { user } }) => user.role.name);
  const location = useLocation();
  const history = useHistory();

  const handleClick = () => {
    if (location.pathname.includes('/create')) {
      history.push(`/${role}/users`);
    } else {
      history.push(`${location.pathname}/create`);
    }
  };

  return (
    <Grid container justify="space-between" className={classes.container}>
      <Typography variant="h4" className={classes.title}>All users</Typography>
      <Button variant="contained" color="primary" onClick={handleClick}>
        {
          location.pathname.includes('/create') ? 'All users' : 'Create user'
        }
      </Button>
    </Grid>
  );
};
