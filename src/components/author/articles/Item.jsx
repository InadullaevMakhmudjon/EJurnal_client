import React from 'react';
import Editor from 'assets/img/avatar.png';
import PropTypes from 'prop-types';
import style from 'assets/jss/components/author/articles/item';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(style);

const Item = ({
  status, name, image, title, date,
}) => {
  const classes = useStyle();
  return (
    <Grid container justify="center">
      <Grid item xs={10} className={classes.item}>
        <Typography variant="body1" align="center" className={classes.text}>{name}</Typography>
        <img src={image} alt="" className={classes.customimage} />
        <Typography variant="body1" align="center" className={classes.text}>{title}</Typography>
        <Typography variant="body2" align="center" className={classes.line}>_____________________________________</Typography>
        <Grid container justify="space-between">
          <Typography variant="body2" color="inherit">{date}</Typography>
          <Typography variant="body2" color="primary">
            {
              (() => {
                switch (status) {
                  case 1: return <ThumbUpIcon color="primary" />;
                  case 0: return <>Pending...</>;
                  case -1: return <ThumbDownIcon color="secondary" />;
                  default: return <>Pending...</>;
                }
              })()
            }
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

Item.propTypes = {
  status: PropTypes.number,
  name: PropTypes.string,
  image: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,

};

Item.defaultProps = {
  status: 0,
  name: 'Editor name',
  title: 'Title',
  image: Editor,
  date: '19-02-2020',
};

export default Item;
