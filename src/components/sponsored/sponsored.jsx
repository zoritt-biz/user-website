import React, {useState} from 'react';
import {Box, Card, CardActionArea, CardContent, CardMedia, Typography,} from '@mui/material';
import {Call, Language, LocationOn} from '@mui/icons-material';
import appStyles from '../../app-styles';
import './sponsored.css';

const Sponsored = ({business}) => {
  const classes = appStyles();
  const [favourite, setFavourite] = useState(false);

  const handleClick = () => {
    setFavourite(!favourite);
  };

  return (
    <Card>
      <CardActionArea>
        {/* <Box
          width="100%"
          overflow="hidden"
          position="relative"
          className="sponsored-cont"
        >
          <Box className="sponsored-img" position="absolute">
            <img
              src={business.pictures[0]}
              alt="business_picture"
              className="sponsored-pic-back"
            />
          </Box>
          <Box className="sponsored-img" position="absolute">
            <img
              src={business.pictures[0]}
              alt="business_picture"
              className="sponsored-pic"
            />
          </Box>
        </Box> */}
        <CardMedia
          component="img"
          // height="300px"
          width="100%"
          image={business.pictures[0]}
          // sx={{ objectFit: 'contain' }}
          alt="sponsored images"
        />
      </CardActionArea>
      <CardContent>
        <Box display="flex">
          <Typography
            gutterBottom
            variant="h5"
            noWrap={true}
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
          >
            {business.businessName}
          </Typography>
        </Box>
        {business.location && (
          <Box display="flex" mb={3}>
            <LocationOn sx={{p: 0}} className={classes.mainColor}/>
            <Typography m={0} px={3} variant="subtitle2">
              {business.location}
            </Typography>
          </Box>
        )}

        {business.phoneNumber &&
        business.phoneNumber.length > 0 &&
        (business.phoneNumber.length > 1
          ? business.phoneNumber.map((number, index) => (
            <Box key={index} display="flex" justifyContent="space-between">
              <Call sx={{p: 0}}/>
              <Typography variant="subtitle2" m={0} px={3}>
                {number}
              </Typography>
            </Box>
          ))
          : business.phoneNumber.map((number, index) => (
            <Box key={index} display="flex">
              <Call sx={{p: 0}} className={classes.mainColor}/>
              <Typography m={0} px={3} variant="subtitle2">
                {number}
              </Typography>
            </Box>
          )))}

        {business.email && (
          <Box display="flex">
            <Language sx={{p: 0}}/>
            <Typography m={0} px={3} variant="subtitle2">
              {business.email}
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default Sponsored;
