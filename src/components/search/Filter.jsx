import React, { useState } from 'react';
import { Grid, Modal, Paper } from '@mui/material';
import {
  FilterListOutlined,
  KeyboardArrowDownOutlined,
} from '@mui/icons-material';

const Filter = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const modalBody = (
    <Paper elevation={0} className="p-4 search-paper mx-auto">
      <p className="fs-3 d-flex justify-content-center fw-bolder">Filters</p>
      <p className="fs-6 d-flex justify-content-center fw-bolder mb-3">Price</p>
      <Grid className="d-flex">
        <Grid
          item
          xs={3}
          className="d-flex justify-content-center border-end-0  modal-texts"
        >
          <p className="search-text mb-0">$</p>
        </Grid>

        <Grid
          item
          xs={3}
          className="d-flex justify-content-center border-end-0  modal-texts"
        >
          <p className="search-text mb-0">$$</p>
        </Grid>

        <Grid
          item
          xs={3}
          className="d-flex justify-content-center border-end-0  modal-texts"
        >
          <p className="search-text mb-0">$$$</p>
        </Grid>

        <Grid item xs={3} className="d-flex justify-content-center modal-texts">
          <p className="search-text mb-0">$$$$</p>
        </Grid>
      </Grid>
    </Paper>
  );

  return (
    <div className="container-md  border-top border-bottom my-5 py-5 d-lg-none bg-white">
      <Grid container spacing={2} justify="center">
        <Grid item xs={3} className="d-flex justify-content-center">
          <div
            className="my-icon  d-flex align-items-center"
            onClick={handleOpen}
          >
            <FilterListOutlined fontSize="default" />
          </div>
          <Modal open={open} onClose={handleClose}>
            {modalBody}
          </Modal>
        </Grid>

        <Grid item xs={3} className="d-flex justify-content-center">
          <div className="my-grid align-items-center">
            <p className="search-text mb-0">Open Now</p>
          </div>
        </Grid>
        <Grid item xs={3} className="d-flex justify-content-center">
          <div className="my-grid align-items-center">
            <p className="search-text mb-0">Price</p>
            <KeyboardArrowDownOutlined />
          </div>
        </Grid>
        <Grid item xs={3} className="d-flex justify-content-center">
          <div className="my-grid align-items-center" onClick={handleOpen}>
            <p className="search-text search-all-filters mb-0">All Filters</p>
          </div>
          <Modal open={open} onClose={handleClose}>
            {modalBody}
          </Modal>
        </Grid>
      </Grid>
    </div>
  );
};

export default Filter;
