import React, {useEffect, useState} from 'react';
import {
  AccountTreeOutlined,
  CallOutlined,
  Close,
  DirectionsOutlined,
  Email,
  LanguageOutlined,
  Search
} from '@mui/icons-material';

import {makeStyles} from '@mui/styles';
import {AppBar, Box, Button, Dialog, IconButton, Slide, Toolbar, Typography,} from '@mui/material';
import MyMapComponent from './map';
import appStyles from '../../../app-styles';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

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
    color: 'black',
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const LocationAndBusinessInfo = ({business, openLocation, openMenu}) => {
  const classes = useStyles();
  const appStyle = appStyles();
  const [open, setOpen] = React.useState(false);
  const [center, setCenter] = useState(null);
  const [zoom, setZoom] = useState(15);
  const [openBranchesDialog, setOpenBranchesDialog] = useState(false);

  const getCoords = latLng => {
    setCenter(latLng);
    setZoom(18);
  };

  useEffect(() => {
    setCenter({
      lat: business['lngLat']['coordinates'][1],
      lng: business['lngLat']['coordinates'][0],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const openBranches = () => {
    setOpenBranchesDialog(!openBranchesDialog);
  }

  return (
    <>
      {/* location and business info respo web*/}
      <Box bgcolor="white" my={2}>
        <Box px={0} pr={{md: 3}}>
          <Typography variant="h5" mb={3}>
            Location
          </Typography>
          <Box position="relative">
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

        <Box mt={5} py={3} px={3} border="1px solid #e3e3e3" borderRadius="4px">
          <Box
            display="flex"
            justifyContent="space-between"
            mb={3}
            onClick={openLocation}
          >
            <p style={{cursor: 'pointer'}}>GetDirections</p>
            <DirectionsOutlined/>
          </Box>

          {business.phoneNumbers.length > 0 &&
          business.phoneNumbers.map((phone, index) => (
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb={3}
              key={index}
            >
              <Typography sx={{cursor: 'pointer'}}>
                <a href={`tel:${phone}`} className={appStyle.link}>
                  {phone}
                </a>
              </Typography>
              <a href={`tel:${phone}`} className={appStyle.link}>
                <CallOutlined/>
              </a>
            </Box>
          ))}

          {business.website && (
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb={3}
            >
              <a href={`${business.website}`} className={appStyle.link}>
                <span style={{cursor: 'pointer'}}>{business.website}</span>
              </a>
              <a href={`${business.website}`} className={appStyle.link}>
                <LanguageOutlined/>
              </a>
            </Box>
          )}
          {business.emails.length > 0 && (
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              mb={3}
            >
              <span style={{cursor: 'pointer'}}>
                {business.emails.map((email, index) => (
                  <Typography key={index}>{email}</Typography>
                ))}
              </span>
              <Email/>
            </Box>
          )}

          {business.menu.length > 0 && (
            <span
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '10px',
              }}
              onClick={openMenu}
            >
              <p style={{cursor: 'pointer'}} className="">
                Explore our Menu
              </p>
              <Search className={appStyle.link}/>
            </span>
          )}

          {business.branches.length > 0 && (
            <span
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '10px',
              }}
              onClick={openBranches}
            >
              <p style={{cursor: 'pointer'}} className="">
                See other branches
              </p>
              <AccountTreeOutlined className={appStyle.link}/>
            </span>
          )}

          <Box display="flex" width="100%" justifyContent="center">
            {(business.description ||
              business.specialization ||
              business.history) && (
              <Button
                size="large"
                className={classes.button}
                variant="outlined"
                onClick={handleClickOpen}
              >
                More Info
              </Button>
            )}
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
                <Close/>
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
                <h5>Specialization</h5>
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


      {/*Business Branches*/}

      <Box>
        <Dialog
          fullScreen
          open={openBranchesDialog}
          onClose={openBranches}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar} color="transparent">
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={openBranches}
                aria-label="close"
              >
                <Close/>
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Branches
              </Typography>
            </Toolbar>
          </AppBar>
          <Box p={3}>
            <Grid container spacing={3}>
              {business.branches && (
                business.branches.map(b => (
                  <Grid item xs={12} md={6}>
                    {console.log(b)}
                    <Card>
                      <Typography variant="h5" p={2}>
                        Location
                      </Typography>
                      <Box position="relative">
                        <MyMapComponent
                          isMarkerShown={true}
                          loadingElement={<div style={{height: `200px`}}/>}
                          containerElement={<div style={{height: `200px`}}/>}
                          mapElement={<div style={{height: `200px`}}/>}
                          center={
                            {
                              lat: b['lngLat']['coordinates'][1],
                              lng: b['lngLat']['coordinates'][0],
                            }
                          }
                          zoom={zoom}
                          setCenter={setCenter}
                          draggable={false}
                        />
                      </Box>
                      <Typography component="p" variant="h6" p={2}>
                        {b.location}
                      </Typography>
                    </Card>

                  </Grid>
                ))
              )}
            </Grid>
          </Box>
        </Dialog>
      </Box>
    </>
  );
};

export default LocationAndBusinessInfo;
