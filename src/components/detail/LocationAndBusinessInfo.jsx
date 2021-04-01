import React from 'react';
import {
  DirectionsOutlined,
  CallOutlined,
  SearchOutlined,
  LanguageOutlined,
} from '@material-ui/icons';
import { Button } from '@material-ui/core';

const LocationAndBusinessInfo = () => {
  return (
    <>
      {/* location and business info respo */}

      <div className="bg-white mb-2 p-4 d-md-flex d-none border-bottom">
        <div className="d-block">
          <p className="fs-5 fw-bold">Location</p>
          <img
            src="../images/wow-location.PNG"
            alt=""
            className="mb-4 detail-location-image"
          />
          <p className="mb-0">Lex Plaza, Haile Gebre Silase St</p>
          <p className="mb-0">Edna Mall</p>
          <p className="mb-0">አዲስ አበባ</p>
        </div>

        <div className="d-block w-50 h-100 mt-5 ml-auto py-3 px-3  get-direction-respo-container">
          <div className="d-flex w-100 justify-content-between mb-3">
            <p className="get-direction-respo">GetDirections</p>
            <DirectionsOutlined />
          </div>
          <div className="d-flex w-100 justify-content-between mb-3">
            <p className="get-direction-respo">Call +251 93 883 6493</p>
            <CallOutlined />
          </div>
          <div className="d-flex w-100 justify-content-between mb-3">
            <p className="get-direction-respo">Explore the Menu</p>
            <SearchOutlined />
          </div>

          <div className="d-flex w-100 justify-content-between mb-3">
            <p className="get-direction-respo">www.wowburger.ie</p>
            <LanguageOutlined />
          </div>

          <div className="d-flex w-100 justify-content-center ">
            <Button
              size="large"
              disableElevation
              className="more-info rounded fs-6 text-capitalize"
              variant="outlined"
            >
              More Info
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default LocationAndBusinessInfo;
