import React from 'react';

import ImageContent from './common/ImageContent';
import Description from './common/Description';
import Location from './common/Location';
import BusinessInfo from './common/BusinessInfo';
import LocationAndBusinessInfo from './common/LocationAndBusinessInfo';
import Events from './common/Events';
import RelatedBusiness from './common/RelatedBusiness';
import Photos from './common/Photos';
import Posts from './common/Posts';

const Detail = ({ business }) => {
  console.log(
    business.categories.map(category => category.parent),
    'business'
  );
  return (
    <div className="detail-page">
      <div className="img-container d-flex">
        {business.pictures.length === 1 ? (
          <>
            <img src={business.pictures[0]} alt="" className="h-100" />
            <img src="../images/zoritback.svg" alt="" className="h-100" />
            <img src="../images/zoritback.svg" alt="" className="h-100" />
            <img src="../images/zoritback.svg" alt="" className="h-100" />
            <img src="../images/zoritback.svg" alt="" className="h-100" />
          </>
        ) : (
          business.pictures.map((pic, index) => (
            <img key={index} src={pic} alt="" className="h-100" />
          ))
        )}
      </div>

      {/* <img src="../images/wow2.jpg" alt="" className="h-100" />
            <img src="../images/wow3.png" alt="" className="h-100" />
            <img src="../images/angla1.jpg" alt="" className="h-100" />
            <img src="../images/angla2.jpg" alt="" className="h-100" />
            <img src="../images/angla3.jpg" alt="" className="h-100" />
            <img src="../images/wow.jpg" alt="" className="h-100" /> */}

      {/*background image */}
      <div className="img-background"></div>
      {/* image content mobile + web */}
      <ImageContent business={business} />

      <div className="container-md">
        {/* description appear below image */}
        <Description business={business} />

        {/* location and business info web */}
        <LocationAndBusinessInfo business={business} />
        {/* location mobile */}
        <Location business={business} />

        {/* mobile + web */}
        <BusinessInfo business={business} />
        <Events business={business} />
        <Posts business={business} />
        <Photos business={business} />
        <RelatedBusiness business={business} />
      </div>
    </div>
  );
};

export default Detail;
