import React, { useEffect, useState } from 'react';
import {
  CallOutlined,
  Close,
  DirectionsOutlined,
  Email,
  LanguageOutlined,
} from '@mui/icons-material';

import { makeStyles } from '@mui/styles';
import {
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Slide,
  Box,
  Button,
} from '@mui/material';
import MyMapComponent from './map';
import appStyles from '../../../app-styles';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  button: {
    border: `1px solid ${theme.palette.mainColor.color} !important`,
    textTransform: 'capitalize',
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

let now = new Date();
var days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
let day = days[now.getDay()];

const LocationAndBusinessInfo = ({ business, openLocation }) => {
  const classes = useStyles();
  const appStyle = appStyles();
  const [open, setOpen] = React.useState(false);
  const [center, setCenter] = useState(null);
  const [zoom, setZoom] = useState(15);

  const getCoords = latLng => {
    setCenter(latLng);
    setZoom(18);
  };

  useEffect(() => {
    setCenter({
      lat: business['lat'],
      lng: business['lng'],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* location and business info respo web*/}
      <Box bgcolor="white" mb={2} p={4} display="flex">
        <Box px={0} pr={{ md: 3 }} className="col-12 col-md-6">
          <Typography variant="h5" mb={3}>
            Location
          </Typography>
          <Box position="relative">
            <MyMapComponent
              isMarkerShown={true}
              loadingElement={<div style={{ height: `200px` }} />}
              containerElement={<div style={{ height: `200px` }} />}
              mapElement={<div style={{ height: `200px` }} />}
              center={center}
              zoom={zoom}
              setCenter={setCenter}
              draggable={false}
            />
            <Box
              position="absolute"
              width="100%"
              height="100%"
              top="0"
              left="0"
              onClick={openLocation}
            />
          </Box>
          <Typography component="p" variant="h6" mb={0}>
            {business.location}
          </Typography>
        </Box>
        {business.openHours.length > 0 && (
          <Box mt={5} ml={3} mr={5} width="38%">
            {business.openHours.map(open => (
              <Box display="flex" key={open.day}>
                {open.day === day ? (
                  <>
                    <Typography
                      component="span"
                      variant="caption"
                      pr={4}
                      mb={2}
                      width="59px"
                    >
                      {open.day.slice(0, 3)}
                    </Typography>
                    <Typography
                      component="span"
                      variant="caption"
                      pr={1}
                      mb={2}
                      fontWeight="bolder"
                    >
                      {open.opens}
                    </Typography>
                    <Typography
                      component="span"
                      variant="caption"
                      pr={1}
                      mb={2}
                      fontWeight="bolder"
                    >
                      -
                    </Typography>
                    <Typography
                      component="span"
                      variant="caption"
                      pr={1}
                      mb={2}
                      fontWeight="bolder"
                    >
                      {open.closes}
                    </Typography>
                  </>
                ) : (
                  <>
                    <Typography
                      component="span"
                      variant="caption"
                      pr={4}
                      mb={2}
                      width="59px"
                    >
                      {open.day.slice(0, 3)}
                    </Typography>
                    <Typography
                      component="span"
                      variant="caption"
                      pr={1}
                      mb={2}
                      fontWeight="bolder"
                    >
                      {open.opens}
                    </Typography>
                    <Typography
                      component="span"
                      variant="caption"
                      pr={1}
                      mb={2}
                      fontWeight="bolder"
                    >
                      -
                    </Typography>
                    <Typography
                      component="span"
                      variant="caption"
                      pr={1}
                      mb={2}
                      fontWeight="bolder"
                    >
                      {open.closes}
                    </Typography>
                  </>
                )}
                {open.isOpen ? (
                  <Typography
                    component="span"
                    variant="caption"
                    pr={1}
                    ml="auto"
                    mb={2}
                    fontWeight="bolder"
                    sx={{ color: 'rgba(5, 168, 130, 1)' }}
                  >
                    Open
                  </Typography>
                ) : (
                  <Typography
                    component="span"
                    variant="caption"
                    pr={1}
                    ml="auto"
                    mb={2}
                    fontWeight="bolder"
                    color="red"
                  >
                    Closed
                  </Typography>
                )}
              </Box>
            ))}
          </Box>
        )}

        <Box
          height="74px"
          mt={5}
          py={3}
          px={3}
          width="50%"
          border="1px solid #e3e3e3"
          borderRadius="4px"
          className="col-12 col-md-6"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            mb={3}
            onClick={openLocation}
          >
            <p style={{ cursor: 'pointer' }}>GetDirections</p>
            <DirectionsOutlined />
          </Box>

          {business.phoneNumbers.length > 0 &&
            business.phoneNumbers.map(phone => (
              <Box display="flex" justifyContent="space-between" mb={2}>
                <p style={{ cursor: 'pointer', display: 'flex' }}>
                  <a
                    href={`tel:${phone}`}
                    style={{ display: 'flex', marginRight: '5px' }}
                    className={appStyle.link}
                  >
                    {phone}
                  </a>
                </p>
                <a
                  href={`tel:${phone}`}
                  style={{ display: 'flex' }}
                  className={appStyle.link}
                >
                  <CallOutlined />
                </a>
              </Box>
            ))}

          {business.website && (
            <a
              href={`${business.website}`}
              target="_blank"
              style={{
                display: 'flex',
                marginBottom: '10px',
                justifyContent: 'space-between',
              }}
              rel="noreferrer"
            >
              <p style={{ cursor: 'pointer' }} className={appStyle.link}>
                {business.website}
              </p>
              <LanguageOutlined className={appStyle.link} />
            </a>
          )}
          {business.emails.length > 0 && (
            <a
              href={`${business.website}`}
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '10px',
              }}
            >
              {/* <Box className="d-flex justify-content-between mb-2"> */}
              <p style={{ cursor: 'pointer' }} className="">
                {business.emails.map(email => (
                  <span style={{ mr: 1 }} className={appStyle.link}>
                    {email}
                  </span>
                ))}
              </p>
              <Email className={appStyle.link} />
              {/* </Box> */}
            </a>
          )}

          <Box display="flex" width="100%" justifyContent="center">
            {business.description ||
              business.specialization ||
              (business.history && (
                <Button
                  size="large"
                  disableElevation
                  className={classes.button}
                  variant="outlined"
                  onClick={handleClickOpen}
                >
                  More Info
                </Button>
              ))}
          </Box>
        </Box>
      </Box>

      {/*Business description*/}

      <Box>
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar} color="transparent">
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleClose}
                aria-label="close"
              >
                <Close />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Business Information
              </Typography>
            </Toolbar>
          </AppBar>
          <Box p={3}>
            {business.description && (
              <Box p={3}>
                <h5>Description</h5>
                <p>{business.description}</p>
              </Box>
            )}
            {business.specialization && (
              <Box p={3}>
                <h5>Description</h5>
                <p>{business.specialization}</p>
              </Box>
            )}
            {business.history && (
              <Box p={3}>
                <h5>Since {business.establishedIn}</h5>
                <p>{business.history}</p>
              </Box>
            )}
          </Box>
        </Dialog>
      </Box>
    </>
  );
};

export default LocationAndBusinessInfo;
