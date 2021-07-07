import React from 'react';

import Home from '../../components/homepage/Home';
import Categories from '../../components/homepage/Categories';

import AllSponsor from '../../components/homepage/AllSponsor';
import SeeMore from '../../components/see-more-button/SeeMore';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/Footer';
import EventsPage from './EventsPage';
import PostsPage from './PostsPage';

const HomePage = () => {
  return (
    <>
      <Navbar/>
      <div className="bg-white w-100">
        <Home/>
        <Categories/>
        <EventsPage/>
        <PostsPage/>
        <AllSponsor/>
        <div className="container-md">
          <SeeMore/>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default HomePage;
