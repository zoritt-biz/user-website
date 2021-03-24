import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {
  Favorite,
  LocationOn,
  Call,
  Language,
  FavoriteBorder,
} from '@material-ui/icons';
import { IconButton } from '@material-ui/core';

const Sponsored = ({ title }) => {
  const [favourite, setFavourite] = useState(false);

  const handleClick = () => {
    setFavourite(!favourite);
  };
  return (
    <Grid container spacing={2} justify="center" className="mt-2">
      <Grid item xs={12}>
        <Card>
          <CardActionArea>
            <CardMedia
              className="sponsored-image"
              image="../images/image.jpg"
              title="Sponsored posts"
            />
            <CardContent>
              <div className="d-flex">
                <Typography gutterBottom variant="h5">
                  {title}
                </Typography>
                <div className="ml-auto p-0">
                  {' '}
                  {favourite ? (
                    <Favorite
                      onClick={handleClick}
                      className="sponsored-icon-color"
                    />
                  ) : (
                    <FavoriteBorder
                      onClick={handleClick}
                      className="sponsored-icon-color-border-color"
                    />
                  )}
                </div>
              </div>
              <div className="d-flex mb-3">
                <LocationOn className="p-0" />
                <Typography
                  className="m-0 px-3"
                  gutterBottom
                  variant="subtitle1"
                >
                  Bole, Medhanialem mall, 2nd floor
                </Typography>
              </div>

              <div className="d-flex justify-content-between">
                <div className="d-flex">
                  <Call className="p-0" />
                  <Typography
                    className="m-0 px-3"
                    gutterBottom
                    variant="subtitle1"
                  >
                    +251945654222
                  </Typography>
                </div>

                <div className="d-flex">
                  <Language className="p-0" />
                  <Typography
                    className="m-0 px-3"
                    gutterBottom
                    variant="subtitle1"
                  >
                    www.zoritt.com
                  </Typography>
                </div>
              </div>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Sponsored;
