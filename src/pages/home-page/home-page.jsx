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
import homePageStyles from './home-page-styles';
import NavBar from '../../components/navbar/navBar';
import Footer from '../../components/footer/footer';

const HomePage = () => {
  const classes = homePageStyles();
  const [getHomeImage, {loading, data, error}] = useLazyQuery(GET_IMAGES);

  useEffect(() => {
    getHomeImage();
  }, [getHomeImage]);

  return (
    <>
      <NavBar/>
      {loading && <PreLoader/>}
      <Box className={classes.paper}>
        <Box mb={5} mt={5}/>
        {data && (
          <HomeImage images={data['zorittOne']['userAppHomePageImages']}/>
        )}
        <Categories/>
        <Events/>
        <Posts/>
        <SponsoredPosts/>
        <Box display="flex" justifyContent="center" py={4} bgcolor="white">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://business.zoritt.com"
            className={classes.link}
          >
            <Button
              size="large"
              disableElevation
              className={classes.button}
              variant="contained"
            >
              Add Your Business
            </Button>
          </a>
        </Box>
      </Box>

      {error && (
        <Box width="100%">
          <Alert
            onClose={() => {
            }}
            severity="error"
            variant="filled"
            sx={{width: '300px', margin: 'auto'}}
          >
            {error.message}
          </Alert>
        </Box>
      )}
      <Footer/>
    </>
  );
};

export default HomePage;
