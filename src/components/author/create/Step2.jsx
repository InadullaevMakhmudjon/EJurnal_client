import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import style from 'assets/jss/components/author/create/step2';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(style);

const Step2 = ({ languageId, setLanguageId }) => {
  const classes = useStyle();
  const languages = [
    {
      id: 0,
      name: 'English',
    },
    {
      id: 1,
      name: 'Русский',
    },
    {
      id: 2,
      name: "O'zbekcha",
    },
  ];
  const titles = [
    {
      id: 0,
      name: 'English language',
    },
    {
      id: 1,
      name: 'Русский язык',
    },
    {
      id: 2,
      name: "O'zbek tili",
    },
  ];
  return (
    <Grid container justify="center" alignItems="center" alignContent="center" direction="column">
      <Typography variant="body1">Select a language of the article</Typography>
      <Grid container justify="center" alignItems="center" className={classes.container}>
        <Grid item xs={3}>
          <Typography variant="h5" className={classes.title}>{titles.find(({ id }) => id === languageId).name}</Typography>
        </Grid>
        <Grid item xs={3}>
          <Select fullWidth value={languageId} onChange={(e) => setLanguageId(e.target.value)} labelId="input-width-with-editor">
            {
              languages.map(({ id, name }) => (
                <MenuItem key={name} value={id}>{name}</MenuItem>
              ))
            }
          </Select>
        </Grid>
      </Grid>
    </Grid>
  );
};

Step2.propTypes = {
  languageId: PropTypes.number.isRequired,
  setLanguageId: PropTypes.func.isRequired,
};

export default Step2;
