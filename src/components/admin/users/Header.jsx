import React from 'react';
import PropTypes from 'prop-types';
import style from 'assets/jss/components/admin/users/header';
import { useHistory, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const useStyle = makeStyles(style);

const Header = ({ showBack }) => {
  const classes = useStyle();
  const location = useLocation();
  const history = useHistory();

  const handleClick = () => {
    if (showBack) {
      history.goBack();
    } else {
      history.push(`${location.pathname}/create`);
    }
  };

  return (
    <Grid container justify="space-between" alignItems="center" className={classes.container}>
      <Typography variant="h4" className={classes.title}>
        {
          showBack ? '' : 'All users'
        }
      </Typography>
      <Button className={classes.submit} variant="contained" color="primary" onClick={handleClick}>
        {
          showBack ? 'All users' : 'Create User'
        }
      </Button>
    </Grid>
  );
};

Header.propTypes = {
  showBack: PropTypes.bool.isRequired,
};

export default Header;
