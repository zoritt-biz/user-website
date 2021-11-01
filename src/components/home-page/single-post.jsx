import React from 'react';
// import { GridList, GridListTile, GridListTileBar } from '@mui/material';
import {Card, CardActionArea, CardContent} from '@mui/material';
import {Link} from 'react-router-dom';

const SinglePost = ({post}) => {
  return (
    <Link to="/posts">
      <Card>
        <CardActionArea>
          <div className="all-event-cont w-100 overflow-hidden position-relative">
            <div className="all-event position-absolute">
              <img
                src={post.photos[0]}
                alt="business_picture"
                className="all-event-pic-back"
              />
            </div>
            <div className="all-event position-absolute">
              <img
                src={post.photos[0]}
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
        <CardContent className="p-2">
          <div className="">
            <p className="pr-4 mb-0 text-truncate">{post.description}</p>

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

export default SinglePost;
