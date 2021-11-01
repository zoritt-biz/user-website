import React from 'react';
import {
  Business,
  DirectionsBikeRounded,
  LocalBar,
  LocalCafe,
  MoreHoriz,
  Restaurant,
  ShoppingBasketRounded,
  SpaRounded,
} from '@mui/icons-material';

import {Link} from 'react-router-dom';
import {Grid} from '@mui/material';

const Categories = () => {
  return (
    <section className="mt-0 pt-5 categories-page bg-lighter">
      <div className="container-md">
        <Grid container spacing={2} justify="center">
          <Grid item xs={3} className="categories-icons">
            <Link
              to="/search/subcat/Restaurant"
              className="text-dark text-decoration-none"
            >
              <Restaurant fontSize="large"/>
              <p className="small">Restaurant</p>
            </Link>
          </Grid>

          <Grid item xs={3} className="categories-icons">
            <Link
              to="/search/subcat/Cafe"
              className="text-dark text-decoration-none"
            >
              <LocalCafe fontSize="large"/>
              <p className="small">Cafe</p>
            </Link>
          </Grid>

          <Grid item xs={3} className="categories-icons">
            <Link
              to="/search/subcat/Beauty & Spa"
              className="text-dark text-decoration-none"
            >
              <SpaRounded fontSize="large"/>
              <p className="small">Beauty & Spa</p>
            </Link>
          </Grid>

          <Grid item xs={3} className="categories-icons">
            <Link
              to="/search/subcat/Bars & Lounges"
              className="text-dark text-decoration-none"
            >
              <LocalBar fontSize="large"/>
              <p className="small">Bars & Lounges</p>
            </Link>
          </Grid>

          <Grid item xs={3} className="categories-icons">
            <Link
              to="/search/subcat/Supermarkets"
              className="text-dark text-decoration-none"
            >
              <ShoppingBasketRounded fontSize="large"/>
              <p className="small">Supermarkets</p>
            </Link>
          </Grid>

          <Grid item xs={3} className="categories-icons">
            <Link
              to="/search/subcat/Delivery"
              className="text-dark text-decoration-none"
            >
              <DirectionsBikeRounded fontSize="large"/>
              <p className="small">Delivery</p>
            </Link>
          </Grid>

          <Grid item xs={3} className="categories-icons">
            <Link
              to="/search/subcat/Banks"
              className="text-dark text-decoration-none"
            >
              <Business fontSize="large"/>
              <p className="small">Banks</p>
            </Link>
          </Grid>

          <Grid item xs={3} className="categories-icons">
            <Link to="/categories" className="text-dark text-decoration-none">
              <MoreHoriz fontSize="large"/>
              <p className="small">More</p>
            </Link>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Categories;
