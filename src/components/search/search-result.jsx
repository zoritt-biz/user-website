import React from 'react';
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import searchResultStyles from './search-result-styles';
import { useHistory } from 'react-router';
import ArrowRightOutlinedIcon from '@mui/icons-material/ArrowRightOutlined';
import './search-result.css';

const SearchResult = ({
  image,
  businessName,
  location,
  phoneNumber,
  description,
  id,
}) => {
  const classes = searchResultStyles();
  const history = useHistory();

  return (
    <Grid item xs={12} md={6}>
      <Card
        sx={{ p: 0, mb: 3 }}
        className={classes.searchCard}
        onClick={() => {
          history.push(`/detail/${id}`);
        }}
      >
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
                  {businessName}
                </Typography>
              </Box>
              <Box display="flex" flexDirection="column" justifyContent="start">
                <Typography
                  variant="subtitle2"
                  mb={1}
                  display="block"
                  className={classes.searchCardText}
                >
                  {location}
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
                  {description}
                </Typography>
              </Box>
            </CardContent>
            <Box display="flex" justifyContent="flex-end" alignItems="center">
              <Typography variant="subtitle2" fontWeight="bold">
                More
              </Typography>
              <ArrowRightOutlinedIcon />
            </Box>
          </Box>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default SearchResult;
