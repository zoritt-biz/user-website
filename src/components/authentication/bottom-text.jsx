import React from 'react';
import {Box, Button, Typography} from '@mui/material';

const BottomText = ({text1, text2}) => {
  return (
    <Box display="flex" justifyContent="center">
      <Box display="flex" alignItems="center">
        <Typography variant="body2" mb={0} mr={1}>
          {text1}{' '}
        </Typography>
        <Button
          color="primary"
          size="large"
          px={1}
          sx={{
            textTransform: 'capitalize',
            height: '25px',
          }}
        >
          {text2}
        </Button>
      </Box>
    </Box>
  );
};

export default BottomText;
