import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import style from 'assets/jss/pages/auth/signup';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { useDispatch } from 'react-redux';
import { openDialog } from 'store/error/error.actions';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { SIGN_UP } from 'graphql/auth';

const useStyle = makeStyles(style);

export default () => {
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const [repeated, setRepeated] = useState('');
  const history = useHistory();
  const classes = useStyle();
  const [signUp, { loading }] = useMutation(SIGN_UP, {
    onCompleted() {
      history.push('/');
    },
  });

  const handleSubmit = () => {
    if (form.password === repeated) {
      signUp({
        variables: {
          data: {
            firstName: form.firstName,
            secondName: form.secondName,
            userName: form.userName,
            password: form.password,
            role: '002',
          },
        },
      });
    } else {
      dispatch(openDialog('Passwords are not the same'));
    }
  };

  return (
    <Grid container item direction="column" alignContent="center" xs={10} sm={10} md={3} className={classes.container}>
      <Typography variant="h6" align="center" className={classes.title}>SignUp</Typography>
      <TextField className={classes.textField} onChange={(e) => { setForm({ ...form, firstName: e.target.value }); }} variant="standard" placeholder="First name*" />
      <TextField className={classes.textField} onChange={(e) => { setForm({ ...form, secondName: e.target.value }); }} variant="standard" placeholder="Second name*" />
      <TextField className={classes.textField} onChange={(e) => { setForm({ ...form, userName: e.target.value }); }} variant="standard" placeholder="User name*" />
      <TextField className={classes.textField} onChange={(e) => { setForm({ ...form, password: e.target.value }); }} variant="standard" placeholder="Password*" />
      <TextField className={classes.textField} onChange={(e) => { setRepeated(e.target.value); }} variant="standard" placeholder="Repeat password*" />
      <Button className={classes.submit} onClick={handleSubmit} variant="contained" color="primary">
        {
            loading ? <CircularProgress size="1.5rem" color="inherit" /> : 'Sign up'
        }
      </Button>
      <Typography variant="body2" align="center" className={classes.subcontent}>
        Sign in
        {' '}
        <span className={classes.link} onClick={() => history.push('/Auth')}>here</span>
      </Typography>
    </Grid>
  );
};
