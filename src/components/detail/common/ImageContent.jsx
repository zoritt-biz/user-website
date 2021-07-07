import React from 'react';

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
const ImageContent = ({business}) => {
  return (
    <>
      {/* image text */}
      <div className="img-content d-block d-md-flex position-absolute end-0 start-0 container-md">
        <div className="p-4">
          {/* website + mobile */}
          <p className="fs-1 fw-bold text-white mb-1">
            {business.businessName}
          </p>
          {/* website only */}
          <div className="d-none d-md-block">
            <p className="fs-6 fw-bold text-white mb-1">
              open 8:30am - 5:00pm
            </p>
            {/* <p className="mb-1 text-white">
              <span className="detail-open mr-2">Open</span>
              {business.openHours}
            </p> */}
            {business.openHours.length > 0 &&
            business.openHours.map(
              open =>
                open.day === day &&
                (open.isOpen ? (
                  <div key={open.day} className="d-flex">
                    <span className="detail-open mr-2">Open</span>
                    <span className="text-white mr-1">{open.opens} </span>
                    <span className="text-white mr-1">- </span>
                    <span className="text-white"> {open.closes}</span>
                  </div>
                ) : (
                  <div key={open.day} className="d-flex">
                    <span className="text-danger mr-2">Closed</span>
                    <span className="text-white mr-1">{open.opens} </span>
                    <span className="text-white mr-1">- </span>
                    <span className="text-white"> {open.closes}</span>
                  </div>
                ))
            )}
          </div>
        </div>

        {/* see all photos text on the website view */}
        {/*<div className="d-none d-md-block ml-auto mt-auto pb-4">*/}
        {/*  <Button*/}
        {/*    size="large"*/}
        {/*    disableElevation*/}
        {/*    className="text-white see-all rounded fs-6 text-capitalize"*/}
        {/*    variant="outlined"*/}
        {/*  >*/}
        {/*    See All Photos*/}
        {/*  </Button>*/}
        {/*</div>*/}
      </div>
    </>
  );
};

export default ImageContent;
