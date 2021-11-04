import React, { useEffect, useRef, useState } from 'react';

import Description from './common/description';
import LocationAndBusinessInfo from './common/location-and-business-info';
import Events from './common/events';
import RelatedBusiness from './common/related-business';
import Photos from './common/photos';
import Posts from './common/posts';

import { makeStyles } from '@mui/styles';
import {
  AppBar,
  Dialog,
  IconButton,
  Slide,
  Toolbar,
  Typography,
  Box,
} from '@mui/material';
import { Close } from '@mui/icons-material';
import MyMapComponent from './common/map';

const useStyles = makeStyles(theme => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const delay = 8000;

const Detail = ({ business }) => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [center, setCenter] = useState(null);
  const [zoom, setZoom] = useState(15);

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

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex(prevIndex =>
          prevIndex === business.pictures.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <Box mt={5} pt={4} className="detail-page">
      <Box
        overflow="hidden"
        position="relative"
        width="100%"
        className="hero-cont"
      >
        <Box
          position="absolute"
          className="slideshowSlider hero"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {business.pictures.map((image, index) => (
            <img
              src={image}
              alt="business_picture"
              className="dashboard-pic-back"
            />
          ))}
        </Box>
        <Box
          position="absolute"
          className="slideshowSlider hero"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {business.pictures.map((image, index) => (
            <img src={image} alt="business_picture" className="dashboard-pic" />
          ))}
        </Box>
        <Box
          position="absolute"
          display="flex"
          width="100%"
          height="100%"
          p={3}
          className=" d-flex w-100 p-3 h-100"
        >
          <Box width="100%" alignSelf="end" className="container-md">
            <Typography
              color="white"
              fontWeight="bold"
              overflow="hidden"
              whiteSpace="nowrap"
              textOverflow="ellipsis"
              variant="h4"
              mb={3}
            >
              {business.businessName}
            </Typography>
          </Box>
        </Box>
      </Box>

      <Box className="container-md">
        {/* description appear below image */}
        <Description business={business} openLocation={handleClickOpen} />

        {/* location and business info web */}
        <LocationAndBusinessInfo
          business={business}
          openLocation={handleClickOpen}
        />

        <Box>
          <Typography color="white" fontWeight="bold" variant="h5">
            Category
          </Typography>
          <Box>
            {business.categories.map(cat => (
              <Box>
                <Box>{cat.parent}</Box>
                <Box display="flex" ml={3}>
                  {cat.parent !== cat.name && (
                    <>
                      {/* <Box className="px-2"> ></Box> */}
                      <Box>{cat.name}</Box>
                    </>
                  )}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        {/* mobile + web */}
        <Events business={business} />
        <Posts business={business} />
        <Photos business={business} />
        <RelatedBusiness business={business} />
      </Box>

      {/*Location dialog*/}

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
                Direction
              </Typography>
            </Toolbar>
          </AppBar>
          <Box className="p-0">
            <MyMapComponent
              isMarkerShown={true}
              loadingElement={<div style={{ height: `95%` }} />}
              containerElement={<div style={{ height: `95%` }} />}
              mapElement={<div style={{ height: `95%` }} />}
              center={center}
              zoom={zoom}
              setCenter={setCenter}
              draggable={false}
            />
          </Box>
        </Dialog>
      </Box>
    </Box>
  );
};

export default Detail;
