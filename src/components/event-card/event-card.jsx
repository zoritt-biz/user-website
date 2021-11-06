import React from 'react';

import {Avatar, Box, Card, CardActionArea, CardContent, Typography,} from '@mui/material';

import {Link} from 'react-router-dom';
import './all-events.css';
import appStyles from '../../app-styles';

const EventCard = ({event}) => {
  const classes = appStyles();
  return (
    <Link to={`/event/${event._id}`} className={classes.link}>
      <Card sx={{height: '100%'}}>
        <CardActionArea>
          <Box
            width="100%"
            overflow="hidden"
            position="relative"
            className="all-event-cont"
          >
            <Box position="absolute" className="all-event">
              <img
                src={event.photos[0]}
                alt="business_picture"
                className="all-event-pic-back"
              />
            </Box>
            <Box position="absolute" className="all-event">
              <img
                src={event.photos[0]}
                alt="business_picture"
                className="all-event-pic"
              />
            </Box>
          </Box>
        </CardActionArea>
        <CardContent sx={{p: '15px 10px 5px !important'}}>
          <Box display="flex" overflow="hidden">
            <Avatar src={event.photos[0]}/>
            <Box overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis">
              <Typography
                variant="subtitle1"
                px={2}
                mb={0}
                fontWeight="bold"
                overflow="hidden"
                whiteSpace="nowrap"
                textOverflow="ellipsis"
              >
                {event.title}
              </Typography>
              <Typography
                variant="caption"
                px={2}
                mb={4}
                overflow="hidden"
                whiteSpace="nowrap"
                textOverflow="ellipsis"
              >
                {event.location}
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
};

export default EventCard;
