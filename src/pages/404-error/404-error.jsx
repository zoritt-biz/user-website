import React from 'react';
import {Link} from 'react-router-dom';
import {Box} from '@mui/material';

const ErrorPage = () => (
  <Box pt={5} mt={5} textAlign="center">
    <h3>Page Not Found</h3>
    <Link to="/">Go to Home</Link>
  </Box>
);

export default ErrorPage;
