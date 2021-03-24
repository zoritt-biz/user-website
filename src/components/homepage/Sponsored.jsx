import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Favorite, LocationOn, Call, Language } from '@material-ui/icons';

const Sponsored = ({ title }) => {
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
                  <Favorite className="sponsored-icon-color" />
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
