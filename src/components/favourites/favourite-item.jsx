import React, {useState} from 'react';

import {Box, Card, CardActionArea, CardContent, CardMedia, Grid, Typography,} from '@mui/material';
import {Favorite, FavoriteBorder} from '@mui/icons-material';
import {makeStyles} from '@mui/styles';
import appStyles from '../../app-styles';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    margin: 'auto',
    boxShadow: 'none',
    border: '1px solid #eeeeef',
    '&:hover': {
      boxShadow: ' 0 0 10px rgba(0, 0, 0, 0.1) !important',
    },
  },
  [theme.breakpoints.up('xl')]: {
    margin: '0 !important',
  },

  cardActionArea: {
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
    alignItems: 'start',
    justifyContent: 'start',
  },
  cardMedia: {
    height: '100%',
    width: '100%',
  },
  cardContent: {
    paddingTop: '0 !important',
    flex: '1 0 auto',
  },
}));

const FavouriteItem = ({image, title, place, phoneNumber, menu}) => {
  const classes = useStyles();
  const appClass = appStyles();
  const [favourite, setFavourite] = useState(false);

  const handleClick = () => {
    setFavourite(!favourite);
  };
  return (
    <Grid
      item
      xs={12}
      sx={{width: {sm: '70% !important'}}}
      mb={3}
      borderRadius={2}
    >
      <Card className={classes.card}>
        <CardActionArea className={classes.cardActionArea}>
          <Box height="200px" m={0} sx={{width: {sm: '250px'}}}>
            <CardMedia
              className={classes.cardMedia}
              image={image}
              title="Burger"
            />
          </Box>

          <Box
            display="flex"
            flexDirection="column"
            sx={{width: {sm: '73%'}}}
          >
            <CardContent className={classes.cardContent}>
              <Box display="flex" justifyContent="space-between" mt={2}>
                <Typography variant="body2" mb={2} ml={3}>
                  {title}
                </Typography>
                <Box>
                  {favourite ? (
                    <Favorite
                      onClick={handleClick}
                      className={appClass.mainColor}
                    />
                  ) : (
                    <FavoriteBorder
                      onClick={handleClick}
                      className={appClass.mainColor}
                    />
                  )}
                </Box>
              </Box>

              <Box display="flex" flexDirection="column" justifyContent="start">
                <Typography
                  variant="subtitle2"
                  ml={3}
                  mb={{md: 1}}
                  display="block"
                  sx={{opacity: '0.7'}}
                >
                  {place}
                </Typography>
                <Typography
                  variant="subtitle2"
                  ml={3}
                  mb={{md: 1}}
                  display="block"
                  sx={{opacity: '0.7'}}
                >
                  {phoneNumber}
                </Typography>
                <Typography
                  variant="subtitle2"
                  ml={3}
                  mb={{md: 1}}
                  display="block"
                  sx={{opacity: '0.7'}}
                >
                  {menu}
                </Typography>
              </Box>
            </CardContent>
          </Box>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default FavouriteItem;
