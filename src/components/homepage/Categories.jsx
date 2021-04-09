import React from 'react';
import {
  VideoCallOutlined,
  LocalDiningOutlined,
  HotelOutlined,
  MonetizationOnOutlined,
  LocalHospitalOutlined,
  SportsSoccerOutlined,
  LocalBarOutlined,
  MoreHoriz,
} from '@material-ui/icons';
import Grid from '@material-ui/core/Grid';

const Categories = () => {
  return (
    <section className="container-md categories-page ">
      <Grid container spacing={2} justify="center">
        <Grid item xs={3} className="categories-icons">
          <VideoCallOutlined fontSize="large" />
          <p className="small">Art, media & Entertainment</p>
        </Grid>

        <Grid item xs={3} className="categories-icons">
          <LocalDiningOutlined fontSize="large" />
          <p className="small">Food and Category</p>
        </Grid>

        <Grid item xs={3} className="categories-icons">
          <HotelOutlined fontSize="large" />
          <p className="small">Hotel & Hospitality</p>
        </Grid>

        <Grid item xs={3} className="categories-icons">
          <MonetizationOnOutlined fontSize="large" />
          <p className="small">Financial Services</p>
        </Grid>
        <Grid item xs={3} className="categories-icons">
          <LocalHospitalOutlined fontSize="large" />
          <p className="small">Health</p>
        </Grid>

        <Grid item xs={3} className="categories-icons">
          <SportsSoccerOutlined fontSize="large" />
          <p className="small">Sports & Leisure</p>
        </Grid>

        <Grid item xs={3} className="categories-icons">
          <LocalBarOutlined fontSize="large" />
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
