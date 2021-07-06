import React, { useState } from 'react';
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core';
import {
  Favorite,
  LocationOn,
  Call,
  Language,
  FavoriteBorder,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';

const Sponsored = ({ business }) => {
  const [favourite, setFavourite] = useState(false);

  const handleClick = () => {
    setFavourite(!favourite);
  };
  return (
    <Grid container spacing={2} justify="center" className="mt-2">
      <Grid item xs={12}>
        <Card>
          <CardActionArea className="sponsored-image-container">
            <Link
              to={`/detail/${business._id}`}
              className="text-decoration-none"
            >
              {/* on css there is background-size property  */}
              <CardMedia
                className="h-100 w-100"
                image={business.pictures && business.pictures[0]}
                title="Sponsored posts"
              />
            </Link>
          </CardActionArea>
          <CardContent>
            <div className="d-flex">
              <Typography gutterBottom variant="h5">
                {business.businessName}
              </Typography>
              <div className="ml-auto p-0">
                {favourite ? (
                  <Favorite
                    onClick={handleClick}
                    className="sponsored-icon-color"
                  />
                ) : (
                  <FavoriteBorder
                    onClick={handleClick}
                    className="sponsored-icon-color"
                  />
                )}
              </div>
            </div>
            {business.location && (
              <div className="d-flex mb-3">
                <LocationOn className="p-0 sponsored-icon-color" />
                <Typography className="m-0 px-3 subtitle2" variant="subtitle2">
                  {business.location}
                </Typography>
              </div>
            )}

            {business.phoneNumber &&
              business.phoneNumber.length > 0 &&
              (business.phoneNumber.length > 1
                ? business.phoneNumber.map((number, index) => (
                    <div key={index} className="d-flex justify-content-between">
                      <Call className="p-0 " />
                      <Typography
                        className="m-0 px-3 subtitle2"
                        variant="subtitle2"
                      >
                        {number}
                      </Typography>
                    </div>
                  ))
                : business.phoneNumber.map((number, index) => (
                    <div key={index} className="d-flex">
                      <Call className="p-0 sponsored-icon-color" />
                      <Typography
                        className="m-0 px-3 subtitle2 "
                        variant="subtitle2"
                      >
                        {number}
                      </Typography>
                    </div>
                  )))}

            {business.email && (
              <div className="d-flex">
                <Language className="p-0" />
                <Typography className="m-0 px-3" variant="subtitle2">
                  {business.email}
                </Typography>
              </div>
            )}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Sponsored;
