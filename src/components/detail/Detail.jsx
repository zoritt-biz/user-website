import React, {useEffect, useRef, useState} from 'react';

import Description from './common/Description';
import BusinessInfo from './common/BusinessInfo';
import LocationAndBusinessInfo from './common/LocationAndBusinessInfo';
import Events from './common/Events';
import RelatedBusiness from './common/RelatedBusiness';
import Photos from './common/Photos';
import Posts from './common/Posts';

import { makeStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import MyMapComponent from "../../pages/detailpage/map";

const useStyles = makeStyles((theme) => ({
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

  const getCoords = (latLng) => {
    setCenter(latLng)
    setZoom(18)
  }

  useEffect(() => {
    setCenter({
      lat: business['lat'],
      lng: business['lng'],
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
        setIndex((prevIndex) =>
          prevIndex === business.pictures.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="detail-page">
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
            <img
              src={image}
              alt="business_picture"
              className="dashboard-pic"
            />
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
        <LocationAndBusinessInfo business={business} openLocation={handleClickOpen}/>

        {/* mobile + web */}
        <BusinessInfo business={business}/>
        <Events business={business}/>
        <Posts business={business}/>
        <Photos business={business}/>
        <RelatedBusiness business={business}/>
      </div>

      {/*Location dialog*/}

      <div>
        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
          <AppBar className={classes.appBar} color="transparent">
            <Toolbar>
              <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                <CloseIcon />
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
