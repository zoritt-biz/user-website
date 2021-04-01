import React from 'react';

import ImageContent from './ImageContent';
import Description from './Description';
import Location from './Location';
import BusinessInfo from './BusinessInfo';
import LocationAndBusinessInfo from './LocationAndBusinessInfo';
import Events from './Events';
import RelatedBusiness from './RelatedBusiness';
import Photos from './Photos';

const Detail = () => {
  return (
    <div className="">
      <div className="img-container">
        <img src="../images/wow2.jpg" alt="" className="detail-img" />
        <img src="../images/wow3.png" alt="" className="detail-img" />
        <img src="../images/angla1.jpg" alt="" className="detail-img" />
        <img src="../images/angla2.jpg" alt="" className="detail-img" />
        <img src="../images/angla3.jpg" alt="" className="detail-img" />
        <img src="../images/wow.jpg" alt="" className="detail-img" />
      </div>

      {/* image */}
      <div className="img-background"></div>
      <ImageContent />
      <div className="container-md ">
        <Description />

        <LocationAndBusinessInfo />
        <Location />

        <BusinessInfo />
        <Events />
        <Photos />
        <RelatedBusiness />
      </div>
    </div>
  );
};

export default Detail;
