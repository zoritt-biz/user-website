import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 120,
  },
});

const New = () => {
  const classes = useStyles();
  return (
    <div className="px-4 mt-5">
      <h3 className="mb-3">Whats New?</h3>
      <Grid container spacing={2} justify="center" className="mt-2">
        <Grid item xs={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="../images/image.jpg"
                title="New Posts"
              />
              <CardContent>
                <Typography gutterBottom variant="subtitle2">
                  Addis Bazar
                </Typography>
                <Typography gutterBottom variant="subtitle2">
                  Millennium hall
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="../images/image.jpg"
                title="New Posts"
              />
              <CardContent>
                <Typography gutterBottom variant="subtitle2">
                  Addis Bazar
                </Typography>
                <Typography gutterBottom variant="subtitle2">
                  Millennium hall
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image="../images/image.jpg"
                title="New Posts"
              />
              <CardContent>
                <Typography gutterBottom variant="subtitle2">
                  Addis Bazar
                </Typography>
                <Typography gutterBottom variant="subtitle2">
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
