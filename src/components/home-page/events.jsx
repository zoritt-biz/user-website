import React, {useEffect} from 'react';

import {GET_EVENTS} from '../../apollo/queries/event-queries';
import {useLazyQuery} from '@apollo/client';
import Loading from '../loading/loading';
import EventCard from '../event-card/event-card';
import {Link} from 'react-router-dom';
import {ArrowForwardIos} from '@mui/icons-material';
import {Box, Container, Grid, Typography, useMediaQuery, useTheme,} from '@mui/material';
import appStyles from '../../app-styles';

const Events = ({sort, history}) => {
  const classes = appStyles();
  var myDate = new Date();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  // var newDate = new Date(myDate.getTime() - (60 * 60 * 24 * 8 * 1000));

  const [getEvents, {loading, data}] = useLazyQuery(GET_EVENTS);

  useEffect(() => {
    getEvents({
      variables: {
        page: 1,
        perPage: 10,
        today: new Date().toISOString().split('T')[0],
      },
    });
  }, []);

  return (
    <Box mt={2} pt={4} pb={2} bgcolor={'white'}>
      <Container maxWidth="lg">
        <Typography variant="h5" mb={3}>
          <Link to="/events" className={classes.link}>
            Events <ArrowForwardIos fontSize="small"/>
          </Link>
        </Typography>

        {loading && (
          <Grid container spacing={2}>
            {Array(isMobile ? 2 : 4)
              .fill()
              .map((_, index) => (
                <Grid item key={index} xs={6} md={4} lg={3}>
                  <Loading rectHeight={250} avatar={false} line={false}/>
                </Grid>
              ))}
          </Grid>
        )}

        <Box
          display="flex"
          pb={2}
          className={classes.scrollbar}
          style={{overflowX: 'scroll !important'}}
        >
          {data &&
          data.eventPagination &&
          data.eventPagination.items.length > 0 &&
          data.eventPagination.items.map(event => (
            <Box
              key={event._id}
              style={{marginRight: '16px'}}
            >
              <EventCard event={event}/>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Events;
