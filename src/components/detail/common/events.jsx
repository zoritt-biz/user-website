import React from 'react';
import { Box, Typography } from '@mui/material';
import EventCard from '../../event-card/event-card';
import appStyles from '../../../app-styles';

const Events = ({ business }) => {
  const classes = appStyles();
  return (
    <>
      <Box bgcolor="white" mb={2} py={4}>
        <Typography variant="h5" mb={3}>
          Events
        </Typography>
        {business.events.length > 0 ? (
          <Box
            display="flex"
            pb={2}
            className={classes.scrollbar}
            style={{ overflowX: 'scroll' }}
          >
            {business.events.map(event => (
              <div
                key={event._id}
                className="col-8 col-sm-5 col-md-4 col-lg-3"
                style={{ marginRight: '16px' }}
              >
                <EventCard event={event} />
              </div>
            ))}
          </Box>
        ) : (
          <Box textAlign="center">No Events</Box>
        )}
      </Box>
    </>
  );
};

export default Events;
