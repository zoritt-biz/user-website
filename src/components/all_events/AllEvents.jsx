import React, {useState} from 'react';

import {Avatar, Card, CardActionArea, CardContent, CardMedia, Grid, Typography,} from '@material-ui/core';

import Carousel from 'react-material-ui-carousel';

import {Link} from 'react-router-dom';

const AllEvents = ({event}) => {
  const [favourite, setFavourite] = useState(false);

  const handleClick = () => {
    setFavourite(!favourite);
  };

  return (
    <Grid item>
      <Card className="h-100">
        <CardActionArea>
          <CardMedia title="All Events">
            <Carousel indicators={false} interval={9000} animation="slide">
              {event.photos &&
              (event.photos.length > 0 ? (
                event.photos.map((photo, index) => (
                  <Link to={`/event/${event._id}`}>
                    <img
                      key={index}
                      src={photo}
                      className="d-block w-100 events-image"
                      alt="..."
                    />
                  </Link>
                ))
              ) : (
                <Typography variant="caption" className="d-block text-center">
                  No Image found
                </Typography>
              ))}
            </Carousel>
          </CardMedia>
        </CardActionArea>
        <CardContent className="pb-0">
          <div className="d-flex">
            <Avatar src={event.photos[0]}/>
            <div className="d-block">
              <p className="ml-3 mb-0 fw-bold fs-6 d-block">{event.title}</p>
              <Typography variant="caption" className="ml-3 mb-4 d-block">
                {event.location}
              </Typography>
            </div>

            {/*<div className="ml-auto p-0">*/}
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
        </CardContent>
      </Card>
    </Grid>
  );
};

export default AllEvents;
