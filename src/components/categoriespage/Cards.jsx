import React from 'react';

import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from '@material-ui/core';

const Cards = ({ cardIcon, typography, icon }) => {
  return (
    <Grid item xs={6} md={4} xl={3}>
      <Card className="categories-card" variant="outlined" raised={true}>
        <CardActionArea className="categories-card-area">
          <CardContent>
            {icon ? icon : cardIcon}
            <Typography
              gutterBottom
              className="d-flex justify-content-center"
              variant="subtitle2"
            >
              {typography}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Cards;
