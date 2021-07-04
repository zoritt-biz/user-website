import React from 'react';
import { Button } from '@material-ui/core';

const BottomText = ({ text1, text2 }) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex sign-up-container ">
        <p className="mb-0 mr-1">{text1}</p>
        <Button
          color="primary"
          size="large"
          className="p-0 text-capitalize button-height"
        >
          {text2}
        </Button>
      </div>
    </div>
  );
};

export default BottomText;
