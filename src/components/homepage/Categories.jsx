import React from 'react';
import {
  Business,
  LocalBar,
  LocalCafe,
  MoreHoriz,
  MotorcycleRounded,
  Restaurant,
  ShoppingBasketRounded,
  SpaRounded
} from '@material-ui/icons';

import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';

const Categories = () => {
  return (
    <section className="container-md categories-page ">
      <Grid container spacing={2} justify="center">
        <Grid item xs={3} className="categories-icons">
          <Link to="/search/Restaurant" className="text-dark text-decoration-none">
            <Restaurant fontSize="large"/>
            <p className="small">Restaurant</p>
          </Link>
        </Grid>

        <Grid item xs={3} className="categories-icons">
          <Link to="/search/Cafe" className="text-dark text-decoration-none">
            <LocalCafe fontSize="large"/>
            <p className="small">Cafe</p>
          </Link>
        </Grid>

        <Grid item xs={3} className="categories-icons">
          <Link to="/search/Beauty & Spa" className="text-dark text-decoration-none">
            <SpaRounded fontSize="large"/>
            <p className="small">Beauty & Spa</p>
          </Link>
        </Grid>

        <Grid item xs={3} className="categories-icons">
          <Link to="/search/Bars & Lounges" className="text-dark text-decoration-none">
            <LocalBar fontSize="large"/>
            <p className="small">Bars & Lounges</p>
          </Link>
        </Grid>

        <Grid item xs={3} className="categories-icons">
          <Link to="/search/Supermarkets" className="text-dark text-decoration-none">
            <ShoppingBasketRounded fontSize="large"/>
            <p className="small">Supermarkets</p>
          </Link>
        </Grid>

        <Grid item xs={3} className="categories-icons">
          <Link to="/search/Delivery" className="text-dark text-decoration-none">
            <MotorcycleRounded fontSize="large"/>
            <p className="small">Delivery</p>
          </Link>
        </Grid>

        <Grid item xs={3} className="categories-icons">
          <Link to="/search/Banks" className="text-dark text-decoration-none">
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
    </section>
  );
};

export default Categories;
