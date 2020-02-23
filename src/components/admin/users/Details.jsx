import React from 'react';
import { useParams } from 'react-router-dom';
import Avatar from 'assets/img/avatar.png';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import style from 'assets/jss/components/admin/users/details';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import HourglassFullIcon from '@material-ui/icons/HourglassFull';
import { useQuery } from '@apollo/react-hooks';
import { GET_USER } from 'graphql/admin';
import moment from 'moment';

const useStyle = makeStyles(style);

export default () => {
  const classes = useStyle();
  const { id } = useParams();
  const { data, loading } = useQuery(GET_USER, { variables: { where: { id } } });

  return (loading && !data) ? <>Loading...</> : (
    <Container maxWidth="xl" className={classes.container}>
      <Grid container className={classes.wrapper}>
        <Grid item xs={4} className={classes.firstContainer}>
          <img alt="" src={Avatar} className={classes.image} />
          <Typography className={classes.details} variant="h5">{data.user.firstName}</Typography>
        </Grid>
        <Grid item xs={8} className={classes.secondContainer}>
          <Grid container alignContent="center" className={classes.detailsContainer}>
            <Grid item xs={6} className={classes.contentContainer}>
              <Typography className={classes.details} variant="h5">{`First name: ${data.user.firstName}`}</Typography>
              <Typography className={classes.details} variant="h5">{`Second name: ${data.user.secondName}`}</Typography>
              <Typography className={classes.details} variant="h5">{`Username: ${data.user.userName}`}</Typography>
            </Grid>
            <Grid item xs={6} className={classes.contentContainer}>
              <Typography className={classes.details} variant="h5">{`Role: ${data.user.role.name.toUpperCase()}`}</Typography>
              <Typography className={classes.details} variant="h5">{`Date: ${moment(data.user.createdAt).format('DD-MM-YYY')}`}</Typography>
              <Typography className={classes.details} variant="h5">{`Seen: ${data.user.lastEntered ? moment(data.user.lastEntered).format('DD-MM-YYYY, h:mm') : '-'}`}</Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={4} className={classes.iconContainer}>
              <ThumbUpIcon fontSize="large" />
              <Typography className={classes.details} variant="h5">0 Approved</Typography>
            </Grid>
            <Grid item xs={4} className={classes.iconContainer}>
              <ThumbDownIcon fontSize="large" />
              <Typography className={classes.details} variant="h5">0 Rejected</Typography>
            </Grid>
            <Grid item xs={4} className={classes.iconContainer}>
              <HourglassFullIcon fontSize="large" />
              <Typography className={classes.details} variant="h5">0 Pending</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
