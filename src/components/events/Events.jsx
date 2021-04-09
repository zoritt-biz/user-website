import React, { useState } from 'react';

import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Avatar,
} from '@material-ui/core';

import { Favorite, FavoriteBorder } from '@material-ui/icons';

import Carousel from 'react-material-ui-carousel';

const Events = ({ image1, image2, image3, title, place, eventName }) => {
  const [favourite, setFavourite] = useState(false);

  const handleClick = () => {
    setFavourite(!favourite);
  };
  return (
    <Grid item>
      <Card>
        <CardActionArea>
          <CardMedia className="" title="Events posts">
            <Carousel indicators={false} interval={9000} animation="slide">
              <img src={image1} className="d-block w-100 " alt="..." />
              <img src={image2} className="d-block w-100" alt="..." />
              <img src={image3} className="d-block w-100" alt="..." />
            </Carousel>
          </CardMedia>
        </CardActionArea>
        <CardContent>
          <div className="d-flex">
            <Avatar src={image3} />
            <div className="d-block">
              <p className="ml-3 mb-0 fw-bold fs-6 d-block">{title}</p>
              <Typography variant="caption" className="ml-3 mb-4 d-block">
                {place}
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
          <Typography>
            {eventName}{' '}
            <a
              href="/#"
              className="text-decoration-none events-see-more-button"
            >
              See more
            </a>
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default Events;
