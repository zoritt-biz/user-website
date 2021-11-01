import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Box } from '@mui/material';
import navbarStyles from './navbar-styles';
import {
  HomeOutlined,
  SearchOutlined,
  EventSeatOutlined,
} from '@mui/icons-material';

const NavItems = ({ isMobile }) => {
  const classes = navbarStyles();
  return (
    <>
      {isMobile ? (
        <Box p="16px">
          <Link to="/" className={classes.mobilelink}>
            <HomeOutlined sx={{ mr: 1 }} fontSize="small" /> Home
          </Link>
          <Link to="/search" className={classes.mobilelink}>
            <SearchOutlined sx={{ mr: 1 }} fontSize="small" /> Search
          </Link>
          <Link to="/events" className={classes.mobilelink}>
            <EventSeatOutlined sx={{ mr: 1 }} fontSize="small" /> Events
          </Link>
          <Link to="/login" className={classes.mobileauthlink}>
            <Button color="inherit" fullWidth className={classes.login}>
              Login
            </Button>
          </Link>
          <Link to="/signup" className={classes.mobilelink}>
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
          <Link to="/login" className={classes.link}>
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
