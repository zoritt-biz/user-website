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

const AllEvents = ({ event }) => {
  const [favourite, setFavourite] = useState(false);

  const handleClick = () => {
    setFavourite(!favourite);
  };

  return (
    <Grid item>
      <Card className="h-100">
        <CardActionArea>
          <CardMedia className="" title="Events posts">
            <Carousel indicators={false} interval={9000} animation="slide">
              {event.photos &&
                (event.photos.length > 0 ? (
                  event.photos.map((photo, index) => (
                    <img
                      key={index}
                      src={photo}
                      className="d-block w-100 events-image"
                      alt="..."
                    />
                  ))
                ) : (
                  <Typography variant="caption" className="d-block text-center">
                    No Image found
                  </Typography>
                ))}
            </Carousel>
          </CardMedia>
        </CardActionArea>
        <CardContent>
          <div className="d-flex">
            <Avatar src={event.photos[0]} />
            <div className="d-block">
              <p className="ml-3 mb-0 fw-bold fs-6 d-block">{event.title}</p>
              <Typography variant="caption" className="ml-3 mb-4 d-block">
                {event.location}
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
      </Card>
    </Grid>
  );
};

export default AllEvents;
