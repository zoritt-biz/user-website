import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button } from '@mui/material';
import navbarStyles from './navbar-styles';
import {
  EventSeatOutlined,
  HomeOutlined,
  SearchOutlined,
} from '@mui/icons-material';

const NavItems = ({ isMobile }) => {
  const classes = navbarStyles();
  return (
    <>
      {isMobile ? (
        <Box p="16px">
          <Link to="/" className={classes.mobileLink}>
            <HomeOutlined sx={{ mr: 1 }} fontSize="small" /> Home
          </Link>
          <Link to="/search" className={classes.mobileLink}>
            <SearchOutlined sx={{ mr: 1 }} fontSize="small" /> Search
          </Link>
          <Link to="/events" className={classes.mobileLink}>
            <EventSeatOutlined sx={{ mr: 1 }} fontSize="small" /> Events
          </Link>
          <Link to="/signin" className={classes.mobileAuthLink}>
            <Button color="inherit" fullWidth className={classes.login}>
              Login
            </Button>
          </Link>
          <Link to="/signup" className={classes.mobileLink}>
            <Button color="inherit" fullWidth className={classes.signup}>
              signup
            </Button>
          </Link>
        </Box>
      ) : (
        <>
          <Link to="/" className={classes.link}>
            Home
          </Link>
          <Link to="/search" className={classes.link}>
            Search
          </Link>
          <Link to="/events" className={classes.link}>
            Events
          </Link>
          <Link to="/signin" className={classes.link}>
            <Button
              color="inherit"
              className={classes.login}
              sx={{ px: 3, color: '#fff' }}
            >
              Login
            </Button>
          </Link>
          <Link to="/signup" className={classes.link}>
            <Button color="inherit" sx={{ px: 3 }} className={classes.signup}>
              signup
            </Button>
          </Link>
        </>
      )}
    </>
  );
};

export default NavItems;
