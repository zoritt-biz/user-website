import React from 'react';

import Home from '../../components/homepage/Home';
import Categories from '../../components/homepage/Categories';
import New from '../../components/homepage/New';
import AllSponsor from '../../components/homepage/AllSponsor';
import SeeMore from '../../components/see-more-button/SeeMore';
import Navbar from '../../components/navbar/navbar';
import Footer from '../../components/footer/Footer';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white w-100">
        <Home />
        <Categories />
        <New />
        <AllSponsor />
        <div className="container-md">
          <SeeMore />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
