import React from 'react';
import About from './about';
import Discover from './discover';
import Social from './social';
import Business from './business';
import {Box} from '@mui/material';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

const Footer = () => {
  return (
    <Container>
      <footer>
        <Box
          pb={3}
          pt={3}
          mt={5}
          borderBottom="1px solid #e1e1e1"
          borderTop="1px solid #e1e1e1"
        >
          <Grid container spacing={3}>
            <Grid item xs={12} md={6} lg={4}>
              <About/>
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <Discover/>
            </Grid>

            <Grid item xs={12} md={6} lg={4}>
              <Business/>
            </Grid>
          </Grid>
        </Box>
        <Social/>
      </footer>
    </Container>
  );
};

export default Footer;
