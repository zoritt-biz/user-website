import React from 'react';
import { DirectionsOutlined } from '@material-ui/icons';

const Location = ({ business }) => {
  return (
    <>
      {/* location mobile */}
      <div className="bg-white mb-2 d-md-none">
        <img
          src="../images/wow-location.PNG"
          alt=""
          className="w-100 detail-location-image"
        />
        <div className="py-4">
          <div className="d-flex justify-content-between detail-border-bottom mb-5">
            <p className="get-direction-respo">GetDirections</p>
            <DirectionsOutlined />
          </div>
          <p className="mb-0">{business.location}</p>
          {/* <p className="mb-0">Edna Mall</p>
          <p className="mb-0">አዲስ አበባ</p> */}
        </div>
      </div>
    </>
  );
};

export default Location;
