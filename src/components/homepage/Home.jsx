import React from 'react';
import { CategoryOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import DropDown from '../dropdown/Dropdown';
import SearchPaper from './Search';

const Home = () => {
  return (
    <div className="w-100 position-relative">
      {/* <div className="text-center w-100 align-middle home"> */}
      <div className="w-100 h-100 home-img-content position-absolute">
        {/* <div className="home-img-background"></div> */}

        <div className="container-md position-relative home-text-container text-white text-center">
          <h2>You can find everything</h2>
          {/* <h1 className="zoritt"> ዞሪት</h1> */}
          <Link to="/search" className="search-paper-container">
            <SearchPaper />
          </Link>

          <div className="container-md mt-5 home-categories justify-content-center text-white">
            <CategoryOutlined fontSize="default" />
            <DropDown />

            {/* <Grid container spacing={2} justify="center">
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
            </Grid> */}
          </div>
        </div>
      </div>

      <div className="home-img-container ">
        <img src="../images/zorit.jpg" alt="" className="home-img" />
      </div>
    </div>
  );
};

export default Home;
