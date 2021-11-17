import React, {useState} from 'react';
import navbarStyles from './navbar-styles';
import NavItems from './nav-items';
import {AppBar, Box, Container, IconButton, Toolbar, useMediaQuery, useTheme,} from '@mui/material';
import {Menu} from '@mui/icons-material';
import appStyles from '../../app-styles';
import NavContent from './nav-content';

const NavBar = () => {
  const classes = navbarStyles();
  const appstyle = appStyles();
  const [show, setShow] = useState(false);
  const handleNavbar = () => {
    setShow(!show);
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar position="fixed">
      <Container maxWidth="lg" sx={{px: 0}}>
        <Toolbar sx={{py: 1}}>
          {/* <Link to="/">
            <Box width="50px">
              <img src={logo} alt="logo" className={classes.logo} />
            </Box>
          </Link>

          <Typography ml={1} variant="h4" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" className={`${classes.main} ${appstyle.link}`}>
              ዞሪት
            </Link>
          </Typography> */}
          <NavContent/>

          {isMobile ? (
            <IconButton size="large" onClick={handleNavbar}>
              <Menu/>
            </IconButton>
          ) : (
            <Box display="flex" alignItems="center">
              <NavItems isMobile={isMobile}/>
            </Box>
          )}
        </Toolbar>
        {show && isMobile && (
          <NavItems isMobile={isMobile} closeDrawer={handleNavbar}/>
        )}
      </Container>
    </AppBar>
  );
};

export default NavBar;
