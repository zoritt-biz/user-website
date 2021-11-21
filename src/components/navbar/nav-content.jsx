import React from 'react';
import {Link} from 'react-router-dom';
import {Box, Typography} from '@mui/material';
import logo from '../../assets/images/logo.png';
import navbarStyles from './navbar-styles';
import appStyles from '../../app-styles';

const NavContent = () => {
  const classes = navbarStyles();
  const appstyle = appStyles();
  return (
    <>
      <Link to="/">
        <Box width="50px">
          <img src={logo} alt="logo" className={classes.logo}/>
        </Box>
      </Link>

      <Typography ml={1} variant="h4" component="div" sx={{flexGrow: 1}}>
        <Link to="/" className={`${classes.main} ${appstyle.link}`}>
          ዞሪት
        </Link>
      </Typography>
    </>
  );
};

export default NavContent;
