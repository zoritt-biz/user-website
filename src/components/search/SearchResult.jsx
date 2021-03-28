import React, { useState } from 'react';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActionArea,
  Typography,
} from '@material-ui/core';
import { Favorite, FavoriteBorder } from '@material-ui/icons';

const SearchResult = ({ image, title, place, phoneNumber, menu }) => {
  const [favourite, setFavourite] = useState(false);

  const handleClick = () => {
    setFavourite(!favourite);
  };
  return (
    <Grid item xs={12} className="search-grid">
      <Card className="search-card mb-3">
        <CardActionArea className="d-flex search-card-action-area justify-content-start">
          <CardMedia
            className="search-image rounded"
            image={image}
            title="Wow Burger"
          />
          <div className="search-detail ml-md-3">
            <CardContent className="search-content">
              <div className="d-flex">
                <div className="d-block">
                  <p className="ml-3 mb-2 fw-bold fs-3 d-block">{title}</p>
                  <Typography
                    variant="subtitle2"
                    className="ml-3 mb-md-1 d-block search-card-content-text"
                  >
                    {place}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    className="ml-3 mb-md-1 d-block search-card-content-text"
                  >
                    {phoneNumber}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    className="ml-3 mb-md-1 d-block search-card-content-text"
                  >
                    {menu}
                  </Typography>
                </div>

                <div className="ml-auto p-0">
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
            </CardContent>
          </div>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default SearchResult;
