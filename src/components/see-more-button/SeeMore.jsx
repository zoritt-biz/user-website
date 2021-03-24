import React from 'react';
import Button from '@material-ui/core/Button';

const SeeMore = () => {
  return (
    <div className="mt-5 d-flex justify-content-center see-more-button-container pb-5">
      <Button
        size="large"
        disableElevation
        className="see-more-button rounded fs-6 text-capitalize text-white"
        variant="contained"
      >
        See More
      </Button>
    </div>
  );
};

export default SeeMore;
