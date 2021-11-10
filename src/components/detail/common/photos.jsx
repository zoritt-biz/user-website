import React from 'react';
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Typography,
} from '@mui/material';
import appStyles from '../../../app-styles';

const Photos = ({ business }) => {
  const classes = appStyles();
  return (
    <>
      <Box bgcolor="white" mb={2} py={4}>
        <Typography variant="h5" mb={3}>
          Photos and Videos
        </Typography>
        {business.pictures.length > 0 ? (
          <Box
            display="flex"
            pb={2}
            className={classes.scrollbar}
            style={{ overflowX: 'scroll' }}
            height="100%"
          >
            {business.pictures.map((picture, index) => (
              <div
                key={index}
                className="col-8 col-sm-5 col-md-4 col-lg-3"
                style={{ marginRight: '16px' }}
              >
                <Card>
                  <CardActionArea>
                    <Box
                      width="100%"
                      overflow="hidden"
                      position="relative"
                      className="all-event-cont"
                    >
                      <Box position="absolute" className="all-event">
                        <img
                          src={picture}
                          alt="business_picture"
                          className="all-event-pic-back"
                        />
                      </Box>
                      <Box position="absolute" className="all-event">
                        <img
                          src={picture}
                          alt="business_picture"
                          className="all-event-pic"
                        />
                      </Box>
                    </Box>
                  </CardActionArea>
                </Card>
              </div>
            ))}
          </Box>
        ) : (
          <Box textAlign="center">No Photos</Box>
        )}
      </Box>
    </>
  );
};

export default Photos;
