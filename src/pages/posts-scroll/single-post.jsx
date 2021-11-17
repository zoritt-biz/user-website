import React from 'react';

import {Avatar, Box, Card, CardActionArea, CardContent, CardMedia, Typography,} from '@mui/material';

const SinglePost = ({post}) => {
  return (
    <Card sx={{height: '100%'}}>
      <CardActionArea sx={{height: '100%'}}>
        {/* <Box
          width="100%"
          overflow="hidden"
          position="absolute"
          className="all-event-cont"
        >
          <Box position="absolute" className="all-event">
            <img
              src={post.photos[0]}
              alt="business_picture"
              className="all-event-pic-back"
            />
          </Box>
          <Box position="absolute" className="all-event">
            <img
              src={post.photos[0]}
              alt="business_picture"
              className="all-event-pic"
            />
          </Box>
        </Box> */}
        <CardMedia
          component="img"
          height="300px"
          width="100%"
          image={post.photos[0]}
          sx={{objectFit: 'contain'}}
          alt="posts"
        />
        <CardContent sx={{p: 0}}>
          <Box display="flex" overflow="hidden" p={2}>
            <Avatar src={post.photos[0]}/>
            <Box pl={2} width="100%">
              <Typography variant="caption">{post.description}</Typography>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default SinglePost;
