import React from 'react';
import { Box, Typography } from '@mui/material';

const TopText = ({ text }) => {
  return (
    <Typography component={'span'}>
      <Box
        fontWeight="fontWeightBold"
        fontSize={50}
        textAlign="center"
        className="ዞሪት mb-4"
      >
        ዞሪት
      </Box>
      <Box
        fontWeight="fontWeightMedium"
        fontSize={25}
        textAlign="center"
        className="mb-1"
      >
        Welcome
      </Box>
      <Box textAlign="center" className="signin-opacity mb-4">
        {text}
      </Box>
    </Typography>
  );
};

export default TopText;
