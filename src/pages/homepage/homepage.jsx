import React from 'react';
import Navbar from '../../components/homepage/navbar';
import Home from '../../components/homepage/Home';
import Categories from '../../components/homepage/Categories';
import New from '../../components/homepage/New';
import AllSponsor from '../../components/homepage/AllSponsor';
import SeeMore from '../../components/homepage/SeeMore';

const HomePage = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <Home />
      <Categories />
      <New />
      <AllSponsor />
      <SeeMore />
    </div>
  );
};

export default HomePage;
