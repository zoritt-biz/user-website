import React, { useEffect, useRef, useState } from "react";

import Description from "./common/description";
import LocationAndBusinessInfo from "./common/location-and-business-info";
import Events from "./common/events";
import RelatedBusiness from "./common/related-business";
import Photos from "./common/photos";
import Posts from "./common/posts";
import "./detail.css";

import { makeStyles } from "@mui/styles";
import {
  Alert,
  AppBar,
  Box,
  Container,
  Dialog,
  IconButton,
  Slide,
  Toolbar,
  Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import MyMapComponent from "./common/map";
import PreLoader from "../preloader/preloader";
import { useLazyQuery } from "@apollo/client";
import { GET_BUSINESS_MENUS } from "../../apollo/queries/business-queries";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  backgroundColor: "white",
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

let now = new Date();
var days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

const delay = 8000;

const Detail = ({ business }) => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const [
    getBusinessMenu,
    { loading: menuLoading, data: menuData, error: menuError },
  ] = useLazyQuery(GET_BUSINESS_MENUS);

  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openWorkingHours, setOpenWorkingHours] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const [center, setCenter] = useState(null);
  const [zoom, setZoom] = useState(15);

  useEffect(() => {
    setCenter({
      lat: business["lngLat"]["coordinates"][1],
      lng: business["lngLat"]["coordinates"][0],
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenWorkingHours = () => {
    setOpenWorkingHours(!openWorkingHours);
  };

  const handleOpenMenu = () => {
    getBusinessMenu({
      variables: {
        id: business._id,
      },
    });
    setOpenMenu(true);
  };

  const handleOpenMenuClose = () => {
    setOpenMenu(false);
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
    <Box mt={4} pt={4} position="relative">
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
              key={index}
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
            <img
              key={index}
              src={image}
              alt="business_picture"
              className="dashboard-pic"
            />
          ))}
        </Box>
      </Box>

      <Box mb={3} />
      <Container maxWidth="lg" sx={{ width: "100%", alignSelf: "end" }}>
        <Typography
          fontWeight="bold"
          overflow="hidden"
          whiteSpace="nowrap"
          textOverflow="ellipsis"
          variant="h4"
          mb={3}
        >
          {business.businessName}
        </Typography>
      </Container>

      <Container maxWidth="lg">
        {/* description appear below image */}
        <Description
          business={business}
          openLocation={handleClickOpen}
          openWorkingHours={handleOpenWorkingHours}
        />

        <LocationAndBusinessInfo
          business={business}
          openLocation={handleClickOpen}
          openMenu={handleOpenMenu}
        />

        <Box>
          <Typography fontWeight="bold" variant="h5">
            Category
          </Typography>
          <Box>
            {business.categories.map((cat, index) => (
              <Box key={index}>
                <Box>{cat.parent}</Box>
                <Box display="flex">
                  {cat.parent !== cat.name && (
                    <Box ml={2} display="flex">
                      <KeyboardArrowRightOutlinedIcon />
                      <Typography>{cat.name}</Typography>
                    </Box>
                  )}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
        {/*mobile + web*/}
        <Events business={business} />
        <Posts business={business} />
        <Photos business={business} />
        <RelatedBusiness category={business.categories[0]?.name} />
      </Container>

      {/*Location dialog*/}

      <Box>
        <Dialog
          fullScreen
          open={open}
          onClose={handleClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
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
          <Box height={"100%"} mt={5} pt={5}>
            <MyMapComponent
              isMarkerShown={true}
              loadingElement={<div style={{ height: `95%` }} />}
              containerElement={<div style={{ height: `95%` }} />}
              mapElement={<div style={{ height: `95%` }} />}
              center={{
                lat: business["lngLat"]["coordinates"][1],
                lng: business["lngLat"]["coordinates"][0],
              }}
              zoom={zoom}
              setCenter={setCenter}
              draggable={false}
            />
          </Box>
        </Dialog>
      </Box>

      <Box>
        <Dialog
          fullScreen
          open={openMenu}
          onClose={handleOpenMenuClose}
          TransitionComponent={Transition}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleOpenMenuClose}
                aria-label="close"
              >
                <Close />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Our Menu
              </Typography>
            </Toolbar>
          </AppBar>
          <Box>
            {menuLoading && <PreLoader />}
            {menuData &&
              menuData.businessById &&
              menuData.businessById.menu.map((m) => (
                <div key={m._id}>
                  <Container maxWidth="lg">
                    <Box my={3}>
                      <Typography variant="h5">{m.category}</Typography>
                    </Box>

                    <Box>
                      {m.menuList.map((l, index) => (
                        <>
                          <Box
                            key={index}
                            my={1}
                            style={{
                              width: "100%",
                              backgroundColor: "#D3D3D3",
                              borderRadius: "10px",
                            }}
                            p={2}
                            display="flex"
                          >
                            <Box>{l.name}</Box>
                            <Box
                              style={{ width: "100%" }}
                              display="flex"
                              justifyContent="right"
                            >
                              {l.price}
                            </Box>
                          </Box>
                        </>
                      ))}
                    </Box>
                  </Container>
                </div>
              ))}
            {menuError && (
              <Box width="100%">
                <Alert
                  onClose={() => {}}
                  severity="error"
                  variant="filled"
                  sx={{ width: "300px", margin: "auto" }}
                >
                  {menuError.message}
                </Alert>
              </Box>
            )}
          </Box>
        </Dialog>
      </Box>

      <Box>
        <Dialog open={openWorkingHours} onClose={handleOpenWorkingHours}>
          {business.openHours.length > 0 && (
            <Box mt={5} ml={3} mr={5} width="38%">
              {business.openHours.map((open) => (
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
                      sx={{ color: "rgba(5, 168, 130, 1)" }}
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
        </Dialog>
      </Box>
    </Box>
  );
};

export default Detail;
