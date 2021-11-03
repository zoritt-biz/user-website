import React from 'react';
import {MoreHoriz,} from '@mui/icons-material';

import {Link} from 'react-router-dom';
import {Grid} from '@mui/material';

import food from "../../assets/images/home-category/food.png";
import fashion_cloth from "../../assets/images/home-category/fashion_cloth.png";
import beauty_spa from "../../assets/images/home-category/beauty_spa.png";
import night_life from "../../assets/images/home-category/night_life.png";
import shopping from "../../assets/images/home-category/shopping.png";
import delivery from "../../assets/images/home-category/delivery.png";
import hospitality from "../../assets/images/home-category/hospitality.png";
import Box from "@mui/material/Box";

const Categories = () => {
  return (
    <section className="mt-0 pt-5 categories-page bg-lighter">
      <div className="container-md">
        <Grid container spacing={2} justify="center">
          
          {HOME_CATEGORY_LIST.map(cat => (
            <Grid item xs={3} className="categories-icons">
              <Link
                to={`/search/subcat/${cat.search}`}
                className="text-dark text-decoration-none"
              >
                <Box style={{width: "100%"}} display="flex" justifyContent="center">
                  <img style={{width: "100%"}} src={cat.icon} alt=""/>
                </Box>
                <p className="small">{cat.name}</p>
              </Link>
            </Grid>
          ))}

          <Grid item xs={3} className="categories-icons">
            <Link to="/categories" className="text-dark text-decoration-none">
              <MoreHoriz fontSize="large"/>
              <p className="small">More</p>
            </Link>
          </Grid>
        </Grid>
      </div>
    </section>
  );
};

export default Categories;

const HOME_CATEGORY_LIST = [
  {
    "name": "Food",
    "search": "Restaurant",
    "small_icon": "",
    "icon": food,
  },
  {
    "name": "Fashion & Clothing",
    "search": "Boutiques",
    "small_icon": "",
    "icon": fashion_cloth,
  },
  {
    "name": "Beauty & Spa",
    "search": "Women Salon",
    "small_icon": "",
    "icon": beauty_spa,
  },
  {
    "name": "Night Life",
    "search": "Clubs",
    "small_icon": "",
    "icon": night_life,
  },
  {
    "name": "Shopping",
    "search": "Supermarket",
    "small_icon": "",
    "icon": shopping,
  },
  {
    "name": "Delivery",
    "search": "Delivery",
    "small_icon": "",
    "icon": delivery,
  },
  {
    "name": "Hospitality",
    "search": "Hotel",
    "small_icon": "",
    "icon": hospitality,
  },
];
