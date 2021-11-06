import React from 'react';
import {Box, ImageList, ImageListItem, ImageListItemBar, Typography,} from '@mui/material';

const Posts = ({business}) => {
  return (
    <>
      <Box bgcolor="white" mb={2} py={4}>
        <Typography variant="h5" mb={3}>
          Posts
        </Typography>
        {business.posts.length > 0 ? (
          <Box display="flex" flexWrap="wrap" overflow="hidden">
            <ImageList sx={{flexWrap: 'nowrap', width: '100%'}} cols={1.5}>
              {business.posts.map(post =>
                post.photos.map((photo, index) => (
                  <ImageListItem
                    key={index}
                    sx={{
                      maxWidth: '250px !important',
                      width: '42% !important',
                    }}
                  >
                    <img src={photo} alt={post.description}/>
                    <ImageListItemBar title={post.description}/>
                  </ImageListItem>
                ))
              )}
            </ImageList>
          </Box>
        ) : (
          <Box textAlign="center">No Posts</Box>
        )}
      </Box>
    </>
  );
};

export default Posts;
