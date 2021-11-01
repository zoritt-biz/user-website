import React, {useEffect, useRef, useState} from 'react';

import Description from './common/description';
import LocationAndBusinessInfo from './common/location-and-business-info';
import Events from './common/events';
import RelatedBusiness from './common/related-business';
import Photos from './common/photos';
import Posts from './common/posts';

import {makeStyles} from '@mui/styles';
import {AppBar, Dialog, IconButton, Slide, Toolbar, Typography,} from '@mui/material';
import {Close} from '@mui/icons-material';
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

const Detail = ({business}) => {
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
    <div className="detail-page mt-5 pt-4">
      <div className="hero-cont w-100 overflow-hidden position-relative">
        <div
          className="slideshowSlider hero position-absolute"
          style={{transform: `translate3d(${-index * 100}%, 0, 0)`}}
        >
          {business.pictures.map((image, index) => (
            <img
              src={image}
              alt="business_picture"
              className="dashboard-pic-back"
            />
          ))}
        </div>
        <div
          className="slideshowSlider hero position-absolute"
          style={{transform: `translate3d(${-index * 100}%, 0, 0)`}}
        >
          {business.pictures.map((image, index) => (
            <img src={image} alt="business_picture" className="dashboard-pic"/>
          ))}
        </div>
        <div className="position-absolute d-flex bg-gradientt w-100 p-3 h-100"/>
        <div className="position-absolute d-flex w-100 p-3 h-100">
          <div className="w-100 align-self-end container-md">
            <h1 className="text-white font-weight-bold text-truncate">
              {business.businessName}
            </h1>
          </div>
        </div>
      </div>

      <div className="container-md">
        {/* description appear below image */}
        <Description business={business} openLocation={handleClickOpen}/>

        {/* location and business info web */}
        <LocationAndBusinessInfo
          business={business}
          openLocation={handleClickOpen}
        />

        <div>
          <p className="fs-5 fw-bold">Category</p>
          <div>
            {business.categories.map(cat => (
              <div>
                <div>{cat.parent}</div>
                <div className="ml-3 d-flex">
                  {cat.parent !== cat.name && (
                    <>
                      {/* <div className="px-2"> ></div> */}
                      <div>{cat.name}</div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* mobile + web */}
        <Events business={business}/>
        <Posts business={business}/>
        <Photos business={business}/>
        <RelatedBusiness business={business}/>
      </div>

      {/*Location dialog*/}

      <div>
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
                <Close/>
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Direction
              </Typography>
            </Toolbar>
          </AppBar>
          <div className="p-0">
            <MyMapComponent
              isMarkerShown={true}
              loadingElement={<div style={{height: `95%`}}/>}
              containerElement={<div style={{height: `95%`}}/>}
              mapElement={<div style={{height: `95%`}}/>}
              center={center}
              zoom={zoom}
              setCenter={setCenter}
              draggable={false}
            />
          </div>
        </Dialog>
      </div>
    </div>
  );
};

export default Detail;
