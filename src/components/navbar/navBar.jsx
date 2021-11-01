import React, {useState} from 'react';
import logo from '../../assets/images/logo.png';
import navbarStyles from './navbar-styles';
import NavItems from './nav-items';
import {AppBar, Box, IconButton, Toolbar, Typography, useMediaQuery, useTheme,} from '@mui/material';
import {Close, Menu} from '@mui/icons-material';

const NavBar = () => {
  const classes = navbarStyles();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const [show, setShow] = useState(false);

  return (
    <Box sx={{flexGrow: 1}}>
      <AppBar position="fixed">
        <Toolbar
          sx={isDesktop ? {width: '1000px', py: 1, m: 'auto'} : {py: 1}}
        >
          <Box width="50px">
            <img src={logo} alt="logo" className={classes.logo}/>
          </Box>
          <Typography
            ml={1}
            variant="h4"
            component="div"
            sx={{flexGrow: 1}}
            className={classes.main}
          >
            ዞሪት
          </Typography>

          {isMobile ? (
            <IconButton size="large" onClick={() => setShow(!show)}>
              {show ? <Close/> : <Menu/>}
            </IconButton>
          ) : (
            <Box display="flex">
              <NavItems isMobile={isMobile}/>
            </Box>
          )}
        </Toolbar>
        {show && isMobile && <NavItems isMobile={isMobile}/>}
      </AppBar>
    </Box>
  );
};

export default NavBar;
