import React from 'react';
import {Box, Typography} from '@mui/material';
import appStyles from '../../app-styles';

const TopText = ({text}) => {
  const classes = appStyles();
  return (
    <Typography component={'span'}>
      <Box
        fontWeight="fontWeightBold"
        fontSize={50}
        textAlign="center"
        mb={4}
        className={classes.mainColor}
      >
        ዞሪት
      </Box>
      <Box
        fontWeight="fontWeightMedium"
        fontSize={25}
        textAlign="center"
        mb={1}
      >
        Welcome
      </Box>
      <Box textAlign="center" mb={4} sx={{opacity: '0.6'}}>
        {text}
      </Box>
    </Typography>
  );
};

export default TopText;
