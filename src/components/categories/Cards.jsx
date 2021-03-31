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
    // <div className="row">
    //     <div className="col-xs-6 col-md-4 mb-xl-3">
    <Grid item spacing={3}>
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
    // </div>
    // </div>
  );
};

export default Cards;
