import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Drawer } from '@mui/material';
import navbarStyles from './navbar-styles';
import {
  EventSeatOutlined,
  HomeOutlined,
  SearchOutlined,
  CategoryOutlined,
} from '@mui/icons-material';

const NavItems = ({ isMobile, closeDrawer }) => {
  const classes = navbarStyles();
  return (
    <>
      {isMobile ? (
        <Drawer keepMounted anchor="top" open={isMobile} onClose={closeDrawer}>
          <Box px={1}>
            <Link to="/" className={classes.mobileLink}>
              <HomeOutlined sx={{ mr: 1 }} fontSize="small" /> Home
            </Link>
            <Link to="/search" className={classes.mobileLink}>
              <SearchOutlined sx={{ mr: 1 }} fontSize="small" /> Search
            </Link>
            <Link to="/events" className={classes.mobileLink}>
              <EventSeatOutlined sx={{ mr: 1 }} fontSize="small" /> Events
            </Link>
            <Link to="/categoriesList" className={classes.mobileLink}>
              <CategoryOutlined sx={{ mr: 1 }} fontSize="small" /> Categories
            </Link>
            {/*<Link to="/signin" className={classes.mobileAuthLink}>*/}
            {/*  <Button color="inherit" fullWidth className={classes.login}>*/}
            {/*    Login*/}
            {/*  </Button>*/}
            {/*</Link>*/}
            <Link to="https://business.zoritt.com" className={classes.authLink}>
              <Button color="inherit" fullWidth className={classes.business}>
                Add your business
              </Button>
            </Link>
            <Box my={2} />
          </Box>
        </Drawer>
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
          <Link to="/categoriesList" className={classes.link}>
            Categories
          </Link>
          <Link to="https://business.zoritt.com" className={classes.link}>
            <Button
              color="inherit"
              className={classes.businessDesktop}
              sx={{ px: 3, color: '#fff' }}
            >
              Add your business
            </Button>
          </Link>
          {/*<Link to="/signup" className={classes.link}>*/}
          {/*  <Button color="inherit" sx={{px: 3}} className={classes.signup}>*/}
          {/*    signup*/}
          {/*  </Button>*/}
          {/*</Link>*/}
        </>
      )}
    </>
  );
};

export default NavItems;
