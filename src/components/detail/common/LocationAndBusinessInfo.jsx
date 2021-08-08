import React, {useEffect, useState} from 'react';
import {CallOutlined, DirectionsOutlined, LanguageOutlined,} from '@material-ui/icons';
import {Button} from '@material-ui/core';

import {makeStyles} from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import MyMapComponent from "../../../pages/detailpage/map";

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

const LocationAndBusinessInfo = ({business, openLocation}) => {
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

  return (
    <>
      {/* location and business info respo web*/}
      <div className="bg-white mb-2 p-4 row border-bottom">
        <div className="col-12 col-md-6 px-0">
          <p className="fs-5 fw-bold">Location</p>
          <div className="position-relative">
            <MyMapComponent
              isMarkerShown={true}
              loadingElement={<div style={{height: `200px`}}/>}
              containerElement={<div style={{height: `200px`}}/>}
              mapElement={<div style={{height: `200px`}}/>}
              center={center}
              zoom={zoom}
              setCenter={setCenter}
              draggable={false}
            />
            <div className="position-absolute w-100 h-100" style={{top: 0, left: 0}} onClick={openLocation}/>
          </div>
          <p className="mb-0">{business.location}</p>
        </div>
        {business.openHours.length > 0 && (
          <div className=" mt-5 ml-3 mr-5 open-hour-container">
            {business.openHours.map(open => (
              <div key={open.day} className="d-flex">
                {open.day === day ? (
                  <>
                    <span
                      className="pr-4 fw-bolder mb-2"
                      style={{width: '59px'}}
                    >
                      {open.day.slice(0, 3)}
                    </span>
                    <span className="pr-1 mb-2 fw-bolder">{open.opens}</span>
                    <span className="pr-1 mb-2 fw-bolder">-</span>
                    <span className="pr-4 mb-2 fw-bolder">{open.closes}</span>
                  </>
                ) : (
                  <>
                    <span
                      className="pr-4 mb-2 open-hour-item"
                      style={{width: '59px'}}
                    >
                      {open.day.slice(0, 3)}
                    </span>
                    <span className="pr-1 mb-2 open-hour-item">
                      {open.opens}
                    </span>
                    <span className="pr-1 mb-2 open-hour-item">-</span>
                    <span className="pr-4 mb-2 open-hour-item">
                      {open.closes}
                    </span>
                  </>
                )}
                {open.day === day && open.isOpen ? (
                  <span className="detail-open ml-auto mb-2">Open Now</span>
                ) : (
                  <span className="text-danger ml-auto mb-2">Closed Now</span>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="get-direction-respo-container px-0 col-12 col-md-6 h-100 mt-5 py-3 px-3">
          <div className="d-flex w-100 justify-content-between mb-3" onClick={openLocation}>
            <p className="get-direction-respo">GetDirections</p>
            <DirectionsOutlined/>
          </div>
          <div className="d-flex w-100 justify-content-between mb-3">
            <p className="get-direction-respo">
              Call {business.phoneNumber.map(phone => phone)}
            </p>
            <CallOutlined/>
          </div>
          {business.website && (
            <div className="d-flex w-100 justify-content-between mb-3">
              <p className="get-direction-respo">{business.website}</p>
              <LanguageOutlined/>
            </div>
          )}

          <div className="d-flex w-100 justify-content-center ">
            {business.description || business.specialization || business.history && (
              <Button
                size="large"
                disableElevation
                className="more-info rounded fs-6 text-capitalize"
                variant="outlined"
                onClick={handleClickOpen}
              >
                More Info
              </Button>
            )}
          </div>
        </div>
      </div>


      {/*Business description*/}

      <div>
        <Dialog fullScreen open={open} onClose={handleClose} TransitionComponent={Transition}>
          <AppBar className={classes.appBar} color="transparent">
            <Toolbar>
              <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="close">
                <CloseIcon/>
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Business Information
              </Typography>
            </Toolbar>
          </AppBar>
          <div className="p-3">
            {
              business.description && (
                <div className="my-3">
                  <h5>Description</h5>
                  <p>
                    {business.description}
                  </p>
                </div>
              )
            }
            {
              business.specialization && (
                <div className="my-3">
                  <h5>Description</h5>
                  <p>
                    {business.specialization}
                  </p>
                </div>
              )
            }
            {
              business.history && (
                <div className="my-3">
                  <h5>Since {business.establishedIn}</h5>
                  <p>
                    {business.history}
                  </p>
                </div>
              )
            }
          </div>
        </Dialog>
      </div>
    </>
  );
};

export default LocationAndBusinessInfo;
