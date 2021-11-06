import React, {useEffect, useState} from 'react';
import NavBar from '../../components/navbar/navBar';
import {Alert, Avatar, Box, Card, CardActionArea, CardContent, Container, Typography,} from '@mui/material';
import {useLazyQuery} from '@apollo/client';
import {GET_EVENT_BY_ID} from '../../apollo/queries/event-queries';
import {Link} from 'react-router-dom';
import PreLoader from '../../components/preloader/preloader';
import './all-events.css';

const EventDetail = props => {
  const [getEventDetail, {loading, data, error}] =
    useLazyQuery(GET_EVENT_BY_ID);
  const [show, setShow] = useState(false);

  const handleNavbar = () => {
    setShow(!show);
  };

  const hideNavbar = () => {
    setShow(false);
  };

  useEffect(() => {
    getEventDetail({
      variables: {
        id: props.match.params.id,
      },
    });
  }, []);

  return (
    <>
      <NavBar show={show} handleNavbar={handleNavbar}/>

      {loading && <PreLoader/>}
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
      {data && data.eventById && (
        <Container maxWidth="lg" sx={{py: 5, mt: 5}} onClick={hideNavbar}>
          <Card>
            <CardActionArea>
              <Box
                width="100%"
                overflow="hidden"
                position="relative"
                className="all-event-cont"
              >
                <Box position="absolute" className="all-event">
                  <img
                    src={data.eventById.photos[0]}
                    alt="business_picture"
                    className="all-event-pic-back"
                  />
                </Box>
                <Box position="absolute" className="all-event">
                  <img
                    src={data.eventById.photos[0]}
                    alt="business_picture"
                    className="all-event-pic"
                  />
                </Box>
              </Box>
            </CardActionArea>
            <CardContent sx={{pb: 0}}>
              <Box display="flex" overflow="hidden">
                <Avatar src={data.eventById.photos[0]}/>
                <Box>
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    overflow="hidden"
                    whiteSpace="nowrap"
                    textOverflow="ellipsis"
                  >
                    {data.eventById.title}{' '}
                  </Typography>
                  <Typography
                    variant="caption"
                    overflow="hidden"
                    whiteSpace="nowrap"
                    textOverflow="ellipsis"
                    px={3}
                    mb={2}
                  >
                    {data.eventById.location}
                  </Typography>
                  <Typography
                    variant="body1"
                    overflow="hidden"
                    whiteSpace="nowrap"
                    textOverflow="ellipsis"
                    px={3}
                    mb={2}
                  >
                    <a
                      target="_blank"
                      href={data.eventById.link}
                      rel="noreferrer"
                    >
                      {data.eventById.link}
                    </a>
                  </Typography>
                </Box>
              </Box>
              <Box px={3} py={2}>
                {data.eventById.description}
              </Box>
              <Box px={3} pb={2} fontStyle="italic">
                Start {data.eventById.startDate.split('T')[0]} - End{' '}
                {data.eventById.endDate.split('T')[0]}
              </Box>
              <Box width="100%" textAlign="right" py={1}>
                <h5>
                  <Link to={`/detail/${data.eventById.owner?._id}`}>
                    {data.eventById.owner?.businessName}
                  </Link>
                </h5>
              </Box>
            </CardContent>
          </Card>
        </Container>
      )}
    </>
  );
};

export default EventDetail;
