import React from 'react';
import About from './about';
import Discover from './discover';
import Social from './social';
import Business from './business';
import { Box, Container } from '@mui/material';

const Footer = () => {
  return (
    <Container maxWidth="md">
      <footer style={{ paddingTop: '20px', marginTop: '25px' }}>
        <Box display="flex" mb={3} borderBottom="1px solid #e1e1e1">
          <About />
          <Discover />
          <Business />
        </Box>
        <Social />
      </footer>
    </Container>
  );
};

export default Footer;
