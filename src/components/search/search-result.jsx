import React from 'react';
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
  Box,
} from '@mui/material';
import searchResultStyles from './search-result';

const SearchResult = ({ image, title, place, phoneNumber, menu, id }) => {
  const classes = searchResultStyles();

  return (
    <Grid item xs={12} lg={6}>
      <Card sx={{ p: 0, mb: 3 }} className={classes.searchCard}>
        <CardActionArea
          sx={{
            display: { xs: 'block', sm: 'flex' },
            justifyContent: 'start',
            alignItems: 'center',
          }}
        >
          <Box
            overflow="hidden"
            position="relative"
            className={`${classes.searchImageContainer} search-res-cont`}
          >
            <Box position="absolute" className="search-res">
              <img
                src={image}
                alt="business_picture"
                className="search-res-pic-back"
              />
            </Box>
            <Box position="absolute" className="search-res">
              <img
                src={image}
                alt="business_picture"
                className="search-res-pic"
              />
            </Box>
          </Box>

          <Box borderRadius={2} className={classes.searchDetail}>
            <CardContent className={classes.searchContent}>
              <Box display="flex" justifyContent="space-between" mt={3}>
                <Typography variant="h5" fontWeight="bold" display="block">
                  {title}
                </Typography>
              </Box>
              <Box display="flex" flexDirection="column" justifyContent="start">
                <Typography
                  variant="subtitle2"
                  mb={1}
                  display="block"
                  className={classes.searchCardText}
                >
                  {place}
                </Typography>
                <Typography
                  variant="subtitle2"
                  mb={1}
                  display="block"
                  className={classes.searchCardText}
                >
                  {phoneNumber}
                </Typography>
                <Typography
                  variant="subtitle2"
                  mb={1}
                  display="block"
                  overflow="hidden"
                  whiteSpace="nowrap"
                  textOverflow="ellipsis"
                  className={classes.searchCardText}
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

export default SearchResult;
