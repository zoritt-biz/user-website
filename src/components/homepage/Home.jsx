import React from 'react';
import {
  Search,
  CategoryOutlined,
  MonetizationOnOutlined,
} from '@material-ui/icons';
import { Paper, Grid } from '@material-ui/core';
import DropDown from '../dropdown/Dropdown';

const Home = () => {
  return (
    <div className="text-center w-100 px-4 align-middle home ">
      <h2 className="pt-5 home-text">You can find everything in</h2>
      <h1 className="zoritt"> ዞሪት</h1>
      <div className="container-md">
        <Paper className="w-100 text-field-paper" elevation={0}>
          <div className="input-group rounded">
            <Search className="my-auto search-icon" />
            <input
              type="text"
              aria-label="form search"
              className="form-control form-search"
              placeholder="What are you looking for?"
            />
            <span className="input-group-text ">Near</span>
            <input
              type="text"
              aria-label="form location"
              className="form-control form-location"
              placeholder="What are you looking for?"
            />
          </div>
        </Paper>

        <div className="container-md mt-5 home-categories">
          <Grid container spacing={2} justify="center">
            <Grid item xs={3} className="d-flex home-grid">
              <CategoryOutlined fontSize="default" />
              <DropDown />
            </Grid>

            <Grid item xs={3} className="d-flex home-grid">
              <MonetizationOnOutlined fontSize="default" />
              <p className="large ml-2 mb-0">Price and Listing</p>
            </Grid>
            <Grid item xs={3} className="d-flex home-grid">
              <Search fontSize="default" />
              <p className="large ml-2 mb-0">Discover</p>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Home;
