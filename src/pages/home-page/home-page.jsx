import React, {useEffect} from 'react';

import Home from '../../components/home-page/home';
import Categories from '../../components/home-page/categories';

import SponsoredPosts from '../../components/home-page/sponsored-posts';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/footer';
import EventsPage from './events-page';
import PostsPage from './posts-page';
import {useLazyQuery} from '@apollo/client';
import {GET_IMAGES} from '../../apollo/queries/home';
import PreLoader from '../../components/preloader/preloader';
import {Alert, Box, Button} from '@mui/material';

const HomePage = () => {
  const [getHomeImage, {loading, data, error}] = useLazyQuery(GET_IMAGES);

  useEffect(() => {
    getHomeImage();
  }, [getHomeImage]);

  return (
    <>
      {loading && (
        <div>
          <PreLoader/>
        </div>
      )}
      <Navbar/>
      <div>
        {data && <Home images={data['zorittOne']['userAppHomePageImages']}/>}
        <Categories/>
        <EventsPage/>
        <PostsPage/>
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
