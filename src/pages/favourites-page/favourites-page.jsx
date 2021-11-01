import React from 'react';
import Favourites from '../../components/favourites/favourites';
import Footer from '../../components/footer/footer';
import NavBar from '../../components/navbar/navBar';

const FavouritesPage = () => {
  return (
    <div>
      <NavBar/>
      <Favourites/>
      <Footer/>
    </div>
  );
};

export default FavouritesPage;
