import React, {useState} from 'react';
import {Card, CardActionArea, CardContent, CardMedia, Typography,} from '@material-ui/core';
import {Call, Language, LocationOn,} from '@material-ui/icons';
import {Link} from 'react-router-dom';

const Sponsored = ({business}) => {
  const [favourite, setFavourite] = useState(false);

  const handleClick = () => {
    setFavourite(!favourite);
  };

  return (
    <Card>
      <CardActionArea className="sponsored-image-container">
        <div className="sponsored-cont w-100 overflow-hidden position-relative">
          <div className="sponsored-img position-absolute">
            <img
              src={business.pictures[0]}
              alt="business_picture"
              className="sponsored-pic-back"
            />
          </div>
          <div className="sponsored-img position-absolute">
            <img
              src={business.pictures[0]}
              alt="business_picture"
              className="sponsored-pic"
            />
          </div>
        </div>
      </CardActionArea>
      <CardContent>
        <div className="d-flex">
          <Typography gutterBottom variant="h5" className="text-nowrap text-truncate text-decoration-none ">
            {business.businessName}
          </Typography>
        </div>
        {business.location && (
          <div className="d-flex mb-3">
            <LocationOn className="p-0 sponsored-icon-color"/>
            <Typography className="m-0 px-3 subtitle2 text-decoration-none" variant="subtitle2">
              {business.location}
            </Typography>
          </div>
        )}

        {business.phoneNumber &&
        business.phoneNumber.length > 0 &&
        (business.phoneNumber.length > 1
          ? business.phoneNumber.map((number, index) => (
            <div key={index} className="d-flex justify-content-between">
              <Call className="p-0 "/>
              <Typography
                className="m-0 px-3 subtitle2 text-decoration-none"
                variant="subtitle2"
              >
                {number}
              </Typography>
            </div>
          ))
          : business.phoneNumber.map((number, index) => (
            <div key={index} className="d-flex">
              <Call className="p-0 sponsored-icon-color"/>
              <Typography
                className="m-0 px-3 subtitle2 text-decoration-none"
                variant="subtitle2"
              >
                {number}
              </Typography>
            </div>
          )))}

        {business.email && (
          <div className="d-flex">
            <Language className="p-0"/>
            <Typography className="m-0 px-3 text-decoration-none" variant="subtitle2">
              {business.email}
            </Typography>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Sponsored;
