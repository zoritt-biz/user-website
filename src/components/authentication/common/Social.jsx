import React from 'react';
import { Button } from '@material-ui/core';

const Social = ({ text1, text2 }) => {
  return (
    <div className="d-flex justify-content-between">
      <Button
        variant="outlined"
        startIcon={
          <i className="fab fa-facebook-f fa-lg facebook-sign-in mr-1"></i>
        }
        className="text-capitalize"
      >
        {text1}
      </Button>
      <Button
        variant="outlined"
        startIcon={<i className="fab fa-google google-sign-in fa-2x  "></i>}
        className="text-capitalize"
      >
        {text2}
      </Button>
    </div>
  );
};

export default Social;
