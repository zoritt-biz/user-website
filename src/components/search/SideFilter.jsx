import React from 'react';

import {Grid} from '@material-ui/core';

const SideFilter = () => {
  return (
    <div className="side-filter ml-5 mr-5 mt-5">
      <p className="fs-3 fw-bolder">Filters</p>
      <p className="fs-6  fw-bolder mb-3">Price</p>
      <Grid className="d-flex">
        <Grid
          item
          xs={3}
          className="d-flex  justify-content-center border-end-0 filter-text filter-text-border-left"
        >
          <p className=" mb-0">$</p>
        </Grid>

        <Grid
          item
          xs={3}
          className="d-flex justify-content-center border-end-0 filter-text"
        >
          <p className=" mb-0">$$</p>
        </Grid>

        <Grid
          item
          xs={3}
          className="d-flex justify-content-center border-end-0 filter-text"
        >
          <p className=" mb-0">$$$</p>
        </Grid>

        <Grid
          item
          xs={3}
          className="d-flex justify-content-center filter-text filter-text-border filter-text-border-right"
        >
          <p className=" mb-0">$$$$</p>
        </Grid>
      </Grid>
    </div>
  );
};

export default SideFilter;
