import React from 'react';

import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
} from '@material-ui/core';
import { Favorite } from '@material-ui/icons';

const FavouriteItem = ({ image, title, place, phoneNumber, menu }) => {
  return (
    <Grid item xs={12} className="favourite-grid">
      <Card className="favourite-card mb-3">
        <CardActionArea className="d-flex favourite-card-action-area justify-content-start">
          <CardMedia
            className="favourite-image rounded"
            image={image}
            title="Burger"
          />
          <div className="favourite-detail ml-md-3">
            <CardContent className="favourite-content">
              <div className="d-flex">
                <div className="d-block">
                  <p className="ml-3 mb-2 fw-bold fs-3 d-block">{title}</p>
                  <Typography
                    variant="subtitle2"
                    className="ml-3 mb-md-1 d-block favourite-card-content-text"
                  >
                    {place}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    className="ml-3 mb-md-1 d-block favourite-card-content-text"
                  >
                    {phoneNumber}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    className="ml-3 mb-md-1 d-block favourite-card-content-text"
                  >
                    {menu}
                  </Typography>
                </div>

                <div className="ml-auto p-0">
                  <Favorite className="sponsored-icon-color" />
                </div>
              </div>
            </CardContent>
          </div>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default FavouriteItem;
