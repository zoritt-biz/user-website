import React, {useState} from 'react';

import {Card, CardActionArea, CardContent, CardMedia, Grid, Typography,} from '@mui/material';
import {Favorite, FavoriteBorder} from '@mui/icons-material';

const FavouriteItem = ({image, title, place, phoneNumber, menu}) => {
  const [favourite, setFavourite] = useState(false);

  const handleClick = () => {
    setFavourite(!favourite);
  };
  return (
    <Grid item xs={12} className="favourite-grid mb-3 rounded">
      <Card className="favourite-card">
        <CardActionArea className="d-sm-flex align-items-start justify-content-start">
          <div className="favourite-image-container">
            <CardMedia
              className="rounded w-100 h-100"
              image={image}
              title="Burger"
            />
          </div>

          <div className="favourite-detail border-sm-rounded">
            <CardContent className="favourite-content">
              <div className="d-flex justify-content-between mt-2">
                <div>
                  <p className="ml-3 mb-2 fw-bold fs-3 d-block">{title}</p>
                </div>
                <div>
                  {favourite ? (
                    <Favorite
                      onClick={handleClick}
                      className="sponsored-icon-color"
                    />
                  ) : (
                    <FavoriteBorder
                      onClick={handleClick}
                      className="sponsored-icon-color"
                    />
                  )}
                </div>
              </div>

              <div className="d-flex flex-column justify-content-start">
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
            </CardContent>
          </div>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default FavouriteItem;
