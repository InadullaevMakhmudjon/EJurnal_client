import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import style from 'assets/jss/containers/auth';
import SignIn from 'pages/auth/SignIn';
import Grid from '@material-ui/core/Grid';
import { setUser, login } from 'store/user/user.actions';
import { useMutation } from '@apollo/react-hooks';

import { gql } from 'apollo-boost';

const SIGN_IN = gql`
  mutation SignIn($username: String!, $password: String!) {
    signIn(data: {
      username: $username
      password: $password
    }){
      token,
      user {
        name
        role {
          id
          name
        }
      }
    }
  }
`;

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
      <SignIn
        loading={loading}
        sinIn={(username, password) => singIn({ variables: { username, password } })}
      />
      <div className={classes.background} style={{ background: 'grey' }} />
    </Grid>
  );
};
