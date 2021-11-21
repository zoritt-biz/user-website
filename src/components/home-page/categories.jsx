import React from 'react';
import {MoreHoriz} from '@mui/icons-material';

import {Link} from 'react-router-dom';
import {Box, Container, Grid, Typography} from '@mui/material';

import food from '../../assets/images/home-category/food.png';
import fashion_cloth from '../../assets/images/home-category/fashion_cloth.png';
import beauty_spa from '../../assets/images/home-category/beauty_spa.png';
import night_life from '../../assets/images/home-category/night_life.png';
import shopping from '../../assets/images/home-category/shopping.png';
import delivery from '../../assets/images/home-category/delivery.png';
import hospitality from '../../assets/images/home-category/hospitality.png';
import appStyles from '../../app-styles';

const Categories = () => {
  const classes = appStyles();
  return (
    <Box mt={0} py={5} bgcolor={'white'} textAlign="center">
      <Container maxWidth="lg">
        <Grid container spacing={2} justify="center">
          {HOME_CATEGORY_LIST.map((cat, index) => (
            <Grid item xs={3} key={index}>
              <Link
                to={`/search/subcat/${cat.search}`}
                className={classes.link}
              >
                <Box
                  style={{width: '100%'}}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  mb={1}
                >
                  <img style={{width: '60px'}} src={cat.icon} alt=""/>
                </Box>
                <Typography variant="body2">{cat.name}</Typography>
              </Link>
            </Grid>
          ))}

          <Grid
            item
            xs={3}
            display="flex"
            flexDirection="column"
            justifyContent="center"
          >
            <Link to="/categoriesList" className={classes.link}>
              <MoreHoriz fontSize="large" className={classes.mainColor}/>
              <Typography variant="body2">More</Typography>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Categories;

const HOME_CATEGORY_LIST = [
  {
    name: 'Food',
    search: 'Restaurant',
    small_icon: '',
    icon: food,
  },
  {
    name: 'Fashion & Clothing',
    search: 'Boutiques',
    small_icon: '',
    icon: fashion_cloth,
  },
  {
    name: 'Beauty & Spa',
    search: 'Women Salon',
    small_icon: '',
    icon: beauty_spa,
  },
  {
    name: 'Night Life',
    search: 'Clubs',
    small_icon: '',
    icon: night_life,
  },
  {
    name: 'Shopping',
    search: 'Supermarket',
    small_icon: '',
    icon: shopping,
  },
  {
    name: 'Delivery',
    search: 'Delivery',
    small_icon: '',
    icon: delivery,
  },
  {
    name: 'Hospitality',
    search: 'Hotel',
    small_icon: '',
    icon: hospitality,
  },
];
