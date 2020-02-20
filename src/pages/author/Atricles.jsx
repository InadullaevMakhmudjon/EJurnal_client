import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import style from 'assets/jss/pages/author/articles';
import Grid from '@material-ui/core/Grid';
import Item from 'components/author/articles/Item';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(style);

export default () => {
  const classes = useStyle();
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" className={classes.title}>All Articles</Typography>
      <Grid container>
        {
          [1, 2, 5, 6, 8].map((item) => (
            <Grid key={item} item xs={3}>
              <Item key={item} />
            </Grid>
          ))
        }
      </Grid>
    </Container>
  );
};
