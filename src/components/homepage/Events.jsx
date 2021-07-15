import React from 'react';
import {Link} from 'react-router-dom';

import {LocationOn} from '@material-ui/icons';

const Events = ({event}) => {
  return (
    <>
      <div className="all-event-container mb-2">
        <Link to="/events" className="text-decoration-none text-dark">
          <img
            className="w-100 h-100"
            src={event.photos[0]}
            alt="Event"
            style={{objectFit: 'cover'}}
          />
        </Link>
      </div>
      <p className="events-typography m-0 pb-2">{event.title}</p>
      <div className="d-flex align-items-center events-location-container">
        <LocationOn className="events-location-icon"/>
        <p className="events-location mb-0 ml-1 pb-2">{event.location}</p>
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
