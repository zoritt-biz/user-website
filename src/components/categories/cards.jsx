import React from 'react';

import {Card, CardActionArea, CardContent, Typography} from '@mui/material';
import categoriesStyle from './categories-styles';

const Cards = ({category, setSubCatOn, subCatOn, setSubCat}) => {
  const classes = categoriesStyle();
  return (
    <Card className={classes.categoriesCard} variant="outlined" raised={true}>
      <CardActionArea
        onClick={() => {
          setSubCatOn(!subCatOn);
          setSubCat(category);
        }}
        sx={{height: '155px !important', textAlign: 'center', p: 3}}
      >
        <div className="category-max-width mx-auto">
          <img src={category.image} className="w-100" alt={category.name}/>
        </div>
        <CardContent className="px-0">
          <Typography
            gutterBottom
            display="flex"
            justifyContent="center"
            variant="body1"
          >
            {category.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Cards;
