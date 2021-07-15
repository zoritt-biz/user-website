import React from 'react';
import Favourites from '../../components/favourites/Favourites';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/navbar';

const FavouritesPage = () => {
  return (
    <div>
      <Navbar/>
      <Favourites/>
      <Footer/>
    </div>
  );
};

export default FavouritesPage;
