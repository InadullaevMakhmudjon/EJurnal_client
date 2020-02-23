import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import style from 'assets/jss/containers/auth';
import { Switch, Route } from 'react-router-dom';
import SignIn from 'pages/auth/SignIn';
import SignUp from 'pages/auth/SignUp';
import Grid from '@material-ui/core/Grid';
import { setUser, login } from 'store/user/user.actions';
import { useMutation } from '@apollo/react-hooks';

import { SIGN_IN } from 'graphql/auth';

const useStyle = makeStyles(style);

export default () => {
  const dispatch = useDispatch();

  const [singIn, { loading }] = useMutation(SIGN_IN, {
    onCompleted: (data) => {
      if (data.signIn) {
        const { token, user } = data.signIn;
        dispatch(login(token));
        dispatch(setUser(user));
      }
    },
  });

  const classes = useStyle();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.container}
    >
      <Switch>
        <Route
          exact
          path="/Auth"
          render={() => (
            <SignIn
              loading={loading}
              sinIn={(userName, password) => singIn({ variables: { userName, password } })}
            />
          )}
        />
        <Route
          path="/Auth/signUp"
          component={SignUp}
        />
      </Switch>
      <div className={classes.background} style={{ background: 'grey' }} />
    </Grid>
  );
};

/*
      <SignIn
        loading={loading}
        sinIn={(userName, password) => singIn({ variables: { userName, password } })}
      />
*/
