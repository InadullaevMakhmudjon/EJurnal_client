import React, { useState } from 'react';
import Avatar from 'assets/img/avatar.png';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import style from 'assets/jss/components/admin/users/item';
import { makeStyles } from '@material-ui/core/styles';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import HourglassFullIcon from '@material-ui/icons/HourglassFull';
import Menu from '@material-ui/core/Menu';
import Fade from '@material-ui/core/Fade';
import MenuItem from '@material-ui/core/MenuItem';
import BlockIcon from '@material-ui/icons/Block';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyle = makeStyles(style);

export default () => {
  const classes = useStyle();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid container className={classes.container} onContextMenu={(e) => handleClick(e)}>
      <Grid item xs={12} className={classes.item}>
        <img alt="" src={Avatar} className={classes.image} />
        <Typography variant="body1">User name</Typography>

        <Grid container justify="center">
          <Grid item xs={4} className={classes.status}>
            <ThumbUpIcon />
            <Typography variant="body2">12</Typography>
          </Grid>
          <Grid item xs={4} className={classes.status}>
            <ThumbDownIcon />
            <Typography variant="body2">8</Typography>
          </Grid>
          <Grid item xs={4} className={classes.status}>
            <HourglassFullIcon />
            <Typography variant="body2" color="textPrimary">9</Typography>
          </Grid>
        </Grid>

      </Grid>
      <Menu
        id="fade-menu"
        anchorEl={anchorEl}
        keepMounted
        open={!!anchorEl}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>
          <BlockIcon className={classes.icon} />
          Block
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <DeleteIcon className={classes.icon} />
          Delete
        </MenuItem>
      </Menu>
    </Grid>
  );
};
