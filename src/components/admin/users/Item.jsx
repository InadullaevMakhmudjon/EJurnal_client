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
import PropTypes from 'prop-types';
import Fade from '@material-ui/core/Fade';
import MenuItem from '@material-ui/core/MenuItem';
import BlockIcon from '@material-ui/icons/Block';
import { useLocation, useHistory } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';
import { DELETE_USER, BLOCK_USER } from 'graphql/admin';
import { useMutation } from '@apollo/react-hooks';

const useStyle = makeStyles(style);

const Item = ({ user, refetch }) => {
  const onCompleted = () => { refetch(); };
  const history = useHistory();
  const location = useLocation();
  const classes = useStyle();
  const [anchorEl, setAnchorEl] = useState(null);
  const [blockUser] = useMutation(BLOCK_USER, { onCompleted });
  const [deleteUser] = useMutation(DELETE_USER, { onCompleted });

  const handleClick = (event) => {
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid container className={classes.container} onClick={() => { if (!anchorEl) history.push(`${location.pathname}/${user.id}`); }} onContextMenu={(e) => handleClick(e)}>
      <Grid item xs={12} className={classes.item}>
        <img alt="" src={Avatar} className={classes.image} />
        <Typography variant="body1">{user.firstName}</Typography>

        <Grid container justify="center">
          <Grid item xs={4} className={classes.status}>
            <ThumbUpIcon />
            <Typography variant="body2">0</Typography>
          </Grid>
          <Grid item xs={4} className={classes.status}>
            <ThumbDownIcon />
            <Typography variant="body2">0</Typography>
          </Grid>
          <Grid item xs={4} className={classes.status}>
            <HourglassFullIcon />
            <Typography variant="body2" color="textPrimary">0</Typography>
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
        <MenuItem
          onClick={(e) => {
            blockUser({ variables: { id: user.id, blocked: !user.blocked } });
            handleClose();
          }}
        >
          {
            user.blocked ? (
              <>
                <CheckCircleOutlineOutlinedIcon className={classes.icon} />
                Unblock
              </>
            ) : (
              <>
                <BlockIcon className={classes.icon} />
                Block
              </>
            )
          }
        </MenuItem>
        <MenuItem
          onClick={(e) => {
            deleteUser({ variables: { where: { id: user.id } } });
            handleClose();
          }}
        >
          <DeleteIcon className={classes.icon} />
          Delete
        </MenuItem>
      </Menu>
    </Grid>
  );
};

Item.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    secondName: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    blocked: PropTypes.bool.isRequired,
  }).isRequired,
  refetch: PropTypes.func.isRequired,
};

export default Item;
/*
onMouseDown={(e) => { if (e.button === 0) history.push(`${location.pathname}/${user.id}`); }}
-*/
