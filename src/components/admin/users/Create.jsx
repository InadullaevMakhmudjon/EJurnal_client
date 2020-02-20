import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import style from 'assets/jss/components/admin/users/create';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyle = makeStyles(style);

export default () => {
  const classes = useStyle();

  return (
    <Container maxWidth="xl">
      <Grid container justify="center" className={classes.container}>
        <Grid item xs={6} className={classes.form}>
          <Grid container>
            <div className={classes.iconContainer}>
              <PersonAddIcon className={classes.icon} />
            </div>
            <Typography variant="h6" className={classes.title}>Create editor</Typography>
          </Grid>
          <Grid container direction="column">
            <TextField placeholder="Firstname *" className={classes.textField} />
            <TextField placeholder="SecondName *" className={classes.textField} />
            <TextField placeholder="Username *" className={classes.textField} />
            <TextField placeholder="Password *" className={classes.textField} />
            <Button variant="outlined" className={classes.button}>Create</Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
