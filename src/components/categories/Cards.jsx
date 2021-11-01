import React from 'react';

import { Card, CardActionArea, CardContent, Typography } from '@mui/material';

const Cards = ({ category, setSubCatOn, subCatOn, setSubCat }) => {
  return (
    <Card className="categories-card" variant="outlined" raised={true}>
      <CardActionArea
        onClick={() => {
          setSubCatOn(!subCatOn);
          setSubCat(category);
        }}
        className="categories-card-area p-3 text-center"
      >
        <div className="category-max-width mx-auto">
          <img src={category.image} className="w-100" alt={category.name} />
        </div>
        <CardContent className="px-0">
          <Typography
            gutterBottom
            className="d-flex justify-content-center"
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
