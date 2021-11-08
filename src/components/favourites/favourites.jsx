import React from 'react';
import { Container, Typography } from '@mui/material';
import FavouriteItem from './favourite-item';
import BackButton from '../back-button/back-button';

const Favourites = () => {
  return (
    <Container maxWidth="lg" style={{ marginTop: '6rem' }}>
      <BackButton />
      <Typography variant="h5" mb={3}>
        Favourites
      </Typography>
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
    </Container>
  );
};

export default Favourites;
