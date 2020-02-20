import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import style from 'assets/jss/pages/admin/users';
import Container from '@material-ui/core/Container';
import Header from 'components/admin/users/Header';
import Grid from '@material-ui/core/Grid';
import Item from 'components/admin/users/Item';
import Create from 'components/admin/users/Create';

const useStyle = makeStyles(style);

export default () => {
  // eslint-disable-next-line no-unused-vars
  const classes = useStyle();
  const match = useRouteMatch();

  const Users = (
    <Grid container>
      {
              [1, 2, 3, 5, 6].map((item) => (
                <Grid key={item} item lg={3} md={4}>
                  <Item />
                </Grid>
              ))
      }
    </Grid>
  );

  return (
    <Container maxWidth="xl">
      <Header />
      <Switch>
        <Route exact path={`${match.url}/`} render={() => Users} />
        <Route path={`${match.url}/create`} component={Create} />
      </Switch>

    </Container>
  );
};
