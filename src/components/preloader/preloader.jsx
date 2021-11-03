import React from 'react';
import {Box, CircularProgress} from '@mui/material';

const PreLoader = () => {
  return (
    <Box textAlign="center">
      <CircularProgress/>
    </Box>
  );
};

export default PreLoader;
