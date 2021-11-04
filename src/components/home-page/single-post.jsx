import React from 'react';
// import { GridList, GridListTile, GridListTileBar } from '@mui/material';
import { Card, CardActionArea, CardContent } from '@mui/material';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

const SinglePost = ({ post }) => {
  return (
    <Link to="/posts" className="text-decoration-none">
      <Card className="h-100">
        <CardActionArea>
          <Box
            width="100%"
            overflow="hidden"
            position="relative"
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
        <CardContent sx={{ p: '15px 10px 5px !important' }}>
          <Typography
            variant="subtitle1"
            px={2}
            overflow="hidden"
            whiteSpace="nowrap"
            textOverflow="ellipsis"
          >
            {post.description}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default SinglePost;
