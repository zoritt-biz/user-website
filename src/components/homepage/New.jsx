import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const New = () => {
  return (
    <div className="mt-5 container-md">
      <h3 className="mb-3">Whats New?</h3>
      <Grid container spacing={2} justify="center" className="mt-2">
        <Grid item xs={4}>
          <Card className="image-container">
            <CardActionArea>
              <CardMedia
                className="new-images"
                image="../images/image.jpg"
                title="New Posts"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  className="new-typography"
                  variant="subtitle2"
                >
                  Addis Bazar
                </Typography>
                <Typography
                  gutterBottom
                  className="new-typography"
                  variant="subtitle2"
                >
                  Millennium hall
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card className="image-container">
            <CardActionArea>
              <CardMedia
                className="new-images"
                image="../images/image.jpg"
                title="New Posts"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  className="new-typography"
                  variant="subtitle2"
                >
                  Addis Bazar
                </Typography>
                <Typography
                  gutterBottom
                  className="new-typography"
                  variant="subtitle2"
                >
                  Millennium hall
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card className="image-container">
            <CardActionArea>
              <CardMedia
                className="new-images"
                image="../images/image.jpg"
                title="New Posts"
              />
              <CardContent>
                <Typography
                  gutterBottom
                  className="new-typography"
                  variant="subtitle2"
                >
                  Addis Bazar
                </Typography>
                <Typography
                  gutterBottom
                  className="new-typography"
                  variant="subtitle2"
                >
                  Millennium hall
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
};

export default New;
