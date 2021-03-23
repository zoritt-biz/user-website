import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Favorite, LocationOn, Call, Language } from '@material-ui/icons';

const useStyles = makeStyles({
  media: {
    height: 320,
  },
  expand: {
    marginLeft: 'auto',
  },
  iconColor: {
    color: '#DF9C20',
  },
});

const Sponsored = ({ title }) => {
  const classes = useStyles();
  return (
    <Grid container spacing={2} justify="center" className="mt-2">
      <Grid item xs={12}>
        <Card>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image="../images/image.jpg"
              title="Sponsored posts"
            />
            <CardContent>
              <div className="d-flex">
                <Typography gutterBottom variant="h5">
                  {title}
                </Typography>
                <div className={`${classes.expand} p-0`}>
                  <Favorite className={classes.iconColor} />
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
