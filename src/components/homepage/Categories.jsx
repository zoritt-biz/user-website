import React from 'react';
import {
  VideoCall,
  LocalDining,
  Hotel,
  MonetizationOn,
  LocalHospital,
  SportsSoccer,
  LocalBar,
  MoreHoriz,
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
  section: {
    marginTop: '70px',
  },
  icons: {
    textAlign: 'center',
  },
}));

const Categories = () => {
  const classes = useStyles();
  return (
    <section className={`container-md categories-page ${classes.section}`}>
      <Grid container spacing={2} justify="center">
        <Grid item xs={3} className={classes.icons}>
          <VideoCall fontSize="large" />
          <p className="small">Art, media & Entertainment</p>
        </Grid>

        <Grid item xs={3} className={classes.icons}>
          <LocalDining fontSize="large" />
          <p className="small">Food and Category</p>
        </Grid>

        <Grid item xs={3} className={classes.icons}>
          <Hotel fontSize="large" />
          <p className="small">Hotel & Hospitality</p>
        </Grid>

        <Grid item xs={3} className={classes.icons}>
          <MonetizationOn fontSize="large" />
          <p className="small">Financial Services</p>
        </Grid>
        <Grid item xs={3} className={classes.icons}>
          <LocalHospital fontSize="large" />
          <p className="small">Health</p>
        </Grid>

        <Grid item xs={3} className={classes.icons}>
          <SportsSoccer fontSize="large" />
          <p className="small">Sports & Leisure</p>
        </Grid>

        <Grid item xs={3} className={classes.icons}>
          <LocalBar fontSize="large" />
          <p className="small">Night Life</p>
        </Grid>

        <Grid item xs={3} className={classes.icons}>
          <MoreHoriz fontSize="large" />
          <p className="small">More</p>
        </Grid>
      </Grid>
    </section>
  );
};

export default Categories;
