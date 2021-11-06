import React from 'react';

import {Avatar, Box, Card, CardActionArea, CardContent, Typography,} from '@mui/material';

const SinglePost = ({post}) => {
  return (
    <Card>
      <CardActionArea>
        <Box
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
        </Box>
      </CardActionArea>
      <CardContent sx={{pb: 0}}>
        <Box display="flex" overflow="hidden" py={3}>
          <Avatar src={post.photos[0]}/>
          <Box>
            <Typography variant="caption" px={3} mb={0} sx={{width: '100%'}}>
              {post.description}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default SinglePost;
