import React from 'react';
import {Box, ImageList, ImageListItem, ImageListItemBar, Typography,} from '@mui/material';

const Events = ({business}) => {
  return (
    <>
      <Box bgcolor="white" mb={2} py={4} borderBottom="1px solid">
        <Typography variant="h5" mb={3}>
          Events
        </Typography>
        {business.events.length > 0 ? (
          <Box display="flex" flexWrap="wrap" overflow="hidden">
            <ImageList sx={{flexWrap: 'nowrap', width: '100%'}} cols={1.5}>
              {business.events.map(event =>
                event.photos.map((photo, index) => (
                  <ImageListItem
                    key={index}
                    sx={{
                      maxWidth: '250px !important',
                      width: '42% !important',
                    }}
                  >
                    <img src={photo} alt="Photos"/>
                    <ImageListItemBar title={event.description}/>
                  </ImageListItem>
                ))
              )}
            </ImageList>
          </Box>
        ) : (
          <Box textAlign="center">No Events</Box>
        )}
      </Box>
    </>
  );
};

export default Events;
