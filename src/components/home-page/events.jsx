import React, {useEffect} from 'react';

import {GET_EVENTS} from '../../apollo/queries/event-queries';
import {useLazyQuery} from '@apollo/client';
import Loading from '../loading/loading';
import EventCard from '../event-card/event-card';
import {Link} from 'react-router-dom';
import {ArrowForwardIos} from '@mui/icons-material';
import {Box, Container, Typography, useMediaQuery, useTheme,} from '@mui/material';
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
        // today: new Date().toISOString().split('T')[0],
        today: '2020-10-10',
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

        <Box
          display="grid"
          gridTemplateColumns={`${
            isMobile ? 'auto auto' : 'auto auto auto auto'
          }`}
          gap="10px"
        >
          {loading &&
          Array(isMobile ? 2 : 4)
            .fill()
            .map((_, index) => (
              <Box key={index}>
                <Loading rectHeight={250} avatar={false} line={false}/>
              </Box>
            ))}
        </Box>

        <Box
          display="flex"
          pb={2}
          className={classes.scrollbar}
          style={{overflowX: 'scroll'}}
        >
          {data &&
          data.eventPagination &&
          data.eventPagination.items.length > 0 &&
          data.eventPagination.items.map(event => (
            <div
              key={event._id}
              // container
              // direction="row"
              // columns={{ xs: 8, sm: 5, md: 4, lg: 3 }}
              className="col-8 col-sm-5 col-md-4 col-lg-3"
              style={{marginRight: '16px'}}
            >
              {/* <Grid container item spacing={3}> */}
              <Link to="/" className={classes.link}>
                <EventCard event={event}/>
              </Link>
              {/* </Grid> */}
            </div>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Events;
