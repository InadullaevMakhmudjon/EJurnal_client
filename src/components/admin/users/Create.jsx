import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import style from 'assets/jss/components/admin/users/create';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useMutation } from '@apollo/react-hooks';
import { CREATE_USER } from 'graphql/admin';
import { useDispatch } from 'react-redux';
import { openDialog } from 'store/error/error.actions';

const useStyle = makeStyles(style);

export default () => {
  const dispatch = useDispatch();
  const classes = useStyle();
  const [repeatedPW, setRepeatedPW] = useState('');
  const [form, setForm] = useState({});
  const history = useHistory();

  const [submit] = useMutation(CREATE_USER, {
    onCompleted() {
      history.goBack();
    },
  });

  const handleSubmit = () => {
    if (repeatedPW === form.password) {
      submit({ variables: { data: { ...form, role: '003' } } });
    } else {
      dispatch(openDialog('Passwords are not the same'));
    }
  };

  return (
    <Container maxWidth="xl">
      <Grid container justify="center" className={classes.container}>
        <Grid item xs={6} className={classes.form}>
          <Grid container>
            <div className={classes.iconContainer}>
              <PersonAddIcon className={classes.icon} />
            </div>
            <Typography variant="h6" className={classes.title}>Create editor</Typography>
          </Grid>
          <Grid container direction="column">
            <TextField onChange={(e) => setForm({ ...form, firstName: e.target.value })} placeholder="First name *" className={classes.textField} />
            <TextField onChange={(e) => setForm({ ...form, secondName: e.target.value })} placeholder="Second name *" className={classes.textField} />
            <TextField onChange={(e) => setForm({ ...form, userName: e.target.value })} placeholder="Username *" className={classes.textField} />
            <TextField onChange={(e) => setForm({ ...form, password: e.target.value })} placeholder="Password *" type="password" className={classes.textField} />
            <TextField onChange={(e) => setRepeatedPW(e.target.value)} placeholder="Password *" type="password" className={classes.textField} />
            <Button onClick={handleSubmit} variant="outlined" className={classes.button}>Create</Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
