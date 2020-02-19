import React from 'react';
import SortByAlphaIcon from '@material-ui/icons/SortByAlpha';
import PropTypes from 'prop-types';
import Avatar from 'assets/img/avatar.png';
import style from 'assets/jss/components/Step1';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import FaceIcon from '@material-ui/icons/Face';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';

const userStyle = makeStyles(style);

const StepOne = ({
  image, editors, editorId, editorNameId, setEditorId, setEditorNameId,
}) => {
  const classes = userStyle();

  return (
    <Grid container justify="center">
      <Grid item md={10}>
        <Typography variant="body1" align="center" className={classes.regular}>Let's start with the basic information (with validation)</Typography>
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
                <TextField value={editorId} fullWidth disabled={editorNameId !== 0} onChange={(e) => setEditorId(e.target.value)} variant="outlined" id="input-with-icon-grid" label="Editor ID" />
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
                        editors.map(({ id, name }) => (
                          <MenuItem key={id} value={id}>{name}</MenuItem>
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
  editorId: PropTypes.number.isRequired,
  editorNameId: PropTypes.number.isRequired,
  setEditorId: PropTypes.func.isRequired,
  setEditorNameId: PropTypes.func.isRequired,
  editors: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })),
};

StepOne.defaultProps = {
  editors: [],
  image: '',
};

export default StepOne;
