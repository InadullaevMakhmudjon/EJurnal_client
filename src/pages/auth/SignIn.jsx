import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from 'assets/jss/pages/auth/singin';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import HttpsIcon from '@material-ui/icons/Https';
import PersonIcon from '@material-ui/icons/Person';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';

const useStyle = makeStyles(style);

const SignIn = ({ sinIn, loading }) => {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const classes = useStyle();

  return (
    <Grid className={classes.container} container alignItems="center" justify="center">
      <Typography variant="h6" align="center" className={classes.title}>SignIn</Typography>
      {/* <Grid className={classes.header} sm={8} align="center" justify="center" container /> */}
      <Grid item align="center" className={classes.content}>
        <TextField
          className={classes.textField}
          id="input-username-with-icon-textfield"
          label="Username"
          onKeyUp={(e) => { if (e.keyCode === 13) { sinIn(username, password); } }}
          onChange={(e) => setUsername(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          className={classes.textField}
          id="input-password-with-icon-textfield"
          label="Password"
          onKeyUp={(e) => { if (e.keyCode === 13) { sinIn(username, password); } }}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <HttpsIcon />
              </InputAdornment>
            ),
          }}
        />
        <Button onClick={() => sinIn(username, password)} className={classes.Button} variant="contained" size="large" color="primary">
          {
            loading ? <CircularProgress size="1.5rem" color="inherit" /> : 'Sign in'
          }
        </Button>
        <Typography variant="body2" align="center" className={classes.subcontent}>
          Sign up
          {' '}
          <span className={classes.link} onClick={() => { history.push('/Auth/signUp'); }}>here</span>
        </Typography>
      </Grid>
    </Grid>
  );
};

SignIn.propTypes = {
  sinIn: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default SignIn;
