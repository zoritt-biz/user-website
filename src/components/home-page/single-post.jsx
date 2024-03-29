import React from 'react';
import {Box, Card, CardActionArea, CardContent, Typography,} from '@mui/material';
import {Link} from 'react-router-dom';
import appStyles from '../../app-styles';

const SinglePost = ({post}) => {
  const classes = appStyles();
  return (
    <Link to="/posts" className={classes.link}>
      <Card sx={{height: '100%'}}>
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
        <CardContent sx={{p: '15px 10px 5px !important'}}>
          <Box
            className={classes.boxWidth}
            overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis">
            <Typography
              variant="subtitle1"
              px={2}
              overflow="hidden"
              whiteSpace="nowrap"
              textOverflow="ellipsis"
            >
              {post.description}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
};

export default SinglePost;
