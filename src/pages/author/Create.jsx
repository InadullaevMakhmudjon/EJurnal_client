import React, { useState } from 'react';
import style from 'assets/jss/pages/author/create';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Stepper from 'components/author/create/Stepper';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(style);

export default () => {
  const classes = useStyle();
  const [editorId, setEditorId] = useState('');
  const [editorNameId, setEditorNameId] = useState(0);

  const stepperProps = {
    editorId, setEditorId, editorNameId, setEditorNameId,
  };

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" className={classes.title}>Create new article</Typography>
      <Container className={classes.container}>
        <Grid container justify="center" direction="column" className={classes.wraper}>
          <Typography variant="h4" align="center" className={classes.title}>Build Your Journal</Typography>
          <Typography
            variant="body1"
            align="center"
            className={classes.title}
          >
            This information will let us know more about the journal.
          </Typography>
          <Stepper {...stepperProps} />
        </Grid>
      </Container>
    </Container>
  );
};
