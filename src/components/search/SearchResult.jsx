import React, {useState} from 'react';
import {Card, CardActionArea, CardContent, Grid, Typography,} from '@material-ui/core';

const SearchResult = ({image, title, place, phoneNumber, menu, id}) => {
  const [favourite, setFavourite] = useState(false);

  const handleClick = () => {
    setFavourite(!favourite);
  };

  return (
    <Grid item xs={12} lg={6}>
      <Card className="search-card mb-3 p-0">
        <CardActionArea className="d-sm-flex justify-content-start align-items-start">
          <div className="search-image-container search-res-cont overflow-hidden position-relative">
            <div className="search-res position-absolute">
              <img src={image} alt="business_picture"
                   className="search-res-pic-back"/>
            </div>
            <div className="search-res position-absolute">
              <img
                src={image}
                alt="business_picture"
                className="search-res-pic"
              />
            </div>
          </div>

          <div className="search-detail border-sm rounded">
            <CardContent className="search-content">
              <div className="d-flex justify-content-between mt-3">
                <div>
                  <p className="mb-2 fw-bold fs-3 d-block">{title}</p>
                </div>
                {/*<div>*/}
                {/*  {favourite ? (*/}
                {/*    <Favorite*/}
                {/*      onClick={handleClick}*/}
                {/*      className="sponsored-icon-color"*/}
                {/*    />*/}
                {/*  ) : (*/}
                {/*    <FavoriteBorder*/}
                {/*      onClick={handleClick}*/}
                {/*      className="sponsored-icon-color"*/}
                {/*    />*/}
                {/*  )}*/}
                {/*</div>*/}
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
                  className="mb-md-1 d-block search-card-content-text text-truncate"
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
