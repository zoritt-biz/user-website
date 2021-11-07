import React from 'react';
import { Box, ImageList, ImageListItem, Typography } from '@mui/material';

const Photos = ({ business }) => {
  return (
    <>
      <Box bgcolor="white" mb={2} py={4}>
        <Typography variant="h5" mb={3}>
          Photos and Videos
        </Typography>
        {business.pictures.length > 0 ? (
          <Box display="flex" flexWrap="wrap" overflow="hidden">
            <ImageList sx={{ flexWrap: 'nowrap', width: '100%' }} cols={2}>
              {business.pictures.map((picture, index) => (
                <ImageListItem
                  key={index}
                  sx={{
                    maxWidth: '250px !important',
                    width: '42% !important',
                  }}
                >
                  <img src={picture} alt="Photos" />
                  {/* <GridListTileBar title={post.description} /> */}
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        ) : (
          <Box textAlign="center">No Photos</Box>
        )}
      </Box>
    </>
  );
};

export default Photos;
