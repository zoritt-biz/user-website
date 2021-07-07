import React, {useState} from 'react';
import {Card, CardActionArea, CardContent, CardMedia, Grid, Typography,} from '@material-ui/core';
import {Favorite, FavoriteBorder} from '@material-ui/icons';

const SearchResult = ({image, title, place, phoneNumber, menu}) => {
  const [favourite, setFavourite] = useState(false);

  const handleClick = () => {
    setFavourite(!favourite);
  };
  //className="search-grid w-50"
  //search-card-action-area
  return (
    <Grid item xs={12}>
      <Card className="search-card mb-3 p-0">
        <CardActionArea className="d-sm-flex justify-content-start align-items-start">
          <div className="search-image-container">
            <CardMedia
              className="w-100 h-100"
              image={image}
              title="Wow Burger"
            />
          </div>

          <div className="search-detail border-sm rounded">
            <CardContent className="search-content">
              <div className="d-flex justify-content-between mt-2">
                <div>
                  <p className="mb-2 fw-bold fs-3 d-block">{title}</p>
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
                  className="mb-md-1 d-block search-card-content-text"
                >
                  {place}
                </Typography>
                <Typography
                  variant="subtitle2"
                  className="mb-md-1 d-block search-card-content-text"
                >
                  {phoneNumber}
                </Typography>
                <Typography
                  variant="subtitle2"
                  className="mb-md-1 d-block search-card-content-text"
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

export default SearchResult;
