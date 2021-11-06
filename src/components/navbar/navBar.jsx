import React from 'react';
import logo from '../../assets/images/logo.png';
import navbarStyles from './navbar-styles';
import NavItems from './nav-items';
import {AppBar, Box, IconButton, Toolbar, Typography, useMediaQuery, useTheme,} from '@mui/material';
import {Close, Menu} from '@mui/icons-material';
import {Link} from "react-router-dom";

const NavBar = ({handleNavbar, show}) => {
  const classes = navbarStyles();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <AppBar position="fixed">
      <Toolbar
        sx={isDesktop ? {width: '1000px', py: 1, m: 'auto'} : {py: 1}}
      >
        <Link to="/">
          <Box width="50px">
            <img src={logo} alt="logo" className={classes.logo}/>
          </Box>
        </Link>

        <Typography
          ml={1}
          variant="h4"
          component="div"
          sx={{flexGrow: 1}}
          className={classes.main}
        >
          <Link to="/" style={{textDecoration: "none !important"}}>
            ዞሪት
          </Link>
        </Typography>

        {isMobile ? (
          <IconButton size="large" onClick={handleNavbar}>
            {show ? <Close/> : <Menu/>}
          </IconButton>
        ) : (
          <Box display="flex" alignItems="center">
            <NavItems isMobile={isMobile}/>
          </Box>
        )}
      </Toolbar>
      {show && isMobile && <NavItems isMobile={isMobile}/>}
    </AppBar>
  );
};

export default NavBar;
