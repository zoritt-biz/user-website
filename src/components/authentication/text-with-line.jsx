import React from 'react';
import {Box, Typography} from '@mui/material';

const TextWithLine = () => {
  return (
    <Box display="flex" alignItems="center" mb={4}>
      <Box flex="1" height="1px" bgcolor="#d5d5d5" ml={5}/>
      <Typography px={2} mb={0} variant="caption">
        OR
      </Typography>
      <Box flex="1" height="1px" bgcolor="#d5d5d5" ml={5}/>
    </Box>
  );
};

export default TextWithLine;
