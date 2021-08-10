import React from 'react';

import {Grid} from '@material-ui/core';
import {CallOutlined, LanguageOutlined, LocationOnOutlined, Share,} from '@material-ui/icons';

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

const Description = ({business,openLocation}) => {
  return (
    <>
      <div className="bg-white d-md-flex d-none mb-2 px-4 py-5 border-bottom">
        <Grid container spacing={2}>
          <Grid
            item
            xs={3}
            className="d-flex justify-content-center description-grid-respo"
            onClick={openLocation}
          >
            <LocationOnOutlined className="mr-1 "/>
            <p className="mb-0 fs-6">Location</p>
          </Grid>
        </Grid>
      </div>
      {/* description  not mobile only*/}
      <div className="p-4 mb-2 bg-white d-md-none">
        {business.openHours.length > 0 &&
        business.openHours.map(
          open =>
            open.day === day &&
            (open.isOpen ? (
              <div key={open.day} className="d-flex mb-3">
                <span className="detail-open mr-2">Open</span>
                <span className="mr-1">{open.opens} </span>
                <span className="mr-1">- </span>
                <span> {open.closes}</span>
              </div>
            ) : (
              <div key={open.day} className="d-flex mb-3">
                <span className="text-danger mr-2">Closed</span>
                <span className="mr-1">{open.opens} </span>
                <span className="mr-1"> - </span>
                <span> {open.closes}</span>
              </div>
            ))
        )}

        <div className="d-flex mx-2 justify-content-between">
          {business.phoneNumber.length > 0 && (
            <div className="d-flex flex-column align-items-center">
              <a
                href={`tel:${business.phoneNumber[0]}`}
                className="d-flex text-decoration-none text-dark"
              >
                <CallOutlined
                  className="mb-1 detail-icons"
                  fontSize="large"
                />
              </a>

              <p className="mb-0 text-center">Call</p>
            </div>
          )}

          {business.website === '' ? null : (
            <div className="d-flex flex-column align-items-center">
              {business.website && (
                <a
                  href={`${business.website}`}
                  target="_blank"
                  className="d-flex justify-content-between text-decoration-none text-dark"
                >
                  <LanguageOutlined
                    className="mb-1 detail-icons"
                    fontSize="large"
                  />
                </a>
              )}
              <p className="mb-0 text-center">Website</p>
            </div>
          )}

          <div className="d-flex flex-column align-items-center">
            <LocationOnOutlined
              className="mb-1 detail-icons"
              fontSize="large"
              onClick={openLocation}
            />
            <p className="mb-0 text-center">Location</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;
