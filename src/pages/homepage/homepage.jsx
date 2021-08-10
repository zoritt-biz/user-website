import React, {useEffect} from 'react';

import Home from '../../components/homepage/Home';
import Categories from '../../components/homepage/Categories';

import AllSponsor from '../../components/homepage/AllSponsor';
import SeeMore from '../../components/see-more-button/SeeMore';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/Footer';
import EventsPage from './EventsPage';
import PostsPage from './PostsPage';
import {useLazyQuery} from "@apollo/client";
import {GET_IMAGES} from "../../apollo/queries/home";

const HomePage = () => {
  const [getHomeImage, {loading, data, error}] = useLazyQuery(GET_IMAGES);

  useEffect(() => {
    getHomeImage()
  }, [])

  return (
    <>
      {
        loading && <div>
          loading...
        </div>
      }
      {data && (
        <>
          <Navbar/>
          <div className="bg-white w-100">
            <Home images={data['zorittOne']['userAppHomePageImages']}/>
            <Categories/>
            <EventsPage/>
            <PostsPage/>
            <AllSponsor/>
          </div>
          <Footer/>
        </>
      )}
    </>
  );
};

export default HomePage;
