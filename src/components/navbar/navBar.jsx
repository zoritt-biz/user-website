import React, { useState } from 'react';
import logo from '../../assets/images/logo.png';
import navbarStyles from './navbar-styles';
import NavItems from './nav-items';
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { Close, Menu } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import appStyles from '../../app-styles';

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
      <Container maxWidth="lg" sx={{ px: 0 }}>
        <Toolbar sx={{ py: 1 }}>
          <Link to="/">
            <Box width="50px">
              <img src={logo} alt="logo" className={classes.logo} />
            </Box>
          </Link>

          <Typography ml={1} variant="h4" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" className={`${classes.main} ${appstyle.link}`}>
              ዞሪት
            </Link>
          </Typography>

          {isMobile ? (
            <IconButton size="large" onClick={handleNavbar}>
              {show ? <Close /> : <Menu />}
            </IconButton>
          ) : (
            <Box display="flex" alignItems="center">
              <NavItems isMobile={isMobile} />
            </Box>
          )}
        </Toolbar>
        {show && isMobile && <NavItems isMobile={isMobile} />}
      </Container>
    </AppBar>
  );
};

export default NavBar;
