import React from 'react';
import Favourites from '../../components/favourites/favourites';
import NavBar from '../../components/navbar/navBar';
import Footer from '../../components/footer/footer';

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
