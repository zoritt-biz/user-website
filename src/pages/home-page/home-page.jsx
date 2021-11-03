import React, {useEffect} from 'react';

import {useLazyQuery} from '@apollo/client';
import {Alert, Box, Button} from '@mui/material';

import {GET_IMAGES} from '../../apollo/queries/home';

import PreLoader from '../../components/preloader/preloader';
import Events from '../../components/home-page/events';
import Posts from '../../components/home-page/posts';
import HomeImage from '../../components/home-page/home-image/home-image';
import Categories from '../../components/home-page/categories';
import SponsoredPosts from '../../components/home-page/sponsored-posts';
import NavBar from '../../components/navbar/navBar';
import Footer from '../../components/footer/footer';

const HomePage = () => {
  const [getHomeImage, {loading, data, error}] = useLazyQuery(GET_IMAGES);

  useEffect(() => {
    getHomeImage();
  }, [getHomeImage]);

  return (
    <>
      {loading && <PreLoader/>}
      <NavBar/>
      <div>
        {data && (
          <HomeImage images={data['zorittOne']['userAppHomePageImages']}/>
        )}
        <Categories/>
        <Events/>
        <Posts/>
        <SponsoredPosts/>
        <div className="mt-5 d-flex justify-content-center see-more-button-container pb-5">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://business.zoritt.com"
            className="text-decoration-none"
          >
            <Button
              size="large"
              disableElevation
              className="see-more-button rounded fs-6 text-capitalize text-white"
              variant="contained"
            >
              Add Your Business
            </Button>
          </a>
        </div>
      </div>
      <Footer/>
      {error && (
        <Box>
          <Alert severity="error" variant="filled">
            {error.message}
          </Alert>
        </Box>
      )}
    </>
  );
};

export default HomePage;
