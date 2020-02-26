import React, { useState, useEffect } from 'react';
import style from 'assets/jss/pages/author/create';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Stepper from 'components/author/create/Stepper';
import { makeStyles } from '@material-ui/core/styles';
import { useLazyQuery } from '@apollo/react-hooks';
import { GET_EDITORS } from 'graphql/author';

const useStyle = makeStyles(style);

export default () => {
  const classes = useStyle();
  const [languageId, setLanguageId] = useState(0);
  const [isValied, setIsValied] = useState(false);
  const [editorId, setEditorId] = useState('');
  const [editorNameId, setEditorNameId] = useState('');
  const [getEditors] = useLazyQuery(GET_EDITORS, {
    variables: { userName: editorId },
    onCompleted: ({ editors }) => setIsValied(!!(editorId && editors.length)),
  });

  useEffect(() => getEditors(), [editorId, getEditors]);

  useEffect(() => setIsValied(!!editorNameId), [editorNameId]);

  const stepperProps = {
    editorId,
    setEditorId,
    editorNameId,
    setEditorNameId,
    isValied,
    setIsValied,
    languageId,
    setLanguageId,
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
