import React, { useState } from 'react';
import { Paper, Typography, Avatar } from '@material-ui/core';
import {
  Close,
  Favorite,
  FavoriteBorder,
  Share,
  KeyboardArrowRight,
  KeyboardArrowLeft,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';

const Events = () => {
  const [favourite, setFavourite] = useState(false);

  const handleClick = () => {
    setFavourite(!favourite);
  };
  return (
    <div className="d-flex justify-content-center align-items-center event-container">
      <Link to="/">
        <p className="event-logo  fs-2">ዞሪት</p>
      </Link>

      <Link to="/">
        <Close className="event-close fs-2" />
      </Link>

      <Paper elevation={0} className="paper">
        <img
          src="../images/events2.jpg"
          alt="burgers"
          className="img-fluid event-image"
        />
        <Typography className="event-name fs-3">Events</Typography>
        <Typography className="event-description fs-5">
          You can attend to our event.
        </Typography>
        <Avatar
          className="event-avatar"
          alt="wow burger"
          src="../images/event.jpg"
        />

        <Typography className="event-avatar-name fs-6">Wow Burger</Typography>
        <Typography className="event-avatar-caption  opacity-50">
          Fry day is the best day
        </Typography>

        {favourite ? (
          <Favorite
            onClick={handleClick}
            fontSize="large"
            className="event-favourite-color"
          />
        ) : (
          <FavoriteBorder
            fontSize="large"
            onClick={handleClick}
            className="event-favourite-color"
          />
        )}
        <Share className="event-share-icon" fontSize="large" />
        <KeyboardArrowRight className="event-right-arrow " fontSize="small" />
        <KeyboardArrowLeft className="event-left-arrow" fontSize="small" />
      </Paper>
    </div>
  );
};

export default Events;
