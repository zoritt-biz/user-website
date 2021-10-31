import React from 'react';
import {Button} from '@material-ui/core';

const Social = ({text1, text2}) => {
  return (
    <div className="button-container pb-5 d-block d-md-flex">
      <Button
        variant="outlined"
        startIcon={
          <i className="fab fa-facebook-f fa-2x facebook-sign-in mr-1"/>
        }
        className="text-capitalize social-buttons"
      >
        {text1}
      </Button>
      <Button
        variant="outlined"
        startIcon={<i className="fab fa-google google-sign-in fa-2x\"/>}
        className="text-capitalize social-buttons"
      >
        {text2}
      </Button>
    </div>
  );
};

export default Social;
