import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Switch, Route, useRouteMatch,
} from 'react-router-dom';
import { useQuery } from '@apollo/react-hooks';
import style from 'assets/jss/pages/admin/users';
import Container from '@material-ui/core/Container';
import Header from 'components/admin/users/Header';
import Grid from '@material-ui/core/Grid';
import Item from 'components/admin/users/Item';
import Create from 'components/admin/users/Create';
import Details from 'components/admin/users/Details';
import { GET_USERS } from 'graphql/admin';

const useStyle = makeStyles(style);

export default () => {
  // eslint-disable-next-line no-unused-vars
  const classes = useStyle();
  const match = useRouteMatch();
  const { data, loading, refetch } = useQuery(GET_USERS, { variables: { roleId: '003' } });

  const Users = loading ? <>Loading...</> : (
    <Grid container>
      {
        data ? data.users.map((user) => (
          <Grid key={user.userName} item lg={3} md={4}>
            <Item user={user} refetch={refetch} />
          </Grid>
        )) : <>HH</>
      }
    </Grid>
  );

  return (
    <Container maxWidth="xl">
      <Header showBack={!match.isExact} />
      <Switch>
        <Route exact path={`${match.url}/`} render={() => { refetch(); return Users; }} />
        <Route path={`${match.url}/create`} component={Create} />
        <Route path={`${match.url}/:id`} component={Details} />
      </Switch>

    </Container>
  );
};
