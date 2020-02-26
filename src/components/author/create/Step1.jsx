import React from 'react';
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import PropTypes from 'prop-types';
import Avatar from 'assets/img/avatar.png';
import style from 'assets/jss/components/author/create/step1';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import FaceIcon from '@material-ui/icons/Face';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { GET_EDITORS } from 'graphql/author';
import { useQuery } from '@apollo/react-hooks';

const userStyle = makeStyles(style);

const StepOne = ({
  image, editorId, editorNameId, setEditorId, setEditorNameId,
}) => {
  const classes = userStyle();

  const { data, loading } = useQuery(GET_EDITORS);

  if (loading && !data) return <>Loading...</>;


  return (
    <Grid container justify="center">
      <Grid item md={10}>
        <Typography variant="body1" align="center" className={classes.regular}>Let's start with the basic information (with editors)</Typography>
      </Grid>
      <Grid container justify="center" className={classes.margin}>
        <Grid item md={3} className={classes.gridItem}>
          <img alt="" className={classes.image} src={image || Avatar} />
        </Grid>
        <Grid item md={4} className={classes.gridItem}>
          <Grid container direction="column">
            <Grid container alignItems="center">
              <Grid item sm={1}>
                <FaceIcon />
              </Grid>
              <Grid item sm={11} className={classes.padding}>
                <TextField value={editorId} fullWidth disabled={editorNameId !== ''} onChange={(e) => setEditorId(e.target.value)} variant="outlined" id="input-with-icon-grid" label="Editor username" />
              </Grid>
            </Grid>
            <Grid container justify="center" alignItems="center" className={classes.orCondition}>
              <Typography variant="body1" className={classes.regular}>OR</Typography>
            </Grid>
            <Grid container alignItems="center">
              <Grid item sm={1}>
                <SortByAlphaIcon />
              </Grid>
              <Grid item xs={11} className={classes.padding}>
                <FormControl disabled={editorId !== ''} variant="outlined" style={{ minWidth: '100%' }}>
                  <InputLabel id="input-width-with-editor">Select an Editor</InputLabel>
                  <Select value={editorNameId} onChange={(e) => setEditorNameId(e.target.value)} labelId="input-width-with-editor">
                    {
                        data.editors.map(({
                          userName, firstName, secondName,
                        }) => (
                          <MenuItem key={userName} value={userName}>{`${firstName} ${secondName}`}</MenuItem>
                        ))
                    }
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

      </Grid>
    </Grid>
  );
};

StepOne.propTypes = {
  image: PropTypes.string,
  editorId: PropTypes.string.isRequired,
  editorNameId: PropTypes.string.isRequired,
  setEditorId: PropTypes.func.isRequired,
  setEditorNameId: PropTypes.func.isRequired,
};

StepOne.defaultProps = {
  image: '',
};

export default StepOne;
