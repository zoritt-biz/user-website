import React from 'react';
import {Button} from '@material-ui/core';
import {CallOutlined, Email, LanguageOutlined} from '@material-ui/icons';

const BusinessInfo = ({business}) => {
  return (
    <>
      {/* business info mobile */}
      <div className="bg-white mb-2 py-4 d-md-none">
        <p className="fs-5 fw-bold">Business Info</p>
        {business.phoneNumber.length > 0 && (
          <div className="d-flex justify-content-between mb-2">
            <p className="get-direction-respo d-flex">
              {business.phoneNumber.map(phone => (
                <a
                  href={`tel:${phone}`}
                  className="d-flex mr-1 text-decoration-none text-dark"
                >
                  {phone}
                </a>
              ))}
            </p>
            {business.phoneNumber.map(phone => (
              <a
                href={`tel:${phone}`}
                className="d-flex text-decoration-none text-dark"
              >
                <CallOutlined/>
              </a>
            ))}
          </div>
        )}

        {business.website && (
          <a
            href={`${business.website}`}
            className="d-flex justify-content-between mb-2"
          >
            <p className="get-direction-respo text-decoration-none text-dark">
              {business.website}
            </p>
            <LanguageOutlined className="text-decoration-none text-dark"/>
          </a>
        )}
        {business.emails.length > 0 && (
          <a
            href={`${business.website}`}
            className="d-flex justify-content-between mb-2"
          >
            {/* <div className="d-flex justify-content-between mb-2"> */}
            <p className="get-direction-respo">
              {business.emails.map(email => (
                <span className="text-dark text-decoration-none mr-1">
                  {email}
                </span>
              ))}
            </p>
            <Email className="text-decoration-none text-dark"/>
            {/* </div> */}
          </a>
        )}
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
