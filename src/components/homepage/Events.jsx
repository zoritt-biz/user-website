import React from 'react';
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
} from '@material-ui/core';
import { Link } from 'react-router-dom';

import { LocationOn } from '@material-ui/icons';
const Events = ({ event }) => {
  return (
    <>
      <div className="all-event-container">
        <img
          className="w-100 h-100"
          src={event.photos[0]}
          alt=""
          style={{ objectFit: 'cover' }}
        />
      </div>
      <p className="events-typography">{event.title}</p>
      <div className="d-flex events-location-container">
        <LocationOn className="mr-1 events-location-icon" />
        <p className="events-typography">{event.location}</p>
      </div>
    </>
    // <Grid item className="w-100">

    //   <Card className="image-container">
    //     <Link to="/events" className="text-decoration-none text-dark">
    //       {' '}
    //       <CardActionArea>
    //         <CardMedia
    //           className="events-images"
    //           image={event.photos[0]}
    //           title="Events"
    //         />
    //         <CardContent>
    //           <p className="events-typography">{event.title}</p>
    //           <div className="d-flex events-location-container">
    //             <LocationOn className="mr-1 events-location-icon" />
    //             <p className="events-typography">{event.location}</p>
    //           </div>
    //         </CardContent>
    //       </CardActionArea>
    //     </Link>
    //   </Card>
    // </Grid>
  );
};

export default Events;
