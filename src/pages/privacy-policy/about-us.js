import { Container, Box } from '@mui/material';
import React from 'react';
import BackButton from '../../components/back-button/back-button';

const AboutUs = () => {
  return (
    <Box py={5}>
      <Container maxWidth="lg">
        <BackButton />
        <h1>Welcome to ZORITT</h1>
        <p>
          ZORITT is registered under one of the products of BEJEROND TECH plc.
        </p>
        <h3>About us</h3>
        <p>
          ZORRIT Business Menu is an Ethiopian made online based website and
          application platform registered under BEJEROND TECH PLC. ZORRIT
          Business Menu is a unique and a whole new version of business
          platform. Our company is engaged in building the bridge that will
          benefit both service providers and customers by narrowing the gap in
          between. ZORRIT Business Menu builds any company's image using It's
          unique features and multiple platforms.{' '}
        </p>
      </Container>
    </Box>
  );
};

export default AboutUs;
