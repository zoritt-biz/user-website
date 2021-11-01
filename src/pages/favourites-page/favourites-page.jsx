import React from 'react';
import Favourites from '../../components/favourites/favourites';
import Footer from '../../components/footer/footer';
import Navbar from '../../components/navbar/navbar';

const FavouritesPage = () => {
  return (
    <div>
      <Navbar />
      <Favourites />
      <Footer />
    </div>
  );
};

export default FavouritesPage;
