import React, {useEffect} from 'react';
import EventCard from '../../components/event-card/event-card';
import {useLazyQuery} from '@apollo/client';
import {GET_EVENTS} from '../../apollo/queries/event-queries';
import Loading from '../../components/loading/loading';
import {Alert, Box, Container, Typography} from '@mui/material';
import Grid from "@mui/material/Grid";

const EventsPage = () => {
  var myDate = new Date();
  var newDate = new Date(myDate.getTime() - 60 * 60 * 24 * 1000 * 1000);

  const [getEvents, {loading, data, error}] = useLazyQuery(GET_EVENTS, {
    variables: {
      page: 1,
      perPage: 10,
      // today: new Date().toISOString().split('T')[0],
      today: '2020-10-10',
    },
  });

  useEffect(() => {
    getEvents();
  }, [getEvents]);

  return (
    <>
      <Box mt={5}>
        <Container maxWidth="lg">
          <Typography variant="h5" mb={3}>
            Events
          </Typography>
          <Box>
            {loading &&
            Array(5)
              .fill()
              .map((_, index) => (
                <Box key={index} className="col-12 col-lg-6 mb-3 mb-xl-5">
                  <Loading rectHeight={200} avatar={true}/>
                </Box>
              ))}

            <Grid container spacing={2}>

              {data &&
              data.eventPagination &&
              data.eventPagination.items.length > 0 &&
              data.eventPagination.items.map(event => (
                <Grid item key={event._id} xs={12} md={6} lg={4}>
                  <EventCard event={event}/>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Container>
      </Box>

      {error && (
        <Box width="100%">
          <Alert
            onClose={() => {
            }}
            severity="error"
            variant="filled"
            sx={{width: '300px', margin: 'auto'}}
          >
            {error.message}
          </Alert>
        </Box>
      )}
    </>
  );
};

export default EventsPage;
