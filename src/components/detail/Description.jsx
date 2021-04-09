import React from 'react';

import { Grid } from '@material-ui/core';
import {
  Favorite,
  Share,
  LocationOnOutlined,
  CallOutlined,
  LanguageOutlined,
} from '@material-ui/icons';

const Description = () => {
  return (
    <>
      {/* description responsive */}
      <div className="bg-white d-md-flex d-none mb-2 px-4 py-5 border-bottom">
        <Grid container spacing={2}>
          <Grid
            item
            xs={3}
            className="d-flex justify-content-center description-grid-respo-1 mr-2"
          >
            <Favorite className="mr-1 text-white" />
            <p className="mb-0 fs-6 text-white">Add to Favourite</p>
          </Grid>

          <Grid
            item
            xs={3}
            className="d-flex justify-content-center description-grid-respo mr-2"
          >
            <Share className="mr-1 " />
            <p className="mb-0 fs-6">Share</p>
          </Grid>
          <Grid
            item
            xs={3}
            className="d-flex justify-content-center description-grid-respo"
          >
            <LocationOnOutlined className="mr-1 " />
            <p className="mb-0 fs-6">Location</p>
          </Grid>
        </Grid>
      </div>
      {/* description  not*/}
      <div className="p-4 mb-2 bg-white d-md-none">
        <p className="fs-6">$$ . Burger, Shawarma</p>
        <p className="mb-4">
          <span className="detail-open mr-2">Open</span>
          9:00 AM - 6:00 PM ET
        </p>
        <Grid container spacing={2} justify="center">
          <Grid item xs={3} className="text-center">
            <CallOutlined className="mb-1 detail-icons" fontSize="large" />
            <p className="mb-0">Call</p>
          </Grid>

          <Grid item xs={3} className="text-center">
            <LanguageOutlined className="mb-1 detail-icons" fontSize="large" />
            <p className="mb-0">Website</p>
          </Grid>
          <Grid item xs={3} className="text-center">
            <LocationOnOutlined
              className="mb-1 detail-icons"
              fontSize="large"
            />
            <p className="mb-0">Location</p>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Description;
