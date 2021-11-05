import React, { useEffect, useState } from 'react';
import NavBar from '../../components/navbar/navBar';
import Footer from '../../components/footer/footer';
import EventCard from '../../components/event-card/event-card';
import { useLazyQuery } from '@apollo/client';
import { GET_EVENTS } from '../../apollo/queries/event-queries';
import Loading from '../../components/loading/loading';
import { Box, Alert, Typography, Container } from '@mui/material';

const EventsPage = () => {
  var myDate = new Date();
  var newDate = new Date(myDate.getTime() - 60 * 60 * 24 * 1000 * 1000);
  const [show, setShow] = useState(false);

  const handleNavbar = () => {
    setShow(!show);
  };

  const hideNavbar = () => {
    setShow(false);
  };

  const [getEvents, { loading, data, error }] = useLazyQuery(GET_EVENTS, {
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
      <NavBar show={show} handleNavbar={handleNavbar} />
      {error && (
        <Box width="100%">
          <Alert
            onClose={() => {}}
            severity="error"
            variant="filled"
            sx={{ width: '300px', margin: 'auto' }}
          >
            {error.message}
          </Alert>
        </Box>
      )}
      <Box mt={5}>
        <Container maxWidth="lg" onClick={hideNavbar}>
          <Typography variant="h5" mb={3}>
            Events
          </Typography>
          <Box display="flex">
            {loading &&
              Array(5)
                .fill()
                .map((_, index) => (
                  <Box key={index} className="col-12 col-lg-6 mb-3 mb-xl-5">
                    <Loading rectHeight={200} avatar={true} />
                  </Box>
                ))}
            {data &&
              data.eventPagination &&
              data.eventPagination.items.length > 0 &&
              data.eventPagination.items.map(event => (
                <Box
                  key={event._id}
                  className="col-12 col-md-6 col-lg-4 mb-3 mb-xl-5"
                >
                  <EventCard event={event} />
                </Box>
              ))}
          </Box>
        </Container>
      </Box>

      <Footer />
    </>
  );
};

export default EventsPage;
