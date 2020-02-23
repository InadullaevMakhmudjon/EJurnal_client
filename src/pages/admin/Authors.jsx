import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Table from 'components/admin/authors/Table';
import Typography from '@material-ui/core/Typography';
import style from 'assets/jss/pages/admin/authors';
import { makeStyles } from '@material-ui/core/styles';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GET_USERS, BLOCK_USER, DELETE_USER } from 'graphql/admin';
import PersonAddIcon from '@material-ui/icons/PersonAdd';


const useStyle = makeStyles(style);

export default () => {
  const classes = useStyle();
  const { data, loading, refetch } = useQuery(GET_USERS, { variables: { roleId: '002' } });
  const [blockUser] = useMutation(BLOCK_USER, {
    onCompleted() {
      refetch();
    },
  });
  const [deleteUser] = useMutation(DELETE_USER, {
    onCompleted() {
      refetch();
    },
  });

  if (loading) return <>Loading...</>;

  return (
    <Container maxWidth="xl">
      <Grid container>
        <Typography variant="h4" className={classes.title}>All Authors</Typography>
        <Grid item xs={12} className={classes.content}>
          <Grid container className={classes.image}>
            <div className={classes.iconContainer}>
              <PersonAddIcon className={classes.icon} />
            </div>
            <Typography variant="h5" className={classes.tableTitle}>All authors</Typography>
          </Grid>
          <Table deleteAuthor={deleteUser} blockAuthor={blockUser} authors={data.users} />
        </Grid>
      </Grid>
    </Container>
  );
};
