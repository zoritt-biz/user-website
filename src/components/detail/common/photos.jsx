import React from 'react';
import { ImageList, ImageListItem, Typography, Box } from '@mui/material';

const Photos = ({ business }) => {
  return (
    <>
      <Box bgcolor="white" mb={2} py={4} borderBottom="1px solid">
        <Typography variant="h5" mb={3}>
          Photos and Videos
        </Typography>
        {business.pictures.length > 0 ? (
          <Box display="flex" flexWrap="wrap" overflow="hidden">
            <ImageList sx={{ flexWrap: 'nowrap', width: '100%' }} cols={1.5}>
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
