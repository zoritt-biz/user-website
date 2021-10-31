import React, {useEffect} from 'react';

import Home from '../../components/homepage/Home';
import Categories from '../../components/homepage/Categories';

import SponsoredPosts from '../../components/homepage/SponsoredPosts';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/Footer';
import EventsPage from './EventsPage';
import PostsPage from './PostsPage';
import {useLazyQuery} from "@apollo/client";
import {GET_IMAGES} from "../../apollo/queries/home";
import PreLoader from "../../components/preloader/preloader";
import Button from "@material-ui/core/Button";

const HomePage = () => {
  const [getHomeImage, {loading, data, error}] = useLazyQuery(GET_IMAGES);

  useEffect(() => {
    getHomeImage()
  }, [])

  return (
    <>
      {loading && (
        <div>
          <PreLoader/>
        </div>
      )}
      <Navbar/>
      <div className="bg-white w-100">
        {data && <Home images={data['zorittOne']['userAppHomePageImages']}/>}
        <Categories/>
        <EventsPage/>
        <PostsPage/>
        <SponsoredPosts/>
        <div className="mt-5 d-flex justify-content-center see-more-button-container pb-5">
          <a target="_blank" href="https://business.zoritt.com" className="text-decoration-none">
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
    </>
  );
};

export default HomePage;
