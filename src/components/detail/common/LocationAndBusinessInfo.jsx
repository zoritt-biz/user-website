import React from 'react';
import {
  DirectionsOutlined,
  CallOutlined,
  SearchOutlined,
  LanguageOutlined,
} from '@material-ui/icons';
import { Button } from '@material-ui/core';
let now = new Date();
var days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
let day = days[now.getDay()];

const LocationAndBusinessInfo = ({ business }) => {
  return (
    <>
      {/* location and business info respo web*/}

      <div className="bg-white mb-2 p-4 d-md-flex d-none border-bottom">
        <div className="d-block">
          <p className="fs-5 fw-bold">Location</p>
          <img
            src="../images/wow-location.PNG"
            alt=""
            className="mb-4 detail-location-image"
          />
          <p className="mb-0">{business.location}</p>
        </div>
        {business.openHours.length > 0 && (
          <div className="d-none d-xl-block mt-5 ml-3 mr-5 open-hour-container">
            {business.openHours.map(open => (
              <div key={open.day} className="d-flex">
                {open.day === day ? (
                  <>
                    <span
                      className="pr-4 fw-bolder mb-2"
                      style={{ width: '59px' }}
                    >
                      {open.day.slice(0, 3)}
                    </span>
                    <span className="pr-1 mb-2 fw-bolder">{open.opens}</span>
                    <span className="pr-1 mb-2 fw-bolder">-</span>
                    <span className="pr-4 mb-2 fw-bolder">{open.closes}</span>
                  </>
                ) : (
                  <>
                    <span
                      className="pr-4 mb-2 open-hour-item"
                      style={{ width: '59px' }}
                    >
                      {open.day.slice(0, 3)}
                    </span>
                    <span className="pr-1 mb-2 open-hour-item">
                      {open.opens}
                    </span>
                    <span className="pr-1 mb-2 open-hour-item">-</span>
                    <span className="pr-4 mb-2 open-hour-item">
                      {open.closes}
                    </span>
                  </>
                )}
                {open.day === day && open.isOpen ? (
                  <span className="detail-open ml-auto mb-2">Open Now</span>
                ) : (
                  <span className="text-danger ml-auto mb-2">Closed Now</span>
                )}
              </div>
            ))}
          </div>
        )}

        <div className="get-direction-respo-container  d-block h-100 mt-5 ml-auto py-3 px-3">
          <div className="d-flex w-100 justify-content-between mb-3">
            <p className="get-direction-respo">GetDirections</p>
            <DirectionsOutlined />
          </div>
          <div className="d-flex w-100 justify-content-between mb-3">
            <p className="get-direction-respo">
              Call {business.phoneNumber.map(phone => phone)}
            </p>
            <CallOutlined />
          </div>
          <div className="d-flex w-100 justify-content-between mb-3">
            <p className="get-direction-respo">Explore the Menu</p>
            <SearchOutlined />
          </div>
          {business.website && (
            <div className="d-flex w-100 justify-content-between mb-3">
              <p className="get-direction-respo">{business.website}</p>
              <LanguageOutlined />
            </div>
          )}

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
