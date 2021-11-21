import React from 'react';
import {Box, Button} from '@mui/material';
import appStyles from '../../app-styles';

const ButtonControl = ({text}) => {
  const classes = appStyles();
  return (
    <Box mb={4} display="flex" justifyContent="center">
      <Button
        type="submit"
        variant="contained"
        className={classes.mainColor}
        sx={{
          width: '300px',
          color: 'white !important',
          backgroundColor: '#bb7900 !important',
        }}
      >
        {text}
      </Button>
    </Box>
  );
};

export default ButtonControl;
