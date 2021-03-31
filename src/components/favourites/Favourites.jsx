import React from 'react';
import FavouriteItem from './FavouriteItem';

const Favourites = () => {
  return (
    <div className="container-md mt-5">
      <h3 className="mb-3">Favourites</h3>
      <FavouriteItem
        image="../images/wow.jpg"
        title="Wow Burger"
        place="Arat kilo, Addis Ababa"
        phoneNumber="+251 91 163 4938"
        menu="$$ Burger, Shawarma"
      />
      <FavouriteItem
        image="../images/angla1.jpg"
        title="Angla Burger"
        place="Zimbabwe St, Addis Ababa"
        phoneNumber="+251 91 206 0505"
        menu="$$$$ Burger, Shawarma, Salad, Appetizers"
      />

      <FavouriteItem
        image="../images/angla2.jpg"
        title="In-Joy Burger"
        place="Ednamall, Bole, Addis Ababa"
        phoneNumber="+251 93 987 8787"
        menu="$$$ Burger, Shawarma, Salad, Appetizers"
      />
    </div>
  );
};

export default Favourites;
