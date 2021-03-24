import React from 'react';

import Home from '../../components/homepage/Home';
import Categories from '../../components/homepage/Categories';
import New from '../../components/homepage/New';
import AllSponsor from '../../components/homepage/AllSponsor';
import SeeMore from '../../components/see-more-button/SeeMore';
import Footer from '../../components/footer/Footer';

const HomePage = () => {
  return (
    <div className="bg-white">
      <Home />
      <Categories />
      <New />
      <AllSponsor />
      <div className="container-md">
        <SeeMore />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
