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
import Grid from '@material-ui/core/Grid';

const Categories = () => {
  return (
    <section className="container-md categories-page ">
      <Grid container spacing={2} justify="center">
        <Grid item xs={3} className="categories-icons">
          <VideoCall fontSize="large" />
          <p className="small">Art, media & Entertainment</p>
        </Grid>

        <Grid item xs={3} className="categories-icons">
          <LocalDining fontSize="large" />
          <p className="small">Food and Category</p>
        </Grid>

        <Grid item xs={3} className="categories-icons">
          <Hotel fontSize="large" />
          <p className="small">Hotel & Hospitality</p>
        </Grid>

        <Grid item xs={3} className="categories-icons">
          <MonetizationOn fontSize="large" />
          <p className="small">Financial Services</p>
        </Grid>
        <Grid item xs={3} className="categories-icons">
          <LocalHospital fontSize="large" />
          <p className="small">Health</p>
        </Grid>

        <Grid item xs={3} className="categories-icons">
          <SportsSoccer fontSize="large" />
          <p className="small">Sports & Leisure</p>
        </Grid>

        <Grid item xs={3} className="categories-icons">
          <LocalBar fontSize="large" />
          <p className="small">Night Life</p>
        </Grid>

        <Grid item xs={3} className="categories-icons">
          <MoreHoriz fontSize="large" />
          <p className="small">More</p>
        </Grid>
      </Grid>
    </section>
  );
};

export default Categories;
