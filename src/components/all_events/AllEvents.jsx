import React, {useState} from 'react';

import {Avatar, Card, CardActionArea, CardContent, Typography,} from '@material-ui/core';

import {Link} from 'react-router-dom';
import "./all-events.css"

const AllEvents = ({event}) => {
  const [favourite, setFavourite] = useState(false);

  const handleClick = () => {
    setFavourite(!favourite);
  };

  return (
    <Link to={`/event/${event._id}`}>
      <Card>
        <CardActionArea>
          <div className="all-event-cont w-100 overflow-hidden position-relative">
            <div className="all-event position-absolute">
              <img
                src={event.photos[0]}
                alt="business_picture"
                className="all-event-pic-back"
              />
            </div>
            <div className="all-event position-absolute">
              <img
                src={event.photos[0]}
                alt="business_picture"
                className="all-event-pic"
              />
            </div>
          </div>
          {/*<CardMedia title="All Events">*/}
          {/*  <Carousel indicators={false} interval={9000} animation="slide">*/}
          {/*    {event.photos &&*/}
          {/*    (event.photos.length > 0 ? (*/}
          {/*      event.photos.map((photo, index) => (*/}
          {/*        <Link to={`/event/${event._id}`}>*/}
          {/*          <img*/}
          {/*            key={index}*/}
          {/*            src={photo}*/}
          {/*            className="d-block w-100 events-image"*/}
          {/*            alt="..."*/}
          {/*          />*/}
          {/*        </Link>*/}
          {/*      ))*/}
          {/*    ) : (*/}
          {/*      <Typography variant="caption" className="d-block text-center">*/}
          {/*        No Image found*/}
          {/*      </Typography>*/}
          {/*    ))}*/}
          {/*  </Carousel>*/}
          {/*</CardMedia>*/}
        </CardActionArea>
        <CardContent className="pb-0">
          <div className="d-flex overflow-hidden">
            <Avatar src={event.photos[0]}/>
            <div className="flex-fill">
              <p className="px-3 pr-5 w-100 mb-0 fw-bold fs-6 d-block text-truncate">{event.title}</p>
              <Typography variant="caption" className="px-3 pr-5 mb-4 d-block text-truncate">
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
    </Link>
  );
};

export default AllEvents;
