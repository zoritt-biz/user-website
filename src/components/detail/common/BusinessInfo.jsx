import React from 'react';
import { Button } from '@material-ui/core';
import {
  CallOutlined,
  SearchOutlined,
  LanguageOutlined,
} from '@material-ui/icons';

const BusinessInfo = ({ business }) => {
  return (
    <>
      {/* business info */}
      <div className="bg-white mb-2 p-4 d-md-none">
        <p className="fs-5 fw-bold">Business Info</p>
        <div className="d-flex justify-content-between mb-4">
          <p className="get-direction-respo">
            Call {business.phoneNumber.map(phone => phone)}
          </p>
          <CallOutlined />
        </div>
        <div className="d-flex justify-content-between mb-4">
          <p className="get-direction-respo">Explore the Menu</p>
          <SearchOutlined />
        </div>

        <div className="d-flex justify-content-between mb-4">
          {business.website ? (
            <p className="get-direction-respo">{business.website}</p>
          ) : (
            <p className="get-direction-respo">No Email found</p>
          )}
          <LanguageOutlined />
        </div>
        <div className=" d-flex justify-content-center mb-3">
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
    </>
  );
};

export default BusinessInfo;
